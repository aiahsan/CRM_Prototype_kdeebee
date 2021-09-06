import React from 'react';
import { css, cx } from '@emotion/css';

interface Props {
  image?: string;
  title: string;
  email: string;
  status?: string;
  lastActitvy: string;
  tag?: string;
  onClick?: () => void;
}
export default (props: Props) => {
  const { image, title, email, status, lastActitvy, tag, onClick } = props;
  return (
    <div
      onClick={() => (onClick ? onClick() : () => console.log())}
      className={Style.GH4}
    >
      {image ? (
        <>
          <input className={Style.GH1} type='checkbox' />{' '}
          <img className={Style.GH2} src={image} alt='' />
        </>
      ) : (
        <></>
      )}
      <div>
        <div className='d-flex flex-wrap'>
          <p
            className={css`
              ${Style.GH9}
              ${Style.GH6}
            `}
          >
            {' '}
            {title}
          </p>

          {email != '' ? (
            <p
              className={css`
                ${Style.GH9}
                ${Style.GH7}
              `}
            >
              &thinsp; - {email}
            </p>
          ) : (
            <></>
          )}

          {status ? (
            <p
              className={css`
                ${Style.GH9}
                ${Style.GH8}
              `}
            >
              &thinsp;{status}
            </p>
          ) : (
            <></>
          )}
          {tag ? (
            <p
              className={css`
                ${Style.GH9}
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
    @media (max-width: 425pxpx) {
      margin-left: 0px;
      margin-bottom: 25px;
    }
  `,

  GH9: css`
font-family: Lucida Grande;
        font-style: normal;
        line-height: 18px;
        align-items: center;
        letter-spacing: -0.03em;
        margin-0px;
`,
  GH4: css`
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
    cursor: pointer;
  `,
  GH1: css`
    margin-right: 7.5px;
    margin-left: 4.5px;
    margin-top: 10px;
  `,
  GH2: css`
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
  `,
  GH6: css`
    font-weight: bold;
    font-size: 15px;
  `,
  GH7: css`
    font-weight: bold;
    font-size: 15px;
  `,
  GH8: css`
    font-size: 13px;
    height: 20px;
    background: rgba(142, 182, 230, 0.75);
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
