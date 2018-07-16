[![Build Status](https://travis-ci.org/mlipilin/transfermarkt-api.svg?branch=master)](https://travis-ci.org/mlipilin/transfermarkt-api)

Transfermarkt API JavaScript
============================

## Entities

Base:
* Countries
* Competitions
* Seasons
* Clubs
* Players

Specific:
* Matchdays
* Games
* Goals
* Substitutions
* Cards

Base Entity Methods:
* get(id)
* list(parentEntityId?)

How can I get all games data?
1. get list of countries
2. get list of competitions (countryId)
3. get list of seasons (competitionId)
4. get list of games (competitionId, seasonId)
5. get game detail with goals, substitutions and cards (gameId)
