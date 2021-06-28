import React from 'react';
import Icon from '../../../icons/icons'
import { css, cx } from '@emotion/css'
const activeCss = css`
background-color: white;
border-top: 3px solid #B6AF9D;

`
interface Propos
{
    activeTab:number
}
interface TabProps{
    icon:string,
    title:string,
    subtitle:string,
    isActive:Boolean
}
const Tab = (props:TabProps) => {
    const {icon,title,subtitle,isActive} =props;
   return  <div  className={css`
   display:flex;
   ${isActive?activeCss:""}
   cursor:pointer;
   width: 161px;
   height: 40px;
   align-items: center;
   justify-content: center;
    `}>
        <Icon icon={icon}/>
        <p  className={css`
        margin:0px 4px;
        font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
letter-spacing: -0.07em;
${isActive?"color: #000000;":"color: #586069;"}


        `}>{title}</p>
        {subtitle!=""?<p className={css`
        margin:0px;
        background: #E8E9EB;
        width:24px;
        height:15px;
        color: #586069;
        font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
border-radius: 7px;
    padding-left: 4px;
    padding-top: 1px;

        `}>{subtitle}</p>:<></>}
   </div>
}
export default (props:Propos) => {
    return <div className={css`
    background: #F2F2F2;
    
    height:64px;
    border: 1px solid #E1E4E8; 
    align-items: flex-end;
    display: flex;
    `}>

  <div className={css`
  max-width: 613px;
  width: 100%;
  margin: auto;
  margin-bottom: -1px;
  `}>

  <div className={css`
   display:flex;

    `}>
    <Tab isActive={props.activeTab==0?true:false} icon="chain" title="Timeline" subtitle="" />
    <Tab isActive={props.activeTab==1?true:false} icon="menu" title="Profile" subtitle="" />
    <Tab isActive={props.activeTab==2?true:false} icon="dollar1" title="Preferences" subtitle="" />
  
    
    </div>
  </div>
</div>
}