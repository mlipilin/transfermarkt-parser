import { club, competition, country, matchday, player, season } from './index';

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
// matchday
//     // .list('aaa', 'bbb')
//     .list('GB1', '2018')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Player
player
    .list(undefined, undefined)
    // .list(15, '2018')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });

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
