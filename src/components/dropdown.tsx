import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Icon from '../icons/icons';
import { css, cx } from '@emotion/css';
interface Props {
  title: String;
}
export default (props: Props) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className={css`
            ${Style.GH1}
            ${Style.GH2}
            &:hover {
              ${Style.GH1}
            }
          `}
        >
          <p className={Style.GH3}>{props.title}</p>
          <Icon icon='chevblackdown' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const Style = {
  GH1: css`
    background-color: transparent !important;
    border: transparent !important;
  `,
  GH2: css`
    font-family: Lucida Grande;
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 15px !important;
    line-height: 18px !important;

    display: flex !important;
    align-items: center !important;
    letter-spacing: -1px !important;

    color: #444d56 !important;
    padding: 0px !important;
    &::after {
      border: none !important;
    }
  `,
  GH3: css`
    margin: 0px;
    margin-right: 3.5px;
  `,
};
