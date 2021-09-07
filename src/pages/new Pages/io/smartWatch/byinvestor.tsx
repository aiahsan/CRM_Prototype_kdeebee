import Breadcrumb from '../../../../components/crumbread';
import TopBar from '../../../../components/topBar';
import Tabs from '../../../../components/newComponents/io/tabs';
import { css } from '@emotion/css';
import Icon from '../../../../icons/icons';
import LeftBar from '../../../../components/newComponents/io/leftBar';
import Activity from '../../../../components/newComponents/io/activityChart';
import Dropdown from '../../../../components/dropdown';
import UserImg from '../../../../images/User.png';
import Pagination from '../../../../components/pagination';
import BreadButtons from '../../../../components/newComponents/io/breadButtons';
const Activites = [
  {
    value: 90.47,
    title: 'Lucy Granger',
    email: 'lucy@blu-fo.com',
    lastActitvy: 'Last active:  23 minutes ago',
    status: 'SMART Match: 92.31',
    tag: '',
  },
  {
    value: 50.69,
    title: 'Sarah Thiem',
    email: 'sarah.thiem@abc.com',
    lastActitvy: 'Last active:  44 minutes ago',
    status: 'SMART Match: 91.45',
    tag: '',
  },
  {
    value: 28.14,
    title: 'Tom Johnson',
    email: 'tom.johnson@abc.com',
    lastActitvy: 'Last active:  55 minutes ago',
    status: 'SMART Match: 90.29',
    tag: '',
  },
  {
    value: 90.47,
    title: 'James Lennon',
    email: 'james.lennon@abc.com',
    lastActitvy: 'Last active:  2 hours ago',
    status: 'SMART Match: 89.89',
    tag: 'Tag ABC',
  },
  {
    value: 50.69,
    title: 'Preethi Mackenzie',
    email: 'preethi.mackenzie@abc.com',
    lastActitvy: 'Last active:  3 hours ago',
    status: 'SMART Match: 88.82',
  },
  {
    value: 28.14,

    title: 'Marie Carney',
    email: 'marie.carney@abc.com',
    lastActitvy: 'Last active:  4 hours ago',
    status: 'SMART Match: 87.61',
  },
  {
    value: 90.47,

    title: 'James Jarret',
    email: 'james.jarret@abc.com',
    lastActitvy: 'Last active:  5 hours ago',
    status: 'SMART Match: 86.91',
  },
  {
    value: 50.69,
    title: 'John Steadman',
    email: 'john.steadman@abc.com',
    lastActitvy: 'Last active:  6 hours ago',
    status: 'SMART Match: 85.24',
  },
  {
    value: 28.14,
    title: 'Chris Copeland',
    email: 'chris.copeland@abc.com',
    lastActitvy: 'Last active:  6 hours ago',
    status: 'SMART Match: 84.16',
  },
  {
    value: 28.14,
    title: 'Sara Hodge',
    email: 'sara.hodge@abc.com',
    lastActitvy: 'Last active:  7 hours ago',
    status: 'SMART Match: 83.23',
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
          <BreadButtons active={0} />
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
                    <input className={Style.g22} type='checkbox' />
                    <img src={UserImg} />
                    <p className={Style.g23}>75 Investors</p>
                  </div>
                  <div className={Style.g24}>
                    <Dropdown title='Tag' />
                    <Dropdown title='SMART Match' />
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
                      email={x.email}
                      tag={x.tag}
                      value={x.value}
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
  g13: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
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
    max-width: 225px;
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
};
