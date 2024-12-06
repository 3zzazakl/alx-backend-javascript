import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
//const promise = Promise.reject();
handleResponseFromAPI(promise);
