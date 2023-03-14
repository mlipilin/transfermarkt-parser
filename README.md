# Transfermarkt Parser &middot; [![npm version](https://img.shields.io/npm/v/transfermarkt-parser.svg?style=flat)](https://www.npmjs.com/package/transfermarkt-parser)

Set of javascript parsers for https://www.transfermarkt.com website.

Demo: https://mlipilin.github.io/transfermarkt-parser

## Installation

You can install this library using NPM:

```bash
npm install transfermarkt-parser
```

or Yarn:

```bash
yarn add transfermarkt-parser
```

## Usage

```javascript
import { country } from 'transfermarkt-parser'

const countries = await country.list()
```

## Available parsers

### Country

```javascript
import { country } from 'transfermarkt-parser'

// Get all countries
const countries = await country.list()

// [
//   {
//     "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/1.png",
//     "id": 1,
//     "title": "Afghanistan"
//   },
//   {
//     "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/3.png",
//     "id": 3,
//     "title": "Albania"
//   },
//   ...
//   {
//     "flagUrl": "https://tmssl.akamaized.net//images/flagge/small/187.png",
//     "id": 187,
//     "title": "Zimbabwe\""
//   }
// ]
```

### Competition

```javascript
import { competition } from 'transfermarkt-parser'

// Get all available competitions for England
const competitions = await competition.list(189)

// [
//   {
//     "countryId": 189,
//     "id": "GB1",
//     "logoUrl": "https://tmssl.akamaized.net//images/logo/normal/gb1.png",
//     "title": "Premier League"
//   },
//   {
//     "countryId": 189,
//     "id": "GB2",
//     "logoUrl": "https://tmssl.akamaized.net//images/logo/normal/gb2.png",
//     "title": "Championship"
//   },
//   ...
//   {
//     "countryId": 189,
//     "id": "GBFL",
//     "logoUrl": "https://tmssl.akamaized.net//images/logo/normal/gbfl.png",
//     "title": "EFL Trophy"
//   }
// ]
```

### Season

```javascript
import { season } from 'transfermarkt-parser'

// Get all available seasons for English Premier League
const seasons = await season.list('GB1')

// [
//   {
//     "competitionId": "GB1",
//     "id": "2022",
//     "title": "22/23"
//   },
//   {
//     "competitionId": "GB1",
//     "id": "2021",
//     "title": "21/22"
//   },
//   ...
//   {
//     "competitionId": "GB1",
//     "id": "1992",
//     "title": "92/93"
//   }
// ]
```

### Club

```javascript
import { club } from 'transfermarkt-parser'

// Get all clubs for English Premier League (season 22/23)
const clubs = await club.list('GB1', '2022')

// [
//   {
//     "id": 281,
//     "logoUrl": "https://tmssl.akamaized.net//images/wappen/head/281.png",
//     "title": "Manchester City"
//   },
//   {
//     "id": 631,
//     "logoUrl": "https://tmssl.akamaized.net//images/wappen/head/631.png",
//     "title": "Chelsea FC"
//   },
//   ...
//   {
//     "id": 989,
//     "logoUrl": "https://tmssl.akamaized.net//images/wappen/head/989.png",
//     "title": "AFC Bournemouth"
//   }
// ]
```

### Matchday

```javascript
import { matchday } from 'transfermarkt-parser'

// Get all matchdays for English Premier League (season 22/23)
const matchdays = await matchday.list('GB1', '2022')

// [
//   {
//     "competitionId": "GB1",
//     "id": 1,
//     "seasonId": "2022",
//     "title": "1.Matchday"
//   },
//   {
//     "competitionId": "GB1",
//     "id": 2,
//     "seasonId": "2022",
//     "title": "2.Matchday"
//   },
//   ...
//   {
//     "competitionId": "GB1",
//     "id": 38,
//     "seasonId": "2022",
//     "title": "38.Matchday"
//   }
// ]
```

### Game

```javascript
import { game } from 'transfermarkt-parser'

// Get all games for Matchday 1 of English Premier League (season 22/23)
const games = await game.list('GB1', '2022', 1)

// [
//   {
//     "club1Goals": 0,
//     "club2Goals": 2,
//     "club1Id": 873,
//     "club2Id": 11,
//     "competitionId": "GB1",
//     "id": "3837814",
//     "matchday": 1,
//     "seasonId": "2022"
//   },
//   {
//     "club1Goals": 2,
//     "club2Goals": 2,
//     "club1Id": 931,
//     "club2Id": 31,
//     "competitionId": "GB1",
//     "id": "3837815",
//     "matchday": 1,
//     "seasonId": "2022"
//   },
//   ...
//   {
//     "club1Goals": 0,
//     "club2Goals": 2,
//     "club1Id": 379,
//     "club2Id": 281,
//     "competitionId": "GB1",
//     "id": "3837823",
//     "matchday": 1,
//     "seasonId": "2022"
//   }
// ]
```

### Player

```javascript
import { player } from 'transfermarkt-parser'

// Get all players for Manchester City (season 22/23)
const players = await player.list(281, '2022')

// [
//   {
//     "id": 238223,
//     "name": "Ederson",
//     "birthday": "1993-08-17",
//     "nationalities": [
//       "Brazil",
//       "Portugal"
//     ],
//     "number": 31,
//     "photoUrl": "https://img.a.transfermarkt.technology/portrait/big/238223-1661978747.jpg?lm=1",
//     "position": "Goalkeeper"
//   },
//   {
//     "id": 85941,
//     "name": "Stefan Ortega",
//     "birthday": "1992-11-06",
//     "nationalities": [
//       "Germany",
//       "Spain"
//     ],
//     "number": 18,
//     "photoUrl": "https://img.a.transfermarkt.technology/portrait/big/85941-1668065114.jpg?lm=1",
//     "position": "Goalkeeper"
//   },
//   ...
//   {
//     "id": 576024,
//     "name": "Julián Álvarez",
//     "birthday": "2000-01-31",
//     "nationalities": [
//       "Argentina"
//     ],
//     "number": 19,
//     "photoUrl": "https://img.a.transfermarkt.technology/portrait/big/576024-1661978290.jpg?lm=1",
//     "position": "Centre-Forward"
//   }
// ]
```
