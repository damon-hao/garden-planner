# AGENTS.md

## Project

Backyard Garden Planner is a local-first web app for planning vegetables and flowers with minimal user input. The app starts from a short list of plant names plus the user's house location, region, area, or city, then turns that into planting guidance, layout suggestions, care reminders, and maintenance cards.

## Product Principles

- Ask for as little as possible: plant names, location, and optional sunlight/space details.
- Prefer practical guidance over encyclopedic detail.
- Make the first screen useful immediately; no marketing page.
- Show real plant imagery, plain-language maintenance cards, and links to trusted resources.
- Keep advice explainable and editable because microclimates, soil, containers, and local restrictions vary.

## Technical Direction

- Current implementation: React browser modules with local storage and a Vite-ready `package.json`.
- Keep data in readable JavaScript objects until the app needs a backend or external plant API.
- Use the lightweight local server in `scripts/serve.mjs` when npm is unavailable.
- Prefer local storage first, then server/API integration only when saved cloud sync or location services are needed.

## UX Guidance

- The primary workflow is: enter location -> enter plant names -> generate plan -> refine.
- The app should support mixed vegetable and flower gardens in one plan.
- Cards should answer:
  - Where should I plant it?
  - When should I plant it?
  - How much water?
  - What fertilizer or feeding rhythm?
  - What are the top care risks?
  - What nearby plant combinations help or hurt?
- Use compact controls, scannable cards, and seasonal maintenance lists.
- Do not hide core guidance behind onboarding.

## Data And Advice Guardrails

- Treat generated guidance as a planning assistant, not local agricultural authority.
- Include trusted external resources for climate zone, planting calendars, and extension guidance.
- When exact city-specific frost dates are unknown, explain the assumption and link users to a verified planting calendar.
- Avoid precise chemical treatment recommendations unless sourced and locally scoped.

## Near-Term Build Plan

1. Static prototype with location input, plant list input, example database, plan cards, and resources.
2. Add local storage for saved garden plans.
3. Add visual bed planner with drag/drop plant chips.
4. Add reminder schedule export for watering, fertilizing, pruning, deadheading, and harvest windows.
5. Add richer location handling using ZIP/city lookup and hardiness/frost data.
