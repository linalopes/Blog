---
layout: post
title: Paper Polygon — drawing with what the camera sees
id: 2026-04-05-paper-polygon.md
categories:
  - documentation
  - AI projects
  - school-of-tomorrows-ai
  - prototype
image: https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/Fx98PPFNBDNgAAa?file=Screenshot%202026-03-31%20at%2014.42.02.webp&x=2400&y=2400&a=true
share: "true"
comments: "true"
filename: Blog/_posts/2026-04-05-paper-polygon.md
tags:
  - py5
  - opencv
  - python
  - creative-coding
  - computer-vision
  - laser-cutter
  - interactive-installation
  - processing
date: 2026-04-05
author: lina
related_initiative:
  - "[[Paper as Interface]]"
---

<video controls playsinline preload="metadata" style="width: 50%; border-radius: 4px; margin: 2rem 0;">
  <source src="https://cloud.linalopes.info/public.php/dav/files/Fx98PPFNBDNgAAa/IMG_4229.mp4" type="video/mp4">
</video>



> **School of Tomorrow's AI note:** what if the rule that governs the grid isn't written in code — but held up to a camera?

**TL;DR**
- **What it is:** a py5 sketch that detects a colored paper shape via webcam and tiles it across a 10×10 grid
- **How it works:** OpenCV finds the outline → simplifies it to a polygon → py5 normalizes and draws it 100× — rotating with mouse position
- **Why it matters:** the input is physical; the drawing rule is discovered, not programmed
- **Key constraint:** color detection via HSV thresholds — sensitive to light conditions
- **Full setup:** webcam → Thonny → OBS virtual camera → MadMapper → projector → back onto the paper

**Repository:** [GitHub — paper-polygon](https://github.com/linalopes/SchoolAI-paper-polygon)


## The hook

I've been taking [Alexandre Villares](https://abav.lugaralgum.com/)' course *Desenhando com Código* at the Museu de Arte Moderna de São Paulo. If you don't know Alexandre's work — you should. He is one of the very few people I know who teaches creative coding with py5 in a classroom, and he does it with the kind of rigor and generosity that makes you want to stay after class.

One session was about grids. The exercise: define a cell size, loop through rows and columns, and draw something inside each cell. Simple premise. Infinite variations. The kind of constraint that makes you realize **the grid is not the drawing — the grid is the thinking**.

I followed along. But somewhere between one iteration and the next, I found myself asking a different question: *what if the shape inside each cell didn't come from a rule I wrote — but from something I held up to the camera?*

<mark style="background: #FFB8EBA6;">What happens when the input to a generative grid is not code, but a physical object in the room?</mark>



## A quick note on py5

py5 is Python + Processing. More precisely: it is a Python library that wraps the Java-based Processing framework, giving you the full drawing API of Processing — `setup()`, `draw()`, `beginShape()`, `vertex()`, all of it — inside a Python environment.

This matters for two reasons. First, Processing has decades of creative coding DNA: it was designed by [Ben Fry](https://benfry.com/) and [Casey Reas](https://reas.com/) to make code accessible to artists and designers, and that intent is baked into every function name. Second, Python means you can import anything from the scientific Python ecosystem alongside your sketch — and that includes OpenCV.

Alexandre is one of the practitioners keeping this lineage alive with py5. Watching him teach a grid exercise in py5 is watching someone who understands that creative coding is not about the output. **It is about training yourself to think in transformations.**



## What I built

<iframe
  src="https://link.excalidraw.com/readonly/OCBHx3G4PjCRx8lBtwB7"
  style="width: 100&#37;; height: 600px; border: 0;"
  allowfullscreen
  loading="lazy"
></iframe>


A sketch that:

1. reads a live webcam feed (OpenCV)
2. detects the largest blob of a specific color (HSV masking)
3. simplifies its outline to a polygon (approxPolyDP)
4. normalizes the shape to a unit coordinate system
5. draws that shape 100 times in a 10×10 grid (py5)
6. rotates every copy according to mouse X position

The result: move your mouse, and the entire grid rotates. Change the paper shape, and the grid redraws itself. No code change required.




## But first — how the paper shapes were made

The paper pieces were not drawn by hand. I described the shapes I wanted in natural language and asked Claude AI to generate an SVG. The prompt, in full:

> *I want you to create an SVG file with a workspace of 400mm by 400mm. Within this area, you will draw geometric shapes: squares, rectangles, equilateral triangles, isosceles triangles, trapezoids, circles, and semicircles—each within a 40x40mm area. Use simple black lines and a transparent background. The shapes cannot overlap and cannot exceed the 400x400mm area.*

Claude generated a complete, cut-ready SVG. I loaded it into a Creality Falcon 2 laser cutter and cut the shapes from colored cardstock.

**The input object to the installation is itself AI-generated.** The loop was already starting before the webcam opened.

![](https://raw.githubusercontent.com/linalopes/SchoolAI-paper-polygon/76038edfdc724c03b134c691f29a73161d19bc45/geometry_grid_400mm.svg)



## Making — the recipe

**Prerequisites:** Python 3.8+, Java 17+ (for py5), a webcam, Thonny IDE (or any Python environment)

```bash
pip install py5 opencv-python numpy
```

**Step 1 — Run the sketch**
```bash
python paper-polygon.py
```
A 900×600 canvas opens. Point a colored paper shape at your webcam.

**Step 2 — Choose your target color**

| Key | Color |
|---|---|
| `G` | green |
| `B` | blue |
| `P` | pink |
| `Y` | yellow |


**Step 3 — Debug the detection**
Press `V` to toggle the debug panel. Press `M` to cycle through: camera feed → binary mask → contour overlay. Use this to check if the mask is clean.

**Step 4 — Move the mouse**
Mouse X rotates all 100 copies simultaneously. Left = one direction, right = the other. That's the only interaction.

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/Fx98PPFNBDNgAAa?file=Screenshot%202026-03-31%20at%2014.42.02.webp&x=2400&y=2400&a=true"
  alt="Screenshot 2026-03-31 at 14.42.02.webp"
  style="width: 100%; border-radius: 4px; margin: 2rem 0;"
/>





## Troubleshooting

**No shape detected:** the HSV thresholds inside `detect_colored_paper()` are tuned for average indoor light. If detection is unstable, open the debug panel (V → M until you see the mask) and adjust the `lower` / `upper` numpy arrays to match your lighting. A bright background in the target color will fool the mask completely.

**py5 doesn't start:** Java 17+ must be on your PATH. Run `java -version` in terminal before anything else.

**Sketchy polygon with too many vertices:** increase `APPROX_EPSILON_FACTOR` (default `0.02`). Higher values give you fewer, cleaner vertices.



## Studio notes

**Why Thonny?** py5 works in any Python environment, but Thonny's simplicity makes it a good teaching tool. For this experiment, I wanted the entire stack to be visible and explainable — no black boxes.

**Why OBS as a routing layer?** The sketch outputs to a canvas window. MadMapper needs a camera source. OBS Virtual Camera bridges the two without any additional hardware. It's a workaround, but it works cleanly — and it keeps the projection mapping logic completely separate from the detection logic.

**Why not just project from the code directly?** Because projection mapping is its own practice. MadMapper lets you warp, mask, and align the image to the physical surface precisely. That precision matters when the goal is to project *onto* the paper that generated the pattern.

**On the grid as structure:** Alexandre's exercise was right. The grid is not decoration — it is a constraint that forces you to ask: *what is the unit?* Here, the unit is whatever you cut from colored cardstock and hold up to the camera. **The grid became a machine for discovering shapes, not for displaying them.**



## Results

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/Fx98PPFNBDNgAAa?file=IMG_4233.webp&x=2400&y=2400&a=true"
  alt="IMG_4233.webp"
  style="width: 50%; border-radius: 4px; margin: 2rem 0;"
/>



- `paper-polygon.py` — [GitHub](https://github.com/linalopes/SchoolAI-paper-polygon)
- `paper-polygon-diagram-v2.excalidraw` — full system diagram (open at [excalidraw.com](https://link.excalidraw.com/readonly/OCBHx3G4PjCRx8lBtwB7))
- `README.md` — full setup and parameter documentation



## Reflections

**py5 made this possible in a specific way.** Not because it is the only tool, but because it sits exactly at the intersection where I needed to be: Processing's drawing model plus Python's scientific libraries. OpenCV and py5 spoke the same language — numpy arrays — and that compatibility collapsed what would have been a significant integration problem into three lines of code.

What surprised me most was how little the detection needed to be. A blob, a contour, a polygon approximation. The camera doesn't need to understand the shape. It just needs to find its edges. **The meaning — the drawing — is added by the grid.**



## Next possibilities

- Try depth-based detection (remove the dependency on color)
- Port to a browser version using opencv.js + p5.js for the webcam pipeline
- Use the sketch as a classroom tool in School of Tomorrow's AI workshops — let students produce their own cut shapes


---

*Thank you Alexandre Villares — for teaching grids as a way of thinking, and for keeping py5 alive in classrooms where it belongs.* 🫀
