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
        ${Style.GH2}
        ${isActive ? Style.GH1 : ''}
        ${Style.GH3}
      `}
    >
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.GH4}
          ${isActive
            ? `color: ${theme.colorBlack};`
            : `color: ${theme.colorGrey1};`}
        `}
      >
        {title}
      </p>
      {subtitle != '' ? (
        <p
          className={css`
            ${Style.GH5}
          `}
        >
          {subtitle}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
export default function RCom(props: Propos) {
  return (
    <div className={Style.GH6}>
      <div className={Style.GH7}>
        <div className={Style.GH2}>
          <Tab
            isActive={props.activeTab == 0 ? true : false}
            icon='chain'
            title='Timeline'
            subtitle=''
          />
          <Tab
            isActive={props.activeTab == 1 ? true : false}
            icon='menu'
            title='Profile'
            subtitle=''
          />
          <Tab
            isActive={props.activeTab == 2 ? true : false}
            icon='dollar1'
            title='Preferences'
            subtitle=''
          />
        </div>
      </div>
    </div>
  );
}

const Style = {
  GH1: css`
    background-color: ${theme.colorWhite};
    border-top: 3px solid ${theme.colorGrey};
    border-left: 1px solid ${theme.colorWhite3};
    border-right: 1px solid ${theme.colorWhite3};
    border-bottom: 0px;
  `,
  GH2: css`
    display: flex;
  `,
  GH3: css`
    cursor: pointer;
    width: 161px;
    height: 40px;
    align-items: center;
    justify-content: center;
  `,
  GH4: css`
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
  GH5: css`
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
    @media (max-width: 535px) {
      display: none;
    }
  `,
  GH6: css`
    background: ${theme.colorWhite2};

    height: 64px;
    border: 1px solid ${theme.colorWhite3};
    align-items: flex-end;
    display: flex;
  `,

  GH7: css`
    max-width: 613px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
  `,
};
