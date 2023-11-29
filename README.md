# Poker App

This is a React application for a Poker Game, designed to run in a Docker container.

<img width="584" alt="Screen Shot 2023-11-28 at 9 13 34 PM" src="https://github.com/carlosbr86/PokerGame/assets/26756719/c39eab1f-19e7-450f-90a3-bf34620c4436">


## Table of Contents


- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Running in Docker](#running-in-docker)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [Docker](https://www.docker.com/) installed

## Getting Started

### Installation

##Clone the repository:

HTTPS
```
git clone https://github.com/carlosbr86/PokerGame.git
cd PokerGame
```

SSH
```
git@github.com:carlosbr86/PokerGame.git
cd PokerGame
```

## Install dependencies:
```
npm install
```
## Running Locally
To run the app locally, use the following command:
```
npm start
```
The app will be available at http://localhost:3000.

## Running in Docker
Build the Docker image:
```
docker build -t poker-app .
```
## Run the Docker container:
```
docker run -p 3000:3000 poker-app
```
The app will be available at http://localhost:3000.

## Usage

In this app the user needs to input 2 poker hands and press compare hands.

It's expected that the input follow this format
```
3H, 2S, 7H, 10C, JS
```
Where the last character represents the card suit(Spade,Clubs,Hearts,Diamond), and the first portion of the string would be the value of that card (2,3,4,5,6,7,8,9,10,J,Q,K)

