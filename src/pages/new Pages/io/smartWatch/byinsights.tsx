import Breadcrumb from '../../../../components/crumbread';
import TopBar from '../../../../components/topBar';
import Tabs from '../../../../components/newComponents/io/tabs';
import { css } from '@emotion/css';
import Icon from '../../../../icons/icons';
import LeftBar from '../../../../components/newComponents/io/leftBar';
import Dropdown from '../../../../components/dropdown';
import UserImg from '../../../../images/User.png';
import BreadButtons from '../../../../components/newComponents/io/breadButtons';
import avt from '../../../../images/1.png';
import Profile from '../../../../components/newComponents/io/profileBar';
import { theme } from '../../../../styles/theme';

const List = [
  {
    profile: {
      img: avt,
      title: 'Joern Czech',
      LastActive: ' 23 minutes ago',
    },
    investorsNo: 18,
    interested: 8,
    declined: 3,
    answered: 7,
    answeredper: 61,
  },
  {
    profile: {
      img: avt,
      title: 'Leah Cox',
      LastActive: ' 23 minutes ago',
    },
    investorsNo: 12,
    interested: 6,
    declined: 4,
    answered: 2,
    answeredper: 83,
  },
  {
    profile: {
      img: avt,
      title: 'Markus Scheper',
      LastActive: ' 6 minutes ago',
    },
    investorsNo: 11,
    interested: 7,
    declined: 1,
    answered: 3,
    answeredper: 73,
  },
  {
    profile: {
      img: avt,
      title: 'BD Partner ABC',
      LastActive: ' 4 minutes ago',
    },
    investorsNo: 8,
    interested: 3,
    declined: 0,
    answered: 5,
    answeredper: 38,
  },

  {
    profile: {
      img: avt,
      title: 'BD Partner XYZ',
      LastActive: ' 4 minutes ago',
    },
    investorsNo: 4,
    interested: 2,
    declined: 0,
    answered: 0,
    answeredper: 50,
  },
  {
    profile: {
      img: avt,
      title: 'IANUA Sales Person ABC',
      LastActive: ' 2 minutes ago',
    },
    investorsNo: 2,
    interested: 0,
    declined: 1,
    answered: 1,
    answeredper: 50,
  },
  {
    profile: {
      img: avt,
      title: 'IANUA Sales Person XYZ',
      LastActive: '8 minutes ago',
    },
    investorsNo: 2,
    interested: 1,
    declined: 0,
    answered: 1,
    answeredper: 50,
  },
  {
    investorsNo: 57,
    interested: 27,
    declined: 9,
    answered: 21,
    answeredper: 63,
  },
];
export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Directory', 'Project Fluid']}
        activeIndex={2}
      />
      <Tabs activeTab={3} />

      <div className={Style.g1}>
        <LeftBar />
        <div>
          <div className={Style.g2}>
            <p className={Style.g3}>SMART Match Results</p>
            <button className={Style.g4}>
              <div className={Style.g5}>
                <Icon icon='puzzle' />
              </div>{' '}
              Edit SMART Match
            </button>
          </div>
          <BreadButtons active={2} />
          <div className={Style.g13}>
            <div className={Style.g14}>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <input className={Style.g22} type='checkbox' />
                    <img src={UserImg} />
                    <p className={Style.g23}>7 Relationship Managers</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Sort' />
                  </div>
                </div>
                <div>
                  <div
                    className={css`
                      overflow: auto;
                    `}
                  >
                    <table
                      className={css`
                        @media (max-width: 590px) {
                          width: 600px;
                        }
                      `}
                    >
                      <thead>
                        <tr
                          className={css`
                            border-bottom: 1px solid ${theme.colorWhite3};
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
                              border-right: 1px dashed ${theme.colorWhite3};
                              ${Style.g27}
                              ${Style.g28}
                            `}
                          >
                            # Investors
                          </td>
                          <td
                            className={css`
                              width: 79px;
                              padding: 0px 11.5px;
                              ${Style.g27}
                              ${Style.g28}
                            `}
                          >
                            Interested
                          </td>
                          <td
                            className={css`
                              width: 67px;
                              padding: 0px 9.5px;
                              ${Style.g27}
                              ${Style.g28}
                            `}
                          >
                            Declined
                          </td>
                          <td
                            className={css`
                              width: 97px;
                              padding: 0px 8.5px;
                              border-right: 1px dashed ${theme.colorWhite3};
                              ${Style.g27}
                              ${Style.g28}
                            `}
                          >
                            Not Answered
                          </td>
                          <td
                            className={css`
                              width: 97.5px;
                              padding: 0px 14px 0px 10.5px;
                              ${Style.g27}
                            `}
                          >
                            Answered (%)
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {List.map((x, i) => (
                          <tr
                            key={i}
                            className={css`
                              border-bottom: 1px solid ${theme.colorWhite3};
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
                                />
                              ) : (
                                <></>
                              )}
                            </td>
                            <td
                              className={css`
                                text-align: center;
                                padding-right: 20px;
                                border-right: 1px dashed ${theme.colorWhite3};
                              `}
                            >
                              {x.investorsNo}
                            </td>
                            <td
                              className={css`
                                text-align: center;
                                padding-right: 20px;
                              `}
                            >
                              {x.interested}
                            </td>
                            <td
                              className={css`
                                text-align: center;
                                padding-right: 20px;
                              `}
                            >
                              {x.declined}
                            </td>
                            <td
                              className={css`
                                text-align: center;
                                padding-right: 20px;
                                border-right: 1px dashed ${theme.colorWhite3};
                              `}
                            >
                              {x.answered}
                            </td>
                            <td
                              className={css`
                                text-align: center;
                                padding-right: 20px;
                              `}
                            >
                              {x.answeredper}
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
      </div>
    </>
  );
}

const Style = {
  g13: css`
    max-width: 728px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
    @media (max-width: 590px) {
      display: initial;
    }
  `,
  g14: css`
    @media (max-width: 590px) {
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

    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 728px;
    width: 100%;
    padding: 3px 0px;

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
    border: 1px solid ${theme.colorWhite3};
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
    border-bottom: 1px solid ${theme.colorWhite3};
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

    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    letter-spacing: -0.06em;
    margin-left: 7.5px;
    color: ${theme.colorGrey1};
  `,
  g24: css`
    display: flex;
    justify-content: space-between;
  `,
  g25: css`
    border-bottom: 1px solid ${theme.colorWhite3};
  `,
  g1: css`
    max-width: 1119px;
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
    max-width: 728px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorWhite3};
    margin-top: 23px;
    @media (max-width: 320px) {
      flex-direction: column;
      padding-bottom: 20px;
    }
  `,
  g3: css`
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: ${theme.colorBlack};
    padding-bottom: 12px;
    margin: 0px;
  `,
  g4: css`
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    background: ${theme.colorWhite};
    align-items: center;
    letter-spacing: -0.07em;
    color: ${theme.colorGrey1};
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
    padding: 4px 13px;
  `,

  g5: css`
    margin-top: -4px;
    margin-right: 5px;
  `,
  g27: css`
    font-size: ${theme.fontSize12};
    line-height: 14px;
    letter-spacing: -0.03em;
    color: ${theme.colorBlack};
  `,
  g28: css`
    padding: 20px 0px;
  `,
};
