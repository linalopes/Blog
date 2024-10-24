---
layout: post
title: PPT made in Jupyter Notebook - A Tool for Documentation and Presentations in Creative Tech
id: 2024-10-21-ppt-made-in-jupyter-notebook-a-tool-for-documentation-and-presentations-in-creative-tech.md
categories:
  - documentation
  - digital tools
image: https://live.staticflickr.com/65535/54085772189_ced7f30b15_o.png
share: "true"
comments: "true"
filename: Blog/_posts/2024-10-21-ppt-made-in-jupyter-notebook-a-tool-for-documentation-and-presentations-in-creative-tech.md
tags:
  - machine-learning
  - python
  - rise
date: 2024-10-21
author: lina
---
I first encountered Jupyter Notebook as part of my specialization in AI and Machine Learning for Creative Practices here in Switzerland. This tool, developed to support the interactive exploration of data and the writing of code, has grown into an essential system for anyone working with Python, data science, and machine learning. It allows users to combine text, code, and visuals into a single, structured document, making it not just a development tool, but a powerful system for creating comprehensive documentation.

As someone who loves documentation (I'm a big fan of Obsidian for personal note-taking), Jupyter Notebook quickly became a favorite. I realized I could use Markdown to structure my notes alongside code and images, making it ideal for tracking and sharing my creative coding projects in Python. My AI coursework involved a lot of work with Python and PyTorch, and we were asked to present the models we developed at the end of the module. This got me thinking—could I turn Jupyter Notebook into a tool for presentations as well?

This curiosity led me to discover RISE, an extension that allows you to create presentations directly within Jupyter Notebook. While I come from a world that leans more towards JavaScript, I’m always intrigued by how tools can be adapted beyond their original purpose. Just because a tool is built for something doesn’t mean it can’t be used for something else, right?

The more I explored, the more questions I had—<mark class="hltr-pink">what would it be like to present a machine learning model directly from a Jupyter Notebook?</mark> And how could I make that presentation interactive? RISE, which is based on RevealJS (a framework I already loved for its dynamic presentations), gave me that power. Not only could I create sleek, dynamic slideshows, but I could also edit them live during my presentations—a dream for anyone who values flexibility in the creative process.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/54085770964/in/dateposted-public/" title="copy_9200D704-2892-4F25-B043-E91865967D90"><img src="https://live.staticflickr.com/31337/54085770964_18c17f1864_o.jpg" width="100%" alt="copy_9200D704-2892-4F25-B043-E91865967D90"/></a>
_play the video to see how simple and beautiful it is_

Now, one thing I ran into was that RISE was designed for the classic Jupyter Notebook (version 6), while I was using the newer version (Jupyter Notebook 7) with JupyterLab in my environment. After some troubleshooting, I realized the solution was to use `pip install RISE`, which launched the classic version of Jupyter Notebook where RISE works smoothly. This opened up so many possibilities for me—being able to link to different notebooks, compare models trained in various ways, and present my findings in a way that felt more intuitive and visual.

In a way, Jupyter Notebook has become more than a tool for documentation—it's now also a medium for visual storytelling in my AI work. Combining RISE with Jupyter gives me the freedom to document, code, and present all in one place, blurring the lines between development and communication. For me, this is just the beginning of an exploration of how we can make our creative tech processes more fluid and intuitive.

---
## Setting Up Jupyter Notebook with RISE: A Quick Guide

1. **Activate the Environment**. In my case `aicp`:
```bash
conda activate aicp
```

2. **Install RISE**:
```bash
pip install rise
```

3. **Run Jupyter Notebook** in classic mode to use RISE:
```bash
jupyter notebook
```

