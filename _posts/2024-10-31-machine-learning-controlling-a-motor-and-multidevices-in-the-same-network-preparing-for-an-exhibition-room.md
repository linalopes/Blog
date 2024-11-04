---
layout: post
title: Machine learning controlling a motor and multidevices in the same network - preparing for an exhibition room
id: 2024-10-31-machine-learning-controlling-a-motor-and-multidevices-in-the-same-network-preparing-for-an-exhibition-room.md
categories:
  - documentation
  - digital tools
image: assets/images/gepeto.png
share: "true"
comments: "true"
filename: Blog/_posts/2024-10-31-machine-learning-controlling-a-motor-and-multidevices-in-the-same-network-preparing-for-an-exhibition-room.md
tags: 
date: 2024-10-31
author: lina
---
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


