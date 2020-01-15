import { club, competition, country, matchday, player, season } from './index';

club.list('aaa', 'bbb')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });

// country
//     .list()
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });
