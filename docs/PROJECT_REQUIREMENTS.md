# Backyard Garden Planner Requirements

## Goal

Build a web app that helps a home gardener plan and maintain backyard vegetables and flowers using minimal starting information:

- Plant names typed by the user.
- House location, city, region, area, or ZIP code.
- Optional garden conditions such as sunlight, bed type, and available space.

The app should return a useful garden plan with placement guidance, maintenance cards, care timing, pictures, and trusted resources.

## Target User

A homeowner or renter who wants a practical backyard garden plan without researching every crop or flower from scratch. They may know what they want to grow but not where to plant it, when to start, how often to water, or what maintenance tasks matter after planting.

## Core User Flow

1. User enters location.
2. User enters vegetables and flowers as plain text.
3. User optionally selects sunlight, garden type, and experience level.
4. App generates plant cards and a maintenance summary.
5. User reviews placement, watering, fertilizing, companion notes, and resource links.
6. User can revise plant names or conditions and regenerate the plan.

## MVP Features

- Location input accepting city, region, area, or ZIP.
- Plant list input accepting comma-separated or line-separated names.
- Built-in guidance for an initial set of common vegetables and flowers.
- Automatic category detection for known plants.
- Maintenance card per plant:
  - Image
  - Plant type
  - Light needs
  - Spacing
  - Watering
  - Fertilizer
  - Planting timing
  - Harvest/bloom expectations
  - Key care tips
  - Watch-outs
- Garden-level summary:
  - Suggested bed zones
  - Grouping by water and sun needs
  - Weekly maintenance checklist
  - Helpful external resources
- Graceful handling for unknown plant names with a generic research card.
- Local saved plans.
- Visual bed-zone planner.
- Printable maintenance cards.

## Initial Plant Coverage

Vegetables:

- Tomato
- Pepper
- Cucumber
- Lettuce
- Carrot
- Basil
- Zucchini
- Green bean

Flowers:

- Marigold
- Zinnia
- Sunflower
- Lavender
- Petunia
- Coneflower
- Cosmos
- Nasturtium

## Trusted Resources To Link

- USDA Plant Hardiness Zone Map: https://planthardiness.ars.usda.gov/
- Old Farmer's Almanac Planting Calendar: https://www.almanac.com/gardening/planting-calendar
- University of Minnesota Extension: Watering the vegetable garden: https://extension.umn.edu/how/watering-vegetable-garden
- University of Maryland Extension: Fertilizing vegetable gardens: https://extension.umd.edu/resource/fertilizing-vegetable-gardens
- Missouri Botanical Garden Plant Finder: https://www.missouribotanicalgarden.org/plantfinder/plantfindersearch.aspx

## Non-Goals For MVP

- No account system.
- No payments.
- No AI image generation.
- No guarantee of city-perfect frost dates until location data is integrated.
- No chemical pest diagnosis workflow.

## Verification Questions

1. What should we name the app: `Backyard Garden Planner`, `YardCrop`, `Plot & Petal`, or something else?
2. Should the first version optimize for in-ground beds, raised beds, containers, or all three?
3. Do you want advice to assume organic-only fertilizer and pest practices?
4. What location format do you prefer for best results: ZIP code, city/state, or both?
5. Should the app eventually create calendar reminders, printable cards, or both?
6. Do you want the planner to include herbs as a separate category or treat them as vegetables?

## Open Product Decisions

- Whether to use a plant API, a curated local plant database, or both.
- Whether to persist plans only in the browser or add a backend.
- Whether the bed planner should be visual grid-based, list-based, or map/photo-based.
- Whether location should detect USDA zone automatically or ask the user to confirm it.
