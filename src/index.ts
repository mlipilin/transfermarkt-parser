import { list } from './api/club';

list('GB1', '2017')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
