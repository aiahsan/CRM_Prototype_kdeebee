import React from "react";
import { css, cx } from "@emotion/css";
interface Props {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
}
export default (props: Props) => {
  const { image, title, subtitle, date, status } = props;
  return (
    <div className={Style.expandParentasa}>
      <img className={Style.asndksd232sd} src={image} alt="" />
      <div className={Style.flcedsd}>
 <p
        className={css`
          ${Style.BaseCss}
          ${Style.kasdaslwe}
        `}
      >
       
        {title}
      </p>
      <p
        className={css`
          ${Style.BaseCss}
          ${Style.mln7}
        `}
      >
        &thinsp; {status}
      </p>
      {subtitle ? (
        <p
          className={css`
            ${Style.BaseCss}
            color:#1269D3;
            ${Style.mln7}
            `}
          
        >
          &thinsp;
          {subtitle}
        </p>
      ) : (
        <></>
      )}
      <p
        className={css`
          ${Style.BaseCss}
          ${Style.dspnone}

        `}
      >
        &thinsp; -
      </p>
      <p
        className={css`
          ${Style.BaseCss}
          font-size:13px;

          color: #586069;
          ${Style.mln7}
          ${Style.csjsddate}

        `}
      >
        &thinsp;{date}
      </p>
   

      </div>
      </div>
  );
};


const Style = {
        expandParentasa: css`
          margin-top: 11px;
          margin-left: 15px;
          display: flex;
        `,
        asndksd232sd: css`
          width: 32px;
          height: 32px;
          margin-bottom: 10px;
          margin-right: 10px;
        `,
        kasdaslwe: css`
          font-weight: bold;
          font-size: 15px;
        `,
        BaseCss: css`
          font-family: Lucida Grande;
          font-style: normal;
          line-height: 18px;
          align-items: center;
          letter-spacing: -0.03em;
          margin: 0px;
        `,
        flcedsd:css`
        display:flex;
        @media (max-width:535px) {
          flex-direction: column;
        
        }
        `,
        dspnone:css`
        @media (max-width:535px) {
          display:none;
        
        }
        `,
        mln7:css`
        @media (max-width:535px) {
          margin-left:-7px
        }
        `,
        csjsddate:css`
        @media (max-width:535px) {
          margin-bottom: 18px;
          margin-top: 2px;
          
        }
        `
      };
      