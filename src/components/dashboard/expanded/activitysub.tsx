import React from 'react';
import Icon from '../../../icons/icons';
import { css, cx } from '@emotion/css';
interface Props {
  icon: string;
  title: string;
  midtitle?: string;
  nextTitle?: string;
}
export default (props: Props) => {
  const { nextTitle, title, midtitle, icon } = props;
  return (
    <div className={Style.GH1}>
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.GH4}
          ${Style.GH2}
        `}
      >
        {title}
      </p>
      <p
        className={css`
          ${Style.GH4}
          ${Style.GH3}
        `}
      >
        &thinsp;
        {midtitle ? midtitle : ''}
      </p>
      <p
        className={css`
          ${Style.GH4}
        `}
      >
        &thinsp;
        {nextTitle ? nextTitle : ''}
      </p>
    </div>
  );
};

const Style = {
  GH1: css`
    display: flex;
    align-items: center;
    margin-top: 7px;
  `,
  GH2: css`
    margin-left: 10px;
    color: #586069;
  `,
  GH3: css`
    color: #1269d3;
  `,
  GH4: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    align-items: center;
    letter-spacing: 0.01em;
    margin: 0px;
  `,
};
