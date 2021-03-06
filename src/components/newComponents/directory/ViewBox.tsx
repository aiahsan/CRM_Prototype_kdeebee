import { css } from '@emotion/css';
import { DirectoryBoxProps } from '../../../interface';
import ViewBoxText from './ViewBoxText';
import { theme } from '../../../styles/theme';
const ViewBox = (props: DirectoryBoxProps) => {
  const { title, image, subtitle } = props;

  return (
    <div
      onClick={() => (props.onClick ? props.onClick() : () => null)}
      className={Style.ps1}
    >
      <div className={css``}>
        <img className={Style.ps2} src={image} alt='' />
      </div>
      <div className={Style.ps3}>
        <div className={Style.ps4}>
          <p className={Style.ps5}>{title}</p>
          <p className={Style.PS7}>-</p>
          <p className={Style.ps6}>{subtitle}</p>
        </div>

        <div className={Style.ps8}>
          <ViewBoxText
            key1='Type'
            value1='Equity'
            key2='Asset Geography'
            value2='United States'
          />
          <ViewBoxText
            key1='Sector'
            value1='Healthcare & Pharma'
            key2='Indication of Interest by'
            value2='30 Apr 2021'
          />
          <ViewBoxText
            key1='Expected IRR'
            value1='> 20%'
            key2='Investment Horizon'
            value2='4 Years'
          />
          <ViewBoxText
            key1='Target Raise'
            value1='USD 2.8m'
            key2='Introduced by'
            value2='Strategic Partner'
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
    border-bottom: 1px solid ${theme.colorWhite3};
    cursor: pointer;
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
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize20};
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: ${theme.colorBlack};
    margin: 0px;
  `,
  ps6: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: ${theme.colorGrey1};
    margin: 0px;
  `,
  PS7: css`
    margin: 0px 9.5px;
  `,
  ps8: css`
    margin-top: 27px;
  `,
};

export default ViewBox;
