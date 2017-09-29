opencv-express
==============
**This is an example of how to use [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) in your web apps with express.js or any other serverside node.js framework. A minimalistic [docker image](https://hub.docker.com/r/justadudewhohacks/opencv-nodejs/) is provided with opencv-3.2 and contrib-3.2 + node.js environment set up (nodemon and opencv4nodejs globally installed).**

### Build the image:
``` bash
docker-compose build
```
### Run:
``` bash
docker-compose up
```

## Docker image:
~353mb (compressed size: ~124mb)
- ubuntu: 16.04
- nodejs: v6.11.3
- npm: v3.10.10
- nodemon: 1.12.1
- opencv4nodejs: 2.1.0

## Set up your own image:
If you want to build your own docker image or use a different OpenCV version, you can pull one of the OpenCV 3.x base images: https://hub.docker.com/u/justadudewhohacks/.