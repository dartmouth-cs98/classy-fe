import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IosShareIcon from '@mui/icons-material/IosShare';

import FriendsCheckBoxes from './FriendsCheckBoxes';

export default function RecommendCourseModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClickOpen}
      >
        <IosShareIcon fontSize="large" />
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Recommend This Course</DialogTitle>
        <DialogContent>
          {/* <div style={stylesCI.marginTopBottom}> */}
          <FriendsCheckBoxes />
          {/* </div> */}
          <DialogContentText>
            Your friend is not on Classy? No worries! Enter their email address
            below and we will send them an invite.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Recommend</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
