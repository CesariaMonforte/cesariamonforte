# VFS Junior Frontend Web Developer Interview Prep
## Brewly as Your Portfolio Project

**Position:** Junior Frontend Web Developer, Marketing  
**Organization:** Vancouver Film School  
**Date:** March 16, 2026

---

## 1. Your 30-Second Brewly Pitch

> "Brewly is a mobile-first beer catalog web app I built with React. Users can discover beers from a REST API, create custom collections, and search or filter by name, ABV, or IBU. I focused on clean component architecture, API integration with proper loading and error states, and persistent data using localStorage. It's deployed on Vercel and demonstrates responsive design, reusable UI patterns, and a complete user journey from discovery to saving favorites."

---

## 2. Mapping Brewly to VFS Job Requirements

| VFS Requirement | How Brewly Demonstrates It |
|-----------------|----------------------------|
| **W3C Valid HTML & CSS** | Semantic HTML structure, CSS Modules with valid selectors, accessible markup |
| **Responsive websites** | Mobile-first design, breakpoints at 480px, 600px, 900px, fluid layouts |
| **JavaScript** | React components, hooks (useState, useEffect), async/await for API calls |
| **jQuery/Bootstrap** | *Be ready to say:* "I use React instead of jQuery for component-based development. I'm comfortable learning jQuery if needed." |
| **Performance optimization** | Lazy loading, search-on-Enter (reduces re-renders), localStorage for persistence |
| **CMS (Drupal)** | *Be ready to say:* "Brewly uses a REST API for data. I'm eager to learn Drupal—I pick up new systems quickly." |
| **SASS / Pre-processors** | CSS Modules provide scoped styling; Vite handles bundling. "I've used modular CSS and am comfortable with SASS." |
| **Git** | Project on GitHub (app-brewly), version control, collaborative workflows |
| **Usability & User-Centered Design** | Mobile-first, clear modals, search UX (Enter to search), duplicate prevention, age verification flow |
| **Wireframing & prototyping** | Architecture diagram, component breakdown, user flows (discovery → search → collections) |
| **Detail-oriented, independent** | Handled edge cases (duplicate collections, case-insensitive checks), worked through challenges |

---

## 3. Technical Deep-Dive: What to Highlight

### API Integration
- **BrewBuddy REST API** with `limit` and `offset` pagination
- `fetchBeers()` with `URLSearchParams` for query building
- `transformBeerData()` to normalize API response (translations, fallbacks)
- Loading and error states

### State & Data
- **localStorage** for collections (persists across sessions)
- Functional `setState` for collections to avoid stale state
- `collectionsReducer`-style logic for CRUD on collections

### UX Decisions
- **Search on Enter** (not on every keystroke) — improves performance, feels deliberate
- **Duplicate prevention** — case-insensitive collection name checks
- **Modal pattern** — parent controls open/close, clear close affordance

### Architecture
- Reusable components: Modal, BeerCard, CodeSnippetBox, SectionDescriptionBox
- Component hierarchy (Feed → BeerCard, Collections → Modal)
- Mobile-first responsive breakpoints

---

## 3b. Walkthrough Script: "Talk Me Through Brewly"

*Use this when they ask you to walk through or demo Brewly. Open the live app (https://app-brewly.vercel.app/) and your portfolio Brewly page in separate tabs. Cues in brackets tell you when to point or switch.*

---

**Opening (0:00–0:20)**

> "I'll walk you through Brewly—it's a beer catalog app I built with React. I'll show you the live app and then tie it back to the code and architecture."

**[INDICATE: Open app-brewly.vercel.app in a browser tab]**

---

**1. Landing & API Integration (0:20–0:50)**

> "When users land here, they see a feed of beers. This data comes from the BrewBuddy REST API—a real external API."

**[INDICATE: The beer cards/cards on the feed]**

> "I built a fetch function that uses URLSearchParams for pagination—limit and offset. The API returns a lot of nested data, so I wrote a transform function that normalizes it—handling translations, missing fields, and fallbacks like 'Unknown Brewery' if the brewery name is missing."

**[INDICATE: A beer card—show the name, brewery, maybe ABV]**

> "I also added loading and error states so the UI stays responsive if the API is slow or fails."

---

**2. Search & Filter (0:50–1:15)**

> "Users can search and filter."

**[INDICATE: Search bar and filter dropdown]**

> "One UX decision I made: search runs when the user presses Enter, not on every keystroke. Filtering on every keystroke caused unnecessary re-renders and made the experience feel jumpy. Search-on-Enter improves performance and keeps the interaction deliberate."

**[INDICATE: Filter dropdown—name, ABV, IBU]**

> "The filter lets you search by name, ABV, or IBU. Beers are fetched once on mount, then filtered client-side based on the selection."

---

**3. Collections & Modal (1:15–1:50)**

> "When a user finds a beer they like, they tap the favorite or add button."

**[INDICATE: Favorite/add button on a beer card]**

> "That opens a modal."

**[INDICATE: Modal when it opens]**

> "The modal is controlled by the parent—it decides when it's open and what content to show. I made sure there's always a clear close affordance so users never get stuck."

> "From here, users can add the beer to an existing collection or create a new one. Each collection has a name and stores beer IDs. Collections are persisted in localStorage as JSON, so they survive page refreshes."

**[INDICATE: List of collections or "Create new" option in the modal]**

---

**4. Duplicate Prevention (1:50–2:10)**

> "One challenge I solved: duplicate collections. Users could create 'My Beers' and 'my beers'—same name, different case. I fixed it by normalizing to lowercase when comparing and showing a confirmation message if a duplicate exists."

**[OPTIONAL: If you have the portfolio page open, scroll to the code snippet for handleSaveNewCollection]**

> "The logic checks existing collections with a case-insensitive comparison before adding."

---

**5. Architecture & Responsive (2:10–2:35)**

> "If you're on my portfolio page—"

**[INDICATE: Switch to portfolio Brewly page—architecture diagram]**

> "—I documented the architecture. The main flow is Feed → BeerCard, and Collections → Modal. The components are reusable: Modal, BeerCard, CodeSnippetBox."

**[INDICATE: Components diagram if you have it]**

> "I built it mobile-first. The layout stacks vertically on small screens and switches to a two-column layout at 600px. Breakpoints are at 480, 600, and 900."

**[OPTIONAL: Resize browser or show mobile view to demonstrate]**

---

**Closing (2:35–2:45)**

> "That's Brewly—API integration, search and filter, collections with localStorage, and a few UX decisions. Happy to go deeper on any part if you'd like."

---

**Total time: ~2.5 minutes.** Adjust if they ask you to go faster or focus on one area.

---

## 4. Likely Interview Questions & Suggested Answers

### "Walk me through Brewly."
> "Brewly is a beer discovery app. Users land on a feed of beers from the BrewBuddy API. They can search and filter by name, ABV, or IBU. When they find a beer they like, they tap a favorite button, which opens a modal where they can add it to an existing collection or create a new one. Collections are stored in localStorage so they persist. I built it mobile-first with React, using CSS Modules for styling and Vite for the build."

### "What was the biggest challenge?"
> "Duplicate collections. Users could create collections with the same name in different cases—'My Beers' vs 'my beers.' I fixed it by normalizing to lowercase when comparing and showing a confirmation message if a duplicate exists. I also optimized search—filtering on every keystroke caused unnecessary re-renders, so I switched to search-on-Enter for better performance."

### "How did you handle the API?"
> "I used fetch with async/await. The API returns paginated data with limit and offset. I built a transform function to normalize the response—handling translations, missing fields, and fallbacks like 'Unknown Brewery.' I also added loading and error states so the UI stays responsive."

### "Why React over vanilla JavaScript?"
> "React's component model made it easier to build reusable pieces like the Modal and BeerCard. Hooks like useState and useEffect kept the logic clear. For a project of this scope, React helped me stay organized and maintainable."

### "How do you ensure your code is maintainable?"
> "I use CSS Modules for scoped styles, keep components small and focused, and document the architecture. The Collections logic is centralized so changes in one place propagate correctly."

### "Tell me about responsive design in Brewly."
> "I built it mobile-first. The layout stacks vertically on small screens and switches to a two-column layout at 600px. I use CSS variables for spacing and typography so changes are consistent. Breakpoints are at 480px, 600px, and 900px."

### "What would you improve?"
> "I'd add unit tests for the collection logic and API transform. I'd also consider a backend for collections so they sync across devices instead of localStorage. Accessibility—keyboard navigation and screen reader support—is another area I'd strengthen."

---

## 5. Questions to Ask VFS

1. **"What does a typical day look like for the Junior Frontend Developer?"**
2. **"Which VFS sites or microsites would I be working on first?"**
3. **"How does the frontend team collaborate with Marketing on content and design?"**
4. **"What's the current tech stack—Drupal version, build tools, deployment process?"**
5. **"Is there room to introduce modern tools like React for specific projects, or is the stack mostly Drupal/jQuery?"**
6. **"What does success look like in the first 3–6 months?"**

---

## 6. Quick Reference: Brewly Stats

- **Tech:** React, Vite, CSS Modules, REST API (BrewBuddy)
- **Live:** https://app-brewly.vercel.app/
- **Repo:** https://github.com/app-brewly/app-brewly
- **Duration:** Oct–Nov 2025
- **Role:** Frontend Developer | UI Designer

---

## 7. Pre-Interview Checklist

- [ ] Brewly live site loads and works on your phone
- [ ] Portfolio page for Brewly is ready to share
- [ ] You can explain the architecture diagram and component structure
- [ ] You remember the duplicate-collection and search-on-Enter solutions
- [ ] You have 1–2 backup stories (e.g., Mosaic, this portfolio) if they ask for more examples

---

**Good luck with your interview!**
