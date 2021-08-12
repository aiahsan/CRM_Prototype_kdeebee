import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css, cx } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/newComponents/io/activityChart';
import ActivitySub from '../../../components/dashboard/expanded/activitysub';
import avt from '../../../images/1.png';
import UserImg from '../../../images/User.png';

import Pagination from '../../../components/pagination';
import { useHistory } from 'react-router-dom';
const Activites = [
  {
    value: 90.47,
    title: 'Project Blue Rainbow',
    lastActitvy: 'Last active:  23 minutes ago',
    status: 'Parameters: 3',
    tag: 'Valid Users: 18',
  },
  {
    value: 50.69,
    title: 'Sarah Thiem',
    lastActitvy: 'Last active:  44 minutes ago',
    status: 'Parameters: 9',
    tag: 'Valid Users: 75',
  },
  {
    value: 28.14,
    title: 'Tom Johnson',
    lastActitvy: 'Last active:  55 minutes ago',
    status: 'Parameters: 10',
    tag: 'Valid Users: 53',
  },
  {
    value: 90.47,
    title: 'James Lennon',
    lastActitvy: 'Last active:  2 hours ago',
    status: 'Parameters: 3',
    tag: 'Parameters: 18',
  },
  {
    value: 50.69,
    title: 'Preethi Mackenzie',
    lastActitvy: 'Last active:  3 hours ago',
    status: 'Parameters: 10',
    tag: 'Valid Users: 75',
  },
  {
    value: 28.14,

    title: 'Marie Carney',
    lastActitvy: 'Last active:  4 hours ago',
    status: 'Parameters: 9',
    tag: 'Valid Users: 53',
  },
  {
    value: 90.47,

    title: 'James Jarret',
    lastActitvy: 'Last active:  5 hours ago',
    status: 'Parameters: 3',
    tag: 'Valid Users: 18',
  },
  {
    value: 50.69,
    title: 'John Steadman',
    lastActitvy: 'Last active:  6 hours ago',
    status: 'Parameters: 10',
    tag: 'Valid Users: 75',
  },
];
export default () => {
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Dashboard', 'Activity']}
        activeIndex={2}
      />
      <Tabs activeTab={3} />
      <div className={Style.g1}>
        <div>
          <div className={Style.g13}>
            <div className={Style.g14}>
              <div className={Style.g15}>
                <div className={Style.g16}>
                  <div className={Style.g17}>
                    <Icon icon='search' />
                    <input className={Style.g18} placeholder='search' />
                  </div>
                </div>
                <button
                  onClick={() => history.push('/smartwatch/investor')}
                  className={css`
                    width: 143px;
                    height: 34px;
                    background: #b6af9d;
                    border: 1px solid #b6af9d;
                    box-sizing: border-box;
                    border-radius: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <Icon icon='puzzle' color='white' />
                  <p
                    className={css`
                      font-weight: bold;
                      font-size: 14px;
                      line-height: 16px;
                      letter-spacing: -0.1em;
                      color: #ffffff;
                      margin: 0px;
                      padding: 0px;
                      margin-left: 4.25px;
                    `}
                  >
                    Add SMART Match
                  </p>
                </button>
              </div>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <input className={Style.g22} type='checkbox' />
                    <Icon icon='puzzle' color='#586069' />
                    <p className={Style.g23}>8 Adhoc SMART Matches</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Sort' />
                  </div>
                </div>
                {Activites.map((x, i) => (
                  <div className={Style.g25}>
                    <Activity
                      color='#8EB6E6'
                      title={x.title}
                      lastActitvy={x.lastActitvy}
                      status={x.status}
                      tag={x.tag}
                      value={x.value}
                      type={0}
                    />
                  </div>
                ))}
              </div>
              <div className={Style.g26}>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  g13: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  g14: css`
    margin-top: 24px;
    margin-left: 29.04px @media (max-width: 425) {
      margin-left: 0px;
    }
  `,
  g15: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  g16: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 728px;
    width: 100%;

    @media (max-width: 320px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  g17: css`
    padding-left: 10px;
  `,

  g18: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  g19: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 980px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  g20: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  g21: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  g22: css`
    margin-right: 7.5px;
  `,
  g23: css`
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
  g24: css`
    display: flex;
    justify-content: space-between;
  `,
  g25: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  g1: css`
    max-width: 980px;
    margin: auto;
    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,

  g26: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  g2: css`
    max-width: 980px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    margin-top: 23px;
  `,
  g3: css`
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
    padding-bottom: 12px;
    margin: 0px;
  `,
  g4: css`
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    background: white;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    padding: 2px 13px;
  `,

  g5: css`
    margin-top: -4px;
    margin-right: 5px;
  `,
};
