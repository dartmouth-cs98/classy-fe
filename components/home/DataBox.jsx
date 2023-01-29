/* eslint-disable no-unused-vars */
import React from 'react';
import { H1, H3 } from '../ui/typography';

function DataBox(props) {
  const {
    width, height, pastelColor, darkColor, text, data,
  } = props;

  return (
    <div style={{
      borderRadius: '30px', height, width, backgroundColor: pastelColor, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '15px 20px 0px 20px',
    }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <H3 style={{ margin: '0px' }} color="var(--navy)">{text}</H3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <H1 color={darkColor}>{data}</H1>
      </div>

    </div>
  );
}

export default DataBox;
