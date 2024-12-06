#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils'; // eslint-disable-line import/no-unresolved

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(
        `${photoResult.body} ${userResult.firstName} ${userResult.lastName}`
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
