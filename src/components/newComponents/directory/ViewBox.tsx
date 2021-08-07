import { css, cx } from '@emotion/css';
import React from 'react';
import { DirectoryBoxProps } from '../../../interface';
import ViewBoxText from './ViewBoxText';
const ViewBox = (props: DirectoryBoxProps) => {
  const { title, image, subtitle } = props;

  return (
    <div className={Style.ps1}>
      <div className={css``}>
        <img className={Style.ps2} src={image} alt='' />
      </div>
      <div className={Style.ps3}>
        <div className={Style.ps4}>
          <p className={Style.ps5}>{title}</p>
          <p
            className={css`
              margin: 0px 9.5px;
            `}
          >
            -
          </p>
          <p className={Style.ps6}>{subtitle}</p>
        </div>

        <div
          className={css`
            margin-top: 27px;
          `}
        >
          <ViewBoxText
            key1='Type'
            value1='Equity'
            key2='Asset Geography'
            value2='United States'
          />
          <ViewBoxText
            key1='Sector'
            value1='Healthcare & Pharma'
            key2='Indication of Interest by'
            value2='30 Apr 2021'
          />
          <ViewBoxText
            key1='Expected IRR'
            value1='> 20%'
            key2='Investment Horizon'
            value2='4 Years'
          />
          <ViewBoxText
            key1='Target Raise'
            value1='USD 2.8m'
            key2='Introduced by'
            value2='Strategic Partner'
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
};

const Style = {
  ps3: css`
    margin-left: 28px;
    margin-top: 20px;
  `,
  ps2: css`
    width: 208px;
    height: 224px;
  `,
  ps1: css`
    display: flex;
    padding: 16px 0px 16px 16px;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 881px) {
      overflow: scroll;
    }
    @media (max-width: 535px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  ps4: css`
    display: flex;
  `,
  ps5: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;
  `,
  ps6: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    margin: 0px;
  `,
};

export default ViewBox;
