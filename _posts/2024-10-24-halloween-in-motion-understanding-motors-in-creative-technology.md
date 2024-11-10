---
layout: post
title: Halloween in motion - Understanding Motors in Creative Technology
id: 2024-10-24-halloween-in-motion-understanding-motors-in-creative-technology.md
categories:
  - kinetic
  - prototype
image: https://live.staticflickr.com/31337/54090060365_213c0ebf36_z.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-10-24-halloween-in-motion-understanding-motors-in-creative-technology.md
tags:
  - motor
  - esp8266
date: 2024-10-24
author: lina
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/DscH6dXy-6Q?si=YhOcXaCGVj_oXm4d?autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
### Understanding Motors in Creative Technology

A **motor** is a device that converts electrical energy into motion. It’s one of the key components in interactive projects, installations, and robotics, allowing us to add movement and life to our creations. Motors are everywhere, from the tiny motors in your phone's vibration system to large motors in industrial machinery.

#### Types of Motor Movements

There are different types of movements we can achieve with motors, depending on the type we use. Here are some of the main types:

1. **Continuous Rotation Motors**: These motors spin in a full 360-degree rotation continuously, like a fan or a car wheel. They’re great for creating spinning or constant motion.
    
2. **Stepper Motors**: These motors move in precise steps, which makes them perfect for projects where you need **controlled and accurate movement**—like 3D printers or CNC machines. You can tell them to move a specific number of steps and they will stop exactly where you need them.
    
3. **Servo Motors**: These motors are used when you need precise control over a specific range of motion, usually between 0 and 180 degrees. They’re ideal for projects where you need to move something to a specific angle, like in robotic arms or pan-tilt mechanisms.
    

---

### Powering Small Motors in Projects

When we use motors in small creative projects with microcontrollers like **Arduino** or **ESP8266**, we need to think about how to **power** them. Motors need electricity to work, and we have to make sure we give them the right amount.

- **Voltage**: Each motor has a specific voltage it needs to work properly. Some small motors run on 5V (like a USB port), while others need 12V or more. Using the wrong voltage can damage the motor.
    
- **Current**: Motors also draw **current**, measured in amperes (A). The bigger the motor or the stronger the motion required, the more current it will need. Microcontrollers can only supply a small amount of current directly, so we often use an external power source like batteries or a power adapter.
    
- **Torque**: This is the **strength** of the motor, or how much force it can generate. Motors with higher torque can move heavier objects or generate more powerful movements. In creative projects, we usually balance the torque based on the size of our components—too little torque, and the motor won't be able to move things; too much, and you might over-power your setup.

---

### How Motors Fit into Mechanical Systems

Motors by themselves can only spin or move in specific ways, but when we integrate them into **mechanical systems**, we can create more complex and functional movements. For example, if you want to lift something up and down, you need more than just a motor spinning—you need **mechanical parts** to guide that motion.

One common solution is using **pulleys**.

- **What are Pulleys?**: Pulleys are wheels with a groove that a rope or belt runs through. They allow us to control and transfer motion in different directions. In this project, pulleys are used to convert the rotation of the motor into the **up-and-down movement** needed for your system.

In this project, the pulleys are used to create a **tensioned string** system, acting as guides rather than driving the movement themselves. The pulleys create anchor points for the string, which is attached to the fingertip of a hand. As the servo motor rotates between 0 and 180 degrees, the string moves through the pulleys. This tension transfers the rotational motion of the servo to make the hand move up and down. The wrist is anchored to the surface, while the string tension amplifies the servo's half-rotation, creating the desired movement. This setup allows the servo's limited range of motion to effectively control a larger mechanical movement.

<iframe width="380" height="676" src="https://www.youtube.com/embed/FAYStAOTvaA?autoplay=1&loop=1" title="Strings attached" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

_This prototype is a partnership with my amazing husband and friend Fadri Pestalozzi 🫀_

---
### Managing Servo Motors with the ESP8266: Why the Standard Library Didn't Work for My Project

For this prototype, I decided to use the **Micro Servo 9g SG90**. This servo has a full rotation range of **180 degrees** and is commonly used for small projects due to its size and capabilities. Here are some key specifications:

- **Operating Voltage**: 3.0V – 7.2V
- **Rotation Angle**: 180 degrees
- **Speed**: 0.12 sec/60 degrees at 4.8V (without load)
- **Torque**: 1.2 kg.cm at 4.8V and 1.6 kg.cm at 6.0V
- **Operating Temperature**: -30°C to +60°C

I chose the **ESP8266** for this project, mainly because it offered the flexibility of WiFi connectivity, which was a key component for controlling the servo motor remotely using Open Sound Control (OSC) messages (as you can see in the last post). However, I quickly ran into an unexpected issue.

---
### The Problem with the Standard Arduino Servo Library

When I first tried using the **standard Servo library** that is built into the Arduino IDE, I noticed that the servo motor wasn't rotating through the full 180 degrees. It was only moving between **90 and 180 degrees**, limiting the range of motion. After some investigation, I realized that this issue was due to how the ESP8266 handles **Pulse Width Modulation (PWM)**, which is used to control servos.

The standard Servo library is designed with **Arduino boards** in mind, which have a different architecture and PWM handling than the ESP8266. The ESP8266 uses different timers and sometimes struggles to provide the correct signal for full-range servo control due to conflicts with WiFi or other internal tasks.

<img src="https://www.mamuteeletronica.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/6/7/6769cc7643fe434d02a33a103227fefb_1.jpg" width="500px" >

---
### Switching to the ESP8266_ISR_Servo Library

To solve this problem, I switched to the [**ESP8266_ISR_Servo**](https://github.com/khoih-prog/ESP8266_ISR_Servo) library. This library is specifically designed to handle servos on the ESP8266 by using **interrupt service routines (ISRs)**. Here’s why it made the difference:

- **Precise Control**: The library uses interrupts to ensure the PWM signal sent to the servo is consistent and precise, even when the ESP8266 is handling other tasks like WiFi communication.
- **Full 180 Degrees Rotation**: Unlike the standard Servo library, the ISR-based approach ensures the servo motor can rotate through the full 180 degrees. This was critical for my project since I needed the complete range of motion for proper functionality.
- **Multi-Servo Support**: While I only used one servo in this project, the ESP8266_ISR_Servo library can handle up to 16 servos simultaneously, making it more scalable if you're working with multiple motors.

---
### What to Keep in Mind When Using the ESP8266 for Servos

If you're working with servo motors on the ESP8266, there are a few key things to keep in mind:

1. **PWM Frequency**: Servos expect a specific PWM signal (around **50Hz**). The standard Servo library on the ESP8266 may not reliably provide this frequency because the ESP8266 is handling many tasks in parallel, including WiFi.
    
2. **Timer Conflicts**: The ESP8266 uses timers for various processes (WiFi, interrupts, etc.), and this can interfere with precise servo control if you're using the standard Servo library. The ISR-based library bypasses these conflicts by using dedicated interrupt-based PWM control.
    
3. **Power Supply**: Servos like the SG90 require stable power, especially if you want smooth motion across the full 180 degrees. Make sure the servo is powered independently of the ESP8266's onboard power supply, as the board might not provide enough current for both the ESP8266 and the servo.
---
### Github
Codes available in the [repository](https://github.com/linalopes/hands-OSC)


<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/albums/72177720321468864" title="2024 10 &#x27;Pulleying&#x27; my heart"><img src="https://live.staticflickr.com/65535/54090060180_d803357e7c_z.jpg" width="640" height="480" alt="2024 10 &#x27;Pulleying&#x27; my heart"/></a>
_click to see more images from the process_

Happy Halloween 🎃