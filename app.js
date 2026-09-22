const STORAGE_KEY = "steady-day-data-v1";
const HABITS = [
  { id: "breakfast", label: "Protein-forward breakfast", value: 2 },
  { id: "fiber", label: "Fiber or vegetables with two meals", value: 2 },
  { id: "water", label: "Water before afternoon coffee/snack", value: 1 },
  { id: "plan", label: "Followed or adjusted the meal plan", value: 3 },
  { id: "sweets", label: "Chose a planned sweet or skipped sweets", value: 2 },
  { id: "evening", label: "Closed the kitchen after dinner", value: 2 },
];

const EARNINGS = [
  ["Dog walk", 1],
  ["Treadmill", 2],
  ["Yoga", 2],
  ["Vibration plate", 1],
  ["Weights", 3],
  ["Weight bench", 3],
  ["Balanced breakfast", 2],
  ["Protein + fiber dinner", 2],
  ["Follow meal plan for the day", 3],
  ["Plan the week", 5],
];

const IDEAS = [
  {
    name: "Steel-cut oats with berries, walnuts, cottage cheese",
    type: "breakfast",
    tags: ["high fiber", "protein-aware", "blood sugar steady"],
    ingredients: ["steel-cut oats", "berries", "walnuts", "cottage cheese"],
    note: "Your preferred breakfast, balanced with fiber, protein, and fat.",
  },
  {
    name: "Berry cacao kefir smoothie",
    type: "lunch",
    tags: ["quick", "high protein", "blood sugar steady"],
    ingredients: ["berries", "plain yogurt", "unsweetened nut milk", "kefir", "collagen peptides", "cacao nibs", "cocoa powder", "coconut butter"],
    note: "Your regular smoothie style, portioned to keep it satisfying without becoming dessert.",
  },
  {
    name: "Greens and mushroom egg scramble",
    type: "breakfast",
    tags: ["high protein", "quick", "blood sugar steady"],
    ingredients: ["eggs", "mushrooms", "spinach", "avocado"],
    note: "Moosewood-adjacent comfort with Hyman-style protein and healthy fat.",
  },
  {
    name: "Greek yogurt bowl with berries, walnuts, and cinnamon",
    type: "breakfast",
    tags: ["quick", "high protein", "sweet craving"],
    ingredients: ["Greek yogurt", "berries", "walnuts", "cinnamon"],
    note: "Good when you want something sweet but steady.",
  },
  {
    name: "Lentil vegetable soup with side protein",
    type: "lunch",
    tags: ["vegetarian", "high fiber", "leftovers"],
    ingredients: ["lentils", "carrots", "celery", "tomatoes", "Greek yogurt or chicken"],
    note: "Vegetable-forward and filling; add protein to make it more blood-sugar supportive.",
  },
  {
    name: "Chickpea cucumber feta salad",
    type: "lunch",
    tags: ["vegetarian", "quick", "high fiber"],
    ingredients: ["chickpeas", "cucumber", "feta", "greens", "olive oil"],
    note: "Fresh, Moosewood-ish, and easy to prep ahead.",
  },
  {
    name: "Salmon bowl with roasted vegetables",
    type: "dinner",
    tags: ["high protein", "anti-inflammatory", "blood sugar steady"],
    ingredients: ["salmon", "broccoli", "peppers", "cauliflower rice", "tahini"],
    note: "A steady plate with protein, fiber, and healthy fat.",
  },
  {
    name: "Turkey lettuce wraps with tahini herb sauce",
    type: "dinner",
    tags: ["quick", "high protein", "lower carb"],
    ingredients: ["turkey", "lettuce", "cucumber", "tahini", "herbs"],
    note: "Good for nights when cooking motivation is low.",
  },
  {
    name: "Apple slices with almond butter",
    type: "snack",
    tags: ["quick", "sweet craving"],
    ingredients: ["apple", "almond butter"],
    note: "Fruit paired with fat helps it feel steadier.",
  },
  {
    name: "Hummus vegetables with turkey roll-ups",
    type: "snack",
    tags: ["high protein", "high fiber", "quick"],
    ingredients: ["hummus", "carrots", "peppers", "turkey slices"],
    note: "A snack that acts more like a mini meal.",
  },
];

IDEAS.push(
  {
    name: "Savory cottage cheese bowl with cucumber and herbs",
    type: "breakfast",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["cottage cheese", "cucumber", "tomatoes", "herbs", "olive oil"],
    note: "A no-cook breakfast when you want protein without sweetness.",
  },
  {
    name: "Chia yogurt pudding with berries",
    type: "breakfast",
    tags: ["high fiber", "make ahead", "blood sugar steady"],
    ingredients: ["chia seeds", "plain yogurt", "berries", "cinnamon", "walnuts"],
    note: "Make-ahead option with fiber, protein, and crunch.",
  },
  {
    name: "Smoked salmon cucumber breakfast plate",
    type: "breakfast",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["smoked salmon", "cucumber", "greens", "avocado", "lemon"],
    note: "A steady breakfast for days you do not want oats.",
  },
  {
    name: "Tofu scramble with peppers and greens",
    type: "breakfast",
    tags: ["vegetarian", "high protein", "blood sugar steady"],
    ingredients: ["tofu", "peppers", "spinach", "mushrooms", "turmeric"],
    note: "Moosewood-style savory breakfast with lots of vegetables.",
  },
  {
    name: "Egg bites with spinach and feta",
    type: "breakfast",
    tags: ["make ahead", "high protein", "quick"],
    ingredients: ["eggs", "spinach", "feta", "mushrooms", "peppers"],
    note: "Good to prep once and reheat on busy mornings.",
  },
  {
    name: "Green protein smoothie",
    type: "lunch",
    tags: ["smoothie", "high protein", "quick"],
    ingredients: ["plain yogurt", "kefir", "spinach", "berries", "collagen peptides", "nut milk"],
    note: "Your smoothie idea with a greens boost.",
  },
  {
    name: "Mediterranean tuna cucumber plate",
    type: "lunch",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["tuna", "cucumber", "olives", "greens", "olive oil", "lemon"],
    note: "Fast lunch with protein and crunch.",
  },
  {
    name: "White bean arugula salad with lemon",
    type: "lunch",
    tags: ["vegetarian", "high fiber", "quick"],
    ingredients: ["white beans", "arugula", "tomatoes", "lemon", "olive oil", "parmesan"],
    note: "Bean-forward and bright, with lots of fiber.",
  },
  {
    name: "Chicken vegetable soup with herbs",
    type: "lunch",
    tags: ["high protein", "leftovers", "blood sugar steady"],
    ingredients: ["chicken", "celery", "carrots", "greens", "herbs", "broth"],
    note: "Comforting but still steady and vegetable-forward.",
  },
  {
    name: "Turkey avocado salad bowl",
    type: "lunch",
    tags: ["high protein", "quick", "blood sugar steady"],
    ingredients: ["turkey", "avocado", "greens", "cucumber", "pumpkin seeds"],
    note: "A no-cook lunch that feels like a meal.",
  },
  {
    name: "Farro vegetable bowl with chickpeas",
    type: "lunch",
    tags: ["vegetarian", "high fiber", "leftovers"],
    ingredients: ["farro", "chickpeas", "roasted vegetables", "greens", "tahini"],
    note: "Use a smaller grain portion and plenty of vegetables.",
  },
  {
    name: "Miso vegetable tofu soup",
    type: "dinner",
    tags: ["vegetarian", "quick", "blood sugar steady"],
    ingredients: ["tofu", "miso", "mushrooms", "bok choy", "scallions"],
    note: "Light, savory, and vegetable-heavy.",
  },
  {
    name: "Eggplant chickpea tomato stew",
    type: "dinner",
    tags: ["vegetarian", "high fiber", "leftovers"],
    ingredients: ["eggplant", "chickpeas", "tomatoes", "onion", "spices"],
    note: "Moosewood-inspired stew with beans and vegetables.",
  },
  {
    name: "Zucchini noodle turkey meatballs",
    type: "dinner",
    tags: ["high protein", "lower carb", "comfort food"],
    ingredients: ["turkey", "zucchini", "tomato sauce", "parmesan", "basil"],
    note: "Comforting but lighter than a pasta-heavy dinner.",
  },
  {
    name: "Shrimp cauliflower fried rice",
    type: "dinner",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["shrimp", "cauliflower rice", "eggs", "peas", "scallions"],
    note: "Fast, satisfying, and good for blood-sugar goals.",
  },
  {
    name: "Stuffed peppers with turkey and black beans",
    type: "dinner",
    tags: ["high protein", "high fiber", "leftovers"],
    ingredients: ["peppers", "turkey", "black beans", "tomatoes", "spices"],
    note: "Protein plus fiber in a colorful dinner.",
  },
  {
    name: "Greek chicken salad dinner",
    type: "dinner",
    tags: ["high protein", "quick", "blood sugar steady"],
    ingredients: ["chicken", "greens", "cucumber", "feta", "olives", "tomatoes"],
    note: "A dinner salad that is filling enough to count.",
  },
  {
    name: "Roasted vegetable and tofu sheet pan",
    type: "dinner",
    tags: ["vegetarian", "easy dinner", "blood sugar steady"],
    ingredients: ["tofu", "broccoli", "peppers", "mushrooms", "olive oil"],
    note: "Simple prep and lots of vegetables.",
  },
  {
    name: "Cod with tomato olive relish and greens",
    type: "dinner",
    tags: ["high protein", "anti-inflammatory", "quick"],
    ingredients: ["cod", "tomatoes", "olives", "greens", "lemon"],
    note: "Light fish dinner with bold flavor.",
  },
  {
    name: "Mushroom barley soup with side protein",
    type: "dinner",
    tags: ["vegetarian", "high fiber", "comfort food"],
    ingredients: ["mushrooms", "barley", "celery", "carrots", "Greek yogurt or chicken"],
    note: "Cozy Moosewood-style soup; add protein on the side if needed.",
  },
  {
    name: "Chicken sausage peppers and cabbage skillet",
    type: "dinner",
    tags: ["quick", "high protein", "easy dinner"],
    ingredients: ["chicken sausage", "cabbage", "peppers", "onion", "mustard"],
    note: "Weeknight skillet with lots of vegetables.",
  },
  {
    name: "Peanut tofu broccoli bowl",
    type: "dinner",
    tags: ["vegetarian", "high protein", "blood sugar steady"],
    ingredients: ["tofu", "broccoli", "peanut sauce", "cauliflower rice", "scallions"],
    note: "Peanut flavor, protein, and vegetables in one bowl.",
  },
  {
    name: "Turkey taco salad",
    type: "dinner",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["turkey", "romaine", "avocado", "salsa", "black beans", "Greek yogurt"],
    note: "Taco flavor with a salad base.",
  },
  {
    name: "Apple with peanuts",
    type: "snack",
    tags: ["quick", "sweet craving", "blood sugar steady"],
    ingredients: ["apple", "peanuts"],
    note: "Simple sweet-salty snack with crunch.",
  },
  {
    name: "Peanut butter Greek yogurt dip with berries",
    type: "snack",
    tags: ["high protein", "sweet craving", "quick"],
    ingredients: ["Greek yogurt", "peanut butter", "berries", "cinnamon"],
    note: "Dessert-ish, but with protein.",
  },
  {
    name: "Cacao cottage cheese bowl",
    type: "snack",
    tags: ["high protein", "sweet craving", "quick"],
    ingredients: ["cottage cheese", "cocoa powder", "cacao nibs", "berries"],
    note: "Chocolate flavor with protein support.",
  },
  {
    name: "Almonds and sparkling water reset",
    type: "snack",
    tags: ["quick", "crunchy", "brain break"],
    ingredients: ["almonds", "sparkling water"],
    note: "Useful when you want something crunchy and simple.",
  },
  {
    name: "Hard-boiled egg with vegetables",
    type: "snack",
    tags: ["high protein", "quick", "blood sugar steady"],
    ingredients: ["egg", "cucumber", "carrots", "everything seasoning"],
    note: "Small but sturdy snack.",
  },
  {
    name: "Turkey pickle roll-ups",
    type: "snack",
    tags: ["high protein", "quick", "lower carb"],
    ingredients: ["turkey slices", "pickles", "mustard"],
    note: "Salty, crunchy, and quick.",
  },
  {
    name: "Celery with peanut butter and cinnamon",
    type: "snack",
    tags: ["quick", "crunchy", "sweet craving"],
    ingredients: ["celery", "peanut butter", "cinnamon"],
    note: "A classic, blood-sugar-friendlier snack.",
  }
);

const MEALS = ["Breakfast", "Lunch", "Dinner", "Snack"];
const DEFAULT_BREAKFASTS = [
  "Steel-cut oats bowl: 1/4 cup dry oats cooked + 1/2 cup berries + 1 Tbsp walnuts + 1/2 cup cottage cheese; black decaf coffee",
  "Egg scramble with greens, mushrooms, avocado; black decaf coffee",
  "Greek yogurt bowl with berries, walnuts, cinnamon; black decaf coffee",
];
const DEFAULT_LUNCHES = [
  "Berry cacao kefir smoothie: 1/2 cup berries + 1/2 cup plain yogurt + 1/2 cup kefir + 1/2 cup unsweetened nut milk + collagen serving per label + 1 tsp cocoa + 1 tsp cacao nibs + 1 tsp coconut butter",
  "Lentil vegetable soup with Greek yogurt or chicken on the side",
  "Chickpea cucumber feta salad over greens",
];
const DEFAULT_DINNERS = [
  "Moosewood-style lentil vegetable stew with greens and side salad",
  "Salmon with roasted broccoli, peppers, tahini drizzle, and cauliflower rice",
  "Vegetable frittata with salad and avocado",
  "Turkey lettuce wraps with cucumber, herbs, and tahini sauce",
  "Black bean vegetable chili with Greek yogurt and crunchy cabbage slaw",
  "Sheet-pan chicken with Brussels sprouts, carrots, mushrooms, and olive oil",
  "Tofu or chicken vegetable curry over cauliflower rice or a small scoop of brown rice",
];
const DEFAULT_SNACKS = [
  "Apple slices with 1 Tbsp peanut or almond butter",
  "Sparkling water + almonds or peanuts",
  "Vegetables with hummus and turkey roll-ups",
  "Cottage cheese with berries and cinnamon",
  "Greek yogurt with cacao nibs",
  "Peanut butter on celery or apple",
  "Planned tea break before deciding on a snack",
];
const RESET_IDEAS = [
  "Make tea and wait 10 minutes",
  "Take a dog walk or step outside",
  "Do a 10-minute treadmill reset",
  "Do one gentle weight bench set",
  "Do 4 slow breaths",
  "Text someone safe",
  "Write the feeling in one sentence",
  "Eat a planned protein snack if physically hungry",
  "Take a shower or wash your face",
  "Set a 10-minute timer and tidy one small area",
];

let data = loadData();
let activeView = "today";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function dateLabel(value) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function dayName(value) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(new Date(`${value}T12:00:00`));
}

function weekDates() {
  const now = new Date();
  const day = now.getDay();
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date.toISOString().slice(0, 10);
  });
}

function loadData() {
  const fallback = {
    habits: {},
    meals: {},
    movement: [],
    rewards: [
      { id: 1, name: "New cookbook or novel", cost: 20, redeemed: false },
      { id: 2, name: "Pedicure", cost: 35, redeemed: false },
      { id: 3, name: "Flowers for the kitchen", cost: 12, redeemed: false },
    ],
    redemptions: [],
    fitChecks: [],
    mindset: [],
    groceryList: "",
    weeklyNote: "",
  };
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...fallback, ...JSON.parse(saved) } : fallback;
  } catch {
    return fallback;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function currentHabits() {
  const key = todayKey();
  if (!data.habits[key]) data.habits[key] = {};
  return data.habits[key];
}

function movementValue(entry) {
  if (["Weights", "Weight bench"].includes(entry.type)) return 3;
  if (entry.type === "Treadmill") return 2;
  if (entry.type === "Yoga") return 2;
  if (entry.type === "Dog walk") return 1;
  if (entry.type === "Vibration plate") return 1;
  return 1;
}

function weekTotal() {
  const dates = new Set(weekDates());
  const habitDollars = Object.entries(data.habits)
    .filter(([date]) => dates.has(date))
    .flatMap(([, habits]) => HABITS.filter((habit) => habits[habit.id]).map((habit) => habit.value))
    .reduce((sum, value) => sum + value, 0);
  const movementDollars = data.movement
    .filter((entry) => dates.has(entry.date))
    .reduce((sum, entry) => sum + movementValue(entry), 0);
  const redeemed = data.redemptions
    .filter((entry) => dates.has(entry.date))
    .reduce((sum, entry) => sum + Number(entry.cost || 0), 0);
  return Math.max(0, habitDollars + movementDollars - redeemed);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function switchView(view) {
  activeView = view;
  document.querySelectorAll(".view").forEach((element) => element.classList.toggle("active", element.id === `${view}View`));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelector("#viewTitle").textContent = {
    today: "Today",
    mealPlan: "Meal Plan",
    ideas: "Suggestions",
    movement: "Movement",
    mindset: "Mindset",
    rewards: "Rewards",
    progress: "Progress",
  }[view];
}

function renderToday() {
  const habits = currentHabits();
  const doneCount = HABITS.filter((habit) => habits[habit.id]).length;
  document.querySelector("#todayScore").textContent = `${Math.round((doneCount / HABITS.length) * 100)}%`;
  document.querySelector("#habitList").innerHTML = HABITS.map((habit) => `
    <label class="habit-row ${habits[habit.id] ? "done" : ""}">
      <input type="checkbox" data-habit="${habit.id}" ${habits[habit.id] ? "checked" : ""} />
      <span><strong>${habit.label}</strong><small>Earn $${habit.value}</small></span>
      <span>$${habit.value}</span>
    </label>
  `).join("");

  const todayMeals = data.meals[todayKey()] || {};
  document.querySelector("#todayMeals").innerHTML = MEALS.map((meal) => `
    <div class="meal-row">
      <span>${meal}</span>
      <strong>${todayMeals[meal] || "Not planned yet"}</strong>
      <small>${todayMeals[meal] ? "planned" : "open"}</small>
    </div>
  `).join("");

  const todaysMovement = data.movement.filter((entry) => entry.date === todayKey());
  document.querySelector("#todayMovement").innerHTML = todaysMovement.length ? todaysMovement.map((entry) => `
    <div class="movement-row">
      <span>${entry.type}</span>
      <strong>${entry.minutes} min</strong>
      <small>$${movementValue(entry)}</small>
    </div>
  `).join("") : `<p class="muted">No movement logged yet today.</p>`;
  const todayMindset = data.mindset.filter((entry) => entry.date === todayKey()).slice(-1)[0];
  document.querySelector("#todayMoodSummary").textContent = todayMindset
    ? `${todayMindset.feeling} · anxiety ${todayMindset.anxiety.toLowerCase()} · craving ${todayMindset.craving.toLowerCase()}`
    : "No mindset check-in yet today.";
  document.querySelector("#quickResetList").innerHTML = RESET_IDEAS.slice(0, 4).map((idea) => `<div class="reset-chip">${idea}</div>`).join("");
}

function renderMealPlan() {
  document.querySelector("#weekPlanner").innerHTML = weekDates().map((date) => {
    const meals = data.meals[date] || {};
    return `
      <article class="day-card">
        <h3>${dayName(date)} <small>${dateLabel(date)}</small></h3>
        ${MEALS.map((meal) => `
          <label class="meal-slot">${meal}
            <input data-meal-date="${date}" data-meal="${meal}" value="${meals[meal] || ""}" placeholder="${meal} idea" />
          </label>
        `).join("")}
      </article>
    `;
  }).join("");
  document.querySelector("#groceryList").value = data.groceryList || "";
  document.querySelector("#portionGuide").innerHTML = [
    {
      title: "Smoothie lunch",
      text: "Start with 1/2 cup berries, 1/2 cup plain yogurt, 1/2 cup kefir, 1/2 cup unsweetened nut milk, collagen serving per label, 1 tsp cocoa, 1 tsp cacao nibs, and 1 tsp coconut butter. Adjust based on hunger, glucose response, and clinician guidance.",
    },
    {
      title: "Oat breakfast",
      text: "Start with 1/4 cup dry steel-cut oats cooked, 1/2 cup berries, 1 Tbsp walnuts, and 1/2 cup cottage cheese. Keep black decaf coffee and sparkling water as desired.",
    },
    {
      title: "Dinner pattern",
      text: "Use the plate method idea: about 1/2 non-starchy vegetables, 1/4 protein, and 1/4 quality carbohydrate or legumes. Soups, stews, bowls, and salads can follow the same balance.",
    },
  ].map((item) => `
    <article class="guidance-card">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderIdeas() {
  const filter = document.querySelector("#ideaFilter").value;
  const ideas = IDEAS
    .map((idea, index) => ({ ...idea, index }))
    .filter((idea) => filter === "all" || idea.type === filter || idea.tags.includes(filter));
  document.querySelector("#ideaGrid").innerHTML = ideas.map((idea) => `
    <article class="idea-card" data-kind="${idea.type}">
      <span class="eyebrow">${idea.type}</span>
      <h3>${idea.name}</h3>
      <p>${idea.note}</p>
      <div class="tag-list">${idea.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <small>${idea.ingredients.join(", ")}</small>
      <button class="ghost-button" type="button" data-add-idea="${idea.index}">Add to plan</button>
    </article>
  `).join("");
}

function renderMovement() {
  document.querySelector("#movementLog").innerHTML = data.movement.length ? data.movement
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((entry) => `
      <div class="table-row">
        <strong>${entry.type}</strong>
        <span>${dateLabel(entry.date)} · ${entry.minutes} min · ${entry.intensity}</span>
        <small>${entry.notes || "$" + movementValue(entry)}</small>
      </div>
    `).join("") : `<p class="muted">No movement logged yet.</p>`;
}

function renderMindset() {
  document.querySelector("#mindsetResetList").innerHTML = RESET_IDEAS.map((idea) => `<div class="reset-chip">${idea}</div>`).join("");
  document.querySelector("#mindsetLog").innerHTML = data.mindset.length ? data.mindset
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id)
    .slice(0, 10)
    .map((entry) => `
      <div class="table-row">
        <strong>${entry.feeling}</strong>
        <span>${dateLabel(entry.date)} · anxiety ${entry.anxiety.toLowerCase()} · craving ${entry.craving.toLowerCase()}</span>
        <small>${entry.tool || entry.note || entry.trigger || "Checked in"}</small>
      </div>
    `).join("") : `<p class="muted">No mindset check-ins yet. This can stay simple.</p>`;
}

function renderRewards() {
  const balance = weekTotal();
  document.querySelector("#funBalance").textContent = `$${balance}`;
  document.querySelector("#sideDollars").textContent = `$${balance}`;
  document.querySelector("#rewardList").innerHTML = data.rewards.map((reward) => `
    <div class="reward-row">
      <span><strong>${reward.name}</strong><small>Cost: $${reward.cost}</small></span>
      <span>${reward.redeemed ? "Cashed in" : balance >= reward.cost ? "Ready" : `$${reward.cost - balance} to go`}</span>
      <button class="ghost-button" type="button" data-redeem="${reward.id}" ${reward.redeemed || balance < reward.cost ? "disabled" : ""}>Cash in</button>
    </div>
  `).join("");
  document.querySelector("#earningGuide").innerHTML = EARNINGS.map(([label, value]) => `
    <div class="earning-row">
      <strong>${label}</strong>
      <span>$${value}</span>
    </div>
  `).join("");
}

function renderProgress() {
  const dates = new Set(weekDates());
  const movementDays = new Set(data.movement.filter((entry) => dates.has(entry.date)).map((entry) => entry.date)).size;
  const strengthDays = data.movement.filter((entry) => dates.has(entry.date) && ["Weights", "Weight bench"].includes(entry.type)).length;
  const walkDays = data.movement.filter((entry) => dates.has(entry.date) && entry.type === "Dog walk").length;
  const balancedDays = Object.entries(data.habits).filter(([date, habits]) => dates.has(date) && habits.breakfast && habits.fiber).length;
  const mindsetChecks = data.mindset.filter((entry) => dates.has(entry.date)).length;
  document.querySelector("#weeklyStats").innerHTML = [
    ["Movement days", movementDays],
    ["Strength days", strengthDays],
    ["Dog walks", walkDays],
    ["Balanced meal days", balancedDays],
    ["Mindset check-ins", mindsetChecks],
  ].map(([label, value]) => `<div class="stat-card"><strong>${value}</strong><span>${label}</span></div>`).join("");

  document.querySelector("#fitChart").innerHTML = data.fitChecks.length ? data.fitChecks.slice(-8).reverse().map((entry) => `
    <div class="table-row">
      <strong>${entry.fit}</strong>
      <span>${dateLabel(entry.date)}</span>
      <small>${entry.notes || "No note"}</small>
    </div>
  `).join("") : `<p class="muted">Log how your clothes feel. No scale required.</p>`;
  document.querySelector("#weeklyNote").value = data.weeklyNote || "";
}

function renderAll() {
  renderToday();
  renderMealPlan();
  renderIdeaPlanTargets();
  renderIdeas();
  renderMovement();
  renderMindset();
  renderRewards();
  renderProgress();
}

function addMovement({ date, type, minutes, intensity = "Moderate", notes = "" }) {
  if (!minutes) {
    showToast("Add minutes first.");
    return;
  }
  data.movement.push({
    id: Date.now(),
    date: date || todayKey(),
    type,
    minutes: Number(minutes),
    intensity,
    notes,
  });
  saveData();
  renderAll();
  showToast(`${type} logged. Fun dollars earned.`);
}

function buildGroceryList() {
  const planned = Object.values(data.meals).flatMap((day) => Object.values(day).filter(Boolean));
  const matched = IDEAS.filter((idea) => planned.some((meal) => meal.toLowerCase().includes(idea.name.toLowerCase().slice(0, 12))));
  const ingredients = new Set(matched.flatMap((idea) => idea.ingredients));
  data.groceryList = ingredients.size
    ? Array.from(ingredients).sort().map((item) => `- ${item}`).join("\n")
    : planned.map((meal) => `- Ingredients for ${meal}`).join("\n");
  saveData();
  renderMealPlan();
  showToast("Grocery list built.");
}

function autoPlanWeek() {
  if (document.activeElement && typeof document.activeElement.blur === "function") {
    document.activeElement.blur();
  }
  const breakfasts = IDEAS.filter((idea) => idea.type === "breakfast").map((idea) => idea.name);
  const lunches = IDEAS.filter((idea) => idea.type === "lunch").map((idea) => idea.name);
  const dinners = IDEAS.filter((idea) => idea.type === "dinner").map((idea) => idea.name);
  const snacks = IDEAS.filter((idea) => idea.type === "snack").map((idea) => idea.name);
  weekDates().forEach((date, index) => {
    data.meals[date] = {
      Breakfast: index % 2 === 0 ? DEFAULT_BREAKFASTS[0] : breakfasts[(index + 2) % breakfasts.length],
      Lunch: [0, 1, 2, 3, 4].includes(index) ? DEFAULT_LUNCHES[0] : lunches[(index + 2) % lunches.length],
      Dinner: dinners[(index + 4) % dinners.length] || DEFAULT_DINNERS[index % DEFAULT_DINNERS.length],
      Snack: snacks[(index + 3) % snacks.length] || DEFAULT_SNACKS[index % DEFAULT_SNACKS.length],
    };
  });
  currentHabits().plan = true;
  saveData();
  renderAll();
  document.querySelector("#weekPlanner").scrollLeft = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("Week planned. Edit anything you want to change.");
}

function renderIdeaPlanTargets() {
  document.querySelector("#ideaPlanDate").innerHTML = weekDates().map((date) => `
    <option value="${date}">${dayName(date)} ${dateLabel(date)}</option>
  `).join("");
  document.querySelector("#ideaPlanDate").value = todayKey();
}

function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "steady-day-backup.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importData(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      data = { ...data, ...JSON.parse(reader.result) };
      saveData();
      renderAll();
      showToast("Backup imported.");
    } catch {
      showToast("That backup could not be read.");
    }
  });
  reader.readAsText(file);
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelector("#habitList").addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-habit]");
  if (!checkbox) return;
  currentHabits()[checkbox.dataset.habit] = checkbox.checked;
  saveData();
  renderAll();
});

document.querySelector("#quickMovementForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  addMovement({ type: form.get("type"), minutes: form.get("minutes") });
  event.currentTarget.reset();
});

document.querySelector("#movementForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  addMovement({
    date: form.get("date"),
    type: form.get("type"),
    minutes: form.get("minutes"),
    intensity: form.get("intensity"),
    notes: form.get("notes"),
  });
  event.currentTarget.reset();
});

document.querySelector("#mindsetForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  data.mindset.push({
    id: Date.now(),
    date: form.get("date") || todayKey(),
    anxiety: form.get("anxiety"),
    craving: form.get("craving"),
    feeling: form.get("feeling"),
    trigger: form.get("trigger"),
    tool: form.get("tool"),
    note: form.get("note"),
  });
  saveData();
  renderAll();
  event.currentTarget.reset();
  document.querySelector('#mindsetForm [name="date"]').value = todayKey();
  showToast("Mindset check-in saved.");
});

document.querySelector("#weekPlanner").addEventListener("input", (event) => {
  const input = event.target.closest("[data-meal-date]");
  if (!input) return;
  data.meals[input.dataset.mealDate] = data.meals[input.dataset.mealDate] || {};
  data.meals[input.dataset.mealDate][input.dataset.meal] = input.value;
  saveData();
  renderToday();
});

document.querySelector("#ideaFilter").addEventListener("change", renderIdeas);
document.querySelector("#ideaGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-idea]");
  if (!button) return;
  const idea = IDEAS[Number(button.dataset.addIdea)];
  const date = document.querySelector("#ideaPlanDate").value || todayKey();
  const meal = document.querySelector("#ideaPlanMeal").value || MEALS.find((item) => item.toLowerCase() === idea.type) || "Dinner";
  data.meals[date] = data.meals[date] || {};
  data.meals[date][meal] = idea.name;
  saveData();
  renderMealPlan();
  renderToday();
  showToast(`${idea.name} added to ${dayName(date)} ${meal}.`);
});
document.querySelector("#autoPlanButton").addEventListener("click", autoPlanWeek);
document.querySelector("#buildGroceryButton").addEventListener("click", buildGroceryList);
document.querySelector("#copyGroceryButton").addEventListener("click", async () => {
  await navigator.clipboard.writeText(document.querySelector("#groceryList").value);
  showToast("Grocery list copied.");
});
document.querySelector("#groceryList").addEventListener("input", (event) => {
  data.groceryList = event.target.value;
  saveData();
});

document.querySelector("#rewardForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  data.rewards.push({ id: Date.now(), name: form.get("name"), cost: Number(form.get("cost")), redeemed: false });
  saveData();
  renderRewards();
  event.currentTarget.reset();
});

document.querySelector("#rewardList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-redeem]");
  if (!button) return;
  const reward = data.rewards.find((item) => item.id === Number(button.dataset.redeem));
  reward.redeemed = true;
  data.redemptions.push({ date: todayKey(), name: reward.name, cost: reward.cost });
  saveData();
  renderAll();
  showToast("Reward cashed in.");
});

document.querySelector("#fitForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  data.fitChecks.push({
    date: form.get("date") || todayKey(),
    fit: form.get("fit"),
    notes: form.get("notes"),
  });
  saveData();
  renderProgress();
  event.currentTarget.reset();
  document.querySelector('#fitForm [name="date"]').value = todayKey();
});

document.querySelector("#weeklyNote").addEventListener("input", (event) => {
  data.weeklyNote = event.target.value;
  saveData();
});

document.querySelector("#exportButton").addEventListener("click", exportData);
document.querySelector("#importInput").addEventListener("change", (event) => {
  if (event.target.files[0]) importData(event.target.files[0]);
});

document.querySelectorAll("[data-view-jump]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.viewJump));
});

document.querySelector('#movementForm [name="date"]').value = todayKey();
document.querySelector('#fitForm [name="date"]').value = todayKey();
document.querySelector('#mindsetForm [name="date"]').value = todayKey();
renderAll();
