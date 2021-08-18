import React from 'react';
import Icon from '../../../icons/icons';
import { css, cx } from '@emotion/css';
import { useHistory } from 'react-router-dom';
interface Propos {
  activeTab: number;
}
interface TabProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive: Boolean;
  onClick: () => void;
}
const Tab = (props: TabProps) => {
  const { icon, title, subtitle, isActive, onClick } = props;
  return (
    <div
      onClick={() => (onClick ? onClick() : () => console.log())}
      className={css`
        ${isActive ? Style.activeCss : ''}
        ${Style.tab1}
      `}
    >
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.tab2}
          ${isActive ? 'color: #000000;' : 'color: #586069;'}
        `}
      >
        {title}
      </p>
      {subtitle != '' ? <p className={Style.tab3}>{subtitle}</p> : <></>}
    </div>
  );
};
export default (props: Propos) => {
  const history = useHistory();
  return (
    <div className={Style.tab4}>
      <div className={Style.tab5}>
        <div
          className={css`
            display: flex;
          `}
        >
          <Tab
            onClick={() => history.push('/contacts/organisation/timeline')}
            isActive={props.activeTab == 0 ? true : false}
            icon='chain'
            title='Timeline'
            subtitle=''
          />
          <Tab
            onClick={() => history.push('/contacts/organisation/profile')}
            isActive={props.activeTab == 1 ? true : false}
            icon='menu'
            title='Profile'
            subtitle=''
          />
          <Tab
            onClick={() => history.push('/contacts/organisation/people')}
            isActive={props.activeTab == 2 ? true : false}
            icon='empl'
            title='People'
            subtitle=''
          />
        </div>
      </div>
    </div>
  );
};

const Style = {
  activeCss: css`
    background-color: white;
    border-top: 3px solid #b6af9d;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
  `,
  tab1: css`
    display: flex;
    cursor: pointer;
    width: 161px;
    height: 40px;
    align-items: center;
    justify-content: center;
  `,
  tab2: css`
    margin: 0px 4px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.07em;
    @media (max-width: 535px) {
      display: none;
    }
  `,
  tab3: css`
    margin: 0px;
    background: #e8e9eb;
    width: 24px;
    height: 15px;
    color: #586069;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    border-radius: 7px;
    padding-left: 4px;
    padding-top: 1px;
    @media (max-width: 535px) {
      display: none;
    }
  `,
  tab4: css`
    background: #f2f2f2;

    height: 64px;
    border: 1px solid #e1e4e8;
    align-items: flex-end;
    display: flex;
  `,
  tab5: css`
    max-width: 613px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,
};
