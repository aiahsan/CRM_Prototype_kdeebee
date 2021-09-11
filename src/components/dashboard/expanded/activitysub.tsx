import Icon from '../../../icons/icons';
import { css } from '@emotion/css';
import { theme } from '../../../styles/theme';
interface Props {
  icon: string;
  title: string;
  midtitle?: string;
  nextTitle?: string;
}
export default function RCom(props: Props) {
  const { nextTitle, title, midtitle, icon } = props;
  return (
    <div className={Style.GH1}>
      <Icon icon={icon} />
      <p
        className={css`
          ${Style.GH4}
          ${Style.GH2}
        `}
      >
        {title}
      </p>
      <p
        className={css`
          ${Style.GH4}
          ${Style.GH3}
        `}
      >
        &thinsp;
        {midtitle ? midtitle : ''}
      </p>
      <p
        className={css`
          ${Style.GH4}
        `}
      >
        &thinsp;
        {nextTitle ? nextTitle : ''}
      </p>
    </div>
  );
}

const Style = {
  GH1: css`
    display: flex;
    align-items: center;
    margin-top: 7px;
  `,
  GH2: css`
    margin-left: 10px;
    color: ${theme.colorGrey1};
  `,
  GH3: css`
    color: ${theme.colorBlue1};
  `,
  GH4: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize13};
    line-height: 15px;
    align-items: center;
    letter-spacing: 0.01em;
    margin: 0px;
  `,
};
