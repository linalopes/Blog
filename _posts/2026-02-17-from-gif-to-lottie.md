---
layout: post
title: "From GIF to Lottie: What I Learned Chasing Transparent Animated Text"
id: 2026-02-17-from-gif-to-lottie
categories:
  - documentation
  - digital tools
  - school of tomorrow's ai
image: https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/gwxj5meXYRjqdED?file=/2026-02-17-kinetic-type-lottie-workflow/Screenshot%202026-02-22%20at%2016.10.39.png&x=2400&y=2400&a=true
share: "true"
comments: "true"
filename: Blog/_posts/2026-02-17-from-gif-to-lottie.md
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
  - school-of-tomorrows-ai
date: 2026-02-17
author: lina
excalidraw-source: "[[From GIF to Lottie —Tools Map - Drawing 2026-02-23 11.51.36.excalidraw]]"
---

> **School of Tomorrow's AI note:** Can typography be an infographic format? Can it be lightweight, transparent, and reusable — like code?

> **TL;DR**
> 
> - **The problem:** I wanted animated text overlays — lightweight, with alpha — for instructional content. GIFs are the obvious answer, but the format is surprisingly broken for this use case.
> - **The discovery:** Lottie JSON is vector animation that lives outside video — small, transparent by default, and draggable straight into Canva.
> - **The core tension:** Every tool in this ecosystem splits on one question: is the text still _text_, or has it been converted to shapes?
> - **The experiment+:** I gave Claude and Gemini the same prompt and got two very different animated SVGs — which revealed something useful about where AI-generated motion currently lives.

---

## Why I went looking for kinetic type

I've been thinking about the GIF as a language. Not as a meme format — as a _reading format_. There's something precise about a loop: it has the closure of a photograph and the time of a video. For instructional content, that combination is surprisingly powerful. The only problem is that GIFs, technically, are kind of a mess. That mismatch — between what the format _means_ and what it _does_ — is where this post starts.

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

<iframe src="https://link.excalidraw.com/readonly/N9o2oZj6dIklLS3NY6S1" width="100%" height="100%" style="border: none;"></iframe>
_Diagram (in excalidraw): kinetic typography tools map — Input → Format → Text Layer → Destination_


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
  src="https://media.linalopes.info/lottie-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fjitter-donuts2.json&loop=1&autoplay=1&controls=0&w=512&h=512&bg=transparent"
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

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/gwxj5meXYRjqdED?file=/2026-02-17-kinetic-type-lottie-workflow/Screenshot%202026-02-22%20at%2016.10.39.png&x=2400&y=2400&a=true"
  alt="Screenshot 2026-02-22 at 16.10.39"
  style="width: 100%; border-radius: 4px; margin: 2rem 0;"
/>




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

<iframe
  src="https://media.linalopes.info/html-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fswiss-weather-year-gemini.svg"
  style="width: 100%; height: 600px; border: none;"
  frameborder="0"
></iframe>



**Claude** generated an `.html` file: an SVG embedded inside an HTML document, with CSS animations layered on top. More typographic control (custom Google Fonts imported), more complex layout logic, interactive hover states on season cards. It needs a browser context to run correctly — it's not a portable asset in the same way.

<iframe
  src="https://media.linalopes.info/html-player.html?src=https%3A%2F%2Fcloud.linalopes.info%2Fpublic.php%2Fdav%2Ffiles%2Fgwxj5meXYRjqdED%2F2026-02-17-kinetic-type-lottie-workflow%2Fswiss-weather-year-gemini-claude.html"
  style="width: 100%; height: 600px; border: none;"
  frameborder="0"
></iframe>

Neither output is better. They're optimized for different destinations:

| | Gemini (SVG)     | Claude (HTML)      |
| ---------------- | ------------------ | ---------------------- |
| File type        | `.svg`             | `.html`                |
| Dependencies     | None               | Browser + Google Fonts |
| Portability      | Embeds anywhere    | Needs browser context  |
| Typography       | System fonts       | Custom fonts via CSS   |
| Animation engine | SMIL (`<animate>`) | CSS keyframes          |
| Use in Canva     | Potentially        | No                     |
| Use on web       | Yes                | Yes                    |


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