/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import axios from 'axios';
import FormData from 'form-data';
import { ROOT_URL } from '../actions/root_url';

export default async function uploadImage(file) {
  let data = new FormData();
  data.append('uploaded_file', file, file.name);

  const response = await axios.post(
    `${ROOT_URL}/upload`,
    data,
    {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    },
  );
  if (response.data.data) {
    return response.data.data;
  }

  console.log('error in uploadImage');
  console.log(response);
}
