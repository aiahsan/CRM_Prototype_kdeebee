import React from 'react'
import {css,cx} from '@emotion/css'
import Icon from '../icons/icons'
interface Props{
    list:Array<string>,
    activeIndex:number
}
interface CrumProps{
    title:string,
    isActive:boolean
}
const Crum=(props:CrumProps)=>{
  return   <p className={css`
  margin:0px;
  font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
cursor: pointer;

  ${props.isActive?"color: #B6AF9D;":"color: #FFFFFF;"}
  `}>
      {props.title}
  </p>
}
export default (props:Props)=>{
   const {activeIndex,list}=props;
    return <>
    <div
    className={css`
    height:32px;
    background: #4E4B5B;
    padding:8px 30.52px 10px 30.52px;
    display:flex;
    `}
    >
        {list.map((x,i)=><div className={css`
         display:flex;
         align-items: center;
        `} key={i}>

{i==0?<></>:<div className={css`
display:flex;
        margin:0px 4px;
        `}><Icon icon="chevright"/></div>}<Crum isActive={i==activeIndex} title={x}/>
        </div>)}
    </div>
    </>
}