import React from 'react';
import { css, cx } from '@emotion/css';

import { profileProps } from '../../../interface';
import PieChart from './piechart';
export default (props: profileProps) => {
  const { img, title, LastActive } = props;
  return (
    <div className={Style.kdsklfjasdklf}>
      <input className={Style.kasdnkfjdaslkfsd} type='checkbox' />

      <img className={Style.zxcnjdaw} src={img} alt='' />
      <div>
        <div className='d-flex flex-wrap'>
          <p
            className={css`
              ${Style.BaseCss}
              ${Style.kjdafjkdsf}
            `}
          >
            {' '}
            {title}
          </p>
        </div>
        <div>
          <p className={Style.aksdfjlsdfjsd}>{LastActive}</p>
        </div>
      </div>
    </div>
  );
};

const Style = {
  aksdfjlsdfjsd: css`
    margin: 0px;
    margin-top: -12px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.03em;
    color: #5b636b;
    margin-bottom: 11px;
  `,
  jvbjsddasf: css`
    font-size: 13px;
    height: 20px;
    background: #b7d950;
    border-radius: 20px;
    color: #000000;
    font-weight: bold;
    padding: 0px 10px;
    margin-left: 7px;
    @media (max-width: 425px) {
      margin-left: 0px;
      margin-bottom: 25px;
    }
  `,

  BaseCss: css`
font-family: Lucida Grande;
        font-style: normal;
        line-height: 18px;
        align-items: center;
        letter-spacing: -0.03em;
        margin-0px;
`,
  kdsklfjasdklf: css`
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
  `,
  kasdnkfjdaslkfsd: css`
    margin-right: 7.5px;
    margin-left: 4.5px;
    margin-top: 10px;
  `,
  zxcnjdaw: css`
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
  `,
  kjdafjkdsf: css`
    font-weight: bold;
    font-size: 15px;
  `,
  knasdkffsaf223: css`
    font-weight: bold;
    font-size: 15px;
  `,
  nsaodjasdasd: css`
    font-size: 13px;
    height: 20px;
    border-radius: 20px;
    color: #000000;
    font-weight: bold;
    padding: 0px 10px;
    margin-left: 15px;

    @media (max-width: 425px) {
      margin-left: 0px;
      margin-bottom: 25px;
    }
  `,
};
