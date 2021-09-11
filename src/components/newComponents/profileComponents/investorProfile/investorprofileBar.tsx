import Icon from '../../../../icons/icons';
import { css } from '@emotion/css';
import { theme } from '../../../../styles/theme';
export default function RCom({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className={Style.ps1}>
      <p className={Style.ps2}>{title}</p>
      <div className={Style.ps3}>
        <div className={Style.ps4}>All</div>
        {items.map((x, i) => (
          <div className={Style.ps5} key={i}>
            {x}
            <div className={Style.ps6}>
              <Icon icon='crossgry' />
            </div>
          </div>
        ))}
      </div>
      <div className={Style.ps7}>
        <p className={Style.ps8}>Select at least one</p>
        <Icon icon='crossred' />
      </div>
    </div>
  );
}

const Style = {
  ps1: css`
    margin-top: 35px;
    margin-left: 60px;
  `,
  ps2: css`
    margin: 0px;
    font-weight: 700;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: ${theme.colorGrey1};
  `,
  ps3: css`
    display: flex;
    margin-top: 17px;
    align-items: center;
    @media (max-width: 556px) {
      flex-wrap: wrap;
    }
  `,
  ps4: css`
    margin-right: 8px;
    background: #e0e0e0;
    border-radius: 18px;
    padding: 8.5px 12px;
    height: 100%;
    font-size: ${theme.fontSize13};
    line-height: 15px;
    letter-spacing: -0.03em;
    @media (max-width: 556px) {
      margin-bottom: 10px;
    }
  `,
  ps5: css`
    border: 2px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 18px;
    padding: 5.5px 12px;
    font-size: ${theme.fontSize13};
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;
    color: ${theme.colorBlack};
    margin-right: 8px;
    @media (max-width: 556px) {
      margin-bottom: 10px;
    }
  `,
  ps6: css`
    margin-left: 10px;
  `,
  ps7: css`
    display: flex;
    align-items: center;
    margin-top: 12px;
    margin-left: 4px;
  `,
  ps8: css`
    font-size: ${theme.fontSize11};
    line-height: 13px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: ${theme.colorBlack};
    margin-left: 4px;
    margin-bottom: 0px;
    margin-right: 4px;
}
    `,
};
