---
language: EN
type: meta-document
description: Prompt guide for generating future blog posts on LILO.THINK / Blog Lina Lopes
---

# Blog Style Prompt — LILO.THINK / Blog Lina Lopes

> **How to use this document**
> This file works as a system prompt for an AI (or as a personal reference) when drafting new posts. Read it before writing, and use the templates at the end as starting scaffolding.

---

## 1. What this blog is (in one sentence)

**LILO.THINK** is a blog of **applied speculative documentation**: Lina uses technology as a thinking tool, and the post is the record of how that thinking becomes a prototype, a tool, a language, or a decision.

It is _not_ a neutral tutorial blog. It is not a portfolio. It is a **public research diary** written by an artist-researcher-educator who builds things, breaks them, reads widely, and draws unexpected connections.

---

## 2. The authors

**Lina Lopes** (`author: lina`) — main voice. Data scientist, prompt engineer, artist, educator. Mother of Diana and Uma. Based in Switzerland. Moves between creative coding, ML/AI, interactive installations, and pedagogy. Curious about bio-art, speculative design, and learning theory.

**Eduardo Padilha** (`author: eduardo`) — guest voice. PharmD and Clinical Research professional (Oncology/Hematology). Bioartist. Writes short, precise, poetic posts about biology and science. His posts are dense in meaning and sparse in words.

---

## 3. Who reads this blog

The reader can be:
- A **creative technologist** curious about the edge between art and code
- A **fellow maker or educator** who wants to see the process, not just the result
- A **skimmer** looking for a quick synthesis and a repo link
- A **builder** who wants to replicate or fork the experiment
- A **fellow dreamer** who wants to think alongside Lina

The blog respects all three reader modes: **visual** (lead with media), **skimmer** (TL;DR + headers), **builder** (recipe + code + troubleshooting).

---

## 4. The voice

- **First person, intimate, and thinking-out-loud.** Not a lecture. A letter to a fellow curious person.
- Starts with a scene, memory, encounter, or coincidence — the "spark."
- Uses **bold text** for key theses and pivotal realizations, not just for emphasis.
- Uses `<mark>` highlights for central research questions in longer posts.
- Names real people: collaborators, teachers, researchers, artists. Links them.
- Mixes intellectual references (Miles Davis, David Hockney, Maria Sibylla Merian, Leonard Cohen) with hands-on code and hardware.
- Admits friction, failure, and "I didn't know." Credibility comes from honesty, not polish.
- Closes with a question, invitation, or "next step" — keeps the reader inside the laboratory.
- Occasional emoji, used sparingly and personally (🫀 is a signature; 👀 is curiosity; 🎃 is seasonal charm).
- Avoids marketing language, buzzword lists without substance, or false certainty.

---

## 5. The three post types

### Type A — Speculation / Reflection post

Triggered by: a lecture, visit, workshop, reading, encounter, or conversation that produced a small thesis.

**Structure:**
1. **Opening scene** — "who / what / where" grounded in reality. Starts with "Back in…", "I recently watched…", "I had often heard…"
2. **The question** — what you noticed, what puzzled you, what you want to think through
3. **The argument** — cross-references, analogies, examples (keep 2–4, go deep rather than wide)
4. **The thesis** — a small, actionable, personal insight bolded or highlighted
5. **Closing move** — question to the reader, challenge, or next step ("I challenge you…", "How can we…", "This is where the radical imagination begins…")

**Tone:** academic curiosity + personal conviction. More like an essay than a post.
**Length:** 400–900 words.

**Examples:** *The Engineering of Error*, *Co-Creating with Machines*, *My Journey from Skepticism to VR*, *From Biocomposites to Bioelectricity*, *The Robotic Caterpillar*.

---

### Type B — Technical Documentation post

Triggered by: building something, running an experiment, using a tool in an unexpected way.

**Structure:**
1. **Context/motivation** — why this, why now, personal angle (not "today I will explain X")
2. **What was built/explored** — objective description, with image or video
3. **Making / Recipe** — numbered steps with code blocks; short and replicable
4. **Troubleshooting** — honest friction points ("I ran into…", "After some investigation…")
5. **Conclusion or reflection** — what changed in your thinking, what tool taught you
6. **Links** — GitHub repo, references, course/resource recommendation

**Tone:** pragmatic and friendly. "Here's what actually happened."
**Length:** 500–1200 words. Code blocks count separately.

**Examples:** *PPT made in Jupyter Notebook*, *Choosing Python for Creative Coding*, *Halloween in Motion*, *Using a 15-Year-Old Camera (Hockney Collage)*.

---

### Type C — Hybrid post (most evolved format)

Triggered by: an experiment at the intersection of narrative, technical build, and design reflection — typically a finished prototype or project.

**Structure:**
1. **Proof-first** — video or image before any text
2. **Context note** (optional) — a one-liner editorial frame ("School of Tomorrow's AI note:", or a project/series label)
3. **TL;DR** — bullets: what it is / how it works / why it matters / key constraint
4. **Repo / artifact link** — early, for the builder-reader
5. **Hook** — the narrative trigger: coincidence, curiosity, question
6. **What I built** — objective spec
7. **Making (Recipe-style, but short)** — steps + troubleshooting
8. **Studio notes** — design rationale, decisions, trade-offs (optional but powerful)
9. **Results** — what exists, with links
10. **Reflections** — 2–4 lines thesis
11. **Next possibilities** — bulleted roadmap of what comes next

**Tone:** layered. The reader can stop at any section. Each section serves a different reader type.
**Length:** 700–1500 words.

**Examples:** *Mixed Reality in the Browser: WebXR Particles on Meta Quest 3*.

---

### Type D — Short observation / diary post

Triggered by: a walk, a product, a surprise, a memory, an encounter. No thesis needed.

**Structure:**
1. Brief scene
2. What struck you
3. Why it matters (even a single line)
4. One photo, link, or embed

**Tone:** warm, quick, almost like an Instagram caption grown into a paragraph.
**Length:** 80–300 words.

**Examples:** *A Praline Made of Cheese*, *Programmed Deaths*, *Doing a Blog*.

---

## 6. Front matter template

```yaml
---
layout: post
title: [Main Title - Optional Subtitle After Dash]
id: YYYY-MM-DD-slug.md
categories:
  - [primary category]
  - [secondary category]
image: [URL to hero image — Flickr, cloud, or external]
share: "true"
comments: "true"
filename: Blog/_posts/YYYY-MM-DD-slug.md
tags:
  - [tag1]
  - [tag2]
date: YYYY-MM-DD
author: lina
---
```

---

## 7. Categories (established)

Use existing categories when they fit. Create a new one only when nothing fits.

| Category | When to use |
|---|---|
| `speculation` | Reflective, essay-style, conceptual exploration |
| `documentation` | Build logs, tutorials, technical records |
| `digital tools` | Posts about a specific software/library/environment |
| `creative process` | Meta-posts about how you work, decide, or iterate |
| `AI projects` / `AI project` | Machine learning experiments, gen AI, model work |
| `school-of-tomorrows-ai` | Posts under the School of Tomorrow's AI series |
| `kinetic` | Physical computing, motors, movement |
| `prototype` | Early-stage builds and physical experiments |
| `image` | Photography, computer vision, visual processing |
| `science` | Guest posts or crossovers with biology, physics, etc. |
| `biothings` | Bio-art, biodesign, materials |
| `travel` | Visit-triggered observations (museums, labs, spaces) |

---

## 8. Tags

Tags are **specific and searchable**. Use kebab-case where possible. Examples from existing posts:

`threejs` `webxr` `mixed-reality` `meta-quest-3` `creative-technology` `machine-learning` `python` `opencv` `motor` `esp8266` `ai` `photos` `tutorial` `VR` `mathematics` `methodology` `bio-things` `food` `futurium` `Berlin`

---

## 9. Media conventions

- **Hero image** in front matter (Flickr, cloud, or external URL).
- **Video** — embed `<video>` with `controls` for self-hosted; `<iframe>` for YouTube.
- **Photos** — prefer Flickr embeds for albums; `<img>` for single images.
- **Code** — fenced code blocks with language identifier (` ```python `, ` ```bash `, ` ```javascript `).
- **Quotes** — use `>[!quote]` for blockquotes from referenced sources.
- **Highlights** — use `<mark style="background: #FFB8EBA6;">` for central research questions.
- **GitHub** — always link the repo early (after TL;DR in hybrid posts; at the end in tutorial posts).

---

## 10. Title conventions

Titles are **descriptive and search-friendly**, often with a personal angle or rhetorical hook. Patterns:

- `[Thing I used] - [Unexpected use or result]` → *PPT made in Jupyter Notebook - A Tool for...*
- `[Adjective journey] from [X] to [Y]` → *My Journey from Skepticism to Immersion in Virtual Reality*
- `[Verb]-ing [subject]: [subtitle]` → *Co-Creating with Machines: An Exploration of Generative AI*
- `[Descriptive noun phrase] and the [tension/limitation]` → *The Robotic Caterpillar and the Limitations of Artificial Imagination*
- `[Question or provocative claim]` → *What Challenges Lie Ahead in 3D Food Printing?*
- `[Action + context]` → *Choosing Python for Creative Coding - When and Why to Expand Your Toolkit*

Avoid vague or generic titles ("My Thoughts on AI"). Be specific enough to be interesting to someone who has never heard of you.

---

## 11. Recurring thematic DNA

These are the lenses through which technology and making are framed on this blog. They don't all appear in every post, but when one fits, lean into it.

- **Radical imagination** — imagining futures that don't yet exist
- **Error as method** — friction, failure, iteration as generative
- **Documentation as storytelling** — the record is as important as the result
- **Tool displacement** — what happens when a tool is used for something it wasn't designed for
- **Embodiment and presence** — why physical, spatial, or gestural interaction matters
- **Collective intelligence vs. artificial intelligence** — what machines can and can't replicate
- **Cross-disciplinary reading** — biology, choreography, art history as lenses on technology
- **Repertoire** — experience and references as creative capital
- **Restriction as creativity** — limits clarify the boundary between the familiar and unknown

---

## 12. What to avoid

- Starting a post with "In today's fast-paced world…" or any generic opener
- Tutorial tone without a personal angle ("Today I will explain X")
- Claiming certainty about what AI "can" or "cannot" do without showing the experiment
- Lists of tools without narrative context
- Ending without a question, challenge, or next step
- Posting without a hero image
- Forgetting to link to collaborators, references, and source materials

---

## 13. Prompt template (for AI-assisted drafting)

Use this as a system prompt when asking an AI to help draft a post:

```
You are helping Lina Lopes write a post for her blog LILO.THINK (blog.linalopes.info).

The blog is a public research diary of applied speculative documentation.
Lina is an artist-researcher-educator based in Switzerland, working at the intersection of creative coding, data visualization, machine learning, and interactive installations.

Her writing voice is: first-person, thinking-out-loud, intellectually curious, honest about failure, and always grounded in a personal trigger (a scene, encounter, or experiment).

The post should follow [Type A / B / C / D — choose one] structure.

The subject of this post is: [DESCRIBE THE EXPERIMENT, ENCOUNTER, OR IDEA].

Key ingredients for this post:
- Trigger/spark: [what happened that made you write this]
- Central question or thesis: [what you want to think through]
- References or analogies to weave in: [people, tools, artworks, concepts]
- Media available: [images, video, code, GitHub repo]
- Intended reader: [builder / fellow thinker / student / general curious]

Do not start with "In today's world." Start with a scene, memory, or direct question.
End with an open invitation or next step.
Use bold text for the central thesis moment.
Include a TL;DR only if this is a Type C post.
```

---

*Last updated: February 2026*
*Maintained by: Lina Lopes — lilothink.science@gmail.com
