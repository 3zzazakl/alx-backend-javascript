import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => results.map((status, value, reason) => ({
    status,
    value: status === 'fulfilled' ? value : String(reason),
  })));
}

export default handleProfileSignup;
