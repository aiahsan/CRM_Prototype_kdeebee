import Icon from '../../../icons/icons';
import { css } from '@emotion/css';
import { theme } from '../../../styles/theme';
interface Propos {
  activeTab: number;
}
interface TabProps {
  icon: string;
  title: string;
  subtitle: string;
  isActive: Boolean;
}
const Tab = (props: TabProps) => {
  const { icon, title, subtitle, isActive } = props;
  return (
    <div
      className={css`
        ${isActive ? Style.GH7 : ''}
        ${Style.GH1}
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
      {subtitle != '' ? <p className={Style.GH3}>{subtitle}</p> : <></>}
    </div>
  );
};
export default function RCom(props: Propos) {
  return (
    <div className={Style.GH4}>
      <div className={Style.GH5}>
        <div className={Style.GH6}>
          <Tab
            isActive={props.activeTab == 0 ? true : false}
            icon='research'
            title='Research'
            subtitle=''
          />
          <Tab
            isActive={props.activeTab == 1 ? true : false}
            icon='media'
            title='Media'
            subtitle='41'
          />
          <Tab
            isActive={props.activeTab == 2 ? true : false}
            icon='book'
            title='Literature'
            subtitle=''
          />
          <Tab
            isActive={props.activeTab == 3 ? true : false}
            icon='userp1'
            title='BDP'
            subtitle=''
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
  GH1: css`
    display: flex;
    cursor: pointer;
    width: 151px;
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
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
    letter-spacing: -0.07em;
    @media (max-width: 535px) {
      display: none;
    }
  `,
  GH3: css`
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
  GH4: css`
    background: ${theme.colorWhite2};

    height: 64px;
    border: 1px solid ${theme.colorWhite3};
    align-items: flex-end;
    display: flex;
  `,
  GH5: css`
    max-width: 728px;
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
    background-color: ${theme.colorWhite};
    border-top: 3px solid ${theme.colorGrey};
    border-left: 1px solid ${theme.colorWhite3};
    border-right: 1px solid ${theme.colorWhite3};
    border-bottom: 0px;
    padding-bottom: 3px;
  `,
};
