import React from 'react';
import Breadcrumb from '../../components/crumbread';
import TopBar from '../../components/topBar';
import Tabs from '../../components/tabs';
import { css, cx } from '@emotion/css'
import Dropdown from '../../components/dropdown'
import Icon from '../../icons/icons'
import Activity from '../../components/dashboard/expanded/activity'
import ActivitySub from '../../components/dashboard/expanded/activitysub'
import avt from '../../images/1.png'
interface SideMenuProps {
    title: string,
    isActive: Boolean
}
const SideMenu = (props: SideMenuProps) => {
    const { title, isActive } = props;
    return <div className={css`
    background: #FFFFFF;
    border: 1px solid #E1E4E8;
    padding:10px 0px 11px 9.12px;
    font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.03em;
color: #000000;
width:224px;
border-bottom:0.5px solid #E1E4E8;
cursor:pointer;
${isActive == true ? "border-left:2.03px solid #B6AF9D" : ""}
    `}>
        {title}
    </div>
}
export default () => {
    return <>
        <TopBar />
        <Breadcrumb list={["Opportunities", "Dashboard", "Activity"]} activeIndex={2} />
        <Tabs activeTab={0} />
        <div className={css`
  max-width: 1124px;
  width: 100%;
  margin: auto;
  margin-bottom: -1px;
  display:flex;
  `}>

            <div className={css`
    margin-top:25px
    `}>
                <SideMenu isActive={true} title="Activity" />
                <SideMenu isActive={false} title="Dashboard 2" />
                <SideMenu isActive={false} title="Dashboard 3" />
                <SideMenu isActive={false} title="Dashboard 4" />
            </div>
            <div className={css`
            margin-top:24px;
            margin-left:29.04px
            `}>

                <div className={css`
        background: #FAFBFC;
        
        border: 1px solid #E1E4E8;
        box-sizing: border-box;
        border-radius: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 560px;
        `}>
                    <div className={css`
                    padding:8px 9.5px 8px 17px;
                    border-right: 1px solid #E1E4E8;

                    `}>
                        <Dropdown title="All activity" />
                    </div>
                    <div className={css`padding-left:10px`}>
                        <Icon icon="search" />
                        <input className={css`
                        background-color: transparent;
                        border: none;
                        margin-left: 10px;
                        `} placeholder="search" />
                    </div>
                </div>

                <div className={css`
                border: 1px solid #E1E4E8;
                margin-top:24px;
                min-width: 728px;
                `}>
                    <div className={css`
                    display:flex;
                    justify-content:space-between;
                    padding:14px 5px 14px 19.15px;
                background: #F6F8FA;
                    `}>
                        <div className={css`    display: flex;
    justify-content: center;
    align-items: center;
    `}>
                            <Icon icon="chain" />
                            <p className={css`margin:0px;
                            
                            font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.06em;
margin-left:7.5px;
color: #586069;
                            
                            `}>IO Activity Summary</p>
                        </div>
                        <div className={css`max-width:293px;
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        `}>
                            <Dropdown title="Actor" />
                            <Dropdown title="Opportunity" />
                            <Dropdown title="Activity Type" />

                        </div>
                    </div>

                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Mary Ek" date=" 8 minutes ago" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="pages" title="23 pages viewed" />
                            <ActivitySub icon="clock" title="41m session length" />
                            <ActivitySub icon="eye" title="View" midtitle=" Project Ocean " nextTitle="to Watchlist " />
                            <ActivitySub icon="glasssm" title="Added" midtitle="Project Ocean" nextTitle="to Watchlist" />
                            <ActivitySub icon="key" title="Requested extended access to " midtitle=" Project South Wind Farm" />
                            <ActivitySub icon="eye" title="Viewed" midtitle=" Project South Wind Farm" nextTitle="for 17m" />
                            <ActivitySub icon="eye" title="Viewed " midtitle=" Project Ocean " nextTitle="for 12m" />
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>view less  »</p>
                        </div>
                    </div>


                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Mike Johnson" date=" 3 hours ago" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;
                `}>
                            <ActivitySub icon="eye" title="3 pages viewed" />
                            <ActivitySub icon="clock" title="7m session length" />
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                    </div>


                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Lucy Granger" date=" 26 Apr ‘21" status="completed" subtitle=" Additional NDA Project SWF" />
                    </div>

                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Lucy Granger" date=" 26 Apr ‘21" status="completed" subtitle=" Additional NDA Project SWF" />
                    </div>


                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Deanne Phillips" status="sent out" subtitle="Additional NDA Project SWF" date="25 Apr ‘21" />
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Sergio Scalzi" status="added new Investment Opportunity" subtitle="  Project Mahal" date="24 Apr ‘21" />
                    </div>
               
               
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Paul Jones" date="21 Mar ‘21" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="eye" title="7 pages viewed" />
                            <ActivitySub icon="clock" title="12m session length" />
                           
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                

                        
                
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Sara Bell" date="28 Mar ‘21" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="eye" title="34 pages viewed" />
                            <ActivitySub icon="clock" title="86m session length" />
                           
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                

                       
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Tom Gill" date="28 Mar ‘21" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="eye" title="9 pages viewed" />
                            <ActivitySub icon="clock" title="24m session length" />
                           
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                
                

                       
                    </div>


                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Lucy Granger" date="28 Mar ‘21" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="eye" title="14 pages viewed" />
                            <ActivitySub icon="clock" title="37m session length" />
                           
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                
                

                       
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt} title="Chris Reed" date="28 Mar ‘21" status=" logged in" subtitle="" />
                        <div className={css`
                margin-left:59px;
                margin-top:-15px;
                margin-bottom:15px;

                `}>
                            <ActivitySub icon="eye" title="2 pages viewed" />
                            <ActivitySub icon="clock" title="3m session length" />
                           
                            <p className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: #1269D3;
                margin-top:7px;
                `}>2 more items  »</p>
                        </div>
                
                

                       
                    </div>

                </div>
            </div>
        </div>
    </>
}