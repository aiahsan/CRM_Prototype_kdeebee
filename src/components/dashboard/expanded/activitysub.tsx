import React from 'react';
import Icon from '../../../icons/icons'
import { css, cx } from '@emotion/css'
const BaseCss = css`
font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
align-items: center;
letter-spacing: 0.01em;
margin:0px;
`
interface Props{
    icon:string,
    title:string,
    midtitle?:string,
    nextTitle?:string,
    
}
export default (props:Props)=>{
    const {nextTitle,title,midtitle,icon}=props;
    return <div className={css`
    display: flex;
    align-items: center;
    margin-top:7px;
    `}>

        <Icon icon={icon}/>
        <p className={css`${
            BaseCss
        }
        margin-left:10px;
        color: #586069;
        `}>{title}</p>
        <p 
        className={css`${
            BaseCss
        }
        color: #1269D3;
        `}
        >&thinsp;
        {midtitle?midtitle:""}</p>
        <p
        className={css`${
            BaseCss
        }`}
        >&thinsp;
        {nextTitle?nextTitle:""}</p>
    </div>
}