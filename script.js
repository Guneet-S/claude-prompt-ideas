// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===== PROMPT DATA =====
const prompts = [
  // Writing
  { id: 1, cat: "writing", icon: "✍️", title: "Blog Post Generator", prompt: "Write a comprehensive, engaging blog post about [topic] for [target audience]. Include a compelling headline, subheadings, practical examples, and a call-to-action at the end. Tone: [professional/casual/technical]." },
  { id: 2, cat: "writing", icon: "✍️", title: "Email Rewriter", prompt: "Rewrite the following email to be more [concise/professional/friendly/persuasive]: [paste email]. Preserve the key message but improve clarity and impact." },
  { id: 3, cat: "writing", icon: "✍️", title: "LinkedIn Post Crafter", prompt: "Create a LinkedIn post about [achievement/topic/insight] that tells a story, provides value, and ends with a question to boost engagement. Max 300 words. Make it authentic, not salesy." },
  { id: 4, cat: "writing", icon: "✍️", title: "Cold Outreach Message", prompt: "Write a short, personalized cold outreach message to [role] at [type of company] about [your product/service]. Be conversational, mention a specific pain point, and end with a low-friction CTA. Under 100 words." },
  { id: 5, cat: "writing", icon: "✍️", title: "Product Description", prompt: "Write a compelling product description for [product name]. Highlight the top 3 benefits (not features), speak to [target customer], and use sensory language. Include a short headline and 3-sentence body." },
  { id: 6, cat: "writing", icon: "✍️", title: "Press Release Draft", prompt: "Draft a press release announcing [company name]'s [news/product/event]. Include a headline, dateline, opening quote from [spokesperson], key details, boilerplate, and media contact info. Tone: formal and newsworthy." },
  { id: 7, cat: "writing", icon: "✍️", title: "Tweet Thread", prompt: "Write a 5-tweet thread about [topic]. Start with a hook tweet that promises value, build the story across tweets 2–4, and end with a summary and CTA in tweet 5. Keep each tweet under 260 characters." },
  { id: 8, cat: "writing", icon: "✍️", title: "Cover Letter", prompt: "Write a cover letter for a [job title] position at [company]. I have [X years] of experience in [field]. Highlight: [skill 1], [skill 2], [achievement]. Tone: confident but not arrogant. 3 short paragraphs max." },

  // Coding
  { id: 9, cat: "coding", icon: "💻", title: "Code Reviewer", prompt: "Review the following code for: bugs, security issues, performance bottlenecks, and readability. Suggest specific improvements with examples. Language: [language]. Context: [what this code does]. Code: [paste code]" },
  { id: 10, cat: "coding", icon: "💻", title: "Explain Code Simply", prompt: "Explain this code as if I'm a junior developer. Walk through what each section does, why it's written this way, and any gotchas to watch out for. Code: [paste code]" },
  { id: 11, cat: "coding", icon: "💻", title: "Debug My Code", prompt: "My [language] code is throwing this error: [error message]. Here is the code: [paste code]. Identify the root cause, explain why it happens, and provide a fixed version." },
  { id: 12, cat: "coding", icon: "💻", title: "Write Unit Tests", prompt: "Write comprehensive unit tests for the following function in [language/framework]. Cover: happy path, edge cases, null/empty inputs, and error states. Function: [paste code]" },
  { id: 13, cat: "coding", icon: "💻", title: "Refactor Code", prompt: "Refactor this code to be more readable, maintainable, and efficient without changing functionality. Follow [language] best practices. Explain each change you make. Code: [paste code]" },
  { id: 14, cat: "coding", icon: "💻", title: "API Design Helper", prompt: "Design a RESTful API for [feature/product]. List all endpoints with: HTTP method, path, request body, response schema, and status codes. Follow REST conventions and include pagination where needed." },
  { id: 15, cat: "coding", icon: "💻", title: "SQL Query Builder", prompt: "Write a SQL query to [what you want to achieve]. Tables available: [list tables and key columns]. Requirements: [any filters, sorting, aggregations]. Optimize for performance and explain the query." },
  { id: 16, cat: "coding", icon: "💻", title: "Regex Generator", prompt: "Write a regular expression that matches [describe pattern]. Show: the regex itself, explanation of each part, test cases it should match, and test cases it should NOT match. Language context: [language]." },

  // Business
  { id: 17, cat: "business", icon: "📊", title: "SWOT Analysis", prompt: "Perform a detailed SWOT analysis for [company/product/idea]. For each quadrant, list at least 4 specific, actionable points. Context: [brief description of the business/market]." },
  { id: 18, cat: "business", icon: "📊", title: "Business Plan Outline", prompt: "Create a detailed business plan outline for [business idea]. Include: executive summary, problem/solution, target market, business model, go-to-market strategy, competitive landscape, and financial projections framework." },
  { id: 19, cat: "business", icon: "📊", title: "Meeting Agenda", prompt: "Create a meeting agenda for a [type] meeting with [number] attendees. Goal: [what needs to be decided/accomplished]. Duration: [X minutes]. Include time allocations, discussion points, and owner assignments." },
  { id: 20, cat: "business", icon: "📊", title: "Investor Pitch Feedback", prompt: "Review my investor pitch for [company]. Give harsh but constructive feedback on: problem statement clarity, market size credibility, business model strength, traction proof, team presentation, and ask. Pitch: [paste pitch]" },
  { id: 21, cat: "business", icon: "📊", title: "Pricing Strategy", prompt: "Recommend a pricing strategy for [product/service] targeting [customer segment]. Consider: value-based, cost-plus, competitive, and freemium models. Justify your recommendation with pros and cons of each approach." },
  { id: 22, cat: "business", icon: "📊", title: "Job Description Writer", prompt: "Write a job description for a [role] at [type of company]. Include: responsibilities, required skills, nice-to-haves, culture fit signals, and compensation range placeholder. Make it attract senior candidates." },
  { id: 23, cat: "business", icon: "📊", title: "Performance Review", prompt: "Help me write a constructive performance review for an employee who [describe performance]. Focus on: specific behaviors and outcomes, areas of strength, 2-3 development areas, and clear goals for next quarter." },
  { id: 24, cat: "business", icon: "📊", title: "OKR Drafting", prompt: "Draft OKRs for [team/person] for Q[X] [year]. The team's focus is [describe focus]. Write 2–3 Objectives with 3 Key Results each. Key Results should be measurable, time-bound, and ambitious but achievable." },

  // Creative
  { id: 25, cat: "creative", icon: "🎨", title: "Story Starter", prompt: "Write the opening 3 paragraphs of a short story in the [genre] genre. Setting: [setting]. Main character: [character description]. The story must open with tension and end the section on a cliffhanger." },
  { id: 26, cat: "creative", icon: "🎨", title: "Character Builder", prompt: "Create a detailed character profile for a [role] in a [genre] story. Include: backstory, core motivation, biggest fear, a defining flaw, a unique skill, speech pattern, and how they'd react to betrayal." },
  { id: 27, cat: "creative", icon: "🎨", title: "Tagline Generator", prompt: "Generate 10 taglines for [brand/product/campaign]. The brand is [describe brand]. Target audience: [audience]. Tone options: witty, bold, emotional, minimal. Present them with a short note on each approach." },
  { id: 28, cat: "creative", icon: "🎨", title: "Song Lyrics", prompt: "Write lyrics for a [genre] song about [theme/topic]. Include a verse, pre-chorus, chorus, second verse, and bridge. Mood: [describe mood]. Use [rhyme scheme: ABAB/AABB/free verse]." },
  { id: 29, cat: "creative", icon: "🎨", title: "World Building", prompt: "Help me build the world of [setting name] for my [genre] story. Describe: geography, social structure, economy, magic/technology system, major factions, and 3 unresolved conflicts that drive plot." },
  { id: 30, cat: "creative", icon: "🎨", title: "Script Scene", prompt: "Write a script scene between [characters] in [setting]. The scene goal: [what needs to happen dramatically]. Tone: [tense/funny/romantic]. Include stage directions and make the dialogue feel natural, not expository." },
  { id: 31, cat: "creative", icon: "🎨", title: "Brand Voice Guide", prompt: "Create a brand voice guide for [brand name]. Include: 3 personality traits with dos and don'ts, writing style rules, vocabulary to use and avoid, sample approved phrases, and before/after rewrite examples." },
  { id: 32, cat: "creative", icon: "🎨", title: "Ad Copy Variants", prompt: "Write 5 different ad copy variants for [product] targeting [audience]. Each under 50 words. Try these angles: fear of missing out, social proof, curiosity, direct benefit, and humor. Include a headline for each." },

  // Research
  { id: 33, cat: "research", icon: "🔬", title: "Research Summary", prompt: "Summarize the current state of research on [topic]. Cover: key findings, major debates, leading researchers/institutions, methodological approaches, and gaps in the literature. Cite types of sources I should look for." },
  { id: 34, cat: "research", icon: "🔬", title: "Pros & Cons Analysis", prompt: "Give me a comprehensive pros and cons analysis of [topic/decision/technology]. For each point, explain the reasoning and severity. End with a nuanced recommendation based on [my context/goals]." },
  { id: 35, cat: "research", icon: "🔬", title: "Devil's Advocate", prompt: "I believe [your position]. Play devil's advocate and give me the strongest possible counterarguments. Don't strawman — use the most sophisticated version of the opposing view. I want to stress-test my thinking." },
  { id: 36, cat: "research", icon: "🔬", title: "Literature Review Frame", prompt: "Help me structure a literature review on [topic] for [academic level] level. Suggest: key themes to organize around, seminal papers to find, time range to cover, and how to identify research gaps." },
  { id: 37, cat: "research", icon: "🔬", title: "Fact Check Request", prompt: "Fact-check the following claim: [claim]. Break down: what is accurate, what is misleading, what is false, what context is missing. Suggest reliable sources for verification." },
  { id: 38, cat: "research", icon: "🔬", title: "Expert Interview Questions", prompt: "Generate 15 interview questions for an expert in [field] about [specific topic]. Mix: high-level perspective questions, technical depth questions, forward-looking questions, and one provocative question." },
  { id: 39, cat: "research", icon: "🔬", title: "Competitive Research", prompt: "Analyze [competitor name] for a business competing in [market]. Cover: product offerings, pricing model, target customer, strengths, weaknesses, recent moves, and one strategic insight for how to differentiate." },
  { id: 40, cat: "research", icon: "🔬", title: "Market Research Brief", prompt: "Create a market research brief for [product/market]. Include: research objectives, target respondents, key questions to answer, suggested research methods, and what success looks like from this research." },

  // Productivity
  { id: 41, cat: "productivity", icon: "⚡", title: "Task Prioritizer", prompt: "Here are my tasks for today: [list tasks]. Help me prioritize them using the Eisenhower Matrix. For high-priority tasks, suggest a time block schedule. Flag anything I should delegate or drop entirely." },
  { id: 42, cat: "productivity", icon: "⚡", title: "Decision Framework", prompt: "I need to decide whether to [decision]. Factors to consider: [list factors]. Stakes: [high/medium/low]. Help me think through this using a structured decision framework. Don't tell me what to do — help me think clearly." },
  { id: 43, cat: "productivity", icon: "⚡", title: "Weekly Review Template", prompt: "Help me create a weekly review template for [role/context]. Include sections for: wins, misses, lessons learned, blockers to clear, top 3 priorities for next week, and a one-sentence reflection prompt." },
  { id: 44, cat: "productivity", icon: "⚡", title: "SOP Writer", prompt: "Write a Standard Operating Procedure for [process]. Audience: [who will follow it]. Include: purpose, scope, step-by-step instructions with decision points, common errors to avoid, and what done looks like." },
  { id: 45, cat: "productivity", icon: "⚡", title: "Meeting Summary", prompt: "Turn these raw meeting notes into a clean meeting summary: [paste notes]. Format: decisions made, action items (with owners and deadlines), open questions, and one-paragraph narrative summary." },
  { id: 46, cat: "productivity", icon: "⚡", title: "Project Kickoff Plan", prompt: "Create a project kickoff plan for [project name]. Include: objective, scope (in/out), key milestones, team roles, dependencies, risks to flag early, and first-week action items for each team member." },
  { id: 47, cat: "productivity", icon: "⚡", title: "Habit Tracker Design", prompt: "Help me design a habit tracking system for [goal]. Include: the habit loop (cue, routine, reward), metrics to track, daily/weekly review checkpoints, and how to handle missed days without breaking the streak mentality." },
  { id: 48, cat: "productivity", icon: "⚡", title: "Focus Protocol", prompt: "Design a [X]-hour deep work session for [task]. Include: pre-session prep checklist, environment setup, time block structure, re-focus triggers if distracted, and a post-session wind-down routine." },

  // Learning
  { id: 49, cat: "learning", icon: "📚", title: "Explain Like I'm 10", prompt: "Explain [complex concept] as if I'm 10 years old. Use a simple analogy from everyday life, avoid jargon, and end with 3 follow-up questions a curious kid might ask to go deeper." },
  { id: 50, cat: "learning", icon: "📚", title: "Feynman Technique", prompt: "Help me understand [topic] using the Feynman Technique. First explain it simply, then identify what I might be confused about, then re-explain it from first principles. Topic context: [what I already know]." },
  { id: 51, cat: "learning", icon: "📚", title: "Study Plan", prompt: "Create a [X-week] study plan to learn [skill/subject] from [current level] to [goal level]. Include: weekly topics, recommended resources (books, courses, projects), practice exercises, and a milestone check for each week." },
  { id: 52, cat: "learning", icon: "📚", title: "Quiz Generator", prompt: "Generate a 10-question quiz on [topic] at [beginner/intermediate/advanced] level. Mix: multiple choice (4 options), true/false, and short answer questions. Provide answers at the end with brief explanations." },
  { id: 53, cat: "learning", icon: "📚", title: "Mental Model Explainer", prompt: "Explain the [mental model name] mental model. Include: what it is, origin, core insight, real-world example, when to apply it, when NOT to apply it, and a common misconception about it." },
  { id: 54, cat: "learning", icon: "📚", title: "Concept Map Prompt", prompt: "Create a concept map outline for [topic]. Show: the central concept, 5-7 related sub-concepts, how they connect, and which relationships are causal vs. correlative. Format as a hierarchical text outline." },
  { id: 55, cat: "learning", icon: "📚", title: "Book Summary", prompt: "Summarize the key ideas from [book title] by [author]. Cover: the central thesis, top 5 actionable insights, one surprising idea, a quote that captures the book's essence, and who should and shouldn't read it." },
  { id: 56, cat: "learning", icon: "📚", title: "Spaced Repetition Cards", prompt: "Create 15 spaced repetition flashcards for [topic]. Format: Question (front) / Answer (back). Include conceptual questions, application questions, and 'why does this matter' questions. Level: [beginner/advanced]." },

  // Data
  { id: 57, cat: "data", icon: "📈", title: "Data Analysis Plan", prompt: "Create a data analysis plan for [business question]. Define: the hypothesis, required data sources, metrics to analyze, statistical methods to use, potential confounders, and what insights would be actionable." },
  { id: 58, cat: "data", icon: "📈", title: "Dashboard Design", prompt: "Design a dashboard for [audience] tracking [business area]. List: the 5-7 most important KPIs to show, visualization type for each (chart, table, gauge), refresh frequency, and what alert thresholds to set." },
  { id: 59, cat: "data", icon: "📈", title: "Survey Design", prompt: "Design a survey to measure [what you want to understand] from [target respondents]. Include: 10-12 questions mixing Likert scale, multiple choice, and open-ended. Avoid leading questions and order effects." },
  { id: 60, cat: "data", icon: "📈", title: "A/B Test Setup", prompt: "Help me set up an A/B test for [change you want to test]. Define: hypothesis, control vs. variant, primary metric, guardrail metrics, minimum detectable effect, sample size needed, and test duration." },
  { id: 61, cat: "data", icon: "📈", title: "Data Story Narrative", prompt: "Help me write a data story from these findings: [paste data/findings]. Structure: the insight in one sentence, why it matters, what drove it, implications, and recommended action. Audience: [exec/team/customer]." },
  { id: 62, cat: "data", icon: "📈", title: "Metrics Framework", prompt: "Design a metrics framework for [product/team/goal]. Use the HEART or North Star framework. Define: the top-level metric, input metrics, guardrail metrics, and how to detect when a metric is being gamed." },
];

// ===== STATE =====
let activeCategory = "all";
let searchQuery = "";

// ===== PARTICLES =====
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animFrame;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(130, 100, 255, ${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    animFrame = requestAnimationFrame(draw);
  }

  draw();
}

// ===== HERO ANIMATIONS =====
function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });

  tl.to("#heroBadge", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
    .to(".hero-title .line", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.3")
    .to("#heroSub", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
    .to("#heroActions", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .to("#heroStats", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .to(".hero-scroll-hint", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.1");
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  // Search wrap
  gsap.to("#searchWrap", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#searchWrap",
      start: "top 85%",
    }
  });

  // Filter buttons
  gsap.to("#filterScroll", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#filterScroll",
      start: "top 85%",
    }
  });
}

// ===== NAV SCROLL EFFECT =====
function initNavScroll() {
  ScrollTrigger.create({
    start: "top -60px",
    onEnter: () => document.getElementById("nav").style.background = "rgba(10,10,15,0.95)",
    onLeaveBack: () => document.getElementById("nav").style.background = "rgba(10,10,15,0.8)",
  });
}

// ===== HAMBURGER =====
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
}

// ===== RENDER CARDS =====
function getFilteredPrompts() {
  return prompts.filter(p => {
    const matchCat = activeCategory === "all" || p.cat === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.prompt.toLowerCase().includes(q) || p.cat.includes(q);
    return matchCat && matchSearch;
  });
}

function renderCards(filtered) {
  const grid = document.getElementById("promptsGrid");
  const noResults = document.getElementById("noResults");

  // Kill existing scroll triggers for cards
  ScrollTrigger.getAll().forEach(st => {
    if (st.vars && st.vars._cardTrigger) st.kill();
  });

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "prompt-card";
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${p.icon}</div>
        <div class="card-meta">
          <div class="card-title">${p.title}</div>
          <span class="card-tag">${p.cat}</span>
        </div>
      </div>
      <p class="card-prompt">${p.prompt}</p>
      <div class="card-footer">
        <button class="copy-btn" data-id="${p.id}">
          <span class="copy-icon">&#128203;</span> Copy Prompt
        </button>
        <span class="card-use-tag">Click to copy</span>
      </div>
    `;
    grid.appendChild(card);

    // Scroll-triggered entrance per card
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: Math.min(i * 0.05, 0.4),
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        _cardTrigger: true,
      }
    });

    // Hover animation
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.01, duration: 0.2, ease: "power2.out" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });

  // Copy button events
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const prompt = prompts.find(p => p.id === id);
      if (!prompt) return;

      navigator.clipboard.writeText(prompt.prompt).then(() => {
        btn.classList.add("copied");
        btn.innerHTML = '<span class="copy-icon">&#10003;</span> Copied!';

        // Button bounce animation
        gsap.fromTo(btn, { scale: 0.92 }, { scale: 1, duration: 0.35, ease: "back.out(2)" });

        showToast();

        setTimeout(() => {
          btn.classList.remove("copied");
          btn.innerHTML = '<span class="copy-icon">&#128203;</span> Copy Prompt';
        }, 2000);
      });
    });
  });
}

// ===== TOAST =====
function showToast() {
  const toast = document.getElementById("toast");
  gsap.killTweensOf(toast);
  gsap.fromTo(toast,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out",
      onComplete: () => {
        gsap.to(toast, { opacity: 0, y: -10, duration: 0.3, delay: 1.5, ease: "power2.in" });
      }
    }
  );
}

// ===== FILTER BUTTONS =====
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      gsap.fromTo(btn, { scale: 0.92 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });

      activeCategory = btn.dataset.cat;
      renderCards(getFilteredPrompts());
    });
  });
}

// ===== SEARCH =====
function initSearch() {
  const input = document.getElementById("searchInput");
  const clear = document.getElementById("searchClear");

  input.addEventListener("input", () => {
    searchQuery = input.value.trim();
    clear.classList.toggle("visible", searchQuery.length > 0);
    renderCards(getFilteredPrompts());
  });

  clear.addEventListener("click", () => {
    input.value = "";
    searchQuery = "";
    clear.classList.remove("visible");
    renderCards(getFilteredPrompts());
    input.focus();
  });
}

// ===== SMOOTH SCROLL for anchor links =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: target, offsetY: 80 },
          ease: "power2.inOut"
        });
      }
    });
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initHeroAnimations();
  initScrollAnimations();
  initNavScroll();
  initHamburger();
  initFilters();
  initSearch();
  initSmoothScroll();
  renderCards(getFilteredPrompts());
});
