import avt1 from '../../../images/pc1.png';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';

export default function RCom() {
  return (
    <div className={Style.ps1}>
      <div>
        <img src={avt1} className={Style.ps2} />

        <h1 className={Style.ps3}>Project Fluid</h1>
        <h2 className={Style.ps4}>Equity Investment in a Biotech Start-Up</h2>
      </div>
      <div className={Style.ps5}></div>

      <div
        className={css`
          ${Style.ps6}
        `}
      >
        <div className={`d-flex ml-2 align-items-center ${Style.ps7}`}>
          <Icon icon='light' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            Open in Knowledge Center
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.ps9}`}>
          <Icon icon='glasses' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            Add to Watchlist
          </p>
        </div>
      </div>
      <div className={Style.ps10}></div>

      <div className={Style.ps11}>
        <h2 className={Style.ps12}>Highlights</h2>
        <div className={`d-flex ml-2 align-items-center ${Style.ps13}`}>
          <Icon icon='eql' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            Equity
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.ps13}`}>
          <Icon icon='sector' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            Healthcare & Pharma
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.ps13}`}>
          <Icon icon='earth' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            United States
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.ps13}`}>
          <Icon icon='clock' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            4 Years Investment Horizon
          </p>
        </div>

        <div
          className={`d-flex ml-2 align-items-center ${Style.ps14} ${Style.ps10}`}
        >
          <Icon icon='dollar' />
          <p
            className={css`
              ${Style.ps8}
            `}
          >
            USD 2.8m Target Raise
          </p>
        </div>
      </div>
    </div>
  );
}

const Style = {
  ps8: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    letter-spacing: -0.08em;
    color: #5b626a;
    margin: 0px;
    margin-left: 6px;
  `,

  ps1: css`
    margin-right: 28px;
    max-width: 224px;
    position: relative;
    bottom: 29px;
    @media (max-width: 1024px) {
      bottom: 0px;
      margin-top: 10px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 100%;
    }
    @media (max-width: 532px) {
      display: block;
      padding: 10px;
    }
  `,
  ps6: css`
    @media (max-width: 1024px) {
      margin-right: 15px;
    }
    @media (max-width: 532px) {
      margin: 0;
    }
  `,
  ps2: css`
    width: 224px;
    height: 224px;
    border-radius: 224px;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  `,
  ps3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;
    margin-top: 22px;
  `,
  ps4: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 22px 0px;
  `,
  ps5: css`
    height: 0.1px;
    background-color: #e1e4e8;
  `,
  ps7: css`
    margin-top: 22px;
  `,
  ps9: css`
    margin-top: 10px;
    margin-bottom: 22px;
  `,
  ps10: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  ps11: css`
    margin-top: 17.51px;
    margin-bottom: 18.49px;
  `,
  ps12: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
  `,
  ps13: css`
    margin-top: 10px;
  `,

  ps14: css`
    margin-top: 10px;
    padding-bottom: 26px;
  `,
};
