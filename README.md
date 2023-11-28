# Poker App

This is a React application for a poker game, designed to run in a Docker container.

## Table of Contents


- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Running in Docker](#running-in-docker)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [Docker](https://www.docker.com/) installed

## Getting Started

### Installation

#Clone the repository:

```
git clone https://github.com/carlosbr86/PokerGame.git
cd poker-app
```

#Install dependencies:
```
npm install
```
#Running Locally
To run the app locally, use the following command:
```
npm start
```
The app will be available at http://localhost:3000.

#Running in Docker
Build the Docker image:
```
docker build -t poker-app .
```
#Run the Docker container:
```
docker run -p 3000:3000 poker-app
```
The app will be available at http://localhost:3000.