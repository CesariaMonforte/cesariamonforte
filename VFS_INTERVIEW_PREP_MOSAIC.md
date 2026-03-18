# VFS Junior Frontend Web Developer Interview Prep
## Mosaic as Your Portfolio Project

**Position:** Junior Frontend Web Developer, Marketing  
**Organization:** Vancouver Film School  
**Date:** March 16, 2026

---

## 1. Your 30-Second Mosaic Pitch

> "Mosaic is a portfolio project guidance app I built with a team of 5—3 designers and 2 developers. I was both Frontend Developer and UI Designer. It helps college students and transitioning professionals generate project ideas and get step-by-step guides. On the frontend, I built the Create Profile flow with form validation, reusable components using the classnames utility for dynamic styling, and popups with React portals. We went through full UX—personas, user flows, LoFi and HiFi prototypes, and usability testing. The app is built with Next.js and React, deployed on Vercel."

---

## 2. Mapping Mosaic to VFS Job Requirements

| VFS Requirement | How Mosaic Demonstrates It |
|-----------------|----------------------------|
| **W3C Valid HTML & CSS** | Semantic forms, accessible inputs, CSS Modules |
| **Responsive websites** | Mobile-first app, breakpoints, fluid layouts |
| **JavaScript** | React, Next.js, useState, useEffect, form handling |
| **jQuery/Bootstrap** | *Be ready to say:* "I use React and Next.js. I'm comfortable learning jQuery if the stack requires it." |
| **Wireframing & prototyping** | Figma LoFi and HiFi, user flows, personas—full UX process |
| **User flows, interactive** | User flow diagrams, dashboard-to-questionnaire flow, login flow |
| **Usability Principles & User-Centered Design** | Usability testing, replaced Lorem ipsum with real content for testing, user-focused decisions |
| **Content supports brand** | Styleguide, consistent visual language |
| **SASS / Pre-processors** | CSS Modules, classnames for conditional styling |
| **Git** | Project on GitHub (mosaic_app), team collaboration |
| **Detail-oriented, independent** | Form validation, reusable DescriptionBox, edge cases |
| **Collaboration** | 3 designers + 2 devs, kept user as focus when ideas differed |

---

## 3. Technical Deep-Dive: What to Highlight

### Create Profile & Form Validation
- Form collects: first name, last name, username, interests (InterestChip), about me, location, avatar
- **Validation on submit** — checks all required fields before save
- **Incomplete profile popup** when required fields are missing
- **Save confirmation popup** when profile is successfully created
- Data persisted in **localStorage** as JSON

### Reusable Components & Classnames
- **DescriptionBox** — one component, multiple variants via `classnames` (primary, secondary, conditions)
- Avoids redundant components; layout changes by `useCase` instead of separate components
- Keeps code readable and styles predictable

### Popups & React Portals
- **createPortal** — renders popup outside main DOM tree (document.body)
- Prevents z-index and overflow issues
- `useEffect` for mount/unmount to avoid SSR issues in Next.js

### UX Process (Full Cycle)
- Personas, user flows, LoFi prototype
- **Usability testing** — learned Lorem ipsum hindered testing; switched to real content
- HiFi prototype, styleguide
- Reflection: small details (placement, color, sizing) impact UX; user focus helped collaboration

---

## 4. Walkthrough Script: "Talk Me Through Mosaic"

*Open the live app (https://mosaic-app-nu.vercel.app/) and your portfolio Mosaic page. Start with "Frontend Development" filter selected.*

---

**Opening (0:00–0:20)**

> "I'll walk you through Mosaic—a portfolio guidance app I built with a team of 5. I handled both frontend development and UI design. I'll show you the app and tie it back to the code and UX process."

**[INDICATE: Open mosaic-app-nu.vercel.app]**

---

**1. Login & Onboarding (0:20–0:45)**

> "Users start with a login flow."

**[INDICATE: Login screen if visible, or mention the video on portfolio]**

> "The app is built with Next.js. We used React for the UI and kept the flow simple for our target users—college students and transitioning professionals building portfolios."

---

**2. Create Profile & Validation (0:45–1:20)**

> "The Create Profile form is a key feature I built."

**[INDICATE: Create Profile form—fields like first name, last name, username, interests]**

> "It collects first name, last name, username, interests—selected via chips—about me, location, and avatar. All fields are required. I validate on submit: if anything's missing, an incomplete-profile popup appears. If everything's valid, we save to localStorage and show a confirmation popup."

**[INDICATE: Interest chips, or the validation logic on portfolio]**

> "I organized the validation logic right next to the submit handler so the behavior is predictable. The data is stored as JSON in localStorage."

---

**3. Reusable Components & Classnames (1:20–1:50)**

> "One challenge: we had description boxes that were similar but with minor style differences. I didn't want to create multiple redundant components."

**[INDICATE: Portfolio page—DescriptionBox code snippet or Classnames image]**

> "I used the classnames utility. One DescriptionBox component, with a base class plus conditional variants—primary, secondary, or conditions—based on a useCase prop. That way we change layout by use case instead of maintaining separate components. It keeps the code readable and styles predictable."

---

**4. Popups & React Portals (1:50–2:10)**

> "For the popups—incomplete profile, save confirmation—I used React's createPortal."

**[INDICATE: PopUp code snippet on portfolio if available]**

> "createPortal renders the popup into document.body, outside the main DOM tree. That avoids z-index and overflow issues. In Next.js we need a mounted check with useEffect so it only renders on the client and doesn't break SSR."

---

**5. UX Process & Collaboration (2:10–2:40)**

> "On the UX side, we did the full process—personas, user flows, LoFi and HiFi in Figma, usability testing."

**[INDICATE: Switch to UX/UI filter on portfolio—Personas, User Flow, LoFi, HiFi]**

> "One lesson: we initially used Lorem ipsum. During usability testing, users couldn't relate to Mosaic's function. We replaced it with real content and testing improved. Small details—placement, color, sizing—really impact UX. We had 5 people on the team with different ideas; keeping the user as the main focus helped us collaborate and prioritize."

**[INDICATE: Usability testing image, Styleguide]**

---

**Closing (2:40–2:50)**

> "That's Mosaic—form validation, reusable components with classnames, React portals for popups, and a full UX process with a team. Happy to go deeper on any part."

---

**Total time: ~2.5–3 minutes.**

---

## 5. Likely Interview Questions & Suggested Answers

### "Walk me through Mosaic."
> "Mosaic is a portfolio guidance app for students and professionals. I built the Create Profile flow with validation and localStorage persistence, reusable DescriptionBox components using classnames for different variants, and popups with React portals. We also did full UX—personas, user flows, LoFi/HiFi prototypes, and usability testing. Team of 5, I was frontend dev and UI designer."

### "What was the biggest challenge?"
> "Description boxes that were similar but had minor style differences. I didn't want redundant components. I solved it with the classnames utility—one component, conditional variants based on useCase. Another challenge was form validation—making sure all required fields had data before save, and showing the right popup for incomplete vs. success."

### "How did you work with the design team?"
> "We had 3 designers and 2 developers. Ideas sometimes differed, but we kept the user as the main focus. That helped us prioritize and collaborate. I was also doing UI design, so I was in both worlds—translating designs to code and contributing to the visual direction."

### "Tell me about the usability testing."
> "We learned that Lorem ipsum was a mistake—users couldn't relate to Mosaic's function during testing. We replaced it with real content and clarity improved. We also learned that small details—placement, color, sizing—have a big impact on UX."

### "Why Next.js?"
> "Next.js gave us routing, server-side capabilities, and a good developer experience. For a team project, it helped us stay organized. The app is deployed on Vercel, which pairs well with Next.js."

### "What would you improve?"
> "I'd add more robust form validation—maybe a library like React Hook Form. I'd also add unit tests for the validation logic and consider a backend for profile data so it syncs across devices instead of localStorage."

---

## 6. Questions to Ask VFS

1. **"What does a typical day look like for the Junior Frontend Developer?"**
2. **"Which VFS sites or microsites would I be working on first?"**
3. **"How does the frontend team collaborate with Marketing on content and design?"**
4. **"What's the current tech stack—Drupal version, build tools, deployment process?"**
5. **"Is there room to introduce modern tools like React or Next.js for specific projects?"**
6. **"What does success look like in the first 3–6 months?"**

---

## 7. Quick Reference: Mosaic Stats

- **Tech:** Next.js, React, Classnames, Figma, FigJam
- **Live:** https://mosaic-app-nu.vercel.app/
- **Repo:** https://github.com/brunaguarizo/mosaic_app
- **Duration:** Feb–May 2024
- **Team:** 3 Designers, 2 Developers
- **Role:** Frontend Developer | UI Designer

---

## 8. Pre-Interview Checklist

- [ ] Mosaic live site loads and works
- [ ] Portfolio Mosaic page is ready (both Frontend Development and UX/UI filters)
- [ ] You can explain Create Profile validation and localStorage
- [ ] You can explain DescriptionBox + classnames
- [ ] You can explain createPortal for popups
- [ ] You remember the Lorem ipsum → real content lesson from usability testing
- [ ] You have Brewly as a backup if they ask for another example

---

**Good luck with your interview!**
