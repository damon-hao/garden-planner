import React, { useMemo, useState } from "react";
import { aliases, fallbackImage, plantDatabase, resources } from "./data/plants.js";

const h = React.createElement;
const storageKey = "backyardGardenPlanner.plans";

const bedZones = [
  { id: "back", title: "Back / North", hint: "Tall crops, trellises, sunflowers" },
  { id: "middle", title: "Middle Bed", hint: "Fruiting crops and larger vegetables" },
  { id: "front", title: "Front / Quick Access", hint: "Greens, herbs, roots, frequent harvests" },
  { id: "edge", title: "Edges / Pollinators", hint: "Flowers, companion plants, borders" },
  { id: "dry", title: "Dry / Containers", hint: "Lavender and lower-water plants" }
];

function normalizePlantName(name) {
  const cleaned = name.trim().toLowerCase().replace(/\s+/g, " ");
  return aliases[cleaned] || cleaned;
}

function titleCase(value) {
  return value.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
}

function parsePlantInput(value) {
  return value
    .split(/[\n,;]+/)
    .map(normalizePlantName)
    .filter(Boolean);
}

function getSavedPlans() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function savePlans(plans) {
  localStorage.setItem(storageKey, JSON.stringify(plans));
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
    zone: "middle",
    tips: "This plant is not in the starter database yet. Use the linked resources to verify exact care.",
    watch: "Unknown plants need local verification before planting near food crops."
  };
}

function buildPlan({ location, plantText, sun, gardenType, existingAssignments = {} }) {
  const plantNames = parsePlantInput(plantText);
  const selectedNames = plantNames.length ? plantNames : ["tomato", "basil", "marigold"];
  const plants = selectedNames.map((plantName) => {
    const plant = getPlant(plantName);
    return {
      ...plant,
      key: plantName,
      assignedZone: existingAssignments[plantName] || plant.zone
    };
  });

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    location: location.trim() || "your garden",
    plantText,
    plantNames: selectedNames,
    sun,
    gardenType,
    plants
  };
}

function hydratePlan(savedPlan) {
  const plantText = savedPlan.plantText || savedPlan.plantNames?.join(", ") || "";
  const assignments = Object.fromEntries(
    savedPlan.plants?.map((plant) => [plant.key || normalizePlantName(plant.name), plant.assignedZone || plant.zone]) || []
  );

  return {
    ...buildPlan({
      location: savedPlan.location || "",
      plantText,
      sun: savedPlan.sun || "full-sun",
      gardenType: savedPlan.gardenType || "raised-bed",
      existingAssignments: assignments
    }),
    id: savedPlan.id || String(Date.now()),
    createdAt: savedPlan.createdAt || new Date().toISOString()
  };
}

function getMaintenanceTasks(plants, gardenType) {
  const tasks = [
    "Check soil moisture before watering; water deeply when the top inch is dry for most vegetables.",
    "Walk the garden twice a week to catch pests, disease, wilting, and broken stems early.",
    "Harvest ripe vegetables and cut flowers regularly so productive plants keep going."
  ];

  if (plants.some((plant) => ["Tomato", "Cucumber", "Green Bean"].includes(plant.name))) {
    tasks.push("Tie or guide vines onto stakes, cages, or trellises before stems sprawl.");
  }

  if (plants.some((plant) => plant.type === "Flower")) {
    tasks.push("Deadhead annual flowers unless you want them to set seed.");
  }

  if (plants.some((plant) => ["Lavender", "Cosmos", "Nasturtium"].includes(plant.name))) {
    tasks.push("Keep lower-water flowers in a drier zone away from thirsty fruiting crops.");
  }

  if (gardenType === "containers") {
    tasks.push("Check containers daily during hot or windy weather because pots dry out faster than beds.");
  }

  return tasks;
}

function PlanSummary({ plan }) {
  if (!plan) {
    return h("section", { className: "summary-card" },
      h("h2", null, "Garden Plan"),
      h("p", null, "Enter your location and plant list to generate placement notes, maintenance cards, and care tasks.")
    );
  }

  const vegetables = plan.plants.filter((plant) => plant.type === "Vegetable").length;
  const flowers = plan.plants.filter((plant) => plant.type === "Flower").length;
  const herbs = plan.plants.filter((plant) => plant.type === "Herb").length;
  const unknown = plan.plants.filter((plant) => plant.type === "Research Needed").length;

  return h("section", { className: "summary-card" },
    h("h2", null, `Garden Plan for ${plan.location}`),
    h("p", null, `This first-pass plan assumes ${plan.sun.replace("-", " ")} and ${plan.gardenType.replace("-", " ")}. Verify frost dates and hardiness zone for your exact address before planting.`),
    h("div", { className: "summary-grid" },
      h("div", { className: "summary-tile" }, h("strong", null, "Plants"), `${plan.plants.length} total`),
      h("div", { className: "summary-tile" }, h("strong", null, "Food crops"), `${vegetables + herbs} vegetables/herbs`),
      h("div", { className: "summary-tile" }, h("strong", null, "Flowers"), `${flowers} pollinator/ornamental picks`),
      h("div", { className: "summary-tile" }, h("strong", null, "To verify"), `${unknown} unknown plants`)
    ),
    h("ul", { className: "maintenance-list" },
      getMaintenanceTasks(plan.plants, plan.gardenType).map((task) => h("li", { key: task }, task))
    ),
    h("div", { className: "resource-list" },
      resources.map(([label, url]) => h("a", { href: url, target: "_blank", rel: "noreferrer", key: url }, label))
    )
  );
}

function GardenLayout({ plan, onAssignZone }) {
  if (!plan) return null;

  return h("section", { className: "layout-panel" },
    h("div", { className: "section-heading" },
      h("h2", null, "Visual Bed Planner"),
      h("span", null, "Move each plant into the zone that best matches your yard.")
    ),
    h("div", { className: "bed-grid" },
      bedZones.map((zone) => {
        const zonePlants = plan.plants.filter((plant) => plant.assignedZone === zone.id);
        return h("article", { className: "bed-zone", key: zone.id },
          h("div", null, h("h3", null, zone.title), h("p", null, zone.hint)),
          h("div", { className: "zone-plants" },
            zonePlants.length
              ? zonePlants.map((plant) => h("span", { className: "plant-chip", key: `${zone.id}-${plant.key}` }, plant.name))
              : h("span", { className: "empty-zone" }, "No plants assigned")
          )
        );
      })
    ),
    h("div", { className: "assignment-list" },
      plan.plants.map((plant) => h("label", { key: plant.key },
        plant.name,
        h("select", {
          value: plant.assignedZone,
          onChange: (event) => onAssignZone(plant.key, event.target.value)
        }, bedZones.map((zone) => h("option", { key: zone.id, value: zone.id }, zone.title)))
      ))
    )
  );
}

function PlantCard({ plant }) {
  return h("article", { className: "plant-card" },
    h("img", { src: plant.image, alt: `${plant.name} growing in a garden`, loading: "lazy" }),
    h("div", { className: "plant-body" },
      h("div", { className: "plant-title-row" },
        h("div", null, h("h3", null, plant.name), h("p", null, plant.placement)),
        h("span", { className: "tag" }, plant.type)
      ),
      h("ul", { className: "care-list" },
        h("li", null, h("strong", null, "Light"), h("span", null, plant.sun)),
        h("li", null, h("strong", null, "Spacing"), h("span", null, plant.spacing)),
        h("li", null, h("strong", null, "Water"), h("span", null, plant.water)),
        h("li", null, h("strong", null, "Fertilizer"), h("span", null, plant.fertilizer)),
        h("li", null, h("strong", null, "Timing"), h("span", null, plant.timing)),
        h("li", null, h("strong", null, "Harvest/Bloom"), h("span", null, plant.yield))
      ),
      h("p", { className: "tips" },
        h("strong", null, "Key tip:"), ` ${plant.tips}`,
        h("br"),
        h("strong", null, "Watch:"), ` ${plant.watch}`
      )
    )
  );
}

function SavedPlans({ plans, onLoad, onClear }) {
  return h("section", { className: "saved-panel", "aria-labelledby": "saved-title" },
    h("div", { className: "section-heading" },
      h("h2", { id: "saved-title" }, "Saved Plans"),
      h("button", { type: "button", className: "text-button", onClick: onClear }, "Clear")
    ),
    h("div", { className: "saved-list" },
      plans.length
        ? plans.map((plan) => h("button", { type: "button", className: "saved-plan", key: plan.id, onClick: () => onLoad(plan) },
          h("strong", null, plan.location),
          h("span", null, plan.plantNames?.join(", ") || plan.plantText)
        ))
        : h("p", null, "No saved plans yet.")
    )
  );
}

export function App() {
  const [form, setForm] = useState({
    location: "",
    plantText: "tomato, basil, marigold, cucumber, zinnia",
    sun: "full-sun",
    gardenType: "raised-bed"
  });
  const [plan, setPlan] = useState(null);
  const [plans, setPlans] = useState(getSavedPlans);
  const plantCards = useMemo(() => plan?.plants ?? [], [plan]);

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function generatePlan(event) {
    event.preventDefault();
    const existingAssignments = Object.fromEntries(plan?.plants.map((plant) => [plant.key, plant.assignedZone]) ?? []);
    setPlan(buildPlan({ ...form, existingAssignments }));
  }

  function saveCurrentPlan() {
    if (!plan) return;
    const nextPlans = [plan, ...plans.filter((savedPlan) => savedPlan.id !== plan.id)].slice(0, 8);
    setPlans(nextPlans);
    savePlans(nextPlans);
  }

  function loadPlan(savedPlan) {
    const nextPlan = hydratePlan(savedPlan);
    setForm({
      location: nextPlan.location,
      plantText: nextPlan.plantText,
      sun: nextPlan.sun,
      gardenType: nextPlan.gardenType
    });
    setPlan(nextPlan);
  }

  function clearPlans() {
    setPlans([]);
    savePlans([]);
  }

  function assignZone(plantKey, zoneId) {
    setPlan((current) => ({
      ...current,
      plants: current.plants.map((plant) => plant.key === plantKey ? { ...plant, assignedZone: zoneId } : plant)
    }));
  }

  return h("main", { className: "app-shell" },
    h("section", { className: "planner-panel", "aria-labelledby": "app-title" },
      h("div", { className: "intro" },
        h("p", { className: "eyebrow" }, "Backyard Garden Planner"),
        h("h1", { id: "app-title" }, "Plan vegetables and flowers from a short plant list."),
        h("p", null, "Enter your location and what you want to grow. The planner creates placement notes, maintenance cards, saved plans, and a visual bed layout.")
      ),
      h("form", { className: "planner-form", onSubmit: generatePlan },
        h("label", null,
          "House location, city, region, or ZIP",
          h("input", {
            value: form.location,
            onChange: (event) => updateForm("location", event.target.value),
            type: "text",
            placeholder: "Example: Austin, TX or 78704",
            required: true
          })
        ),
        h("label", null,
          "Vegetables, flowers, and herbs",
          h("textarea", {
            value: form.plantText,
            onChange: (event) => updateForm("plantText", event.target.value),
            rows: 6,
            placeholder: "Tomato, basil, marigold, cucumber, zinnia"
          })
        ),
        h("div", { className: "control-grid" },
          h("label", null,
            "Sunlight",
            h("select", { value: form.sun, onChange: (event) => updateForm("sun", event.target.value) },
              h("option", { value: "full-sun" }, "Mostly full sun"),
              h("option", { value: "part-sun" }, "Part sun"),
              h("option", { value: "mixed" }, "Mixed yard conditions"),
              h("option", { value: "shade" }, "Mostly shade")
            )
          ),
          h("label", null,
            "Garden type",
            h("select", { value: form.gardenType, onChange: (event) => updateForm("gardenType", event.target.value) },
              h("option", { value: "raised-bed" }, "Raised beds"),
              h("option", { value: "in-ground" }, "In-ground beds"),
              h("option", { value: "containers" }, "Containers"),
              h("option", { value: "mixed" }, "Mixed setup")
            )
          )
        ),
        h("div", { className: "button-row" },
          h("button", { type: "submit" }, "Generate garden plan"),
          h("button", { type: "button", className: "secondary-button", onClick: saveCurrentPlan, disabled: !plan }, "Save plan"),
          h("button", { type: "button", className: "secondary-button", onClick: () => window.print(), disabled: !plan }, "Print cards")
        )
      ),
      h(SavedPlans, { plans, onLoad: loadPlan, onClear: clearPlans })
    ),
    h("section", { className: "results-panel", "aria-live": "polite" },
      h(PlanSummary, { plan }),
      h(GardenLayout, { plan, onAssignZone: assignZone }),
      h("div", { className: "plant-grid" },
        plantCards.map((plant) => h(PlantCard, { plant, key: plant.key }))
      )
    )
  );
}
