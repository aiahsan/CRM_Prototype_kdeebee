import { css } from '@emotion/css';
import ViewBoxText from './ViewBoxText';
const ViewBox = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className={Style.ps1}>
      <div className={css``}>
        <img className={Style.ps2} src={image} alt='' />
      </div>
      <div className={Style.ps3}>
        <div className={Style.ps4}>
          <p className={Style.ps5}>{title}</p>
        </div>

        <div
          className={css`
            margin-top: 27px;
          `}
        >
          <ViewBoxText
            key1='Topic'
            value1='Industry Intro'
            key2='Type'
            value2='IANUA Research'
            variant={1}
            isLast={false}
          />
          <ViewBoxText
            key1='Sector'
            value1='Healthcare & Pharma'
            key2='Indication of Interest by'
            value2='30 Apr 2021'
            variant={1}
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
};

const Style = {
  ps3: css`
    margin-left: 28px;
    margin-top: 20px;
  `,
  ps2: css`
    width: 208px;
    height: 224px;
  `,
  ps1: css`
    display: flex;
    padding: 16px 0px 16px 16px;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 881px) {
      overflow: scroll;
    }
    @media (max-width: 535px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  ps4: css`
    display: flex;
  `,
  ps5: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;
  `,
  ps6: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    margin: 0px;
  `,
};

export default ViewBox;
