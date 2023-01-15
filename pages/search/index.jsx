/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import SearchBarPage from '../../components/search/SearchBarPage';
import DefaultBody from '../../components/search/DefaultBody';

function SearchPage() {
  return (
    <SearchBarPage body={<DefaultBody />} />
  );
}

export default SearchPage;
