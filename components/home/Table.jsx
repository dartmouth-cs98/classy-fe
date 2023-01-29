/* eslint-disable no-unused-vars */
import React from 'react';
import { B1 } from '../ui/typography';

function Table(props) {
  const {
    data,
  } = props;

  return (
    <div style={{
      display: 'flex', flexDirection: 'row', gap: '70px', alignItems: 'flex-start', padding: '20px 30px 0px 30px', width: '100%', height: '100%', overflow: 'scroll',
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', width: '100px', gap: '20px',
      }}
      >
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>COSC050.001</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>WRIT5</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>LING1</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>COSC050.001</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>WRIT5</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>LING1</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>COSC050.001</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>WRIT5</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>LING1</B1>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', width: '300px', gap: '20px',
      }}
      >
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Software Design and Implementation</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Expository Writing</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Introductory Linguistics</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Software Design and Implementation</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Expository Writing</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Introductory Linguistics</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Software Design and Implementation</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Expository Writing</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>Introductory Linguistics</B1>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', width: '50px', gap: '20px',
      }}
      >
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>44X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>55X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>20S</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>44X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>55X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>20S</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>44X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>55X</B1>
        <B1 style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>20S</B1>
      </div>

    </div>
  );
}

export default Table;
