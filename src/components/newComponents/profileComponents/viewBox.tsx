import React from 'react';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import ViewBoxText from './viewBoxText';
import { BoxProps } from '../../../interface';
const ViewBox = (props: BoxProps) => {
  const { title, values } = props;

  return (
    <div className={Style.p1}>
      <div className={Style.p11}>
        <div className={Style.p12}>
          <p className={Style.p3}>{title}</p>
          <div className={Style.p28}>
            <Icon icon='pencil' />
          </div>
        </div>

        <div className={Style.p13}>
          {values.map((x, i) => (
            <ViewBoxText
              value1Active={x.value1Active}
              value2Active={x.value2Active}
              key={i}
              index={i}
              key1={x.key1}
              value1={x.value1}
              key2={x.key2}
              value2={x.value2}
              isLast={i == values.length ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBox;
const Style = {
  p1: css`
    display: flex;
    padding: 16px 16px 0px 16px;
  `,

  p27: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  p28: css`
    margin-left: 10px;
  `,

  p3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: #586069;

    margin: 0px;
  `,

  p11: css`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 23px;

    @media (max-width: 639px) {
      margin: 23px 0px;
      margin-bottom: 0px;
    }
  `,
  p12: css`
    display: flex;
  `,
  p13: css`
    margin-top: 11px;

    @media (max-width: 1440px) {
      max-width: 900px;
      overflow: auto;
    }
    @media (max-width: 820px) {
      max-width: 650px;
    }
    @media (max-width: 639px) {
      max-width: 525px;
    }

    @media (max-width: 556px) {
      max-width: 425pxpx;
    }
    @media (max-width: 556px) {
      max-width: 100%;
    }
  `,
};
