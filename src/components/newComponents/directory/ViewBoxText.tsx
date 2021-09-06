import React from 'react';
import { DirectoryBoxTextProps } from '../../../interface';
import { useMediaQuery } from 'react-responsive';
import { css, cx } from '@emotion/css';

const ViewBoxText = (props: DirectoryBoxTextProps) => {
  const { key1, key2, value1, value2 } = props;
  const isMobile = useMediaQuery({
    query: '(max-width: 535px)',
  });
  return isMobile ? (
    <>
      <div
        className={css`
            ${Style.ps1}
      border-bottom:${
        props.isLast && props.isLast == true ? '1px solid #e1e4e8' : '0px'
      }}
      `}
      >
        <p
          className={css`
            ${Style.ps2}
            ${Style.ps3}
                 ${Style.ps11}
          `}
        >
          {key1}
        </p>

        <p
          className={css`
            ${Style.ps2}
            ${Style.ps3}
               ${Style.ps10}
          `}
        >
          {value1}
        </p>
      </div>
      <div
        className={css`
        ${Style.ps1}
      border-bottom:${
        props.isLast && props.isLast == true ? '1px solid #e1e4e8' : '0px'
      }}
      `}
      >
        <p
          className={css`
            ${Style.ps2}
            ${Style.ps3}
                ${Style.ps11}
          `}
        >
          {key2}
        </p>

        <p
          className={css`
            ${Style.ps2}
            ${Style.ps3}
                 ${Style.ps10}
          `}
        >
          {value2}
        </p>
      </div>
    </>
  ) : (
    <div
      className={css`
      ${Style.ps4}
      border-bottom:${
        props.isLast && props.isLast == true ? '1px solid #e1e4e8' : '0px'
      }}
      `}
    >
      <div className={css``}>
        <div className={Style.ps5}>
          <div className={Style.ps6}>
            <p
              className={css`
                ${Style.ps2}
                ${Style.ps3}
              `}
            >
              {key1}
            </p>
            <p
              className={css`
                ${Style.ps2}
              `}
            >
              {value1}
            </p>
          </div>

          <div className={Style.ps7}>
            <p
              className={css`
                ${Style.ps2}
                ${Style.ps8}
              `}
            >
              {key2}
            </p>
            <p
              className={css`
                ${Style.ps2}
                ${Style.ps9}
              `}
            >
              {value2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBoxText;

const Style = {
  ps1: css`
    display: flex;
    padding: 6px 0px;
    border-top: 1px solid #e1e4e8;
  `,
  ps2: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.06em;
    color: #586069;
    margin: 0px;
  `,

  ps4: css`
    margin-left: 56px;
    border-top: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
    min-width: 588px;
  `,
  ps5: css`
    display: flex;
    margin-left: 10px;
    min-width: 558px;
    justify-content: space-between;
    height: 32px;
  `,
  ps6: css`
    display: flex;
    max-width: 214px;
  `,
  ps3: css`
    width: 67px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26.73px;
  `,
  ps7: css`
    display: flex;
    width: 246px;
    margin-right: 50px;
  `,
  ps8: css`
    margin-right: 27.7px;
    width: 356px;
  `,
  ps9: css`
    width: 282px;
    margin: 0px;
  `,
  ps10: css`
    width: 109px;
  `,
  ps11: css`
    width: 82px;
  `,
};
