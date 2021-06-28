import React from 'react';
import Breadcrumb from '../../components/crumbread';
import TopBar from '../../components/topBar';
import Tabs from '../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css'
import Dropdown from '../../components/dropdown'
import Icon from '../../icons/icons'
import Activity from '../../components/M_Contacts/activity'
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
        <Breadcrumb list={["Contacts", "People"]} activeIndex={1} />
        <Tabs activeTab={1} />
        <div className={css`
  max-width: 1124px;
  width: 100%;
  margin: auto;
  margin-bottom: -1px;
  display:flex;
  `}>


            <div className={css`
            margin-top:24px;
            margin-left:29.04px
            
            `}>

                <div className={css`
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 980px;
        `}>
                    <div className={css`
        background: #FAFBFC;
        
        border: 1px solid #E1E4E8;
        box-sizing: border-box;
        border-radius: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        max-width: 560px;
        width:100%;
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

                </div>
                <div className={css`
                border: 1px solid #E1E4E8;
                margin-top:24px;
                min-width: 980px;
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
                            <input className={css`
        margin-right: 7.5px;
        `} type="checkbox" />
                            <Icon icon="user" />
                            <p className={css`margin:0px;
                            
                            font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.06em;
margin-left:7.5px;
color: #586069;
                            
                            `}>87 People</p>
                        </div>
                        <div className={css`max-width:185px;
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        `}>
                            <Dropdown title="Tag" />
                            <Dropdown title="Stage" />
                            <Dropdown title="Sort" />

                        </div>
                    </div>

                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Mary Ek" lastActitvy="Last active:  23 minutes ago" status="Stage: KYC Completed" email="lucy@blu-fo.com" />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Sarah Thiem"  email="sarah.thiem@abc.com" lastActitvy="Last active:  44 minutes ago" status="Stage: KYC Completed"  />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Tom Johnson"  email="tom.johnson@abc.com" lastActitvy="Last active:  55 minutes ago"
                         status="Stage: KYC Completed"  />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="James Lennon"  email="james.lennon@abc.com" lastActitvy="Last active:  2 hours ago" 
                         status="Stage: Investment Preferences Known" tag="Tag ABC"  />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Preethi Mackenzie"  email="preethi.mackenzie@abc.com" lastActitvy="Last active:  3 hours ago" 
                         status="Stage: Investment Preferences Known" tag="Tag XYZ"  />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Marie Carney"  email="marie.carney@abc.com" lastActitvy="Last active:  4 hours ago" 
                         status="Stage: KYC Completed"   />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="James Jarret"  email="james.jarret@abc.com" lastActitvy="Last active:  6 hours ago" 
                         status="Stage: Prospect"  tag="ABC BD Partner"   />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="John Steadman"  email="john.steadman@abc.com" lastActitvy="Last active:  6 hours ago" 
                         status="Stage: KYC Completed"    />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Chris Copeland"  email="chris.copeland@abc.com" lastActitvy="Last active:  6 hours ago" 
                         status="Stage: KYC Completed"    />
                        
                    </div>
                    <div className={css`
                border-bottom:1px solid #E1E4E8

                `}>
                        <Activity image={avt}  title="Sara Hodge"  email="sara.hodge@abc.com" lastActitvy="Last active:  7 hours ago" 
                         status="Stage: Transacted"    />
                        
                    </div>


                    
                    
                  
                </div>
            </div>
        </div>
    </>
}