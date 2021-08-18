import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css';
import Icon from '../../../icons/icons';
import Linechart from '../../../components/linechart';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'Dashboard', 'Outstanding Queries']}
        activeIndex={1}
      />
      <Tabs activeTab={0} />
      <div></div>
      <div className={Style.g1}>
        <div className={Style.sp3}>
          <SideMenu
            onClick={() => history.push('/contacts')}
            isActive={true}
            islast={false}
            title='Outstanding Queries'
          />
          <SideMenu
            onClick={() => history.push('/contacts/dashboard2')}
            isActive={false}
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
            <p className={Style.gglb}>Outstanding Queries</p>
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
              <p className={Style.cstyy1}>Outstanding Queries</p>
            </div>
            <div
              className={css`
                border: 1px solid #e1e4e8;
                box-sizing: border-box;
                border-radius: 0px;
                border-top: 0px;
                padding-top: 31px;
              `}
            >
              <Linechart />
            </div>
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

            <div className='d-flex w-100'>
              <div className='w-100'>
                <div
                  className={css`
                    ${Style.cstyy2}
                    max-width:347px;
                    width: 100%;
                  `}
                >
                  <p className={Style.cstyy1}>By Assignee</p>
                </div>
                <div
                  className={css`
                    border: 1px solid #e1e4e8;
                    box-sizing: border-box;
                    border-radius: 0px 0px 5px 5px;
                    max-width: 347px;
                    border-top: 1px;
                  `}
                >
                  <AssingTab
                    name='Joern Czech'
                    number={13}
                    image='images/image 10.png'
                    isLast={false}
                  />
                  <AssingTab
                    name='Vishaal Shah'
                    number={11}
                    image='images/image 10.png'
                    isLast={false}
                  />
                  <AssingTab
                    name='George Bitsonis'
                    number={9}
                    image='images/image 10.png'
                    isLast={false}
                  />
                  <AssingTab
                    name='Sergio Scalzi'
                    number={2}
                    image='images/image 10.png'
                    isLast={false}
                  />
                  <AssingTab
                    number={6}
                    image='images/image 10.png'
                    isLast={true}
                  />
                </div>
              </div>
              <div className='w-100 ml-4'>
                <div
                  className={css`
                    ${Style.cstyy2}
                    max-width:347px;
                    width: 100%;
                  `}
                >
                  <p className={Style.cstyy1}>By Assignee</p>
                </div>
                <div
                  className={css`
                    border: 1px solid #e1e4e8;
                    box-sizing: border-box;
                    border-radius: 0px 0px 5px 5px;
                    max-width: 347px;
                    border-top: 1px;
                  `}
                >
                  <LabelTab
                    name='Urgent'
                    number={27}
                    image='#EBAFB8'
                    isLast={false}
                  />
                  <LabelTab
                    name='Intermediate'
                    number={12}
                    image=' #AAC8EC'
                    isLast={false}
                  />
                  <LabelTab
                    name='Low'
                    number={11}
                    image='#C9E27C'
                    isLast={false}
                  />
                  <LabelTab
                    number={8}
                    image='images/image 10.png'
                    isLast={true}
                  />
                </div>
              </div>
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
