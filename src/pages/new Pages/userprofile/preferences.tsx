import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tab from '../../../components/newComponents/profileComponents/tab';
import { css } from '@emotion/css';
import ProfileBar from '../../../components/newComponents/profileComponents/profileBar';
import Icon from '../../../icons/icons';
import Pagination from '../../../components/pagination';
import Accordian from '../../../components/newComponents/profileComponents/accordianPreferences';

const Profile = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <Tab activeTab={2} />
      <div
        className={css`
          ${Style.p1}
        `}
      >
        <ProfileBar />
        <div>
          <div className={Style.g1}>
            <div className={Style.g2}>
              <div className={Style.g3}>
                <div className={Style.g4}>
                  <div className={Style.g5}>
                    <Icon icon='dollar12' />
                    <p className={Style.g6}>Investment Preferences</p>
                  </div>
                </div>

                <Accordian />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  p1: css`
    max-width: 1119px;
    margin: auto;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 556px) {
      align-items: center;
    }
  `,

  p27: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,

  g1: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  `,
  g2: css`
    margin-top: 24px;
  `,
  g3: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;

    @media (max-width: 1089px) {
      min-width: 100%;
    }
  `,
  g4: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;

    @media (max-width: 534px) {
      flex-wrap: wrap;
    }
  `,
  g5: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  g6: css`
    margin: 0px;

    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.06em;
    margin-left: 7.5px;
    color: #586069;
  `,
  prfcst33: css`
    margin-left: 54px;
    margin-top: 23px;
    @media (max-width: 639px) {
      margin: 23px 12px;
      margin-bottom: 0px;
    }
  `,
};
export default Profile;
