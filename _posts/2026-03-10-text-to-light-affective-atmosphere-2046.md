---
layout: post
title: From Emotional Text to Light — Building Affective Atmosphere 2046 During SheBuilds
id: text-to-light-affective-atmosphere-2046
categories:
  - creative process
  - school of tomorrow's ai
  - embodied ai
image: https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/cNAt2rRw66MJYcZ?file=cloud.webp&x=2400&y=2400&a=true
share: "true"
comments: "true"
filename: Blog/_posts/2026-03-10-text-to-light-affective-atmosphere-2046.md
tags:
  - ai
  - embodied-ai
  - creative-technology
  - interaction-design
  - physical-computing
  - esp8266
  - wled
  - lovable
  - anthropic
  - shebuilds
  - prototype
  - school-of-tomorrows-ai
date: 2026-03-10
author: lina
related_initiative:
  - "[[Affective Atmosphere 2046]]"
---

<video controls playsinline preload="metadata" style="width: 40%; border-radius: 4px; margin: 2rem 0;">
  <source src="https://cloud.linalopes.info/public.php/dav/files/cNAt2rRw66MJYcZ/3A8DA341-B728-404D-B6B5-66EDBADA8EC6.mp4" type="video/mp4">
</video>


> **School of Tomorrow’s AI note:** What happens when emotional input is treated as translation rather than extraction?
>
> TL;DR — During SheBuilds, I used Lovable with Anthropic to prototype a web interface that turns emotional text into light; the concept proved itself in about an hour with only a few prompts, and the most important technical lesson was that the full experience only worked once I synced the project to GitHub and ran it locally to reach the physical cloud.


## The spark

The cloud already existed.

That is a story for another post, because the object itself has a longer history: the hanging form, the LEDs inside it, the physical presence of something that already felt atmospheric before it had a language interface attached to it. It was there, suspended, waiting. What it did not have yet was a way of being addressed.

Then SheBuilds appeared at exactly the right moment.

A one-day invitation, on International Women’s Day, to build something quickly and publicly. I liked the simplicity of that constraint. One day. One prototype. One decision about what was worth making.

The cloud was already there. The opportunity was already there. The question became: what kind of interface would actually deserve it?

That is what made the sprint feel interesting to me. Not just the result, but the way separate threads suddenly connected: an existing physical object, a tool I had not really used before, a public build challenge, and a concept I had been carrying around for a while about AI, care, and emotional translation.

This post is not only about what I built. It is also about how I use short sprints to test whether a concept has enough internal structure to become form. In that sense, the prototype matters, but the method matters just as much.

## What I wanted to know

<mark style="background: #FFB8EBA6;">What if, instead of using AI to generate more content, I used it to translate emotional text into something ephemeral, embodied, and careful?</mark>

That was the real question underneath the prototype.

Not whether I could make a beautiful screen in a day. Not whether I could connect a web app to a physical object. Those were build questions. Useful, but secondary.

The deeper question was about interaction design.

What would happen if emotional input did not feel like filling out a form? What if it did not feel like being measured, classified, or extracted? What if a sentence could appear briefly, dissolve, and become atmosphere instead?

I was not interested in AI as a machine for producing more material. I was interested in whether it could become part of a more careful translation layer — one that shapes attention, release, and response.

That is where **Affective Atmosphere 2046** began.

## What I built

I built a web interface where a user writes a short emotional sentence into a white, spacious field. The sentence appears only briefly. Then it dissolves.

Underneath that gesture, the system maps the text into four affective dimensions:

- valence
- energy
- complexity
- instability

Those values then drive three things at once:

1. an on-screen visual field,
2. an affective preview,
3. and a physical LED cloud hanging in space.

So the loop became:

**text → affective parameters → light preview → physical cloud**

The result is not a chatbot, not a journal, not an emotion classifier in the usual sense. It is closer to an interface for emotional rendering.

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/cNAt2rRw66MJYcZ?file=interface.webp&x=2400&y=2400&a=true"
  alt="Web Interface and Cloud"
  style="width: 70%; border-radius: 4px; margin: 2rem 0;"
/>

## The sprint mattered more than the myth

One of the reasons I wanted to write this down is that the methodology matters more to me than the polished story I could tell afterward.

I approached this as a four-hour sprint.

That timebox was not a productivity trick. It was part of the method. I needed to know whether the idea had enough internal coherence to become a proof of concept quickly. If it needed weeks before becoming legible, then it was probably still too vague.

What surprised me was how fast the first proof arrived.

Using Lovable, with Anthropic inside that build flow, I got to a recognizable proof of concept in about an hour. Not a finished piece. Not a resolved artwork. But a web interface with the right emotional logic, the right atmosphere, and the beginning of the bridge to the cloud.

That speed mattered.

It did not mean the project was “easy.” It meant the concept was already structured enough that three or four strong prompts could pull a visible form out of it.

I am still not a great believer in React as a pleasurable framework. That did not change. What changed was my sense of how little interface code I needed to touch directly in order to test a concept seriously.

For me, this is where the post becomes less about the object and more about process: **time can be a design collaborator when the sprint is used to test clarity rather than to force completion.**

## What should an emotional input field feel like?

This was the most important design decision, and probably the one least visible if you only look at the final video.

I did not want the interface to begin with an obvious input box. I did not want a bordered field, a submit button, and the feeling that you were about to hand information over to a system that would keep it forever. That interaction language is too loaded. It already tells you what kind of relationship you are in.

So I kept asking a smaller question: **what should an emotional input field feel like?**

The answer I kept returning to was condensation and evaporation.

A blinking cursor in open space. A sentence that arrives lightly. No visual pressure. No sense of archive. And then, once released, the sentence disappears.

This matters technically, but it matters even more symbolically. I wanted privacy to exist here not just as a policy, but as an interaction metaphor. The text is not staged as a possession. It is staged as something temporary, released into another state.

That decision changed the whole project. Once the input stopped behaving like a form, the rest of the interface had to follow.

## From text to light

The emotional model in the prototype is intentionally small.

I did not want to build a giant interpretation engine in a one-day sprint. I wanted a minimal structure that was expressive enough to feel meaningful, but simple enough to remain legible.

So the system uses four dimensions as an intermediate layer:

- **valence** for warmth or coolness
- **energy** for brightness and movement
- **complexity** for density and layering
- **instability** for flicker, turbulence, or irregularity

That intermediate layer turned out to be one of the strongest decisions in the whole project. It gave me a stable translation surface between language, interface, and light.

The screen could respond.  
The preview could respond.  
The cloud could respond.

And all three were still part of the same sentence.

<img
  src="https://cloud.linalopes.info/index.php/apps/files_sharing/publicpreview/cNAt2rRw66MJYcZ?file=Screenshot 2026-03-10 at 22.07.54.webp&x=2400&y=2400&a=true"
  alt="Web Interface and Cloud"
  style="width: 100%; border-radius: 4px; margin: 2rem 0;"
/>

If I had tried to go directly from text to hardware behavior, the project would have become harder to reason about and harder to shape. The four-parameter system kept the prototype both poetic and inspectable. It made the experience feel atmospheric without becoming mysterious in a lazy way.

## The browser was not the whole room

The first version of the prototype worked beautifully on screen.

Then it failed exactly where it mattered most.

The cloud was reachable. The IP was correct. WLED was running. The physical object was there, alive, already responding in its own interface. But from the hosted Lovable preview, the final request kept failing. The emotional sentence dissolved. The preview updated. The local cloud did nothing.

At first glance, this looked like a hardware problem. It was not.

It was a boundary problem.

The hosted preview was enough to design the interface, prompt the visual system, and shape the interaction. But the moment the project needed to speak to a device on my local network, the browser stopped being a neutral window. It became part of the architecture.

That is when GitHub stopped being a convenience and became the escape hatch.

I synced the project, cloned the repo locally, ran it on my machine, and tried again. Same interface. Same logic. Same cloud.

This time it worked.

And that changed the meaning of the piece. **The prototype only became whole once it left the hosted preview and entered the room where the cloud actually was.**

There is something almost embarrassingly literal about that sentence, but it is also the real technical lesson. A hosted frontend can simulate a lot. It can even feel complete. But the moment a project depends on a physical object in local space, deployment stops being an afterthought. The browser is not the whole room.

<video controls playsinline preload="metadata" style="width: 100%; border-radius: 4px; margin: 2rem 0;">
  <source src="https://cloud.linalopes.info/public.php/dav/files/cNAt2rRw66MJYcZ/IMG_3780.mp4" type="video/mp4">
</video>



## What I learned from building it this way

The fastest part to prototype was the interface.  
The most fragile part was everything that had to cross a boundary: browser to local network, hosted preview to physical object, concept to operational setup.

That distinction is transferable. If you are building embodied systems with AI-assisted tools, it helps to separate three layers early:

- interface generation
- interaction logic
- deployment architecture

Tools like Lovable can compress the first layer dramatically. They can even accelerate the second. But the third layer still demands a different kind of attention: networks, runtime context, permissions, relays, hardware reachability.

That is exactly what happened here.

Lovable was strong exactly where I needed speed: helping me generate and refine the web interface, establish the single-page structure, protect the mood, and keep iterating without starting from scratch every time. Anthropic mattered there too, not as a headline, but as part of the build flow that made those iterations possible.

But the full experience only became convincing once the project moved out of that hosted layer and into a local runtime where the cloud could actually be addressed.

There is a big difference between:
- generating an interface,
- prototyping an interaction,
- and operationalizing an embodied system.

This project touched all three, but only lightly. That was enough for the sprint. More than enough, actually. The goal was not to build infrastructure. The goal was to build proof.

And the proof is here: a sentence can become an affective field, and an affective field can become light.

## What I’m actually building

I do not think I am building “AI experiences” in the generic sense.

What I am trying to build are interfaces where AI becomes part of a more careful translation layer — less extractive, less obsessed with output, and more attentive to how a system feels when you enter it.

That is part of what **School of Tomorrow’s AI** means to me right now: not just teaching tools, but designing encounters. Not just accelerating production, but experimenting with how interpretation, embodiment, and atmosphere can become part of the interface itself.

**Affective Atmosphere 2046** is a small prototype, but it clarified something important for me. I am less interested in AI as a machine for producing more material than in AI as a medium for shaping the conditions of attention, release, and response.

The cloud helped make that visible.

## Next possibilities

- Replace the current lightweight emotional mapping with a more deliberate interpretation layer
- Design a safe relay so the cloud does not require a local runtime
- Split the project into two modes: a public interface version and an installation version
- Test the piece in a workshop or teaching context
- Explore whether the disappearing text could lead to an anonymous archive of rendered affective states
- Write the other post this one keeps pointing to: the story of the cloud itself

## Resources

- Live prototype:
- GitHub repository:
- SheBuilds:
- Lovable:
- Anthropic:
- WLED:

> I would be curious to know whether this split between public interface and local embodied system feels like a limitation to solve, or the beginning of a more interesting design space.

