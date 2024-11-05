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
date: 2024-10-31
author: lina
---
**Disclaimer**: This post might be a bit complex, as it intersects with several previous entries. If at any point it seems confusing or you feel like you’re missing some context, please check those earlier posts for reference.

---

<img src="https://live.staticflickr.com/65535/54118980695_41f4b0cbd5_z.jpg" width="480" height="640" alt="Untitled"/>

Today, I want to take you on a journey through a project that has evolved from a simple experiment back in 2020 into a layered exploration of AI and robotics in 2024. Let's begin with the origins: I built a small yellow robot back in 2020, which used to hang around, watching me during my Zoom calls. It was a quirky little companion, but nothing too elaborate. Fast-forward to today, I'm studying Machine Learning and AI for Creative Practices at the University of Bern, where I’m immersed in a module on sensors. This course explores using sensor data from the human body, often sourced from dancers, actors, and other performing artists. We use wearables and webcams to capture data from bodily movements and then feed it into Machine Learning models to explore new possibilities for artistic expression.

For this module, I decided to bring my robot back to life by making it responsive to my hand movements. Using a pre-trained, stable model (MediaPipe) for hand recognition, I created a simple prototype: as I move my hand, the robot's servo motor changes its angle to match. From this initial experiment, I added multiple layers and improvements to refine the system—some of which I've detailed in other posts.

First, I tackled the challenge of controlling the servo motor using the ESP8266. Managing the energy output effectively was key to ensuring smooth and accurate motor control. Next, I explored using Open Sound Control (OSC) to drive the servo motor. The OSC protocol allowed me to expand the system's flexibility, imagining scenarios where the robot could be integrated into a networked setup within an exhibition environment.

_You can see the post [here](https://blog.linalopes.info/halloween-in-motion-understanding-motors-in-creative-technology/)_


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


