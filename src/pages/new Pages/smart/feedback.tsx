import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import LeftBar from '../../../components/newComponents/io/leftBar';
import Activity from '../../../components/newComponents/io/activityChart';
import Dropdown from '../../../components/dropdown';
import UserImg from '../../../images/User.png';
import Pagination from '../../../components/pagination';
import BreadButtons from '../../../components/newComponents/io/breadButtons';
import avt from '../../../images/1.png';
import Profile from '../../../components/newComponents/io/profileBar';
import SideMenu from '../../../components/sidemenu';
import { useHistory } from 'react-router-dom';

const List = [
  {
    profile: {
      img: avt,
      title: 'Joern Czech',
      LastActive: ' 23 minutes ago',
    },
    answer: 0,
    feedback:
      'Has limited liquidity but may change soon. The IO is very much of',
    by: 'Markus Scheper',
  },
  {
    profile: {
      img: avt,
      title: 'Leah Cox',
      LastActive: ' 23 minutes ago',
    },
    answer: 0,
    feedback:
      'Has limited liquidity but may change soon. The IO is very much of',
    by: 'Investor',
  },
  {
    profile: {
      img: avt,
      title: 'Markus Scheper',
      LastActive: ' 6 minutes ago',
    },

    answer: 1,
    feedback:
      'Has limited liquidity but may change soon. The IO is very much of',
    by: 'Markus Scheper',
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    answer: 0,
    feedback:
      'Has limited liquidity but may change soon. The IO is very much of',
    by: 'Joern Czech',
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    answer: 1,
    feedback: '',
    by: '',
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    answer: 0,
    feedback: '',
    by: '',
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    answer: 1,
    feedback:
      'Has limited liquidity but may change soon. The IO is very much of',
    by: 'Joern Czech',
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    answer: 2,
    feedback: '',
    by: 'Submit Feedback',
  },
];
export default () => {
  const history = useHistory();

  return (
    <>
      <TopBar />
      <Breadcrumb list={['Opportunities', 'SMART Match']} activeIndex={1} />
      <Tabs activeTab={3} />
      <div className={Style.g2}>
        <p className={Style.g3}>Project Storebox</p>
        <button className={Style.g4}>
          <div
            className={Style.g5}
            onClick={() => history.push('/smartwatch/investor/edit')}
          >
            <Icon icon='puzzle' />
          </div>{' '}
          Edit SMART Match
        </button>
      </div>
      <div className={Style.g1}>
        <div className={Style.sp3}>
          <SideMenu
            onClick={() => history.push('/smartwatch/investor')}
            isActive={false}
            islast={false}
            title='By Investor'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/parameter')}
            isActive={false}
            islast={false}
            title='By Parameter'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/insight')}
            isActive={false}
            islast={false}
            title='Insights'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/feedback')}
            isActive={true}
            islast={true}
            title='Feedback'
          />
        </div>

        <div>
          <div className={Style.g13}>
            <div className={Style.g14}>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <img src={UserImg} />
                    <p className={Style.g23}>57 Investors Approached</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Answer' />
                    <Dropdown title='By' />
                    <Dropdown title='Sort' />
                  </div>
                </div>
                <div
                  className={css`
                    overflow: auto;
                  `}
                >
                  <table
                    className={css`
                      @media (max-width: 768px) {
                        width: 768px;
                      }
                    `}
                  >
                    <thead>
                      <tr
                        className={css`
                          border-bottom: 1px solid #e1e4e8;
                        `}
                      >
                        <td
                          className={css`
                            width: 307.5px;
                            ${Style.g27}
                          `}
                        ></td>
                        <td
                          className={css`
                            width: 78px;
                            padding: 0px 8.5px;
                            border-right: 1px dashed #e1e4e8;
                            ${Style.g27}
                            ${Style.g28}
                          `}
                        >
                          Answer
                        </td>
                        <td
                          className={css`
                            width: 243px;
                            ${Style.g27}
                            ${Style.g28}
                          text-align:center;
                            border-right: 1px dashed #e1e4e8;
                          `}
                        >
                          Feedback
                        </td>
                        <td
                          className={css`
                            width: 97px;
                            ${Style.g27}
                            ${Style.g28}
                          text-align:center;
                          `}
                        >
                          By
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {List.map((x, i) => (
                        <tr
                          className={css`
                            border-bottom: 1px solid #e1e4e8;
                          `}
                        >
                          <td
                            className={css`
                              ${x.profile == undefined
                                ? 'padding:30px 0px'
                                : ''}
                            `}
                          >
                            {x.profile ? (
                              <Profile
                                img={x.profile?.img}
                                title={x.profile?.title}
                                LastActive={x.profile?.LastActive}
                                type={1}
                              />
                            ) : (
                              <></>
                            )}
                          </td>
                          <td
                            className={css`
                              text-align: center;
                              padding-right: 20px;
                              border-right: 1px dashed #e1e4e8;
                            `}
                          >
                            <Icon
                              icon={
                                x.answer == 0
                                  ? 'tick'
                                  : x.answer == 1
                                  ? 'cancel'
                                  : 'dash'
                              }
                            />
                          </td>
                          <td
                            className={css`
                              padding: 0px 13px;
                              border-right: 1px dashed #e1e4e8;

                              ${Style.g27}
                            `}
                          >
                            {x.feedback}
                          </td>
                          <td
                            className={css`
                              padding: 0px 10px;
                              ${Style.g27}
                            `}
                          >
                            {List.length - 1 == i ? (
                              <a href='/smartwatch/feeback/submit'> {x.by}</a>
                            ) : (
                              x.by
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  sp3: css`
    margin-top: 25px;
  `,
  g13: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;

    @media (max-width: 768px) {
      display: initial;
    }
  `,
  g14: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,
  g15: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 728px;
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
    min-width: 728px;
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
    max-width: 190px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  g25: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  g1: css`
    max-width: 979px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,

  g26: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  g2: css`
    max-width: 979px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    margin: auto;
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
  g27: css`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.03em;
    color: #000000;
  `,
  g28: css`
    padding: 20px 0px;
  `,
};
