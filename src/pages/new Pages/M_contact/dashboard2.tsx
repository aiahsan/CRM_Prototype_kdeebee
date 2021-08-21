import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css';
import Icon from '../../../icons/icons';
import Linechart from '../../../components/linechart';
import { useHistory } from 'react-router-dom';
import SideMenu from '../../../components/sidemenu';
import Dropdown from '../../../components/dropdown';

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
            isActive={false}
            islast={false}
            title='Prospect Conversion'
          />
          <SideMenu
            onClick={() => history.push('/contacts/dashboard2')}
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
                overflow: auto;
              `}
            >
              <div
                className={css`
                  width: 777px;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    position: relative;
                    left: 47px;
                  `}
                >
                  <div>
                    <div className={Style.jdasfn}>
                      <Icon icon='oval' color='#4e4c5a' />
                      <p className={Style.jdasfn1}>Prospects</p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        position: relative;
                        right: 19px;
                        z-index: -1;
                      `}
                    >
                      <Icon icon='oval' color='#b5af9f' />
                      <p className={Style.jdasfn1}>Actived KC Access</p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        position: relative;
                        right: 33px;
                        z-index: -2;
                      `}
                    >
                      <Icon icon='oval' color='#acd1c0' />
                      <p className={Style.jdasfn1}>
                        Investment Preferenaces Known
                      </p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        position: relative;
                        right: 50px;
                        z-index: -3;
                      `}
                    >
                      <Icon icon='oval' color='#d9d9d9' />
                      <p className={Style.jdasfn1}>KYC completed</p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        position: relative;
                        right: 69px;
                        z-index: -4;
                      `}
                    >
                      <Icon icon='oval' color='#d9d9d9' />
                      <p className={Style.jdasfn1}>Contracted Members</p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        position: relative;
                        top: 10px;
                        right: 90px;
                        z-index: -5;
                      `}
                    >
                      <Icon icon='crrl' color='#a9d2c2' />
                      <p
                        className={css`
                          ${Style.jdasfn1} top:40px
                        `}
                      >
                        Prospects
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={css`
                    border-bottom: 1px dashed #8b8880;
                    padding: 5px 0px;
                    margin: 0px 40px;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                    `}
                  >
                    <div
                      className={css`
                        width: 55px;
                      `}
                    ></div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 93px;
                        text-align: center;
                      `}
                    >
                      156
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 125px;
                        text-align: center;
                      `}
                    >
                      70
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 116px;
                        text-align: center;
                      `}
                    >
                      51
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      30
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      22
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 102px;
                        text-align: center;
                      `}
                    >
                      3
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    border-bottom: 1px dashed #8b8880;
                    padding: 5px 0px;
                    margin: 0px 40px;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                    `}
                  >
                    <div
                      className={css`
                        width: 55px;
                        ${Style.fontSasf}
                      `}
                    >
                      MoM
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 93px;
                        text-align: center;
                      `}
                    >
                      +18
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 125px;
                        text-align: center;
                      `}
                    >
                      +6
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 116px;
                        text-align: center;
                      `}
                    >
                      +13
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      0
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      +1
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 102px;
                        text-align: center;
                      `}
                    >
                      0
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    border-bottom: 1px dashed #8b8880;
                    padding: 5px 0px;
                    margin: 0px 40px;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                    `}
                  >
                    <div
                      className={css`
                        width: 55px;
                        ${Style.fontSasf}
                      `}
                    ></div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 93px;
                        text-align: center;
                      `}
                    >
                      +13%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 125px;
                        text-align: center;
                      `}
                    >
                      +9%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 116px;
                        text-align: center;
                      `}
                    >
                      +34%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      -
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 114px;
                        text-align: center;
                      `}
                    >
                      +5%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        width: 102px;
                        text-align: center;
                      `}
                    >
                      -
                    </div>
                  </div>
                </div>
                <p
                  className={css`
                    ${Style.fontSasf}
                    margin-top:10px;
                    text-align: left;
                    margin-left: 35px;
                  `}
                >
                  Current campaign:{' '}
                  <span
                    className={css`
                      font-weight: 600;
                    `}
                  >
                    activing prospects and collecting Investment Preferences
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className={Style.cstyy2}>
              <p className={Style.cstyy1}>
                Business Development Partner Programme
              </p>
              <Dropdown title='Date Range' />
            </div>
            <div
              className={css`
                border: 1px solid #e1e4e8;
                box-sizing: border-box;
                border-radius: 0px;
                border-top: 0px;
                padding-top: 31px;
                overflow: auto;
              `}
            >
              <div
                className={css`
                  width: 777px;
                `}
              >
                <div
                  className={css`
                    margin-left: 35px;
                    display: flex;
                  `}
                >
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                  <div className={Style.ljaskdjfe}>
                    <div className={Style.dsjfafid}>6</div>
                    <div className={Style.klhfasdklf}>BD Partners</div>
                    <div className={Style.fajsdfnlkf}>+1</div>
                  </div>
                </div>
                <p
                  className={css`
                    ${Style.fontSasf}
                    text-align: left;
                    margin-left: 35px;
                  `}
                >
                  User numbers Included in{' '}
                  <span
                    className={css`
                      font-style: italic;
                    `}
                  >
                    Lead Conversion
                  </span>
                </p>
                <p
                  className={css`
                    ${Style.fontSasf}
                    margin-top:10px;
                    text-align: left;
                    margin-left: 35px;
                  `}
                >
                  Current campaign:{' '}
                  <span
                    className={css`
                      font-weight: 600;
                    `}
                  >
                    introducing prospects to IANUA and talking to new BDPs
                  </span>
                </p>
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
    max-width: 1079px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    margin: auto;
    margin-top: 23px;
    padding: 20px;
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
    @media (max-width: 768px) {
      margin-left: 2%;
      width: 98%;
      margin-top: 20px;
    }
  `,
  g1: css`
    max-width: 1079px;
    margin: auto;

    display: flex;
    @media (max-width: 768px) {
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
  jdasfn: css`
    position: relative;
  `,
  jdasfn2: css``,
  jdasfn1: css`
    position: absolute;
    top: 49px;
    font-size: 10px;
    font-weight: 700;
    left: 26px;
    max-width: 61px;
    width: 100%;
    word-break: break-word;
    text-align: center;
  `,
  fontSasf: css`
    font-size: 12px;
    font-weight: 700;
    color: #837f76;
  `,
  ljaskdjfe: css`
    width: 115px;
    background-color: #f2f2f2;
    border-radius: 15px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  `,
  dsjfafid: css`
    padding: 23px 0px;
    font-weight: 600;
    font-size: 28px;
    color: #828282;
  `,
  klhfasdklf: css`
    background-color: #b6af9c;
    padding: 12px;
    color: white;
    font-weight: 500;
    font-size: 12px;
  `,
  fajsdfnlkf: css`
    margin-top: 2px;
    background-color: #b6af9c;
    color: white;
    font-weight: 500;
    padding: 8px 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 12px;
  `,
};
