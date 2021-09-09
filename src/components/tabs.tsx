import Icon from '../icons/icons';
import { css } from '@emotion/css';
import { useHistory } from 'react-router-dom';
interface Propos {
  activeTab: number;
}
interface TabProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive: Boolean;
  onClick?: () => void;
}
const Tab = (props: TabProps) => {
  const { icon, title, subtitle, isActive, onClick } = props;
  return (
    <div
      onClick={() => {
        onClick ? onClick() : console.log();
      }}
      className={css`
        ${isActive ? Style.GH7 : ''}
        ${Style.GH1}
      `}
    >
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.GH2}
          ${isActive ? 'color: #000000;' : 'color: #586069;'}
        `}
      >
        {title}
      </p>
      {subtitle != '' ? <p className={Style.GH3}>{subtitle}</p> : <></>}
    </div>
  );
};
export default function RCom(props: Propos) {
  const history = useHistory();
  return (
    <div className={Style.GH4}>
      <div className={Style.GH5}>
        <div className={Style.GH6}>
          <Tab
            isActive={props.activeTab == 0 ? true : false}
            icon='meter'
            title='Dashboard'
            subtitle=''
            onClick={() => history.push('/')}
          />
          <Tab
            isActive={props.activeTab == 1 ? true : false}
            icon='menu'
            title='Directory'
            subtitle='41'
            onClick={() => history.push('/directory')}
          />
          <Tab
            isActive={props.activeTab == 2 ? true : false}
            icon='glasses'
            title='Watchlist'
            subtitle=''
            onClick={() => history.push('/watchList')}
          />
          <Tab
            isActive={props.activeTab == 3 ? true : false}
            icon='puzzle'
            title='SMART Match'
            subtitle=''
            onClick={() => history.push('/smartwatch')}
          />
          <Tab
            isActive={props.activeTab == 4 ? true : false}
            icon='settings'
            title='Admin'
            subtitle=''
            onClick={() => history.push('/directory')}
          />
        </div>
      </div>
    </div>
  );
}

const Style = {
  GH1: css`
    display: flex;
    cursor: pointer;
    min-width: 151px;
    height: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-width: initial;
      margin-right: 20px;
    }
  `,
  GH2: css`
    margin: 0px 4px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.07em;
    @media (max-width: 632px) {
      display: none;
    }
  `,
  GH3: css`
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
  `,
  GH4: css`
    background: #f2f2f2;

    height: 64px;
    border: 1px solid #e1e4e8;
    align-items: flex-end;
    display: flex;
  `,
  GH5: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,
  GH6: css`
    display: flex;
    @media (max-width: 632px) {
      justify-content: space-between;
    }
  `,
  GH7: css`
    background-color: white;
    border-top: 3px solid #b6af9d;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
    border-bottom: 0px;
    padding: 0px 26px;
  `,
};
