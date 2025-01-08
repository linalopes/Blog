---
layout: post
title: Machine learning controlling a motor and multidevices in the same network - preparing for an exhibition room
id: 2024-10-31-machine-learning-controlling-a-motor-and-multidevices-in-the-same-network-preparing-for-an-exhibition-room.md
categories:
  - documentation
  - prototype
  - AI project
image: https://live.staticflickr.com/65535/54118518841_e647960491_z.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-10-31-machine-learning-controlling-a-motor-and-multidevices-in-the-same-network-preparing-for-an-exhibition-room.md
tags:
  - machine-learning
date: 2024-10-31
author: lina
---
**Disclaimer**: This post might be a bit complex, as it intersects with several previous entries. If at any point it seems confusing or you feel like you’re missing some context, please check those earlier posts for reference.

---

# Some history...

<iframe width="380" height="676" src="https://www.youtube.com/embed/GSMAnlBJSCw" title="10 November 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


Today, I want to take you on a journey through a project that has evolved from a simple experiment back in 2020 into a layered exploration of AI and robotics in 2024. Let's begin with the origins: I built a small yellow robot back in 2020, which used to hang around, watching me during my Zoom calls. It was a quirky little companion, but nothing too elaborate. Fast-forward to today, I'm studying Machine Learning and AI for Creative Practices at the University of Bern, where I’m immersed in a module on sensors. This course explores using sensor data from the human body, often sourced from dancers, actors, and other performing artists. We use wearables and webcams to capture data from bodily movements and then feed it into Machine Learning models to explore new possibilities for artistic expression.

For this module, I decided to bring my robot back to life by making it responsive to my hand movements. Using a pre-trained, stable model (MediaPipe) for hand recognition, I created a simple prototype: as I move my hand, the robot's servo motor changes its angle to match. From this initial experiment, I added multiple layers and improvements to refine the system—some of which I've detailed in other posts.

First, I tackled the challenge of controlling the servo motor using the ESP8266. Managing the energy output effectively was key to ensuring smooth and accurate motor control. Next, I explored using Open Sound Control (OSC) to drive the servo motor. The OSC protocol allowed me to expand the system's flexibility, imagining scenarios where the robot could be integrated into a networked setup within an exhibition environment.

_You can see the post [here](https://blog.linalopes.info/halloween-in-motion-understanding-motors-in-creative-technology/)_

This brings me to the idea of creating a local server, enabling multiple devices (screens, ESP8266 units, and other hardware) to interact within a single network. In a small exhibition, this setup would allow each device to communicate seamlessly, opening up possibilities for dynamic interactions through OSC. This step involved testing tools like Reserve and Negroc to create a local server that connects everything within a shared space.

_You can see this [here](https://blog.linalopes.info/exploring-servers-for-creative-technologists-testing-with-reserve/)_

<mark class="hltr-pink">One of the major technical challenges I encountered was ensuring the OSC messages generated from my hand recognition model could control the robot across different devices, not just from the main server.</mark> I managed to use the hands-recognition-interface from my smartphone to control the motor within the network. I now have a solid foundation for exploring networked devices within a shared environment, all controlled by a mix of ML and OSC protocols.

But what I want to celebrate most in this post is the broader vision: Machine Learning for robots. Much of AI today is confined to screens, so I’m eager to push this technology beyond the digital, bringing Machine Learning and AI into physical structures and devices. As a creative technologist, I aim to expand the horizons of AI, exploring ways to make it interact with and respond to the physical world through motors, sensors, and more. This journey is just beginning, and I’m thrilled by the potential it holds for creative applications.

By blending Machine Learning with robotics, I'm trying to bridge the gap between digital intelligence and physical interactivity. It’s a step toward a future where AI doesn’t just live on screens but becomes an integral part of our physical and interactive spaces.

<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/albums/72177720321720645" title="2024 Hands On Machine Learning"><img src="https://live.staticflickr.com/65535/54118980695_41f4b0cbd5.jpg" width="640" height="480" alt="2024 Hands On Machine Learning"/></a>
_more images of the process you can see on Flickr_

---
# Some tutorial...
## Overview

This experiment uses **ml5.js** for hand detection, **OSC (Open Sound Control)** messages to communicate commands, and an **ESP8266** to control a servo motor. The **Reserve** server serves the web interface, and **Ngrok** provides HTTPS access, allowing for both camera access and remote connectivity.

## Prerequisites

1. **Node.js** and **npm** installed.
2. **Ngrok** account and installation (for creating HTTPS tunnels).
3. Basic setup of **ESP8266** with an attached servo motor.
4. **Reserve** server and **OSC** library.

## Step-by-Step Guide

1. Get the [ESP8266 and servo](https://github.com/linalopes/hands-OSC) from the previous project

2. Set Up `hands.html` with ml5.js for Hand Detection
	Use [ml5.js](https://docs.ml5js.org/#/reference/handpose) to detect hand positions and send data via WebSocket to control the ESP8266.

3. Set Up Reserve Server
	Install [Reserve](https://github.com/s4y/reserve) globally and create a server to host your web interface:
```bash
brew install s4y/reserve/reserve
```

4. Set Up OSC
	Install [OSC](https://www.npmjs.com/package/osc) globally
```bash
npm install -g osc
```

5. Prepare the WebSocket and OSC Server
	Create an OSC server using Node.js to communicate with the ESP8266.
	- Extra tip: Install [nodemon](https://www.npmjs.com/package/nodemon)
```bash
npm install -g nodemon
```

6. Use Ngrok to Create an HTTPS Tunnel
	Open an Ngrok tunnel on the port Reserve is using (default `8080`) to make the web interface accessible via HTTPS:
```bash
ngrok http 8080
```
This will generate a public URL (e.g., `https://your-ngrok-id.ngrok.io`) which you can use to access the `hands.html` interface securely.

## The github repository
[GitHub - linalopes/reserve-test](https://github.com/linalopes/reserve-test)

Happy hacking !!
