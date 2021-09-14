import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/newComponents/io/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/dashboard/expanded/activity';
import ActivitySub from '../../../components/dashboard/expanded/activitysub';
import avt from '../../../images/1.png';
import Pagination from '../../../components/pagination';
import LeftBar from '../../../components/newComponents/io/leftBar';
import { theme } from '../../../styles/theme';

export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Directory', 'Project Fluid']}
        activeIndex={2}
      />
      <Tabs activeTab={0} />

      <div className={Style.GH1}>
        <LeftBar />
        <div className='w-100 mx-728'>
          <div className={Style.GH2}>
            <div className={Style.GH3}>
              <div className={Style.GH4}>
                <div className={Style.GH5}>
                  <Dropdown title='All activity' />
                </div>
                <div className={Style.GH6}>
                  <Icon icon='search' />
                  <input className={Style.GH7} placeholder='search' />
                </div>
              </div>

              <div className={Style.GH8}>
                <div className={Style.GH9}>
                  <div className={Style.GH10}>
                    <Icon icon='chain' />
                    <p className={Style.GH11}>IO Activity Summary</p>
                  </div>
                  <div className={Style.GH12}>
                    <Dropdown title='Actor' />
                    <Dropdown title='Activity Type' />
                  </div>
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Mary Ek'
                    date=' 8 minutes ago'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH14}>
                    <ActivitySub
                      icon='eye'
                      title='viewed'
                      midtitle='Project Fluid'
                      nextTitle='for 23m'
                    />
                    <ActivitySub icon='glasses' title='41m session length' />
                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      view less »
                    </p>
                  </div>
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Mike Johnson'
                    date=' 3 hours ago'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH15}>
                    <ActivitySub icon='eye' title='3 pages viewed' />
                    <ActivitySub icon='clock' title='7m session length' />
                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Lucy Granger'
                    date=' 26 Apr ‘21'
                    status='completed'
                    subtitle=' Additional NDA Project SWF'
                  />
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Lucy Granger'
                    date=' 26 Apr ‘21'
                    status='completed'
                    subtitle=' Additional NDA Project SWF'
                  />
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Deanne Phillips'
                    status='sent out'
                    subtitle='Additional NDA Project SWF'
                    date='25 Apr ‘21'
                  />
                </div>
                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Sergio Scalzi'
                    status='added new Investment Opportunity'
                    subtitle='  Project Mahal'
                    date='24 Apr ‘21'
                  />
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Paul Jones'
                    date='21 Mar ‘21'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH17}>
                    <ActivitySub icon='eye' title='7 pages viewed' />
                    <ActivitySub icon='clock' title='12m session length' />

                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Sara Bell'
                    date='28 Mar ‘21'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH17}>
                    <ActivitySub icon='eye' title='34 pages viewed' />
                    <ActivitySub icon='clock' title='86m session length' />

                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Tom Gill'
                    date='28 Mar ‘21'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH17}>
                    <ActivitySub icon='eye' title='9 pages viewed' />
                    <ActivitySub icon='clock' title='24m session length' />

                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>

                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Lucy Granger'
                    date='28 Mar ‘21'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH17}>
                    <ActivitySub icon='eye' title='14 pages viewed' />
                    <ActivitySub icon='clock' title='37m session length' />

                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.GH13}>
                  <Activity
                    image={avt}
                    title='Chris Reed'
                    date='28 Mar ‘21'
                    status=' logged in'
                    subtitle=''
                  />
                  <div className={Style.GH17}>
                    <ActivitySub icon='eye' title='2 pages viewed' />
                    <ActivitySub icon='clock' title='3m session length' />

                    <p
                      className={css`
                        ${Style.GH16}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.GH18}>
        <div className={Style.GH19}>
          <Pagination />
        </div>
      </div>
    </>
  );
}

const Style = {
  GH18: css`
    max-width: 728px;
    margin: auto;
    margin-top: 32px;
  `,
  GH19: css`
    display: flex;
    justify-content: center;
    margin-left: 3%;
  `,
  GH16: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    color: ${theme.colorBlue1};
    margin-top: 7px;
  `,
  BaseHighlightText: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    align-items: center;
    letter-spacing: -0.08em;
    color: ${theme.colorGrey8};
    margin: 0px;
    margin-left: 6px;
  `,

  GH1: css`
    max-width: 1119px;
    margin: auto;
    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,

  GH8: css`
    border: 1px solid ${theme.colorWhite3};
    margin-top: 24px;
    min-width: 728px;
    max-width: 728px;
    border-radius: 3px;
    @media (max-width: 768px) {
      min-width: 100%;
    }
  `,
  GH7: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  GH6: css`
    padding-left: 10px;
  `,
  GH5: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid ${theme.colorWhite3};

    @media (max-width: 534px) {
      border: none;
    }
  `,
  GH4: css`
    background: #fafbfc;

    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;
    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  GH3: css`
    margin-top: 24px;
    @media (max-width: 532px) {
      width: 100%;
    }
  `,
  GH2: css`
    max-width: 728px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,

  GH13: css`
    border-bottom: 1px solid ${theme.colorWhite3};
  `,
  GH17: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  GH9: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid ${theme.colorWhite3};
    @media (max-width: 534px) {
      flex-wrap: wrap;
    }
  `,
  GH10: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  GH11: css`
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
  GH12: css`
    max-width: 175px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 534px) {
      margin-top: 10px;
    }
  `,
  GH14: css`
    margin-left: 59px;
    margin-top: -25px;
    margin-bottom: 15px;
  `,
  GH15: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
};
