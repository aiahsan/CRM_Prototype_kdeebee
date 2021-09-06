import Icon from '../../icons/icons';
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
        ${Style.GH1}
        ${isActive ? Style.GH3 : ''}
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
      {subtitle != '' ? <p className={Style.GH4}>{subtitle}</p> : <></>}
    </div>
  );
};
export default function RCom(props: Propos) {
  const history = useHistory();

  return (
    <div className={Style.GH5}>
      <div className={Style.GH6}>
        <div className={Style.GH7}>
          <Tab
            isActive={props.activeTab == 0 ? true : false}
            icon='meter'
            title='Dashboard'
            subtitle=''
            onClick={() => history.push('/contacts')}
          />
          <Tab
            isActive={props.activeTab == 1 ? true : false}
            icon='menu'
            title='People'
            subtitle='87'
            onClick={() => history.push('/contacts/people')}
          />
          <Tab
            isActive={props.activeTab == 2 ? true : false}
            icon='org'
            title='Organisations'
            subtitle='10'
            onClick={() => history.push('/contacts/organsiation')}
          />
          <Tab
            isActive={props.activeTab == 3 ? true : false}
            icon='chain1'
            title='Reconcile'
            subtitle='11'
            onClick={() => history.push('/contacts/recoil')}
          />
          <Tab
            isActive={props.activeTab == 4 ? true : false}
            icon='settings'
            title='Admin'
            subtitle=''
          />
        </div>
      </div>
    </div>
  );
}

const Style = {
  GH7: css`
    display: flex;
  `,
  GH6: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,

  GH5: css`
    background: #f2f2f2;

    height: 64px;
    border: 1px solid #e1e4e8;
    align-items: flex-end;
    display: flex;
  `,
  GH3: css`
    background-color: white;
    border-top: 3px solid #b6af9d;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
  `,
  GH1: css`
    display: flex;

    cursor: pointer;
    width: 151px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-left: 28px;
  `,
  GH2: css`
    margin: 0px 4px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.07em;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  GH4: css`
    @media (max-width: 425pxpx) {
      display: none;
    }
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
};
