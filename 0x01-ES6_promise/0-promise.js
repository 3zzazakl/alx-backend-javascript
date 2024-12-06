#!/usr/bin/env node
// return a resolved promise
function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve('Response from API');
  });
}

// export function so it can be used in other files
export default getResponseFromAPI;
