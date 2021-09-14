import { css } from '@emotion/css';
import { useMediaQuery } from 'react-responsive';
import { BoxTextProps } from '../../../interface';
import { theme } from '../../../styles/theme';
const ViewBoxText = (props: BoxTextProps) => {
  const {
    key1,
    key2,
    value1,
    value2,
    index,
    value1Active,
    value2Active,
    variant,
    hasrelative,
  } = props;

  console.log(hasrelative);

  const isMobile = useMediaQuery({
    query: '(max-width: 535px)',
  });
  return isMobile ? (
    <>
      <div
        className={css`
        width: 100%;
        display: ${variant ? 'block' : 'flex'};
        justify-content: center;
        border-bottom:${
          props.isLast && props.isLast == true && !isMobile
            ? `1px solid ${theme.colorWhite3}`
            : '0px'
        }}
        @media (max-width: 535px) {
          justify-content:space-between;
        }
        `}
      >
        <p
          className={css`
            ${Style.c1}
            ${Style.c2}
              ${Style.c3}
              ${variant
              ? css`
                  margin-right: 0px;
                  display: block;
                  text-align: left;
                `
              : ''}
              @media (max-width: 535px) {
              width: 100%;
            }
          `}
        >
          {key1}
        </p>

        <p
          className={css`
            ${Style.c1}
            ${Style.c2}
              ${Style.c4}
              ${variant
              ? css`
                  margin-right: 0px;
                  display: block;
                  text-align: left;
                `
              : ''}
              @media (max-width: 535px) {
              width: 100%;
            }
          `}
        >
          {value1}
        </p>
      </div>
      <div
        className={css`
         ${Style.c5}
         display: ${variant ? 'block' : 'flex'};

        border-bottom:${
          props.isLast && props.isLast == true
            ? `1px solid ${theme.colorWhite3}`
            : '0px'
        }}
        @media (max-width: 535px) {
          justify-content:space-between;
        }
        `}
      >
        <p
          className={css`
            ${Style.c1}
            ${Style.c2}
                ${Style.c6}
${variant
              ? css`
                  margin-right: 0px;
                  display: block;
                  text-align: left;
                `
              : ''}
                @media (max-width: 535px) {
              width: 100%;
            }
          `}
        >
          {key2}
        </p>

        <p
          className={css`
            ${Style.c1}
            ${Style.c2}
                 ${Style.c7}
                 ${variant
              ? css`
                  margin-right: 0px;
                  display: block;
                  text-align: left;
                `
              : ''}
                 @media (max-width: 535px) {
              width: 100%;
            }
          `}
        >
          {value2}
        </p>
      </div>
    </>
  ) : (
    <div className={Style.c8}>
      <div className={css``}>
        <div
          className={css`
            ${Style.c9}
          `}
        >
          <div
            className={css`
              ${Style.c10}
              ${hasrelative != undefined || hasrelative == true
                ? css`
                    position: relative;
                    left: 24px;
                  `
                : ''}
            `}
          >
            <p
              className={css`
                ${Style.c1}
                ${Style.c11}
              `}
            >
              {key1}
            </p>
            <p
              className={css`
                ${Style.c1}
                ${value1Active == true ? `color:${theme.colorBlue1}` : ''}
              `}
            >
              {value1}
            </p>
          </div>

          <div className={Style.c12}>
            <p
              className={css`
                ${Style.c1}
                ${Style.c13}
              `}
            >
              {key2}
            </p>
            <p
              className={css`
                ${Style.c1}
                ${Style.c14}
                       ${value2Active == true
                  ? `color:${theme.colorBlue1}`
                  : ''}
              `}
            >
              {value2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Style = {
  c8: css`
    border-bottom: 1px solid ${theme.colorWhite3};
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  c7: css`
    width: 109px;
  `,
  c6: css`
    width: 82px;
  `,
  c5: css`
    display: flex;
    padding: 6px 0px;
    border-top: 1px solid ${theme.colorWhite3};
  `,

  c4: css`
    width: 109px;
  `,
  c3: css`
    width: 82px;
  `,

  c9: css`
    display: flex;
    margin-left: 10px;
    min-width: 700px;
    justify-content: space-between;
    height: 32px;
  `,
  c10: css`
    display: flex;
    max-width: 329px;
  `,
  c11: css`
    width: 100px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26.73px;
  `,
  c12: css`
    display: flex;
    width: 314px;
    margin-right: 57px;
  `,
  c13: css`
    margin-right: 27.7px;
    width: 317px;
    display: flex;
    justify-content: flex-end;
  `,
  c14: css`
    width: 304px;
    margin: 0px;
  `,

  c2: css`
    width: 67px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26.73px;
  `,

  c1: css`
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.06em;
    color: ${theme.colorGrey1};
    margin: 0px;
  `,
};
export default ViewBoxText;
