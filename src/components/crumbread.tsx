import React from 'react';
import { css, cx } from '@emotion/css';
import Icon from '../icons/icons';
interface Props {
  list: Array<string>;
  activeIndex: number;
}
interface CrumProps {
  title: string;
  isActive: boolean;
}
const Crum = (props: CrumProps) => {
  return (
    <p
      className={css`
        ${Style.GH1}
        ${props.isActive ? 'color: #B6AF9D;' : 'color: #FFFFFF;'}
      `}
    >
      {props.title}
    </p>
  );
};
export default (props: Props) => {
  const { activeIndex, list } = props;
  return (
    <>
      <div className={Style.GH2}>
        {list.map((x, i) => (
          <div className={Style.GH3} key={i}>
            {i == 0 ? (
              <></>
            ) : (
              <div className={Style.GH4}>
                <Icon icon='chevright' />
              </div>
            )}
            <Crum isActive={i == activeIndex} title={x} />
          </div>
        ))}
      </div>
    </>
  );
};
const Style = {
  GH1: css`
    margin: 0px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  GH2: css`
    height: 32px;
    background: #4e4b5b;
    padding: 8px 30.52px 10px 30.52px;
    display: flex;
  `,
  GH3: css`
    display: flex;
    align-items: center;
  `,
  GH4: css`
    display: flex;
    margin: 0px 4px;
  `,
};
