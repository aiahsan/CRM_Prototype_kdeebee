import Dropdown from '../../dropdown';
import Icon from '../../../icons/icons';
import { css } from '@emotion/css';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../styles/theme';
const SearchBar = ({ variant }: { variant?: number }) => {
  const history = useHistory();
  return (
    <div className={Style.p5}>
      <div className={Style.p1}>
        <div className={Style.p2}>
          <Dropdown title='All activity' />
        </div>
        <div className={Style.p3}>
          <Icon icon='search' />
          <input className={Style.p4} placeholder='search' />
        </div>
      </div>
      <div>
        {!variant ? (
          <button
            onClick={() => history.push('/contacts/usertimeline/callnote')}
            className={Style.p6}
          >
            <Icon icon='faq' /> Add Call Note
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const Style = {
  p1: css`
    background: #fafbfc;

    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;
    height: 34px;
    @media (max-width: 982px) {
      width: 100%;
    }

    @media (max-width: 320px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      div: {
        border: none;
      }
    }
  `,
  p2: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid ${theme.colorWhite3};
  `,
  p3: css`
    padding-left: 10px;
  `,
  p4: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  p5: css`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  p6: css`
    height: 34px;
    right: 0px;
    background: ${theme.colorGrey};
    border: 1px solid ${theme.colorGrey};
    border-radius: 2px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize14};
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.1em;
    color: ${theme.colorWhite};
    margin-left: 49px;

    @media (max-width: 983px) {
      margin-left: 0px;
      margin-top: 0px;
    }
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  `,
};

export default SearchBar;
