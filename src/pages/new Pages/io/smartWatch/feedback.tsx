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
          <BreadButtons active={3} />
          <div className={Style.g13}>
            <div className={Style.g14}>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <input className={Style.g22} type='checkbox' />
                    <img src={UserImg} />
                    <p className={Style.g23}>57 Investors Approached</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Answer' />
                    <Dropdown title='By' />
                    <Dropdown title='Sort' />
                  </div>
                </div>
                <div className={Style.GH1}>
                  <table className={Style.GH2}>
                    <thead>
                      <tr className={Style.GH3}>
                        <td
                          className={css`
                            ${Style.GH4}
                            ${Style.g27}
                          `}
                        ></td>
                        <td
                          className={css`
                            ${Style.GH5}
                            ${Style.g27}
                            ${Style.g28}
                          `}
                        >
                          Answer
                        </td>
                        <td
                          className={css`
                            ${Style.g27}
                            ${Style.g28}
                            ${Style.GH6}
                          `}
                        >
                          Feedback
                        </td>
                        <td
                          className={css`
                            ${Style.g27}
                            ${Style.g28}
                          ${Style.GH7}
                          `}
                        >
                          By
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {List.map((x, i) => (
                        <tr className={Style.GH8} key={i}>
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
                          <td className={Style.GH9}>
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
                              ${Style.GH10}
                              ${Style.g27}
                            `}
                          >
                            {x.feedback}
                          </td>
                          <td
                            className={css`
                              ${Style.GH11}
                              ${Style.g27}
                            `}
                          >
                            {x.by}
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
}

const Style = {
  g13: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
    @media (max-width: 590px) {
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
    border-bottom: 1px solid #e1e4e8;
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
    padding: 4px 13px;
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
  GH1: css`
    overflow: auto;
  `,

  GH2: css`
    @media (max-width: 590px) {
      width: 600px;
    }
  `,
  GH3: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  GH4: css`
    width: 307.5px;
  `,
  GH5: css`
    width: 78px;
    padding: 0px 8.5px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH6: css`
    text-align: center;
    border-right: 1px dashed #e1e4e8;
    width: 243px;
  `,
  GH7: css`
    text-align: center;
    width: 97px;
  `,
  GH8: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  GH9: css`
    text-align: center;
    padding-right: 20px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH10: css`
    padding: 0px 13px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH11: css`
    padding: 0px 10px;
  `,
};
