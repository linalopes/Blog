---
layout: post
title: "From GIF to Lottie: What I Learned Chasing Transparent Animated Text"
id: 2026-02-17-kinetic-type-lottie-workflow
categories:
  - documentation
  - digital tools
  - school-of-tomorrows-ai
image: PLACEHOLDER.png
share: "true"
comments: "true"
filename: Blog/_posts/2026-02-17-kinetic-type-lottie-workflow.md
tags:
  - kinetic-typography
  - gif
  - lottie
  - jitter
  - lottiefiles
  - after-effects
  - bodymovin
  - canva
  - p5js
  - claude
  - gemini
  - animated-svg
  - creative-coding
date: 2026-02-17
author: lina
---

> **School of Tomorrow's AI note:** Can typography be an infographic format? Can it be lightweight, transparent, and reusable — like code?

> **TL;DR**
> 
> - **The problem:** I wanted animated text overlays — lightweight, with alpha — for instructional content. GIFs are the obvious answer, but the format is surprisingly broken for this use case.
> - **The discovery:** Lottie JSON is vector animation that lives outside video — small, transparent by default, and draggable straight into Canva.
> - **The core tension:** Every tool in this ecosystem splits on one question: is the text still _text_, or has it been converted to shapes?
> - **The experiment:** I gave Claude and Gemini the same prompt and got two very different animated SVGs — which revealed something useful about where AI-generated motion currently lives.

---

## Why I went looking for kinetic type

Text is one of my main materials. For social media, for the pieces I produce for _School of Tomorrow's AI_, for anything instructional — text is not decoration. It's the core layer.

I've noticed a consistent difference in how people receive information depending on the medium they're in:

In a **still image**, everything is already there. The viewer scans and extracts. The information is complete before they arrive.

In a **video**, people expect the next frame to bring something new. The information is always about to arrive.

<mark style="background: #FFB8EBA6;">And then there's the GIF — a strange hybrid: a closed photographic fragment that carries a tiny pulse of video. A loop. A micro-loop.</mark>

For instruction, that's a powerful format. A good micro-loop can reinforce reading rhythm, guide emphasis, and make a phrase stick in a way a static image rarely does. One loop can encode timing.

So I went looking for a production workflow that would let me make kinetic typography at speed — lightweight, reusable, and with the one thing I care about obsessively: **transparency**. Alpha. The ability to lay animated text over any background without destroying what's underneath.

---

## The GIF problem (it's worse than you think)

GIFs feel like the natural answer. They're everywhere, they loop, they have decades of cultural weight as a micro-format.

But technically, GIFs today are:

- **heavy** — a simple 5-second text animation easily hits 8–10MB
- **alpha-less** — the format technically supports binary transparency but not a proper alpha channel
- **inefficient** — converting to MP4 can bring that 10MB down to 3MB, but then you lose the loop behavior on most platforms

I tried. The GIF came in at 10MB. The MP4 conversion fixed the weight but broke the format logic for the use I had in mind. Neither felt like a real answer for web-native instructional overlays.

And the After Effects route — which _can_ produce beautiful transparent video animations — creates a different problem: the workflow is heavy. Exporting is slow. When the alpha is slightly off, re-exporting becomes painful. Iteration slows down exactly where I want to move fast.

So I started looking for something more web-native.

---

## Enter Lottie

Lottie is essentially vector animation stored as JSON.

It became popular through After Effects and an exporter called Bodymovin: instead of rendering a video file, you export a structured _description_ of the animation — shapes, transforms, keyframes. Then a player like `lottie-web` renders it in the browser.

What that means in practice:

- The file is **small** — a typical text animation is a few KB, not MB
- **Transparency is natural** — there's no background baked into the format; alpha just exists
- It's **remixable** — the JSON is readable and, in theory, editable
- And it moves beautifully in web-native contexts

The moment that reframed everything for me: I can **drag a Lottie JSON directly into Canva** and use it as a transparent overlay on top of any photo or video.

That's not a workaround. That's a workflow.

Lottie became a new asset class in my system — not just a file format, but a category of reusable motion ingredients that I can layer, version, and store like any other design token.

---

## The map: every path I tested

Below is the full diagram of what I explored — from creation tool to format to destination. The structure matters: the middle column (_Format_) is where the real decisions live, and the text layer tension (real text vs. shapes) is the bottleneck that runs through everything.

![[Kinetic Typography —Tools Map - Drawing 2026-02-23 11.51.36.excalidraw | 900]]

_Diagram: kinetic typography tools map — Input → Format → Text Layer → Destination_

What the map reveals:

**After Effects + Bodymovin** is still the gold standard for Lottie output, but it assumes you're already living in that ecosystem. For fast iteration, it's overkill.

**Jitter** is the tool that clicked fastest for me — web-native, exports Lottie cleanly, and the workflow from sketch to usable asset is genuinely fast. The limitation is that it's a _creation_ tool, not a _round-trip_ tool. If I want to open an existing JSON, edit the text, and re-export, Jitter doesn't solve that.

<iframe
  src="https://media.linalopes.info/lottie-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fjitter-15years.json&loop=1&autoplay=1&controls=0&w=512&h=512&bg=transparent"
  width="520"
  height="520"
  frameborder="0"
  allow="autoplay; fullscreen"
></iframe>

<iframe
  src="https://media.linalopes.info/lottie-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fjitter-donuts.json&loop=1&autoplay=1&controls=0&w=512&h=512&bg=transparent"
  width="520"
  height="520"
  frameborder="0"
  allow="autoplay; fullscreen"
></iframe>

**SVGator** promised round-trip editing (import → edit → export), which is exactly what I need for a template-based system. In practice, importing a Lottie I had created elsewhere caused visual misalignment — elements shifted, the animation broke. Not a trustworthy base for iterating on templates.

<iframe
  src="https://media.linalopes.info/lottie-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fsvgator-test-typo.json&loop=1&autoplay=1&controls=0&w=512&h=512&bg=transparent"
  width="520"
  height="520"
  frameborder="0"
  allow="autoplay; fullscreen"
></iframe>


**LottieFiles** is excellent for previewing and light editing, but the free tier becomes limiting quickly when you're uploading and iterating a lot. The subscription math didn't work for my current usage.

Two **open-source tools** entered my radar as potential escapes from platform limits:

- [lottie-editor](https://github.com/chrisgreen1993/lottie-editor) does identify layers — but without names. I could see that a layer existed, potentially delete it, but I had no idea _which_ layer I was deleting. Useful for inspection, not for editing with intent.

<img 
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/gwxj5meXYRjqdED?file=/2026-02-17-kinetic-type-lottie-workflow/Screenshot%202026-02-22%20at%2016.13.13.png&x=2400&y=2400&a=true" 
  alt="Screenshot" 
  style="width: 100%; border-radius: 4px; margin: 2rem 0;" 
/>

- [lottie-tools](https://github.com/marciogranzotto/lottie-tools) was more ambitious on paper. In practice, it produced more bugs than insights — and I didn't push it far enough to write it off completely, but it didn't earn a place in the workflow.

The pattern held: import and inspect is one thing. Edit text the way I need is another.

**Generative AI (Claude and Gemini)** — this is where it gets interesting. More below.

---

## The core tension: is the text still text?

This is the most important technical point in the entire ecosystem, and it's worth slowing down for.

In any Lottie-compatible workflow, text goes one of two ways:

**Real text layers** store an actual string inside the JSON. In theory, you can swap the copy without rebuilding the animation. The text remains _text_.

**Text as shapes** means the tool has converted your type into vector outlines — paths, not characters. This is common because it solves a compatibility problem (the player doesn't need the font installed), but it creates a different problem: there's no longer a string to edit. The text has become a drawing.

> If your workflow converts text to shapes, editing the content of that text means rebuilding the animation.

For a one-off poster headline, that's fine. For a system where I want to swap phrases, update translations, or batch-generate variations — it's a dealbreaker.

So my first question for any tool is now: **what happens to my text?**

---

## The experiment: same prompt, two AIs

I gave both Claude and Gemini the same prompt:

> _Create an animated SVG for motion graphics of the weather in Switzerland during the year_

The results were functionally similar — both produced a circular year-dial with seasonal transitions and animated weather effects — but the _approach_ was revealing.

**Gemini (AI Studio)** generated a self-contained `.svg` file: a single file with all the animation logic embedded via SMIL (`<animate>` tags directly in the SVG markup). The result is pure SVG — no JavaScript, no external dependencies. It works anywhere an SVG renders. The seasonal transitions are handled by opacity keyframes, and the dial pointer rotates on a 24-second loop. It's compact and self-sufficient.

<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><clipPath id="circleMask"><circle cx="400" cy="280" r="180"/></clipPath><linearGradient id="springMainLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="30%" stop-color="#ffffff"/><stop offset="50%" stop-color="#d8e2dc"/><stop offset="100%" stop-color="#b5c99a"/></linearGradient><linearGradient id="springMainDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="30%" stop-color="#e2e8f0"/><stop offset="50%" stop-color="#a4c3b2"/><stop offset="100%" stop-color="#87986a"/></linearGradient><linearGradient id="summerMainLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="10%" stop-color="#ffffff"/><stop offset="30%" stop-color="#74c69d"/><stop offset="100%" stop-color="#40916c"/></linearGradient><linearGradient id="summerMainDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="10%" stop-color="#e2e8f0"/><stop offset="30%" stop-color="#52b788"/><stop offset="100%" stop-color="#2d6a4f"/></linearGradient><linearGradient id="autumnMainLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff"/><stop offset="15%" stop-color="#ffffff"/><stop offset="35%" stop-color="#f4a261"/><stop offset="100%" stop-color="#e76f51"/></linearGradient><linearGradient id="autumnMainDark" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e2e8f0"/><stop offset="15%" stop-color="#e2e8f0"/><stop offset="35%" stop-color="#e76f51"/><stop offset="100%" stop-color="#d94a38"/></linearGradient><filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs><rect width="100%" height="100%" fill="#0f111a"/><circle cx="400" cy="280" r="230" fill="none" stroke="#1d2030" stroke-width="1"/><circle cx="400" cy="280" r="195" fill="none" stroke="#25283d" stroke-width="1" stroke-dasharray="4 8"/><circle cx="400" cy="280" r="182" fill="none" stroke="#2a2e45" stroke-width="6"/><g font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="700" fill="#60647a" text-anchor="middle" letter-spacing="2"><text x="400" y="55">JAN</text><text x="515" y="90">FEB</text><text x="595" y="170">MAR</text><text x="625" y="285">APR</text><text x="595" y="400">MAY</text><text x="515" y="480">JUN</text><text x="400" y="510">JUL</text><text x="285" y="480">AUG</text><text x="205" y="400">SEP</text><text x="175" y="285">OCT</text><text x="205" y="170">NOV</text><text x="285" y="90">DEC</text></g><g font-family="system-ui,-apple-system,sans-serif" font-size="12" font-weight="600" text-anchor="middle" letter-spacing="1"><text x="400" y="33" fill="#a2d2ff">-1°C</text><text x="525" y="73" fill="#a2d2ff">1°C</text><text x="275" y="73" fill="#a2d2ff">0°C</text><text x="612" y="160" fill="#b5c99a">5°C</text><text x="645" y="285" fill="#b5c99a">9°C</text><text x="612" y="410" fill="#b5c99a">14°C</text><text x="525" y="497" fill="#ffb703">17°C</text><text x="400" y="533" fill="#ffb703">19°C</text><text x="275" y="497" fill="#ffb703">18°C</text><text x="188" y="410" fill="#f4a261">14°C</text><text x="155" y="285" fill="#f4a261">10°C</text><text x="188" y="160" fill="#f4a261">4°C</text></g><text x="400" y="565" font-family="system-ui,-apple-system,sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="10">SWITZERLAND</text><text x="400" y="585" font-family="system-ui,-apple-system,sans-serif" font-size="11" font-weight="600" fill="#E94560" text-anchor="middle" letter-spacing="5">AVERAGE TEMPERATURE</text><g clip-path="url(#circleMask)"><g><animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.125;0.208;0.875;0.958;1" dur="24s" repeatCount="indefinite"/><rect x="200" y="80" width="400" height="400" fill="#889eb3"/><circle cx="300" cy="180" r="30" fill="#f8f9fa" opacity="0.9" filter="url(#glow)"><animate attributeName="cy" values="180;175;180" dur="6s" repeatCount="indefinite"/></circle><polygon points="200,400 280,200 280,400" fill="#ffffff"/><polygon points="280,200 330,250 380,400 280,400" fill="#e2e8f0"/><polygon points="420,400 500,250 500,400" fill="#ffffff"/><polygon points="500,250 550,310 650,400 500,400" fill="#e2e8f0"/><polygon points="250,400 360,250 400,120 400,400" fill="#ffffff"/><polygon points="400,120 430,180 440,260 550,400 400,400" fill="#e2e8f0"/><polygon points="150,460 150,390 280,370 420,390 550,365 650,390 650,460" fill="#d8e2dc"/><g fill="#ffffff" opacity="0.9"><circle cx="250" r="3"><animate attributeName="cy" from="80" to="480" dur="3s" repeatCount="indefinite"/></circle><circle cx="300" r="4"><animate attributeName="cy" from="80" to="480" dur="4.5s" repeatCount="indefinite"/></circle><circle cx="350" r="2.5"><animate attributeName="cy" from="80" to="480" dur="3.5s" repeatCount="indefinite"/></circle><circle cx="450" r="3.5"><animate attributeName="cy" from="80" to="480" dur="4s" repeatCount="indefinite"/></circle><circle cx="500" r="2"><animate attributeName="cy" from="80" to="480" dur="5s" repeatCount="indefinite"/></circle><circle cx="550" r="4"><animate attributeName="cy" from="80" to="480" dur="3.8s" repeatCount="indefinite"/></circle><circle cx="380" r="3"><animate attributeName="cy" from="150" to="480" dur="2.8s" repeatCount="indefinite"/></circle></g></g><g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.125;0.208;0.375;0.458;1" dur="24s" repeatCount="indefinite"/><rect x="200" y="80" width="400" height="400" fill="#a4c3d2"/><circle cx="450" cy="150" r="35" fill="#fff3b0" filter="url(#glow)"><animate attributeName="cy" values="150;145;150" dur="5s" repeatCount="indefinite"/></circle><polygon points="200,400 280,200 280,400" fill="#cce3de"/><polygon points="280,200 330,250 380,400 280,400" fill="#a4c3b2"/><polygon points="420,400 500,250 500,400" fill="#b5c99a"/><polygon points="500,250 550,310 650,400 500,400" fill="#87986a"/><polygon points="250,400 360,250 400,120 400,400" fill="url(#springMainLight)"/><polygon points="400,120 430,180 440,260 550,400 400,400" fill="url(#springMainDark)"/><polygon points="150,460 150,390 280,370 420,390 550,365 650,390 650,460" fill="#718355"/><g opacity="0.5" stroke="#ffffff" stroke-width="1.5"><g><animateTransform attributeName="transform" type="translate" from="50 -300" to="-50 500" dur="1.2s" repeatCount="indefinite"/><line x1="250" y1="100" x2="240" y2="130"/><line x1="320" y1="180" x2="310" y2="210"/><line x1="400" y1="50" x2="390" y2="80"/><line x1="480" y1="200" x2="470" y2="230"/><line x1="550" y1="120" x2="540" y2="150"/><line x1="280" y1="300" x2="270" y2="330"/><line x1="380" y1="350" x2="370" y2="380"/><line x1="450" y1="280" x2="440" y2="310"/></g><g><animateTransform attributeName="transform" type="translate" from="50 -700" to="-50 100" dur="1.2s" repeatCount="indefinite"/><line x1="250" y1="100" x2="240" y2="130"/><line x1="320" y1="180" x2="310" y2="210"/><line x1="400" y1="50" x2="390" y2="80"/><line x1="480" y1="200" x2="470" y2="230"/><line x1="550" y1="120" x2="540" y2="150"/><line x1="280" y1="300" x2="270" y2="330"/><line x1="380" y1="350" x2="370" y2="380"/><line x1="450" y1="280" x2="440" y2="310"/></g></g></g><g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.375;0.458;0.625;0.708;1" dur="24s" repeatCount="indefinite"/><rect x="200" y="80" width="400" height="400" fill="#219ebc"/><g transform="translate(400,160)"><circle r="40" fill="#ffb703" filter="url(#glow)"/><g stroke="#ffb703" stroke-width="4" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="15s" repeatCount="indefinite"/><line x1="0" y1="-50" x2="0" y2="-62"/><line x1="0" y1="50" x2="0" y2="62"/><line x1="-50" y1="0" x2="-62" y2="0"/><line x1="50" y1="0" x2="62" y2="0"/><line x1="-35" y1="-35" x2="-44" y2="-44"/><line x1="35" y1="35" x2="44" y2="44"/><line x1="-35" y1="35" x2="-44" y2="44"/><line x1="35" y1="-35" x2="44" y2="-44"/></g></g><polygon points="200,400 280,200 280,400" fill="#95d5b2"/><polygon points="280,200 330,250 380,400 280,400" fill="#74c69d"/><polygon points="420,400 500,250 500,400" fill="#74c69d"/><polygon points="500,250 550,310 650,400 500,400" fill="#52b788"/><polygon points="250,400 360,250 400,120 400,400" fill="url(#summerMainLight)"/><polygon points="400,120 430,180 440,260 550,400 400,400" fill="url(#summerMainDark)"/><polygon points="150,460 150,390 280,370 420,390 550,365 650,390 650,460" fill="#2d6a4f"/><g fill="#ffffff" opacity="0.85"><g><animateTransform attributeName="transform" type="translate" from="-200 0" to="600 0" dur="18s" repeatCount="indefinite"/><path d="M 230,160 Q 230,145 245,145 Q 255,130 270,140 Q 285,135 290,150 Q 305,150 305,165 Q 305,175 290,175 L 230,175 Q 215,175 215,160 Z"/></g><g><animateTransform attributeName="transform" type="translate" from="-400 0" to="400 0" dur="25s" repeatCount="indefinite"/><g transform="translate(400,90) scale(0.7)"><path d="M 230,160 Q 230,145 245,145 Q 255,130 270,140 Q 285,135 290,150 Q 305,150 305,165 Q 305,175 290,175 L 230,175 Q 215,175 215,160 Z"/></g></g></g></g><g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.625;0.708;0.875;0.958;1" dur="24s" repeatCount="indefinite"/><rect x="200" y="80" width="400" height="400" fill="#e29578"/><circle cx="320" cy="200" r="38" fill="#ffddd2" filter="url(#glow)"><animate attributeName="cy" values="200;195;200" dur="7s" repeatCount="indefinite"/></circle><polygon points="200,400 280,200 280,400" fill="#e9c46a"/><polygon points="280,200 330,250 380,400 280,400" fill="#f4a261"/><polygon points="420,400 500,250 500,400" fill="#f4a261"/><polygon points="500,250 550,310 650,400 500,400" fill="#e76f51"/><polygon points="250,400 360,250 400,120 400,400" fill="url(#autumnMainLight)"/><polygon points="400,120 430,180 440,260 550,400 400,400" fill="url(#autumnMainDark)"/><polygon points="150,460 150,390 280,370 420,390 550,365 650,390 650,460" fill="#bc4749"/><path d="M 550 180 Q 400 120 300 220 T 200 200" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.3" stroke-dasharray="100 200"><animate attributeName="stroke-dashoffset" from="300" to="-300" dur="3s" repeatCount="indefinite"/></path><path d="M 450 280 Q 350 300 300 250 T 220 270" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.2" stroke-dasharray="80 250"><animate attributeName="stroke-dashoffset" from="330" to="-330" dur="4s" repeatCount="indefinite"/></path><g><animateTransform attributeName="transform" type="translate" from="600 0" to="-400 100" dur="5s" repeatCount="indefinite"/><ellipse cx="400" cy="200" rx="6" ry="3" fill="#e9c46a"><animateTransform attributeName="transform" type="rotate" from="0 400 200" to="360 400 200" dur="1s" repeatCount="indefinite"/></ellipse><ellipse cx="450" cy="250" rx="5" ry="2" fill="#e76f51"><animateTransform attributeName="transform" type="rotate" from="0 450 250" to="-360 450 250" dur="0.8s" repeatCount="indefinite"/></ellipse><ellipse cx="500" cy="150" rx="7" ry="3" fill="#d94a38"><animateTransform attributeName="transform" type="rotate" from="0 500 150" to="360 500 150" dur="1.2s" repeatCount="indefinite"/></ellipse></g><g><animateTransform attributeName="transform" type="translate" from="600 -100" to="-400 50" dur="6s" repeatCount="indefinite"/><ellipse cx="300" cy="300" rx="6" ry="3" fill="#f4a261"><animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="1.1s" repeatCount="indefinite"/></ellipse><ellipse cx="360" cy="220" rx="5" ry="2" fill="#e9c46a"><animateTransform attributeName="transform" type="rotate" from="0 360 220" to="-360 360 220" dur="0.9s" repeatCount="indefinite"/></ellipse></g></g></g><g><animateTransform attributeName="transform" type="rotate" from="0 400 280" to="360 400 280" dur="24s" repeatCount="indefinite"/><line x1="400" y1="280" x2="400" y2="75" stroke="#E94560" stroke-width="2" opacity="0.9"/><circle cx="400" cy="75" r="5" fill="#E94560"/><circle cx="400" cy="75" r="12" fill="#E94560" opacity="0.3"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.5s" repeatCount="indefinite"/></circle></g><circle cx="400" cy="280" r="16" fill="#0f111a" stroke="#25283d" stroke-width="3"/><circle cx="400" cy="280" r="11" fill="#E94560"/><path d="M 397 274 h 6 v 4 h 4 v 6 h -4 v 4 h -6 v -4 h -4 v -6 h 4 z" fill="#ffffff"/></svg></div>


**Claude** generated an `.html` file: an SVG embedded inside an HTML document, with CSS animations layered on top. More typographic control (custom Google Fonts imported), more complex layout logic, interactive hover states on season cards. It needs a browser context to run correctly — it's not a portable asset in the same way.



Neither output is better. They're optimized for different destinations:

|Gemini (SVG)|Claude (HTML)|
|---|---|---|
|File type|`.svg`|`.html`|
|Dependencies|None|Browser + Google Fonts|
|Portability|Embeds anywhere|Needs browser context|
|Typography|System fonts|Custom fonts via CSS|
|Animation engine|SMIL (`<animate>`)|CSS keyframes|
|Use in Canva|Potentially|No|
|Use on web|Yes|Yes|

What this experiment actually showed me: **AI-generated animated SVG is already a viable path** — not as a replacement for a handcrafted Lottie workflow, but as a fast way to generate one-off animated infographics that live on the web. The text in both outputs is real text, not converted shapes. That matters.

---

## Where the workflow lands (for now)

My current practical path:

**For fast social overlays:** Create in Jitter → export Lottie JSON → drag into Canva → position over photo or video. Keep the JSON in a named folder in my asset library. Version it like a file.

**For web-embedded infographics:** Generate via AI (Claude or Gemini depending on destination) → embed directly in post or page. Use this for one-off illustrative pieces, not for a repeatable template system.

**For the future:** Build a p5.js generator that produces animated SVGs or Lottie JSON procedurally — using my brand tokens (circles, pink/turquoise/deep purple, Space Grotesk) as the visual vocabulary. The goal is a small factory: give it text, get back a motion overlay. Teachable, versionable, ours.

---

## What I think I'm actually building

I'm not chasing a file format.

I'm designing a **micro-language for communicating ideas** — one where text doesn't just sit on a slide but _arrives_, _emphasizes_, _breathes_.

The format and workflow only matter because they determine whether I can keep doing this daily — lightly, without production debt, in between the other things.

The GIF was the first language for micro-loops. It worked, mostly. Lottie + animated SVG might be the next one. The tools aren't fully there yet — especially around editable text in round-trip workflows — but the direction is clear.

---

## Next possibilities

- Define 3–5 canonical micro-loop templates: typewriter reveal, underline sweep, bounce emphasis, blink cursor, masked slide
- Build the first version of the p5.js generator (single file, brand tokens as input, Lottie or SVG as output)
- Test the SVGator import path again with a simpler Lottie structure — maybe the misalignment is fixable
- Document the Lottie asset naming convention for my PKM
- Make the generator teachable: a 30–60 minute flow for a _School of Tomorrow's AI_ student to produce their first motion overlay

---

## Resources

- [Lottie — Airbnb Design](https://airbnb.design/lottie/)
- [lottie-web — renderer/player](https://github.com/airbnb/lottie-web)
- [Jitter — web-native motion tool](https://jitter.video/)
- [LottieFiles — preview and light editing](https://lottiefiles.com/)
- [SVGator — SVG animation editor](https://www.svgator.com/)
- [lottie-editor (open source)](https://github.com/chrisgreen1993/lottie-editor)
- [lottie-tools (open source)](https://github.com/marciogranzotto/lottie-tools)