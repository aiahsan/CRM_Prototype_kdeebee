import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../styles/theme';
export default function RCom({ active }: { active: number }) {
  const history = useHistory();

  return (
    <div className={Style.g6}>
      <button
        onClick={() => history.push('/io/investor')}
        className={`

        ${
          active == 0
            ? css`
                ${Style.g7}
                ${Style.g8}
                ${Style.g9}
              `
            : css`
                ${Style.g8}
                ${Style.g9}
                background-color: ${theme.colorWhite};
              `
        }

    `}
      >
        <div className={Style.g10}>
          <Icon
            icon='userb1'
            color={active == 0 ? `${theme.colorWhite}` : `${theme.colorBlack}`}
          />
        </div>
        <span className={Style.g15}> By Investor</span>
      </button>
      <button
        onClick={() => history.push('/io/parameter')}
        className={`
        ${active == 1 ? Style.g7 : Style.g11}
       ${Style.g8}
       ${Style.g14}
       `}
      >
        <div className={Style.g10}>
          <Icon
            icon='filterb1'
            color={active == 1 ? `${theme.colorWhite}` : `${theme.colorBlack}`}
          />
        </div>
        <span className={Style.g15}> By Parameter</span>
      </button>
      <button
        onClick={() => history.push('/io/insight')}
        className={`
        ${active == 2 ? Style.g7 : Style.g11}
       ${Style.g8}
       ${Style.g14}
       `}
      >
        <div className={Style.g10}>
          <Icon
            icon='eyeb1'
            color={active == 2 ? `${theme.colorWhite}` : `${theme.colorBlack}`}
          />
        </div>
        <span className={Style.g15}> Insight</span>
      </button>
      <button
        onClick={() => history.push('/io/feedback')}
        className={`

        ${active == 3 ? Style.g7 : Style.g11}
       ${Style.g8}
       ${Style.g14}
       ${Style.g12}
       `}
      >
        <div className={Style.g10}>
          <Icon
            icon='pencilb1'
            color={active == 3 ? `${theme.colorWhite}` : `${theme.colorBlack}`}
          />
        </div>
        <span className={Style.g15}>Feedback</span>
      </button>
    </div>
  );
}

const Style = {
  g15: css`
    @media (max-width: 473px) {
      display: none;
    }
  `,
  g6: css`
    margin: 24px 0px;
    display: flex;
    @media (max-width: 473px) {
      justify-content: center;
    }
  `,
  g7: css`
    background: ${theme.colorGrey};
    border: 1px solid ${theme.colorGrey};
    color: ${theme.colorWhite};
  `,
  g9: css`
    border-radius: 4px 0px 0px 4px;
  `,

  g11: css`
    background-color: ${theme.colorWhite};
    border-left: none;
  `,
  g8: css`
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;

    padding: 9px 16px;
    font-weight: bold;
    font-size: ${theme.fontSize14};
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
  `,
  g12: css`
    border-radius: 0px 4px 4px 0px;
  `,
  g10: css`
    margin-right: 4px;
  `,
  g14: css`
    border-left: 0px;
  `,
};
