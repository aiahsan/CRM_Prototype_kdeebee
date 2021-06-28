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
    email: string,
    status: string,
    lastActitvy: string,
        tag?:string,

}
export default (props: Props) => {
    const { image, title, email,  status,lastActitvy,tag } = props;
    return <div className={css`
    
    margin-top: 11px;
    margin-left: 15px;
    display:flex;
    `}>
            <input className={css`
        margin-right: 7.5px;
        margin-left:4.5px;
`} type="checkbox" />
        <img className={css`
    width:32px;
    height:32px;
    margin-bottom:10px;
    margin-right:10px
    `} src={image} alt="" />
      <div>
        <div className="d-flex">
        <p className={css`
              
              ${BaseCss} 
              font-weight:bold;
              font-size: 15px;
              
                      `}> {title}</p>
                   
                     
                      <p className={css`
                     
              ${BaseCss}
              font-weight:bold;
              font-size: 15px;
              `}>&thinsp; - {email}</p>
              
              
                      <p className={css`
                            
              ${BaseCss} 
              font-size:13px;
              height: 20px;
              background: rgba(142, 182, 230, 0.75);
              border-radius: 20px;
              color: #000000;
              font-weight: bold;
              padding:0px 10px;
              margin-left:15px;
                      `}>&thinsp;{status}</p>
                     {tag? <p className={css`
                            
                            ${BaseCss} 
                            font-size:13px;
                            height: 20px;
                            background: #B7D950;
                            border-radius: 20px;
                            color: #000000;
                            font-weight: bold;
                            padding:0px 10px;
                            margin-left:7px;
                                    `}>&thinsp;{tag}</p>:<></>}
                  
        </div>
        <div >

                <p className={css`    margin: 0px;
    margin-top: -12px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.03em;
    color: #5B636B;
    margin-bottom:11px
    `}>{lastActitvy}</p>
        </div>
      </div>
    
    </div>
}