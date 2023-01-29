import axios from 'axios';
import ROOT_URL from '../actions';

// code from https://brunchlabs.notion.site/Schedule-7457e761c83f4b37bbbdca10e045b1d9?p=88be408bf5eb4aa987b7bea211258291&pm=s

function getSignedRequest(file) {
  const fileName = encodeURIComponent(file.name);
  // hit our own server to get a signed s3 url
  return axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
}

// return a promise that uploads file directly to S3
// note how we return the passed in url here rather than any return value
// since we already know what the url will be - just not that it has been uploaded
function uploadFileToS3(signedRequest, file, url) {
  return new Promise((fulfill, reject) => {
    axios.put(signedRequest, file, { headers: { 'Content-Type': file.type } }).then((response) => {
      fulfill(url);
      console.log(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

export default async function uploadImage(file) {
  // returns a promise so you can handle error and completion in your component
  const response = await getSignedRequest(file);
  return uploadFileToS3(response.data.signedRequest, file, response.data.url);
}
