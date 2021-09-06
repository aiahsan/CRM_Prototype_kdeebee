import { css } from '@emotion/css';

import { ActivityChartProps } from '../../../interface';
import PieChart from './piechart';
export default function RCom(props: ActivityChartProps) {
  const {
    value,
    title,
    email,
    status,
    lastActitvy,
    tag,
    color,
    type,
    onClick,
  } = props;
  return (
    <div onClick={onClick ? () => onClick() : () => null} className={Style.GH1}>
      {type == undefined ? (
        <input className={Style.GH2} type='checkbox' />
      ) : (
        <></>
      )}
      <PieChart value={value} />
      <div>
        <div className='d-flex flex-wrap'>
          <p
            className={css`
              ${Style.GH3}
              ${Style.GH4}
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
                ${Style.GH3}
                ${Style.GH5}
              `}
            >
              &thinsp; {type == undefined ? '-' : '/'} {email}
            </p>
          )}

          <p
            className={css`
              ${Style.GH3}
              ${Style.GH6}
              background-color:${color}
            `}
          >
            &thinsp;{status}
          </p>
          {tag ? (
            <p
              className={css`
                ${Style.GH3}
                ${Style.GH7}
              `}
            >
              &thinsp;{tag}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div>
          <p className={Style.GH8}>{lastActitvy}</p>
        </div>
      </div>
    </div>
  );
}

const Style = {
  GH8: css`
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
  GH7: css`
    font-size: 13px;
    height: 20px;
    background: #b7d950;
    border-radius: 20px;
    color: #000000;
    font-weight: bold;
    padding: 0px 10px;
    margin-left: 7px;
    @media (max-width: 425pxpx) {
      margin-left: 0px;
      margin-bottom: 25px;
    }
  `,

  GH3: css`
font-family: Lucida Grande;
        font-style: normal;
        line-height: 18px;
        align-items: center;
        letter-spacing: -0.03em;
        margin-0px;
`,
  GH1: css`
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
    cursor: pointer;
  `,
  GH2: css`
    margin-right: 7.5px;
    margin-left: 4.5px;
    margin-top: 10px;
  `,

  GH4: css`
    font-weight: bold;
    font-size: 15px;
  `,
  GH5: css`
    font-weight: bold;
    font-size: 15px;
  `,
  GH6: css`
    font-size: 13px;
    height: 20px;
    border-radius: 20px;
    color: #000000;
    font-weight: bold;
    padding: 0px 10px;
    margin-left: 15px;

    @media (max-width: 425pxpx) {
      margin-left: 0px;
      margin-bottom: 25px;
    }
  `,
};
