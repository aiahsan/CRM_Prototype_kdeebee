import { css } from '@emotion/css';
import { theme } from '../../../styles/theme';
import { profileProps } from '../../../interface';
export default function RCom(props: profileProps) {
  const { img, title, LastActive, type } = props;
  return (
    <div className={Style.GH1}>
      {type ? <></> : <input className={Style.GH2} type='checkbox' />}

      <img className={Style.GH3} src={img} alt='' />
      <div>
        <div className='d-flex flex-wrap'>
          <p
            className={css`
              ${Style.GH4}
              ${Style.GH5}
            `}
          >
            {' '}
            {title}
          </p>
        </div>
        <div>
          <p className={Style.GH6}>{LastActive}</p>
        </div>
      </div>
    </div>
  );
}

const Style = {
  GH6: css`
    margin: 0px;
    margin-top: -12px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize11};
    line-height: 13px;
    letter-spacing: -0.03em;
    color: ${theme.colorGrey9};
    margin-bottom: 11px;
  `,

  GH4: css`
font-family: ${theme.fontFamilyMain}
        font-style: normal;
        line-height: 18px;
        align-items: center;
        letter-spacing: -0.03em;
        margin-0px;
`,
  GH1: css`
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
  `,
  GH2: css`
    margin-right: 7.5px;
    margin-left: 4.5px;
    margin-top: 10px;
  `,
  GH3: css`
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
    margin-right: 10px;
  `,
  GH5: css`
    font-weight: bold;
    font-size: ${theme.fontSize15};
  `,
};
