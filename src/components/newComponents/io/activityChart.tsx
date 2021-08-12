import React from 'react';
import { css, cx } from '@emotion/css';

import { ActivityChartProps } from '../../../interface';
import PieChart from './piechart';
export default (props: ActivityChartProps) => {
  const { value, title, email, status, lastActitvy, tag, color, type } = props;
  return (
    <div className={Style.kdsklfjasdklf}>
      {type == undefined ? (
        <input className={Style.kasdnkfjdaslkfsd} type='checkbox' />
      ) : (
        <></>
      )}
      <PieChart value={value} />
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

          {email == '' || email == undefined ? (
            <></>
          ) : (
            <p
              className={css`
                ${Style.BaseCss}
                ${Style.knasdkffsaf223}
              `}
            >
              &thinsp; {type == undefined ? '-' : '/'} {email}
            </p>
          )}

          <p
            className={css`
              ${Style.BaseCss}
              ${Style.nsaodjasdasd}
              background-color:${color}
            `}
          >
            &thinsp;{status}
          </p>
          {tag ? (
            <p
              className={css`
                ${Style.BaseCss}
                ${Style.jvbjsddasf}
              `}
            >
              &thinsp;{tag}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <p className={Style.aksdfjlsdfjsd}>{lastActitvy}</p>
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
