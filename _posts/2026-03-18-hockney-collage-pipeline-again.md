---
layout: post
title: Hockney Collage Pipeline in Python (AGAIN) with py5
id: 2026-03-18-hockney-collage-pipeline-again.md
categories:
  - documentation
  - creative process
  - digital tools
  - image
image: https://github.com/linalopes/SchoolAI-hockney-atelier/blob/main/output/biolab_collage.webp?raw=true
share: "true"
comments: "true"
filename: Blog/_posts/2026-03-18-hockney-collage-pipeline-again.md
tags:
  - python
  - opencv
  - p5js
  - py5
  - thonny
  - creative-coding
  - processing
  - hockney
  - computer-vision
  - photos
  - tutorial
date: 2026-03-18
author: lina
excalidraw-source: "[[Hockney Collage Pipeline - Drawing 2026-03-18 15.01.45.excalidraw]]"
---

![](https://github.com/linalopes/SchoolAI-hockney-atelier/blob/main/output/biolab_collage.webp?raw=true)

> _TL;DR_
>
> - _**The setup:**_ _I rebuilt my old Hockney collage pipeline — this time with py5 in Thonny, not just bare Python. The difference matters._
> - _**The method:**_ _SIFT feature matching in Python exports a JSON of photo placements; a p5.js browser editor loads that JSON and lets you compose, reorder, and export a full-resolution collage._
> - _**The insight:**_ _Python sees. JavaScript composes. py5 is the bridge between computer vision rigor and creative coding expressiveness — without leaving the Processing family._
> - _**The constraint:**_ _SIFT needs ~30% visual overlap between photos. If your shots are too different, the algorithm falls back to a grid — and you'll see it in the logs._


**GitHub:** [SchoolAI-hockney-atelier](https://github.com/linalopes/SchoolAI-hockney-atelier)


I've done this before. Two years ago I built a Hockney-style collage pipeline in Python with OpenCV. It worked, sort of. And then I forgot about it.

Yesterday, I attended a class by [Alexandre Villares](https://abav.lugaralgum.com/) called *Desenhando com Código* (Drawing with Code). He teaches creative coding not with JavaScript — not with p5.js, which is where I live — but with **py5**, running inside Thonny. And he does something I love: he anchors the technical work in a real artist. You don't just learn functions. You learn through someone's vision.

I left that class thinking: this is exactly the method from Austin Kleon's *Steal Like an Artist*. You learn by borrowing the frame of someone who already sees the world the way you want to see it. Alexandre did this beautifully. So I went home and did the same thing to myself.

I picked David Hockney. And I rebuilt the pipeline. **Again. But differently.**

---

## The artist: Hockney and the paralyzed cyclops

Hockney famously said that a conventional camera is <mark style="background: #FFB8EBA6;">"a paralyzed one-eyed cyclops — for a split second."</mark> He wasn't wrong. A photograph captures a single viewpoint, a frozen moment, a lie about how we actually see.

In his photographic collages — which he calls "joiners" — Hockney creates composite images out of photographs, first as grids of Polaroids and later in more organic, overlapping constructions. This technique allowed him to weave together distinct snapshots into a unified image that challenges and expands the viewer's perception.

He quickly discovered that he didn't have to match things up at all. In fact, he couldn't possibly match them, and it wasn't necessary. The seams, the misalignments, the rotations — those aren't failures. They're the point.

This is what makes Hockney the perfect partner for a computer vision experiment. OpenCV will try very hard to find the "correct" alignment. Hockney would laugh.

---

## Why py5 — and why it matters

Two years ago I used Python + OpenCV to do the feature matching and image stitching, and that was that. Python as a utility, not as a creative environment.

What changed today is **py5**.

For context: [Processing](https://processing.org/) was created in 2001 by Ben Fry and Casey Reas as a tool for artists and designers to learn programming. In 2013, Lauren McCarthy created [p5.js](https://p5js.org/) — a JavaScript translation of that philosophy for the web. That's where I've lived for years.

But there's another branch of the family tree: **py5**, a Python version of Processing that runs on the JVM and integrates natively with the Python ecosystem. Alexandre Vilares chose this path for his course — not p5.js, not the browser, but Thonny + py5 + the full power of scientific Python.

That choice matters. Because py5 in Thonny gives you something p5.js in the browser never will: **OpenCV**. And that's the bridge that makes this pipeline possible.

> Python sees. JavaScript composes.

---

## What I built

A 3-stage pipeline for Hockney-style collages of my atelier:

- **Stage 0** — Photograph the space with an iPhone (native iOS camera, 1x and 2x lenses, manual exposure lock)
- **Stage 1** — Python + py5 in Thonny: SIFT feature matching, partial affine transform estimation, JSON export of photo placements
- **Stage 2** — p5.js in the browser: interactive composition editor with pan/zoom, layer management, and full-resolution PNG export

The architecture and all decision logs live in this [Excalidraw diagram](https://link.excalidraw.com/readonly/w5zcUXDco9eFQSDh05pW).

<iframe src="https://link.excalidraw.com/readonly/w5zcUXDco9eFQSDh05pW" width="100%" height="600" style="border: none;"></iframe>

**GitHub repo:** [SchoolAI-hockney-atelier](https://github.com/linalopes/SchoolAI-hockney-atelier)

---

## Making — the short recipe

### Stage 0: photographing

iPhone 13 Pro, native camera app. I used both 1x and 2x lenses in the same session — intentionally varying perspective. Exposure locked before each sequence. JPG, maximum quality.

The key constraint: **photos need ~30% visual overlap** for SIFT to find correspondences. Move through the space, not just around a single point.

### Stage 1: Thonny + py5 + OpenCV

```bash
pip3 install opencv-python
```

The script runs in Thonny (py5 imported mode). It:
1. Loads all JPGs from the area folder
2. Extracts SIFT keypoints from each photo
3. Matches pairs using FLANN + Lowe's ratio test (0.7)
4. Estimates placement via `estimateAffinePartial2D` — translation, rotation, scale
5. Selects the most-connected photo as the reference anchor
6. Chains placements outward from there
7. Shows a live py5 preview (press `C` to toggle confidence overlay)
8. Exports a JSON with `x`, `y`, `angle`, `display_scale` per photo on window close

![](https://github.com/linalopes/SchoolAI-hockney-atelier/blob/main/history/Screenshot%202026-03-18%20at%2015.27.18.png?raw=true)

### Stage 2: p5.js browser editor

Open `stage2_hockney.html` via a local server:

```bash
cd ~/Desktop/hockney-atelier
python3 -m http.server 8000
```

Then: `http://localhost:8000/stage2_hockney.html`

The editor loads the JSON and photos, then gives you:
- Scroll to zoom, drag background to pan
- Click a photo to select it (highlighted in pink)
- Sidebar sliders for scale, rotation, opacity
- Layers panel — click to select, ↑↓ to reorder
- `F` key to fit all photos in view
- Export PNG at 4000px width with alpha transparency

![](https://github.com/linalopes/SchoolAI-hockney-atelier/blob/main/history/Screenshot%202026-03-18%20at%2015.25.46.png?raw=true)

---

## Decision log — paths tested and abandoned

This is where the real documentation lives. **The wrong paths are as valuable as the right one.**

| Attempted | Result | Why it failed |
|---|---|---|
| ORB + BFMatcher, distance < 60 | All pairs had exactly 40 matches | Threshold too loose — wood shelf textures matched everything |
| ORB + knnMatch + Lowe ratio | Photos collapsed onto each other | ORB binary features too weak for varied perspectives |
| Full homography (`findHomography`) | Wild rotations, photos flying off-canvas | Full perspective warp is unstable with partial overlap |
| Random grid placement | No intelligence — no content awareness | Looks arbitrary, misses the spatial logic of the space |
| First photo as reference anchor | Sink photo (a close-up detail) dominated the layout | Detail shots make poor anchors |

**What worked:** SIFT + FLANN (much more discriminative than ORB for scenes with repetitive texture), partial affine transform (translation + rotation + scale, no shear), and choosing the most-connected photo as anchor automatically.

The moral: **documenting what didn't work is not failure documentation. It's navigation for the next iteration.**

---

## Reflections

There's something poetically right about using SIFT — Scale-Invariant Feature Transform — to reconstruct a Hockney joiner. SIFT is trying to do what Hockney was critiquing: find the "correct" match, the stable correspondence, the single unified perspective. And it fails, beautifully, in exactly the places where the photos diverge.

The misalignments that remain after Stage 1 — the photos that drift, the scales that feel slightly wrong — those are the Hockney in the machine. You don't fix them in Stage 2. You compose with them.

**Python sees. JavaScript composes. py5 is the bridge between the rigor of computer vision and the expressiveness of creative coding — without leaving the Processing family.**

A thank you to Alexandre Vilares, who reminded me that the right tool isn't always the newest one, and that learning through an artist is always better than learning through a manual. 🫀

---

## Next possibilities

- Complete the pipeline for all 7 atelier areas (kitchen, bio lab, saloon, dance studio, dirty workshop, studio, office)
- GIF animation: record the composition process in Stage 2 as an animated montage-building sequence
- Integrate the 7 exported PNGs as textures in `space3d.html` — a Three.js navigable atelier
- Workshop version: could this be a 2-hour session for artists with no CV background?
- Explore: what happens if you use the *wrong* photos on purpose — mixing areas, mixing times?

---

*Built during a single day session, March 18, 2026. Documented live.*
