import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import Dropdown from '../../../components/dropdown';
import UserImg from '../../../images/User.png';
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
  const history = useHistory();

  return (
    <>
      <TopBar />
      <Breadcrumb list={['Opportunities', 'SMART Match']} activeIndex={1} />
      <Tabs activeTab={3} />
      <div className={Style.g2}>
        <p className={Style.g3}>Project Storebox</p>
        <button
          onClick={() => history.push('/smartwatch/insight/edit')}
          className={Style.g4}
        >
          <div className={Style.g5}>
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
            isActive={true}
            islast={false}
            title='Insights'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/feedback')}
            isActive={false}
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
                    <input className={Style.g22} type='checkbox' />
                    <img src={UserImg} />
                    <p className={Style.g23}>7 Relationship Managers</p>
                  </div>
                  <div className={Style.g24}>
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
                          # Investors
                        </td>
                        <td
                          className={css`
                            ${Style.GH6}
                            ${Style.g27}
                            ${Style.g28}
                          `}
                        >
                          Interested
                        </td>
                        <td
                          className={css`
                            ${Style.GH7}
                            ${Style.g27}
                            ${Style.g28}
                          `}
                        >
                          Declined
                        </td>
                        <td
                          className={css`
                            ${Style.GH8}
                            ${Style.g27}
                            ${Style.g28}
                          `}
                        >
                          Not Answered
                        </td>
                        <td
                          className={css`
                            ${Style.GH9}
                            ${Style.g27}
                          `}
                        >
                          Answered (%)
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {List.map((x, i) => (
                        <tr className={Style.GH10} key={i}>
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
                          <td className={Style.GH11}>{x.investorsNo}</td>
                          <td className={Style.GH12}>{x.interested}</td>
                          <td className={Style.GH13}>{x.declined}</td>
                          <td className={Style.GH14}>{x.answered}</td>
                          <td className={Style.GH15}>{x.answeredper}</td>
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
  GH1: css`
    overflow: auto;
  `,

  GH2: css`
    @media (max-width: 768px) {
      width: 768px;
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
    width: 79px;
    padding: 0px 11.5px;
    text-align: center;
  `,
  GH7: css`
    width: 67px;
    padding: 0px 9.5px;
  `,
  GH8: css`
    width: 97px;
    padding: 0px 8.5px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH9: css`
    width: 97.5px;
    padding: 0px 10px 0px 10.5px;
    box-sizing: content-box;
  `,
  GH10: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  GH11: css`
    text-align: center;
    padding-right: 20px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH12: css`
    text-align: center;
    padding-right: 20px;
  `,
  GH13: css`
    text-align: center;
    padding-right: 20px;
  `,
  GH14: css`
    text-align: center;
    padding-right: 20px;
    border-right: 1px dashed #e1e4e8;
  `,
  GH15: css`
    text-align: center;
    padding-right: 20px;
  `,
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
};
