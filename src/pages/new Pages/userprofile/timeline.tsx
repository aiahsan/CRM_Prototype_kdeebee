import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tab from '../../../components/newComponents/profileComponents/tab';
import { css, cx } from '@emotion/css';
import ProfileBar from '../../../components/newComponents/profileComponents/profileBar';
import SearchBar from '../../../components/newComponents/profileComponents/searchbar';
import Icon from '../../../icons/icons';
import Dropdown from '../../../components/dropdown';
import Activity from '../../../components/dashboard/expanded/activity';
import ActivitySub from '../../../components/dashboard/expanded/activitysub';
import avt from '../../../images/1.png';
import Pagination from '../../../components/pagination';

const Profile = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <Tab activeTab={0} />
      <div
        className={css`
          ${Style.p1}
        `}
      >
        <ProfileBar />
        <div>
          <div className={Style.p2}>
            <SearchBar />
          </div>

          <div className={Style.p3}>
            <div className={Style.p4}>
              <div className={Style.p5}>
                <Icon icon='chain' />
                <p className={Style.p6}>49 Timeline Items</p>
              </div>
              <div className={Style.p7}>
                <Dropdown title='Creator' />
                <Dropdown title='Activity Type' />
              </div>
            </div>

            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Mary Ek'
                date=' 8 minutes ago'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p9}>
                <ActivitySub icon='pages' title='23 pages viewed' />
                <ActivitySub icon='clock' title='41m session length' />
                <ActivitySub
                  icon='eye'
                  title='View'
                  midtitle=' Project Ocean '
                  nextTitle='to Watchlist '
                />
                <ActivitySub
                  icon='glasssm'
                  title='Added'
                  midtitle='Project Ocean'
                  nextTitle='to Watchlist'
                />
                <ActivitySub
                  icon='key'
                  title='Requested extended access to '
                  midtitle=' Project South Wind Farm'
                />
                <ActivitySub
                  icon='eye'
                  title='Viewed'
                  midtitle=' Project South Wind Farm'
                  nextTitle='for 17m'
                />
                <ActivitySub
                  icon='eye'
                  title='Viewed '
                  midtitle=' Project Ocean '
                  nextTitle='for 12m'
                />
                <p className={Style.p10}>view less »</p>
              </div>
            </div>

            <div className={Style.p11}>
              <Activity
                image={avt}
                title='Mike Johnson'
                date=' 3 hours ago'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p12}>
                <ActivitySub icon='eye' title='3 pages viewed' />
                <ActivitySub icon='clock' title='7m session length' />
                <p className={Style.p25}>2 more items »</p>
              </div>
            </div>

            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date=' 26 Apr ‘21'
                status='completed'
                subtitle=' Additional NDA Project SWF'
              />
            </div>

            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date=' 26 Apr ‘21'
                status='completed'
                subtitle=' Additional NDA Project SWF'
              />
            </div>

            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Deanne Phillips'
                status='sent out'
                subtitle='Additional NDA Project SWF'
                date='25 Apr ‘21'
              />
            </div>
            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Sergio Scalzi'
                status='added new Investment Opportunity'
                subtitle='  Project Mahal'
                date='24 Apr ‘21'
              />
            </div>

            <div className={Style.p8}>
              <Activity
                image={avt}
                title='Paul Jones'
                date='21 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p9}>
                <ActivitySub icon='eye' title='7 pages viewed' />
                <ActivitySub icon='clock' title='12m session length' />

                <p className={Style.p13}>2 more items »</p>
              </div>
            </div>
            <div className={Style.p14}>
              <Activity
                image={avt}
                title='Sara Bell'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p15}>
                <ActivitySub icon='eye' title='34 pages viewed' />
                <ActivitySub icon='clock' title='86m session length' />

                <p className={Style.p16}>2 more items »</p>
              </div>
            </div>
            <div className={Style.p17}>
              <Activity
                image={avt}
                title='Tom Gill'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p18}>
                <ActivitySub icon='eye' title='9 pages viewed' />
                <ActivitySub icon='clock' title='24m session length' />

                <p className={Style.p19}>2 more items »</p>
              </div>
            </div>

            <div className={Style.p20}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p21}>
                <ActivitySub icon='eye' title='14 pages viewed' />
                <ActivitySub icon='clock' title='37m session length' />

                <p className={Style.p22}>2 more items »</p>
              </div>
            </div>
            <div className={Style.p23}>
              <Activity
                image={avt}
                title='Chris Reed'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.p24}>
                <ActivitySub icon='eye' title='2 pages viewed' />
                <ActivitySub icon='clock' title='3m session length' />

                <p className={Style.p26}>2 more items »</p>
              </div>
            </div>
          </div>
          <div className={Style.p27}>
            <Pagination />
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
  p2: css`
    margin-top: 24px;
    @media (max-width: 768px) {
      margin: 0px;
      margin-top: 10px;
    }
  `,

  p3: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;
    @media (max-width: 982px) {
      min-width: 100%;
    }
  `,
  p4: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 535px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  `,
  p5: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  p6: css`
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
  p7: css`
    max-width: 190px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 535px) {
      margin-top: 10px;
    }
  `,
  p8: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p9: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  p10: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p11: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p12: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,

  p13: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p14: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p15: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  p16: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p17: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p18: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  p19: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p20: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p21: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  p22: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p23: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  p24: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,

  p25: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p26: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  p27: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
};
export default Profile;
