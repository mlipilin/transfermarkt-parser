import { club, competition, country, matchday, player, season } from './index';

competition
    .list(189)
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });
