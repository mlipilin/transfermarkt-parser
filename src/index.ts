import { list } from './api/season';

list('L1')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
