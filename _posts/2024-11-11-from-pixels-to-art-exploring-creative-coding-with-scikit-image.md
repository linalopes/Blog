---
layout: post
title: From Pixels to Art – Exploring Creative Coding with scikit-image
id: 2024-11-11-from-pixels-to-art-exploring-creative-coding-with-scikit-image.md
categories:
  - documentation
  - digital tools
  - data science
image: https://live.staticflickr.com/65535/54131855752_c9d9183274_h.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-11-11-from-pixels-to-art-exploring-creative-coding-with-scikit-image.md
tags: 
date: 2024-11-11
author: lina
---
#### **Introduction**

Creative coding is all about pushing the boundaries of what technology can create. Before Machine Learning (ML) and Generative AI became popular tools for creating digital art, generative art was already thriving on computers, fueled by libraries like p5.js. This week, as part of a course on Machine Learning for images taught by **Guillaume Witz** at the Bern Institute of Mathematics, I ventured into new territory using a Python library called **scikit-image**.

The class was fascinating—Guillaume combined math, machine learning, and creative coding in a way that made the intersection of these fields accessible and exciting. One of the experiments we explored involved a image of two cats (his cats), used to demonstrate scikit-image's power for image manipulation and analysis. While I’ve always worked in a p5.js environment for my creative coding projects, diving into Python and scikit-image was an eye-opening experience.

In this post, I’ll share the steps of this experiment, reflect on the differences between p5.js and scikit-image, and explore how the questions we ask can make any tool powerful for artistic expression.

---

#### **Experiment 1: Visualizing Pixels – The RGB Spectrum**

<mark class="hltr-pink">These days I'm too much in data visualization</mark>. So, the first experiment focused on visualizing the data of an image. Specifically, the goal was to take the pixels of an image and reorganize them according to their RGB values. Starting with the two cats' photo, I created a visualization where the pixels were sorted from the darkest reds to the brightest blues, allowing the entire RGB spectrum to emerge.

IMAGE HERE


This visualization raised an intriguing question: **"If I have the same pixels, can I recreate something as iconic as the Mona Lisa?"** This playful thought experiment set the stage for the second part of the project.

---

#### **Experiment 2: Reconstructing Art with Pixels**

The second experiment introduced a new dimension: comparing the pixel data of two images. The idea was to take the list of pixels (an array) from the first image (the two cats) and try to reconstruct a second image—the Mona Lisa—using only the matching pixels. Any unmatched pixels were set to black.

The results were surprising! The photo of the two cats turned out to have **99.51% of the same pixels as the Mona Lisa**. This sparked a humorous observation: perhaps the two cats _are_ a work of art! 

<img src="https://live.staticflickr.com/65535/54131855752_c9d9183274_h.jpg" width="100%" alt="Screenshot 2024-11-11 at 17.56.44"/>

On the other hand, when comparing the same photo to a generated image of blue waves created in DALL-E, only **53% of the pixels matched**, suggesting that these waves were "less artistic" in this whimsical framework.

The experiment wasn’t just about the visual outcomes—it was about the creative process and the ways data can be repurposed to spark new perspectives on art.

---

#### **Reflection: scikit-image vs. p5.js**

Coming from a p5.js background, working with scikit-image was both challenging and rewarding. Here’s a quick comparison of the two tools:

|Feature|scikit-image|p5.js|
|---|---|---|
|**Language**|Python|JavaScript|
|**Focus**|Image processing and analysis|Generative art and interactivity|
|**Ease of Use**|Requires Python and NumPy knowledge|Beginner-friendly|
|**Interactivity**|Limited; not built for real-time input|Built for real-time interaction|
|**Applications**|Scientific research, data processing|Art, design, and creative coding|
|**Performance**|Excellent for large-scale image processing|Real-time performance on browsers|
|**Creative Coding**|Possible but not primary purpose|Core feature|
|**Integration**|Works with scientific libraries like SciPy and TensorFlow|Works with web technologies|
|**3D Support**|None|Yes, through WebGL|

While scikit-image lacks the interactive, real-time capabilities of p5.js, its strength lies in the precision and depth it offers for image manipulation and analysis. It’s a powerful tool for transforming data into visual narratives, even if it’s less suited for interactive generative art.

---

#### **Conclusion**

**The most exciting part of this experiment wasn’t the tools themselves but the questions they enabled me to explore**. Whether it’s scikit-image or p5.js, the best tool is always the one you have and know how to use. Tools are just extensions of our curiosity, and their value lies in the ways they help us shape new ideas and perspectives.

In this case, scikit-image allowed me to delve into the essence of images, visualizing their pixel structures and rethinking what makes something "art." These experiments taught me that a simple photo of two cats can contain the seeds of creativity—just like any tool or dataset in the hands of a curious mind.

Whether you're working with scikit-image, p5.js, or another tool, the key is to keep asking questions. After all, art is as much about the questions as it is about the answers.

