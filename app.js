const plantDatabase = {
  tomato: {
    name: "Tomato",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun, 6-8+ hours",
    spacing: "24-36 in; stake or cage early",
    water: "Deep water 1-2 in per week; keep soil evenly moist",
    fertilizer: "Compost at planting, then balanced feeding when fruit starts",
    timing: "Plant after frost when nights stay mild",
    yield: "Harvest when fully colored and slightly soft",
    placement: "Back or north side of beds so tall vines do not shade smaller crops",
    tips: "Mulch to reduce splash-borne disease. Avoid wetting leaves when watering.",
    watch: "Watch for blossom end rot, hornworms, and heat stress."
  },
  pepper: {
    name: "Pepper",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1526346698789-22fd84314424?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun, warm protected spot",
    spacing: "18-24 in",
    water: "Moderate, steady moisture; avoid soggy roots",
    fertilizer: "Light compost and low-nitrogen feeding after flowering",
    timing: "Transplant after soil has warmed",
    yield: "Pick green or let ripen to final color",
    placement: "Near tomatoes and basil in warm bed zones",
    tips: "Use mulch to stabilize soil moisture and reduce blossom drop.",
    watch: "Too much nitrogen can grow leaves instead of fruit."
  },
  cucumber: {
    name: "Cucumber",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "12 in on trellis or 36-48 in sprawling",
    water: "Consistent deep watering, especially while fruiting",
    fertilizer: "Compost-rich soil; side-dress lightly once vines run",
    timing: "Direct sow or transplant after frost",
    yield: "Pick frequently while fruits are firm and young",
    placement: "Use a trellis on bed edge to save space",
    tips: "Harvest often to keep vines producing.",
    watch: "Watch for powdery mildew and cucumber beetles."
  },
  lettuce: {
    name: "Lettuce",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=900&q=80",
    sun: "Part sun to full sun in cool weather",
    spacing: "6-12 in depending on variety",
    water: "Light, frequent moisture; do not let shallow roots dry out",
    fertilizer: "Compost plus gentle nitrogen-rich feeding if leaves pale",
    timing: "Cool season; sow before heat or again in fall",
    yield: "Cut outer leaves or harvest heads young",
    placement: "Front of beds or under taller crops for afternoon shade",
    tips: "Succession sow every 1-2 weeks for steady salads.",
    watch: "Bolts quickly in heat."
  },
  carrot: {
    name: "Carrot",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun to part sun",
    spacing: "Thin to 2-3 in",
    water: "Keep seedbed evenly moist; deep water as roots size up",
    fertilizer: "Loose soil with compost; avoid fresh manure",
    timing: "Direct sow in cool weather",
    yield: "Harvest when shoulders reach usable size",
    placement: "Deep, stone-free bed section away from heavy feeders",
    tips: "Thin gently and keep soil loose for straighter roots.",
    watch: "Rocky or compacted soil causes forked roots."
  },
  basil: {
    name: "Basil",
    type: "Herb",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun to light afternoon shade",
    spacing: "10-14 in",
    water: "Even moisture; water when top inch dries",
    fertilizer: "Compost and occasional light feeding",
    timing: "Plant after frost; loves warm weather",
    yield: "Pinch tips often before flowering",
    placement: "Near tomatoes, peppers, and kitchen paths",
    tips: "Regular pinching makes bushier plants and more leaves.",
    watch: "Cold nights and flowering reduce leaf quality."
  },
  zucchini: {
    name: "Zucchini",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "36-48 in",
    water: "Deep weekly watering; more in heat",
    fertilizer: "Rich compost and balanced feeding when flowering",
    timing: "Plant after frost",
    yield: "Pick small and often",
    placement: "Give a corner or outside edge so leaves can sprawl",
    tips: "Check plants daily during peak production.",
    watch: "Squash bugs, vine borers, and powdery mildew."
  },
  "green bean": {
    name: "Green Bean",
    type: "Vegetable",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "Bush: 4-6 in; pole: 6-8 in with support",
    water: "Moderate, even moisture during flowering and pod set",
    fertilizer: "Light compost; avoid heavy nitrogen",
    timing: "Direct sow after soil warms",
    yield: "Pick pods before seeds bulge",
    placement: "Pole beans on trellis; bush beans in blocks",
    tips: "Successive sowings extend the harvest.",
    watch: "Wet foliage can encourage leaf disease."
  },
  marigold: {
    name: "Marigold",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1603205437830-5b579011930f?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "8-12 in",
    water: "Moderate; let soil surface dry between watering",
    fertilizer: "Usually low need; compost is enough",
    timing: "Plant after frost",
    yield: "Blooms from summer to frost",
    placement: "Edges of vegetable beds and pollinator borders",
    tips: "Deadhead for cleaner, longer bloom.",
    watch: "Too much fertilizer can reduce flowering."
  },
  zinnia: {
    name: "Zinnia",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "9-18 in",
    water: "Water at soil level; allow airflow",
    fertilizer: "Compost and light balanced feeding if growth stalls",
    timing: "Direct sow after frost or transplant carefully",
    yield: "Cut flowers regularly for more blooms",
    placement: "Sunny border with good airflow",
    tips: "Cut above leaf nodes to encourage branching.",
    watch: "Powdery mildew in humid, crowded conditions."
  },
  sunflower: {
    name: "Sunflower",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "12-24 in depending on variety",
    water: "Deep water while establishing and budding",
    fertilizer: "Compost; avoid excessive nitrogen",
    timing: "Direct sow after frost",
    yield: "Blooms in summer; seeds mature after petals fade",
    placement: "North or back side of garden so tall stems do not shade crops",
    tips: "Stake tall varieties in windy areas.",
    watch: "Birds and squirrels may harvest seed heads early."
  },
  lavender: {
    name: "Lavender",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "18-24 in",
    water: "Low once established; avoid wet feet",
    fertilizer: "Lean soil; little to no fertilizer",
    timing: "Plant after frost in well-drained soil",
    yield: "Harvest stems as buds open",
    placement: "Dry, sunny edge or container with excellent drainage",
    tips: "Prune lightly after bloom to keep plants compact.",
    watch: "Heavy clay and overwatering are common failure points."
  },
  petunia: {
    name: "Petunia",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun to part sun",
    spacing: "10-18 in",
    water: "Consistent moisture in containers; moderate in beds",
    fertilizer: "Regular light feeding for container plants",
    timing: "Plant after frost",
    yield: "Blooms spring through frost with care",
    placement: "Containers, borders, and sunny bed fronts",
    tips: "Trim leggy stems to refresh bloom.",
    watch: "Containers dry faster than beds."
  },
  coneflower: {
    name: "Coneflower",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1657299156538-e007199c3afa?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun to part sun",
    spacing: "18-24 in",
    water: "Moderate while establishing; drought tolerant later",
    fertilizer: "Compost only; avoid rich feeding",
    timing: "Plant spring or fall",
    yield: "Summer blooms; seed heads feed birds",
    placement: "Perennial border or pollinator zone",
    tips: "Leave some seed heads standing after bloom.",
    watch: "Needs drainage and airflow."
  },
  cosmos: {
    name: "Cosmos",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun",
    spacing: "12-18 in",
    water: "Low to moderate once established",
    fertilizer: "Lean soil; too much feeding reduces blooms",
    timing: "Direct sow after frost",
    yield: "Blooms summer to frost",
    placement: "Back of borders or informal pollinator patches",
    tips: "Deadhead or cut flowers to extend bloom.",
    watch: "Can flop in rich soil or wind."
  },
  nasturtium: {
    name: "Nasturtium",
    type: "Flower",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=80",
    sun: "Full sun to part sun",
    spacing: "10-12 in",
    water: "Moderate; avoid overwatering",
    fertilizer: "Lean soil; skip high-nitrogen fertilizer",
    timing: "Direct sow after frost",
    yield: "Edible leaves and flowers",
    placement: "Edges, containers, or trailing from raised beds",
    tips: "Great as a colorful trap crop near vegetables.",
    watch: "Rich soil grows leaves at the expense of flowers."
  }
};

const aliases = {
  tomatoes: "tomato",
  peppers: "pepper",
  cukes: "cucumber",
  cucumbers: "cucumber",
  lettuces: "lettuce",
  carrots: "carrot",
  courgette: "zucchini",
  zucchini: "zucchini",
  beans: "green bean",
  "green beans": "green bean",
  marigolds: "marigold",
  zinnias: "zinnia",
  sunflowers: "sunflower",
  lavenders: "lavender",
  petunias: "petunia",
  coneflowers: "coneflower",
  "purple coneflower": "coneflower",
  nasturtiums: "nasturtium"
};

const fallbackImage = "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=900&q=80";

const resources = [
  ["USDA Zone Map", "https://planthardiness.ars.usda.gov/"],
  ["Planting Calendar", "https://www.almanac.com/gardening/planting-calendar"],
  ["Watering Guide", "https://extension.umn.edu/how/watering-vegetable-garden"],
  ["Vegetable Fertilizer", "https://extension.umd.edu/resource/fertilizing-vegetable-gardens"],
  ["Plant Finder", "https://www.missouribotanicalgarden.org/plantfinder/plantfindersearch.aspx"]
];

const form = document.querySelector("#plannerForm");
const summary = document.querySelector("#summary");
const cards = document.querySelector("#cards");
const savePlanButton = document.querySelector("#savePlanButton");
const printPlanButton = document.querySelector("#printPlanButton");
const clearPlansButton = document.querySelector("#clearPlansButton");
const savedPlans = document.querySelector("#savedPlans");
const locationInput = document.querySelector("#locationInput");
const plantInput = document.querySelector("#plantInput");
const sunInput = document.querySelector("#sunInput");
const gardenTypeInput = document.querySelector("#gardenTypeInput");

const storageKey = "backyardGardenPlanner.plans";
let currentPlan = null;

function normalizePlantName(name) {
  const cleaned = name.trim().toLowerCase().replace(/\s+/g, " ");
  return aliases[cleaned] || cleaned;
}

function parsePlantInput(value) {
  return value
    .split(/[\n,;]+/)
    .map(normalizePlantName)
    .filter(Boolean);
}

function titleCase(value) {
  return value.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPlant(name) {
  if (plantDatabase[name]) return plantDatabase[name];

  return {
    name: titleCase(name),
    type: "Research Needed",
    image: fallbackImage,
    sun: "Confirm locally",
    spacing: "Check seed packet or extension source",
    water: "Start with even moisture; adjust by plant type and weather",
    fertilizer: "Use compost first; confirm heavy or light feeding needs",
    timing: "Check your local frost dates and planting calendar",
    yield: "Varies by cultivar",
    placement: "Place after confirming height, spread, water needs, and sun needs",
    tips: "This plant is not in the starter database yet. Use the linked resources to verify exact care.",
    watch: "Unknown plants need local verification before planting near food crops."
  };
}

function getMaintenanceTasks(plants, gardenType) {
  const tasks = [
    "Check soil moisture before watering; water deeply when the top inch is dry for most vegetables.",
    "Walk the garden twice a week to catch pests, disease, wilting, and broken stems early.",
    "Harvest ripe vegetables and cut flowers regularly so productive plants keep going."
  ];

  if (plants.some((plant) => plant.name === "Tomato" || plant.name === "Cucumber" || plant.name === "Green Bean")) {
    tasks.push("Tie or guide vines onto stakes, cages, or trellises before stems sprawl.");
  }

  if (plants.some((plant) => plant.type === "Flower")) {
    tasks.push("Deadhead annual flowers unless you want them to set seed.");
  }

  if (plants.some((plant) => plant.name === "Lavender" || plant.name === "Cosmos" || plant.name === "Nasturtium")) {
    tasks.push("Keep lower-water flowers in a drier zone away from thirsty fruiting crops.");
  }

  if (gardenType === "containers") {
    tasks.push("Check containers daily during hot or windy weather because pots dry out faster than beds.");
  }

  return tasks;
}

function summarizePlan(plan) {
  const { plants, location, sun, gardenType } = plan;
  const vegetables = plants.filter((plant) => plant.type === "Vegetable").length;
  const flowers = plants.filter((plant) => plant.type === "Flower").length;
  const herbs = plants.filter((plant) => plant.type === "Herb").length;
  const unknown = plants.filter((plant) => plant.type === "Research Needed").length;
  const tasks = getMaintenanceTasks(plants, gardenType);

  return `
    <h2>Garden Plan for ${escapeHtml(location)}</h2>
    <p>
      This first-pass plan assumes ${sun.replace("-", " ")} and ${gardenType.replace("-", " ")}.
      Verify frost dates and hardiness zone for your exact address before planting.
    </p>
    <div class="summary-grid">
      <div class="summary-tile"><strong>Plants</strong>${plants.length} total</div>
      <div class="summary-tile"><strong>Food crops</strong>${vegetables + herbs} vegetables/herbs</div>
      <div class="summary-tile"><strong>Flowers</strong>${flowers} pollinator/ornamental picks</div>
      <div class="summary-tile"><strong>To verify</strong>${unknown} unknown plant${unknown === 1 ? "" : "s"}</div>
    </div>
    <div class="summary-grid">
      <div class="summary-tile"><strong>Placement</strong>Tall crops north/back, compact greens front, flowers on edges.</div>
      <div class="summary-tile"><strong>Watering</strong>Group thirsty fruiting crops together and drought-tolerant flowers separately.</div>
      <div class="summary-tile"><strong>Feeding</strong>Compost at planting; feed fruiting crops once flowering starts.</div>
      <div class="summary-tile"><strong>Weekly</strong>Check soil moisture, tie vines, deadhead flowers, harvest ripe produce.</div>
    </div>
    <ul class="maintenance-list">
      ${tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
    </ul>
    <div class="resource-list">
      ${resources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join("")}
    </div>
  `;
}

function renderPlantCard(plant) {
  return `
    <article class="plant-card">
      <img src="${escapeHtml(plant.image)}" alt="${escapeHtml(plant.name)} growing in a garden" loading="lazy" />
      <div class="plant-body">
        <div class="plant-title-row">
          <div>
            <h3>${escapeHtml(plant.name)}</h3>
            <p>${escapeHtml(plant.placement)}</p>
          </div>
          <span class="tag">${escapeHtml(plant.type)}</span>
        </div>
        <ul class="care-list">
          <li><strong>Light</strong><span>${escapeHtml(plant.sun)}</span></li>
          <li><strong>Spacing</strong><span>${escapeHtml(plant.spacing)}</span></li>
          <li><strong>Water</strong><span>${escapeHtml(plant.water)}</span></li>
          <li><strong>Fertilizer</strong><span>${escapeHtml(plant.fertilizer)}</span></li>
          <li><strong>Timing</strong><span>${escapeHtml(plant.timing)}</span></li>
          <li><strong>Harvest/Bloom</strong><span>${escapeHtml(plant.yield)}</span></li>
        </ul>
        <p class="tips"><strong>Key tip:</strong> ${escapeHtml(plant.tips)}<br><strong>Watch:</strong> ${escapeHtml(plant.watch)}</p>
      </div>
    </article>
  `;
}

function getSavedPlans() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function setSavedPlans(plans) {
  localStorage.setItem(storageKey, JSON.stringify(plans));
}

function renderSavedPlans() {
  const plans = getSavedPlans();

  if (!plans.length) {
    savedPlans.innerHTML = "<p>No saved plans yet.</p>";
    return;
  }

  savedPlans.innerHTML = plans
    .map((plan) => `
      <button type="button" class="saved-plan" data-plan-id="${plan.id}">
        <strong>${escapeHtml(plan.location)}</strong>
        <span>${escapeHtml(plan.plantNames.join(", "))}</span>
      </button>
    `)
    .join("");
}

function renderPlan(plan) {
  currentPlan = plan;
  summary.innerHTML = summarizePlan(plan);
  cards.innerHTML = plan.plants.map(renderPlantCard).join("");
  savePlanButton.disabled = false;
  printPlanButton.disabled = false;
}

function buildPlanFromForm() {
  const formData = new FormData(form);
  const location = formData.get("location").trim() || "your garden";
  const plantNames = parsePlantInput(formData.get("plants"));
  const selectedNames = plantNames.length ? plantNames : ["tomato", "basil", "marigold"];

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    location,
    plantNames: selectedNames,
    sun: formData.get("sun"),
    gardenType: formData.get("gardenType"),
    plants: selectedNames.map(getPlant)
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPlan(buildPlanFromForm());
});

savePlanButton.addEventListener("click", () => {
  if (!currentPlan) return;
  const plans = getSavedPlans();
  const nextPlans = [currentPlan, ...plans.filter((plan) => plan.id !== currentPlan.id)].slice(0, 8);
  setSavedPlans(nextPlans);
  renderSavedPlans();
});

printPlanButton.addEventListener("click", () => {
  if (!currentPlan) return;
  window.print();
});

clearPlansButton.addEventListener("click", () => {
  setSavedPlans([]);
  renderSavedPlans();
});

savedPlans.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan-id]");
  if (!button) return;

  const plan = getSavedPlans().find((savedPlan) => savedPlan.id === button.dataset.planId);
  if (!plan) return;

  locationInput.value = plan.location;
  plantInput.value = plan.plantNames.join(", ");
  sunInput.value = plan.sun;
  gardenTypeInput.value = plan.gardenType;
  renderPlan({ ...plan, plants: plan.plantNames.map(getPlant) });
});

renderSavedPlans();
