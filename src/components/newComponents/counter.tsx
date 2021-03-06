import { css } from '@emotion/css';
import Icon from '../../icons/icons';
import { theme } from '../../styles/theme';
export default function RCom() {
  return (
    <div className={Style.GH1}>
      <input className={Style.GH3} />
      <div className={Style.GH2}>
        <Icon icon='chevup' color='black' />
        <Icon icon='chevdown' color='black' />
      </div>
    </div>
  );
}

const Style = {
  GH1: css`
    border: 1px solid ${theme.colorWhite3};
    width: 56px;
    display: flex;
    border-radius: 4px;
    padding: 1px;
    align-items: center;
  `,
  GH2: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
  `,
  GH3: css`
    border: 0px;
    width: 30px;
  `,
};
