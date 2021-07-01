import React from 'react';
import { css, cx } from "@emotion/css";
import logo from '../images/fav.png'

const baseText=css`
font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.08em;
    color: #FFFFFF;
`
export default ()=>{
    return <div className={css`
    padding-top:29px;
    background-color: #4E4B5B;
    min-height:210px;
    margin-top:229px;
    `}>

        <div className={css`
           max-width: 998px;
           width: 100%;
           margin: auto;
           display: flex;
           justify-content: space-between;
           @media (max-width:1024px) {
            max-width: 700px;
          }
           @media (max-width:1024px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}>
            <div><p className={css`
            ${baseText}
            `}>© 2021 IANUA Market Limited - ALL RIGHTS RESERVED</p></div>
            <div>
                <img src={logo}/>
            </div>
            <div className={css`
            display:flex;
            max-width:229px;
            width:100%;
            display: flex;
    justify-content: space-between;

    @media (max-width:768px) {
        flex-direction: column;
        justify:content:center;
        align-items:center;
        a{
           margin-top:10px; 
        }
      }
            `}>
                <a className={css`
            ${baseText}
            cursor:pointer;
            `}>Terms</a>
                <a className={css`
            ${baseText}
            cursor:pointer;
            `}>Privacy</a>
                <a className={css`
            ${baseText}
            cursor:pointer;
            `}>Disclaimer</a>
                <a className={css`
            ${baseText}
            cursor:pointer;
            `}>Fee Sharing</a>
                <a className={css`
            ${baseText}
            cursor:pointer;
            `}>GDPR</a>
            </div>
        </div>
    </div>
}