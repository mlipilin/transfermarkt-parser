import { list } from './api/country';

list()
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
