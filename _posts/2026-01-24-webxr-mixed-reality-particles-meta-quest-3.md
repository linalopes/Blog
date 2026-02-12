---
layout: post
title: "Mixed Reality in the Browser: WebXR Particles on Meta Quest 3 (Three.js)"
id: 2026-01-24-webxr-mixed-reality-particles-meta-quest-3.md
categories:
  - documentation
  - school-of-tomorrows-ai
image: https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/greWjZg8XZWxoYr?file=Screenshot%202026-02-11%20at%2018.57.59.png&x=2400&y=2400&a=true
share: "true"
comments: "true"
tags:
  - threejs
  - webxr
  - mixed-reality
  - meta-quest-3
  - creative-technology
  - school-of-tomorrows-ai
date: 2026-01-24
author: lina
---



<video controls playsinline preload="metadata" width="35%">
  <source src="https://cloud.linalopes.info/public.php/dav/files/greWjZg8XZWxoYr/copy_E11B4C86-C55E-4B28-965C-8F1ABA836D35.mp4" type="video/mp4">
</video>

> **School of Tomorrow’s AI note:** This is one of those “wait… you can do that in a browser?” moments.  
> No Unity. No native app. Just WebXR + Three.js + a headset.


> **TL;DR**
> - **What it is:** a WebXR **mixed reality** particle system for **Meta Quest 3** (passthrough AR) with **hand tracking**.
> - **How it works:** open/close hand → expand/implode the cloud; pinch → switch modes.
> - **Why it matters:** it’s a *browser-first* XR workflow: fast iteration, easy sharing, low friction.
> - **Key constraint:** **WebXR requires HTTPS** — plain `http://` will fail on Quest.

[Repository in Github](https://github.com/linalopes/SchoolAI-MR-JS-Particles)


## The hook (what triggered this experiment)

I’ve always been drawn to particles — not as decoration, but as a way of thinking.  
I use bubbles all the time in data visualization, and I like how particle systems can stay abstract while still feeling alive, responsive, almost conversational.

One day, scrolling through Instagram, a [reel](https://www.instagram.com/reels/DRxTkFqDjX4/) stopped me. It showed **Gemini 3** generating an interactive 3D scene in **Three.js** from just a few lines of prompt. I tested the same prompt myself and was genuinely surprised: with very little instruction, a full interface emerged — running entirely in the browser (that experiment later became a subtle background piece on the **School of Tomorrow’s AI** blog).

At that point, the ingredients were already familiar to me:

- **Three.js**, a library I’ve been orbiting for years;
- **MediaPipe**, which I like for its embodied approach to interaction;
- everything running on the web, accessible, inspectable, remixable.


Then there was a coincidence.  
A **Meta Quest 3** headset was sitting in the atelier — borrowed for another project with **Stefanie Inhelder**. Normally, this would mean Unity, Meta Developer Tools, builds, deployments, and a fair amount of hoping things wouldn’t break.

But this time I wondered:  
_What if this stayed in the browser?_

I didn’t know, until that moment, that **WebXR** could be used directly inside the Meta Quest Browser for mixed reality. No Unity. No native app. Just a URL.

The real question became interaction.  
<mark style="background: #FFB8EBA6;">On the web, I was using MediaPipe for hand tracking. Inside the headset, hand tracking already exists at the system level. Could those two worlds meet? Could a particle-based interface migrate from a flat screen into mixed reality without losing its gestural logic?</mark>

> That curiosity — plus the fact that particles felt like the perfect medium to test spatial presence — is what triggered this experiment.


## What I built

A mixed reality WebXR experience that runs in **Meta Quest Browser** using an `immersive-ar` session (passthrough), with **WebXR Hand Input** controlling a particle system.

**Modes (because behavior is more interesting than “shapes”):**
- **Nebula** — swirl / galaxy-ish drift  
- **Swarm** — boid-ish cloud feel  
- **Burst** — controlled randomness  
- **Sculpt** — fingertip magnet (attractor)

![](https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/greWjZg8XZWxoYr?file=Screenshot%202026-02-11%20at%2018.57.59.png&x=2400&y=2400&a=true)
# Making (Recipe-style, but short)

## Prerequisites
- **Meta Quest 3** + **Meta Quest Browser**
- **Hand Tracking enabled** in Quest settings
- A computer running the local server (Node v14+)
- Quest + computer **on the same Wi‑Fi** (avoid guest networks)

## Step 1 — Run the HTTPS server
From the repo folder:

```bash
node server.js
```

Open on desktop:
- `https://localhost:8443/`

You’ll see a browser warning (self-signed cert). Proceed anyway for local dev.

## Step 2 — Open it on Quest
On Meta Quest Browser, open:

`https://<YOUR-LOCAL-IP>:8443/`

Then tap **Enter Mixed Reality**.

## Step 3 — Gestures
- **Open hand:** expand
- **Close hand:** implode
- **Pinch (index + thumb):** cycle mode
- **Sculpt mode:** point index finger to attract particles

## Troubleshooting (the real part)

### “WebXR not available in this browser”
This almost always means you’re not on a **secure context**.

- ✅ Use `https://...` (not `http://...`)
- ✅ Make sure your URL is correct (IP + port)
- ✅ Accept the certificate warning in Quest Browser

### Quest can’t reach your computer
- Confirm Quest + computer are on the **same network**
- Check firewall: allow incoming connections to **port 8443**
- If your router has a “client isolation” / guest Wi‑Fi mode, disable it for this test

### Hand tracking doesn’t work
- Turn on **Hand Tracking** in Quest settings
- Try better lighting
- Keep hands within comfortable tracking range (not too close to headset cameras)

# Studio notes

### Why I dropped camera-based hand tracking (MediaPipe)
In MR on Quest Browser, you don’t get raw RGB camera frames to run your own CV pipeline.  
So instead of “hand from image”, I went with “hand as spatial data”:
- joints,
- distances,
- smooth interpolation.

### Why particles > figurative objects
In passthrough MR, literal 3D objects can feel oddly “fake-real”.  
Particles don’t fight that battle. They embrace the medium:
- presence through motion,
- meaning through responsiveness,
- atmosphere through density.

### Why “single-file” matters (School of Tomorrow’s AI angle)
The point isn’t just *making MR*.  
The point is lowering the threshold so students/creatives can get to:
- **a first MR prototype**
- in one afternoon
- with code they can actually read end-to-end.


## Results (what exists today)

- [**GitHub repo**](https://github.com/linalopes/SchoolAI-MR-JS-Particles)  
- [**Video Portrait**]()
- **Performance note:** I started around ~9k particles to keep it stable on-device.


## Reflections

Mixed reality doesn’t need realism to feel real.  
It needs **timing**, **scale**, and **gesture trust**.

This project made me think of WebXR as a serious creative medium — not just a “demo tech”.  
It’s a new kind of sketchbook: one where the room becomes the canvas.


## What are the next possibilities

- **Anchoring:** plant the particle cloud on a table / floor (hit-test)
- **Two hands:** tension with one hand, sculpt with the other
- **A “lesson” version:** turn this into a teaching module for School of Tomorrow’s AI
- **Deployment:** a clean HTTPS hosting flow (so friends can open it without LAN)
