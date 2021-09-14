import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import ViewBoxText from './viewBoxText';
import { BoxProps } from '../../../interface';
import { theme } from '../../../styles/theme';
const ViewBox = (props: BoxProps) => {
  const { title, values, variant, isOverflow } = props;

  return (
    <div className={`${Style.p1}`}>
      <div className={` ${Style.p11}`}>
        <div className={Style.p12}>
          <p className={Style.p3}>{title}</p>
          <div className={Style.p28}>
            <Icon icon='pencil' />
          </div>
        </div>

        <div
          className={`
          no-scroll 
            ${
              isOverflow != undefined && isOverflow == true
                ? Style.p14
                : Style.p13
            }`}
        >
          {values.map((x, i) => (
            <ViewBoxText
              value1Active={x.value1Active}
              value2Active={x.value2Active}
              key={i}
              index={i}
              key1={x.key1}
              value1={x.value1}
              key2={x.key2}
              value2={x.value2}
              isLast={i == values.length ? true : false}
              variant={variant}
              hasrelative={x.hasrelative}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBox;
const Style = {
  p1: css`
    display: flex;
    padding: 28px 16px 0px 16px;
  `,

  p27: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  p28: css`
    margin-left: 10px;
  `,

  p3: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: ${theme.colorGrey1};

    margin: 0px;
  `,

  p11: css`
    margin-left: 40px;
    margin-right: 40px;

    @media (max-width: 639px) {
      margin: 23px 0px;
      margin-bottom: 0px;
    }
    @media (max-width: 535px) {
      width: 100%;
    }
  `,
  p12: css`
    display: flex;
  `,
  p13: css`
    margin-top: 11px;

    @media (max-width: 1440px) {
      max-width: 900px;
      overflow: auto;
    }
    @media (max-width: 820px) {
      max-width: 650px;
    }
    @media (max-width: 639px) {
      max-width: 525px;
    }

    @media (max-width: 556px) {
      max-width: 425px;
    }
    @media (max-width: 556px) {
      max-width: 100%;
    }
  `,
  p14: css`
    margin-top: 11px;

    @media (max-width: 1640px) {
      max-width: 625px !important;
      overflow: auto !important;
    }
    @media (max-width: 820px) {
      max-width: 650px;
    }
    @media (max-width: 639px) {
      max-width: 525px;
    }

    @media (max-width: 556px) {
      max-width: 425px;
    }
    @media (max-width: 556px) {
      max-width: 100%;
    }
  `,
};
