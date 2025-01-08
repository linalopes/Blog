---
layout: post
title: From Elephants at a Cemetery to a Cage Inside a Bird - How Gen AI Can Change the Animation Language
id: 2024-11-05-from-elephants-at-a-cemetery-to-a-cage-inside-a-bird-how-gen-ai-can-change-the-animation-language.md
categories:
  - speculation
  - documentation
  - digital tools
image: https://live.staticflickr.com/65535/54122972355_99ff2ef6fd.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-11-05-from-elephants-at-a-cemetery-to-a-cage-inside-a-bird-how-gen-ai-can-change-the-animation-language.md
tags:
  - ai
  - machine-learning
  - image
  - animation
  - featured
date: 2024-11-05
author: lina
---
On Tuesday, November 5th, I had the opportunity to attend a [workshop](https://tickets.da-z.net/en/events/generative-ai-workshop-2?c=AIWorkshop17) focused on using low-code tools to create workflows for generative image and video creation. The session introduced us to Amazon Bedrock—a tool I hadn't explored before—and ComfyUI, which proved to be one of the workshop's highlights.

_Thanks Pajtim Matoshi, Luca Perrozi and Tobias Seidel for the opportunity🫀 _

### Initial Impressions of Amazon Bedrock

As someone with minimal experience in AWS (Amazon Web Services), I’ve always found the platform intimidating. My prior interactions with AWS left me with the impression that it’s not particularly beginner-friendly. Its complexity, combined with the small charges that seem to "mysteriously" appear for any experimentation, can be discouraging for newcomers. My limited experience includes setting up a small Flask server with the guidance of a friend, which helped me dip my toes into the AWS ecosystem.

Amazon Bedrock, however, piqued my curiosity. For those unfamiliar, Amazon Bedrock is a managed service that provides access to foundation models from leading AI companies and Amazon's own models, directly through the AWS Console or APIs. **In summary: It allows you to test and integrate these models without requiring your own infrastructure.**

During the workshop, I learned that Bedrock supports various generative AI models, including Amazon's Titan series, Stable Diffusion, and Claude. Interestingly, OpenAI's models, like ChatGPT or DALL·E, are not available on AWS but instead integrate with Microsoft Azure, highlighting the separation between Big Tech ecosystems.

As part of my experience during the generative AI workshop, I explored Amazon Bedrock’s Titan and Stable Diffusion models, creating prompts that ranged from straightforward descriptions to more imaginative concepts. The process of testing these tools revealed both their capabilities and their limitations, prompting me to reflect on the relationship between creativity, technology, and art history.

<img src="https://live.staticflickr.com/65535/54121668002_6767dc2c9a.jpg" width="500" height="500" alt="1-Two elephants are kissing in front of a cemitery. black-and-white, minimalistic, hand-draw."/>
### From Elephants at a Cemetery to a Cage Inside a Bird

When I started experimenting, I kept my prompts relatively simple and direct. For instance, I requested "two elephants kissing at the entrance of a cemetery," styled as a hand-drawn yet realistic image. These straightforward prompts were executed quite well by the models, producing results that aligned with my expectations.

But as I ventured into more surreal territory—asking for "a cage inside a bird"—I began to see the constraints of these systems. While they understood the individual elements ("cage" and "bird"), their combination seemed to confuse the models. Typically, we envision a bird inside a cage, so reversing this relationship challenged the logic of the AI’s training. The outputs often felt disjointed or missed the mark entirely.

To refine my results, I turned to another model designed for text generation, asking it to enhance my prompt for clarity and detail. While this helped to some extent, the models still struggled with abstract or dreamlike concepts. For example, even adding descriptors like "lysergic background" occasionally triggered censorship, likely due to the term's association with psychedelics.

This limitation became especially noticeable when attempting to create an avatar. Some of my prompts were censored, which led me to question how these models balance creative freedom with the boundaries imposed by their training data and filters.

<img src="https://live.staticflickr.com/65535/54122516476_70dafb6012.jpg" width="100%" alt="Screenshot 2024-11-05 at 17.57.56"/>

### Imagination vs. Realism in Generative AI

These experiences brought me to an interesting realization: these AI systems, for all their advancements, seem constrained by the realism inherent in their datasets. They excel at producing images grounded in reality but falter when tasked with generating something that transcends the real world.

This limitation reminded me of the role of animation in storytelling, particularly the work of Hayao Miyazaki. Animation allows us to explore the impossible, conjuring images and narratives that exist purely in the realm of imagination or dreams. A bird with a cage inside it, for instance, feels more like an image from a dreamscape than something rooted in reality.

Could these AI systems be missing a certain "imaginative database"? Or is their struggle with the surreal an inherent limitation of their design? While speculative, this thought raises fascinating questions about the extent to which AI can expand our imagination—or whether it will always be grounded in the realism of its training data.

### A Historical Perspective

This tension between realism and imagination isn’t new; it echoes shifts in art history. The advent of photography, for example, freed painters from the need to capture reality. With photography assuming the role of precise representation, artists could explore abstraction, emotion, and imagination. **Would movements like Cubism, led by figures like Picasso, have emerged without photography's influence?**

Similarly, I wonder whether these generative AI tools, by excelling at realism, might liberate us to focus on the imaginative. If they can generate realistic animations of "elephants kissing at a cemetery," perhaps we can shift our creative efforts toward surreal narratives, dreamlike landscapes, and otherworldly aesthetics.
### Discovering ComfyUI: A Visual Approach

The standout tool of the session for me was [ComfyUI](https://www.comfy.org/). It’s an open-source, modular tool designed for generative workflows using a node-based interface. Sometimes referred to as “Box and Wires” or low-code, this approach enables users to build workflows visually, connecting modular blocks such as “load file,” “add prompt,” and “enhance output.”

What made this experience even more impactful was the preparation by the instructors. They had pre-built workflows ready for us to test, which allowed us to jump straight into experimenting with ComfyUI. The ability to install ComfyUI on an AWS server rather than needing a local machine with a powerful GPU was particularly appealing. This cloud-based setup removes hardware limitations and makes generative AI experimentation more accessible.

<img src="https://live.staticflickr.com/65535/54121676547_1bb1becfa7.jpg" width="100%" alt="Screenshot 2024-11-05 at 18.36.44"/>

### Animation Workflows: A New Frontier

One of the most exciting parts of the workshop was exploring animation workflows in ComfyUI. The setup included four "shots" or frames, each with its own prompt. The tool interpolates between these prompts to create smooth transitions, resulting in animations with a distinct AI-generated style.

This "AI style"—a term I use more to describe its recognizable aesthetic than its philosophical implications—has a unique visual signature that feels both experimental and exciting. As someone with a background in screenwriting rather than illustration or design, I find myself wondering how to approach this medium. What would it mean to write a screenplay or narrative flow specifically designed for these generative animation tools?

### Final Thoughts

The workshop left me inspired to dive deeper into generative AI, particularly as someone interested in storytelling. Tools like ComfyUI offer a bridge between technical complexity and creative exploration, opening up new possibilities for experimentation.

While AWS and its ecosystem still feel somewhat daunting, I can see the potential of tools like Amazon Bedrock in making generative AI more accessible to creators and technologists alike. The experience has planted a seed: **what new narratives and visuals could emerge from these workflows, especially when paired with a writer's imagination?**

For anyone curious about generative AI, this workshop was an excellent entry point. Whether you're a designer, technologist, or storyteller, the possibilities these tools unlock are vast and exciting.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/albums/72177720321762411" title="2024 11 Gen AI workshop"><img src="https://live.staticflickr.com/65535/54122972355_99ff2ef6fd_w.jpg" width="500" height="375" alt="2024 11 Gen AI workshop"/></a>

_To see more pictures of the process, go to my Flick_