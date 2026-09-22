const STORAGE_KEY = "realtytrack-transactions-v1";
const PIPELINE_STORAGE_KEY = "closing-desk-pipeline-v1";
const CLOUD_SESSION_KEY = "realtytrack-supabase-session-v1";
const CLOUD_WORKSPACE_KEY = "closing-desk-workspace-v1";
const BACKGROUND_KEY = "realtytrack-background-v1";
const LOCAL_CHANGES_KEY = "realtytrack-local-changes-v1";
const LAST_SYNC_KEY = "realtytrack-last-sync-v1";
const LAST_UPLOAD_KEY = "realtytrack-last-upload-v1";
const COLLAPSED_SECTIONS_KEY = "closing-desk-collapsed-sections-v1";
const APP_VERSION = "80";
const AUTO_UPLOAD_DELAY_MS = 3500;
const FORM_AUTOSAVE_DELAY_MS = 900;
const AUTO_REFRESH_INTERVAL_MS = 10 * 60 * 1000;
const VERSION_CHECK_INTERVAL_MS = 30 * 60 * 1000;
const INSPECTION_CONTINGENCY_LABEL = "Inspection contingency ends";
const INSPECTION_NEGOTIATION_LABEL = "Inspection negotiation period ends";
const INSPECTION_FINAL_RESPONSE_LABEL = "Inspection take-it-or-leave-it window ends";
const SETTLEMENT_PREP_TASK_LABEL = "Settlement details and utility transfer reviewed with client";
const HOME_WARRANTY_DEADLINE_LABEL = "Home warranty ordered";
const HOME_WARRANTY_ORDER_TASK_LABEL = "Home warranty ordered";
const HOME_WARRANTY_CONVERT_TASK_LABEL = "Home warranty converted to buyer and invoice sent to title company";
const BUYER_ANNIVERSARY_REMINDER_LABEL = "1-year anniversary card and brownies reminder";
const NOTE_TYPES = ["General note", "Call", "Decision", "Loose end", "Client update", "Partner update"];
const SUPABASE_URL = "https://mronjitkktescqnxgmir.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6plbFbyAvwb8MinTC4L4eA_lXU5iLDJ";
const GOOGLE_CLIENT_ID = "592579416892-fof7lc05sa2vbm51juai570gim9ni8ti.apps.googleusercontent.com";
const GOOGLE_CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.events";
const BUYER_STATUSES = ["Under contract", "Inspection period", "Financing", "Clear to close", "Closed", "Failed"];
const LISTING_STATUSES = ["New listing", "Active listing", "Pending listing", "Closed listing", "Lost/canceled"];
const LISTING_PREP_STATUSES = ["New listing", "Active listing"];
const LISTING_PENDING_STATUSES = ["Pending listing"];
const CLOSED_STATUSES = ["Closed", "Closed listing"];
const FAILED_STATUSES = ["Failed", "Lost/canceled"];
const TASK_OWNERS = ["Agent", "Lisa", "Assistant", "Client", "Lender", "Title", "Co-op agent"];
const OPEN_CHECKLIST_PREVIEW_LIMIT = 5;
const PIPELINE_TYPES = {
  listing: "Future Listing",
  buyer: "Active Buyer",
};

const starterTransactions = [
  {
    id: 1,
    client: "Megan Carter",
    address: "214 Maple Ridge Lane",
    side: "Buyer",
    status: "Inspection period",
    workflow: "contract",
    lender: "Harbor Home Lending",
    title: "Keystone Title",
    settlement: "2026-06-18",
    deadlines: [
      ["Earnest money deposit due", "2026-05-27"],
      ["Inspection contingency ends", "2026-05-28"],
      ["Mortgage application due", "2026-05-30"],
      ["Mortgage commitment due", "2026-06-08"],
      ["Settlement date", "2026-06-18"],
    ],
    lastUpdate: "May 23",
    nextUpdate: "May 27",
    notes: "Buyer is concerned about roof age. Waiting on inspection report and seller disclosure follow-up.",
    documents: ["Agreement of Sale", "Seller Disclosure", "Inspection Report"],
    tasks: [
      ["Earnest money deposit confirmed", true, "Client"],
      ["Accounting settlement notice submitted", false, "Agent"],
      ["Inspection report reviewed", false, "Agent"],
      ["Reply to inspections sent", false, "Agent"],
      ["Mortgage application submitted", true, "Lender"],
      ["Final walk through scheduled in ShowingTime", false, "Agent"],
      ["Closing gift purchased", false, "Agent"],
    ],
    postClosingTasks: [
      ["Add to American Lifestyle Magazine contacts for mailings", false, "Agent"],
      ["Update mailing address in Cloze", false, "Agent"],
      ["Add tags per Cloze instructions", false, "Agent"],
      ["Add 1-week calendar reminder to check in and ask for referral", false, "Agent"],
      ["Add 1-month check-in calendar reminder", false, "Agent"],
      ["Add 1-year check-in calendar reminder", false, "Agent"],
      ["Add anniversary card with brownies reminder", false, "Agent"],
    ],
    contacts: [
      ["Megan Carter", "Client", "megan@example.com"],
      ["Tina Lloyd", "Lender", "tina@harbor.example"],
      ["James Porter", "Inspector", "james@homecheck.example"],
    ],
    finance: {
      salePrice: "485000",
      commissionPercent: "3",
    },
  },
  {
    id: 2,
    client: "Robert and Dana Wells",
    address: "89 Juniper Court",
    side: "Listing",
    status: "Financing",
    workflow: "contract",
    lender: "Buyer lender pending",
    title: "Summit Settlement Co.",
    settlement: "2026-06-07",
    deadlines: [
      ["Earnest money deposit due", "2026-05-26"],
      ["Inspection contingency ends", "2026-05-29"],
      ["Mortgage application due", "2026-05-30"],
      ["Mortgage commitment due", "2026-06-02"],
      ["Settlement date", "2026-06-07"],
    ],
    listingDeadlines: [
      ["Staging scheduled", "2026-05-05"],
      ["Photos/video scheduled", "2026-05-08"],
      ["Listing doc review date", "2026-05-10"],
      ["Coming soon date", "2026-05-12"],
      ["Active launch date", "2026-05-16"],
      ["Open House", "NA"],
      ["Home warranty ordered", "2026-05-18"],
      ["Target settlement date", "2026-06-07"],
    ],
    lastUpdate: "May 24",
    nextUpdate: "May 29",
    notes: "Seller wants repair invoices ready before final walkthrough. Confirm contractor completion this week.",
    documents: ["Executed Contract", "Lead Paint Disclosure", "Repair Invoice"],
    tasks: [
      ["Disclosure package complete", true, "Seller"],
      ["Accounting settlement notice submitted", false, "Agent"],
      ["Inspection response signed", true, "Agent"],
      ["Repairs scheduled", true, "Seller"],
      ["Final walk through scheduled in ShowingTime", false, "Agent"],
      ["Sign and lockbox removal scheduled", false, "Agent"],
    ],
    listingTasks: [
      ["Staging appointment scheduled", true, "Agent"],
      ["Photos/video scheduled", true, "Agent"],
      ["Listing documents reviewed", true, "Agent"],
      ["Listing added to Bright", true, "Agent"],
      ["Coming soon date confirmed", true, "Agent"],
      ["Active launch date confirmed", true, "Agent"],
      ["Home warranty ordered", true, "Agent"],
    ],
    postClosingTasks: [
      ["Update address in Cloze", false, "Agent"],
      ["If local: add tags per Cloze instructions", false, "Agent"],
      ["If not local: add only 20XX HUD tag", false, "Agent"],
    ],
    contacts: [
      ["Robert Wells", "Seller", "robert@example.com"],
      ["Dana Wells", "Seller", "dana@example.com"],
      ["Priya Shah", "Title", "priya@summit.example"],
    ],
    finance: {
      salePrice: "625000",
      commissionPercent: "3",
    },
  },
  {
    id: 3,
    client: "Anthony Brooks",
    address: "702 Chestnut Avenue",
    side: "Buyer",
    status: "Closed",
    workflow: "contract",
    lender: "First Street Mortgage",
    title: "Liberty Abstract",
    settlement: "2026-05-31",
    deadlines: [
      ["Earnest money deposit due", "2026-05-20"],
      ["Inspection contingency ends", "2026-05-22"],
      ["Mortgage application due", "2026-05-24"],
      ["Mortgage commitment due", "2026-05-27"],
      ["Settlement date", "2026-05-31"],
    ],
    lastUpdate: "May 25",
    nextUpdate: "May 30",
    notes: "Clear to close received. Buyer needs final cash-to-close confirmation and walkthrough checklist.",
    documents: ["Closing Disclosure", "Walkthrough Checklist", "Wire Instructions"],
    tasks: [
      ["Closing disclosure reviewed", true, "Client"],
      ["Accounting settlement notice submitted", true, "Agent"],
      ["Final walk through scheduled in ShowingTime", true, "Agent"],
      ["Closing gift purchased", false, "Agent"],
      ["Cash to close confirmed", false, "Lender"],
    ],
    postClosingTasks: [
      ["Add to American Lifestyle Magazine contacts for mailings", false, "Agent"],
      ["Update mailing address in Cloze", false, "Agent"],
      ["Add tags per Cloze instructions", false, "Agent"],
      ["Add 1-week calendar reminder to check in and ask for referral", false, "Agent"],
      ["Add 1-month check-in calendar reminder", false, "Agent"],
      ["Add 1-year check-in calendar reminder", false, "Agent"],
      ["Add anniversary card with brownies reminder", false, "Agent"],
    ],
    contacts: [
      ["Anthony Brooks", "Client", "anthony@example.com"],
      ["Nora Fields", "Lender", "nora@firststreet.example"],
      ["Cal Ames", "Co-op Agent", "cal@broker.example"],
    ],
    finance: {
      salePrice: "410000",
      commissionPercent: "3",
    },
  },
  {
    id: 4,
    client: "Simone Diaz",
    address: "1550 Orchard Street",
    side: "Listing",
    status: "Under contract",
    workflow: "contract",
    lender: "Buyer lender pending",
    title: "Civic Title Group",
    settlement: "2026-07-02",
    deadlines: [
      ["Earnest money deposit due", "2026-06-01"],
      ["Inspection contingency ends", "2026-06-08"],
      ["Mortgage application due", "2026-06-04"],
      ["Mortgage commitment due", "2026-06-18"],
      ["Settlement date", "2026-07-02"],
    ],
    listingDeadlines: [
      ["Staging scheduled", "2026-05-24"],
      ["Photos/video scheduled", "2026-05-26"],
      ["Listing doc review date", "2026-05-27"],
      ["Coming soon date", "2026-05-29"],
      ["Active launch date", "2026-06-01"],
      ["Open House", "2026-06-08"],
      ["Home warranty ordered", "2026-06-02"],
      ["Target settlement date", "2026-07-02"],
    ],
    lastUpdate: "May 22",
    nextUpdate: "May 28",
    notes: "Multiple addenda signed. Confirm deposit receipt and order municipal resale documents.",
    documents: ["Agreement of Sale", "HOA Packet", "Seller Net Sheet"],
    tasks: [
      ["Contract fully executed", true, "Agent"],
      ["Earnest money deposit confirmed", false, "Co-op Agent"],
      ["Accounting settlement notice submitted", false, "Agent"],
      ["HOA resale ordered", false, "Seller"],
      ["Title company introduced", true, "Title"],
      ["Sign and lockbox removal scheduled", false, "Agent"],
    ],
    listingTasks: [
      ["Staging appointment scheduled", true, "Agent"],
      ["Photos/video scheduled", true, "Agent"],
      ["Listing documents reviewed", true, "Agent"],
      ["Listing added to Bright", true, "Agent"],
      ["Coming soon date confirmed", true, "Agent"],
      ["Active launch date confirmed", true, "Agent"],
      ["Home warranty ordered", true, "Agent"],
      ["Sign and lockbox installed", true, "Agent"],
    ],
    postClosingTasks: [
      ["Update address in Cloze", false, "Agent"],
      ["If local: add tags per Cloze instructions", false, "Agent"],
      ["If not local: add only 20XX HUD tag", false, "Agent"],
    ],
    contacts: [
      ["Simone Diaz", "Seller", "simone@example.com"],
      ["Eli Turner", "Co-op Agent", "eli@homes.example"],
      ["Mara Klein", "Title", "mara@civic.example"],
    ],
    finance: {
      salePrice: "720000",
      commissionPercent: "3",
    },
  },
  {
    id: 5,
    client: "Nina Patel",
    address: "38 Laurel Bend",
    side: "Listing",
    status: "New listing",
    workflow: "listing",
    lender: "Not under contract",
    title: "Not ordered yet",
    settlement: "2026-07-15",
    deadlines: [
      ["Earnest money deposit due", ""],
      ["Inspection contingency ends", ""],
      ["Mortgage application due", ""],
      ["Mortgage commitment due", ""],
      ["Settlement date", ""],
    ],
    listingDeadlines: [
      ["Staging scheduled", "2026-05-29"],
      ["Photos/video scheduled", "2026-06-02"],
      ["Listing doc review date", "2026-06-03"],
      ["Coming soon date", "2026-06-05"],
      ["Active launch date", "2026-06-12"],
      ["Open House", "2026-06-14"],
      ["Home warranty ordered", "2026-06-06"],
      ["Target settlement date", "2026-07-15"],
    ],
    lastUpdate: "May 25",
    nextUpdate: "May 29",
    notes: "New listing prep is underway. Confirm staging window, media appointment, and coming soon timing.",
    documents: ["Listing Agreement", "Seller Disclosure", "Pre-listing Checklist"],
    tasks: [
      ["Contract details confirmed", false, "Agent"],
      ["Earnest money deposit confirmed", false, "Agent"],
      ["Accounting settlement notice submitted", false, "Agent"],
      ["Final walk through scheduled in ShowingTime", false, "Agent"],
      ["Inspection response signed", false, "Agent"],
      ["Sign and lockbox removal scheduled", false, "Agent"],
    ],
    listingTasks: [
      ["Staging scheduled", false, "Agent"],
      ["Photos/video scheduled", false, "Agent"],
      ["Listing documents reviewed", false, "Agent"],
      ["Listing added to Bright", false, "Agent"],
      ["Coming soon date confirmed", false, "Agent"],
      ["Active launch date confirmed", false, "Agent"],
      ["Home warranty ordered", false, "Agent"],
      ["Target settlement date reviewed", false, "Agent"],
    ],
    postClosingTasks: [
      ["Update address in Cloze", false, "Agent"],
      ["If local: add tags per Cloze instructions", false, "Agent"],
      ["If not local: add only 20XX HUD tag", false, "Agent"],
    ],
    contacts: [
      ["Nina Patel", "Seller", "nina@example.com"],
      ["Rae Moss", "Stager", "rae@stage.example"],
      ["Avery Reed", "Photographer", "avery@media.example"],
    ],
    finance: {
      salePrice: "550000",
      commissionPercent: "3",
    },
  },
];

let transactions = loadTransactions();
let pipelineItems = loadPipelineItems();
let activeFilter = "all";
let searchTerm = "";
let pipelineType = "listing";
let pipelineSearchTerm = "";
let pipelineFocusFilter = "focus";
let pipelinePriorityFilter = "all";
let pipelineDisplay = "compact";
const collapsedPipelineGroups = new Set(["long-term", "uncertain", "no-date"]);
let currentTransactionId = null;
let currentWorkflow = "contract";
let currentDetailTab = "dates";
let cloudSession = loadCloudSession();
let currentWorkspaceId = loadCloudWorkspace();
let closedRangeStart = "2026-01-01";
let closedRangeEnd = "2026-12-31";
let reportRangeStart = "2026-01-01";
let reportRangeEnd = "2026-12-31";
let actionReportPreset = "week";
let actionReportStart = "";
let actionReportEnd = "";
let googleAccessToken = "";
let googleTokenClient = null;
let currentEmailDraftMailto = "";
const ELECTRONIC_DEPOSIT_LINK = "https://keybox.payload.co/berkshire-hathaway-home-services-homesale/payment/all-pa-offices";
const GOOGLE_REVIEW_LINK = "https://g.page/r/CYNfNS3DZxlaEAI/review";
const ZILLOW_REVIEW_LINK = "https://zillow.com/reviews/write/?s=X1-ZUywg5ootgcgzt_1is64";
let hasLocalOnlyChanges = loadLocalOnlyChanges();
let lastCloudSync = loadLastCloudSync();
let lastCloudUpload = loadLastCloudUpload();
let calendarWeekOffset = 0;
let collapsedSections = loadCollapsedSections();
let openChecklistExpanded = false;
let pendingInviteSession = parseInviteSession();
let autoUploadTimer = null;
let autoUploadRunning = false;
let autoRefreshTimer = null;
let serviceWorkerRegistration = null;
let waitingServiceWorker = null;
const cloudRecordVersions = new Map();
const formAutoSaveTimers = new Map();

const views = {
  dashboard: document.querySelector("#dashboardView"),
  transactions: document.querySelector("#transactionsView"),
  pipeline: document.querySelector("#pipelineView"),
  deadlines: document.querySelector("#deadlinesView"),
  contacts: document.querySelector("#contactsView"),
  reports: document.querySelector("#reportsView"),
};

const formatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" });

function loadBackground() {
  try {
    return localStorage.getItem(BACKGROUND_KEY) || "classic";
  } catch {
    return "classic";
  }
}

function setBackground(value) {
  const background = value || "classic";
  document.body.dataset.background = background;
  const select = document.querySelector("#backgroundSelect");
  if (select) select.value = background;
  try {
    localStorage.setItem(BACKGROUND_KEY, background);
  } catch {
    // Appearance is optional; the app still works if the browser blocks saving it.
  }
}

function loadTransactions() {
  try {
    if (!window.localStorage) return structuredClone(starterTransactions);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(starterTransactions);
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : structuredClone(starterTransactions);
  } catch {
    return structuredClone(starterTransactions);
  }
}

function loadLocalOnlyChanges() {
  try {
    return localStorage.getItem(LOCAL_CHANGES_KEY) === "true";
  } catch {
    return false;
  }
}

function setLocalOnlyChanges(value) {
  hasLocalOnlyChanges = value;
  try {
    if (value) {
      localStorage.setItem(LOCAL_CHANGES_KEY, "true");
    } else {
      localStorage.removeItem(LOCAL_CHANGES_KEY);
    }
  } catch {
    // Sync status is helpful, but the app can still run without saving this flag.
  }
  if (value) scheduleAutoUpload();
  renderSyncState();
}

function loadLastCloudSync() {
  try {
    return localStorage.getItem(LAST_SYNC_KEY) || "";
  } catch {
    return "";
  }
}

function setLastCloudSync() {
  lastCloudSync = new Date().toISOString();
  try {
    localStorage.setItem(LAST_SYNC_KEY, lastCloudSync);
  } catch {
    // The visible status can still update for this session.
  }
  renderSyncState();
}

function loadLastCloudUpload() {
  try {
    return localStorage.getItem(LAST_UPLOAD_KEY) || "";
  } catch {
    return "";
  }
}

function setLastCloudUpload() {
  lastCloudUpload = new Date().toISOString();
  try {
    localStorage.setItem(LAST_UPLOAD_KEY, lastCloudUpload);
  } catch {
    // The visible status can still update for this session.
  }
  renderSyncState();
}

function loadCollapsedSections() {
  try {
    const saved = localStorage.getItem(COLLAPSED_SECTIONS_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? new Set(parsed) : new Set();
  } catch {
    return new Set();
  }
}

function saveCollapsedSections() {
  try {
    localStorage.setItem(COLLAPSED_SECTIONS_KEY, JSON.stringify([...collapsedSections]));
  } catch {
    // Section state is a convenience only.
  }
}

function sectionKeyFor(panel, index) {
  const title = panel.querySelector(".panel-header h2")?.textContent || `section-${index}`;
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function setupCollapsiblePanels() {
  document.querySelectorAll("#dashboardView .panel, #reportsView .report-panel, #reportsView .action-report-panel").forEach((panel, index) => {
    const header = panel.querySelector(":scope > .panel-header");
    if (!header) return;

    const key = panel.dataset.collapseKey || sectionKeyFor(panel, index);
    panel.dataset.collapseKey = key;

    let button = header.querySelector(".panel-collapse-button");
    if (!button) {
      button = document.createElement("button");
      button.className = "panel-collapse-button";
      button.type = "button";
      button.dataset.collapsePanel = key;
      header.append(button);
    }

    const collapsed = collapsedSections.has(key);
    panel.classList.toggle("panel-collapsed", collapsed);
    button.textContent = collapsed ? "Expand" : "Collapse";
    button.setAttribute("aria-expanded", String(!collapsed));
  });
}

function formatDateTime(value) {
  if (!value) return "Not yet";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function currentUserLabel() {
  return cloudSession?.user?.email || "Local user";
}

function markTransactionUpdated(transaction) {
  transaction.updatedAt = new Date().toISOString();
  transaction.updatedBy = currentUserLabel();
}

function renderDetailUpdated(transaction) {
  const detailUpdated = document.querySelector("#detailUpdated");
  if (!detailUpdated) return;
  detailUpdated.textContent = transaction.updatedAt
    ? `Last updated by ${transaction.updatedBy || "Unknown"} · ${formatDateTime(transaction.updatedAt)}`
    : "No update history yet";
}

function loadPipelineItems() {
  try {
    if (!window.localStorage) return [];
    const saved = localStorage.getItem(PIPELINE_STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTransactions(options = {}) {
  const markLocal = options.markLocal !== false;
  try {
    if (!window.localStorage) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    if (markLocal) setLocalOnlyChanges(true);
    return true;
  } catch {
    return false;
  }
}

function savePipelineItems(options = {}) {
  try {
    localStorage.setItem(PIPELINE_STORAGE_KEY, JSON.stringify(pipelineItems));
    if (options.markLocal !== false) setLocalOnlyChanges(true);
    return true;
  } catch (error) {
    console.warn("Unable to save pipeline items", error);
    return false;
  }
}

function cloudRecords() {
  return [
    ...transactions.map((transaction) => ({
      id: String(transaction.id),
      data: transaction,
    })),
    ...pipelineItems.map((item) => ({
      id: `pipeline-${item.id}`,
      data: { ...item, recordType: "pipeline" },
    })),
  ];
}

function recordUpdatedAt(record) {
  const value = record?.data?.updatedAt || record?.updatedAt || record?.data?.createdAt || record?.createdAt || "";
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : 0;
}

function recordIdForData(data) {
  if (!data) return "";
  return data.recordType === "pipeline" ? `pipeline-${data.id}` : String(data.id);
}

function rememberCloudRecordVersion(recordId, data) {
  if (!recordId || !data) return;
  cloudRecordVersions.set(String(recordId), data.updatedAt || data.createdAt || "");
}

function applyCloudRecords(records) {
  cloudRecordVersions.clear();
  records.forEach((row) => rememberCloudRecordVersion(row.id || recordIdForData(row.data), row.data));
  const all = records.map((row) => row.data);
  transactions = all.filter((item) => item?.recordType !== "pipeline");
  pipelineItems = all.filter((item) => item?.recordType === "pipeline");
  saveTransactions({ markLocal: false });
  savePipelineItems({ markLocal: false });
}

function loadCloudSession() {
  try {
    const saved = localStorage.getItem(CLOUD_SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function loadCloudWorkspace() {
  try {
    return localStorage.getItem(CLOUD_WORKSPACE_KEY) || "";
  } catch {
    return "";
  }
}

function saveCloudWorkspace(workspaceId) {
  currentWorkspaceId = workspaceId || "";
  try {
    if (workspaceId) {
      localStorage.setItem(CLOUD_WORKSPACE_KEY, workspaceId);
    } else {
      localStorage.removeItem(CLOUD_WORKSPACE_KEY);
    }
  } catch {
    // Workspace can still be used in memory for this session.
  }
  renderSyncState();
}

function saveCloudSession(session) {
  cloudSession = session;
  if (session) {
    localStorage.setItem(CLOUD_SESSION_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(CLOUD_SESSION_KEY);
    saveCloudWorkspace("");
  }
  renderSyncState();
}

function parseInviteSession() {
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const queryParams = new URLSearchParams(window.location.search);
  const params = hashParams.has("access_token") ? hashParams : queryParams;
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  const type = params.get("type");

  if (params.get("error_description")) {
    window.setTimeout(() => showToast(params.get("error_description")), 300);
    return null;
  }

  if (!accessToken || !refreshToken || !["invite", "signup", "recovery"].includes(type)) return null;
  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type: params.get("token_type") || "bearer",
    expires_in: Number(params.get("expires_in") || 3600),
    type,
  };
}

function clearInviteUrl() {
  if (!window.history?.replaceState) return;
  const url = new URL(window.location.href);
  ["access_token", "refresh_token", "token_type", "expires_in", "type"].forEach((key) => url.searchParams.delete(key));
  url.hash = "";
  window.history.replaceState(null, document.title, `${url.pathname}${url.search}`);
}

function prepareInviteSetup() {
  if (!pendingInviteSession) return;
  if (pendingInviteSession.type === "signup") {
    saveCloudSession(pendingInviteSession);
    pendingInviteSession = null;
    clearInviteUrl();
    saveCloudWorkspace("");
    transactions = [];
    pipelineItems = [];
    saveTransactions({ markLocal: false });
    savePipelineItems({ markLocal: false });
    ensureCloudWorkspace()
      .then(() => loadCloudTransactions())
      .then(() => startAutoRefreshPrompts())
      .then(() => showToast("Account confirmed. Your private workspace is ready."))
      .catch((error) => {
        showToast("Account confirmed. Sign in again if the workspace does not load.");
        console.error(error);
      });
    return;
  }
  saveCloudSession(null);
  saveCloudWorkspace("");
  transactions = [];
  pipelineItems = [];
  saveTransactions({ markLocal: false });
  savePipelineItems({ markLocal: false });
  setLocalOnlyChanges(false);
  renderAll();
  renderSyncState();
}

async function completeInviteSetup(password) {
  if (!pendingInviteSession?.access_token) {
    showToast("Invitation link expired. Send a new invite and try again.");
    return;
  }

  const user = await supabaseRequest("/auth/v1/user", {
    method: "PUT",
    headers: { Authorization: `Bearer ${pendingInviteSession.access_token}` },
    body: JSON.stringify({ password }),
  }, false);

  saveCloudSession({
    access_token: pendingInviteSession.access_token,
    refresh_token: pendingInviteSession.refresh_token,
    token_type: pendingInviteSession.token_type || "bearer",
    expires_in: pendingInviteSession.expires_in || 3600,
    user: user?.user || user,
  });
  pendingInviteSession = null;
  clearInviteUrl();
  saveCloudWorkspace("");
  await ensureCloudWorkspace();
  await loadCloudTransactions();
  startAutoRefreshPrompts();
  showToast("Account set up. This workspace starts separate from Lisa's data.");
}

async function supabaseRequest(path, options = {}, useAuth = true) {
  const headers = {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (useAuth && cloudSession?.access_token) {
    headers.Authorization = `Bearer ${cloudSession.access_token}`;
  }

  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const message = await response.text();
    const error = new Error(message || `Supabase request failed: ${response.status}`);
    error.status = response.status;
    error.body = message;
    throw error;
  }

  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function supabaseErrorMessage(error, fallback = "Supabase sync failed.") {
  const body = error?.body || error?.message || "";
  if (error?.status === 401 || error?.status === 403 || body.includes("JWT")) {
    return "Phone sign-in needs to be refreshed. Sign out, sign back in, then tap Refresh.";
  }
  if (error?.status === 404 || body.includes("transactions") || body.includes("workspaces") || body.includes("ensure_default_workspace") || body.includes("schema cache")) {
    return "Supabase workspace setup is not ready. Run the updated SQL setup, then sign out and sign back in.";
  }
  if (body.includes("Failed to fetch") || body.includes("NetworkError")) {
    return "Could not reach Supabase. Check your connection and try Refresh again.";
  }
  return fallback;
}

async function signInToCloud(email, password) {
  const session = await supabaseRequest("/auth/v1/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }, false);
  saveCloudSession(session);
  saveCloudWorkspace("");
  await ensureCloudWorkspace();
  if (hasLocalOnlyChanges) {
    await uploadLocalTransactions({ automatic: true });
  } else {
    await loadCloudTransactions();
  }
  startAutoRefreshPrompts();
  showToast("Signed in. Workspace connected.");
}

async function createCloudAccount(email, password) {
  const redirectTo = window.location.origin && window.location.origin !== "null"
    ? window.location.origin
    : "https://realestatesales-ten.vercel.app";
  const result = await supabaseRequest(`/auth/v1/signup?redirect_to=${encodeURIComponent(redirectTo)}`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }, false);

  const session = result?.session || (result?.access_token ? result : null);
  if (!session?.access_token) {
    showToast("Account created. Check your email to confirm it, then sign in.");
    return;
  }

  saveCloudSession(session);
  saveCloudWorkspace("");
  transactions = [];
  pipelineItems = [];
  saveTransactions({ markLocal: false });
  savePipelineItems({ markLocal: false });
  await ensureCloudWorkspace();
  await loadCloudTransactions();
  startAutoRefreshPrompts();
  showToast("Account created. Your private workspace is ready.");
}

function signupErrorMessage(error) {
  const body = error?.body || error?.message || "";
  const lower = body.toLowerCase();
  const readableBody = readableErrorBody(body);

  if (lower.includes("signup") && lower.includes("disabled")) {
    return "Supabase still has email signups disabled. Check Authentication > Providers > Email.";
  }
  if (lower.includes("already") || lower.includes("registered")) {
    return "That email already has an account. Use Sign in instead.";
  }
  if (lower.includes("rate limit")) {
    return "Supabase email rate limit was reached. Wait a bit, then try again.";
  }
  if (lower.includes("password")) {
    return "Supabase rejected that password. Try at least 8 characters.";
  }
  if (lower.includes("redirect")) {
    return "Supabase needs the app URL added under Authentication > URL Configuration.";
  }
  return readableBody ? `Signup failed: ${readableBody}` : "Account could not be created. Check Supabase Auth logs for the exact reason.";
}

function readableErrorBody(body) {
  return String(body || "")
    .replace(/[{}"]/g, "")
    .replace(/,/g, ", ")
    .replace(/:/g, ": ")
    .slice(0, 180);
}

function syncErrorMessage(error, fallback) {
  const readableBody = readableErrorBody(error?.body || error?.message || "");
  return readableBody ? `${fallback} ${readableBody}` : fallback;
}

async function sendPasswordReset(email) {
  const redirectTo = window.location.origin && window.location.origin !== "null"
    ? window.location.origin
    : "https://realestatesales-ten.vercel.app";
  await supabaseRequest(`/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  }, false);
  showToast("Password reset email sent. Check your inbox.");
}

async function ensureCloudWorkspace() {
  if (!cloudSession?.access_token) return "";
  if (currentWorkspaceId) return currentWorkspaceId;
  const workspaceId = await supabaseRequest("/rest/v1/rpc/ensure_default_workspace", {
    method: "POST",
    body: JSON.stringify({}),
  });
  saveCloudWorkspace(workspaceId);
  return workspaceId;
}

async function signOutOfCloud() {
  try {
    if (cloudSession?.access_token) {
      await supabaseRequest("/auth/v1/logout", { method: "POST" });
    }
  } catch {
    // Local sign-out should still happen if the remote session is already expired.
  }
  window.clearInterval(autoRefreshTimer);
  window.clearTimeout(autoUploadTimer);
  saveCloudSession(null);
  showToast("Signed out. Local browser data is still available.");
}

async function loadCloudTransactions(options = {}) {
  if (!cloudSession?.access_token) return;
  if (options.confirmReplace && hasLocalOnlyChanges) {
    const confirmed = window.confirm("This browser has local changes that may not be in this workspace yet. Refresh will replace what you see with the workspace version. Click Cancel and use Upload local data first if you need to keep those local changes.");
    if (!confirmed) {
      showToast("Refresh canceled. Upload local data first if needed.");
      return;
    }
  }

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    const rows = await supabaseRequest(`/rest/v1/transactions?select=id,data&workspace_id=eq.${encodeURIComponent(workspaceId)}&order=updated_at.desc`);
    applyCloudRecords(rows);
    renderAll();
    setLocalOnlyChanges(false);
    setLastCloudSync();
    renderSyncState();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Could not refresh shared data. Sign out and sign back in on this device."));
    console.error(error);
  }
}

async function confirmCloudRecordIsCurrent(recordId, localData, label) {
  if (!cloudSession?.access_token) return true;
  const seenUpdatedAt = cloudRecordVersions.get(String(recordId)) || localData?.updatedAt || localData?.createdAt || "";

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return true;
    const rows = await supabaseRequest(`/rest/v1/transactions?select=data&id=eq.${encodeURIComponent(String(recordId))}&workspace_id=eq.${encodeURIComponent(workspaceId)}&limit=1`);
    const cloudData = rows?.[0]?.data;
    if (!cloudData) return true;

    const cloudTime = recordUpdatedAt({ data: cloudData });
    const seenTime = Date.parse(seenUpdatedAt);
    const safeSeenTime = Number.isFinite(seenTime) ? seenTime : 0;
    if (cloudTime <= safeSeenTime + 1000) return true;

    const updatedBy = cloudData.updatedBy || "someone else";
    const updatedAt = formatDateTime(cloudData.updatedAt || cloudData.createdAt);
    const confirmed = window.confirm(`${label} was updated by ${updatedBy} at ${updatedAt} after you opened it.\n\nClick OK to save your changes anyway, or Cancel to refresh first so you do not overwrite their update.`);
    if (confirmed) return true;

    await loadCloudTransactions();
    showToast("Refreshed latest shared data. Reopen the item before editing.");
    return false;
  } catch (error) {
    showToast("Could not check for newer shared changes. Saved locally; try Refresh before continuing.");
    console.error(error);
    return false;
  }
}

async function syncTransactionToCloud(transaction) {
  saveTransactions({ markLocal: !cloudSession?.access_token });
  if (currentTransactionId === transaction.id) {
    renderDetailUpdated(transaction);
  }
  if (!cloudSession?.access_token) return;

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    const recordId = String(transaction.id);
    const canOverwrite = await confirmCloudRecordIsCurrent(recordId, transaction, transaction.client || "This transaction");
    if (!canOverwrite) return;
    markTransactionUpdated(transaction);
    saveTransactions({ markLocal: false });
    if (currentTransactionId === transaction.id) {
      renderDetailUpdated(transaction);
    }
    await supabaseRequest(`/rest/v1/transactions?id=eq.${encodeURIComponent(String(transaction.id))}&workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
    await supabaseRequest("/rest/v1/transactions", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        id: String(transaction.id),
        workspace_id: workspaceId,
        data: transaction,
      }),
    });
    rememberCloudRecordVersion(recordId, transaction);
    setLocalOnlyChanges(false);
    setLastCloudSync();
    setLastCloudUpload();
    renderSyncState();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Saved locally, but cloud sync failed."));
    console.error(error);
  }
}

async function syncPipelineItemToCloud(item) {
  savePipelineItems({ markLocal: !cloudSession?.access_token });
  if (!cloudSession?.access_token) return;

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    const cloudId = `pipeline-${item.id}`;
    const canOverwrite = await confirmCloudRecordIsCurrent(cloudId, item, item.client || "This pipeline item");
    if (!canOverwrite) return;
    item.updatedAt = new Date().toISOString();
    item.updatedBy = currentUserLabel();
    savePipelineItems({ markLocal: false });
    await supabaseRequest(`/rest/v1/transactions?id=eq.${encodeURIComponent(cloudId)}&workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
    await supabaseRequest("/rest/v1/transactions", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        id: cloudId,
        workspace_id: workspaceId,
        data: { ...item, recordType: "pipeline" },
      }),
    });
    rememberCloudRecordVersion(cloudId, item);
    setLocalOnlyChanges(false);
    setLastCloudSync();
    setLastCloudUpload();
    renderSyncState();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Saved locally, but pipeline cloud sync failed."));
    console.error(error);
  }
}

async function deletePipelineItemFromCloud(id) {
  if (!cloudSession?.access_token) return;

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    await supabaseRequest(`/rest/v1/transactions?id=eq.${encodeURIComponent(`pipeline-${id}`)}&workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
    setLocalOnlyChanges(false);
    setLastCloudSync();
    setLastCloudUpload();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Deleted locally, but pipeline cloud delete failed."));
    console.error(error);
  }
}

async function deleteTransactionFromCloud(id) {
  if (!cloudSession?.access_token) return;

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    await supabaseRequest(`/rest/v1/transactions?id=eq.${encodeURIComponent(String(id))}&workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
    setLocalOnlyChanges(false);
    setLastCloudSync();
    setLastCloudUpload();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Deleted locally, but cloud delete failed."));
    console.error(error);
  }
}

async function clearCloudTransactions() {
  if (!cloudSession?.access_token) return;

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    await supabaseRequest(`/rest/v1/transactions?workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" },
    });
    setLocalOnlyChanges(false);
    setLastCloudSync();
    setLastCloudUpload();
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Local data cleared, but cloud clear failed."));
    console.error(error);
  }
}

async function uploadLocalTransactions(options = {}) {
  if (!cloudSession?.access_token) {
    showToast("Sign in before uploading local data.");
    return;
  }

  if (!options.automatic) {
    const confirmed = window.confirm("Merge local backup is only needed for offline edits or imported backup data. Normal changes auto-save.\n\nContinue merging this browser's local data into the shared workspace?");
    if (!confirmed) {
      showToast("Merge canceled. Auto-save is still on.");
      return;
    }
  }

  if (!transactions.length && !pipelineItems.length) {
    if (!options.automatic) showToast("There is no local transaction data to upload.");
    return;
  }

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    const uploadedAt = new Date().toISOString();
    transactions.forEach((transaction) => {
      transaction.updatedAt = transaction.updatedAt || uploadedAt;
      transaction.updatedBy = transaction.updatedBy || currentUserLabel();
    });
    pipelineItems.forEach((item) => {
      item.updatedAt = item.updatedAt || uploadedAt;
      item.updatedBy = item.updatedBy || currentUserLabel();
    });
    saveTransactions({ markLocal: false });
    savePipelineItems({ markLocal: false });
    const localRecords = cloudRecords();
    const cloudRows = await supabaseRequest(`/rest/v1/transactions?select=id,data&workspace_id=eq.${encodeURIComponent(workspaceId)}`);
    const cloudById = new Map((cloudRows || []).map((row) => [String(row.id), row]));
    const recordsToUpload = localRecords.filter((record) => {
      const cloudRecord = cloudById.get(String(record.id));
      return !cloudRecord || recordUpdatedAt(record) >= recordUpdatedAt(cloudRecord);
    });

    for (const record of recordsToUpload) {
      await supabaseRequest(`/rest/v1/transactions?id=eq.${encodeURIComponent(record.id)}&workspace_id=eq.${encodeURIComponent(workspaceId)}`, {
        method: "DELETE",
        headers: { Prefer: "return=minimal" },
      });
      await supabaseRequest("/rest/v1/transactions", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          id: record.id,
          workspace_id: workspaceId,
          data: record.data,
        }),
      });
    }
    setLocalOnlyChanges(false);
    setLastCloudUpload();
    setLastCloudSync();
    await loadCloudTransactions();
    const skipped = localRecords.length - recordsToUpload.length;
    const message = skipped
      ? `Uploaded ${recordsToUpload.length} local item${recordsToUpload.length === 1 ? "" : "s"}; kept ${skipped} newer cloud item${skipped === 1 ? "" : "s"}.`
      : options.automatic ? "Local changes uploaded automatically." : "Local transactions and pipeline merged to Supabase.";
    showToast(message);
  } catch (error) {
    showToast(supabaseErrorMessage(error, syncErrorMessage(error, options.automatic ? "Auto-upload failed. Use Upload local data." : "Upload failed.")));
    console.error(error);
  }
}

function scheduleAutoUpload() {
  if (!cloudSession?.access_token || autoUploadRunning) return;
  window.clearTimeout(autoUploadTimer);
  autoUploadTimer = window.setTimeout(autoUploadLocalChanges, AUTO_UPLOAD_DELAY_MS);
}

async function autoUploadLocalChanges() {
  if (!cloudSession?.access_token || !hasLocalOnlyChanges || autoUploadRunning) return;
  autoUploadRunning = true;
  showToast("Uploading local changes...");
  try {
    await uploadLocalTransactions({ automatic: true });
  } finally {
    autoUploadRunning = false;
  }
}

async function refreshCloudIfSafe(options = {}) {
  if (!cloudSession?.access_token || pendingInviteSession) return;
  if (hasLocalOnlyChanges) {
    scheduleAutoUpload();
    if (options.prompt) showToast("Local changes are being uploaded before refresh.");
    return;
  }
  await loadCloudTransactions({ silent: true });
  if (options.prompt) showToast("Workspace refreshed with latest data.");
}

function initializeCloudSync() {
  startAutoRefreshPrompts();
  if (!cloudSession?.access_token || pendingInviteSession) return;
  if (hasLocalOnlyChanges) {
    scheduleAutoUpload();
    showToast("Local changes found. Auto-uploading now.");
  } else {
    refreshCloudIfSafe();
  }
}

function refreshWhenReturningToApp() {
  if (document.visibilityState !== "visible") return;
  if (hasLocalOnlyChanges) scheduleAutoUpload();
  else refreshCloudIfSafe();
}

function startAutoRefreshPrompts() {
  window.clearInterval(autoRefreshTimer);
  autoRefreshTimer = window.setInterval(() => {
    if (!cloudSession?.access_token || pendingInviteSession) return;
    if (hasLocalOnlyChanges) {
      scheduleAutoUpload();
      showToast("Local changes found. Auto-uploading now.");
      return;
    }
    refreshCloudIfSafe({ prompt: true });
  }, AUTO_REFRESH_INTERVAL_MS);
}

function renderSyncState() {
  const signedIn = Boolean(cloudSession?.access_token);
  const status = document.querySelector("#syncStatus");
  const health = document.querySelector("#syncHealth");
  const details = document.querySelector("#syncDetails");
  const help = document.querySelector("#syncHelp");
  const authForm = document.querySelector("#authForm");
  const inviteForm = document.querySelector("#inviteForm");
  const syncActions = document.querySelector("#syncActions");
  const uploadLocalButton = document.querySelector("#uploadLocalButton");

  if (!status || !health || !details || !help || !authForm || !inviteForm || !syncActions) return;
  if (uploadLocalButton) uploadLocalButton.classList.toggle("needs-save", signedIn && hasLocalOnlyChanges);

  if (pendingInviteSession) {
    const isRecovery = pendingInviteSession.type === "recovery";
    status.textContent = isRecovery ? "Reset password" : "Set up invited account";
    health.className = "sync-health warning";
    health.textContent = isRecovery ? "Create a new password" : "Create a password to finish the invite";
    details.textContent = "";
    help.textContent = isRecovery
      ? "Enter a new password for this account."
      : "This will create a separate workspace with no existing transaction data.";
    authForm.hidden = true;
    inviteForm.hidden = false;
    syncActions.hidden = true;
  } else if (signedIn) {
    status.textContent = `Signed in${cloudSession.user?.email ? ` as ${cloudSession.user.email}` : ""}`;
    health.className = `sync-health ${hasLocalOnlyChanges ? "warning" : "synced"}`;
    health.textContent = hasLocalOnlyChanges
      ? "Local changes not uploaded yet"
      : `Workspace current${lastCloudSync ? ` · refreshed ${dateLabel(lastCloudSync.slice(0, 10))}` : ""}`;
    details.textContent = `Last refreshed: ${formatDateTime(lastCloudSync)} · Last uploaded: ${formatDateTime(lastCloudUpload)}`;
    help.textContent = hasLocalOnlyChanges
      ? "Local changes are being auto-saved. Use Merge local backup only for offline edits or imported backups."
      : "Auto-save is on. Refresh before editing if someone else may have made changes.";
    authForm.hidden = true;
    inviteForm.hidden = true;
    syncActions.hidden = false;
  } else {
    status.textContent = "Local mode";
    health.className = "sync-health local";
    health.textContent = hasLocalOnlyChanges ? "Saved on this browser only" : "Not connected";
    details.textContent = "";
    help.textContent = "Sign in or create an account to use a private workspace.";
    authForm.hidden = false;
    inviteForm.hidden = true;
    syncActions.hidden = true;
  }
  updateAccessScreen();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function promptForAppUpdate() {
  if (!waitingServiceWorker) return;
  const confirmed = window.confirm(`Closing Desk version ${APP_VERSION} is ready. Reload now to update the app?`);
  if (!confirmed) {
    showToast("New version ready. Close and reopen the app when you are ready.");
    return;
  }
  waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
}

function watchForAppUpdates(registration) {
  serviceWorkerRegistration = registration;
  if (registration.waiting) {
    waitingServiceWorker = registration.waiting;
    promptForAppUpdate();
  }
  registration.addEventListener("updatefound", () => {
    const installingWorker = registration.installing;
    if (!installingWorker) return;
    installingWorker.addEventListener("statechange", () => {
      if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
        waitingServiceWorker = installingWorker;
        promptForAppUpdate();
      }
    });
  });
  window.setInterval(() => registration.update(), VERSION_CHECK_INTERVAL_MS);
}

function safeResetForm(form) {
  if (form && typeof form.reset === "function") form.reset();
}

function scheduleFormAutoSave(key, callback, options = {}) {
  window.clearTimeout(formAutoSaveTimers.get(key));
  if (options.pending) options.pending(true);
  formAutoSaveTimers.set(key, window.setTimeout(() => {
    formAutoSaveTimers.delete(key);
    callback();
    if (options.pending) options.pending(false);
  }, FORM_AUTOSAVE_DELAY_MS));
}

function updateAccessScreen() {
  const signedIn = Boolean(cloudSession?.access_token);
  const needsLogin = !signedIn || Boolean(pendingInviteSession);
  const loginScreen = document.querySelector("#loginScreen");
  const loginSlot = document.querySelector("#loginFormSlot");
  const panelHome = document.querySelector("#syncPanelHome");
  const syncPanel = document.querySelector("#syncPanel");
  if (!loginScreen || !loginSlot || !panelHome || !syncPanel) return;

  document.body.classList.toggle("login-required", needsLogin);
  loginScreen.hidden = !needsLogin;
  const target = needsLogin ? loginSlot : panelHome;
  if (syncPanel.parentElement !== target) target.append(syncPanel);
}

function updateGoogleStatus(message) {
  const status = document.querySelector("#googleCalendarStatus");
  if (status) status.textContent = message || (googleAccessToken ? "Connected" : "Not connected");
}

function setGoogleSyncButtonState(state, label) {
  const button = document.querySelector("#syncGoogleButton");
  if (!button) return;

  button.disabled = state === "syncing";
  button.classList.toggle("syncing", state === "syncing");
  button.classList.toggle("synced", state === "synced");
  button.textContent = label || "Sync dates to Google";

  if (state === "synced") {
    window.clearTimeout(setGoogleSyncButtonState.timer);
    setGoogleSyncButtonState.timer = window.setTimeout(() => {
      button.classList.remove("synced");
      button.textContent = "Sync dates to Google";
    }, 3200);
  }
}

function initGoogleCalendar() {
  if (!window.google?.accounts?.oauth2) {
    showToast("Google Calendar is still loading. Try again in a moment.");
    return false;
  }

  if (!googleTokenClient) {
    googleTokenClient = google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: GOOGLE_CALENDAR_SCOPE,
      callback: (response) => {
        if (response.error) {
          showToast("Google Calendar connection failed.");
          updateGoogleStatus("Not connected");
          return;
        }
        googleAccessToken = response.access_token;
        updateGoogleStatus("Connected");
        showToast("Google Calendar connected.");
      },
    });
  }

  return true;
}

function connectGoogleCalendar() {
  if (!initGoogleCalendar()) return;
  googleTokenClient.requestAccessToken({ prompt: googleAccessToken ? "" : "consent" });
}

function activeCalendarDeadlines(transaction, workflow = currentWorkflow) {
  return activeDeadlines(transaction, workflow)
    .filter((entry) => (
      deadlineDate(entry) &&
      deadlineDate(entry) !== "NA" &&
      !deadlineCompleted(entry)
    ));
}

function calendarEventFor(transaction, entry) {
  const date = deadlineDate(entry);
  const nextDate = new Date(`${date}T12:00:00`);
  nextDate.setDate(nextDate.getDate() + 1);

  return {
    summary: `${deadlineLabel(entry)} - ${transaction.client}`,
    location: transaction.address,
    description: `Closing Desk deadline\nClient: ${transaction.client}\nProperty: ${transaction.address}\nStatus: ${transaction.status}`,
    start: { date },
    end: { date: nextDate.toISOString().slice(0, 10) },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "popup", minutes: 60 * 24 * 3 },
        { method: "popup", minutes: 60 * 9 },
      ],
    },
  };
}

function googleCalendarEventId(entry) {
  return Array.isArray(entry) ? entry[4] : entry.googleCalendarEventId;
}

function setGoogleCalendarEventId(entry, value) {
  if (Array.isArray(entry)) {
    entry[4] = value;
  } else {
    entry.googleCalendarEventId = value;
  }
}

async function sendGoogleCalendarEvent(event, eventId = "") {
  const url = eventId
    ? `https://www.googleapis.com/calendar/v3/calendars/primary/events/${encodeURIComponent(eventId)}`
    : "https://www.googleapis.com/calendar/v3/calendars/primary/events";
  const response = await fetch(url, {
    method: eventId ? "PATCH" : "POST",
    headers: {
      Authorization: `Bearer ${googleAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  });

  if (!response.ok) {
    const message = await response.text();
    const error = new Error(message || "Google Calendar sync failed.");
    error.status = response.status;
    throw error;
  }

  return response.json();
}

async function syncGoogleDeadline(transaction, entry) {
  const event = calendarEventFor(transaction, entry);
  const existingId = googleCalendarEventId(entry);

  try {
    const savedEvent = await sendGoogleCalendarEvent(event, existingId);
    if (savedEvent?.id) setGoogleCalendarEventId(entry, savedEvent.id);
    return existingId ? "updated" : "created";
  } catch (error) {
    if (existingId && error.status === 404) {
      setGoogleCalendarEventId(entry, "");
      const savedEvent = await sendGoogleCalendarEvent(event);
      if (savedEvent?.id) setGoogleCalendarEventId(entry, savedEvent.id);
      return "recreated";
    }
    throw error;
  }
}

async function syncCurrentTransactionToGoogle() {
  if (!currentTransactionId) return;

  if (!googleAccessToken) {
    connectGoogleCalendar();
    showToast("Connect Google Calendar first, then click sync again.");
    return;
  }

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const deadlines = activeCalendarDeadlines(transaction, currentWorkflow);

  if (!deadlines.length) {
    showToast("No active dates to sync for this view.");
    return;
  }

  try {
    setGoogleSyncButtonState("syncing", "Syncing...");
    updateGoogleStatus("Syncing dates...");
    const results = await Promise.all(deadlines.map((entry) => syncGoogleDeadline(transaction, entry)));
    const created = results.filter((result) => result === "created" || result === "recreated").length;
    const updated = results.filter((result) => result === "updated").length;
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    setGoogleSyncButtonState("synced", "Synced");
    updateGoogleStatus("Synced just now");
    renderDetailWorkflow(transaction, currentWorkflow);
    showToast(`${created} new date${created === 1 ? "" : "s"} added, ${updated} existing date${updated === 1 ? "" : "s"} updated in Google Calendar.`);
    if (!saved) showToast("Calendar synced. Export a backup so synced event IDs are not lost.");
  } catch (error) {
    setGoogleSyncButtonState("idle", "Try sync again");
    updateGoogleStatus("Sync failed");
    showToast("Google Calendar sync failed. Check Calendar API settings.");
    console.error(error);
  }
}

function exportTransactions() {
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "Closing Desk",
    transactions,
    pipelineItems,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `closing-desk-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Backup exported.");
}

async function exportCloudBackup() {
  if (!cloudSession?.access_token) {
    showToast("Sign in before downloading a cloud backup.");
    return;
  }

  try {
    const workspaceId = await ensureCloudWorkspace();
    if (!workspaceId) return;
    const rows = await supabaseRequest(`/rest/v1/transactions?select=data&workspace_id=eq.${encodeURIComponent(workspaceId)}&order=updated_at.desc`);
    const cloudTransactions = rows.map((row) => row.data).filter((item) => item?.recordType !== "pipeline");
    const cloudPipelineItems = rows.map((row) => row.data).filter((item) => item?.recordType === "pipeline");
    const payload = {
      exportedAt: new Date().toISOString(),
      app: "Closing Desk",
      source: "Closing Desk workspace",
      workspaceId,
      transactions: cloudTransactions,
      pipelineItems: cloudPipelineItems,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `closing-desk-cloud-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("Cloud backup downloaded.");
  } catch (error) {
    showToast(supabaseErrorMessage(error, "Cloud backup failed. Try Refresh, then backup again."));
    console.error(error);
  }
}

function importTransactions(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const imported = Array.isArray(parsed) ? parsed : parsed.transactions;
      if (!Array.isArray(imported)) throw new Error("Invalid backup");
      transactions = imported;
      pipelineItems = Array.isArray(parsed.pipelineItems) ? parsed.pipelineItems : [];
      if (!saveTransactions()) {
        showToast("Import loaded, but browser saving is unavailable here.");
      }
      savePipelineItems({ markLocal: false });
      renderAll();
      switchView("dashboard");
      showToast("Backup imported.");
      if (cloudSession?.access_token) uploadLocalTransactions({ automatic: true });
    } catch {
      showToast("That backup file could not be imported.");
    }
  });
  reader.readAsText(file);
}

function dateLabel(value) {
  if (value === "NA") return "N/A";
  if (!value) return "Not set";
  return formatter.format(new Date(`${value}T12:00:00`));
}

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function escapeAttribute(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function numberFromMoney(value) {
  return Number(String(value || "").replace(/[^0-9.-]/g, "")) || 0;
}

function daysUntil(value) {
  if (value === "NA") return Number.POSITIVE_INFINITY;
  if (!value) return Number.POSITIVE_INFINITY;
  const today = todayAtNoon();
  const due = new Date(`${value}T12:00:00`);
  return Math.round((due - today) / 86400000);
}

function todayAtNoon() {
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return today;
}

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function addDaysToDateKey(value, days) {
  const date = value ? new Date(`${value}T12:00:00`) : todayAtNoon();
  date.setDate(date.getDate() + days);
  return dateKey(date);
}

function addYearsToDateKey(value, years) {
  const date = value ? new Date(`${value}T12:00:00`) : todayAtNoon();
  date.setFullYear(date.getFullYear() + years);
  return dateKey(date);
}

function urgencyClassForDate(value) {
  if (!value || value === "NA") return "";
  const dueIn = daysUntil(value);
  if (!Number.isFinite(dueIn)) return "";
  if (dueIn <= 0) return "due-now";
  if (dueIn <= 7) return "due-week";
  return "";
}

function statusOptionsForSide(side) {
  return side === "Listing" ? LISTING_STATUSES : BUYER_STATUSES;
}

function populateStatusSelect(select, side, currentStatus) {
  const options = statusOptionsForSide(side);
  const value = options.includes(currentStatus) ? currentStatus : options[0];
  select.innerHTML = options.map((status) => `<option>${status}</option>`).join("");
  select.value = value;
}

function isListingPrepStatus(status) {
  return LISTING_PREP_STATUSES.includes(status);
}

function isListingPendingStatus(status) {
  return LISTING_PENDING_STATUSES.includes(status);
}

function workflowFor(transaction) {
  if (transaction.side === "Listing") {
    return isListingPrepStatus(transaction.status) ? "listing" : "contract";
  }
  return transaction.workflow === "listing" ? "listing" : "contract";
}

function activeDeadlines(transaction, workflow = workflowFor(transaction)) {
  ensureListingDeadlineDefaults(transaction);
  if (workflow !== "listing") ensureContractDeadlineDefaults(transaction);
  return workflow === "listing" ? transaction.listingDeadlines || [] : transaction.deadlines;
}

function ensureContractDeadlineDefaults(transaction) {
  if (!transaction.deadlines) transaction.deadlines = [];
  let deadlines = transaction.deadlines;
  const inspection = deadlines.find((entry) => deadlineLabel(entry) === INSPECTION_CONTINGENCY_LABEL);
  const inspectionDate = deadlineDate(inspection);
  const settlement = deadlines.find((entry) => deadlineLabel(entry) === "Settlement date");
  const settlementDate = deadlineDate(settlement);
  const derivedLabels = [INSPECTION_NEGOTIATION_LABEL, INSPECTION_FINAL_RESPONSE_LABEL];
  const shouldShowDerived = Boolean(inspectionDate && inspectionDate !== "NA");
  let changed = false;

  if (transaction.side === "Buyer" && settlementDate && settlementDate !== "NA") {
    const reminderDate = addYearsToDateKey(settlementDate, 1);
    let reminder = deadlines.find((entry) => deadlineLabel(entry) === BUYER_ANNIVERSARY_REMINDER_LABEL);
    if (reminder) {
      if (deadlineDate(reminder) !== reminderDate) {
        setDeadlineDate(reminder, reminderDate);
        changed = true;
      }
    } else {
      reminder = [BUYER_ANNIVERSARY_REMINDER_LABEL, reminderDate];
      const settlementIndex = deadlines.findIndex((entry) => deadlineLabel(entry) === "Settlement date");
      if (settlementIndex >= 0) deadlines.splice(settlementIndex + 1, 0, reminder);
      else deadlines.push(reminder);
      changed = true;
    }
  } else {
    const filtered = deadlines.filter((entry) => deadlineLabel(entry) !== BUYER_ANNIVERSARY_REMINDER_LABEL);
    if (filtered.length !== deadlines.length) {
      transaction.deadlines = filtered;
      deadlines = filtered;
      changed = true;
    }
  }

  if (!shouldShowDerived) {
    const filtered = deadlines.filter((entry) => !derivedLabels.includes(deadlineLabel(entry)));
    if (filtered.length !== deadlines.length) {
      transaction.deadlines = filtered;
      deadlines = filtered;
      changed = true;
    }
    return changed;
  }

  const ensureDerived = (label, daysAfterInspection, afterLabel) => {
    const expectedDate = addDaysToDateKey(inspectionDate, daysAfterInspection);
    let entry = transaction.deadlines.find((deadline) => deadlineLabel(deadline) === label);
    if (entry) {
      if (deadlineDate(entry) !== expectedDate) {
        setDeadlineDate(entry, expectedDate);
        changed = true;
      }
      return;
    }

    entry = [label, expectedDate];
    const afterIndex = transaction.deadlines.findIndex((deadline) => deadlineLabel(deadline) === afterLabel);
    if (afterIndex >= 0) transaction.deadlines.splice(afterIndex + 1, 0, entry);
    else transaction.deadlines.push(entry);
    changed = true;
  };

  ensureDerived(INSPECTION_NEGOTIATION_LABEL, 5, INSPECTION_CONTINGENCY_LABEL);
  ensureDerived(INSPECTION_FINAL_RESPONSE_LABEL, 7, INSPECTION_NEGOTIATION_LABEL);
  return changed;
}

function ensureListingDeadlineDefaults(transaction) {
  if (transaction.side !== "Listing") return false;
  if (!transaction.listingDeadlines) transaction.listingDeadlines = [];

  let changed = false;
  const brightIndex = transaction.listingDeadlines.findIndex((entry) => deadlineLabel(entry) === "Listing added to Bright");
  if (brightIndex >= 0) {
    transaction.listingDeadlines.splice(brightIndex, 1);
    changed = true;
  }
  const labels = transaction.listingDeadlines.map((entry) => deadlineLabel(entry));
  const addBefore = (label, date, beforeLabel) => {
    if (labels.includes(label)) return;
    const deadline = [label, date];
    const targetIndex = labels.indexOf(beforeLabel);

    if (targetIndex >= 0) {
      transaction.listingDeadlines.splice(targetIndex, 0, deadline);
      labels.splice(targetIndex, 0, label);
    } else {
      transaction.listingDeadlines.push(deadline);
      labels.push(label);
    }
    changed = true;
  };

  addBefore("Open House", "NA", "Target settlement date");

  return changed;
}

function deadlineLabel(entry) {
  return Array.isArray(entry) ? entry[0] : entry.label;
}

function deadlineDate(entry) {
  return Array.isArray(entry) ? entry[1] : entry.date;
}

function deadlineCompleted(entry) {
  return Array.isArray(entry) ? Boolean(entry[2]) : Boolean(entry.completed);
}

function setDeadlineDate(entry, value) {
  if (Array.isArray(entry)) entry[1] = value;
  else entry.date = value;
}

function setDeadlineCompleted(entry, value) {
  if (Array.isArray(entry)) entry[2] = value;
  else entry.completed = value;
}

function setActiveDeadline(transaction, workflow, index, value) {
  const deadlines = activeDeadlines(transaction, workflow);
  setDeadlineDate(deadlines[index], value);
  if (workflow === "listing") {
    transaction.listingDeadlines = deadlines;
    const targetDeadline = deadlines.find((entry) => deadlineLabel(entry) === "Target settlement date");
    if (targetDeadline && deadlineDate(targetDeadline) && deadlineDate(targetDeadline) !== "NA") {
      transaction.settlement = deadlineDate(targetDeadline);
    }
  } else {
    transaction.deadlines = deadlines;
    const settlementDeadline = deadlines.find((entry) => deadlineLabel(entry) === "Settlement date");
    if (settlementDeadline && deadlineDate(settlementDeadline) && deadlineDate(settlementDeadline) !== "NA") {
      transaction.settlement = deadlineDate(settlementDeadline);
    }
  }
  if (workflow !== "listing") ensureContractDeadlineDefaults(transaction);
  ensureChecklistDefaults(transaction);
}

function setSettlementDate(transaction, value) {
  transaction.settlement = value || "";
  const workflow = workflowFor(transaction);
  const label = workflow === "listing" ? "Target settlement date" : "Settlement date";
  const deadlines = activeDeadlines(transaction, workflow);
  const entry = deadlines.find((deadline) => deadlineLabel(deadline) === label);
  if (entry) setDeadlineDate(entry, value || "");
}

function homeWarrantyElected(transaction) {
  if (transaction.side !== "Listing") return false;
  const warrantyDeadline = activeDeadlines(transaction, "listing")
    .find((entry) => deadlineLabel(entry) === HOME_WARRANTY_DEADLINE_LABEL);
  return deadlineDate(warrantyDeadline) !== "NA";
}

function activeTasks(transaction, workflow = workflowFor(transaction)) {
  ensureChecklistDefaults(transaction);
  const tasks = sourceTasksFor(transaction, workflow);
  if (homeWarrantyElected(transaction)) return tasks;
  return tasks.filter((task) => ![
    HOME_WARRANTY_ORDER_TASK_LABEL,
    HOME_WARRANTY_CONVERT_TASK_LABEL,
  ].includes(taskLabel(task)));
}

function sourceTasksFor(transaction, workflow = workflowFor(transaction)) {
  return workflow === "listing" ? transaction.listingTasks || [] : transaction.tasks || [];
}

function visibleTaskEntries(transaction, workflow = workflowFor(transaction)) {
  const source = sourceTasksFor(transaction, workflow);
  const visible = activeTasks(transaction, workflow);
  return source
    .map((task, index) => ({ task, index }))
    .filter(({ task }) => visible.includes(task));
}

function taskLabel(task) {
  return Array.isArray(task) ? task[0] : task.label;
}

function taskDone(task) {
  return Array.isArray(task) ? Boolean(task[1]) : Boolean(task.done);
}

function taskOwner(task) {
  return Array.isArray(task) ? task[2] : task.owner;
}

function taskDueDate(task) {
  return Array.isArray(task) ? task[3] : task.dueDate;
}

function setTaskDone(task, value) {
  if (Array.isArray(task)) task[1] = value;
  else task.done = value;
}

function setTaskOwner(task, value) {
  if (Array.isArray(task)) task[2] = value;
  else task.owner = value;
}

function setTaskDueDate(task, value) {
  if (Array.isArray(task)) task[3] = value;
  else task.dueDate = value;
}

function ownerOptionsMarkup(currentOwner = "Agent") {
  const owner = currentOwner || "Agent";
  const options = TASK_OWNERS.includes(owner) ? TASK_OWNERS : [owner, ...TASK_OWNERS];
  return options.map((option) => `<option ${option === owner ? "selected" : ""}>${option}</option>`).join("");
}

function ensureChecklistDefaults(transaction) {
  if (!transaction.tasks) transaction.tasks = defaultChecklist(transaction.side);
  const labels = transaction.tasks.map((task) => taskLabel(task));
  if (!labels.includes("TSR submitted")) {
    const insertIndex = labels.indexOf("Accounting settlement notice submitted");
    const task = ["TSR submitted", false, "Agent"];
    if (insertIndex >= 0) transaction.tasks.splice(insertIndex + 1, 0, task);
    else transaction.tasks.push(task);
  }

  if (!labels.includes("Send reminder to set up utilities")) {
    transaction.tasks.push(["Send reminder to set up utilities", false, "Agent"]);
  }

  if (transaction.side === "Listing" && !labels.includes("Order resale certificate if applicable")) {
    transaction.tasks.push(["Order resale certificate if applicable", false, "Agent"]);
    labels.push("Order resale certificate if applicable");
  }

  if (transaction.side === "Listing" && homeWarrantyElected(transaction) && !labels.includes(HOME_WARRANTY_CONVERT_TASK_LABEL)) {
    transaction.tasks.push([HOME_WARRANTY_CONVERT_TASK_LABEL, false, "Agent"]);
    labels.push(HOME_WARRANTY_CONVERT_TASK_LABEL);
  }

  if (transaction.side === "Listing") {
    [
      "Confirm appraisal appointment is set",
      "Send comps / multiple offer comparison / appraiser prep email",
      "Let buyer agent know appraisal appointment date",
    ].forEach((label) => {
      if (!labels.includes(label)) {
        transaction.tasks.push([label, false, "Agent"]);
        labels.push(label);
      }
    });
  }

  const settlementDate = settlementDateFor(transaction);
  const settlementPrepDue = settlementDate && settlementDate !== "NA" ? addDaysToDateKey(settlementDate, -7) : "";
  let settlementPrepTask = transaction.tasks.find((task) => taskLabel(task) === SETTLEMENT_PREP_TASK_LABEL);
  if (!settlementPrepTask) {
    settlementPrepTask = [SETTLEMENT_PREP_TASK_LABEL, false, "Agent", settlementPrepDue];
    const walkThroughIndex = labels.indexOf("Final walk through scheduled in ShowingTime");
    if (walkThroughIndex >= 0) transaction.tasks.splice(walkThroughIndex + 1, 0, settlementPrepTask);
    else transaction.tasks.push(settlementPrepTask);
  } else if (!taskDone(settlementPrepTask)) {
    setTaskDueDate(settlementPrepTask, settlementPrepDue);
  }

  if (transaction.side === "Listing") {
    if (!transaction.listingTasks) transaction.listingTasks = defaultListingChecklist();
    const listingLabels = transaction.listingTasks.map((task) => taskLabel(task));
    if (!listingLabels.includes("Listing added to Bright")) {
      const insertIndex = listingLabels.indexOf("Coming soon date confirmed");
      const task = ["Listing added to Bright", false, "Agent"];
      if (insertIndex >= 0) transaction.listingTasks.splice(insertIndex, 0, task);
      else transaction.listingTasks.push(task);
    }
  }
}

function financeFor(transaction) {
  if (!transaction.finance) {
    transaction.finance = {
      salePrice: transaction.salePrice || "",
      commissionPercent: transaction.commissionPercent || "",
    };
  }
  return transaction.finance;
}

function settlementDetailsFor(transaction) {
  if (!transaction.settlementDetails) transaction.settlementDetails = {};
  return transaction.settlementDetails;
}

function lockboxDetailsFor(transaction) {
  if (!transaction.lockboxDetails) transaction.lockboxDetails = {};
  return transaction.lockboxDetails;
}

function hoaDetailsFor(transaction) {
  if (!transaction.hoaDetails) transaction.hoaDetails = {};
  return transaction.hoaDetails;
}

function contractDetailsFor(transaction) {
  if (!transaction.contractDetails) transaction.contractDetails = {};
  return transaction.contractDetails;
}

function contractTermsFor(transaction) {
  if (!transaction.contractTerms) transaction.contractTerms = {};
  return transaction.contractTerms;
}

function salePriceFor(transaction) {
  return numberFromMoney(financeFor(transaction).salePrice);
}

function commissionPercentFor(transaction) {
  return Number(String(financeFor(transaction).commissionPercent || "").replace(/[^0-9.-]/g, "")) || 0;
}

function commissionFor(transaction) {
  return salePriceFor(transaction) * (commissionPercentFor(transaction) / 100);
}

function postClosingTasksFor(transaction) {
  if (!transaction.postClosingTasks) {
    transaction.postClosingTasks = defaultPostClosingChecklist(transaction.side);
  }
  const labels = transaction.postClosingTasks.map((task) => taskLabel(task));
  const addMissing = (label) => {
    if (!labels.includes(label)) {
      transaction.postClosingTasks.push([label, false, "Agent"]);
      labels.push(label);
    }
  };

  if (transaction.side === "Listing") {
    addMissing("If local: add seller to Lisa's movie event group in Resource Center");
  } else {
    addMissing("One-year anniversary ecard set up in Resource Center");
    addMissing("Contact added to Resource Center");
    addMissing("Contact added to Lisa's movie event group");
    addMissing("Add reminder in Lisa's calendar to send card and brownies in one year for anniversary");
  }
  addMissing("Request review on Google and/or Zillow");
  return transaction.postClosingTasks;
}

function referralFor(transaction) {
  if (!transaction.referral) {
    transaction.referral = {
      isReferral: false,
      fee: "",
      paidTo: "",
    };
  }
  return transaction.referral;
}

function isClosed(transaction) {
  return CLOSED_STATUSES.includes(transaction.status);
}

function isFailed(transaction) {
  return FAILED_STATUSES.includes(transaction.status);
}

function followUpDefaultsFor(transaction) {
  if (transaction.side === "Listing" && workflowFor(transaction) === "listing") {
    return { frequency: "Every 3-4 days", method: "Email", temperature: "Calm" };
  }
  if (isPendingSale(transaction)) {
    return { frequency: "Weekly", method: "Email", temperature: "Calm" };
  }
  return { frequency: "Milestone only", method: "Email", temperature: "Calm" };
}

function legacyFollowUpDateKey(value) {
  if (!value || value === "Not sent" || value === "Not set") return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parsed = new Date(`${value}, ${todayAtNoon().getFullYear()} 12:00:00`);
  return Number.isNaN(parsed.getTime()) ? "" : dateKey(parsed);
}

function followUpFor(transaction) {
  const defaults = followUpDefaultsFor(transaction);
  if (!transaction.followUp) transaction.followUp = {};
  transaction.followUp.frequency = transaction.followUp.frequency || defaults.frequency;
  transaction.followUp.method = transaction.followUp.method || defaults.method;
  transaction.followUp.temperature = transaction.followUp.temperature || defaults.temperature;
  transaction.followUp.lastUpdateDate = transaction.followUp.lastUpdateDate || legacyFollowUpDateKey(transaction.lastUpdate);
  transaction.followUp.nextUpdateDate = transaction.followUp.nextUpdateDate || legacyFollowUpDateKey(transaction.nextUpdate);
  transaction.followUp.note = transaction.followUp.note || "";
  return transaction.followUp;
}

function followUpIntervalDays(frequency) {
  if (frequency === "Twice weekly") return 3;
  if (frequency === "Every 3-4 days") return 4;
  if (frequency === "Milestone only") return 14;
  return 7;
}

function followUpSortItems() {
  return transactions
    .filter((transaction) => !isClosed(transaction) && !isFailed(transaction))
    .map((transaction) => {
      const followUp = followUpFor(transaction);
      const nextDate = followUp.nextUpdateDate;
      const dueIn = nextDate ? daysUntil(nextDate) : 0;
      return { transaction, followUp, dueIn };
    })
    .sort((a, b) => a.dueIn - b.dueIn);
}

function settlementDateFor(transaction) {
  const settlementDeadline = activeDeadlines(transaction, "contract")
    .find((entry) => deadlineLabel(entry) === "Settlement date");
  return deadlineDate(settlementDeadline) || transaction.settlement || "";
}

function settlementPrepItems() {
  return transactions
    .filter((transaction) => isPendingSale(transaction))
    .map((transaction) => {
      const settlementDate = settlementDateFor(transaction);
      return {
        transaction,
        settlementDate,
        dueIn: settlementDate ? daysUntil(settlementDate) : Number.POSITIVE_INFINITY,
      };
    })
    .filter((item) => Number.isFinite(item.dueIn) && item.dueIn <= 7)
    .sort((a, b) => a.dueIn - b.dueIn);
}

function noteLogFor(transaction) {
  if (!Array.isArray(transaction.noteLog)) {
    transaction.noteLog = [];
  }

  if (transaction.notes && transaction.notes !== "No notes yet." && !transaction.noteLog.length) {
    transaction.noteLog.push({
      date: transaction.updatedAt ? transaction.updatedAt.slice(0, 10) : dateKey(todayAtNoon()),
      at: transaction.updatedAt || new Date().toISOString(),
      type: "General note",
      text: transaction.notes,
    });
  }

  transaction.noteLog = transaction.noteLog
    .map((note) => ({
      date: note.date || dateKey(todayAtNoon()),
      at: note.at || (note.date ? `${note.date}T12:00:00` : new Date().toISOString()),
      type: NOTE_TYPES.includes(note.type) ? note.type : "General note",
      text: String(note.text || "").trim(),
    }))
    .filter((note) => note.text);

  return transaction.noteLog;
}

function noteTypeOptionsMarkup(selected = "General note") {
  const current = NOTE_TYPES.includes(selected) ? selected : "General note";
  return NOTE_TYPES.map((type) => `<option ${type === current ? "selected" : ""}>${type}</option>`).join("");
}

function pipelineNoteLogFor(item) {
  if (!Array.isArray(item.noteLog)) item.noteLog = [];
  if (item.notes && !item.noteLog.length) {
    item.noteLog.push({
      date: item.updatedAt ? item.updatedAt.slice(0, 10) : dateKey(todayAtNoon()),
      at: item.updatedAt || item.createdAt || new Date().toISOString(),
      type: "General note",
      text: item.notes,
    });
  }
  item.noteLog = item.noteLog
    .map((note) => ({
      date: note.date || dateKey(todayAtNoon()),
      at: note.at || (note.date ? `${note.date}T12:00:00` : new Date().toISOString()),
      type: NOTE_TYPES.includes(note.type) ? note.type : "General note",
      text: String(note.text || "").trim(),
    }))
    .filter((note) => note.text);
  return item.noteLog;
}

function stickyNotesFor(transaction) {
  if (!Array.isArray(transaction.stickyNotes)) transaction.stickyNotes = [];
  transaction.stickyNotes = transaction.stickyNotes
    .map((note) => ({
      id: note.id || Date.now() + Math.floor(Math.random() * 1000),
      text: String(note.text || "").trim(),
      createdAt: note.createdAt || note.at || new Date().toISOString(),
      updatedAt: note.updatedAt || "",
      completedAt: note.completedAt || "",
      completed: Boolean(note.completed || note.completedAt),
    }))
    .filter((note) => note.text);
  return transaction.stickyNotes;
}

function openStickyNotesFor(transaction) {
  return stickyNotesFor(transaction).filter((note) => !note.completed);
}

function addStickyNote(transaction, text, createdAt = new Date().toISOString()) {
  stickyNotesFor(transaction).push({
    id: Date.now() + Math.floor(Math.random() * 1000),
    text,
    createdAt,
    completed: false,
    completedAt: "",
  });
}

function addStickyLooseEnd(transaction, text, timestamp = new Date().toISOString()) {
  const notes = noteLogFor(transaction);
  notes.push({
    date: timestamp.slice(0, 10),
    at: timestamp,
    type: "Loose end",
    text,
  });
  transaction.notes = text;
  addStickyNote(transaction, text, timestamp);
}

function addPipelineStickyLooseEnd(item, text, timestamp = new Date().toISOString()) {
  const notes = pipelineNoteLogFor(item);
  notes.push({
    date: timestamp.slice(0, 10),
    at: timestamp,
    type: "Loose end",
    text,
  });
  item.notes = text;
  item.updatedAt = timestamp;
  addStickyNote(item, text, timestamp);
}

function renderStickyNotes(transaction) {
  const panel = document.querySelector("#stickyNotePanel");
  if (!panel) return;
  const openNotes = openStickyNotesFor(transaction);
  panel.hidden = !openNotes.length;
  panel.innerHTML = openNotes.length ? `
    <div class="sticky-note-stack">
      ${openNotes.map((note) => `
        <article class="sticky-note">
          <div>
            <span>Loose end</span>
            <time>${formatDateTime(note.createdAt)}</time>
          </div>
          <p>${escapeHtml(note.text)}</p>
          <div class="sticky-note-actions">
            <button class="sticky-edit-button" type="button" data-edit-sticky="${note.id}">Edit</button>
            <button class="sticky-complete-button" type="button" data-complete-sticky="${note.id}">Mark complete</button>
          </div>
        </article>
      `).join("")}
    </div>
  ` : "";
}

function renderPipelineStickyNotes(item) {
  const panel = document.querySelector("#pipelineStickyNotePanel");
  if (!panel) return;
  if (!item) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const openNotes = openStickyNotesFor(item);
  panel.hidden = !openNotes.length;
  panel.innerHTML = openNotes.length ? `
    <div class="sticky-note-stack">
      ${openNotes.map((note) => `
        <article class="sticky-note">
          <div>
            <span>Pipeline loose end</span>
            <time>${formatDateTime(note.createdAt)}</time>
          </div>
          <p>${escapeHtml(note.text)}</p>
          <div class="sticky-note-actions">
            <button class="sticky-edit-button" type="button" data-edit-pipeline-sticky="${note.id}">Edit</button>
            <button class="sticky-complete-button" type="button" data-complete-pipeline-sticky="${note.id}">Mark complete</button>
          </div>
        </article>
      `).join("")}
    </div>
  ` : "";
}

function latestNoteText(transaction) {
  const notes = noteLogFor(transaction);
  return notes.length ? notes[notes.length - 1].text : "";
}

function taskCompletion(transaction) {
  const tasks = activeTasks(transaction);
  const done = tasks.filter((task) => taskDone(task)).length;
  return `${done}/${tasks.length}`;
}

function allContractDeadlines() {
  return transactions.flatMap((transaction) => (
    activeDeadlines(transaction).map((entry, index) => ({
      transaction,
      label: deadlineLabel(entry),
      date: deadlineDate(entry),
      completed: deadlineCompleted(entry),
      index,
      workflow: workflowFor(transaction),
    }))
  ));
}

function nextContractDeadline(transaction) {
  return activeDeadlines(transaction)
    .map((entry) => ({
      label: deadlineLabel(entry),
      date: deadlineDate(entry),
      dueIn: daysUntil(deadlineDate(entry)),
      completed: deadlineCompleted(entry),
    }))
    .filter((deadline) => !deadline.completed && deadline.dueIn >= 0 && Number.isFinite(deadline.dueIn))
    .sort((a, b) => a.dueIn - b.dueIn)[0] || {
      label: transaction.workflow === "listing" ? "Listing prep complete" : "Settlement complete",
      date: transaction.settlement,
      dueIn: daysUntil(transaction.settlement),
    };
}

function compactLabel(label) {
  const labels = {
    "Earnest money deposit due": "EMD",
    "Inspection contingency ends": "Insp",
    "Mortgage application due": "App",
    "Mortgage commitment due": "Commit",
    "Settlement date": "Settle",
    "Staging scheduled": "Stage",
    "Photos/video scheduled": "Media",
    "Listing doc review date": "Docs",
    "Coming soon date": "Soon",
    "Active launch date": "Launch",
    "Open House": "Open",
    "Home warranty ordered": "Warranty",
    "Target settlement date": "Target",
  };
  return labels[label] || label;
}

function compactDateStrip(transaction) {
  return activeDeadlines(transaction)
    .filter((entry) => deadlineDate(entry) && deadlineDate(entry) !== "NA")
    .map((entry) => {
      const label = deadlineLabel(entry);
      const date = deadlineDate(entry);
      const dueIn = daysUntil(date);
      const urgent = !deadlineCompleted(entry) && dueIn >= 0 && dueIn <= 3 ? " urgent" : "";
      const done = deadlineCompleted(entry) ? " done" : "";
      return `
        <span class="compact-date${urgent}${done}">
          <span>${compactLabel(label)}</span>
          <strong>${dateLabel(date)}</strong>
        </span>
      `;
    }).join("");
}

function getFilteredTransactions() {
  const filtered = transactions.filter((transaction) => {
    const closedView = activeFilter === "closed";
    if (closedView) return isClosed(transaction);
    if (isClosed(transaction) || isFailed(transaction)) return false;
    const matchesFilter = activeFilter === "all" || transaction.side === activeFilter;
    const haystack = `${transaction.client} ${transaction.address} ${transaction.lender} ${transaction.title}`.toLowerCase();
    return matchesFilter && haystack.includes(searchTerm.toLowerCase());
  });
  if (activeFilter === "closed") {
    return filtered.sort((a, b) => new Date(b.settlement || 0) - new Date(a.settlement || 0));
  }
  return filtered;
}

function iconUse(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function transactionIconName(transaction) {
  if (transaction.side === "Listing") return "house";
  return "key";
}

function transactionCard(transaction) {
  return `
    <button class="transaction-card" type="button" data-transaction-id="${transaction.id}">
      <span class="transaction-icon">${iconUse(transactionIconName(transaction))}</span>
      <div class="transaction-card-main">
        <div class="transaction-title">
          <strong>${transaction.client}</strong>
        </div>
        <div class="transaction-meta">
          ${transaction.address}
        </div>
      </div>
    </button>
  `;
}

function listingGroupFor(transaction) {
  if (transaction.status === "Active listing") return "Active";
  if (transaction.status === "New listing") return "New";
  if (transaction.side === "Listing" && isPendingSale(transaction)) return "Pending";
  return "Other";
}

function transactionGroupsFor(items, filter = activeFilter) {
  if (filter === "closed") {
    return [["Closed Sales", items]];
  }

  if (filter === "Buyer") {
    return [
      ["Buyer Pending", items.filter((transaction) => isPendingSale(transaction))],
      ["Other Buyer Transactions", items.filter((transaction) => !isPendingSale(transaction))],
    ].filter(([, groupItems]) => groupItems.length);
  }

  if (filter === "Listing") {
    return [
      ["Active Listings", items.filter((transaction) => listingGroupFor(transaction) === "Active")],
      ["Pending Listings", items.filter((transaction) => listingGroupFor(transaction) === "Pending")],
      ["New / Upcoming Listings", items.filter((transaction) => listingGroupFor(transaction) === "New")],
      ["Other Listings", items.filter((transaction) => listingGroupFor(transaction) === "Other")],
    ].filter(([, groupItems]) => groupItems.length);
  }

  return [
    ["Buyer Pending", items.filter((transaction) => transaction.side === "Buyer" && isPendingSale(transaction))],
    ["Listing Pending", items.filter((transaction) => transaction.side === "Listing" && isPendingSale(transaction))],
    ["Active Listings", items.filter((transaction) => transaction.side === "Listing" && transaction.status === "Active listing")],
    ["New / Upcoming Listings", items.filter((transaction) => transaction.side === "Listing" && transaction.status === "New listing")],
    ["Other Active Transactions", items.filter((transaction) => !(
      (transaction.side === "Buyer" && isPendingSale(transaction)) ||
      (transaction.side === "Listing" && isPendingSale(transaction)) ||
      (transaction.side === "Listing" && transaction.status === "Active listing") ||
      (transaction.side === "Listing" && transaction.status === "New listing")
    ))],
  ].filter(([, groupItems]) => groupItems.length);
}

function isPendingSale(transaction) {
  return !isClosed(transaction) && !isFailed(transaction) && workflowFor(transaction) === "contract";
}

function isNewListing(transaction) {
  return !isClosed(transaction) && !isFailed(transaction) && workflowFor(transaction) === "listing";
}

function dashboardTransactionTile(transaction) {
  return `
    <button class="dashboard-tile" type="button" data-transaction-id="${transaction.id}">
      <span class="dashboard-tile-icon">${iconUse(transactionIconName(transaction))}</span>
      <div>
        <strong>${transaction.client}</strong>
        <span>${transaction.address}</span>
      </div>
    </button>
  `;
}

function emptyDashboardTile(message) {
  return `<div class="empty-dashboard-tile">${message}</div>`;
}

function renderMetrics() {
  const deadlinesThisWeek = allContractDeadlines().filter((item) => {
    const dueIn = daysUntil(item.date);
    return !item.completed && dueIn >= 0 && dueIn <= 7;
  }).length;
  const closedSales = transactions.filter((item) => (
    isClosed(item) &&
    item.settlement >= closedRangeStart &&
    item.settlement <= closedRangeEnd
  ));
  const pendingSales = transactions.filter((item) => (
    !isClosed(item) && !isFailed(item) &&
    workflowFor(item) === "contract"
  ));
  const activeTransactions = transactions.filter((item) => !isClosed(item) && !isFailed(item));
  const newListings = transactions.filter(isNewListing);
  const overdueTasks = transactions.reduce((count, item) => (
    count + activeTasks(item).filter((task) => !taskDone(task)).length
  ), 0);
  const closedVolume = closedSales.reduce((sum, item) => sum + salePriceFor(item), 0);
  const pendingVolume = pendingSales.reduce((sum, item) => sum + salePriceFor(item), 0);
  const newListingVolume = newListings.reduce((sum, item) => sum + salePriceFor(item), 0);
  const closedGrossCommission = closedSales.reduce((sum, item) => sum + commissionFor(item), 0);
  const pendingGrossCommission = pendingSales.reduce((sum, item) => sum + commissionFor(item), 0);

  document.querySelector("#metricGrid").innerHTML = [
    { label: "Active transactions", value: activeTransactions.length, helper: "Buyer and listing deals", icon: "briefcase" },
    { label: "Closed sales", value: closedSales.length, helper: `${currency(closedVolume)} volume`, icon: "key" },
    { label: "Pending volume", value: currency(pendingVolume), helper: `${pendingSales.length} pending sales`, icon: "house" },
    { label: "Listing volume", value: currency(newListingVolume), helper: `${newListings.length} new/active listings`, icon: "house" },
    { label: "Pending gross commission", value: currency(pendingGrossCommission), helper: "Pending sales", icon: "key" },
    { label: "Closed gross commission", value: currency(closedGrossCommission), helper: "Closed sales in range", icon: "key" },
    { label: "Deadlines this week", value: deadlinesThisWeek, helper: "Open deadline list", icon: "calendar", view: "deadlines" },
    { label: "Open checklist items", value: overdueTasks, helper: "Open checklist list", icon: "briefcase", view: "dashboard", target: "openChecklistPanel" },
  ].map(({ label, value, helper, icon, view, target }) => {
    const tag = view ? "button" : "article";
    const actionAttrs = view
      ? ` type="button" data-metric-view="${view}"${target ? ` data-metric-target="${target}"` : ""}`
      : "";
    return `
    <${tag} class="metric-card ${view ? "metric-card-button" : ""}"${actionAttrs}>
      <div class="metric-card-top">
        <span>${label}</span>
        <span class="metric-icon">${iconUse(icon)}</span>
      </div>
      <strong>${value}</strong>
      <small>${helper}</small>
    </${tag}>
  `;
  }).join("");

  document.querySelector("#sidebarDeadlineCount").textContent = `${deadlinesThisWeek} key dates`;
}

function monthKey(date) {
  return date ? String(date).slice(0, 7) : "";
}

function monthLabel(key) {
  if (!key) return "No date";
  const [year, month] = key.split("-");
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(Number(year), Number(month) - 1, 1));
}

function reportItems() {
  const inRange = (item) => item.settlement && item.settlement >= reportRangeStart && item.settlement <= reportRangeEnd;
  const closed = transactions.filter((item) => isClosed(item) && inRange(item));
  const pending = transactions.filter((item) => !isClosed(item) && !isFailed(item) && workflowFor(item) === "contract" && inRange(item));
  return { closed, pending };
}

function reportTotals(items) {
  const volume = items.reduce((sum, item) => sum + salePriceFor(item), 0);
  const commission = items.reduce((sum, item) => sum + commissionFor(item), 0);
  const average = items.length ? volume / items.length : 0;
  return { count: items.length, volume, commission, average };
}

function monthlyVolume(items) {
  const buckets = new Map();
  items.forEach((item) => {
    const key = monthKey(item.settlement);
    if (!key) return;
    buckets.set(key, (buckets.get(key) || 0) + salePriceFor(item));
  });
  return [...buckets.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => ({ label: monthLabel(key), value }));
}

function sideBreakdown(items) {
  return {
    buyer: items.filter((item) => item.side === "Buyer").length,
    listing: items.filter((item) => item.side === "Listing").length,
  };
}

function renderBarChart(selector, rows) {
  const max = Math.max(...rows.map((row) => row.value), 0);
  document.querySelector(selector).innerHTML = rows.length ? rows.map((row) => {
    const width = max ? Math.max(8, Math.round((row.value / max) * 100)) : 0;
    return `
      <div class="bar-row">
        <span>${row.label}</span>
        <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
        <strong>${currency(row.value)}</strong>
      </div>
    `;
  }).join("") : `<div class="report-empty">No transactions in this range.</div>`;
}

function renderSideChart(selector, breakdown) {
  const total = breakdown.buyer + breakdown.listing;
  const buyerPercent = total ? Math.round((breakdown.buyer / total) * 100) : 0;
  document.querySelector(selector).innerHTML = total ? `
    <div class="donut" style="--buyer: ${buyerPercent}%"></div>
    <div class="report-legend">
      <span><i class="buyer-dot"></i>Buyer: ${breakdown.buyer}</span>
      <span><i class="listing-dot"></i>Listing: ${breakdown.listing}</span>
    </div>
  ` : `<div class="report-empty">No transactions in this range.</div>`;
}

function actionReportTransactions() {
  return transactions
    .filter((transaction) => !isClosed(transaction) && !isFailed(transaction))
    .filter((transaction) => isPendingSale(transaction) || isNewListing(transaction) || transaction.status === "Active listing")
    .sort((a, b) => a.client.localeCompare(b.client));
}

function startOfWeekKey(date = todayAtNoon()) {
  const start = new Date(date);
  start.setDate(date.getDate() - date.getDay());
  return dateKey(start);
}

function endOfWeekKey(date = todayAtNoon()) {
  const end = new Date(date);
  end.setDate(date.getDate() + (6 - date.getDay()));
  return dateKey(end);
}

function startOfMonthKey(date = todayAtNoon()) {
  return dateKey(new Date(date.getFullYear(), date.getMonth(), 1, 12));
}

function endOfMonthKey(date = todayAtNoon()) {
  return dateKey(new Date(date.getFullYear(), date.getMonth() + 1, 0, 12));
}

function actionReportRange() {
  const today = todayAtNoon();
  if (actionReportPreset === "week") {
    return { start: startOfWeekKey(today), end: endOfWeekKey(today), label: "This week" };
  }
  if (actionReportPreset === "month") {
    return { start: startOfMonthKey(today), end: endOfMonthKey(today), label: "This month" };
  }
  if (actionReportPreset === "custom") {
    return { start: actionReportStart, end: actionReportEnd, label: "Custom range" };
  }
  return { start: "", end: "", label: "All dates" };
}

function isReportDateInRange(value, range) {
  if (!range.start && !range.end) return true;
  if (!value || value === "NA") return false;
  if (range.start && value < range.start) return false;
  if (range.end && value > range.end) return false;
  return true;
}

function reportDateSortValue(value) {
  if (!value || value === "NA") return "9999-12-31";
  return value;
}

function actionReportStatusWeight(status) {
  if (status === "Open") return 0;
  if (status === "Met") return 1;
  return 2;
}

function actionReportDeadlineRows(items) {
  return items.flatMap((transaction) => {
    const workflow = workflowFor(transaction);
    return activeDeadlines(transaction, workflow).map((deadline) => {
      const value = deadlineDate(deadline);
      const status = value === "NA" ? "NA" : deadlineCompleted(deadline) ? "Met" : "Open";
      return {
        date: value,
        item: deadlineLabel(deadline),
        status,
        transaction,
      };
    });
  }).sort((a, b) => (
    actionReportStatusWeight(a.status) - actionReportStatusWeight(b.status) ||
    reportDateSortValue(a.date).localeCompare(reportDateSortValue(b.date))
  ));
}

function actionReportTaskRows(items) {
  return items.flatMap((transaction) => {
    const workflow = workflowFor(transaction);
    return visibleTaskEntries(transaction, workflow)
      .filter(({ task }) => !taskDone(task))
      .map(({ task }) => ({
        date: taskDueDate(task),
        task,
        transaction,
      }));
  }).sort((a, b) => reportDateSortValue(a.date).localeCompare(reportDateSortValue(b.date)));
}

function transactionReportLabel(transaction) {
  return `${transaction.client} · ${transaction.address} · ${transaction.side} · ${transaction.status}`;
}

function actionReportDateLabel(value) {
  if (!value) return "No date";
  if (value === "NA") return "NA";
  return dateLabel(value);
}

function renderActionReport() {
  const items = actionReportTransactions();
  const range = actionReportRange();
  const deadlines = actionReportDeadlineRows(items).filter((row) => isReportDateInRange(row.date, range));
  const tasks = actionReportTaskRows(items).filter((row) => isReportDateInRange(row.date, range));
  const openDeadlines = deadlines.filter((row) => row.status === "Open").length;
  const urgentTasks = tasks.filter((row) => {
    const dueIn = daysUntil(row.date);
    return Number.isFinite(dueIn) && dueIn <= 7;
  }).length;

  document.querySelectorAll("[data-action-report-range]").forEach((button) => {
    button.classList.toggle("active", button.dataset.actionReportRange === actionReportPreset);
  });
  document.querySelector("#actionReportStart").value = actionReportPreset === "custom" ? actionReportStart : range.start;
  document.querySelector("#actionReportEnd").value = actionReportPreset === "custom" ? actionReportEnd : range.end;
  document.querySelector("#actionReportMeta").textContent = `Prepared ${formatDateTime(new Date().toISOString())} · ${range.label}${range.start || range.end ? ` · ${actionReportDateLabel(range.start)} to ${actionReportDateLabel(range.end)}` : ""}`;
  document.querySelector("#actionReportSummary").innerHTML = [
    ["Active transactions", items.length],
    ["Open deadlines", openDeadlines],
    ["Open tasks", tasks.length],
    ["Tasks due this week", urgentTasks],
  ].map(([label, value]) => `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");

  document.querySelector("#actionReportDeadlines").innerHTML = deadlines.length ? deadlines.map((row) => `
    <tr class="${row.status === "Open" ? urgencyClassForDate(row.date) : row.status.toLowerCase()}">
      <td>${actionReportDateLabel(row.date)}</td>
      <td>${escapeHtml(row.item)}</td>
      <td>${escapeHtml(transactionReportLabel(row.transaction))}</td>
      <td>${row.status}</td>
    </tr>
  `).join("") : `<tr><td colspan="4">No deadlines to show.</td></tr>`;

  document.querySelector("#actionReportTasks").innerHTML = tasks.length ? tasks.map((row) => `
    <tr class="${urgencyClassForDate(row.date)}">
      <td>${actionReportDateLabel(row.date)}</td>
      <td>${escapeHtml(taskLabel(row.task))}</td>
      <td>${escapeHtml(transactionReportLabel(row.transaction))}</td>
      <td>${escapeHtml(taskOwner(row.task) || "Agent")}</td>
    </tr>
  `).join("") : `<tr><td colspan="4">No open tasks to show.</td></tr>`;
}

function pipelineFollowUpRows() {
  return [...pipelineItems].sort((a, b) => {
    const aDue = a.nextFollowUpDate ? daysUntil(a.nextFollowUpDate) : Number.POSITIVE_INFINITY;
    const bDue = b.nextFollowUpDate ? daysUntil(b.nextFollowUpDate) : Number.POSITIVE_INFINITY;
    return aDue - bDue || pipelineProbabilityRank(a) - pipelineProbabilityRank(b) || String(a.client || "").localeCompare(String(b.client || ""));
  });
}

function pipelineFollowUpStatus(date) {
  if (!date) return "No date";
  const dueIn = daysUntil(date);
  if (dueIn < 0) return `${Math.abs(dueIn)} days overdue`;
  if (dueIn === 0) return "Due today";
  if (dueIn === 1) return "Due tomorrow";
  return `Due in ${dueIn} days`;
}

function renderPipelineFollowUpReport() {
  const rows = pipelineFollowUpRows();
  const overdue = rows.filter((item) => item.nextFollowUpDate && daysUntil(item.nextFollowUpDate) < 0).length;
  const dueThisWeek = rows.filter((item) => {
    const dueIn = item.nextFollowUpDate ? daysUntil(item.nextFollowUpDate) : Number.POSITIVE_INFINITY;
    return Number.isFinite(dueIn) && dueIn >= 0 && dueIn <= 7;
  }).length;
  const hot = rows.filter((item) => String(item.probability || "").toLowerCase() === "hot").length;
  document.querySelector("#pipelineReportSummary").innerHTML = [
    ["Pipeline items", rows.length],
    ["Overdue follow-ups", overdue],
    ["Due this week", dueThisWeek],
    ["Hot opportunities", hot],
  ].map(([label, value]) => `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
  document.querySelector("#pipelineFollowUpRows").innerHTML = rows.length ? rows.map((item) => `
    <tr class="${urgencyClassForDate(item.nextFollowUpDate)}">
      <td>${item.nextFollowUpDate ? `${dateLabel(item.nextFollowUpDate)} · ${pipelineFollowUpStatus(item.nextFollowUpDate)}` : "No date"}</td>
      <td>${escapeHtml(item.probability || "Warm")}</td>
      <td>${escapeHtml(PIPELINE_TYPES[item.type] || "Pipeline")}</td>
      <td>${escapeHtml(item.client || "")}</td>
      <td>${escapeHtml(item.location || "")}</td>
      <td>${escapeHtml(item.nextAction || item.notes || "")}</td>
    </tr>
  `).join("") : `<tr><td colspan="6">No pipeline follow-ups yet.</td></tr>`;
}

function listingMapItems() {
  const listingTransactions = transactions
    .filter((transaction) => transaction.side === "Listing" && !isClosed(transaction) && !isFailed(transaction))
    .map((transaction) => ({
      id: `transaction-${transaction.id}`,
      label: transaction.client,
      address: transaction.address,
      status: transaction.status,
      type: "Listing",
    }));
  const futureListings = pipelineItems
    .filter((item) => item.type === "listing" && item.location)
    .map((item) => ({
      id: `pipeline-${item.id}`,
      label: item.client,
      address: item.location,
      status: item.probability || item.stage || "Pipeline",
      type: "Future listing",
    }));
  return [...listingTransactions, ...futureListings]
    .filter((item) => item.address && item.address !== "Address not added yet")
    .sort((a, b) => a.label.localeCompare(b.label));
}

function googleMapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function googleMapsEmbedUrl(address) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

function setListingMapAddress(address) {
  document.querySelector("#listingMapFrame").src = googleMapsEmbedUrl(address);
  document.querySelector("#openListingMapLink").href = googleMapsUrl(address);
}

function renderListingMap() {
  const items = listingMapItems();
  document.querySelector("#listingMapList").innerHTML = items.length ? items.map((item, index) => `
    <button class="listing-map-item ${index === 0 ? "active" : ""}" type="button" data-map-address="${escapeAttribute(item.address)}">
      <strong>${escapeHtml(item.label)}</strong>
      <span>${escapeHtml(item.address)}</span>
      <small>${escapeHtml(item.type)} · ${escapeHtml(item.status)}</small>
    </button>
  `).join("") : `<div class="today-empty">No listing addresses to map yet.</div>`;
  if (items.length) {
    setListingMapAddress(items[0].address);
  } else {
    document.querySelector("#listingMapFrame").removeAttribute("src");
    document.querySelector("#openListingMapLink").href = "https://www.google.com/maps";
  }
}

function renderReports() {
  const { closed, pending } = reportItems();
  const closedTotals = reportTotals(closed);
  const pendingTotals = reportTotals(pending);

  document.querySelector("#reportMetricGrid").innerHTML = [
    ["Closed volume", currency(closedTotals.volume), `${closedTotals.count} closed sales`, "key"],
    ["Closed gross commission", currency(closedTotals.commission), `${currency(closedTotals.average)} avg price`, "key"],
    ["Pending volume", currency(pendingTotals.volume), `${pendingTotals.count} pending sales`, "house"],
    ["Pending gross commission", currency(pendingTotals.commission), `${currency(pendingTotals.average)} avg price`, "house"],
  ].map(([label, value, helper, icon]) => `
    <article class="metric-card">
      <div class="metric-card-top">
        <span>${label}</span>
        <span class="metric-icon">${iconUse(icon)}</span>
      </div>
      <strong>${value}</strong>
      <small>${helper}</small>
    </article>
  `).join("");

  renderBarChart("#closedVolumeChart", monthlyVolume(closed));
  renderBarChart("#pendingVolumeChart", monthlyVolume(pending));
  renderSideChart("#closedSideChart", sideBreakdown(closed));
  renderSideChart("#pendingSideChart", sideBreakdown(pending));
  renderActionReport();
  renderPipelineFollowUpReport();
  renderListingMap();
}

function renderDashboard() {
  const buyerPending = transactions.filter((item) => item.side === "Buyer" && isPendingSale(item));
  const listingPending = transactions.filter((item) => item.side === "Listing" && isPendingSale(item));
  const activeListings = transactions.filter((item) => item.side === "Listing" && item.status === "Active listing" && !isClosed(item) && !isFailed(item));
  const newUpcomingListings = transactions.filter((item) => item.side === "Listing" && item.status === "New listing" && !isClosed(item) && !isFailed(item));
  const groups = [
    ["buyerPendingCount", "dashboardBuyerPending", buyerPending, "No buyer pendings."],
    ["listingPendingCount", "dashboardListingPending", listingPending, "No listing pendings."],
    ["activeListingCount", "dashboardActiveListings", activeListings, "No active listings."],
    ["newUpcomingListingCount", "dashboardNewUpcomingListings", newUpcomingListings, "No new listings."],
  ];

  groups.forEach(([countId, listId, items, emptyText]) => {
    document.querySelector(`#${countId}`).textContent = items.length;
    document.querySelector(`#${listId}`).innerHTML = items.length
      ? items.map(dashboardTransactionTile).join("")
      : emptyDashboardTile(emptyText);
  });
  document.querySelector("#deadlineList").innerHTML = sortedByDeadline().slice(0, 5).map(deadlineMarkup).join("");
  const settlementPrep = settlementPrepItems().slice(0, 4);
  document.querySelector("#clientUpdates").innerHTML = settlementPrep.length ? settlementPrep.map(({ transaction, settlementDate, dueIn }) => {
    const urgency = dueIn < 0 ? "Past settlement date" : dueIn === 0 ? "Settlement today" : `${dueIn} days`;
    const reminder = transaction.side === "Buyer"
      ? "Send settlement details, confirm final walk-through, and remind buyer to set up utilities for settlement day."
      : "Send settlement details, confirm inclusions/exclusions, and remind seller to cancel utilities for the day after settlement.";
    return `
      <button class="update-card ${dueIn <= 0 ? "urgent" : "soon"}" type="button" data-transaction-id="${transaction.id}" data-open-settlement-prep="true">
        <span>${transaction.side} · ${transaction.status}</span>
        <strong>${transaction.client}</strong>
        <p>${reminder}</p>
        <div class="update-next">
          <span>${urgency}</span>
          <strong>${dateLabel(settlementDate)}</strong>
        </div>
        <small>${transaction.address}</small>
      </button>
    `;
  }).join("") : `<div class="today-empty">No settlements need prep this week.</div>`;
  renderTodayPanel();
  renderOpenChecklistItems();
  renderWeeklyCalendar();
}

function pipelineCard(item, compact = false) {
  const followUp = item.nextFollowUpDate ? dateLabel(item.nextFollowUpDate) : "No follow-up date";
  const probability = item.probability || "Warm";
  const dueIn = item.nextFollowUpDate ? daysUntil(item.nextFollowUpDate) : Number.POSITIVE_INFINITY;
  const timing = item.timing || "No timing";
  const nextAction = item.nextAction || "No next action";
  const followUpClass = Number.isFinite(dueIn) && dueIn < 0 ? " pipeline-follow-up-overdue" : dueIn === 0 ? " pipeline-follow-up-today" : "";
  return `
    <article class="pipeline-card${compact ? " pipeline-card-compact" : ""} pipeline-${probability.toLowerCase().replace(/[^a-z]+/g, "-")}${followUpClass}" data-open-pipeline="${item.id}">
      <div class="pipeline-card-main">
        <div>
          <strong>${escapeHtml(item.client)}</strong>
          <span>${escapeHtml(item.location || "No address or area yet")}</span>
        </div>
        <span class="pipeline-probability">${escapeHtml(probability)}</span>
      </div>
      <div class="pipeline-card-meta">
        <span>${escapeHtml(item.stage || "No stage")}</span>
        <span>${escapeHtml(timing)}</span>
        <span>${followUp}${Number.isFinite(dueIn) && dueIn < 0 ? ` · ${Math.abs(dueIn)}d overdue` : dueIn === 0 ? " · Today" : ""}</span>
      </div>
      <small class="pipeline-next-action">${escapeHtml(nextAction)}</small>
      <div class="pipeline-card-actions">
        <button class="ghost-button" type="button" data-edit-pipeline="${item.id}">Edit</button>
        <button class="ghost-button" type="button" data-convert-pipeline="${item.id}">Convert</button>
        <button class="ghost-button danger-button" type="button" data-delete-pipeline="${item.id}">Delete</button>
      </div>
    </article>
  `;
}

function pipelineProbabilityRank(item) {
  const value = String(item.probability || "Warm").toLowerCase();
  if (value === "hot") return 0;
  if (value === "warm") return 1;
  if (value === "long-term") return 2;
  if (value === "uncertain") return 3;
  return 4;
}

function sortPipelineItems(items) {
  return [...items].sort((a, b) => (
    pipelineProbabilityRank(a) - pipelineProbabilityRank(b) ||
    reportDateSortValue(a.nextFollowUpDate).localeCompare(reportDateSortValue(b.nextFollowUpDate)) ||
    String(a.client || "").localeCompare(String(b.client || ""))
  ));
}

function pipelineGroupKey(item) {
  if (!item.nextFollowUpDate) return "no-date";
  if (daysUntil(item.nextFollowUpDate) <= 0) return "follow-up";
  const probability = String(item.probability || "Warm").toLowerCase();
  return ["hot", "warm", "long-term", "uncertain"].includes(probability) ? probability : "warm";
}

const PIPELINE_GROUPS = [
  { key: "follow-up", label: "Follow-up due" },
  { key: "hot", label: "Hot" },
  { key: "warm", label: "Warm" },
  { key: "long-term", label: "Long-term" },
  { key: "uncertain", label: "Uncertain" },
  { key: "no-date", label: "No follow-up date" },
];

function pipelineMatchesSearch(item) {
  const haystack = [item.client, item.location, item.stage, item.probability, item.nextAction, item.notes]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(pipelineSearchTerm.trim().toLowerCase());
}

function pipelineMatchesPriorityFilter(item) {
  if (pipelinePriorityFilter === "all") return true;
  return String(item.probability || "Warm").toLowerCase() === pipelinePriorityFilter;
}

function pipelineMatchesFocusFilter(item) {
  const dueIn = item.nextFollowUpDate ? daysUntil(item.nextFollowUpDate) : Number.POSITIVE_INFINITY;
  const priority = String(item.probability || "Warm").toLowerCase();
  if (pipelineFocusFilter === "all") return true;
  if (pipelineFocusFilter === "due") return Boolean(item.nextFollowUpDate) && dueIn <= 0;
  if (pipelineFocusFilter === "next30") return Boolean(item.nextFollowUpDate) && dueIn >= 0 && dueIn <= 30;
  if (pipelineFocusFilter === "no-date") return !item.nextFollowUpDate;
  return priority === "hot" || (Boolean(item.nextFollowUpDate) && dueIn <= 30);
}

function pipelineSummaryCard(label, value, filter, alert = false) {
  return `
    <button class="pipeline-summary-card${alert ? " alert" : ""}${pipelineFocusFilter === filter ? " active" : ""}" type="button" data-pipeline-summary-filter="${filter}">
      <span>${label}</span>
      <strong>${value}</strong>
    </button>
  `;
}

function renderPipeline() {
  const futureListings = sortPipelineItems(pipelineItems.filter((item) => item.type === "listing"));
  const activeBuyers = sortPipelineItems(pipelineItems.filter((item) => item.type === "buyer"));
  document.querySelector("#futureListingPipelineCount").textContent = futureListings.length;
  document.querySelector("#activeBuyerPipelineCount").textContent = activeBuyers.length;
  document.querySelectorAll("[data-pipeline-type]").forEach((button) => {
    const active = button.dataset.pipelineType === pipelineType;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-pipeline-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.pipelineView === pipelineDisplay);
  });
  document.querySelector("#pipelineFocusFilter").value = pipelineFocusFilter;

  const source = pipelineType === "listing" ? futureListings : activeBuyers;
  const counts = {
    focus: source.filter((item) => {
      const dueIn = item.nextFollowUpDate ? daysUntil(item.nextFollowUpDate) : Number.POSITIVE_INFINITY;
      return String(item.probability || "Warm").toLowerCase() === "hot" || (item.nextFollowUpDate && dueIn <= 30);
    }).length,
    due: source.filter((item) => item.nextFollowUpDate && daysUntil(item.nextFollowUpDate) <= 0).length,
    next30: source.filter((item) => item.nextFollowUpDate && daysUntil(item.nextFollowUpDate) >= 0 && daysUntil(item.nextFollowUpDate) <= 30).length,
    "no-date": source.filter((item) => !item.nextFollowUpDate).length,
  };
  document.querySelector("#pipelineSummary").innerHTML = [
    pipelineSummaryCard("Focus list", counts.focus, "focus", counts.due > 0),
    pipelineSummaryCard("Follow-up due", counts.due, "due", counts.due > 0),
    pipelineSummaryCard("Next 30 days", counts.next30, "next30"),
    pipelineSummaryCard("No follow-up date", counts["no-date"], "no-date", counts["no-date"] > 0),
    pipelineSummaryCard("All", source.length, "all"),
  ].join("");

  const visible = source.filter((item) => (
    pipelineMatchesSearch(item) &&
    pipelineMatchesFocusFilter(item) &&
    pipelineMatchesPriorityFilter(item)
  ));
  const groups = PIPELINE_GROUPS
    .map((group) => ({ ...group, items: visible.filter((item) => pipelineGroupKey(item) === group.key) }))
    .filter((group) => group.items.length);

  document.querySelector("#pipelineGroups").classList.toggle("card-view", pipelineDisplay === "cards");
  document.querySelector("#pipelineGroups").innerHTML = groups.length ? groups.map((group) => {
    const collapsed = collapsedPipelineGroups.has(group.key) && pipelinePriorityFilter === "all" && !pipelineSearchTerm;
    return `
      <section class="pipeline-group${collapsed ? " collapsed" : ""}">
        <button class="pipeline-group-heading" type="button" data-toggle-pipeline-group="${group.key}" aria-expanded="${!collapsed}">
          <span class="pipeline-group-caret">⌄</span>
          <strong>${group.label}</strong>
          <span>${group.items.length}</span>
        </button>
        <div class="pipeline-group-items">
          ${group.items.map((item) => pipelineCard(item, pipelineDisplay === "compact")).join("")}
        </div>
      </section>
    `;
  }).join("") : `<div class="today-empty">No ${pipelineType === "listing" ? "future listings" : "active buyers"} match these filters.</div>`;
}

function weekDates(offset = calendarWeekOffset) {
  const today = todayAtNoon();
  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());
  start.setDate(start.getDate() + (offset * 7));
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return dateKey(date);
  });
}

function weeklyItems(datesForWeek = weekDates()) {
  const dates = new Set(datesForWeek);
  const deadlineItems = allContractDeadlines()
    .filter((item) => item.date && item.date !== "NA" && dates.has(item.date))
    .map((item) => ({
      transactionId: item.transaction.id,
      date: item.date,
      label: item.label,
      transaction: item.transaction.client,
      done: item.completed,
      type: "Deadline",
      workflow: item.workflow,
      index: item.index,
    }));

  const taskItems = transactions.flatMap((transaction) => (
    visibleTaskEntries(transaction).map(({ task, index }) => ({
      transactionId: transaction.id,
      date: taskDueDate(task),
      label: taskLabel(task),
      transaction: transaction.client,
      done: taskDone(task),
      type: "Task",
      workflow: workflowFor(transaction),
      index,
      urgency: urgencyClassForDate(taskDueDate(task)),
    }))
  )).filter((item) => item.date && dates.has(item.date));

  return [...deadlineItems, ...taskItems];
}

function actionItems() {
  const deadlineItems = allContractDeadlines()
    .filter((item) => item.date && item.date !== "NA" && !item.completed)
    .map((item) => ({
      transactionId: item.transaction.id,
      date: item.date,
      label: item.label,
      transaction: item.transaction.client,
      type: "Deadline",
      workflow: item.workflow,
      index: item.index,
      owner: "Agent",
      dueIn: daysUntil(item.date),
    }));

  const taskItems = transactions.flatMap((transaction) => (
    visibleTaskEntries(transaction).map(({ task, index }) => ({
      transactionId: transaction.id,
      date: taskDueDate(task),
      label: taskLabel(task),
      transaction: transaction.client,
      type: "Task",
      workflow: workflowFor(transaction),
      index,
      owner: taskOwner(task) || "Agent",
      dueIn: daysUntil(taskDueDate(task)),
      done: taskDone(task),
    }))
  )).filter((item) => item.date && !item.done);

  return [...deadlineItems, ...taskItems]
    .filter((item) => Number.isFinite(item.dueIn) && item.dueIn <= 7)
    .sort((a, b) => a.dueIn - b.dueIn || a.transaction.localeCompare(b.transaction));
}

function actionBucketFor(item) {
  if (item.dueIn < 0) return "overdue";
  if (item.dueIn === 0) return "today";
  return "week";
}

function actionItemMarkup(item) {
  const urgency = item.dueIn <= 0 ? "due-now" : "due-week";
  const helper = item.dueIn < 0 ? `${Math.abs(item.dueIn)} day${Math.abs(item.dueIn) === 1 ? "" : "s"} overdue`
    : item.dueIn === 0 ? "Due today"
      : `Due ${dateLabel(item.date)}`;
  return `
    <button class="today-item ${urgency}" type="button" data-calendar-item="true" data-calendar-type="${item.type}" data-transaction-id="${item.transactionId}" data-calendar-workflow="${item.workflow}" data-calendar-index="${item.index}">
      <strong>${item.type}: ${item.label}</strong>
      <span>${item.transaction} · ${helper} · ${item.owner}</span>
    </button>
  `;
}

function renderTodayPanel() {
  const items = actionItems();
  const buckets = [
    ["overdue", "Overdue"],
    ["today", "Due Today"],
    ["week", "Due This Week"],
  ];
  document.querySelector("#todayBoard").innerHTML = buckets.map(([key, label]) => {
    const bucketItems = items.filter((item) => actionBucketFor(item) === key);
    return `
      <section class="today-column ${key}">
        <div class="today-heading">
          <h3>${label}</h3>
          <span>${bucketItems.length}</span>
        </div>
        <div class="today-list">
          ${bucketItems.length ? bucketItems.map(actionItemMarkup).join("") : `<div class="today-empty">Nothing here.</div>`}
        </div>
      </section>
    `;
  }).join("");
}

function openChecklistItems() {
  return transactions
    .filter((transaction) => !isClosed(transaction) && !isFailed(transaction))
    .flatMap((transaction) => (
      visibleTaskEntries(transaction).map(({ task, index }) => ({
        transaction,
        task,
        index,
        workflow: workflowFor(transaction),
      }))
    ))
    .filter(({ task }) => !taskDone(task))
    .sort((a, b) => {
      const aDue = taskDueDate(a.task);
      const bDue = taskDueDate(b.task);
      if (aDue && bDue) return aDue.localeCompare(bDue);
      if (aDue) return -1;
      if (bDue) return 1;
      return a.transaction.client.localeCompare(b.transaction.client);
    });
}

function renderOpenChecklistItems() {
  const items = openChecklistItems();
  const visibleItems = openChecklistExpanded ? items : items.slice(0, OPEN_CHECKLIST_PREVIEW_LIMIT);
  const listMarkup = visibleItems.map(({ transaction, task, index, workflow }) => {
    const dueDate = taskDueDate(task);
    const dueText = dueDate ? `Due ${dateLabel(dueDate)}` : "No due date";
    return `
      <button class="today-item checklist-link ${urgencyClassForDate(dueDate)}" type="button" data-calendar-item="true" data-calendar-type="Task" data-transaction-id="${transaction.id}" data-calendar-workflow="${workflow}" data-calendar-index="${index}">
        <strong>${taskLabel(task)}</strong>
        <span>${transaction.client} · ${transaction.address} · ${dueText} · ${taskOwner(task) || "Agent"}</span>
      </button>
    `;
  }).join("");
  const toggleMarkup = items.length > OPEN_CHECKLIST_PREVIEW_LIMIT
    ? `<button class="ghost-button open-checklist-toggle" type="button" data-toggle-open-checklist="${openChecklistExpanded ? "less" : "more"}">${openChecklistExpanded ? "Show fewer" : `Show all ${items.length}`}</button>`
    : "";
  document.querySelector("#openChecklistList").innerHTML = items.length
    ? `${listMarkup}${toggleMarkup}`
    : `<div class="today-empty">No open checklist items.</div>`;
}

function renderWeeklyCalendar() {
  const datesForWeek = weekDates();
  const items = weeklyItems(datesForWeek);
  const weekStart = datesForWeek[0];
  const weekEnd = datesForWeek[datesForWeek.length - 1];
  document.querySelector("#calendarWeekLabel").textContent = `${dateLabel(weekStart)} - ${dateLabel(weekEnd)}`;
  document.querySelector("#weeklyCalendar").innerHTML = datesForWeek.map((date) => {
    const dayItems = items.filter((item) => item.date === date);
    return `
      <div class="calendar-day ${date === dateKey(todayAtNoon()) ? "today" : ""}">
        <span>${new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(`${date}T12:00:00`))}</span>
        <strong>${dateLabel(date)}</strong>
        ${dayItems.length ? dayItems.map((item) => `
          <button class="calendar-item ${item.done ? "done" : ""} ${item.type === "Task" ? item.urgency : ""}" type="button" data-calendar-item="true" data-calendar-type="${item.type}" data-transaction-id="${item.transactionId}" data-calendar-workflow="${item.workflow}" data-calendar-index="${item.index}">
            ${item.type}: ${item.label}<br />
            <span>${item.transaction}</span>
          </button>
        `).join("") : `<div class="calendar-item done">No items</div>`}
      </div>
    `;
  }).join("");
}

function sortedByDeadline() {
  return allContractDeadlines()
    .filter((item) => {
      const dueIn = daysUntil(item.date);
      return !item.completed && item.date !== "NA" && dueIn >= -7 && Number.isFinite(dueIn);
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function deadlineMarkup(deadline) {
  const dueIn = daysUntil(deadline.date);
  const helper = deadline.completed
    ? "Met"
    : dueIn === 0 ? "Due today" : dueIn === 1 ? "Due tomorrow" : dueIn < 0 ? `${Math.abs(dueIn)} days overdue` : `Due in ${dueIn} days`;
  return `
    <button class="deadline-item ${deadline.completed ? "met" : dueIn <= 3 ? "urgent" : ""}" type="button" data-calendar-item="true" data-calendar-type="Deadline" data-transaction-id="${deadline.transaction.id}" data-calendar-workflow="${deadline.workflow}" data-calendar-index="${deadline.index}">
      <strong>${deadline.label}</strong>
      <span>${deadline.transaction.client} · ${dateLabel(deadline.date)} · ${helper}</span>
    </button>
  `;
}

function renderTransactions() {
  const filtered = getFilteredTransactions();
  const board = document.querySelector("#transactionBoard");
  if (!filtered.length) {
    board.innerHTML = `<section class="panel"><h2>${activeFilter === "closed" ? "No closed sales found" : "No active transactions found"}</h2><p>Try a different search or filter.</p></section>`;
    return;
  }

  board.innerHTML = transactionGroupsFor(filtered).map(([label, items]) => `
    <section class="transaction-group">
      <div class="transaction-group-header">
        <h3>${label}</h3>
        <span>${items.length}</span>
      </div>
      <div class="transaction-group-grid">
        ${items.map(transactionCard).join("")}
      </div>
    </section>
  `).join("");
}

function renderDeadlines() {
  const deadlines = sortedByDeadline();
  document.querySelector("#deadlineTimeline").innerHTML = deadlines.length ? deadlines.map((deadline) => {
    const dueIn = daysUntil(deadline.date);
    return `
      <button class="timeline-item ${dueIn <= 3 ? "urgent" : ""}" type="button" data-calendar-item="true" data-calendar-type="Deadline" data-transaction-id="${deadline.transaction.id}" data-calendar-workflow="${deadline.workflow}" data-calendar-index="${deadline.index}">
        <strong>${dateLabel(deadline.date)} · ${deadline.label}</strong>
        <span>${deadline.transaction.client} at ${deadline.transaction.address}</span>
      </button>
    `;
  }).join("") : `<div class="timeline-empty">No upcoming deadlines.</div>`;
}

function renderContacts() {
  const contacts = transactions.flatMap((transaction) => (
    transaction.contacts.map(([name, role, email]) => ({ name, role, email, address: transaction.address }))
  ));

  document.querySelector("#contactDirectory").innerHTML = contacts.map((contact) => `
    <article class="contact-card">
      <strong>${contact.name}</strong>
      <span>${contact.role}</span>
      <p>${contact.email && contact.email !== "Add email" ? contact.email : "No email yet"}<br />${contact.address}</p>
    </article>
  `).join("");
}

function clientContactFor(transaction) {
  return transaction.contacts.find(([, role]) => /client/i.test(role)) || transaction.contacts[0] || ["Client", "", ""];
}

function contactByRole(transaction, pattern) {
  return transaction.contacts.find(([, role]) => pattern.test(String(role || ""))) || null;
}

function firstNameFor(name) {
  return String(name || "there").split(/\s|&/).find(Boolean) || "there";
}

function usableAgentName(name) {
  const value = String(name || "").trim();
  if (!value || /^(co-?op|buyer agent|seller agent|listing agent|agent on the other side|other agent)$/i.test(value)) {
    return "";
  }
  return value;
}

function isNaDateValue(value) {
  return ["NA", "N/A"].includes(String(value || "").trim().toUpperCase());
}

function emailSafeDate(date) {
  if (isNaDateValue(date)) return "N/A";
  return date ? dateLabel(date) : "TBD";
}

function emailSafeTime(time) {
  if (!time) return "TBD";
  const [hours, minutes] = String(time).split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return time;
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(date);
}

function sortedDateEntries(entries) {
  return [...entries].sort((a, b) => {
    const aDate = deadlineDate(a);
    const bDate = deadlineDate(b);
    if (!aDate || isNaDateValue(aDate)) return 1;
    if (!bDate || isNaDateValue(bDate)) return -1;
    return new Date(aDate) - new Date(bDate);
  });
}

function dateLinesFor(entries, options = {}) {
  const prefix = options.bullets === false ? "" : "- ";
  return sortedDateEntries(entries)
    .map((entry) => {
      const label = deadlineLabel(entry);
      const date = deadlineDate(entry);
      const displayDate = options.naBlankLabels?.some((pattern) => pattern.test(label)) && !date
        ? "N/A"
        : emailSafeDate(date);
      return `${prefix}${label}: ${displayDate}`;
    })
    .join("\n");
}

function clientFacingDeadlines(entries) {
  return entries.filter((entry) => deadlineLabel(entry) !== BUYER_ANNIVERSARY_REMINDER_LABEL);
}

function termsLinesFor(transaction) {
  const terms = contractTermsFor(transaction);
  const inclusions = String(terms.inclusions || "").trim();
  const exclusions = String(terms.exclusions || "").trim();
  return `Included with the sale:\n${inclusions || "Please review the contract for included items, and let me know if you would like anything clarified."}\n\nExcluded from the sale:\n${exclusions || "No exclusions have been entered yet."}`;
}

function possessionLinesFor(transaction) {
  const details = contractDetailsFor(transaction);
  const possessionType = details.possessionType || (details.preSettlementPossessionStartDate ? "pre" : details.postSettlementPossessionEndDate ? "post" : "na");
  if (possessionType === "na") return "";
  const lines = [];
  if (possessionType === "pre" && details.preSettlementPossessionStartDate) {
    lines.push(`Pre-settlement possession start date: ${emailSafeDate(details.preSettlementPossessionStartDate)}`);
  }
  if (possessionType === "post" && details.postSettlementPossessionEndDate) {
    lines.push(`Post-settlement possession end date: ${emailSafeDate(details.postSettlementPossessionEndDate)}`);
  }
  if (details.possessionDeposit) {
    lines.push(`Possession deposit: ${details.possessionDeposit}`);
  }
  if (details.possessionRateType || details.possessionRateAmount) {
    lines.push(`Possession rate: ${[details.possessionRateType, details.possessionRateAmount].filter(Boolean).join(" - ")}`);
  }
  return lines.length ? `\n\nPossession agreement:\n${lines.join("\n")}` : "";
}

function inspectionLinesFor(transaction) {
  const details = contractDetailsFor(transaction);
  const inspections = String(details.electedInspections || "").trim();
  const days = String(details.dueDiligenceDays || "").trim();
  if (!inspections && !days) {
    return "";
  }
  const periodLine = days ? `Your inspection / due diligence period is ${days}.` : "Please review your contract for the inspection / due diligence period.";
  const inspectionLine = inspections
    ? `The inspections elected are: ${inspections}.`
    : "No elected inspections have been entered yet.";
  return `\n\nInspection / Due Diligence Period\n${periodLine}\n${inspectionLine} I'll coordinate scheduling and keep you posted as inspection dates, times, and costs are confirmed.`;
}

function prepareListingPrepEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const listingDates = activeDeadlines(transaction, "listing");
  const subject = `Listing timeline for ${transaction.address}`;
  const body = `Hi ${firstNameFor(clientName)},\n\nI wanted to send a clear outline of the listing timeline for ${transaction.address} so we are all working from the same dates.\n\nListing dates:\n${dateLinesFor(listingDates) || "- No listing dates have been added yet."}\n\nA few of these may move as we coordinate vendors, photos, showings, and launch timing, but this gives us a working plan to follow.\n\nI will keep you posted as each item is confirmed.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function preparePendingAgentEmail(transaction) {
  const contractDetails = contractDetailsFor(transaction);
  const coOpContact = contactByRole(transaction, /(co-?op|buyer agent|seller agent|agent on the other side|other agent)/i) || ["Co-op agent", "", ""];
  const [contactName, , agentEmail] = coOpContact;
  const agentName = transaction.side === "Buyer"
    ? usableAgentName(contractDetails.listingAgentName) || usableAgentName(contactName) || "there"
    : usableAgentName(contractDetails.buyerAgentName) || usableAgentName(contactName) || "there";
  const contractDates = clientFacingDeadlines(activeDeadlines(transaction, "contract"));
  const depositText = transaction.side === "Listing"
    ? `\n\nFor earnest money deposit delivery, our electronic deposit system is here:\n${ELECTRONIC_DEPOSIT_LINK}`
    : "";
  const subject = `Contract dates for ${transaction.address}`;
  const dateLines = dateLinesFor(contractDates, {
    naBlankLabels: transaction.side === "Listing" ? [/inspection contingency/i] : [],
  });
  const body = `Hi ${firstNameFor(agentName)},\n\nIt is a pleasure working with you on ${transaction.address}. I wanted to make sure we are on the same page with the key contract dates so we can keep everything moving smoothly.\n\nContract dates:\n${dateLines || "- No contract dates have been added yet."}${depositText}${possessionLinesFor(transaction)}\n\nIf you see anything that does not match your records, please let me know and I will update my file.\n\nLooking forward to working together toward a smooth closing.\n\nBest,\nLisa`;

  return {
    recipientName: agentName,
    recipientEmail: agentEmail,
    subject,
    body,
  };
}

function prepareContractClientEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const contractDates = clientFacingDeadlines(activeDeadlines(transaction, "contract"));
  const contractDetails = contractDetailsFor(transaction);
  const earnestMoneyAmount = contractDetails.earnestMoneyAmount || "[amount]";
  const listingBrokerName = contractDetails.listingBrokerName || "[listing broker]";
  const subject = `Contract dates and included items for ${transaction.address}`;
  const body = transaction.side === "Buyer"
    ? `Congratulations on going under contract on ${transaction.address}! I wanted to send a clear summary of the key dates and next steps.\n\nContract dates:\n\n${dateLinesFor(contractDates, { bullets: false }) || "No contract dates have been added yet."}\n\nEarnest Money Deposit\nYour earnest money deposit is ${earnestMoneyAmount}, payable to ${listingBrokerName}. I'll let you know if they offer an electronic payment option or if you'll need to submit a check.${inspectionLinesFor(transaction)}\n\nHomeowners Insurance\nDuring your inspection contingency period, I recommend getting quotes for homeowners insurance so there are no surprises with the cost. I recommend Gibbel Insurance in Lititz at ethan@gibbelinsurance.com and 717-626-8555. Or, James White with Homesale Insurance will be reaching out via email to provide a quote. Typically, you bundle your home and auto insurance for the best rate.\n\n${termsLinesFor(transaction)}${possessionLinesFor(transaction)}\n\nAs we get closer to settlement, we'll also review utilities and any transfer or setup items so nothing gets missed.\n\nPlease review everything against your contract and let me know if you have any questions or if anything looks different from what you expected.\n\nCongratulations again,\n\nLisa`
    : `Hi ${firstNameFor(clientName)},\n\nCongratulations on going under contract on ${transaction.address}. I wanted to send a clear summary of the key dates and the items noted as included or excluded in the contract.\n\nContract dates:\n${dateLinesFor(contractDates) || "- No contract dates have been added yet."}${inspectionLinesFor(transaction)}\n\n${termsLinesFor(transaction)}${possessionLinesFor(transaction)}\n\nAs we get closer to settlement, we will also review utilities and any transfer or setup items so nothing gets missed.\n\nPlease review this against your contract and let me know if you have any questions or if anything looks different from what you expected.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function prepareBuyerSettlementEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const details = settlementDetailsFor(transaction);
  const settlementDate = transaction.settlement || deadlineDate(activeDeadlines(transaction, "contract").find((entry) => deadlineLabel(entry) === "Settlement date"));
  const subject = `Getting ready for settlement at ${transaction.address}`;
  const body = `Hi ${firstNameFor(clientName)},\n\nAs we get closer to settlement for ${transaction.address}, I wanted to send the key details and utility reminders so you have everything in one place.\n\nSettlement:\n- Date: ${emailSafeDate(settlementDate)}\n- Time: ${emailSafeTime(details.settlementTime)}\n- Location: ${details.settlementLocation || "TBD"}\n\nFinal walk-through:\n- Date: ${emailSafeDate(details.walkThroughDate)}\n- Time: ${emailSafeTime(details.walkThroughTime)}\n\nPlease begin utilities on the settlement date, and set them up prior to settlement so service is ready for you when you take ownership.\n\nThe title company will transfer water and sewer, and trash if trash is paid to the municipality. You will need to set up electric, gas if applicable, trash if it is not handled by the municipality, and propane if applicable and the tank is rented.\n\nOn the day of settlement, please remember to get any passcodes for garage door openers, keyless entry locks, and alarm systems.\n\nPlease let me know if you have any questions.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function prepareSellerSettlementEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const details = settlementDetailsFor(transaction);
  const settlementDate = transaction.settlement || deadlineDate(activeDeadlines(transaction, "contract").find((entry) => deadlineLabel(entry) === "Settlement date"));
  const subject = `Getting ready for settlement at ${transaction.address}`;
  const body = `Hi ${firstNameFor(clientName)},\n\nAs we get closer to settlement for ${transaction.address}, I wanted to send the key details and a few reminders so everything is ready for the buyer's final walk-through and settlement.\n\nSettlement:\n- Date: ${emailSafeDate(settlementDate)}\n- Time: ${emailSafeTime(details.settlementTime)}\n- Location: ${details.settlementLocation || "TBD"}\n\nPlease contact your utility providers to cancel service, but schedule the cancellation for the day after settlement. This helps make sure utilities remain on for the buyer's final walk-through and for settlement day.\n\n${termsLinesFor(transaction)}\n\nPlease review the included and excluded items above so the property is left in line with the contract. Let me know if you have any questions.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function prepareAppraiserPrepEmail(transaction) {
  const appraiserContact = contactByRole(transaction, /appraiser/i) || ["Appraiser", "Appraiser", ""];
  const [appraiserName, , appraiserEmail] = appraiserContact;
  const subject = `Appraisal information for ${transaction.address}`;
  const body = `Hi ${firstNameFor(appraiserName)},\n\nThank you for handling the appraisal for ${transaction.address}. I wanted to send a quick summary of helpful information for your review.\n\nProperty address:\n${transaction.address}\n\nAttached / included for your reference:\n- Comparable sales\n- Multiple offer comparison, if applicable\n- Relevant property updates or improvements\n- Any supporting notes that may be helpful for valuation\n\nPlease let me know if there is anything else you need from me before or after the appointment.\n\nBest,\nLisa`;

  return {
    recipientName: appraiserName,
    recipientEmail: appraiserEmail,
    subject,
    body,
  };
}

function prepareReviewRequestEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const subject = `Thank you for trusting me with ${transaction.address}`;
  const body = `Hi ${firstNameFor(clientName)},\n\nThank you again for trusting me with your real estate move. I truly appreciate the opportunity to work with you.\n\nIf you had a positive experience, would you mind taking a moment to leave a review? Reviews help future clients feel more comfortable when choosing who to work with.\n\nGoogle review:\n${GOOGLE_REVIEW_LINK}\n\nZillow review:\n${ZILLOW_REVIEW_LINK}\n\nThank you so much. I am grateful for your support and referrals.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function prepareClientUpdateEmail(transaction) {
  const [clientName, , clientEmail] = clientContactFor(transaction);
  const workflow = workflowFor(transaction);
  const deadlines = clientFacingDeadlines(activeDeadlines(transaction, workflow))
    .filter((entry) => deadlineDate(entry) && deadlineDate(entry) !== "NA" && !deadlineCompleted(entry))
    .sort((a, b) => new Date(deadlineDate(a)) - new Date(deadlineDate(b)))
    .slice(0, 6);
  const tasks = activeTasks(transaction, workflow);
  const openTasks = tasks.filter((task) => !taskDone(task)).slice(0, 6);
  const doneCount = tasks.filter(taskDone).length;
  const subject = `Update on ${transaction.address}`;
  const deadlineLines = deadlines.length
    ? deadlines.map((entry) => `- ${deadlineLabel(entry)}: ${emailSafeDate(deadlineDate(entry))}`).join("\n")
    : "- No open key dates right now.";
  const taskLines = openTasks.length
    ? openTasks.map((task) => `- ${taskLabel(task)}${taskDueDate(task) ? `: due ${emailSafeDate(taskDueDate(task))}` : ""}`).join("\n")
    : "- No open checklist items right now.";
  const body = `Hi ${firstNameFor(clientName)},\n\nHere is a quick update on ${transaction.address}.\n\nCurrent status: ${transaction.status}\n${workflow === "listing" ? `Target settlement: ${emailSafeDate(transaction.settlement)}` : `Settlement: ${emailSafeDate(transaction.settlement)}`}\n\nUpcoming dates:\n${deadlineLines}\n\nChecklist progress:\n${doneCount} of ${tasks.length} items are complete.\n\nOpen items:\n${taskLines}\n\nNotes / next steps:\n${latestNoteText(transaction) || "I will keep you posted as the next steps move forward."}\n\nI will keep you updated as we move through the next milestone.\n\nBest,\nLisa`;

  return {
    recipientName: clientName,
    recipientEmail: clientEmail,
    subject,
    body,
  };
}

function emailDraftOptionsFor(transaction) {
  const options = [];
  if (transaction.side === "Listing" && workflowFor(transaction) === "listing") {
    options.push({
      id: "listingPrepClient",
      label: "Listing dates to seller",
      build: prepareListingPrepEmail,
    });
  }
  if (isPendingSale(transaction)) {
    options.push({
      id: "pendingAgent",
      label: "Contract dates to co-op agent",
      build: preparePendingAgentEmail,
    });
    options.push({
      id: "contractClient",
      label: transaction.side === "Listing" ? "Contract summary to seller" : "Contract summary to buyer",
      build: prepareContractClientEmail,
    });
    if (transaction.side === "Buyer") {
      options.push({
        id: "buyerSettlementPrep",
        label: "Getting ready for settlement",
        build: prepareBuyerSettlementEmail,
      });
    } else if (transaction.side === "Listing") {
      options.push({
        id: "sellerSettlementPrep",
        label: "Seller settlement reminder",
        build: prepareSellerSettlementEmail,
      });
      options.push({
        id: "appraiserPrep",
        label: "Appraiser prep email",
        build: prepareAppraiserPrepEmail,
      });
    }
  }
  if (isClosed(transaction)) {
    options.push({
      id: "reviewRequest",
      label: "Review request",
      build: prepareReviewRequestEmail,
    });
  }
  return options;
}

function emailDraftFor(transaction, typeId) {
  const options = emailDraftOptionsFor(transaction);
  const selected = options.find((option) => option.id === typeId) || options[0] || {
    id: "noTemplate",
    label: "No template available",
    build: () => {
      const [clientName, , clientEmail] = clientContactFor(transaction);
      return {
        recipientName: clientName,
        recipientEmail: clientEmail,
        subject: `Update on ${transaction.address}`,
        body: "No email template is available for this transaction status yet.",
      };
    },
  };
  return {
    ...selected.build(transaction),
    typeId: selected.id,
    options,
  };
}

function renderEmailDraft(transaction, typeId) {
  const { recipientName, recipientEmail, subject, body, typeId: selectedTypeId, options } = emailDraftFor(transaction, typeId);
  const typeSelect = document.querySelector("#emailDraftType");
  typeSelect.innerHTML = options.map((option) => `<option value="${option.id}">${option.label}</option>`).join("");
  typeSelect.value = selectedTypeId;

  document.querySelector("#emailDraftTo").textContent = recipientEmail
    ? `To: ${recipientName} · ${recipientEmail}`
    : `To: ${recipientName}`;
  document.querySelector("#emailDraftSubject").value = subject;
  document.querySelector("#emailDraftBody").value = body;
  currentEmailDraftMailto = `mailto:${encodeURIComponent(recipientEmail || "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function updateEmailDraftFor(transaction) {
  renderEmailDraft(transaction);
  document.querySelector("#emailDraftDialog").showModal();
}

function refreshOpenEmailDraft(typeId) {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  if (transaction) {
    renderEmailDraft(transaction, typeId);
  }
}

function renderTransactionInfo(transaction) {
  const form = document.querySelector("#transactionInfoForm");
  const statusForm = document.querySelector("#transactionStatusForm");
  form.elements.client.value = transaction.client || "";
  form.elements.address.value = transaction.address || "";
  populateStatusSelect(statusForm.elements.status, transaction.side, transaction.status || "Under contract");
}

function renderDetailContacts(transaction) {
  if (!transaction.contacts) transaction.contacts = [];
  document.querySelector("#detailContacts").innerHTML = transaction.contacts.map(([name, role, email], index) => `
    <div class="contact-edit-row" data-contact-row="${index}">
      <label>Name <input name="contactName" value="${escapeAttribute(name)}" placeholder="Name" /></label>
      <label>Role <input name="contactRole" value="${escapeAttribute(role)}" placeholder="Client, lender, title..." /></label>
      <label>Email <input name="contactEmail" value="${escapeAttribute(email === "Add email" ? "" : email)}" placeholder="Email" /></label>
      <button class="icon-button contact-remove-button" type="button" data-remove-contact="${index}" aria-label="Remove contact">x</button>
    </div>
  `).join("");
}

function saveTransactionInfo(options = {}) {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  if (!transaction) return;

  const infoForm = document.querySelector("#transactionInfoForm");
  const statusForm = document.querySelector("#transactionStatusForm");
  const previousClient = transaction.client;

  if (options.includeInfo !== false) {
    transaction.client = String(infoForm.elements.client.value || "").trim();
    transaction.address = String(infoForm.elements.address.value || "").trim();
  }

  if (options.includeStatus !== false) {
    transaction.status = statusForm.elements.status.value;
    transaction.workflow = transaction.side === "Listing" && isListingPrepStatus(transaction.status) ? "listing" : "contract";
    currentWorkflow = workflowFor(transaction);
  }

  if (isClosed(transaction)) {
    transaction.workflow = "contract";
    currentWorkflow = "contract";
    if (!transaction.postClosingTasks) transaction.postClosingTasks = defaultPostClosingChecklist(transaction.side);
  }
  if (isFailed(transaction)) {
    transaction.workflow = "contract";
    currentWorkflow = "contract";
  }

  const clientContact = transaction.contacts?.find(([, role]) => /client/i.test(role));
  if (options.includeInfo !== false && clientContact && (!clientContact[0] || clientContact[0] === previousClient)) {
    clientContact[0] = transaction.client;
  }

  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  document.querySelector("#detailStatus").textContent = `${transaction.side} · ${transaction.status}`;
  document.querySelector("#detailTitle").textContent = transaction.client;
  document.querySelector("#detailSubtitle").textContent = transaction.address;
  document.querySelector("#markClosedButton").hidden = isClosed(transaction) || isFailed(transaction);
  document.querySelector("#markFailedButton").hidden = isClosed(transaction) || isFailed(transaction);
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderDetailContacts(transaction);
  renderStickyNotes(transaction);
  renderAll();
  if (!options.silent) {
    showToast(saved ? "Transaction info saved." : "Transaction info updated for this session. Export a backup before closing.");
  }
}

function openTransaction(id) {
  const transaction = transactions.find((item) => item.id === Number(id));
  if (!transaction) return;
  rememberCloudRecordVersion(String(transaction.id), transaction);
  if (ensureListingDeadlineDefaults(transaction) || ensureContractDeadlineDefaults(transaction)) {
    saveTransactions();
    syncTransactionToCloud(transaction);
  }
  currentTransactionId = transaction.id;
  currentWorkflow = workflowFor(transaction);
  currentDetailTab = "dates";

  document.querySelector("#detailStatus").textContent = `${transaction.side} · ${transaction.status}`;
  document.querySelector("#detailTitle").textContent = transaction.client;
  document.querySelector("#detailSubtitle").textContent = transaction.address;
  renderDetailUpdated(transaction);
  document.querySelector("#detailSettlement").textContent = dateLabel(transaction.settlement);
  renderNotes(transaction);
  renderStickyNotes(transaction);
  document.querySelector("#markClosedButton").hidden = isClosed(transaction) || isFailed(transaction);
  document.querySelector("#markFailedButton").hidden = isClosed(transaction) || isFailed(transaction);
  renderTransactionInfo(transaction);
  renderReferral(transaction);
  renderFinance(transaction);
  renderFollowUp(transaction);
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  updateDetailTabs(transaction);

  renderDetailContacts(transaction);

  document.querySelector("#detailDocs").innerHTML = transaction.documents.map((documentName) => `
    <div class="mini-row"><strong>${documentName}</strong><small>Document link placeholder</small></div>
  `).join("");

  document.querySelector("#transactionDialog").showModal();
}

function openCalendarItem(itemButton) {
  openTransaction(itemButton.dataset.transactionId);
  const transaction = transactions.find((item) => item.id === Number(itemButton.dataset.transactionId));
  if (!transaction) return;

  currentWorkflow = itemButton.dataset.calendarWorkflow || workflowFor(transaction);
  currentDetailTab = itemButton.dataset.calendarType === "Task" ? "checklist" : "dates";
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  updateDetailTabs(transaction);

  const type = itemButton.dataset.calendarType;
  const index = itemButton.dataset.calendarIndex;
  const selector = type === "Deadline"
    ? `[data-deadline-card-index="${index}"][data-deadline-card-workflow="${currentWorkflow}"]`
    : `[data-task-card-index="${index}"][data-task-card-workflow="${currentWorkflow}"]`;
  const target = document.querySelector(selector);
  if (target) {
    target.classList.add("calendar-target");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => target.classList.remove("calendar-target"), 3200);
  }
}

function openFollowUpItem(itemButton) {
  openTransaction(itemButton.dataset.transactionId);
  currentDetailTab = "notes";
  const transaction = transactions.find((item) => item.id === Number(itemButton.dataset.transactionId));
  if (transaction) updateDetailTabs(transaction);
  const target = document.querySelector("#followUpForm");
  if (target) {
    target.classList.add("calendar-target");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => target.classList.remove("calendar-target"), 3200);
  }
}

function openSettlementPrepItem(itemButton) {
  openTransaction(itemButton.dataset.transactionId);
  currentDetailTab = "sale";
  const transaction = transactions.find((item) => item.id === Number(itemButton.dataset.transactionId));
  if (transaction) updateDetailTabs(transaction);
  const target = document.querySelector("#financeForm");
  if (target) {
    target.classList.add("calendar-target");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => target.classList.remove("calendar-target"), 3200);
  }
}

function renderReferral(transaction) {
  const referral = referralFor(transaction);
  const form = document.querySelector("#referralForm");
  form.elements.isReferral.checked = referral.isReferral;
  form.elements.referralFee.value = referral.fee || "";
  form.elements.referralPaidTo.value = referral.paidTo || "";
}

function updateConditionalSaleFields() {
  const form = document.querySelector("#financeForm");
  if (!form) return;
  const hoaApplies = form.elements.hoaApplies?.value || "yes";
  const possessionType = form.elements.possessionType?.value || "na";
  const hoaFields = document.querySelector("#hoaFields");
  const possessionFields = document.querySelector("#possessionFields");

  if (hoaFields) hoaFields.hidden = hoaApplies === "na";
  if (possessionFields) possessionFields.hidden = possessionType === "na";
  document.querySelectorAll("[data-possession-field]").forEach((field) => {
    field.hidden = possessionType === "na" || field.dataset.possessionField !== possessionType;
  });
}

function renderFinance(transaction) {
  const finance = financeFor(transaction);
  const terms = contractTermsFor(transaction);
  const contractDetails = contractDetailsFor(transaction);
  const settlementDetails = settlementDetailsFor(transaction);
  const lockboxDetails = lockboxDetailsFor(transaction);
  const hoaDetails = hoaDetailsFor(transaction);
  const form = document.querySelector("#financeForm");
  form.elements.salePrice.value = finance.salePrice || "";
  form.elements.commissionPercent.value = finance.commissionPercent || "";
  form.elements.lockboxType.value = lockboxDetails.type || "";
  form.elements.lockboxCode.value = lockboxDetails.code || "";
  form.elements.lockboxLocation.value = lockboxDetails.location || "";
  form.elements.lockboxNotes.value = lockboxDetails.notes || "";
  form.elements.alarmCode.value = lockboxDetails.alarmCode || "";
  form.elements.alarmInstructions.value = lockboxDetails.alarmInstructions || "";
  form.elements.titleCompany.value = transaction.title && transaction.title !== "Not added yet" && transaction.title !== "Not ordered yet" ? transaction.title : "";
  form.elements.titleContactName.value = settlementDetails.titleContactName || "";
  form.elements.titleContactPhone.value = settlementDetails.titleContactPhone || "";
  form.elements.titleContactEmail.value = settlementDetails.titleContactEmail || "";
  form.elements.lenderCompany.value = transaction.lender && transaction.lender !== "Not added yet" && transaction.lender !== "Buyer lender pending" && transaction.lender !== "Not under contract" ? transaction.lender : "";
  form.elements.lenderContactName.value = settlementDetails.lenderContactName || "";
  form.elements.lenderPhone.value = settlementDetails.lenderPhone || "";
  form.elements.lenderEmail.value = settlementDetails.lenderEmail || "";
  form.elements.settlementDate.value = transaction.settlement || "";
  form.elements.settlementTime.value = settlementDetails.settlementTime || "";
  form.elements.settlementLocation.value = settlementDetails.settlementLocation || "";
  form.elements.walkThroughDate.value = settlementDetails.walkThroughDate || "";
  form.elements.walkThroughTime.value = settlementDetails.walkThroughTime || "";
  form.elements.hoaCompany.value = hoaDetails.company || "";
  form.elements.hoaContactName.value = hoaDetails.contactName || "";
  form.elements.hoaPhone.value = hoaDetails.phone || "";
  form.elements.hoaEmail.value = hoaDetails.email || "";
  form.elements.hoaApplies.value = hoaDetails.applies === "na" ? "na" : "yes";
  form.elements.resaleOrderFrom.value = hoaDetails.resaleOrderFrom || "";
  form.elements.resaleOrderedDate.value = hoaDetails.resaleOrderedDate || "";
  form.elements.resaleExpectedDate.value = hoaDetails.resaleExpectedDate || "";
  form.elements.hoaNotes.value = hoaDetails.notes || "";
  form.elements.earnestMoneyAmount.value = contractDetails.earnestMoneyAmount || "";
  form.elements.listingBrokerName.value = contractDetails.listingBrokerName || "";
  form.elements.listingAgentName.value = contractDetails.listingAgentName || "";
  form.elements.buyerAgentName.value = contractDetails.buyerAgentName || "";
  form.elements.dueDiligenceDays.value = contractDetails.dueDiligenceDays || "";
  form.elements.electedInspections.value = contractDetails.electedInspections || "";
  form.elements.possessionType.value = contractDetails.possessionType || (contractDetails.preSettlementPossessionStartDate ? "pre" : contractDetails.postSettlementPossessionEndDate ? "post" : "na");
  form.elements.preSettlementPossessionStartDate.value = contractDetails.preSettlementPossessionStartDate || "";
  form.elements.postSettlementPossessionEndDate.value = contractDetails.postSettlementPossessionEndDate || "";
  form.elements.possessionDeposit.value = contractDetails.possessionDeposit || "";
  form.elements.possessionRateType.value = contractDetails.possessionRateType || "";
  form.elements.possessionRateAmount.value = contractDetails.possessionRateAmount || "";
  form.elements.inclusions.value = terms.inclusions || "";
  form.elements.exclusions.value = terms.exclusions || "";
  updateConditionalSaleFields();
  document.querySelector("#detailCommissionTotal").textContent = currency(commissionFor(transaction));
}

function renderFollowUp(transaction) {
  const followUp = followUpFor(transaction);
  const form = document.querySelector("#followUpForm");
  form.elements.lastUpdateDate.value = followUp.lastUpdateDate || "";
  form.elements.nextUpdateDate.value = followUp.nextUpdateDate || "";
  form.elements.frequency.value = followUp.frequency || followUpDefaultsFor(transaction).frequency;
  form.elements.method.value = followUp.method || "Email";
  form.elements.temperature.value = followUp.temperature || "Calm";
  form.elements.note.value = followUp.note || "";
}

function renderNotes(transaction) {
  const notes = noteLogFor(transaction);
  document.querySelector("#detailNotes").innerHTML = notes.length
    ? [...notes].reverse().map((note) => `
      <article class="note-log-entry">
        <div class="note-entry-meta">
          <strong>${escapeHtml(note.type || "General note")}</strong>
          <time>${formatDateTime(note.at)}</time>
        </div>
        <p>${escapeHtml(note.text)}</p>
      </article>
    `).join("")
    : `<div class="note-empty">No notes yet.</div>`;
}

function switchDetailTab(tabName) {
  currentDetailTab = tabName;
  document.querySelectorAll("[data-detail-section]").forEach((section) => {
    section.hidden = section.dataset.detailSection !== tabName;
  });
  document.querySelectorAll("[data-detail-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.detailTab === tabName);
  });
}

function updateDetailTabs(transaction) {
  const postClosingButton = document.querySelector("#postClosingTabButton");
  postClosingButton.hidden = !isClosed(transaction);
  if (!isClosed(transaction) && currentDetailTab === "postClosing") {
    currentDetailTab = "dates";
  }
  switchDetailTab(currentDetailTab || "dates");
}

function renderWorkflowToggle(transaction) {
  const toggle = document.querySelector("#workflowToggle");
  toggle.hidden = transaction.side !== "Listing";
  toggle.querySelectorAll(".workflow-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.workflow === currentWorkflow);
  });
  const convertButton = document.querySelector("#convertToPendingButton");
  convertButton.hidden = !(transaction.side === "Listing" && workflowFor(transaction) === "listing" && !isClosed(transaction) && !isFailed(transaction));
}

function renderDetailWorkflow(transaction, workflow) {
  document.querySelector("#detailDeadlineTitle").textContent = workflow === "listing"
    ? "Listing Prep Deadlines"
    : "Contract Deadlines";
  document.querySelector("#detailChecklistTitle").textContent = workflow === "listing"
    ? "Listing Prep Checklist"
    : "Under Contract Checklist";

  document.querySelector("#detailDeadlines").innerHTML = activeDeadlines(transaction, workflow).map((entry, index) => {
    const label = deadlineLabel(entry);
    const date = deadlineDate(entry);
    const isNa = date === "NA";
    const isInspectionDerived = [INSPECTION_NEGOTIATION_LABEL, INSPECTION_FINAL_RESPONSE_LABEL].includes(label);
    const completed = deadlineCompleted(entry);
    const dueIn = daysUntil(date);
    const helper = completed ? "Completed" : isNa ? "Does not apply" : isInspectionDerived ? "Auto from inspection contingency" : !Number.isFinite(dueIn) ? "Set after contract" : dueIn < 0 ? "Past" : dueIn === 0 ? "Today" : `${dueIn} days`;
    const googleSynced = googleCalendarEventId(entry) ? `<small class="google-sync-pill">Synced to Google</small>` : "";
    return `
      <div class="contract-deadline ${isNa ? "na" : completed ? "na" : dueIn >= 0 && dueIn <= 3 ? "urgent" : ""}" data-deadline-card-index="${index}" data-deadline-card-workflow="${workflow}">
        <span>${label}</span>
        <strong>${dateLabel(date)}</strong>
        <small>${helper}</small>
        ${googleSynced}
        <div class="deadline-edit-row">
          <input type="date" data-deadline-date-index="${index}" data-deadline-workflow="${workflow}" value="${date && date !== "NA" ? date : ""}" ${isNa || isInspectionDerived ? "disabled" : ""} />
        </div>
        <label class="na-toggle">
          <input type="checkbox" data-deadline-index="${index}" data-deadline-workflow="${workflow}" ${isNa ? "checked" : ""} ${isInspectionDerived ? "disabled" : ""} />
          N/A
        </label>
        <label class="na-toggle">
          <input type="checkbox" data-deadline-complete-index="${index}" data-deadline-workflow="${workflow}" ${completed ? "checked" : ""} ${isNa ? "disabled" : ""} />
          Met
        </label>
      </div>
    `;
  }).join("");

  document.querySelector("#detailTasks").innerHTML = visibleTaskEntries(transaction, workflow).map(({ task, index }) => `
    <label class="task-row ${taskDone(task) ? "done" : ""} ${!taskDone(task) ? urgencyClassForDate(taskDueDate(task)) : ""}" data-task-card-index="${index}" data-task-card-workflow="${workflow}">
      <input type="checkbox" data-task-list="workflow" data-task-index="${index}" data-task-workflow="${workflow}" ${taskDone(task) ? "checked" : ""} />
      <span><strong>${taskLabel(task)}</strong><small>${taskDueDate(task) ? `Due ${dateLabel(taskDueDate(task))}` : "No due date"}</small></span>
      <select class="task-owner-select" data-task-owner-index="${index}" data-task-owner-workflow="${workflow}" aria-label="Task owner">${ownerOptionsMarkup(taskOwner(task))}</select>
      <span>${taskDone(task) ? "Done" : "Open"}</span>
    </label>
  `).join("");

  const postClosingSection = document.querySelector("#postClosingSection");
  postClosingSection.hidden = !isClosed(transaction);
  document.querySelector("#detailPostClosingTasks").innerHTML = isClosed(transaction)
    ? postClosingTasksFor(transaction).map(([label, done, owner], index) => `
      <label class="task-row ${done ? "done" : ""}">
        <input type="checkbox" data-task-list="postClosing" data-task-index="${index}" ${done ? "checked" : ""} />
        <span><strong>${label}</strong><small>Owner: ${owner}</small></span>
        <span>${done ? "Done" : "Open"}</span>
      </label>
    `).join("")
    : "";
  updateDetailTabs(transaction);
}

function switchView(name) {
  Object.entries(views).forEach(([viewName, element]) => {
    element.classList.toggle("active", viewName === name);
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === name);
  });
}

function openMetricShortcut(button) {
  switchView(button.dataset.metricView);
  const targetId = button.dataset.metricTarget;
  if (!targetId) return;

  const target = document.querySelector(`#${targetId}`);
  if (target) {
    target.classList.add("calendar-target");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => target.classList.remove("calendar-target"), 3200);
  }
}

function addTransaction(form) {
  const data = new FormData(form);
  const side = data.get("side");
  const status = data.get("status");
  const workflow = side === "Listing" && isListingPrepStatus(status) ? "listing" : "contract";
  const listingDate = (name) => data.get(`${name}Na`) === "on" ? "NA" : data.get(name);
  const contractDate = (name) => data.get(`${name}Na`) === "on" ? "NA" : data.get(name);
  const targetSettlement = listingDate("targetSettlement");
  const settlement = workflow === "listing" ? targetSettlement : data.get("settlement");
  const followUpDefaults = side === "Listing" && workflow === "listing"
    ? { frequency: "Every 3-4 days", method: "Email", temperature: "Calm" }
    : { frequency: "Weekly", method: "Email", temperature: "Calm" };
  const nextFollowUp = addDaysToDateKey(dateKey(todayAtNoon()), followUpIntervalDays(followUpDefaults.frequency));
  const initialNote = String(data.get("notes") || "").trim();
  const createdAt = new Date().toISOString();
  const transaction = {
    id: Date.now(),
    client: data.get("client"),
    address: data.get("address"),
    side,
    status,
    workflow,
    lender: "Not added yet",
    title: "Not added yet",
    settlement,
    deadlines: [
      ["Earnest money deposit due", data.get("earnest")],
      [INSPECTION_CONTINGENCY_LABEL, contractDate("inspection")],
      ["Mortgage application due", data.get("mortgageApplication")],
      ["Mortgage commitment due", data.get("mortgageCommitment")],
      ["Settlement date", settlement],
    ],
    listingDeadlines: [
      ["Staging scheduled", listingDate("staging")],
      ["Photos/video scheduled", listingDate("photos")],
      ["Listing doc review date", listingDate("docReview")],
      ["Coming soon date", listingDate("comingSoon")],
      ["Active launch date", listingDate("activeLaunch")],
      ["Open House", listingDate("openHouse")],
      ["Home warranty ordered", listingDate("homeWarranty")],
      ["Target settlement date", targetSettlement],
    ],
    lastUpdate: "Not sent",
    nextUpdate: dateLabel(nextFollowUp),
    followUp: {
      lastUpdateDate: "",
      nextUpdateDate: nextFollowUp,
      note: "",
      ...followUpDefaults,
    },
    notes: initialNote || "No notes yet.",
    noteLog: initialNote ? [{ date: createdAt.slice(0, 10), at: createdAt, type: "General note", text: initialNote }] : [],
    documents: ["Document link"],
    tasks: defaultChecklist(side),
    listingTasks: defaultListingChecklist(),
    postClosingTasks: defaultPostClosingChecklist(side),
    referral: {
      isReferral: data.get("isReferral") === "on",
      fee: data.get("referralFee"),
      paidTo: data.get("referralPaidTo"),
    },
    finance: {
      salePrice: data.get("salePrice"),
      commissionPercent: data.get("commissionPercent"),
    },
    contacts: [[data.get("client"), "Client", "Add email"]],
  };
  ensureContractDeadlineDefaults(transaction);
  transactions.unshift(transaction);

  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  safeResetForm(form);
  updateNewTransactionMode();
  document.querySelector("#newTransactionDialog").close();
  renderAll();
  switchView("transactions");
  showToast(saved ? "Transaction saved in this browser." : "Transaction added for this session. Export a backup before closing.");
}

function addPipelineItem(form) {
  const data = new FormData(form);
  const existingId = Number(data.get("pipelineId"));
  const existing = pipelineItems.find((entry) => entry.id === existingId);
  const noteLog = existing ? pipelineNoteLogFor(existing) : [];
  const initialNotes = String(data.get("notes") || "").trim();
  if (!existing && initialNotes) {
    const timestamp = new Date().toISOString();
    noteLog.push({
      date: timestamp.slice(0, 10),
      at: timestamp,
      type: "General note",
      text: initialNotes,
    });
  }
  const item = {
    id: existing?.id || Date.now(),
    recordType: "pipeline",
    type: data.get("type"),
    client: String(data.get("client") || "").trim(),
    location: String(data.get("location") || "").trim(),
    price: String(data.get("price") || "").trim(),
    timing: String(data.get("timing") || "").trim(),
    stage: String(data.get("stage") || "").trim(),
    nextFollowUpDate: data.get("nextFollowUpDate"),
    probability: String(data.get("probability") || "").trim(),
    nextAction: String(data.get("nextAction") || "").trim(),
    notes: initialNotes,
    noteLog,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  if (existing) {
    Object.assign(existing, item);
  } else {
    pipelineItems.unshift(item);
  }
  const saved = savePipelineItems();
  syncPipelineItemToCloud(existing || item);
  safeResetForm(form);
  form.elements.pipelineId.value = "";
  document.querySelector("#pipelineDialogTitle").textContent = "Add Pipeline Item";
  document.querySelector("#pipelineDialog").close();
  renderAll();
  switchView("pipeline");
  showToast(saved ? "Pipeline item saved." : "Pipeline item updated for this session. Export a backup before closing.");
}

function fillPipelineForm(item) {
  const form = document.querySelector("#pipelineForm");
  form.elements.pipelineId.value = item.id;
  form.elements.type.value = item.type || "listing";
  form.elements.stage.value = item.stage || "Conversation";
  form.elements.client.value = item.client || "";
  form.elements.location.value = item.location || "";
  form.elements.price.value = item.price || "";
  form.elements.timing.value = item.timing || "";
  form.elements.nextFollowUpDate.value = item.nextFollowUpDate || "";
  form.elements.probability.value = item.probability || "Warm";
  form.elements.nextAction.value = item.nextAction || "";
  form.elements.notes.value = item.notes || "";
  form.elements.pipelineNoteType.value = "General note";
  form.elements.pipelineNoteText.value = "";
  renderPipelineNotes(item);
  renderPipelineStickyNotes(item);
}

function renderPipelineNotes(item) {
  const target = document.querySelector("#pipelineNotes");
  if (!target) return;
  if (!item) {
    target.innerHTML = `<div class="note-empty">Save this pipeline item before adding updates.</div>`;
    return;
  }
  const notes = pipelineNoteLogFor(item);
  target.innerHTML = notes.length
    ? [...notes].reverse().map((note) => `
      <article class="note-log-entry">
        <div class="note-entry-meta">
          <strong>${escapeHtml(note.type || "General note")}</strong>
          <time>${formatDateTime(note.at)}</time>
        </div>
        <p>${escapeHtml(note.text)}</p>
      </article>
    `).join("")
    : `<div class="note-empty">No pipeline updates yet.</div>`;
}

function addPipelineNote() {
  const form = document.querySelector("#pipelineForm");
  const id = Number(form.elements.pipelineId.value);
  const item = pipelineItems.find((entry) => entry.id === id);
  if (!item) {
    showToast("Save this pipeline item before adding updates.");
    return;
  }

  const text = String(form.elements.pipelineNoteText.value || "").trim();
  const type = String(form.elements.pipelineNoteType.value || "General note");
  if (!text) {
    showToast("Add update text first.");
    return;
  }

  const timestamp = new Date().toISOString();
  if (type === "Loose end") {
    addPipelineStickyLooseEnd(item, text, timestamp);
  } else {
    pipelineNoteLogFor(item).push({
      date: timestamp.slice(0, 10),
      at: timestamp,
      type,
      text,
    });
    item.notes = text;
    item.updatedAt = timestamp;
  }
  const saved = savePipelineItems();
  syncPipelineItemToCloud(item);
  form.elements.pipelineNoteText.value = "";
  form.elements.pipelineNoteType.value = "General note";
  renderPipelineNotes(item);
  renderPipelineStickyNotes(item);
  renderAll();
  showToast(saved ? type === "Loose end" ? "Pipeline sticky loose end added." : "Pipeline update added." : "Pipeline update added for this session. Export a backup before closing.");
}

function openPipelineItem(id) {
  const item = pipelineItems.find((entry) => entry.id === Number(id));
  if (!item) return;
  rememberCloudRecordVersion(`pipeline-${item.id}`, item);
  document.querySelector("#pipelineDialogTitle").textContent = "Edit Pipeline Item";
  fillPipelineForm(item);
  document.querySelector("#pipelineDialog").showModal();
}

function transactionFromPipeline(item) {
  const isListing = item.type === "listing";
  const side = isListing ? "Listing" : "Buyer";
  const status = isListing ? "New listing" : "Under contract";
  const workflow = isListing ? "listing" : "contract";
  const convertedAt = new Date().toISOString();
  const pipelineNotes = pipelineNoteLogFor(item);
  const initialNote = [
    item.notes,
    item.nextAction ? `Next action: ${item.nextAction}` : "",
    item.timing ? `Likely timing: ${item.timing}` : "",
    item.price ? `Target price/range: ${item.price}` : "",
  ].filter(Boolean).join("\n");
  return {
    id: Date.now(),
    client: item.client,
    address: item.location || "Address not added yet",
    side,
    status,
    workflow,
    lender: "Not added yet",
    title: "Not added yet",
    settlement: "",
    deadlines: [
      ["Earnest money deposit due", ""],
      ["Inspection contingency ends", ""],
      ["Mortgage application due", ""],
      ["Mortgage commitment due", ""],
      ["Settlement date", ""],
    ],
    listingDeadlines: [
      ["Staging scheduled", ""],
      ["Photos/video scheduled", ""],
      ["Listing doc review date", ""],
      ["Coming soon date", ""],
      ["Active launch date", ""],
      ["Open House", "NA"],
      ["Home warranty ordered", ""],
      ["Target settlement date", ""],
    ],
    lastUpdate: "Not sent",
    nextUpdate: item.nextFollowUpDate ? dateLabel(item.nextFollowUpDate) : "Not set",
    followUp: {
      lastUpdateDate: "",
      nextUpdateDate: item.nextFollowUpDate || "",
      note: item.nextAction || "",
      ...(isListing ? { frequency: "Every 3-4 days", method: "Email", temperature: "Calm" } : { frequency: "Weekly", method: "Email", temperature: "Calm" }),
    },
    notes: initialNote || "Converted from pipeline.",
    stickyNotes: stickyNotesFor(item),
    noteLog: [
      ...pipelineNotes,
      {
        date: convertedAt.slice(0, 10),
        at: convertedAt,
        type: "General note",
        text: initialNote || "Converted from pipeline.",
      },
    ],
    documents: ["Document link"],
    tasks: defaultChecklist(side),
    listingTasks: defaultListingChecklist(),
    postClosingTasks: defaultPostClosingChecklist(side),
    contacts: [[item.client, "Client", "Add email"]],
    finance: {
      salePrice: "",
      commissionPercent: "",
    },
  };
}

function convertPipelineItem(id) {
  const item = pipelineItems.find((entry) => entry.id === Number(id));
  if (!item) return;
  const confirmed = window.confirm(`Convert ${item.client} to a ${item.type === "listing" ? "new listing" : "buyer transaction"}?`);
  if (!confirmed) return;
  const transaction = transactionFromPipeline(item);
  transactions.unshift(transaction);
  pipelineItems = pipelineItems.filter((entry) => entry.id !== item.id);
  saveTransactions();
  savePipelineItems();
  syncTransactionToCloud(transaction);
  deletePipelineItemFromCloud(item.id);
  renderAll();
  switchView("transactions");
  showToast("Pipeline item converted to a transaction.");
}

function deletePipelineItem(id) {
  const item = pipelineItems.find((entry) => entry.id === Number(id));
  if (!item) return;
  const confirmed = window.confirm(`Delete ${item.client} from the pipeline?`);
  if (!confirmed) return;
  pipelineItems = pipelineItems.filter((entry) => entry.id !== item.id);
  savePipelineItems();
  deletePipelineItemFromCloud(item.id);
  renderAll();
  showToast("Pipeline item deleted.");
}

function deleteCurrentTransaction() {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const confirmed = window.confirm(`Delete ${transaction.client} at ${transaction.address}?`);
  if (!confirmed) return;

  transactions = transactions.filter((item) => item.id !== currentTransactionId);
  const deletedId = currentTransactionId;
  currentTransactionId = null;
  const saved = saveTransactions();
  deleteTransactionFromCloud(deletedId);
  document.querySelector("#transactionDialog").close();
  renderAll();
  showToast(saved ? "Transaction deleted." : "Transaction deleted for this session. Export a backup before closing.");
}

function clearAllTransactions() {
  const confirmed = window.prompt("Type DELETE to remove all transactions and pipeline items from this app and Supabase.");
  if (confirmed !== "DELETE") {
    showToast("Clear all canceled.");
    return;
  }

  transactions = [];
  pipelineItems = [];
  currentTransactionId = null;
  const saved = saveTransactions();
  savePipelineItems({ markLocal: false });
  clearCloudTransactions();
  renderAll();
  showToast(saved ? "All transactions and pipeline items cleared." : "All data cleared for this session.");
}

function defaultListingChecklist() {
  return [
    ["Staging scheduled", false, "Agent"],
    ["Photos/video scheduled", false, "Agent"],
    ["Listing documents reviewed", false, "Agent"],
    ["Listing added to Bright", false, "Agent"],
    ["Coming soon date confirmed", false, "Agent"],
    ["Active launch date confirmed", false, "Agent"],
    [HOME_WARRANTY_ORDER_TASK_LABEL, false, "Agent"],
    ["Target settlement date reviewed", false, "Agent"],
  ];
}

function defaultChecklist(side) {
  const shared = [
    ["Contract details confirmed", false, "Agent"],
    ["Earnest money deposit confirmed", false, "Agent"],
    ["Accounting settlement notice submitted", false, "Agent"],
    ["TSR submitted", false, "Agent"],
    ["Final walk through scheduled in ShowingTime", false, "Agent"],
    ["Send reminder to set up utilities", false, "Agent"],
  ];

  if (side === "Listing") {
    return [
      ...shared,
      ["Inspection response signed", false, "Agent"],
      ["Order resale certificate if applicable", false, "Agent"],
      [HOME_WARRANTY_CONVERT_TASK_LABEL, false, "Agent"],
      ["Confirm appraisal appointment is set", false, "Agent"],
      ["Send comps / multiple offer comparison / appraiser prep email", false, "Agent"],
      ["Let buyer agent know appraisal appointment date", false, "Agent"],
      ["Sign and lockbox removal scheduled", false, "Agent"],
    ];
  }

  return [
    ...shared,
    ["Mortgage application confirmed", false, "Lender"],
    ["Closing gift purchased", false, "Agent"],
  ];
}

function defaultPostClosingChecklist(side) {
  if (side === "Listing") {
    return [
      ["Update address in Cloze", false, "Agent"],
      ["If local: add tags per Cloze instructions", false, "Agent"],
      ["If local: add seller to Lisa's movie event group in Resource Center", false, "Agent"],
      ["If not local: add only 20XX HUD tag", false, "Agent"],
      ["Request review on Google and/or Zillow", false, "Agent"],
    ];
  }

  return [
    ["Add to American Lifestyle Magazine contacts for mailings", false, "Agent"],
    ["Update mailing address in Cloze", false, "Agent"],
    ["Add tags per Cloze instructions", false, "Agent"],
    ["One-year anniversary ecard set up in Resource Center", false, "Agent"],
    ["Contact added to Resource Center", false, "Agent"],
    ["Contact added to Lisa's movie event group", false, "Agent"],
    ["Add 1-week calendar reminder to check in and ask for referral", false, "Agent"],
    ["Add 1-month check-in calendar reminder", false, "Agent"],
    ["Add 1-year check-in calendar reminder", false, "Agent"],
    ["Add reminder in Lisa's calendar to send card and brownies in one year for anniversary", false, "Agent"],
    ["Add anniversary card with brownies reminder", false, "Agent"],
    ["Request review on Google and/or Zillow", false, "Agent"],
  ];
}

function updateNewTransactionMode(event) {
  const form = document.querySelector("#newTransactionForm");
  const sideSelect = form.elements.side;
  const statusSelect = form.elements.status;
  if (event?.target === sideSelect) {
    populateStatusSelect(statusSelect, sideSelect.value, sideSelect.value === "Listing" ? "New listing" : "Under contract");
  }
  if (!statusOptionsForSide(sideSelect.value).includes(statusSelect.value)) {
    populateStatusSelect(statusSelect, sideSelect.value, sideSelect.value === "Listing" ? "New listing" : "Under contract");
  }
  const side = sideSelect.value;
  const status = statusSelect.value;
  const listingMode = side === "Listing" && isListingPrepStatus(status);
  const activeListingMode = side === "Listing" && status === "Active listing";
  const listingFields = document.querySelector("#listingDateFields");
  const contractFields = document.querySelector("#contractDateFields");

  listingFields.hidden = !listingMode;
  contractFields.hidden = listingMode;
  listingFields.querySelectorAll('input[type="date"]').forEach((input) => {
    const naBox = listingFields.querySelector(`[data-na-for="${input.name}"]`);
    input.disabled = Boolean(naBox?.checked);
    input.required = listingMode && !activeListingMode && !input.disabled && input.name !== "homeWarranty" && input.name !== "openHouse";
  });
  contractFields.querySelectorAll('input[type="date"]').forEach((input) => {
    const naBox = contractFields.querySelector(`[data-na-for="${input.name}"]`);
    input.disabled = Boolean(naBox?.checked);
    input.required = !listingMode && !input.disabled;
  });
}

function renderAll() {
  renderMetrics();
  renderDashboard();
  renderTransactions();
  renderPipeline();
  renderDeadlines();
  renderContacts();
  renderReports();
  setupCollapsiblePanels();
}

function syncRangeInputs() {
  document.querySelector("#closedRangeStart").value = closedRangeStart;
  document.querySelector("#closedRangeEnd").value = closedRangeEnd;
  document.querySelector("#reportRangeStart").value = reportRangeStart;
  document.querySelector("#reportRangeEnd").value = reportRangeEnd;
}

document.addEventListener("click", (event) => {
  const pipelineTypeButton = event.target.closest("[data-pipeline-type]");
  if (pipelineTypeButton) {
    pipelineType = pipelineTypeButton.dataset.pipelineType;
    renderPipeline();
    return;
  }

  const pipelineViewButton = event.target.closest("[data-pipeline-view]");
  if (pipelineViewButton) {
    pipelineDisplay = pipelineViewButton.dataset.pipelineView;
    renderPipeline();
    return;
  }

  const pipelineSummaryButton = event.target.closest("[data-pipeline-summary-filter]");
  if (pipelineSummaryButton) {
    pipelineFocusFilter = pipelineSummaryButton.dataset.pipelineSummaryFilter;
    document.querySelector("#pipelineFocusFilter").value = pipelineFocusFilter;
    renderPipeline();
    return;
  }

  const pipelineGroupButton = event.target.closest("[data-toggle-pipeline-group]");
  if (pipelineGroupButton) {
    const group = pipelineGroupButton.dataset.togglePipelineGroup;
    if (collapsedPipelineGroups.has(group)) collapsedPipelineGroups.delete(group);
    else collapsedPipelineGroups.add(group);
    renderPipeline();
    return;
  }

  const collapseButton = event.target.closest("[data-collapse-panel]");
  if (collapseButton) {
    const key = collapseButton.dataset.collapsePanel;
    if (collapsedSections.has(key)) {
      collapsedSections.delete(key);
    } else {
      collapsedSections.add(key);
    }
    saveCollapsedSections();
    setupCollapsiblePanels();
    return;
  }

  const calendarItem = event.target.closest("[data-calendar-item]");
  if (calendarItem) {
    openCalendarItem(calendarItem);
    return;
  }

  const followUpItem = event.target.closest("[data-open-follow-up]");
  if (followUpItem) {
    openFollowUpItem(followUpItem);
    return;
  }

  const settlementPrepItem = event.target.closest("[data-open-settlement-prep]");
  if (settlementPrepItem) {
    openSettlementPrepItem(settlementPrepItem);
    return;
  }

  const stickyEditButton = event.target.closest("[data-edit-sticky]");
  if (stickyEditButton && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    if (!transaction) return;
    const sticky = stickyNotesFor(transaction).find((note) => note.id === Number(stickyEditButton.dataset.editSticky));
    if (!sticky) return;
    const updatedText = window.prompt("Edit sticky note", sticky.text);
    if (updatedText === null) return;
    const trimmedText = updatedText.trim();
    if (!trimmedText) {
      showToast("Sticky note text cannot be blank.");
      return;
    }
    sticky.text = trimmedText;
    sticky.updatedAt = new Date().toISOString();
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    renderStickyNotes(transaction);
    renderAll();
    showToast(saved ? "Sticky note updated." : "Sticky note updated for this session. Export a backup before closing.");
    return;
  }

  const stickyCompleteButton = event.target.closest("[data-complete-sticky]");
  if (stickyCompleteButton && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    if (!transaction) return;
    const sticky = stickyNotesFor(transaction).find((note) => note.id === Number(stickyCompleteButton.dataset.completeSticky));
    if (!sticky) return;
    sticky.completed = true;
    sticky.completedAt = new Date().toISOString();
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    renderStickyNotes(transaction);
    renderAll();
    showToast(saved ? "Sticky loose end completed." : "Sticky note completed for this session. Export a backup before closing.");
    return;
  }

  const pipelineStickyEditButton = event.target.closest("[data-edit-pipeline-sticky]");
  if (pipelineStickyEditButton) {
    const id = Number(document.querySelector("#pipelineForm").elements.pipelineId.value);
    const item = pipelineItems.find((entry) => entry.id === id);
    if (!item) return;
    const sticky = stickyNotesFor(item).find((note) => note.id === Number(pipelineStickyEditButton.dataset.editPipelineSticky));
    if (!sticky) return;
    const updatedText = window.prompt("Edit pipeline sticky note", sticky.text);
    if (updatedText === null) return;
    const trimmedText = updatedText.trim();
    if (!trimmedText) {
      showToast("Sticky note text cannot be blank.");
      return;
    }
    sticky.text = trimmedText;
    sticky.updatedAt = new Date().toISOString();
    item.updatedAt = sticky.updatedAt;
    const saved = savePipelineItems();
    syncPipelineItemToCloud(item);
    renderPipelineStickyNotes(item);
    renderAll();
    showToast(saved ? "Pipeline sticky note updated." : "Pipeline sticky note updated for this session. Export a backup before closing.");
    return;
  }

  const pipelineStickyCompleteButton = event.target.closest("[data-complete-pipeline-sticky]");
  if (pipelineStickyCompleteButton) {
    const id = Number(document.querySelector("#pipelineForm").elements.pipelineId.value);
    const item = pipelineItems.find((entry) => entry.id === id);
    if (!item) return;
    const sticky = stickyNotesFor(item).find((note) => note.id === Number(pipelineStickyCompleteButton.dataset.completePipelineSticky));
    if (!sticky) return;
    sticky.completed = true;
    sticky.completedAt = new Date().toISOString();
    item.updatedAt = sticky.completedAt;
    const saved = savePipelineItems();
    syncPipelineItemToCloud(item);
    renderPipelineStickyNotes(item);
    renderAll();
    showToast(saved ? "Pipeline sticky loose end completed." : "Pipeline sticky note completed for this session. Export a backup before closing.");
    return;
  }

  const openChecklistToggle = event.target.closest("[data-toggle-open-checklist]");
  if (openChecklistToggle) {
    openChecklistExpanded = openChecklistToggle.dataset.toggleOpenChecklist === "more";
    renderOpenChecklistItems();
    return;
  }

  const metricShortcut = event.target.closest("[data-metric-view]");
  if (metricShortcut) {
    openMetricShortcut(metricShortcut);
    return;
  }

  const viewButton = event.target.closest("[data-view], [data-view-button]");
  if (viewButton) switchView(viewButton.dataset.view || viewButton.dataset.viewButton);

  const convertPipelineButton = event.target.closest("[data-convert-pipeline]");
  if (convertPipelineButton) {
    convertPipelineItem(convertPipelineButton.dataset.convertPipeline);
    return;
  }

  const deletePipelineButton = event.target.closest("[data-delete-pipeline]");
  if (deletePipelineButton) {
    deletePipelineItem(deletePipelineButton.dataset.deletePipeline);
    return;
  }

  const editPipelineButton = event.target.closest("[data-edit-pipeline]");
  if (editPipelineButton) {
    openPipelineItem(editPipelineButton.dataset.editPipeline);
    return;
  }

  const pipelineTile = event.target.closest("[data-open-pipeline]");
  if (pipelineTile) {
    openPipelineItem(pipelineTile.dataset.openPipeline);
    return;
  }

  const mapItem = event.target.closest("[data-map-address]");
  if (mapItem) {
    setListingMapAddress(mapItem.dataset.mapAddress);
    document.querySelectorAll("[data-map-address]").forEach((button) => {
      button.classList.toggle("active", button === mapItem);
    });
    return;
  }

  const transactionButton = event.target.closest("[data-transaction-id]");
  if (transactionButton) openTransaction(transactionButton.dataset.transactionId);

  const workflowButton = event.target.closest("[data-workflow]");
  if (workflowButton && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    currentWorkflow = workflowButton.dataset.workflow;
    renderWorkflowToggle(transaction);
    renderDetailWorkflow(transaction, currentWorkflow);
  }

  const detailTab = event.target.closest("[data-detail-tab]");
  if (detailTab && currentTransactionId) {
    switchDetailTab(detailTab.dataset.detailTab);
  }
});

document.querySelector("#transactionSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderTransactions();
});

document.querySelector("#pipelineSearch").addEventListener("input", (event) => {
  pipelineSearchTerm = event.target.value;
  renderPipeline();
});

document.querySelector("#pipelineFocusFilter").addEventListener("change", (event) => {
  pipelineFocusFilter = event.target.value;
  renderPipeline();
});

document.querySelector("#pipelinePriorityFilter").addEventListener("change", (event) => {
  pipelinePriorityFilter = event.target.value;
  renderPipeline();
});

document.querySelector("#closedRangeStart").addEventListener("change", (event) => {
  closedRangeStart = event.target.value || "2026-01-01";
  renderMetrics();
});

document.querySelector("#closedRangeEnd").addEventListener("change", (event) => {
  closedRangeEnd = event.target.value || "2026-12-31";
  renderMetrics();
});

document.querySelector("#reportRangeStart").addEventListener("change", (event) => {
  reportRangeStart = event.target.value || "2026-01-01";
  renderReports();
});

document.querySelector("#reportRangeEnd").addEventListener("change", (event) => {
  reportRangeEnd = event.target.value || "2026-12-31";
  renderReports();
});

document.querySelectorAll("[data-action-report-range]").forEach((button) => {
  button.addEventListener("click", () => {
    actionReportPreset = button.dataset.actionReportRange;
    if (actionReportPreset === "custom" && !actionReportStart && !actionReportEnd) {
      actionReportStart = startOfWeekKey();
      actionReportEnd = endOfWeekKey();
    }
    renderActionReport();
  });
});

document.querySelector("#actionReportStart").addEventListener("change", (event) => {
  actionReportPreset = "custom";
  actionReportStart = event.target.value;
  renderActionReport();
});

document.querySelector("#actionReportEnd").addEventListener("change", (event) => {
  actionReportPreset = "custom";
  actionReportEnd = event.target.value;
  renderActionReport();
});

document.querySelector("#printActionReportButton").addEventListener("click", () => {
  renderActionReport();
  window.print();
});

document.querySelector("#previousWeekButton").addEventListener("click", () => {
  calendarWeekOffset -= 1;
  renderWeeklyCalendar();
});

document.querySelector("#currentWeekButton").addEventListener("click", () => {
  calendarWeekOffset = 0;
  renderWeeklyCalendar();
});

document.querySelector("#nextWeekButton").addEventListener("click", () => {
  calendarWeekOffset += 1;
  renderWeeklyCalendar();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("active", item === button));
    renderTransactions();
  });
});

document.querySelector("#closeDialog").addEventListener("click", () => {
  document.querySelector("#transactionDialog").close();
});

document.querySelector("#openSettingsButton").addEventListener("click", () => {
  document.querySelector("#settingsDialog").showModal();
});

document.querySelector("#closeSettingsDialog").addEventListener("click", () => {
  document.querySelector("#settingsDialog").close();
});

document.querySelector("#transactionInfoForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveTransactionInfo({ includeStatus: false });
});

document.querySelector("#transactionInfoForm").addEventListener("input", () => {
  scheduleFormAutoSave("transactionInfo", () => saveTransactionInfo({ includeStatus: false, silent: true }));
});

document.querySelector("#transactionStatusForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveTransactionInfo({ includeInfo: false });
});

document.querySelector("#transactionStatusForm").elements.status.addEventListener("change", () => {
  scheduleFormAutoSave("transactionStatus", () => saveTransactionInfo({ includeInfo: false, silent: true }));
});

document.querySelector("#convertToPendingButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  if (!transaction) return;
  const confirmed = window.confirm(`Convert ${transaction.client} to a pending listing? Listing prep dates and checklist will stay saved.`);
  if (!confirmed) return;

  transaction.status = "Pending listing";
  transaction.workflow = "contract";
  currentWorkflow = "contract";
  if (!transaction.deadlines) {
    transaction.deadlines = [
      ["Earnest money deposit due", ""],
      ["Inspection contingency ends", ""],
      ["Mortgage application due", ""],
      ["Mortgage commitment due", ""],
      ["Settlement date", transaction.settlement || ""],
    ];
  }

  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  document.querySelector("#detailStatus").textContent = `${transaction.side} · ${transaction.status}`;
  renderTransactionInfo(transaction);
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Converted to pending sale. Add contract dates next." : "Converted for this session. Export a backup before closing.");
});

document.querySelector("#prepareEmailButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  if (transaction) updateEmailDraftFor(transaction);
});

document.querySelector("#addStickyNoteButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  if (!transaction) return;
  const noteText = window.prompt("Add sticky note");
  if (noteText === null) return;
  const trimmedText = noteText.trim();
  if (!trimmedText) {
    showToast("Add sticky note text first.");
    return;
  }
  addStickyLooseEnd(transaction, trimmedText);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  renderNotes(transaction);
  renderStickyNotes(transaction);
  renderAll();
  showToast(saved ? "Sticky loose end added." : "Sticky note added for this session. Export a backup before closing.");
});

document.querySelector("#closeEmailDraft").addEventListener("click", () => {
  document.querySelector("#emailDraftDialog").close();
});

document.querySelector("#emailDraftType").addEventListener("change", (event) => {
  refreshOpenEmailDraft(event.target.value);
});

document.querySelector("#copyEmailDraftButton").addEventListener("click", async () => {
  const subject = document.querySelector("#emailDraftSubject").value;
  const body = document.querySelector("#emailDraftBody").value;
  const draft = `Subject: ${subject}\n\n${body}`;
  try {
    await navigator.clipboard.writeText(draft);
    showToast("Email draft copied.");
  } catch {
    document.querySelector("#emailDraftBody").select();
    document.execCommand("copy");
    showToast("Email draft copied.");
  }
});

document.querySelector("#openEmailDraftButton").addEventListener("click", () => {
  const subject = document.querySelector("#emailDraftSubject").value;
  const body = document.querySelector("#emailDraftBody").value;
  const toLine = document.querySelector("#emailDraftTo").textContent;
  const emailMatch = toLine.match(/[^\s·]+@[^\s·]+/);
  const recipient = emailMatch ? emailMatch[0] : "";
  window.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector("#markClosedButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  transaction.status = transaction.side === "Listing" ? "Closed listing" : "Closed";
  transaction.workflow = "contract";
  currentWorkflow = "contract";
  if (!transaction.postClosingTasks) {
    transaction.postClosingTasks = defaultPostClosingChecklist(transaction.side);
  }
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  document.querySelector("#markClosedButton").hidden = true;
  document.querySelector("#markFailedButton").hidden = true;
  document.querySelector("#detailStatus").textContent = `${transaction.side} · ${transaction.status}`;
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Marked closed. Post-closing checklist is ready." : "Marked closed for this session. Export a backup before closing.");
});

document.querySelector("#markFailedButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  transaction.status = transaction.side === "Listing" ? "Lost/canceled" : "Failed";
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  document.querySelector("#markClosedButton").hidden = true;
  document.querySelector("#markFailedButton").hidden = true;
  document.querySelector("#detailStatus").textContent = `${transaction.side} · ${transaction.status}`;
  renderWorkflowToggle(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Marked failed. Post-closing checklist will stay hidden." : "Marked failed for this session. Export a backup before closing.");
});

document.querySelector("#deleteTransactionButton").addEventListener("click", deleteCurrentTransaction);
document.querySelector("#connectGoogleButton").addEventListener("click", connectGoogleCalendar);
document.querySelector("#syncGoogleButton").addEventListener("click", syncCurrentTransactionToGoogle);

document.querySelector("#newTransactionButton").addEventListener("click", () => {
  updateNewTransactionMode();
  document.querySelector("#newTransactionDialog").showModal();
});

function openPipelineDialog() {
  const form = document.querySelector("#pipelineForm");
  safeResetForm(form);
  form.elements.pipelineId.value = "";
  document.querySelector("#pipelineDialogTitle").textContent = "Add Pipeline Item";
  renderPipelineNotes(null);
  renderPipelineStickyNotes(null);
  document.querySelector("#pipelineDialog").showModal();
}

document.querySelector("#newPipelineButton").addEventListener("click", openPipelineDialog);
document.querySelector("#addPipelineFromViewButton").addEventListener("click", openPipelineDialog);

document.querySelector("#closePipelineDialog").addEventListener("click", () => {
  document.querySelector("#pipelineDialog").close();
  document.querySelector("#pipelineDialogTitle").textContent = "Add Pipeline Item";
  document.querySelector("#pipelineForm").elements.pipelineId.value = "";
});

document.querySelector("#pipelineForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addPipelineItem(event.currentTarget);
});

document.querySelector("#addPipelineStickyNoteButton").addEventListener("click", () => {
  const form = document.querySelector("#pipelineForm");
  const id = Number(form.elements.pipelineId.value);
  const item = pipelineItems.find((entry) => entry.id === id);
  if (!item) {
    showToast("Save this pipeline item before adding sticky notes.");
    return;
  }
  const noteText = window.prompt("Add pipeline sticky note");
  if (noteText === null) return;
  const trimmedText = noteText.trim();
  if (!trimmedText) {
    showToast("Add sticky note text first.");
    return;
  }
  addPipelineStickyLooseEnd(item, trimmedText);
  const saved = savePipelineItems();
  syncPipelineItemToCloud(item);
  renderPipelineNotes(item);
  renderPipelineStickyNotes(item);
  renderAll();
  showToast(saved ? "Pipeline sticky loose end added." : "Pipeline sticky note added for this session. Export a backup before closing.");
});

document.querySelector("#addPipelineNoteButton").addEventListener("click", addPipelineNote);

document.querySelector("#closeNewDialog").addEventListener("click", () => {
  document.querySelector("#newTransactionDialog").close();
});

document.querySelector("#newTransactionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  addTransaction(event.currentTarget);
});

document.querySelectorAll("#listingDateFields, #contractDateFields").forEach((section) => {
  section.addEventListener("change", (event) => {
    const naBox = event.target.closest("[data-na-for]");
    if (!naBox) return;
    const dateInput = section.querySelector(`[name="${naBox.dataset.naFor}"]`);
    dateInput.disabled = naBox.checked;
    if (naBox.checked) dateInput.value = "";
    updateNewTransactionMode();
  });
});

document.querySelector("#detailTasks").addEventListener("change", (event) => {
  const ownerSelect = event.target.closest("[data-task-owner-index]");
  if (ownerSelect && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    const tasks = sourceTasksFor(transaction, ownerSelect.dataset.taskOwnerWorkflow);
    setTaskOwner(tasks[Number(ownerSelect.dataset.taskOwnerIndex)], ownerSelect.value);
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    renderDetailWorkflow(transaction, ownerSelect.dataset.taskOwnerWorkflow);
    renderAll();
    showToast(saved ? "Task owner saved." : "Task owner updated for this session. Export a backup before closing.");
    return;
  }

  const checkbox = event.target.closest("[data-task-index]");
  if (!checkbox || !currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const tasks = checkbox.dataset.taskList === "postClosing"
    ? postClosingTasksFor(transaction)
    : sourceTasksFor(transaction, checkbox.dataset.taskWorkflow);
  setTaskDone(tasks[Number(checkbox.dataset.taskIndex)], checkbox.checked);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  renderDetailWorkflow(transaction, checkbox.dataset.taskWorkflow);
  renderAll();
  showToast(saved ? "Checklist saved." : "Checklist updated for this session. Export a backup before closing.");
});

document.querySelector("#detailPostClosingTasks").addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-task-index]");
  if (!checkbox || !currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const tasks = postClosingTasksFor(transaction);
  setTaskDone(tasks[Number(checkbox.dataset.taskIndex)], checkbox.checked);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Post-closing checklist saved." : "Post-closing checklist updated for this session. Export a backup before closing.");
});

document.querySelector("#addContactButton").addEventListener("click", () => {
  if (!currentTransactionId) return;
  const transaction = transactions.find((item) => item.id === currentTransactionId);
  transaction.contacts = transaction.contacts || [];
  transaction.contacts.push(["", "", ""]);
  renderDetailContacts(transaction);
});

document.querySelector("#detailContacts").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-contact]");
  if (!removeButton || !currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  transaction.contacts.splice(Number(removeButton.dataset.removeContact), 1);
  renderDetailContacts(transaction);
  saveContactDetails({ silent: true });
});

function saveContactDetails(options = {}) {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const rows = Array.from(document.querySelectorAll("#detailContacts .contact-edit-row"));
  transaction.contacts = rows.map((row) => {
    const name = row.querySelector('[name="contactName"]').value.trim();
    const role = row.querySelector('[name="contactRole"]').value.trim();
    const email = row.querySelector('[name="contactEmail"]').value.trim();
    return [name, role, email];
  }).filter(([name, role, email]) => name || role || email);

  const clientContact = transaction.contacts.find(([, role]) => /client/i.test(role));
  if (clientContact?.[0]) {
    transaction.client = clientContact[0];
    document.querySelector("#transactionInfoForm").elements.client.value = transaction.client;
  }

  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  document.querySelector("#detailTitle").textContent = transaction.client;
  if (!options.silent) renderDetailContacts(transaction);
  renderAll();
  if (!options.silent) {
    showToast(saved ? "Contacts saved." : "Contacts updated for this session. Export a backup before closing.");
  }
}

document.querySelector("#detailContactsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveContactDetails();
});

document.querySelector("#detailContactsForm").addEventListener("input", () => {
  scheduleFormAutoSave("contacts", () => saveContactDetails({ silent: true }));
});

document.querySelector("#detailContactsForm").addEventListener("change", () => {
  scheduleFormAutoSave("contacts", () => saveContactDetails({ silent: true }));
});

document.querySelector("#detailDeadlines").addEventListener("change", (event) => {
  const dateInput = event.target.closest("[data-deadline-date-index]");
  if (dateInput && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    const workflow = dateInput.dataset.deadlineWorkflow;
    const index = Number(dateInput.dataset.deadlineDateIndex);
    setActiveDeadline(transaction, workflow, index, dateInput.value);
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    renderDetailWorkflow(transaction, workflow);
    renderAll();
    showToast(saved ? "Deadline date updated." : "Deadline date updated for this session. Export a backup before closing.");
    return;
  }

  const complete = event.target.closest("[data-deadline-complete-index]");
  if (complete && currentTransactionId) {
    const transaction = transactions.find((item) => item.id === currentTransactionId);
    const workflow = complete.dataset.deadlineWorkflow;
    const index = Number(complete.dataset.deadlineCompleteIndex);
    setDeadlineCompleted(activeDeadlines(transaction, workflow)[index], complete.checked);
    const saved = saveTransactions();
    syncTransactionToCloud(transaction);
    renderDetailWorkflow(transaction, workflow);
    renderAll();
    showToast(saved ? "Deadline completion updated." : "Deadline completion updated for this session. Export a backup before closing.");
    return;
  }

  const checkbox = event.target.closest("[data-deadline-index]");
  if (!checkbox || !currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const workflow = checkbox.dataset.deadlineWorkflow;
  const index = Number(checkbox.dataset.deadlineIndex);
  const existing = activeDeadlines(transaction, workflow)[index][1];
  setActiveDeadline(transaction, workflow, index, checkbox.checked ? "NA" : "");
  setDeadlineCompleted(activeDeadlines(transaction, workflow)[index], false);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  renderDetailWorkflow(transaction, workflow);
  renderAll();
  showToast(saved
    ? checkbox.checked ? "Deadline marked N/A." : "Deadline restored. Add a date if needed."
    : `Deadline updated for this session. Previous value was ${dateLabel(existing)}.`
  );
});

document.querySelector("#customDeadlineForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(event.currentTarget);
  const name = String(data.get("deadlineName") || "").trim();
  const date = data.get("deadlineDate");

  if (!name || !date) {
    showToast("Add both a deadline name and date.");
    return;
  }

  activeDeadlines(transaction, currentWorkflow).push([name, date]);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  safeResetForm(event.currentTarget);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Custom deadline added." : "Custom deadline added for this session. Export a backup before closing.");
});

document.querySelector("#customTaskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(event.currentTarget);
  const name = String(data.get("taskName") || "").trim();
  const owner = data.get("taskOwner") || "Agent";
  const dueDate = data.get("taskDueDate");

  if (!name) {
    showToast("Add a task name.");
    return;
  }

  sourceTasksFor(transaction, currentWorkflow).push([name, false, owner, dueDate]);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  safeResetForm(event.currentTarget);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  showToast(saved ? "Task added." : "Task added for this session. Export a backup before closing.");
});

function saveReferralDetails(options = {}) {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(document.querySelector("#referralForm"));
  transaction.referral = {
    isReferral: data.get("isReferral") === "on",
    fee: data.get("referralFee"),
    paidTo: data.get("referralPaidTo"),
  };
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  if (!options.silent) {
    showToast(saved ? "Referral details saved." : "Referral details updated for this session. Export a backup before closing.");
  }
}

document.querySelector("#referralForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveReferralDetails();
});

document.querySelector("#referralForm").addEventListener("input", () => {
  scheduleFormAutoSave("referral", () => saveReferralDetails({ silent: true }));
});

document.querySelector("#referralForm").addEventListener("change", () => {
  scheduleFormAutoSave("referral", () => saveReferralDetails({ silent: true }));
});

function saveFinanceDetails(options = {}) {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(document.querySelector("#financeForm"));
  transaction.finance = {
    salePrice: data.get("salePrice"),
    commissionPercent: data.get("commissionPercent"),
  };
  transaction.lockboxDetails = {
    type: String(data.get("lockboxType") || "").trim(),
    code: String(data.get("lockboxCode") || "").trim(),
    location: String(data.get("lockboxLocation") || "").trim(),
    notes: String(data.get("lockboxNotes") || "").trim(),
    alarmCode: String(data.get("alarmCode") || "").trim(),
    alarmInstructions: String(data.get("alarmInstructions") || "").trim(),
  };
  transaction.title = String(data.get("titleCompany") || "").trim() || transaction.title || "Not added yet";
  transaction.lender = String(data.get("lenderCompany") || "").trim() || transaction.lender || "Not added yet";
  setSettlementDate(transaction, data.get("settlementDate"));
  transaction.settlementDetails = {
    titleContactName: String(data.get("titleContactName") || "").trim(),
    titleContactPhone: String(data.get("titleContactPhone") || "").trim(),
    titleContactEmail: String(data.get("titleContactEmail") || "").trim(),
    lenderContactName: String(data.get("lenderContactName") || "").trim(),
    lenderPhone: String(data.get("lenderPhone") || "").trim(),
    lenderEmail: String(data.get("lenderEmail") || "").trim(),
    settlementTime: data.get("settlementTime"),
    settlementLocation: String(data.get("settlementLocation") || "").trim(),
    walkThroughDate: data.get("walkThroughDate"),
    walkThroughTime: data.get("walkThroughTime"),
  };
  transaction.hoaDetails = {
    applies: String(data.get("hoaApplies") || "yes"),
    company: String(data.get("hoaCompany") || "").trim(),
    contactName: String(data.get("hoaContactName") || "").trim(),
    phone: String(data.get("hoaPhone") || "").trim(),
    email: String(data.get("hoaEmail") || "").trim(),
    resaleOrderFrom: String(data.get("resaleOrderFrom") || "").trim(),
    resaleOrderedDate: data.get("resaleOrderedDate"),
    resaleExpectedDate: data.get("resaleExpectedDate"),
    notes: String(data.get("hoaNotes") || "").trim(),
  };
  transaction.contractDetails = {
    earnestMoneyAmount: String(data.get("earnestMoneyAmount") || "").trim(),
    listingBrokerName: String(data.get("listingBrokerName") || "").trim(),
    listingAgentName: String(data.get("listingAgentName") || "").trim(),
    buyerAgentName: String(data.get("buyerAgentName") || "").trim(),
    dueDiligenceDays: String(data.get("dueDiligenceDays") || "").trim(),
    electedInspections: String(data.get("electedInspections") || "").trim(),
    possessionType: String(data.get("possessionType") || "na"),
    preSettlementPossessionStartDate: data.get("possessionType") === "pre" ? data.get("preSettlementPossessionStartDate") : "",
    postSettlementPossessionEndDate: data.get("possessionType") === "post" ? data.get("postSettlementPossessionEndDate") : "",
    possessionDeposit: String(data.get("possessionDeposit") || "").trim(),
    possessionRateType: String(data.get("possessionRateType") || "").trim(),
    possessionRateAmount: String(data.get("possessionRateAmount") || "").trim(),
  };
  transaction.contractTerms = {
    inclusions: String(data.get("inclusions") || "").trim(),
    exclusions: String(data.get("exclusions") || "").trim(),
  };
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  if (!options.silent) renderFinance(transaction);
  else document.querySelector("#detailCommissionTotal").textContent = currency(commissionFor(transaction));
  document.querySelector("#detailSettlement").textContent = dateLabel(transaction.settlement);
  renderDetailWorkflow(transaction, currentWorkflow);
  renderAll();
  if (!options.silent) {
    showToast(saved ? "Sale, settlement, lender, lockbox, and HOA details saved." : "Sale info updated for this session. Export a backup before closing.");
  }
}

document.querySelector("#financeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveFinanceDetails();
});

document.querySelector("#financeForm").addEventListener("change", (event) => {
  if (event.target.matches('[name="hoaApplies"], [name="possessionType"]')) {
    updateConditionalSaleFields();
  }
  scheduleFormAutoSave("finance", () => saveFinanceDetails({ silent: true }));
});

document.querySelector("#financeForm").addEventListener("input", () => {
  scheduleFormAutoSave("finance", () => saveFinanceDetails({ silent: true }));
});

function saveFollowUpDetails(options = {}) {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(document.querySelector("#followUpForm"));
  transaction.followUp = {
    lastUpdateDate: data.get("lastUpdateDate"),
    nextUpdateDate: data.get("nextUpdateDate"),
    frequency: data.get("frequency"),
    method: data.get("method"),
    temperature: data.get("temperature"),
    note: String(data.get("note") || "").trim(),
  };
  transaction.lastUpdate = transaction.followUp.lastUpdateDate ? dateLabel(transaction.followUp.lastUpdateDate) : transaction.lastUpdate || "Not sent";
  transaction.nextUpdate = transaction.followUp.nextUpdateDate ? dateLabel(transaction.followUp.nextUpdateDate) : transaction.nextUpdate || "Not set";
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  if (!options.silent) renderFollowUp(transaction);
  renderAll();
  if (!options.silent) {
    showToast(saved ? "Client follow-up saved." : "Client follow-up updated for this session. Export a backup before closing.");
  }
}

document.querySelector("#followUpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  saveFollowUpDetails();
});

document.querySelector("#followUpForm").addEventListener("input", () => {
  scheduleFormAutoSave("followUp", () => saveFollowUpDetails({ silent: true }));
});

document.querySelector("#followUpForm").addEventListener("change", () => {
  scheduleFormAutoSave("followUp", () => saveFollowUpDetails({ silent: true }));
});

document.querySelector("#markUpdateSentButton").addEventListener("click", () => {
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const followUp = followUpFor(transaction);
  const today = dateKey(todayAtNoon());
  followUp.lastUpdateDate = today;
  followUp.nextUpdateDate = addDaysToDateKey(today, followUpIntervalDays(followUp.frequency));
  transaction.lastUpdate = dateLabel(followUp.lastUpdateDate);
  transaction.nextUpdate = dateLabel(followUp.nextUpdateDate);
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  renderFollowUp(transaction);
  renderAll();
  showToast(saved ? "Marked update sent. Next follow-up date set." : "Marked update sent for this session. Export a backup before closing.");
});

document.querySelector("#noteEntryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentTransactionId) return;

  const transaction = transactions.find((item) => item.id === currentTransactionId);
  const data = new FormData(event.currentTarget);
  const noteText = String(data.get("noteText") || "").trim();
  const noteType = String(data.get("noteType") || "General note");
  const shouldPinSticky = data.get("makeStickyNote") === "on" || noteType === "Loose end";
  if (!noteText) {
    showToast("Add note text first.");
    return;
  }

  const timestamp = new Date().toISOString();
  if (shouldPinSticky) {
    addStickyLooseEnd(transaction, noteText, timestamp);
  } else {
    const notes = noteLogFor(transaction);
    notes.push({
      date: timestamp.slice(0, 10),
      at: timestamp,
      type: noteType,
      text: noteText,
    });
    transaction.notes = noteText;
  }
  const saved = saveTransactions();
  syncTransactionToCloud(transaction);
  safeResetForm(event.currentTarget);
  renderNotes(transaction);
  renderStickyNotes(transaction);
  renderAll();
  showToast(saved ? shouldPinSticky ? "Sticky loose end added." : "Dated note added." : "Note added for this session. Export a backup before closing.");
});

document.querySelector("#exportDataButton").addEventListener("click", exportTransactions);

document.querySelector("#importDataInput").addEventListener("change", (event) => {
  importTransactions(event.target.files[0]);
  event.target.value = "";
});

document.querySelector("#authForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const action = event.submitter?.dataset.authAction || "signin";
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");

  if (!email || !password) {
    showToast("Enter an email and password.");
    return;
  }

  try {
    if (action === "signup") {
      if (String(password).length < 8) {
        showToast("Use at least 8 characters for the password.");
        return;
      }
      await createCloudAccount(email, password);
    } else {
      await signInToCloud(email, password);
    }
  } catch (error) {
    if (cloudSession?.access_token) {
      showToast("Shared data is already connected. Sign out first if you need to switch accounts.");
    } else if (action === "signup") {
      showToast(signupErrorMessage(error));
    } else {
      showToast("Sign-in failed. Check the email and password for an existing approved account.");
    }
    console.error(error);
  }
});

document.querySelector("#resetPasswordButton").addEventListener("click", async () => {
  const form = document.querySelector("#authForm");
  const email = String(new FormData(form).get("email") || "").trim();
  if (!email) {
    showToast("Enter your email first, then click Forgot password.");
    return;
  }

  try {
    await sendPasswordReset(email);
  } catch (error) {
    showToast(syncErrorMessage(error, "Password reset failed."));
    console.error(error);
  }
});

document.querySelector("#inviteForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const password = String(data.get("password") || "");
  const confirmPassword = String(data.get("confirmPassword") || "");

  if (password.length < 8) {
    showToast("Use at least 8 characters for the password.");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match.");
    return;
  }

  try {
    await completeInviteSetup(password);
  } catch (error) {
    showToast("Account setup failed. Send a fresh invite and try again.");
    console.error(error);
  }
});

document.querySelector("#uploadLocalButton").addEventListener("click", uploadLocalTransactions);
document.querySelector("#refreshCloudButton").addEventListener("click", () => loadCloudTransactions({ confirmReplace: true }));
document.querySelector("#cloudBackupButton").addEventListener("click", exportCloudBackup);
document.querySelector("#clearAllButton").addEventListener("click", clearAllTransactions);
document.querySelector("#signOutButton").addEventListener("click", signOutOfCloud);
document.querySelector("#backgroundSelect").addEventListener("change", (event) => {
  setBackground(event.target.value);
});

document.querySelector('#newTransactionForm select[name="side"]').addEventListener("change", updateNewTransactionMode);
document.querySelector('#newTransactionForm select[name="status"]').addEventListener("change", updateNewTransactionMode);

setBackground(loadBackground());
prepareInviteSetup();
updateNewTransactionMode();
syncRangeInputs();
renderSyncState();
renderAll();
initializeCloudSync();
document.addEventListener("visibilitychange", refreshWhenReturningToApp);
window.addEventListener("focus", () => {
  if (hasLocalOnlyChanges) scheduleAutoUpload();
});

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  let reloadingForUpdate = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForUpdate) return;
    reloadingForUpdate = true;
    window.location.reload();
  });
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(watchForAppUpdates)
      .catch((error) => {
        console.warn("Closing Desk could not register install support.", error);
      });
  });
}
