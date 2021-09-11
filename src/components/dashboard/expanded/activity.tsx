import { css } from '@emotion/css';
import { theme } from '../../../styles/theme';
interface Props {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  status: string;
}
export default function RCom(props: Props) {
  const { image, title, subtitle, date, status } = props;
  return (
    <div className={Style.GH1}>
      <img className={Style.GH2} src={image} alt='' />
      <div className={Style.GH3}>
        <p
          className={css`
            ${Style.GH4}
            ${Style.GH5}
          `}
        >
          {title}
        </p>
        <p
          className={css`
            ${Style.GH4}
            ${Style.GH6}
          `}
        >
          &thinsp; {status}
        </p>
        {subtitle ? (
          <p
            className={css`
              ${Style.GH4}
              ${Style.GH7} 
              ${Style.GH6}
            `}
          >
            &thinsp;
            {subtitle}
          </p>
        ) : (
          <></>
        )}
        <p
          className={css`
            ${Style.GH4}
            ${Style.GH8}
          `}
        >
          &thinsp; -
        </p>
        <p
          className={css`
            ${Style.GH4}
            ${Style.GH9}
          ${Style.GH6}
          ${Style.GH10}
          `}
        >
          &thinsp;{date}
        </p>
      </div>
    </div>
  );
}

const Style = {
  GH1: css`
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
  `,
  GH9: css`
    font-size: ${theme.fontSize13};

    color: ${theme.colorGrey1};
  `,
  GH7: css`
    color: ${theme.colorBlue1};
  `,
  GH2: css`
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
  `,
  GH5: css`
    font-weight: bold;
    font-size: ${theme.fontSize15};
  `,
  GH4: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    line-height: 18px;
    align-items: center;
    letter-spacing: -0.03em;
    margin: 0px;
  `,
  GH3: css`
    display: flex;
    @media (max-width: 535px) {
      flex-direction: column;
    }
  `,
  GH8: css`
    @media (max-width: 535px) {
      display: none;
    }
  `,
  GH6: css`
    @media (max-width: 535px) {
      margin-left: -7px;
    }
  `,
  GH10: css`
    @media (max-width: 535px) {
      margin-bottom: 18px;
      margin-top: 2px;
    }
  `,
};
