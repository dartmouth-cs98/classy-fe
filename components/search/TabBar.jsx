/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import { B1 } from '../ui/typography';
import styles from '../../styles/components/TabBar.module.css';

function TabBar(props) {
  const tabs = ['Courses', 'Professors', 'Users'];
  const colors = ['var(--pastel-green)', 'var(--pastel-orange)', 'var(--pastel-blue)'];
  const { tab, setTab } = props;
  const tabDivs = tabs.map((tabName, index) => {
    if (tabName === tab) {
      return (
        <div key={tabName} className={`${styles.tab} ${styles.active}`}>
          <B1 color="var(--lightest-grey)">{tabName}</B1>
        </div>
      );
    }
    return (
      <div
        key={tabName}
        onClick={() => setTab(tabName)}
        className={styles.tab}
        style={{ background: colors[index] }}
      >
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

export default TabBar;
