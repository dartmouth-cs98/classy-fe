import React, { useState } from 'react';
import { H2 } from '../../components/ui/typography';
import uploadImage from '../../services/s3';
import styles from '../../styles/components/Profile.module.css';

export default function Profile() {
  const [pic, setPic] = useState({ url: null, img: null, file: null });

  const onImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Handle null file
    // Get url of the file and set it to the src of preview
    if (file) {
      setPic({ ...pic, img: window.URL.createObjectURL(file), file });
      console.log(pic);
    }
  };

  const onImageSubmit = () => {
    if (pic.file != null) {
      uploadImage(pic.file).then((url) => {
        console.log('hot in on imagesubmit');
        console.log(url);
        setPic({ ...pic, url });
        // use url for content_url and
        // either run your createPost actionCreator
        // or your updatePost actionCreator
      }).catch((error) => {
        // handle error
        console.log('error in submitting image', error);
      });
    }
  };

  return (
    <div className={styles.container}>
      <H2>Profile</H2>
      <input type="file" name="coverImage" onChange={onImageUpload} />
      <button type="button" onClick={onImageSubmit}>submit</button>
    </div>
  );
}
