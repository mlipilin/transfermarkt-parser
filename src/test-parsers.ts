import { club, competition, country, matchday, player, season } from './index';

country
    .list()
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });
