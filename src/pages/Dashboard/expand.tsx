import React from "react";
import Breadcrumb from "../../components/crumbread";
import TopBar from "../../components/topBar";
import Tabs from "../../components/tabs";
import { css, cx } from "@emotion/css";
import Dropdown from "../../components/dropdown";
import Icon from "../../icons/icons";
import Activity from "../../components/dashboard/expanded/activity";
import ActivitySub from "../../components/dashboard/expanded/activitysub";
import avt from "../../images/1.png";
import Pagination from '../../components/pagination'
interface SideMenuProps {
  title: string;
  isActive: boolean;
  islast:boolean;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive,islast } = props;
  return (
    <div
      className={css`
        ${Style.expandParent}
        ${isActive == true ? "border-left:2.03px solid #B6AF9D" : ""}
        ${islast==true?"border-bottom: 1px solid #e1e4e8;":""}
      `}
    >
      {title}
    </div>
  );
};
export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={["Opportunities", "Dashboard", "Activity"]}
        activeIndex={2}
      />
      <Tabs activeTab={0} />
      <div className={Style.jdsf0saewaew}>
        <div className={Style.isdfisdhf}>
          <SideMenu isActive={true} islast={false} title="Activity" />
          <SideMenu isActive={false} islast={false} title="Dashboard 2" />
          <SideMenu isActive={false}  islast={false} title="Dashboard 3" />
          <SideMenu isActive={false} islast={true} title="Dashboard 4" />
        </div>


        <div className={Style.ijddwewe}>
          <div className={Style.an2ieaeesd}>
            <div className={Style.nxznksoddfw}>
              <Dropdown title="All activity" />
            </div>
            <div className={Style.hdisfdeewewr}>
              <Icon icon="search" />
              <input className={Style.nvjsdjweew} placeholder="search" />
            </div>
          </div>

          <div className={Style.ksanwiwar}>
            <div className={Style.disfnsiaewe}>
              <div className={Style.jdisfawewae}>
                <Icon icon="chain" />
                <p className={Style.hadkfsi434}>IO Activity Summary</p>
              </div>
              <div className={Style.vdnksiser}>
                <Dropdown title="Actor" />
                <Dropdown title="Opportunity" />
                <Dropdown title="Activity Type" />
              </div>
            </div>

            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Mary Ek"
                date=" 8 minutes ago"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.nvsd30wesrt}>
                <ActivitySub icon="pages" title="23 pages viewed" />
                <ActivitySub icon="clock" title="41m session length" />
                <ActivitySub
                  icon="eye"
                  title="View"
                  midtitle=" Project Ocean "
                  nextTitle="to Watchlist "
                />
                <ActivitySub
                  icon="glasssm"
                  title="Added"
                  midtitle="Project Ocean"
                  nextTitle="to Watchlist"
                />
                <ActivitySub
                  icon="key"
                  title="Requested extended access to "
                  midtitle=" Project South Wind Farm"
                />
                <ActivitySub
                  icon="eye"
                  title="Viewed"
                  midtitle=" Project South Wind Farm"
                  nextTitle="for 17m"
                />
                <ActivitySub
                  icon="eye"
                  title="Viewed "
                  midtitle=" Project Ocean "
                  nextTitle="for 12m"
                />
                <p className={Style.nksdnvseir0343}>view less »</p>
              </div>
            </div>

            <div className={Style.nviers04ds1}>
              <Activity
                image={avt}
                title="Mike Johnson"
                date=" 3 hours ago"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.nmbw9wewenwe}>
                <ActivitySub icon="eye" title="3 pages viewed" />
                <ActivitySub icon="clock" title="7m session length" />
                <p className={Style.nvsanwe0332}>2 more items »</p>
              </div>
            </div>

            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Lucy Granger"
                date=" 26 Apr ‘21"
                status="completed"
                subtitle=" Additional NDA Project SWF"
              />
            </div>

            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Lucy Granger"
                date=" 26 Apr ‘21"
                status="completed"
                subtitle=" Additional NDA Project SWF"
              />
            </div>

            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Deanne Phillips"
                status="sent out"
                subtitle="Additional NDA Project SWF"
                date="25 Apr ‘21"
              />
            </div>
            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Sergio Scalzi"
                status="added new Investment Opportunity"
                subtitle="  Project Mahal"
                date="24 Apr ‘21"
              />
            </div>

            <div className={Style.nskndifrr}>
              <Activity
                image={avt}
                title="Paul Jones"
                date="21 Mar ‘21"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.nvsd30wesrt}>
                <ActivitySub icon="eye" title="7 pages viewed" />
                <ActivitySub icon="clock" title="12m session length" />

                <p className={Style.knsdfasdfk3}>2 more items »</p>
              </div>
            </div>
            <div className={Style.hsfaksdkfdsg2}>
              <Activity
                image={avt}
                title="Sara Bell"
                date="28 Mar ‘21"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.dnscikrw232}>
                <ActivitySub icon="eye" title="34 pages viewed" />
                <ActivitySub icon="clock" title="86m session length" />

                <p className={Style.ncvxie0srr}>2 more items »</p>
              </div>
            </div>
            <div className={Style.sndnfdiwasd2e}>
              <Activity
                image={avt}
                title="Tom Gill"
                date="28 Mar ‘21"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.nvkasiwawE}>
                <ActivitySub icon="eye" title="9 pages viewed" />
                <ActivitySub icon="clock" title="24m session length" />

                <p className={Style.hasvji4e34}>2 more items »</p>
              </div>
            </div>

            <div className={Style.nxcvjiewr}>
              <Activity
                image={avt}
                title="Lucy Granger"
                date="28 Mar ‘21"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.nxkcvnweaw3}>
                <ActivitySub icon="eye" title="14 pages viewed" />
                <ActivitySub icon="clock" title="37m session length" />

                <p className={Style.nkanwiaew23}>2 more items »</p>
              </div>
            </div>
            <div className={Style.ajsdfinsddse}>
              <Activity
                image={avt}
                title="Chris Reed"
                date="28 Mar ‘21"
                status=" logged in"
                subtitle=""
              />
              <div className={Style.anvskdiersw}>
                <ActivitySub icon="eye" title="2 pages viewed" />
                <ActivitySub icon="clock" title="3m session length" />

                <p className={Style.vnkas0ewew3}>2 more items »</p>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
      <div className={css`
          max-width: 978.98px;
          margin: auto;
          margin-top:32px;
      `}>
      <div className={css`
      display:flex;
          justify-content: center;
          margin-left: 35%;
      `}>
          <Pagination/>
          </div>
      </div>
    </>
  );
};

const Style = {
  expandParent: css`
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
    @media (max-width:768px) {
        width: 98%;    
        margin:0px 1%;

      }
  `,
  jdsf0saewaew: css`
  max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
    @media (max-width:768px) {
        flex-direction: column;
        margin: 0px;
      }
  `,
  isdfisdhf: css`
    margin-top: 25px;
  `,
  ijddwewe: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width:768px) {
        margin: 0px;
    margin-top:10px;  
    }
  `,
  an2ieaeesd: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;

    @media (max-width:982px) {
        width: 100%;
      }

      @media (max-width:320px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        div:{
        border:none;
        }
      }
  `,
  nxznksoddfw: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;
  `,
  hdisfdeewewr: css`
    padding-left: 10px;
  `,
  nvjsdjweew: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  ksanwiwar: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;
    @media (max-width:982px) {
        min-width: 100%;
      }
  `,
  disfnsiaewe: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width:535px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
  `,
  jdisfawewae: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  hadkfsi434: css`
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
  vdnksiser: css`
    max-width: 293px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width:535px) {
        margin-top:10px;
      }


  `,
  nskndifrr: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  nvsd30wesrt: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  nksdnvseir0343: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  nviers04ds1: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  nmbw9wewenwe: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  nvsanwe0332: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  knsdfasdfk3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  hsfaksdkfdsg2: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  dnscikrw232: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  ncvxie0srr: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  sndnfdiwasd2e: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  nvkasiwawE: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  hasvji4e34: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  nxcvjiewr: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  nxkcvnweaw3: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  nkanwiaew23: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  ajsdfinsddse: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  anvskdiersw: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  vnkas0ewew3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
};
