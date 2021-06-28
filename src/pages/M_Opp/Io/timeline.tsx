import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_opp/tabs';
import { css, cx } from '@emotion/css'
import Dropdown from '../../../components/dropdown'
import Icon from '../../../icons/icons'
import Activity from '../../../components/dashboard/expanded/activity'
import ActivitySub from '../../../components/dashboard/expanded/activitysub'
import avt from '../../../images/1.png'
import avt1 from '../../../images/pc1.png'

const BaseMoreText = css`
font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
color: #1269D3;
margin-top:7px;
`
const BaseHighlightText = css`
font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
align-items: center;
letter-spacing: -0.08em;
color: #5B626A;
margin:0px;
margin-left:6px;

`
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
        <Breadcrumb list={["Opportunities", "Directory", "Project Fluid"]} activeIndex={2} />
        <Tabs activeTab={0} />

        <div className={css`
            max-width: 1119px;
            margin: auto;
            display: flex;
        `}>


            <div className={css`margin-right: 28px;    max-width: 224px;
                position: relative;
                bottom: 29px;
            `}>
                <img src={avt1} className={css`
            width: 224px;
            height: 224px;
            border-radius:224px;
            filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
            `} />

                <h1 className={css`
            font-family: Lucida Grande;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 29px;
            display: flex;
            align-items: center;
            letter-spacing: -0.07em;
            color: #000000;
            margin: 0px;
            margin-top: 22px;
            `}>Project Fluid</h1>
                <h2 className={css`
            
            font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 22px 0px;
            `}>Equity Investment in a Biotech Start-Up</h2>
                <div className={css`border: 1px solid #E1E4E8;`}></div>

                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:22px;
                `}`}>
                    <Icon icon="light" />
                    <p className={css`
                ${BaseHighlightText}
                `}>Open in Knowledge Center</p>
                </div>

                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                margin-bottom:22px;
                `}`}>
                    <Icon icon="glasses" />
                    <p className={css`
                ${BaseHighlightText}
                `}>Add to Watchlist</p>
                </div>
            
                <div className={css`border: 1px solid #E1E4E8;`}></div>

                <div className={css`
                margin-top:17.51px;
                margin-bottom:18.49px;

                `}>
                        <h2 className={css`
                            font-family: Lucida Grande;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 16px;
                            line-height: 19px;
                            display: flex;
                            align-items: center;
                            letter-spacing: -0.07em;
                            color: #000000;
                        `}>Highlights</h2>
                        <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                `}`}>
                    <Icon icon="eql" />
                    <p className={css`
                ${BaseHighlightText}
                `}>Equity</p>
                </div>

                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                `}`}>
                    <Icon icon="sector" />
                    <p className={css`
                ${BaseHighlightText}
                `}>Healthcare & Pharma</p>
                </div>


                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                `}`}>
                    <Icon icon="earth" />
                    <p className={css`
                ${BaseHighlightText}
                `}>United States</p>
                </div>

                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                `}`}>
                    <Icon icon="clock" />
                    <p className={css`
                ${BaseHighlightText}
                `}>4 Years Investment Horizon</p>
                </div>

                <div className={`d-flex ml-2 align-items-center ${css`
                margin-top:10px;
                margin-bottom:22px;
                `}`}>
                    <Icon icon="dollar" />
                    <p className={css`
                ${BaseHighlightText}
                `}>USD 2.8m Target Raise</p>
                </div>
            
                </div>
            </div>
            <div>

                <div className={css`
  max-width: 1124px;
  width: 100%;
  margin: auto;
  margin-bottom: -1px;
  display:flex;
  `}>


                    <div className={css`
            margin-top:24px;
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
                                <div className={css`max-width:175px;
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        `}>
                                    <Dropdown title="Actor" />
                                    <Dropdown title="Activity Type" />

                                </div>
                            </div>

                            <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                                <Activity image={avt} title="Mary Ek" date=" 8 minutes ago" status=" logged in" subtitle="" />
                                <div className={css`
                margin-left:59px;
                margin-top:-25px;
                margin-bottom:15px;

                `}>
                                    <ActivitySub icon="eye" title="viewed" midtitle="Project Fluid" nextTitle="for 23m" />
                                    <ActivitySub icon="glasses" title="41m session length" />
                                    <p className={css`
               ${BaseMoreText}
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
               ${BaseMoreText}
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
               ${BaseMoreText}
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
               ${BaseMoreText}
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
               ${BaseMoreText}
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
               ${BaseMoreText}
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
               ${BaseMoreText}
                `}>2 more items  »</p>
                                </div>




                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    </>
}