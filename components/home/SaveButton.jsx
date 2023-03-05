import React from 'react';
import { Button } from '@mui/material';

function SaveButton(props) {
  const { adding, onClick } = props;
  if (!adding) {
    return (
      <Button
        style={{
          width: '100px',
        }}
        size="large"
        variant="contained"
        onClick={onClick}
      >
        Save
      </Button>
    );
  }
  return (
    <Button
      style={{
        width: '100px',
      }}
      size="large"
      variant="contained"
      disabled
    >
      Save
    </Button>
  );
}

export default SaveButton;
