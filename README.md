# Closing Desk Prototype

A browser-based real estate transaction tracker prototype for buyers, listings, deadlines, checklists, post-closing tasks, referrals, and Supabase-backed shared data.

## Files

- `index.html` - app markup
- `styles.css` - app styling
- `app.js` - app behavior and Supabase sync
- `manifest.webmanifest` - installable app settings
- `service-worker.js` - install/offline support
- `assets/` - app icons and images
- `supabase-setup.sql` - one-time Supabase table and policy setup

## Local Preview

Serve this folder with a static web server, then open the local URL in a browser.

## Workspace Database

The app connects to Supabase using the public project URL and publishable key in `app.js`. Run `supabase-setup.sql` in the Supabase SQL Editor before signing in and uploading local data.

The SQL setup creates private workspaces. Each signed-in user gets a default workspace, and transaction rows are limited to users who belong to that workspace.

To add a team member with their own private workspace, invite them from Supabase Authentication -> Users. When they accept the invite, Closing Desk shows a password setup form and creates a separate empty workspace for that account.

If Supabase signups are enabled, users can also create their own account from the Closing Desk sign-in panel. Each account gets a separate private workspace.

## Installable App

After deploying the app online, open the live URL in Safari on iPhone and use Share -> Add to Home Screen. On desktop Chrome, use the browser's install option when available.
