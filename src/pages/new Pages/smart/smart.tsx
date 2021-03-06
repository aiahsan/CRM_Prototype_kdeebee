import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/newComponents/io/activityChart';
import { theme } from '../../../styles/theme';

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
export default function RCom() {
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
                <button className={Style.GH1}>
                  <Icon icon='puzzle' color={theme.colorWhite} />
                  <p className={Style.GH2}>Add SMART Match</p>
                </button>
              </div>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <input className={Style.g22} type='checkbox' />
                    <Icon icon='puzzle' color={theme.colorGrey1} />
                    <p className={Style.g23}>8 Adhoc SMART Matches</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Sort' />
                  </div>
                </div>
                {Activites.map((x, i) => (
                  <div className={Style.g25} key={i}>
                    <Activity
                      color='#8EB6E6'
                      title={x.title}
                      lastActitvy={x.lastActitvy}
                      status={x.status}
                      tag={x.tag}
                      value={x.value}
                      onClick={() => history.push('/smartwatch/investor')}
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
}

const Style = {
  GH1: css`
    width: 159px;
    height: 34px;
    background: ${theme.colorGrey};
    border: 1px solid ${theme.colorGrey};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  GH2: css`
    font-weight: 700;
    font-size: ${theme.fontSize14};
    line-height: 16px;

    color: ${theme.colorWhite};
    margin: 0px;
    padding: 0px;
    margin-left: 4.25px;
  `,
  g13: css`
    max-width: 981px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,
  g14: css`
    margin-top: 24px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,
  g15: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 981px;
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
    height: 34px;
    @media (max-width: 901px) {
      max-width: 540px;
    }
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
    border: 1px solid ${theme.colorWhite3};
    margin-top: 24px;
    max-width: 981px;
    border-radius: 3px;

    @media (max-width: 1024px) {
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
    max-width: 981px;
    margin: auto;
    width: 100% @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,

  g26: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  g2: css`
    max-width: 981px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorWhite3};
    margin-top: 23px;
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
};
