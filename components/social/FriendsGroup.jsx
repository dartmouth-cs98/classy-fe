/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import {
  H1, B1, TextLabel,
} from '../ui/typography';
import photo from '../../images/photo.png';
import photo2 from '../../images/photo2.png';
import styles from '../../styles/components/FriendsGroup.module.css';

function FriendsGroup(props) {
  const { title, state } = props;
  return (
    <div className={styles.container} style={{ opacity: state === 'unselected' ? 0.5 : 1 }}>
      <div className={styles.row}>
        <div className={styles.photoMargin}>
          <Image
            src="https://classy-api-bucket.s3.amazonaws.com/Tran_Vi.png"
            width={100}
            height={100}
            alt="classy logo"
            style={{
              objectFit: 'cover',
              borderRadius: '100px',
              margin: '10px',
            }}
          />
        </div>
        <div className={styles.photoMargin}>
          <Image
            src={photo2}
            width={100}
            height={100}
            alt="classy logo"
            style={{
              objectFit: 'cover',
              borderRadius: '100px',
            }}
          />
        </div>
      </div>
      <div className={styles.middle}>
        <TextLabel color="black" className="text-base font-bold">{title}</TextLabel>
      </div>
      <div className={styles.row}>
        <div className={styles.photoMargin}>
          <Image
            src={photo}
            width={100}
            height={100}
            alt="classy logo"
            style={{
              objectFit: 'cover',
              borderRadius: '100px',
            }}
          />
        </div>
        <div className={styles.photoMargin}>

          <Image
            src={photo2}
            width={100}
            height={100}
            alt="classy logo"
            style={{
              objectFit: 'cover',
              borderRadius: '100px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FriendsGroup;
