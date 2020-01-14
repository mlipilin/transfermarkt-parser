import * as club from './api/club';
import * as competition from './api/competition';
import * as country from './api/country';
import * as matchday from './api/matchday';
import * as season from './api/season';

export { club, competition, country, matchday, season };
export default { club, competition, country, matchday, season };

const a = 1;
// club.list('BBBBBBB', '2017');
competition
    .list(189)
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    });
