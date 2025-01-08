---
layout: post
title: "'Pulleying' my heart over the network with OSC"
id: 2024-10-23-pulleying-my-heart-over-the-network-with-osc.md
categories:
  - kinetic
  - prototype
image: https://live.staticflickr.com/65535/54090060180_8154d18455_o.jpg
share: "true"
comments: "true"
filename: Blog/_posts/23-10-2024-pulleying-my-heart-over-the-network-with-osc.md
tags:
  - osc
  - motor
  - esp8266
date: 2024-10-23
author: lina
---

<iframe width="380" height="676" src="https://www.youtube.com/embed/cPFE6IlUqrY?autoplay=1&loop=1" title="2024 10 Pulleying my heart" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
_This prototype is a partnership with my amazing husband and friend Fadri Pestalozzi 🫀_

### Understanding Networks, the Internet, and the Web

A **network** is a group of devices (like computers, smartphones, and tablets) that are connected and can share information. This could be within a small area, like a home or office, or across larger distances. Think of a network as the **roads** that let these devices "travel" and communicate with each other.

The **internet** is a **global network**—a massive system of interconnected smaller networks that allows devices around the world to exchange information. Imagine the internet as the **global highway system**, connecting cities and towns (networks) everywhere, so information can move freely from one place to another, regardless of location.

The **web** (World Wide Web), on the other hand, is a **service** that runs on the internet. It’s made up of websites, apps, and media that we access using browsers (like Chrome or Safari). If the internet is the highway system, the **web is like the information and experiences** we access through buildings along those highways—like stores, libraries, or homes. The internet is the infrastructure that lets information travel, while the web is the content that you view and interact with.

---

### What is OSC and Why Does it Work Over Networks?

**OSC (Open Sound Control)** is a protocol used to send messages between devices on a network. It was created in the 1990s as a way to control sound synthesizers, but it has expanded far beyond that. OSC is now used to communicate between all sorts of creative technologies—like interactive installations, music performances, or even lighting systems—allowing them to **talk to each other over a network**.

OSC works over a **network** because it’s designed to send messages from one device (like your phone or laptop) to another (like a sound system or an installation). These messages can carry data, like controlling the volume of a sound or changing a visual effect.

When using tools like **Touch OSC**, you’re sending OSC messages over a network from your phone or tablet. To do this, you need to tell your phone where to send the message. This is where the **IP address** and **port** come in.

- An **IP address** is like the **home address** of a device on the network. It tells the system exactly where to send the message.
- A **port** is like a **door** to a specific service on that device. Devices can have many services running (like receiving OSC messages or hosting a website), and the port tells the message which service to access.

In Touch OSC, you enter the IP address of the device you want to control (for example, your computer running a program) and the port number that device is using to listen for OSC messages.

---
### Using TouchOSC as my control interface

**TouchOSC** is a flexible and versatile app designed to send and receive **OSC (Open Sound Control)** messages. It was first released in 2008 and has since become a popular tool for controlling creative projects like interactive installations, music software, and live performances. It's available for download on the **Apple App Store** and **Google Play Store**, making it accessible on both iOS and Android devices.

The main goal of TouchOSC is to give users a customizable interface to control various digital devices remotely. You can create buttons, sliders, XY pads, and other interactive controls on your phone or tablet. These controls send OSC messages to other devices on the network.

In terms of interface, TouchOSC is quite intuitive and visually adaptable. Users can design their own control layouts to fit their needs, customizing the placement and look of controls. It sends messages over a network, targeting a specific device by using its **IP address** and a **port number** (think of these as the device's "location" and "door" on the network). For example, when you move a slider in TouchOSC, it sends a message like `/right 180` to control the angle of a motor or any other parameter you’ve set up.

<div style="display: flex; justify-content: center;">
<img src="https://live.staticflickr.com/65535/54089607181_652c7183a7_o.jpg" width="300" alt="2024 10 Pulleying my heart"/>

<img src="https://live.staticflickr.com/65535/54089607141_63d639ca00_o.jpg" width="300" alt="2024 10 Pulleying my heart"/>
</div>



---

### What is the ESP8266 and How Does it Work with OSC?

The **ESP8266** is a microcontroller with built-in Wi-Fi capabilities, which makes it perfect for connecting to networks and interacting with other devices wirelessly. In this project, the ESP8266 is used to receive OSC messages and perform actions like moving a servo motor.

To configure the ESP8266 to receive OSC messages, you need to use the **Arduino IDE** and install specific libraries. One crucial library is **ArduinoOSC**, which allows the ESP8266 to understand and communicate using OSC messages. But it doesn’t work alone—you also need some additional libraries:

1. [ **ArduinoOSCWiFi**](https://github.com/hideakitai/ArduinoOSC) – This is the core library that allows the ESP8266 to handle **OSC messages** over a Wi-Fi connection. It abstracts the complexity of both OSC communication and Wi-Fi setup, making it easy to send and receive OSC messages. It relies on other dependencies to manage Wi-Fi and UDP communication.
    
2. [**ArxContainer**](https://github.com/hideakitai/ArxContainer) – This is an important dependency for the **ArduinoOSCWiFi** library. It provides data structures like `vector`, `map`, and `string` that are used by the library to handle and process OSC messages. Since Arduino environments lack these standard data structures, **ArxContainer** fills this gap.
    
3. **ESP8266WiFi** – This library is included in the **ESP8266 core** package and is responsible for connecting the microcontroller to your Wi-Fi network. It handles all the networking tasks, like connecting to a router, getting an IP address, and keeping the connection stable.
    
4. **WiFiUdp** – The **OSC** protocol relies on **UDP (User Datagram Protocol)** to send messages across the network. The **WiFiUdp** library, which comes with the **ESP8266 core**, allows the ESP8266 to send and receive these lightweight UDP packets, ensuring smooth and fast OSC communication.

<img src="https://live.staticflickr.com/65535/54089857268_bf25906829_o.jpg" width="600" alt="2024 10 Pulleying my heart"/>

---

### How Do TouchOSC and the ESP8266 Communicate?

The communication between **TouchOSC** and the **ESP8266** happens over a network, using **OSC messages**. Here’s a simplified explanation of how it works:

1. **TouchOSC Interface**: You create a control, like a slider, in TouchOSC and configure it to send OSC messages. For example, you might configure the slider to send `/servo` with a value from 0 to 180.
    
2. **Network Communication**: When you move the slider, TouchOSC sends a message over the network to the ESP8266. It uses the ESP8266’s **IP address** (to know where to send the message) and a **port number** (to know which service on the ESP8266 should handle the message).
    
3. **ESP8266 Receiving the Message**: The ESP8266, running the ArduinoOSC library, listens for messages on the specified port. When it receives a message like `/servo 180`, it understands that it should move the servo motor to the 180-degree position.
    
4. **Action Based on the Message**: The ESP8266 then executes the command—moving the servo, turning on an LED, or any other action you’ve programmed.
    

In summary, TouchOSC creates and sends messages, and the ESP8266, with the help of the ArduinoOSC and other libraries, understands these messages and performs actions accordingly.

---
### Github
Codes available in the [repository](https://github.com/linalopes/hands-OSC)


<a data-flickr-embed="true" href="https://www.flickr.com/photos/200845412@N02/54089937904/in/album-72177720321468864/" title="2024 10 Pulleying my heart">
<img src="https://live.staticflickr.com/65535/54089937904_5462ec9940_o.png" width="100%" alt="2024 10 Pulleying my heart"/></a>
_click to see more images from the process_

Happy Halloween 🎃
