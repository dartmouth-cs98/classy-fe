/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FriendsCheckBoxes(props) {
  const { friends, selectedFriends, setSelectedFriends } = props;
  return (
    <Autocomplete
      input={selectedFriends}
      onChange={(event, newValue) => {
        setSelectedFriends(newValue);
      }}
      multiple
      id="checkboxes-tags-demo"
      options={friends}
      disableCloseOnSelect
      getOptionLabel={(option) => `${option.user.firstName} ${option.user.lastName}`}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {`${option.user.firstName} ${option.user.lastName}`}
        </li>
      )}
      style={{ width: '100 %', marginTop: '10px', marginBottom: '10px' }}
      renderInput={(params) => (
        <TextField {...params} />
      )}
    />
  );
}
