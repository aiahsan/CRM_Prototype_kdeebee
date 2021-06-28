import React from 'react';
import { css, cx } from '@emotion/css'
const BaseCss = css`
font-family: Lucida Grande;
        font-style: normal;
        line-height: 18px;
        align-items: center;
        letter-spacing: -0.03em;
        margin-0px;
`
interface Props {
    image: string,
    title: string,
    subtitle: string,
    date: string,
    status: string

}
export default (props: Props) => {
    const { image, title, subtitle, date, status } = props;
    return <div className={css`
    
    margin-top: 11px;
    margin-left: 15px;
    display:flex;
    `}>
        <img className={css`
    width:32px;
    height:32px;
    margin-bottom:10px;
    margin-right:10px
    `} src={image} alt="" />
        <p className={css`
              
${BaseCss} 
font-weight:bold;
font-size: 15px;

        `}> {title}</p>
        <p className={css`
             
${BaseCss} 
        `}>&thinsp; {status}</p>
        {
                subtitle? <p className={css`
             
                ${BaseCss} 
                color:#1269D3;
                        `}>&thinsp;

                        {subtitle}
                </p>:<></>
        }
        <p className={css`
       
${BaseCss}        `}>&thinsp; -</p>
        <p className={css`
              
${BaseCss} 
font-size:13px;

color: #586069;
        `}>&thinsp;{date}</p>
    </div>
}