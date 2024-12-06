#!/usr/bin/env node

function singUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

export default singUpUser;
