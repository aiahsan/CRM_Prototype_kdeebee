import React from 'react';
import { css, cx } from '@emotion/css';
import logo from '../images/fav.png';

export default () => {
  return (
    <div className={Style.GH2}>
      <div className={Style.GH3}>
        <div>
          <p
            className={css`
              ${Style.GH1}
            `}
          >
            © 2021 IANUA Market Limited - ALL RIGHTS RESERVED
          </p>
        </div>
        <div>
          <img src={logo} />
        </div>
        <div className={Style.GH4}>
          <a
            className={css`
              ${Style.GH1}
              ${Style.GH5}
            `}
          >
            Terms
          </a>
          <a
            className={css`
              ${Style.GH1}
              ${Style.GH5}
            `}
          >
            Privacy
          </a>
          <a
            className={css`
              ${Style.GH1}
              ${Style.GH5}
            `}
          >
            Disclaimer
          </a>
          <a
            className={css`
              ${Style.GH1}
              ${Style.GH5}
            `}
          >
            Fee Sharing
          </a>
          <a
            className={css`
              ${Style.GH1}
              ${Style.GH5}
            `}
          >
            GDPR
          </a>
        </div>
      </div>
    </div>
  );
};

const Style = {
  GH1: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.08em;
    color: #ffffff;
  `,
  GH2: css`
    padding-top: 29px;
    background-color: #4e4b5b;
    min-height: 210px;
    margin-top: 229px;
  `,
  GH3: css`
    max-width: 998px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
      max-width: 700px;
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  GH4: css`
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
            `,
  GH5: css`
    cursor: pointer;
  `,
};
