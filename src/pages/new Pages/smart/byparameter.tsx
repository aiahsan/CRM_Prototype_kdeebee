import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import Activity from '../../../components/newComponents/io/activityChart';
import Dropdown from '../../../components/dropdown';
import Pagination from '../../../components/pagination';
import SideMenu from '../../../components/sidemenu';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../styles/theme';

const Activites = [
  {
    value: 90.47,
    title: 'Corporate Equity',
    email: 'Company stage',
    lastActitvy: 'Late venture, Growth.',
    status: 'Score: 4',
    tag: '',
  },
  {
    value: 90.47,
    title: 'Corporate Equity',
    email: 'Company stage',
    lastActitvy: 'Growth',
    status: 'Score: 3',
    tag: '',
  },
  {
    value: 90.47,
    title: 'Corporate Equity',
    email: 'Company stage',
    lastActitvy: 'Value: 15',
    status: 'Score: 5',
    tag: '',
  },
  {
    value: 90.47,
    title: 'Equity',
    email: 'Investment horizon',
    lastActitvy: 'Value: 5',
    status: 'score: 3',
    tag: '',
  },
  {
    value: 90.47,
    title: 'Investment type',
    email: 'Investment Type',
    lastActitvy: 'Equity',
    status: 'Score: 4',
    tag: '',
  },
  {
    value: 90.47,
    title: '-',
    email: 'Geographies',
    lastActitvy:
      'Europe (Austria, Czech Republic, Germany, Luxembourg, Switzerland)',
    status: 'Score: 5',
    tag: '',
  },
  {
    value: 90.47,
    title: '-',
    email: 'Sector',
    lastActitvy:
      'Consumer Discretionary, Consumer Services (Diversified Consumer Services), Information Technology (Sofrware & Services)',
    status: 'Score: 5',
    tag: '',
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
          onClick={() => history.push('/smartwatch/investor/edit')}
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
            isActive={true}
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
            isActive={false}
            islast={true}
            title='Feedback'
          />
        </div>

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
              </div>
              <div className={Style.g19}>
                <div className={Style.g20}>
                  <div className={Style.g21}>
                    <Icon icon='filterb1' color={theme.colorGrey1} />
                    <p className={Style.g23}>10 Parameters</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Sort' />
                  </div>
                </div>
                {Activites.map((x, i) => (
                  <div className={Style.g25} key={i}>
                    <Activity
                      color='#E495A0'
                      title={x.title}
                      lastActitvy={x.lastActitvy}
                      status={x.status}
                      email={x.email}
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
}

const Style = {
  sp3: css`
    margin-top: 25px;
  `,
  g13: css`
    max-width: 728px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
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
    margin-top: 24px;
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
    max-width: 981px;
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
    border-bottom: 1px solid ${theme.colorWhite3};
    margin: auto;
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
