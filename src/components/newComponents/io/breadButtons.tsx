import React from 'react';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import { useHistory } from 'react-router-dom';

export default ({ active }: { active: number }) => {
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
                background-color: white;
              `
        }

    `}
      >
        <div className={Style.g10}>
          <Icon icon='userb1' color={active == 0 ? 'white' : 'black'} />
        </div>
        By Investor
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
          <Icon icon='filterb1' color={active == 1 ? 'white' : 'black'} />
        </div>
        By Parameter
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
          <Icon icon='eyeb1' color={active == 2 ? 'white' : 'black'} />
        </div>
        Insight
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
          <Icon icon='pencilb1' color={active == 3 ? 'white' : 'black'} />
        </div>
        Feedback
      </button>
    </div>
  );
};

const Style = {
  g6: css`
    margin: 24px 0px;
    display: flex;
  `,
  g7: css`
    background: #b6af9d;
    border: 1px solid #b6af9d;
    color: #ffffff;
  `,
  g9: css`
    border-radius: 4px 0px 0px 4px;
  `,

  g11: css`
    background-color: white;
    border-left: none;
  `,
  g8: css`
    border: 1px solid #e1e4e8;
    box-sizing: border-box;

    padding: 9px 16px;
    font-weight: bold;
    font-size: 14px;
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
