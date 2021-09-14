import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import { useHistory } from 'react-router-dom';
import SideMenu from '../../../components/sidemenu';
import Dropdown from '../../../components/dropdown';
import { theme } from '../../../styles/theme';

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
        ${Style.GH1}
        ${isLast != true
          ? `border-bottom: 1px solid ${theme.colorWhite3};`
          : ''}
      `}
    >
      <div className={Style.GH2}>
        {name ? (
          <>
            <img className={Style.GH3} src={image} />
            <p
              className={css`
                ${Style.cstyy3}
                ${Style.GH4}
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
        ${Style.GH5}
        ${isLast != true ? `border-bottom: 1px solid;` : ''}
      `}
    >
      <div className={Style.GH6}>
        {name ? (
          <>
            <div
              className={css`
                ${Style.GH7}
                background-color: ${image};
              `}
            ></div>
            <p
              className={css`
                ${Style.cstyy3}
                ${Style.GH8}
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
export default function RCom() {
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'Dashboard', 'Outstanding Queries']}
        activeIndex={2}
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
            <button className={Style.GH9}>
              <Icon icon='label' />
              <p className={Style.GH10}>Tags</p>
              <div className={Style.GH11}>
                <p className={Style.GH12}>41</p>
              </div>
            </button>
          </div>

          <div>
            <div className={Style.cstyy2}>
              <p className={Style.cstyy1}>Prospect Conversion</p>
              <Dropdown title='Date Range' />
            </div>
            <div className={Style.GH13}>
              <div className={Style.GH14}>
                <div className={Style.GH15}>
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
                        ${Style.GH16}
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
                        ${Style.GH17}
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
                        ${Style.GH19}
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
                        ${Style.GHs19}
                      `}
                    >
                      <Icon icon='oval' color='#939594' />
                      <p className={Style.jdasfn1}>Contracted Members</p>
                    </div>
                  </div>
                  <div className={Style.jdasfn2}>
                    <div
                      className={css`
                        ${Style.jdasfn}
                        ${Style.GH20}
                      `}
                    >
                      <Icon icon='crrl' color='#a9d2c2' />
                      <p
                        className={css`
                          ${Style.jdasfn1}
                          top:40px;
                        `}
                      >
                        Transacted
                      </p>
                    </div>
                  </div>
                </div>

                <div className={Style.GH21}>
                  <div className={Style.GH22}>
                    <div className={Style.GH23}></div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH24}
                      `}
                    >
                      156
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH25}
                      `}
                    >
                      70
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH26}
                      `}
                    >
                      51
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH27}
                      `}
                    >
                      30
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH28}
                      `}
                    >
                      22
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH29}
                      `}
                    >
                      3
                    </div>
                  </div>
                </div>
                <div className={Style.GH30}>
                  <div className={Style.GH31}>
                    <div
                      className={css`
                        ${Style.GH32}
                        ${Style.fontSasf}
                      `}
                    >
                      MoM
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH24}
                      `}
                    >
                      +18
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH25}
                      `}
                    >
                      +6
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH26}
                      `}
                    >
                      +13
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH27}
                      `}
                    >
                      0
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH27}
                      `}
                    >
                      +1
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH29}
                      `}
                    >
                      0
                    </div>
                  </div>
                </div>
                <div className={Style.GH30}>
                  <div className={Style.GH22}>
                    <div
                      className={css`
                        ${Style.GH23}
                        ${Style.fontSasf}
                      `}
                    ></div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH24}
                      `}
                    >
                      +13%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH25}
                      `}
                    >
                      +9%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH26}
                      `}
                    >
                      +34%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH27}
                      `}
                    >
                      -
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH27}
                      `}
                    >
                      +5%
                    </div>
                    <div
                      className={css`
                        ${Style.fontSasf}
                        ${Style.GH29}
                      `}
                    >
                      -
                    </div>
                  </div>
                </div>
                <p
                  className={css`
                    ${Style.fontSasf}
                    ${Style.GH33}
                  `}
                >
                  Current campaign:{' '}
                  <span className={Style.GH34}>
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
            <div className={Style.GH13}>
              <div className={Style.GH14}>
                <div className={Style.GH37}>
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
                    ${Style.GH35}
                  `}
                >
                  User numbers Included in{' '}
                  <span className={Style.GH36}>Lead Conversion</span>
                </p>
                <p
                  className={css`
                    ${Style.fontSasf}
                    ${Style.GH33}
                  `}
                >
                  Current campaign:{' '}
                  <span className={Style.GH34}>
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
}

const Style = {
  GH1: css`
    display: flex;
    justify-content: space-between;
    padding: 5px 15px;
  `,
  GH2: css`
    display: flex;
    align-items: center;
  `,
  GH3: css`
    width: 23px;
    height: 23px;
  `,
  GH4: css`
    margin-left: 6px;
  `,
  GH5: css`
    display: flex;
    justify-content: space-between;
    padding: 11px 15px;
  `,
  GH6: css`
    display: flex;
    align-items: center;
  `,
  GH7: css`
    width: 15px;
    height: 15px;
    border-radius: 15px;
  `,
  GH8: css`
    margin-left: 6px;
  `,
  GH9: css`
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    width: 138px;
    height: 40px;
    margin-right: 11px;
    background-color: ${theme.colorWhite};
    margin-right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  GH10: css`
    margin: 0px 4px;
    letter-spacing: -0.07em;

    color: ${theme.colorGrey1};
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
  `,
  GH11: css`
    width: 24px;
    height: 15px;
    background: #e8e9eb;
    border-radius: 7px;
  `,
  GH12: css`
    align-items: center;
    letter-spacing: -0.07em;
    font-weight: bold;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    color: ${theme.colorGrey1};
  `,
  GH13: css`
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 0px;
    border-top: 0px;
    padding-top: 31px;
    overflow: auto;
  `,
  GH14: css`
    width: 777px;
  `,
  GH15: css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    left: 47px;
  `,
  GH16: css`
    position: relative;
    right: 19px;
    z-index: -1;
  `,
  GH17: css`
    position: relative;
    right: 33px;
    z-index: -2;
  `,
  GH18: css`
    position: relative;
    right: 50px;
    z-index: -3;
  `,
  GH19: css`
    position: relative;
    right: 60px;
    z-index: -4;
  `,
  GHs19: css`
    position: relative;
    right: 71px;
    z-index: -5;
  `,
  GH20: css`
    position: relative;
    top: 10px;
    right: 90px;
    z-index: -6;
  `,
  GH21: css`
    border-bottom: 1px dashed #8b8880;
    padding: 5px 0px;
    margin: 0px 40px;
  `,
  GH22: css`
    display: flex;
  `,
  GH23: css`
    width: 55px;
  `,
  GH24: css`
    width: 93px;
    text-align: center;
  `,

  GH25: css`
    width: 125px;
    text-align: center;
  `,
  GH26: css`
    width: 116px;
    text-align: center;
  `,
  GH27: css`
    width: 114px;
    text-align: center;
  `,
  GH28: css`
    width: 114px;
    text-align: center;
  `,
  GH29: css`
    width: 102px;
    text-align: center;
  `,
  GH30: css`
    border-bottom: 1px dashed #8b8880;
    padding: 5px 0px;
    margin: 0px 40px;
  `,
  GH31: css`
    display: flex;
  `,
  GH32: css`
    width: 55px;
  `,
  GH33: css`
    margin-top: 10px;
    text-align: left;
    margin-left: 35px;
  `,
  GH34: css`
    font-weight: 600;
  `,
  GH35: css`
    text-align: left;
    margin-left: 35px;
  `,
  GH36: css`
    font-style: italic;
  `,
  GH37: css`
    margin-left: 35px;
    display: flex;
  `,
  g2: css`
    max-width: 980px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorWhite3};
    margin: auto;
    margin-top: 0px;
    padding: 15px;
    padding-left: 0px;
    padding-top: 20px;
    padding-right: 0px;
  `,
  g3: css`
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: ${theme.colorBlack};
    padding-bottom: 12px;
    margin: 0px;
  `,
  g4: css`
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    background: ${theme.colorWhite};
    align-items: center;
    letter-spacing: -0.07em;
    color: ${theme.colorGrey1};
    font-weight: bold;
    font-size: ${theme.fontSize15};
    line-height: 18px;
    padding: 4px 13px;
  `,

  g5: css`
    margin-top: -4px;
    margin-right: 5px;
  `,
  sp3: css`
    margin-top: 24px;
  `,
  g1sk1: css`
    margin-left: 28px;
    width: 100%;
    overflow-x: auto;
    max-width: 728px;
    @media (max-width: 768px) {
      margin-left: 2%;
      width: 98%;
      margin-top: 20px;
    }
  `,
  g1: css`
    max-width: 978.97px;
    margin: auto;

    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  gglb: css`
    font-size: ${theme.fontSize29};
    line-height: 37px;

    letter-spacing: -0.05em;
    margin: 0px;
    color: ${theme.colorBlack};
  `,
  cstyy2: css`
    background: #f6f8fa;
    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
    padding: 11px 8px;
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
  `,
  cstyy1: css`
    font-weight: bold;
    font-size: ${theme.fontSize14};
    line-height: 16px;
    display: flex;
    align-items: center;
    margin: 0px;
    color: ${theme.colorBlack};
  `,
  cstyy3: css`
    font-size: ${theme.fontSize12};
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: ${theme.colorBlack2};
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
    font-size: ${theme.fontSize12};
    font-weight: 700;
    color: ${theme.colorGrey6};
  `,
  ljaskdjfe: css`
    width: 115px;
    background-color: ${theme.colorWhite2};
    border-radius: 15px;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
  `,
  dsjfafid: css`
    padding: 23px 0px;
    font-weight: 600;
    font-size: ${theme.fontSize28};
    color: ${theme.colorGrey5};
  `,
  klhfasdklf: css`
    background-color: ${theme.colorGrey4};
    padding: 12px;
    color: ${theme.colorWhite};
    font-weight: 500;
    font-size: ${theme.fontSize12};
  `,
  fajsdfnlkf: css`
    margin-top: 2px;
    background-color: ${theme.colorGrey4};
    color: ${theme.colorWhite};
    font-weight: 500;
    padding: 8px 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: ${theme.fontSize12};
  `,
};
