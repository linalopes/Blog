---
layout: post
title: The Robotic Caterpillar and the Limitations of Artificial Imagination Or how I tried to teach a machine to dream like Maria Sibylla Merian
id: 2024-11-18-the-robotic-caterpillar-and-the-limitations-of-artificial-imagination-or-how-i-tried-to-teach-a-machine-to-dream-like-maria-sibylla-merian.md
categories:
  - speculation
  - digital tools
  - AI project
image: https://live.staticflickr.com/65535/54148295896_043fdc8442_b.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-11-18-the-robotic-caterpillar-and-the-limitations-of-artificial-imagination-or-how-i-tried-to-teach-a-machine-to-dream-like-maria-sibylla-merian.md
tags:
  - ai
  - machine-learning
date: 2024-11-18
author: lina
---

There’s something magical about the obsessive gaze of Maria Sibylla Merian. The way she documented the metamorphosis of insects and their symbiotic dance with plants feels almost alchemical. Her 17th-century illustrations, they’re both scientific evidence and poetry, rooted in reality yet teetering on the edge of the fantastic.

**What happens when we take that gaze—Merian’s meticulous curiosity—and project it into a future or a parallel universe?** What would her illustrations look like if the plants and insects she so lovingly drew had undergone their own metamorphosis, merging biology and technology? Could we imagine a caterpillar whose segmented body gleamed with robotic joints, or a swarm of butterflies whose wings doubled as shimmering solar panels, quietly harvesting energy in a symbiotic relationship with the sun?

This is the heart of my project, _Metamorphoses Reimagined_: a collision between the scientific rigor of Maria Sibylla Merian and the speculative, fantastical designs of a future that exists only in the radical imagination. And to explore this world, I turned to artificial intelligence—not as a tool, but as a co-pilot for dreaming.

<div style="display: flex; justify-content: center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Merian-grafic-senkenberg_hg.jpg/1024px-Merian-grafic-senkenberg_hg.jpg" width="380">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Duroia_eriopila_by_Merian.jpg" width="380"/>
</div>
_[Digital Collections | AMNH - Insects by Maria Sibylla Merian](https://digitalcollections.amnh.org/archive/Insects-by-Maria-Sibylla-Merian-2URM1T9QAH87.html)_

## **The First Step: Training a Machine to See Like Merian**

My journey began with a question: could I teach a machine to adopt Merian’s obsessive eye for detail? Could I make it replicate her aesthetic, her balance of science and art? I started with 46 images of her original work, curated like precious artifacts, and fed them into a platform called [Replicate](https://replicate.com).

Replicate, for those unfamiliar, is a kind of playground for machine learning—a place where open-source models live, waiting to be fine-tuned and reimagined. But fine-tuning a massive machine learning model to emulate a style as specific as Merian’s is no simple task. It’s here that a technique called **LoRA (Low-Rank Adaptation)** comes into play. Think of LoRA as a gentle sculptor: rather than retraining an entire model (a behemoth task), it tweaks only small parts, focusing on the details. In this way, I created a version of the FLUX.1 model that could mimic Merian’s intricate linework, her muted yet vibrant palette, her almost religious devotion to documenting insects.

---

## **The Prompts: Asking a Machine to Imagine**

With my fine-tuned model in hand, I began experimenting with prompts, pushing the AI to step into this speculative universe.

"A butterfly with solar panels for wings, drawn in the scientific style of Maria Sibylla Merian."

"A scientific illustration as MSMERIAN style of a robotic caterpillar."

But here’s where things got complicated. The machine, despite its newfound ability to emulate Merian’s style, struggled to combine concepts. The butterflies it produced were beautiful but mundane—entirely winged, entirely organic. The caterpillars remained grounded in biology, refusing to don their robotic armor. And the solar panels? They seemed to vanish entirely, as if the machine couldn’t reconcile their modernity with the 17th-century naturalism of Merian’s world.

**I started to wonder: why? Was it a failure of the model, or of my prompts?** Or was it something deeper—something about the limits of artificial imagination itself?

---

## **The Nature of Diffusion Models: A Semantic Struggle**

AI models like FLUX.1 and Stable Diffusion generate images by working within a **semantic space**—a kind of conceptual map where words and ideas live, connected by their meanings. But not all connections are created equal. In this space, "butterfly" might be near "flower" or "leaf," but "solar panel"? That’s a distant star, lightyears away in a technological galaxy.

This semantic gap explains why my prompts failed to materialize as I’d imagined. The machine couldn’t grasp the metaphor of solar panels as wings; it couldn’t weave together the poetic strands of nature and technology in the way I’d hoped. Diffusion models are brilliant at literalism but falter in the face of abstraction. They can mimic reality, but they stumble when asked to dream.

<img src="https://live.staticflickr.com/65535/54148295896_043fdc8442_b.jpg">

---

## **The Next Step: A Pipeline of Dreams**

If this project has taught me anything, it’s that AI isn’t yet a single, omniscient storyteller. Instead, it’s a collaborative orchestra—different models playing different instruments, each contributing to a larger symphony. Perhaps the key to merging Merian’s style with speculative design lies in building a **pipeline of models**:

1. A futuristic model trained on concepts of robotics and technology could generate a robotic caterpillar or solar-paneled wings.
2. A second model, fine-tuned to Merian’s aesthetic, could then reinterpret these futuristic elements through the lens of scientific illustration.

By layering these models, I could perhaps bridge the semantic gap, creating images that truly inhabit both worlds.

---

## **Reflections on the Radical Imagination**

This journey has been as much about the limitations of AI as its possibilities. Machines, for all their power, are not inherently imaginative. They are copilots, yes, but copilots who rely on us to chart the course. And perhaps that’s the beauty of it. The tension between what the machine can and cannot do becomes a site of creative exploration—a dialogue between human and machine, where the gaps and failures are as generative as the successes.

In _Metamorphoses Reimagined_, I see a reflection of my own desire to push beyond the limits of the possible, to imagine worlds that blur the boundaries between science, art, and technology. And while AI has yet to fully understand the poetry of a solar-paneled butterfly, it has shown me glimpses of what might be possible. This, I think, is where the radical imagination begins: not in perfect execution, but in the struggle to teach machines to dream.

## Test the model on Replicate
- [dslteaching/maria-sybilla-merian-style – Run with an API on Replicate](https://replicate.com/dslteaching/maria-sybilla-merian-style)
