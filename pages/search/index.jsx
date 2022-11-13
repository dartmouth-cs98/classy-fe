/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useCallback, useEffect } from 'react';
import {
  H1, H2, H3, H4, B1, B3, TextLabel, A,
} from '../../components/ui/typography';
import CourseData from '../../data/data';
import styles from '../../styles/components/TabBar.module.css';

function SearchPage() {
  const [searchInput, setSearchInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [tab, setTab] = useState('All');
  const data = CourseData;
  const [searchResults, setSearchResults] = useState(null);

  const input = useCallback((inputElement) => {
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        input={input}
        setSearchResults={setSearchResults}
      />
      {
        !searchInput
          ? (
            <div>
              <H3>Recent Searches</H3>
              <A>See All</A>
              {/* Load course/prof cards */}
              <CourseCard id="Cosc 98" title="Introductory Economics" distrib="TLA" quality="4.0" reviews="4" />
              <ProfCard name="Natalie Svoboda" department="COSC" />

              <H3>Browse Departments</H3>
              {/* Load all departments */}
              <DepartmentCard name="Computer Science" id="COSC" />
            </div>
          )
          : (
            <div>
              <TabBar tab={tab} setTab={setTab} />
            </div>
          )

      }

    </div>
  );
}

function SearchBar(props) {
  const {
    searchInput, setSearchInput, input, setSearchResults,
  } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setSearchResults(true);
  };

  return (
    <input
      ref={input}
      type="text"
      placeholder="Search"
      onChange={handleChange}
      value={searchInput}
    />
  );
}

function TabBar(props) {
  const tabs = ['All', 'Courses', 'Professors', 'Distribs'];
  const { tab, setTab } = props;
  const tabDivs = tabs.map((tabName) => {
    if (tabName === tab) {
      return (
        <div key={tabName} className={`${styles.tab} ${styles.active}`}>
          <B1 color="var(--lightest-grey)">{tabName}</B1>
        </div>
      );
    }
    return (
      <div key={tabName} onClick={() => setTab(tabName)} className={`${styles.tab} ${styles[tabName]}`}>
        <B1 color="var(--darkest-grey)">{tabName}</B1>
      </div>
    );
  });

  return (
    <div className={styles.tabGroup}>
      {tabDivs}
    </div>
  );
}

function CourseCard(props) {
  const {
    distrib, quality, reviews, id, name,
  } = props;
  return (
    <div>
      <TextLabel color="var(--dark-grey)">{distrib}</TextLabel>

      <div>
        <TextLabel color="var(--darkest-grey)">Quality</TextLabel>
        <H1 color="var(--dark-orange)">{quality}</H1>
        <B3 color="var(--dark-grey)">
          {reviews}
          {' '}
          Reviews
        </B3>

        <H4>{id}</H4>
        <B1>{name}</B1>
      </div>
    </div>
  );
}

function ProfCard(props) {
  const { name, department } = props;
  return (
    <div>
      <div>
        <H4>{name}</H4>
        <B1>{department}</B1>
      </div>
    </div>
  );
}

function DepartmentCard(props) {
  const { name, id } = props;
  return (
    <div>
      <H3 color="var(--dark-orange)">{name}</H3>
      <H2 color="var(--dark-orange)">{id}</H2>
    </div>
  );
}

export default SearchPage;
