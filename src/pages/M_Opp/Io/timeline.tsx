import React from "react";
import Breadcrumb from "../../../components/crumbread";
import TopBar from "../../../components/topBar";
import Tabs from "../../../components/M_opp/tabs";
import { css, cx } from "@emotion/css";
import Dropdown from "../../../components/dropdown";
import Icon from "../../../icons/icons";
import Activity from "../../../components/dashboard/expanded/activity";
import ActivitySub from "../../../components/dashboard/expanded/activitysub";
import avt from "../../../images/1.png";
import avt1 from "../../../images/pc1.png";
interface SideMenuProps {
  title: string;
  isActive: Boolean;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive } = props;
  return (
    <div
      className={css`
        ${Style.askjkflsf}
        ${isActive == true ? "border-left:2.03px solid #B6AF9D" : ""}
      `}
    >
      {title}
    </div>
  );
};
export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={["Opportunities", "Directory", "Project Fluid"]}
        activeIndex={2}
      />
      <Tabs activeTab={0} />

      <div className={Style.askfklasf}>
        <div className={Style.asjdkasjfwer}>
          <div>
          <img src={avt1} className={Style.kasjfkrnf} />

<h1 className={Style.kasdjaklds}>Project Fluid</h1>
<h2 className={Style.kashdklasasewe}>
  Equity Investment in a Biotech Start-Up
</h2>
          </div>
          <div className={Style.kasjhlrer}></div>

         <div className={css`
         ${Style.kasdfjersajdk2}
         `}>
         <div className={`d-flex ml-2 align-items-center ${Style.ksahdks31}`}>
            <Icon icon="light" />
            <p
              className={css`
                ${Style.BaseHighlightText}
              `}
            >
              Open in Knowledge Center
            </p>
          </div>

          <div className={`d-flex ml-2 align-items-center ${Style.xznfzsff}`}>
            <Icon icon="glasses" />
            <p
              className={css`
                ${Style.BaseHighlightText}
              `}
            >
              Add to Watchlist
            </p>
          </div>

         </div>
          <div className={Style.skajdklnwe}></div>

          <div className={Style.cbjasbjkwew}>
            <h2 className={Style.ksajkfasnfa}>Highlights</h2>
            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="eql" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                Equity
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="sector" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                Healthcare & Pharma
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="earth" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                United States
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="clock" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                4 Years Investment Horizon
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.askjdkls1}`}
            >
              <Icon icon="dollar" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                USD 2.8m Target Raise
              </p>
            </div>
          </div>
        </div>
        <div className="w-100">
          <div className={Style.askjdkls2}>
            <div className={Style.askjdkls3}>
              <div className={Style.askjdkls4}>
                <div className={Style.askjdkls5}>
                  <Dropdown title="All activity" />
                </div>
                <div className={Style.askjdkls6}>
                  <Icon icon="search" />
                  <input className={Style.askjdkls7} placeholder="search" />
                </div>
              </div>

              <div className={Style.askjdkls8}>
                <div className={Style.askjdkslenwe}>
                  <div className={Style.cdjasbere}>
                    <Icon icon="chain" />
                    <p className={Style.cnajenrek}>IO Activity Summary</p>
                  </div>
                  <div className={Style.asdbjrerer}>
                    <Dropdown title="Actor" />
                    <Dropdown title="Activity Type" />
                  </div>
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Mary Ek"
                    date=" 8 minutes ago"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.cansjkebwr}>
                    <ActivitySub
                      icon="eye"
                      title="viewed"
                      midtitle="Project Fluid"
                      nextTitle="for 23m"
                    />
                    <ActivitySub icon="glasses" title="41m session length" />
                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      view less »
                    </p>
                  </div>
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Mike Johnson"
                    date=" 3 hours ago"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.askbdjwbe34l}>
                    <ActivitySub icon="eye" title="3 pages viewed" />
                    <ActivitySub icon="clock" title="7m session length" />
                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Lucy Granger"
                    date=" 26 Apr ‘21"
                    status="completed"
                    subtitle=" Additional NDA Project SWF"
                  />
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Lucy Granger"
                    date=" 26 Apr ‘21"
                    status="completed"
                    subtitle=" Additional NDA Project SWF"
                  />
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Deanne Phillips"
                    status="sent out"
                    subtitle="Additional NDA Project SWF"
                    date="25 Apr ‘21"
                  />
                </div>
                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Sergio Scalzi"
                    status="added new Investment Opportunity"
                    subtitle="  Project Mahal"
                    date="24 Apr ‘21"
                  />
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Paul Jones"
                    date="21 Mar ‘21"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.khasdkhasdeWR23}>
                    <ActivitySub icon="eye" title="7 pages viewed" />
                    <ActivitySub icon="clock" title="12m session length" />

                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Sara Bell"
                    date="28 Mar ‘21"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.khasdkhasdeWR23}>
                    <ActivitySub icon="eye" title="34 pages viewed" />
                    <ActivitySub icon="clock" title="86m session length" />

                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Tom Gill"
                    date="28 Mar ‘21"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.khasdkhasdeWR23}>
                    <ActivitySub icon="eye" title="9 pages viewed" />
                    <ActivitySub icon="clock" title="24m session length" />

                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>

                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Lucy Granger"
                    date="28 Mar ‘21"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.khasdkhasdeWR23}>
                    <ActivitySub icon="eye" title="14 pages viewed" />
                    <ActivitySub icon="clock" title="37m session length" />

                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
                </div>
                <div className={Style.a233ksldnasdasd}>
                  <Activity
                    image={avt}
                    title="Chris Reed"
                    date="28 Mar ‘21"
                    status=" logged in"
                    subtitle=""
                  />
                  <div className={Style.khasdkhasdeWR23}>
                    <ActivitySub icon="eye" title="2 pages viewed" />
                    <ActivitySub icon="clock" title="3m session length" />

                    <p
                      className={css`
                        ${Style.BaseMoreText}
                      `}
                    >
                      2 more items »
                    </p>
                  </div>
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
  BaseMoreText: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #1269d3;
    margin-top: 7px;
  `,
  BaseHighlightText: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    letter-spacing: -0.08em;
    color: #5b626a;
    margin: 0px;
    margin-left: 6px;
  `,
  askjkflsf: css`
    background: #ffffff;
    border: 1px solid #e1e4e8;
    padding: 10px 0px 11px 9.12px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.03em;
    color: #000000;
    width: 224px;
    border-bottom: 0.5px solid #e1e4e8;
    cursor: pointer;
  `,
  askfklasf: css`
    max-width: 1119px;
    margin: auto;
    display: flex;
    @media (max-width:1024px) {
      flex-direction: column;
    }
  `,
  asjdkasjfwer: css`
    margin-right: 28px;
    max-width: 224px;
    position: relative;
    bottom: 29px;
    @media (max-width:1024px) {
      bottom: 0px;
      margin-top:10px;

      display: flex;
      flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    }
    @media (max-width:425px) {
      display:block;
      padding:10px;
    }
  `,
  kasdfjersajdk2:css`
  @media (max-width:1024px) {
    margin-right: 15px;
  }
  @media (max-width:425px) {
    margin: 0;
  }
  `,
  kasjfkrnf: css`
    width: 224px;
    height: 224px;
    border-radius: 224px;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  
    `,
  kasdjaklds: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;
    margin-top: 22px;
  `,
  kashdklasasewe: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 22px 0px;
  `,
  kasjhlrer: css`
    border: 1px solid #e1e4e8;
  `,
  ksahdks31: css`
    margin-top: 22px;
  `,
  xznfzsff: css`
    margin-top: 10px;
    margin-bottom: 22px;
  `,
  skajdklnwe: css`
    border: 1px solid #e1e4e8;
  `,
  cbjasbjkwew: css`
    margin-top: 17.51px;
    margin-bottom: 18.49px;
  `,
  ksajkfasnfa: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
  `,
  snkaknkdad: css`
    margin-top: 10px;
  `,
  askjdkls8: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;

    @media (max-width:768px) {
      min-width:100%;
    }
  `,
  askjdkls7: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  askjdkls6: css`
    padding-left: 10px;
  `,
  askjdkls5: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;

    @media (max-width:534px) {
      border: none;
    }
  `,
  askjdkls4: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;
    @media (max-width:1024px) {
      width: 100%;
    }
    @media (max-width:1024px) {
      flex-direction: column;
    align-items: flex-start;
    }
    
  `,
  askjdkls3: css`
    margin-top: 24px;
  `,
  askjdkls2: css`
    max-width: 1124px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  askjdkls1: css`
    margin-top: 10px;
    margin-bottom: 22px;
    
  `,
  a233ksldnasdasd: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  khasdkhasdeWR23: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
  askjdkslenwe: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    @media (max-width:534px) {
      flex-wrap:wrap;
    }
  `,
  cdjasbere: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  cnajenrek: css`
    margin: 0px;

    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.06em;
    margin-left: 7.5px;
    color: #586069;
  `,
  asdbjrerer: css`
    max-width: 175px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width:534px) {
      margin-top:10px
    }
  `,
  cansjkebwr: css`
    margin-left: 59px;
    margin-top: -25px;
    margin-bottom: 15px;
  `,
  askbdjwbe34l: css`
    margin-left: 59px;
    margin-top: -15px;
    margin-bottom: 15px;
  `,
};
