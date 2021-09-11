import { css } from '@emotion/css';
import { theme } from '../styles/theme';

interface SideMenuProps {
  title: string;
  isActive: boolean;
  islast: boolean;
  onClick?: () => void;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive, islast, onClick } = props;
  return (
    <div
      onClick={() => (onClick ? onClick() : console.log())}
      className={css`
        ${Style.sp1}
        ${isActive == true
          ? `border-left:2.03px solid ${theme.colorGrey};`
          : ''}
          ${islast == true
          ? `border-bottom: 1px solid ${theme.colorWhite3};`
          : ''}
      `}
    >
      {title}
    </div>
  );
};

const Style = {
  sp1: css`
    background: ${theme.colorWhite};
    border-top: 1px solid ${theme.colorWhite3};
    border-left: 1px solid ${theme.colorWhite3};
    border-right: 1px solid ${theme.colorWhite3};
    padding: 10px 0px 11px 9.12px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize14};
    line-height: 16px;
    letter-spacing: -0.03em;
    color: ${theme.colorBlack};
    width: 224px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 98%;
      margin: 0px 1%;
    }
  `,
};
export default SideMenu;
