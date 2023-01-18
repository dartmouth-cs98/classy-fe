import React, { useState } from 'react';
import SearchBar from '../../components/search/SearchBar';
import FriendsGroup from '../../components/social/FriendsGroup';
import BlackButton from '../../components/BlackButton';
import styles from '../../styles/Social.module.css';

// const startRecommendation = () => {

// };

function Social() {
  const [allFriendsState, setAllFriendsState] = useState('neutral');
  const [dPlanState, setDPlanState] = useState('neutral');
  const [onNextTermState, setOnNextTermState] = useState('neutral');
  const [sameMajorState, setSameMajorState] = useState('neutral');
  const [recButtonState, setRecButtonState] = useState(false);

  const recommendCourse = () => {
    if (recButtonState) {
      // add something here to lead to recommended courses
      setRecButtonState(false);
      setAllFriendsState('neutral');
      setDPlanState('neutral');
      setOnNextTermState('neutral');
      setSameMajorState('neutral');
    } else {
      setAllFriendsState('unselected');
      setDPlanState('unselected');
      setOnNextTermState('unselected');
      setSameMajorState('unselected');
      setRecButtonState(true);
    }
  };

  const setFriendsGroupState = (state, onClickFunction) => {
    if (state === 'selected') {
      onClickFunction('unselected');
    } else {
      onClickFunction('selected');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <SearchBar />
      </div>
      <div className={styles.flexCenter}>
        {allFriendsState === 'neutral'
          ? <FriendsGroup title="All Friends" state={allFriendsState} />
          : (
            <button type="button" className={styles.button} onClick={() => setFriendsGroupState(allFriendsState, setAllFriendsState)}>
              <FriendsGroup title="All Friends" state={allFriendsState} />
            </button>
          )}
        <div className={styles.middleContainer}>
          {dPlanState === 'neutral'
            ? <div><FriendsGroup title="Same D-Plan" state={dPlanState} /></div>
            : (
              <button type="button" className={styles.button} onClick={() => setFriendsGroupState(dPlanState, setDPlanState)}>
                <FriendsGroup title="Same D-Plan" state={dPlanState} />
              </button>
            )}
          <BlackButton title={recButtonState ? 'Done' : 'Recommend me a Course'} onClickFunction={recommendCourse} />
          {dPlanState === 'neutral'
            ? <div><FriendsGroup title="On Next Term" state={onNextTermState} /></div>
            : (
              <button type="button" className={styles.button} onClick={() => setFriendsGroupState(onNextTermState, setOnNextTermState)}>
                <FriendsGroup title="On Next Term" state={onNextTermState} />
              </button>
            )}
        </div>
        <div>
          {dPlanState === 'neutral'
            ? <FriendsGroup title="Same Major" state={sameMajorState} />
            : (
              <button type="button" className={styles.button} onClick={() => setFriendsGroupState(sameMajorState, setSameMajorState)}>
                <FriendsGroup title="Same Major" state={sameMajorState} />
              </button>
            )}

        </div>
      </div>
    </div>
  );
}

export default Social;
