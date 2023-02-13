import axios from 'axios';
import { ROOT_URL } from '../actions';
import FormData from 'form-data';

export default async function uploadImage(file) {
  let data = new FormData();
  data.append('uploaded_file', file, file.name);

  const response =
    await axios.post(`${ROOT_URL}/upload`, data,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      }
    )
  if (response.data.data) {
    return response.data.data
  }
  else {
    console.log("error in uploadImage")
    console.log(response)
  }
}
