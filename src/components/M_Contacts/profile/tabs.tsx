import Icon from '../../../icons/icons';
import { css } from '@emotion/css';
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
          ${isActive ? 'color: #000000;' : 'color: #586069;'}
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
    background-color: white;
    border-top: 3px solid #b6af9d;
    border-left: 1px solid #e1e4e8;
    border-right: 1px solid #e1e4e8;
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
  GH5: css`
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
  GH6: css`
    background: #f2f2f2;

    height: 64px;
    border: 1px solid #e1e4e8;
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
