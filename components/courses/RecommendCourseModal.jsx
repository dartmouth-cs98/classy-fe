/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IosShareIcon from '@mui/icons-material/IosShare';

import FriendsCheckBoxes from './FriendsCheckBoxes';
import { fetchUser, fetchFriends, updateStudent } from '../../actions';
import { userId } from '../../constants/mockData';

export default function FormDialog(props) {
  const { course } = props;
  const [open, setOpen] = React.useState(false);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.student.friends);
  console.log('in component', user);
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [user.user === {}]);
  useEffect(() => {
    dispatch(fetchFriends(user?.user?.student?._id));
  }, [friends === []]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFriends([]);
  };

  const handleSubmit = () => {
    selectedFriends.forEach((friend) => {
      const coursesRecommended = [...friend.coursesRecommended];
      coursesRecommended.push({
        course: course._id,
        friend: user.user.student._id,
      });
      dispatch(
        updateStudent(friend._id, {
          ...friend,
          coursesRecommended,
        }),
      );
    });
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
          <FriendsCheckBoxes
            friends={friends}
            selectedFriends={selectedFriends}
            setSelectedFriends={setSelectedFriends}
          />
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
          <Button onClick={handleSubmit}>Recommend</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
