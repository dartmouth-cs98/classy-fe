import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function FriendsCheckBoxes() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={friends}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: '100 %', marginTop: '10px', marginBottom: '10px' }}
      renderInput={(params) => (
        <TextField {...params} />
      )}
    />
  );
}

const friends = [
  { name: 'Alex Feng' },
  { name: 'Henry Kim' },
  { name: 'Gyuri Hwang' },
  { name: 'Alyssa Anderson' },
];
