import React from 'react';
import { css } from '@emotion/css';
interface SideMenuProps {
  title: string;
  isActive: boolean;
  islast: boolean;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive, islast } = props;
  return (
    <div
      className={css`
        ${Style.sp1}
        ${isActive == true ? 'border-left:2.03px solid #B6AF9D;' : ''}
          ${islast == true ? 'border-bottom: 1px solid #e1e4e8;' : ''}
      `}
    >
      {title}
    </div>
  );
};

const Style = {
  sp1: css`
    background: #ffffff;
    border-top: 1px solid #e1e4e8;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
    padding: 10px 0px 11px 9.12px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.03em;
    color: #000000;
    width: 224px;
    // border-bottom: 0.5px solid #e1e4e8;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 98%;
      margin: 0px 1%;
    }
  `,
};
export default SideMenu;
