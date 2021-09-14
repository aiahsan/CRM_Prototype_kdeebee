import Icon from '../../icons/icons';
import { css } from '@emotion/css';
import { useHistory } from 'react-router-dom';
import { theme } from '../../styles/theme';
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
          ${isActive
            ? `color: ${theme.colorBlack};`
            : `color: ${theme.colorGrey1};`}
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
    max-width: 978.97px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,

  GH5: css`
    background: ${theme.colorWhite2};

    height: 64px;
    border: 1px solid ${theme.colorWhite3};
    align-items: flex-end;
    display: flex;
  `,
  GH3: css`
    background-color: ${theme.colorWhite};
    border-top: 3px solid ${theme.colorGrey};
    border-left: 1px solid ${theme.colorWhite3};
    border-right: 1px solid ${theme.colorWhite3};
    border-bottom: 0px;
    padding-bottom: 3px;
  `,
  GH1: css`
    display: flex;

    cursor: pointer;
    min-width: 151px;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 0px 28px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    @media (max-width: 1010px) {
      min-width: initial;
    }
  `,
  GH2: css`
    margin: 0px 4px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
    letter-spacing: -0.07em;
    
    @media (max-width: 768px) {
      display: none;
    }
  `,
  GH4: css`
    @media (max-width: 425px) {
      display: none;
    }
    margin: 0px;
    background: #e8e9eb;
    width: 24px;
    height: 15px;
    color: ${theme.colorGrey1};
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    border-radius: 7px;
    padding-left: 4px;
    padding-top: 1px;
  `,
};
