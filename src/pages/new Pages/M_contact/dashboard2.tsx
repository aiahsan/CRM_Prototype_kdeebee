import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css';
import Icon from '../../../icons/icons';
import Linechart from '../../../components/linechart';
import Dropdown from '../../../components/dropdown';

import SideMenu from '../../../components/sidemenu';

const AssingTab = ({
  name,
  image,
  number,
  isLast,
}: {
  name?: String;
  image: string;
  number: Number;
  isLast?: Boolean;
}) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        padding: 5px 15px;
        ${isLast != true ? 'border-bottom: 1px solid #e1e4e8;' : ''}
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        {name ? (
          <>
            <img
              className={css`
                width: 23px;
                height: 23px;
              `}
              src={image}
            />
            <p
              className={css`
                ${Style.cstyy3}
                margin-left:6px;
              `}
            >
              {name}
            </p>
          </>
        ) : (
          <p className={Style.cstyy3}>Unassinged</p>
        )}
      </div>
      <p className={Style.cstyy3}>{number}</p>
    </div>
  );
};
const LabelTab = ({
  name,
  image,
  number,
  isLast,
}: {
  name?: String;
  image: string;
  number: Number;
  isLast?: Boolean;
}) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        padding: 11px 15px;
        ${isLast != true ? 'border-bottom: 1px solid #e1e4e8;' : ''}
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        {name ? (
          <>
            <div
              className={css`
                width: 15px;
                height: 15px;
                border-radius: 15px;
                background-color: ${image};
              `}
            ></div>
            <p
              className={css`
                ${Style.cstyy3}
                margin-left:6px;
              `}
            >
              {name}
            </p>
          </>
        ) : (
          <p className={Style.cstyy3}>Unlabeled</p>
        )}
      </div>
      <p className={Style.cstyy3}>{number}</p>
    </div>
  );
};
export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Contacts', 'People']} activeIndex={1} />
      <Tabs activeTab={0} />
      <div></div>
      <div className={Style.g1}>
        <div className={Style.sp3}>
          <SideMenu
            isActive={false}
            islast={false}
            title='Outstanding Queries'
          />
          <SideMenu
            isActive={true}
            islast={false}
            title='Prospect Conversion'
          />
          <SideMenu
            isActive={false}
            islast={false}
            title='Activity Statistics'
          />
          <SideMenu isActive={false} islast={true} title='User growth' />
        </div>
        <div className={Style.g1sk1}>
          <div className={Style.g2}>
            <p className={Style.gglb}>Prospect Conversion</p>
            <button
              className={css`
                border: 1px solid #e1e4e8;
                box-sizing: border-box;
                border-radius: 2px;
                width: 138px;
                height: 40px;
                margin-right: 11px;
                background-color: white;

                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <Icon icon='label' />
              <p
                className={css`
                  margin: 0px 4px;
                  letter-spacing: -0.07em;

                  color: #586069;
                  font-weight: bold;
                  font-size: 15px;
                  line-height: 18px;
                `}
              >
                Tags
              </p>
              <div
                className={css`
                  width: 24px;
                  height: 15px;
                  background: #e8e9eb;
                  border-radius: 7px;
                `}
              >
                <p
                  className={css`
                    align-items: center;
                    letter-spacing: -0.07em;
                    font-weight: bold;
                    font-size: 12px;
                    line-height: 14px;
                    color: #586069;
                  `}
                >
                  41
                </p>
              </div>
            </button>
          </div>

          <div>
            <div className={Style.cstyy2}>
              <p className={Style.cstyy1}>Prospect Conversion</p>
              <Dropdown title='Date Range' />
            </div>
            <div
              className={css`
                border: 1px solid #e1e4e8;
                box-sizing: border-box;
                border-radius: 0px;
                border-top: 0px;
                padding-top: 31px;
              `}
            ></div>
            <div
              className={css`
                border: 1px solid #e1e4e8;
                box-sizing: border-box;
                border-radius: 0px 0px 5px 5px;
                justify-content: center;
                align-items: center;
                display: flex;
                flex-direction: column;
                padding: 13px;
                border-top: 0px;
              `}
            >
              <h5
                className={css`
                  margin: 0px;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 126%;
                  display: flex;
                  align-items: center;
                  text-align: center;
                  color: #000000;
                `}
              >
                41
              </h5>
              <p
                className={css`
                  margin: 0px;
                  font-weight: bold;
                  font-size: 13px;
                  line-height: 126%;
                  display: flex;
                  align-items: center;
                  text-align: center;
                  color: #798087;
                `}
              >
                Currently Outstanding Queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  g2: css`
    max-width: 979px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    margin: auto;
    margin-top: 23px;
    padding-bottom: 25px;
  `,
  g3: css`
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
    padding-bottom: 12px;
    margin: 0px;
  `,
  g4: css`
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    background: white;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    padding: 2px 13px;
  `,

  g5: css`
    margin-top: -4px;
    margin-right: 5px;
  `,
  sp3: css`
    margin-top: 25px;
  `,
  g1sk1: css`
    margin-left: 29px;
    width: 100%;
  `,
  g1: css`
    max-width: 979px;
    margin: auto;

    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,
  gglb: css`
    font-size: 29px;
    line-height: 37px;

    letter-spacing: -0.05em;

    color: #000000;
  `,
  cstyy2: css`
    background: #f6f8fa;
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
    padding: 11px 8px;
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
  `,
  cstyy1: css`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    margin: 0px;
    color: #000000;
  `,
  cstyy3: css`
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #25292e;
    margin: 0px;
  `,
};
