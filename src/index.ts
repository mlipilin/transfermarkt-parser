import { list } from './api/matchday';

list('GB1', '2018')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
