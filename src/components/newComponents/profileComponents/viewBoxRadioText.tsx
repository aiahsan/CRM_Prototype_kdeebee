import { css } from '@emotion/css';
import { useMediaQuery } from 'react-responsive';
import { RadioBoxTextProps } from '../../../interface';
import { theme } from '../../../styles/theme';
const ViewBoxText = (props: RadioBoxTextProps) => {
  const { key1, key2, isLast, type } = props;
  const isMobile = useMediaQuery({
    query: '(max-width: 535px)',
  });
  return isMobile ? (
    <>
      <div className={css``}>
        <div>
          <div
            className={`d-flex ${css`
              border-bottom: 1px solid ${theme.colorWhite3};
              margin-bottom: 10px;
              padding-bottom: 5px;
            `}`}
          >
            <input type={type == 0 ? 'checkbox' : 'radio'} />
            <p className={Style.s4}>{key1}</p>
          </div>
          <div
            className={`d-flex ${css`
              border-bottom: 1px solid ${theme.colorWhite3};
              margin-bottom: 5px;
              padding-bottom: 5px;
            `}`}
          >
            <input type={type == 0 ? 'checkbox' : 'radio'} />
            <p className={Style.s4}>{key2}</p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div
      className={css`
        ${isLast == false
          ? `border-bottom: 1px solid ${theme.colorWhite3};`
          : ''}
        ${Style.s1}
      `}
    >
      <div className={Style.s2}>
        <div className={Style.s3}>
          <input type={type == 0 ? 'checkbox' : 'radio'} />
          <p className={Style.s4}>{key1}</p>
        </div>
        <div className={Style.s5}>
          <input type={type == 0 ? 'checkbox' : 'radio'} />
          <p className={Style.s4}>{key2}</p>
        </div>
      </div>
    </div>
  );
};
export default ViewBoxText;

const Style = {
  s1: css`
    padding: 5px 0px;
    width: 710px;
  `,
  s2: css`
    display: flex;
    width: 100%;
  `,
  s3: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 417px;
    padding-left: 90px;
  `,
  s4: css`
    margin: 0px;
    margin-left: 8px;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    font-weight: 400;
  `,
  s5: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
};
