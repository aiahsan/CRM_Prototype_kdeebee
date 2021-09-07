import Breadcrumb from '../../components/crumbread';
import TopBar from '../../components/topBar';
import Tabs from '../../components/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../components/dropdown';
import Icon from '../../icons/icons';
import Activity from '../../components/dashboard/expanded/activity';
import ActivitySub from '../../components/dashboard/expanded/activitysub';
import avt from '../../images/1.png';
import Pagination from '../../components/pagination';
import SideMenu from '../../components/sidemenu';
export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Dashboard', 'Activity']}
        activeIndex={2}
      />
      <Tabs activeTab={0} />
      <div className={Style.sp2}>
        <div className={Style.sp3}>
          <SideMenu isActive={true} islast={false} title='Activity' />
          <SideMenu isActive={false} islast={false} title='Dashboard 2' />
          <SideMenu isActive={false} islast={false} title='Dashboard 3' />
          <SideMenu isActive={false} islast={true} title='Dashboard 4' />
        </div>

        <div className={Style.sp4}>
          <div className={Style.sp5}>
            <div className={Style.sp6}>
              <Dropdown title='All activity' />
            </div>
            <div className={Style.sp7}>
              <Icon icon='search' />
              <input className={Style.nvjsdjweew} placeholder='search' />
            </div>
          </div>

          <div className={Style.sp8}>
            <div className={Style.sp9}>
              <div className={Style.sp10}>
                <Icon icon='chain' />
                <p className={Style.sp11}>IO Activity Summary</p>
              </div>
              <div className={Style.sp12}>
                <Dropdown
                  heading='Filter by activity type'
                  title='Actor'
                  items={[
                    { id: 0, title: 'BD Partner' },
                    { id: 1, title: 'Corporate Member' },
                    { id: 2, title: 'IANUA Team' },
                    { id: 3, title: 'Investor' },
                  ]}
                />
                <Dropdown
                  heading='Filter by opportunity'
                  items={[
                    { id: 0, title: 'Project Anchor' },
                    { id: 1, title: 'Project Apollo' },
                    { id: 2, title: 'Project Emerald' },
                    { id: 3, title: 'Project Fluid' },
                    { id: 4, title: 'Project Marlow' },
                    { id: 5, title: 'Project Nova Log' },
                    { id: 6, title: 'Project Ocean' },
                    { id: 7, title: 'Project South Wind Farm' },
                    { id: 8, title: 'Project Terrawatt 1' },
                    { id: 9, title: 'Project Anchor' },
                    { id: 10, title: 'Project Apollo' },
                    { id: 11, title: 'Project Emerald' },
                    { id: 12, title: 'Project Fluid' },
                    { id: 13, title: 'Project Marlow' },
                    { id: 14, title: 'Project Nova Log' },
                    { id: 15, title: 'Project Ocean' },
                    { id: 16, title: 'Project South Wind Farm' },
                    { id: 17, title: 'Project Terrawatt 1' },
                  ]}
                  title='Opportunity'
                  hasFilter={true}
                  placeholder='Filter opportunities'
                />
                <Dropdown
                  heading='Filter by opportunity'
                  items={[
                    { id: 0, title: 'Activate KC Access' },
                    { id: 1, title: 'Add callnotes' },
                    { id: 2, title: 'Add Investment Preferences' },
                    { id: 3, title: 'Add contact to CRM' },
                    { id: 4, title: 'Add to Watchlist' },
                    { id: 5, title: 'Approve access to IO' },
                    { id: 6, title: `Change contact's capacity` },
                    { id: 7, title: 'Complete generic NDA' },
                    { id: 8, title: 'Complete IANUA Contract' },
                    { id: 9, title: 'Complete IO specific NDA' },
                    { id: 10, title: 'Complete KYC Questionnaire' },
                    { id: 11, title: 'Complete Onboarding Interview' },
                    { id: 12, title: 'Project Fluid' },
                    { id: 13, title: 'Project Marlow' },
                    { id: 14, title: 'Project Nova Log' },
                    { id: 15, title: 'Project Ocean' },
                    { id: 16, title: 'Project South Wind Farm' },
                    { id: 17, title: 'Project Terrawatt 1' },
                  ]}
                  hasFilter={true}
                  placeholder='Filter by activity type'
                  title='Filter activity types'
                />
              </div>
            </div>

            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Mary Ek'
                date=' 8 minutes ago'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp14}>
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
                <p className={Style.sp15}>view less »</p>
              </div>
            </div>

            <div className={Style.sp16}>
              <Activity
                image={avt}
                title='Mike Johnson'
                date=' 3 hours ago'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp17}>
                <ActivitySub icon='eye' title='3 pages viewed' />
                <ActivitySub icon='clock' title='7m session length' />
                <p className={Style.sp18}>2 more items »</p>
              </div>
            </div>

            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date=' 26 Apr ‘21'
                status='completed'
                subtitle=' Additional NDA Project SWF'
              />
            </div>

            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date=' 26 Apr ‘21'
                status='completed'
                subtitle=' Additional NDA Project SWF'
              />
            </div>

            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Deanne Phillips'
                status='sent out'
                subtitle='Additional NDA Project SWF'
                date='25 Apr ‘21'
              />
            </div>
            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Sergio Scalzi'
                status='added new Investment Opportunity'
                subtitle='  Project Mahal'
                date='24 Apr ‘21'
              />
            </div>

            <div className={Style.sp13}>
              <Activity
                image={avt}
                title='Paul Jones'
                date='21 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp14}>
                <ActivitySub icon='eye' title='7 pages viewed' />
                <ActivitySub icon='clock' title='12m session length' />

                <p className={Style.sp19}>2 more items »</p>
              </div>
            </div>
            <div className={Style.sp20}>
              <Activity
                image={avt}
                title='Sara Bell'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp21}>
                <ActivitySub icon='eye' title='34 pages viewed' />
                <ActivitySub icon='clock' title='86m session length' />

                <p className={Style.sp22}>2 more items »</p>
              </div>
            </div>
            <div className={Style.sp23}>
              <Activity
                image={avt}
                title='Tom Gill'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp24}>
                <ActivitySub icon='eye' title='9 pages viewed' />
                <ActivitySub icon='clock' title='24m session length' />

                <p className={Style.sp25}>2 more items »</p>
              </div>
            </div>

            <div className={Style.sp26}>
              <Activity
                image={avt}
                title='Lucy Granger'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp27}>
                <ActivitySub icon='eye' title='14 pages viewed' />
                <ActivitySub icon='clock' title='37m session length' />

                <p className={Style.sp28}>2 more items »</p>
              </div>
            </div>
            <div className={Style.sp29}>
              <Activity
                image={avt}
                title='Chris Reed'
                date='28 Mar ‘21'
                status=' logged in'
                subtitle=''
              />
              <div className={Style.sp30}>
                <ActivitySub icon='eye' title='2 pages viewed' />
                <ActivitySub icon='clock' title='3m session length' />

                <p className={Style.sp31}>2 more items »</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.sp32}>
        <div className={Style.sp33}>
          <Pagination />
        </div>
      </div>
    </>
  );
}

const Style = {
  sp32: css`
    max-width: 978.98px;
    margin: auto;
    margin-top: 32px;
  `,
  sp33: css`
    display: flex;
    justify-content: center;
    margin-left: 35%;
    @media (max-width: 425pxpx) {
      margin-left: 0%;
    }
  `,
  sp1: css`
    background: #ffffff;
    border-top: 1px solid #e1e4e8;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
    padding: 10px 0px 11px 9.12px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.03em;
    color: #000000;
    width: 224px;
    // border-bottom: 0.5px solid #e1e4e8;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 98%;
      margin: 0px 1%;
    }
  `,
  sp2: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0px;
    }
  `,
  sp3: css`
    margin-top: 25px;
  `,
  sp4: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width: 768px) {
      margin: 0px;
      margin-top: 10px;
    }
  `,
  sp5: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;

    @media (max-width: 982px) {
      width: 100%;
    }

    @media (max-width: 320px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      div: {
        border: none;
      }
    }
  `,
  sp6: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;
  `,
  sp7: css`
    padding-left: 10px;
  `,
  nvjsdjweew: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  sp8: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;
    @media (max-width: 982px) {
      min-width: 100%;
    }
  `,
  sp9: css`
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
  sp10: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  sp11: css`
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
  sp12: css`
    max-width: 293px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 535px) {
      margin-top: 10px;
    }
  `,
  sp13: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp14: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp15: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp16: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp17: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp18: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp19: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp20: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp21: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp22: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp23: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp24: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp25: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp26: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp27: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp28: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sp29: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  sp30: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  sp31: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
};
