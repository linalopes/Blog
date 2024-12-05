---
layout: post
title: Exploring Servers for Creative Technologists - Testing with Reserve
id: 2014-10-27-exploring-servers-for-creative-technologists-testing-with-reserve.md
categories:
  - documentation
  - digital tools
image: https://live.staticflickr.com/65535/54099373823_a90bc7d6da_z.jpg
share: "true"
comments: "true"
filename: Blog/_posts/2024-10-27-exploring-servers-for-creative-technologists-testing-with-reserve.md
tags:
  - server
date: 2024-10-27
author: lina
---
_This prototype is a partnership with Luis Leão 🫀_

### Why Use a Server?

In web-based creative technology projects, a server is essential for serving files—HTML, CSS, JavaScript—over a network so multiple devices can access them simultaneously. This is crucial for creative technologists testing interactive or collaborative experiences across various screens. While there are public servers online, setting up a local server provides better control, lower latency, and privacy, making it ideal for experimental, web-based installations.

### Why Reserve?

**Reserve** is a lightweight tool invented by [Sidney San Martín](https://github.com/s4y), designed to simplify local server creation for fast prototyping. Sidney developed Reserve with creative technologists in mind, integrating features like live reloading and broadcasting updates, which are invaluable in multi-device installations.

### Setting Up Reserve on Your Server Machine

#### Step 1: Installation

To install Reserve, open your terminal, navigate to the directory where you want to install it, and run (Install with Homebrew):
```bash
brew install s4y/reserve/reserve
```

#### Step 2: Start the Server

Navigate to your project directory and start Reserve by entering:
```bash
reserve --http=0.0.0.0:8080  
```
Starts a server accessible on all local network devices
#### Step 3: Finding Your Local IP Address

To access the server from other devices, find your local IP address by running:
```bash
ipconfig getifaddr en0  
```
For macOS; use `ipconfig` on Windows or `hostname -I` on Linux

Share your IP address and port (e.g., `http://192.168.x.x:8080`) with connected devices on the same network to access your content.

#### Step 4: Multi-Device Setup

In this test, I set up three devices:

- **iPad**: displaying a video file.
- **Computer 1**: displaying a slideshow.
- **Computer 2**: acting as the control center with broadcast capability.

### Your Project Files

Below are three files used in the project, designed for testing a multi-device setup. **index.html** displays a slideshow, **video.html** plays a video, and **button.html** has a button to toggle fullscreen.

#### `index.html` (Slideshow)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slideshow</title>
    <style>
        img {
            width: 100%;
            max-width: 600px;
            display: block;
            margin: auto;
        }
    </style>
</head>

<body>
    <img id="slideshow" src="image1.jpg" alt="Slideshow Image">
    <script>
        const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add image paths here
        let index = 0;

        function showNextImage() {
            index = (index + 1) % images.length;
            document.getElementById('slideshow').src = images[index];
        }

        setInterval(showNextImage, 3000); // Change image every 3 seconds

        window.addEventListener("broadcast", e => {
            console.log(e.detail);
        });
    </script>
</body>

</html>

```

#### `video.html` (Video Playback with Fullscreen Toggle with Wake Lock)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video</title>
</head>

<body>
    <video width="100%" controls autoplay loop>
        <source src="video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    
    <button id="fullscreen">Fullscreen</button>

    <script>
        let wakeLock = null;

        // Function that attempts to request a wake lock.
        const requestWakeLock = async () => {
            try {
                wakeLock = await navigator.wakeLock.request('screen');
                wakeLock.addEventListener('release', () => {
                    console.log('Wake Lock was released');
                });
                console.log('Wake Lock is active');
            } catch (err) {
                console.error(`${err.name}, ${err.message}`);
            }
        };

        document.getElementById('fullscreen').addEventListener("click", e => {
            console.log('container click');
            requestWakeLock();
            document.documentElement.requestFullscreen({
                navigationUI: 'hide'
            });
        });
    </script>

</body>

</html>
```

##### Why Wake Lock?

In interactive installations, it's important to prevent devices from going to sleep during use. Adding a wake lock ensures the screens stay on, enhancing the user experience in immersive environments.

#### `button.html` 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Broadcast Button</title>
</head>

<body>
    <button onclick="sendBroadcast()">Broadcast Message</button>

    <script>
        function sendBroadcast() {
            reserve.broadcast({ foo: "bar" });
            console.log("Broadcast sent: { foo: 'bar' }");
        }
    </script>
</body>

</html>
```

### Broadcasting Across Devices

With Reserve, once your server is live, you can share the `localhost` address across your devices (or use a tunneling tool like Localtunnel to share remotely). Reserve’s broadcasting feature lets every connected device instantly reflect any updates you make, allowing seamless testing and synchronized displays across multiple devices.

The broadcast feature in Reserve allows devices to receive real-time updates simultaneously. For instance, if you update the slideshow or send a control command, all connected devices respond instantly. This is particularly useful for synchronized multi-screen experiences.
