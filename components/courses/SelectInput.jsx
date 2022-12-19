import React from 'react';
import { H4 } from '../ui/typography';

function loadOptions(options) {
  return options?.map((element) => (
    <option key={element.term} value={element.term}>
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

function SelectInput(props) {
  const { name, options } = props;
  return (
    <>
      <label htmlFor={name}><H4>{name}</H4></label>
      <select name={name} id={name}>
        {loadOptions(options)}
      </select>
    </>
  );
}

export default SelectInput;
