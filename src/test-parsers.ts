import * as fs from 'fs';
import * as path from 'path';

import { club, competition, country, matchday, player, season } from './index';

// const log = console.log;

// async function main(competitionId: string, seasonId: string) {
//     log(`Getting clubs for ${competitionId}, season ${seasonId}`);
//     const clubs = await club.list(competitionId, seasonId);

//     for (const c of clubs) {
//         log(`Getting players for ${c.title}, (id = ${c.id})`);
//         const players = await player.list(c.id, seasonId);
//         log('Players:');
//         log(players);
//         c.players = players;
//     }

//     // console.log('clubs', clubs);
//     fs.writeFileSync(path.join(__dirname, 'temp.json'), JSON.stringify(clubs));
// }

// main('GB1', '2019');

// Club
// club.list('aaa', 'bbb')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Competition
// competition
//     .list(-123)
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Country
// country
//     .list()
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Matchday
matchday
    // .list('aaa', 'bbb')
    // .list('GB1', '2018')
    // .list('GB1', '2090')
    .list(undefined, undefined)
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });

// Player
// player
//     // .list(undefined, undefined)
//     .list(281, '2018')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Season
// season
//     .list('aaa')
//     // .list('GB1')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });
