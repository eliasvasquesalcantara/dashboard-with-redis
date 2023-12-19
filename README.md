# Points table API

## Description
Points table with the player name and points, you can create players, increase their points and get the table.

## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [Contributing](#contributing)

 <a id="prerequisites"></a>
## Prerequisites
You need **Docker** and **Node** installed.

 <a id="installation"></a>
## Installation
```bash
$ npm install
```

 <a id="running-the-app"></a>
## Running the app
```bash

# Run Redis container
$ npm run redis:up

# Starts application
$ npm run start
```

 <a id="usage"></a>
## Usage
Use the endpoints:

#### GET /points-table
```bash
# It'll return the registered players, limited to 10
{
  playerName: string;
  points: number;
}[]
```

#### POST /points-table
```bash
# Create a new player
{
  playerName: string;
}
``` 
 
#### PATCH /points-table/:playerName?points=10
points is optional, default is 5
```bash
``` 

 <a id="technologies-used"></a>
## Technologies used
* NestJS
* Docker
* Redis

 <a id="contributing"></a>
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.