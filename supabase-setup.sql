create extension if not exists pgcrypto;

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.workspace_members (
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'owner',
  created_at timestamptz not null default now(),
  primary key (workspace_id, user_id)
);

create table if not exists public.transactions (
  id text not null,
  data jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.transactions
add column if not exists workspace_id uuid references public.workspaces(id) on delete cascade;

alter table public.transactions
drop constraint if exists transactions_pkey;

alter table public.transactions
drop constraint if exists transactions_workspace_id_id_key;

alter table public.transactions
add constraint transactions_workspace_id_id_key unique (workspace_id, id);

create index if not exists transactions_workspace_id_idx
on public.transactions(workspace_id);

alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.transactions enable row level security;

drop policy if exists "Members can read their workspaces" on public.workspaces;
drop policy if exists "Members can read workspace memberships" on public.workspace_members;
drop policy if exists "Signed-in users can read transactions" on public.transactions;
drop policy if exists "Signed-in users can add transactions" on public.transactions;
drop policy if exists "Signed-in users can update transactions" on public.transactions;
drop policy if exists "Signed-in users can delete transactions" on public.transactions;
drop policy if exists "Workspace members can read transactions" on public.transactions;
drop policy if exists "Workspace members can add transactions" on public.transactions;
drop policy if exists "Workspace members can update transactions" on public.transactions;
drop policy if exists "Workspace members can delete transactions" on public.transactions;

create policy "Members can read their workspaces"
on public.workspaces
for select
to authenticated
using (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = workspaces.id
      and workspace_members.user_id = auth.uid()
  )
);

create policy "Members can read workspace memberships"
on public.workspace_members
for select
to authenticated
using (user_id = auth.uid());

create policy "Workspace members can read transactions"
on public.transactions
for select
to authenticated
using (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = transactions.workspace_id
      and workspace_members.user_id = auth.uid()
  )
);

create policy "Workspace members can add transactions"
on public.transactions
for insert
to authenticated
with check (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = transactions.workspace_id
      and workspace_members.user_id = auth.uid()
  )
);

create policy "Workspace members can update transactions"
on public.transactions
for update
to authenticated
using (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = transactions.workspace_id
      and workspace_members.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = transactions.workspace_id
      and workspace_members.user_id = auth.uid()
  )
);

create policy "Workspace members can delete transactions"
on public.transactions
for delete
to authenticated
using (
  exists (
    select 1
    from public.workspace_members
    where workspace_members.workspace_id = transactions.workspace_id
      and workspace_members.user_id = auth.uid()
  )
);

create or replace function public.ensure_default_workspace()
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  workspace uuid;
  user_email text;
begin
  if current_user_id is null then
    raise exception 'Not authenticated';
  end if;

  select workspace_id
  into workspace
  from public.workspace_members
  where user_id = current_user_id
  order by created_at
  limit 1;

  if workspace is null then
    select email
    into user_email
    from auth.users
    where id = current_user_id;

    insert into public.workspaces (name, owner_id)
    values (coalesce(user_email, 'My Workspace'), current_user_id)
    returning id into workspace;

    insert into public.workspace_members (workspace_id, user_id, role)
    values (workspace, current_user_id, 'owner');
  end if;

  update public.transactions
  set workspace_id = workspace
  where workspace_id is null
    and updated_by = current_user_id;

  return workspace;
end;
$$;

create or replace function public.touch_transaction()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  new.updated_by = auth.uid();
  return new;
end;
$$;

drop trigger if exists touch_transaction_trigger on public.transactions;

create trigger touch_transaction_trigger
before insert or update on public.transactions
for each row
execute function public.touch_transaction();
