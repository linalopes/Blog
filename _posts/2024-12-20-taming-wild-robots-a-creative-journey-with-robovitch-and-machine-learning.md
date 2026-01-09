---
layout: post
title: Taming Wild Robots - A Creative Journey with Robovitchch and Machine Learning
id: 2024-12-20-taming-wild-robots-a-creative-journey-with-Robovitchch-and-machine-learning.md
categories:
  - documentation
image: https://live.staticflickr.com/65535/54254677120_f8b87e330d_k.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-12-20-taming-wild-robots-a-creative-journey-with-robovitch-and-machine-learning.md
tags:
  - machine-learning
  - robot
  - ai
date: 2024-12-20
author: lina
---
If I were a circus performer, my daughter once told me, I’d be the **tamer of wild robots**. This whimsical observation inspired me to take a small but ferocious robot I created back in 2020—**Robovitch**—and teach it a few tricks. Or, as I like to say, to domesticate it. This project is not just about building a functional robot; it’s about bringing creativity, storytelling, and technology together. And it’s a process I believe designers, educators, and technologists will love.

## **The Idea: A Robot That Listens to Your Hands**

Robovitch, my small robotic companion, now understands three distinct hand gestures thanks to **Machine Learning**. Here’s what it does:

- **Fist closed**: Robovitch shakes its head, as if saying "No."
- **Two fingers pointing at the webcam**: Robovitch leans forward, curious and inquisitive.
- **Neutral (no gesture)**: Robovitch stays calm, returning to its neutral posture.

Through the magic of machine learning, I trained Robovitch to recognize these gestures using **Teachable Machine**, a beginner-friendly tool by Google that allows anyone to create custom machine learning models. This model runs live through a webcam, detecting gestures in real time and sending instructions to the robot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QqyrFc_gQtg?si=VQ8htbXOJbXfUmj6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## **Tools: Connecting the Pieces**

To bring this vision to life, I used a combination of software and hardware. Here’s how it all connects:

### **1. Gesture Recognition with Teachable Machine**

Teachable Machine is a powerful and intuitive tool by Google, designed to make machine learning accessible. It allows you to train a model by uploading data or directly recording samples through your webcam. Once trained, the model can recognize gestures, images, sounds, and more.  
I used it to train a model that detects three hand gestures: a fist, two fingers, and no gesture. This model runs seamlessly on the web, making it easy to integrate with creative coding platforms like **p5.js**.

### **2. Real-Time Interaction with p5.js and ml5.js**

The project’s front end is powered by **p5.js**, a JavaScript library that excels at creative coding. It handles:

- **Webcam Access**: p5.js allows easy integration of webcam feeds for real-time interaction.
- **Canvas Drawing**: It renders the webcam feed alongside gesture recognition results.

For machine learning, I used **ml5.js**, a friendly JavaScript library built on TensorFlow.js. It loads the Teachable Machine model and handles gesture classification.

### **3. Bridging Software and Hardware with Arduino**

Robovitch’s movements are powered by **three servo motors** controlled by an **Arduino board**. The servos adjust based on the gesture detected, giving Robovitch its “personality”: shaking its head, leaning forward, or staying still.

To connect the web-based interface with the Arduino, I used **p5.serialcontrol**, a lightweight tool that establishes a serial connection between JavaScript and the board. This step isn’t straightforward, as JavaScript typically doesn’t connect to hardware due to security restrictions, but p5.serialcontrol bridges that gap seamlessly.

---

## **The Story: Creativity Meets Technology**

I wanted Robovitch to feel more like a performer than a robot. When I close my fist, it’s like Robovitch is stubbornly saying “No.” When I raise two fingers, it looks inquisitive. And when I do nothing, it quietly returns to its default state.  
These little gestures make Robovitch feel alive, showing how **machine learning** can take something as abstract as code and translate it into expressive physical actions.

This project is more than a playful experiment; it’s a gateway into the fascinating intersection of **machine learning and robotics**. Machine learning is often seen as something confined to the digital realm—web interfaces, apps, and algorithms. But projects like this show how it can be brought into the physical world, allowing machines to respond dynamically to human input.

As a designer, educator, or creative technologist, think of the possibilities:

- Robots that interact with their environment in creative ways.
- Machines that adapt to human gestures, expressions, or even emotions.
- Tools for teaching machine learning concepts through hands-on projects.

---


<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/albums/72177720323049067" title="2024 12 Taming Wild Robots"><img src="https://live.staticflickr.com/65535/54254497698_2f948d7501.jpg" width="640" height="480" alt="2024 12 Taming Wild Robots"/></a>

## **The Technical Breakdown**

Let's break down the technical details, step by step:

1. How to train a model in **Teachable Machine**.
2. How to integrate the model with **p5.js** and **ml5.js**.
3. How to connect p5.js to an **Arduino** via **p5.serialcontrol**.
4. How to control servos using gestures.

### **Step 1: Train Your Model on Teachable Machine**

1. **Access Teachable Machine**: [https://teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com).
2. **Create a New Image Project**:
    - Add three classes:
        - **Neutral**: No gesture.
        - **No Pose**: Closed fist.
        - **Curious**: Two fingers pointing.
    - Record several examples for each class using your webcam.
3. **Export the Model**:
    - Click **Export Model** → **TensorFlow.js**.
    - Upload (shareable link)

### **Step 2: Set Up Your Web Interface with p5.js**

**Load Your Model with ml5.js**:

```javascript
let classifier, video, label;

function preload() {
  classifier = ml5.imageClassifier('my_url', modelLoaded);
}

function modelLoaded() {
  console.log('Model Loaded!');
  classifyVideo();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  console.log(label);
  classifyVideo();
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(16);
  text(`Label: ${label}`, 10, height - 10);
}
```
### **Step 3: Connect Arduino and Servos**

1. **Arduino Setup**:
    
    - Connect three servo motors to pins 9, 10, and 11.
    - Upload the following code to the Arduino:

```cpp
#include <Servo.h>

Servo servoBase, servoWhite, servoBlack;

void setup() {
  Serial.begin(9600);
  servoBase.attach(9);
  servoWhite.attach(10);
  servoBlack.attach(11);
}

void loop() {
  if (Serial.available()) {
    char command = Serial.read();
    if (command == '0') neutralPose();
    if (command == '1') noPose();
    if (command == '2') curiousPose();
  }
}

void neutralPose() {
  servoBase.write(90);
  servoWhite.write(90);
  servoBlack.write(90);
}

void noPose() {
  servoBase.write(60);
}

void curiousPose() {
  servoBase.write(90);
  servoWhite.write(180);
}
```

2. **Set Up p5.serialcontrol**:

- Download and launch [p5.serialcontrol](https://github.com/p5-serial/p5.serialcontrol).
- Connect to the correctport for your Arduino.

### **Step 4: Link p5.js and Arduino**

1. **Modify p5.js Code**:
    - Add serial communication to send commands based on the detected gesture:

```javascript
let serial;

function setup() {
  // Serial setup
  serial = new p5.SerialPort();
  serial.open('/dev/ttyUSB0'); // Replace with your Arduino's port
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;

  // Send commands to Arduino
  if (label === 'Neutral') serial.write('0');
  if (label === 'No Pose') serial.write('1');
  if (label === 'Curious') serial.write('2');

  classifyVideo();
}

```

### **Step 5: Test and Debug**

1. **Verify Webcam and Classification**:
    - Confirm that the p5.js interface correctly identifies gestures.
2. **Test Servo Movements**:
    - Ensure the Arduino receives commands and servos move accordingly.

## GitHub Repository
https://github.com/linalopes/taming-robovitch/tree/main

Happy coding!