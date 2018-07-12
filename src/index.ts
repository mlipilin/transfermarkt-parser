import { list } from './api/competition';

list(50)
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
