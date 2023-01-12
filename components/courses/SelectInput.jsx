import React from 'react';
import { H4 } from '../ui/typography';

function loadOptions(options) {
  return options?.map((element) => (
    // eslint-disable-next-line no-underscore-dangle
    <option key={`${element._id}`} value={`${element._id}`}>
      {element.professors}
      {' '}
      (
      {element.term}
      ,
      {' '}
      {element.period}
      )
    </option>
  ));
}

function loadUsers(users) {
  return users?.map((element) => (
    // eslint-disable-next-line no-underscore-dangle
    <option key={`${element._id}`} value={`${element._id}`}>
      {`${element.firstName} ${element.lastName}`}
    </option>
  ));
}

function SelectInput(props) {
  const { name, options, onInputChange } = props;
  return (
    <>
      <label htmlFor={name}><H4>{name}</H4></label>
      <select name={name} id={name} onChange={onInputChange}>
        {name === 'Offering' ? loadOptions(options) : loadUsers(options)}
      </select>
    </>
  );
}

export default SelectInput;
