---
layout: post
title: The Clock That Survived — Rebuilding a 1971 Archive as a Web Narrative
id: 2026-03-05-the-clock-that-survived-rebuilding-a-1971-archive-as-a-web-narrative.md
categories:
image: https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/enxPPKCYmaPzRgZ?file=cover.webp&x=2400&y=2400&a=true
share: "true"
comments: "true"
filename: creativity-in-vitro/_posts/2026-03-05-the-clock-that-survived-rebuilding-a-1971-archive-as-a-web-narrative.md
tags:
date: 2026-03-05
author: lina
---


<video controls playsinline preload="metadata" style="width: 35%; border-radius: 4px; margin: 2rem 0;">
  <source src="https://cloud.linalopes.info/public.php/dav/files/enxPPKCYmaPzRgZ/IMG_3695.mp4" type="video/mp4">
</video>


> **School of Tomorrow's AI note:** This is what happens when you treat historical research as design material — and when a 3D-printed detonator becomes the most honest interface you've ever built.

> **TL;DR** — I had a clock, a demolition, a restaurant conversation the night before everything exploded, and a 41-year silence in the record; I wanted to know if the distance between what is documented, what can only be inferred, and what the archive simply refuses to say could become a navigable aesthetic experience — and not just another block of text.

[→ See the full project: The Clock That Survived](https://linalopes.github.io/barracks-clock/)

---

## The spark

I lived in Lucerne for three years. During that time, I visited the Zytturm — the medieval time tower embedded in the Musegg Wall — at least three times. It's a strange place: a tower built in 1403 that houses other towers' clocks. Nine tower clocks, removed from their original buildings across the canton, now coexist inside this stone room. Some of those buildings burned. Some were demolished. The clocks survived.

I always found it quietly unsettling — all that kept time, displaced from what it was keeping time _for_.

Then, in a course called **Time Machines**, I was asked to choose a museum object and build a world around it. I went back to the Zytturm — this time in research mode. And I found the story of the **Old Barracks Clock of 1862**.

The infantry barracks at Kasernenplatz housed exactly 1,111 soldiers. The clock regulated their mornings for 73 years. In April 1971, the barracks was scheduled for demolition — to make way for a motorway interchange. The night before the blast, a man named Franz Germann was having after-work drinks at the restaurant Galliker on Kasernenplatz, within sight of the building. The blasting master was there too, at the same table. Germann asked about the fate of the clock. The Sprengmeister replied, almost off-hand: _he could dig it out of the rubble after the blasting the following day._

Germann recruited four hospital colleagues. They went to the building that night and dismantled the clock by hand — iron weights, pendulum, shafts — working into the night inside a structure wired with 90 kilograms of explosives.

The next morning, at exactly **08:30** — the hour the clock had commanded for 73 years, the reveille hour for 1,111 soldiers — the building was detonated. The demolition failed. The floors collapsed into the street instead of inward. Trolleybus masts bent like matchsticks. Two chestnut trees fell. No one was injured.

The clock was not there to mark the hour it had taught.

<mark style="background: #FFB8EBA6;">Real life is stranger than fiction. And that strangeness — the documented fact sitting next to the plausible inference sitting next to the total silence in the record — is exactly the material I wanted to work with. Not to invent a story, but to make the gap itself visible.</mark>



<iframe
  src="https://linalopes.github.io/barracks-clock/barracks-slideshow.html"
  style="width: 100&#37;; height: 600px; border: 0;"
  allowfullscreen
  loading="lazy"
></iframe>


---

## What I built

A triptych of three web artefacts, each addressing the same archive from a different angle:

1. **A scrollytelling** — a long-form web narrative with four epistemological layers coded as visual behaviour
2. **A slideshow** — six archival photographs with fluorescent timestamp overlays, each image a chapter
3. **A detonator** — a pixel-art browser game where you press space (or a 3D-printed physical button) to explode the archive photograph

Together they form a single question: **how do you present information that is partially documented, partially speculative, and partially just — open?**


## The triptych

### I. The scrollytelling — epistemology as visual behaviour

The scrollytelling has four types of content, each with a different visual register:

- **Confirmed** facts appear solid and anchored — heavy ink, clean left border. They just exist on the page.
- **Speculative** passages type themselves letter by letter, like inference arriving in real time. A warm pink glow bleeds from the left.
- **Open gaps** float in from above, centered, in monospace — dotted hot-pink borders above and below. They feel like a fault in the record.
- **Fiction slots** arrive from blur — large italic type, neon magenta lines top and bottom, particles drifting upward. They are not claims. They are prompts for the reader's imagination.

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/enxPPKCYmaPzRgZ?file=labels.webp&x=2400&y=2400&a=true"
  alt="labels.webp"
  style="width: 100%; border-radius: 4px; margin: 2rem 0;"
/>


The idea is that you don't need a legend to understand what you're reading. The _behaviour_ of the text tells you its epistemic status. Confirmed information feels stable. Speculation arrives. Gaps feel unresolved. Fiction glows.

This is the thing I keep coming back to in information design: **the medium can carry meaning that the words alone cannot.** A paragraph that types itself is already saying something different from a paragraph that was always there.

### II. The slideshow — archive meets fluorescent

Six archival photographs. Each one a timestamp in the story:

1. The barracks, soldiers assembled in the courtyard — a year counter runs from 1863 to 1970, accelerating
2. Restaurant Galliker — **14 April 1971 · Evening**
3. Aerial view of the rubble after demolition — **15 April 1971 · 08:31**
4. Street-level wreckage, workers in the dust — a day counter accelerates forward through April 1971
5. The motorway interchange today, same site — **March 2026**
6. The clock mechanism inside the Zytturm — **2012 → now**

The photographs are black and white, desaturated, sépia-toned. The timestamp overlays are fluorescent. The tension between the two is intentional: archival gravity on one side, contemporary design language on the other. The past doesn't look old here because it's distant. It looks old because the neon makes it look old by contrast.

### III. The detonator — the physical joke that isn't a joke

The third artefact is a pixel-art browser game. The barracks photograph sits on screen. Above it: an ACME-style cartoon detonator, rendered in 8-bit aesthetic. Press the spacebar — the plunger descends, the photo shatters into pixels, fluorescent sparks fly, the timestamp reads **08:30 · 15 APR 1971**.

But there's a physical version too.

I 3D-printed a detonator. Connected it to an ESP32 microcontroller. When you press the physical handle down, it triggers the browser explosion via serial connection. The photo of the 1971 barracks — a real archival photograph — disintegrates on screen.

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/enxPPKCYmaPzRgZ?file=IMG_0605.webp&x=2400&y=2400&a=true"
  alt="IMG_0605.webp"
  style="width: 60%; border-radius: 4px; margin: 2rem 0;"
/>



I'm not going to write a tutorial on the hardware here. What I want to note is what it _does_ to the experience: when the button is physical, the gesture changes weight. You hesitate slightly before pressing. You feel something that a keyboard shortcut doesn't produce.

The failed demolition of 1971 — the one where 90kg of explosives sent floors into the street instead of inward, where the engineers' calculations were simply wrong — becomes a small repeated ritual. Press. Explode. Reset. The archive survives. You do it again.

---

## Studio notes

**On the colour system.** Pink fluorescent over sépia archive was not a decoration decision. It came from the epistemological structure: confirmed facts are in heavy ink, the same gravity as a printed newspaper. But speculation and fiction need a different register — something that signals _contemporary_, _constructed_, _not from the archive_. Neon pink on aged paper is a collision of two aesthetic temporalities. That collision is the argument.

**On not over-explaining.** The reading key (confirmed / speculative / gap / fiction) appears as a small toggleable legend in the corner of the scrollytelling. It shows once, then gets out of the way. The goal was that the visual behaviour would be legible without the legend — the legend is a fallback, not a crutch.

**On hypermedia as a form for historical narrative.** A linear text with footnotes would have flattened these layers. A Wikipedia article would have disambiguated everything. What I wanted was the opposite: to preserve the uncertainty, to make the silence in the record _feel_ like silence, not like a missing paragraph. The web — with its scroll timing, its animation, its ability to make text arrive differently — can do that in ways that print cannot.

---

## Reflections

The history of the Barracks Clock is genuinely strange. A man in a restaurant asks a casual question. Four hospital workers dismantle a tower clock in the dark, inside a building set to explode the next morning. The demolition goes wrong. The clock disappears for 41 years. Then it reappears in a medieval tower in 2012, still working.

None of that needed to be invented. It just needed to be _shown_ — in layers, in the right order, with the right gaps left open.

**This is what I keep thinking about:** in an era saturated with generated text, the interesting question might not be how to produce more content, but how to design the _experience_ of encountering information — what arrives first, what hesitates, what glows, what the reader has to complete themselves.

The archive is not a block of text. It never was.

---

## What comes next

- **AI-generated images&videos for the gap slots** — the scrollytelling has placeholder image slots for moments where no photograph exists (the night of the dismantling, the interior of the building). Speculative reconstructions, clearly labelled.
- **Svelte + Scrollama version** — for finer control over scroll-driven animation, pinning, and scrubbing
- **The physical detonator as installation** — the ESP32 version running at a desk, printed object, screen behind it. The archive as something you destroy and reset.
- **Other clocks, other silences** — the Zytturm has nine clocks. Each one has a gap in its record. Each gap is a different shape.

---

## Resources

- [The Clock That Survived — live project](https://linalopes.github.io/barracks-clock/)
- [Repository in Github](https://github.com/linalopes/barracks-clock)
- [Turmuhren Luzern — Zytturm museum](https://www.turmuhrenluzern.ch)
- [Luzerner Zeitung, 2020 — reconstruction of the 1971 demolition](https://www.luzernerzeitung.ch/zentralschweiz/luzern/wie-im-krieg-1971-verwuestete-eine-missglueckte-sprengung-die-luzerner-kleinstadt-ld.1243942)
- [Time Machines — course context](https://smolny.org/2025/07/14/time-machines/)
- [MDN — IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
