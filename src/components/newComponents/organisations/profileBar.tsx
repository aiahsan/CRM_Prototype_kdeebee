import avt1 from '../../../images/img1big.png';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import rothschild from '../../../images/Rothschild.png';

const ProfileBar = () => {
  return (
    <div className={Style.p1}>
      <div>
        <img src={avt1} className={Style.p2} />

        <h1 className={Style.p3}>Blu Family Office</h1>
      </div>
      <div className={Style.p4}></div>

      <div className={Style.p5}>
        <h2 className={Style.p6}>Highlights</h2>
        <div className={`d-flex ml-2 align-items-center ${Style.p7}`}>
          <Icon icon='org1' />
          <p
            className={css`
              ${Style.p8}
            `}
          >
            Family Office
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.p7}`}>
          <Icon icon='empl' />
          <p
            className={css`
              ${Style.p8}
            `}
          >
            7 Team Members
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.p7}`}>
          <Icon icon='chain1' />
          <p
            className={css`
              ${Style.p8}
            `}
          >
            www.blu-fo.com
          </p>
        </div>

        <div className={`d-flex ml-2 align-items-center ${Style.p7}`}>
          <Icon icon='landline' />
          <p
            className={css`
              ${Style.p8}
            `}
          >
            +44 208 166 1223
          </p>
        </div>
      </div>
      <div className={Style.p4}></div>

      <div className={Style.p4}></div>

      <div className={Style.p4}></div>
      <div className={Style.p21}>
        <h2 className={Style.p16}>BD Partner</h2>
        <div className={Style.p18}>
          <img className={Style.p19} src={rothschild} alt='' />
          <p className={Style.p20}>Rothschild & Co.</p>
        </div>
      </div>
    </div>
  );
};

const Style = {
  p10: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin-top: 17px;
    margin-bottom: 26px;
  `,
  p11: css`
    background: linear-gradient(
      180deg,
      rgba(190, 190, 190, 0.5) 0%,
      rgba(219, 219, 219, 0.5) 100%
    );
    border: 1px solid #7c7c7c;
    box-sizing: border-box;
    border-radius: 5px;
    width: 224px;
    height: 24px;
  `,
  p12: css`
    background: #b6af9d;
    border-radius: 3px;
    width: 89px;
    height: 16px;
    margin: 3px;
  `,
  p13: css`
    position: relative;
  `,
  p14: css`
    width: 40px;
    background: #4e4b5b;
    height: 40px;
    border-radius: 40px;
    position: absolute;
    left: 40%;
    top: -29px;
  `,
  p15: css`
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.07em;
    color: #ffffff;
    position: relative;
    top: 8px;
    left: 5px;
  `,

  p16: css`
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
  p18: css`
    display: flex;
    align-items: center;
  `,
  p19: css`
    width: 25px;
    height: 25px;
    margin: 7px;
  `,
  p20: css`
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.08em;
    color: #5b626a;
    margin: 0px;
  `,

  p8: css`
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

  p1: css`
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
    @media (max-width: 556px) {
      display: block;
      padding: 10px;
    }
  `,

  p2: css`
    width: 224px;
    height: 224px;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  `,
  p3: css`
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
    margin-bottom: 22px;
  `,

  p4: css`
    height: 0.1px;
    background-color: #e1e4e8;
  `,

  p5: css`
    margin-top: 17.51px;
    margin-bottom: 18.49px;
  `,
  p6: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin-bottom: 18px;
  `,
  p7: css`
    margin-top: 10px;
  `,
  p9: css`
    margin-top: 10px;
    margin-bottom: 22px;
  `,
  p21: css`
    margin-top: 17px;
    margin-bottom: 17px;
  `,
};
export default ProfileBar;
