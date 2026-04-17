# Claude Prompt Ideas

A curated collection of 60+ copy-ready prompts for Claude AI — organized by category, searchable, and built with smooth GSAP animations.

**Live site:** https://guneet-s.github.io/claude-prompt-ideas/

---

## What's inside

- 60+ prompts across 8 categories: Writing, Coding, Business, Creative, Research, Productivity, Learning, Data
- Search and category filter
- One-click copy to clipboard
- Fully responsive — works on mobile and desktop

## Animations (GSAP)

- Hero entrance: staggered text and badge reveal on page load
- Scroll-triggered: cards animate in as you scroll
- Hover: card lift with glow border
- Copy button: bounce feedback on click
- Smooth scroll for nav links
- Animated particle background in hero

## Tech

- HTML, CSS, JavaScript (vanilla)
- GSAP 3 (ScrollTrigger, ScrollToPlugin)
- Google Fonts (Inter)
- Hosted on GitHub Pages

## Run locally

No build step needed. Just open `index.html` in a browser, or serve with any static server:

```bash
npx serve .
```

## Add more prompts

Edit the `prompts` array in `script.js`. Each prompt object takes:

```js
{
  id: <number>,
  cat: "writing" | "coding" | "business" | "creative" | "research" | "productivity" | "learning" | "data",
  icon: "<emoji>",
  title: "Prompt Title",
  prompt: "The full prompt text..."
}
```

## License

MIT
