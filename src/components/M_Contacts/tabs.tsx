import React from 'react';
import Icon from '../../icons/icons'
import { css, cx } from '@emotion/css'
interface Propos {
    activeTab: number
}
interface TabProps {
    icon: string,
    title: string,
    subtitle: string,
    isActive: Boolean
}
const Tab = (props: TabProps) => {
    const { icon, title, subtitle, isActive } = props;
    return <div className={css`
${Style.akdsjfasdasd}
   ${isActive ? Style.activeCss : ""}
    `}>
        <Icon icon={icon} />
        <p className={css`
      ${Style.mkasdnjfasdaf}
${isActive ? "color: #000000;" : "color: #586069;"}


        `}>{title}</p>
        {subtitle != "" ? <p className={Style.kasndfnjkff}>{subtitle}</p> : <></>}
    </div>
}
export default (props: Propos) => {
    return <div className={Style.klasdfjklsdf}>

        <div className={Style.kahsndfiore}>

            <div className={Style.xawdsawe}>
                <Tab isActive={props.activeTab == 0 ? true : false} icon="meter" title="Dashboard" subtitle="" />
                <Tab isActive={props.activeTab == 1 ? true : false} icon="menu" title="People" subtitle="87" />
                <Tab isActive={props.activeTab == 2 ? true : false} icon="org" title="Organisations" subtitle="10" />
                <Tab isActive={props.activeTab == 3 ? true : false} icon="chain1" title="Reconcile" subtitle="11" />
                <Tab isActive={props.activeTab == 4 ? true : false} icon="settings" title="Admin" subtitle="" />

            </div>
        </div>
    </div>
}

const Style = {
    xawdsawe: css`
    display:flex;
 
     `,
    kahsndfiore: css`
max-width: 1124px;
width: 100%;
margin: auto;
margin-bottom: -1px;
`,

    klasdfjklsdf: css`
    background: #F2F2F2;
    
    height:64px;
    border: 1px solid #E1E4E8; 
    align-items: flex-end;
    display: flex;
    `,
    activeCss: css`
background-color: white;
border-top: 3px solid #B6AF9D;

`,
    akdsjfasdasd: css`
display:flex;
 
cursor:pointer;
width: 151px;
height: 40px;
align-items: center;
justify-content: center;
margin-left:28px;
`,
    mkasdnjfasdaf: css`
margin:0px 4px;
font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
letter-spacing: -0.07em;

@media (max-width:768px) {
    display:none;

  }
`,
    kasndfnjkff: css`
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

`
}