import Icon from '../../../icons/icons';
import { css } from '@emotion/css';
import { TimelineTabProps, TimeLineItemProps } from '../../../interface';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../styles/theme';
const Tab = (props: TimelineTabProps) => {
  const { icon, title, subtitle, isActive, onClick } = props;
  return (
    <div
      onClick={() => {
        onClick ? onClick() : console.log();
      }}
      className={css`
        ${isActive ? Style.p1 : ''}
        ${Style.p2}
      `}
    >
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.p3}
          ${isActive
            ? `color: ${theme.colorBlack};`
            : `color: ${theme.colorGrey1};`}
        `}
      >
        {title}
      </p>
      {subtitle != '' ? <p className={Style.p4}>{subtitle}</p> : <></>}
    </div>
  );
};
export default function RCom(props: TimeLineItemProps) {
  const history = useHistory();

  return (
    <div className={Style.p5}>
      <div className={Style.p6}>
        <div className={Style.GH6}>
          <Tab
            isActive={props.activeTab == 0 ? true : false}
            icon='chain'
            title='Timeline'
            subtitle=''
            onClick={() => history.push('/io/timeline')}
          />
          <Tab
            isActive={props.activeTab == 1 ? true : false}
            icon='menu'
            title='Profile'
            subtitle='41'
            onClick={() => history.push('/io/profile')}
          />
          <Tab
            isActive={props.activeTab == 2 ? true : false}
            icon='research'
            title='Knowledge'
            subtitle=''
            onClick={() => history.push('/io/knowledge')}
          />
          <Tab
            isActive={props.activeTab == 3 ? true : false}
            icon='puzzle'
            title='SMART Match'
            subtitle=''
            onClick={() => history.push('/io/investor')}
          />
        </div>
      </div>
    </div>
  );
}

const Style = {
  p1: css`
    background-color: ${theme.colorWhite};
    border-top: 3px solid ${theme.colorGrey};
    border-left: 1px solid ${theme.colorWhite3};
    border-right: 1px solid ${theme.colorWhite3};
    border-bottom: 0px;
    padding-bottom: 3px;
  `,
  p2: css`
    display: flex;
    cursor: pointer;
    min-width: 171px;
    height: 40px;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-width: initial;
      margin-right: 20px;
    }
  `,
  p3: css`
    margin: 0px 4px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
    letter-spacing: -0.07em;

    @media (max-width: 534px) {
      display: none;
    }
  `,
  p4: css`
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
  p5: css`
    background: ${theme.colorWhite2};

    height: 64px;
    border: 1px solid ${theme.colorWhite3};
    align-items: flex-end;
    display: flex;
  `,
  p6: css`
    max-width: 613px;
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
};
