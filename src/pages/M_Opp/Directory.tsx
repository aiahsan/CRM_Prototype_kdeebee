import React from "react";
import Breadcrumb from "../../components/crumbread";
import TopBar from "../../components/topBar";
import Tabs from "../../components/tabs";
import { css, cx } from "@emotion/css";
import Dropdown from "../../components/dropdown";
import Icon from "../../icons/icons";
import avt from "../../images/pc1.png";
interface BoxProps {
  title: string;
  image: string;
  subtitle: string;
  type: string;
  sector: string;
  expectedIRR: string;
  rargetRaise: string;
  assetGeography: string;
  indicationOfInterestby: string;
  investmentHorizon: string;
  introducedby: string;
}
interface BoxTextProps {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
}

const ViewBoxText = (props: BoxTextProps) => {
  const { key1, key2, value1, value2 } = props;
  return (
    <div className={Style.nfas2331sd}>
      <div className={css``}>
        <div className={Style.mxnixewawerw}>
          <div className={Style.kscsaje344}>
            <p
              className={css`
                ${Style.baseText}
                ${Style.dsvjbvresre}
              `}
            >
              {key1}
            </p>
            <p
              className={css`
                ${Style.baseText}
              `}
            >
              {value1}
            </p>
          </div>

          <div className={Style.jb2vmdsere}>
            <p
              className={css`
                ${Style.baseText}
                ${Style.mcbasjrjbrw}
              `}
            >
              {key2}
            </p>
            <p
              className={css`
                ${Style.baseText}
                ${Style.askn24dejer}
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
const ViewBox = (props: BoxProps) => {
  const { title, image, subtitle } = props;

  return (
    <div className={Style.vbdsnerver}>
      <div className={css``}>
        <img className={Style.ksqcasnfafas} src={image} alt="" />
      </div>
      <div className={Style.soajdmdsfsd}>
        <div className={Style.skanasdcder}>
          <p className={Style.vnbhy75tiu}>{title}</p>
          <p className={Style.nfntfd646}>&thinsp;- {subtitle}</p>
        </div>

        <div
          className={css`
            margin-top: 27px;
          `}
        >
          <ViewBoxText
            key1="Type"
            value1="Equity"
            key2="Asset Geography"
            value2="United States"
          />
          <ViewBoxText
            key1="Sector"
            value1="Healthcare & Pharma"
            key2="Indication of Interest by"
            value2="30 Apr 2021"
          />
          <ViewBoxText
            key1="Expected IRR"
            value1="> 20%"
            key2="Investment Horizon"
            value2="4 Years"
          />
          <ViewBoxText
            key1="Target Raise"
            value1="USD 2.8m"
            key2="Introduced by"
            value2="Strategic Partner"
          />
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb list={["Opportunities", "Directory"]} activeIndex={1} />
      <Tabs activeTab={1} />
      <div className={Style.cxnfjerwr}>
        <div className={Style.scnsaskejw}>
          <div className={Style.xzcbsbjawe}>
            <div className={Style.asosadnkwew}>
              <Icon icon="search" />
              <input className={Style.sakknewowe} placeholder="search" />
            </div>
          </div>
          <div>
            <button className={Style.asknaklsndasd2}>
              <Icon icon="plus1" /> Submit New
            </button>
          </div>
        </div>

        <div className={Style.asncksekq34}>
          <div className={Style.ncjase43asdw}>
            <div className={Style.scnkasewew4}>
              <div className={Style.ksadaksjdwe1}>
                <Icon icon="menu" />
                <p className={Style.bcsajdugwewe}>41 Opportunities</p>
              </div>
              <div className={Style.kasdn23}>
                <Dropdown title="Currency" />
                <Dropdown title="Sector" />
                <Dropdown title="Target IRR" />
                <Dropdown title="Geography" />
                <Dropdown title="Sort" />
              </div>
            </div>

            {/* cards */}
            <ViewBox
              image={avt}
              title="Project Fluid"
              subtitle="Equity Investment in a Biotech Start-Up"
              type="Equity Investment in a Biotech Start-Up"
              sector="Healthcare & Pharma"
              expectedIRR="> 20%"
              rargetRaise="USD 2.8m"
              assetGeography="United States"
              indicationOfInterestby="30 Apr 2021"
              investmentHorizon="4 Years"
              introducedby="Strategic Partner"
            />
            <ViewBox
              image={avt}
              title="Project Fluid"
              subtitle="Equity Investment in a Biotech Start-Up"
              type="Equity Investment in a Biotech Start-Up"
              sector="Healthcare & Pharma"
              expectedIRR="> 20%"
              rargetRaise="USD 2.8m"
              assetGeography="United States"
              indicationOfInterestby="30 Apr 2021"
              investmentHorizon="4 Years"
              introducedby="Strategic Partner"
            />
            <ViewBox
              image={avt}
              title="Project Fluid"
              subtitle="Equity Investment in a Biotech Start-Up"
              type="Equity Investment in a Biotech Start-Up"
              sector="Healthcare & Pharma"
              expectedIRR="> 20%"
              rargetRaise="USD 2.8m"
              assetGeography="United States"
              indicationOfInterestby="30 Apr 2021"
              investmentHorizon="4 Years"
              introducedby="Strategic Partner"
            />
            <ViewBox
              image={avt}
              title="Project Fluid"
              subtitle="Equity Investment in a Biotech Start-Up"
              type="Equity Investment in a Biotech Start-Up"
              sector="Healthcare & Pharma"
              expectedIRR="> 20%"
              rargetRaise="USD 2.8m"
              assetGeography="United States"
              indicationOfInterestby="30 Apr 2021"
              investmentHorizon="4 Years"
              introducedby="Strategic Partner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  baseText: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.06em;
    color: #586069;
    margin: 0px;
  `,

  kasdn23: css`
    max-width: 439px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width:768px) {
       flex-wrap:wrap;
       margin-top:10px;
      }
  `,
  bcsajdugwewe: css`
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
  ksadaksjdwe1: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  scnkasewew4: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    @media (max-width:768px) {
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

      }
  `,
  ncjase43asdw: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    @media (max-width:768px) {
        min-width: 98%;    
        margin:0px 1%;

      }
  `,
  asncksekq34: css`
    margin-top: 24px;
  `,

  asknaklsndasd2: css`
    height: 34px;
    right: 0px;
    background: #b6af9d;
    border: 1px solid #b6af9d;
    border-radius: 2px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.1em;
    color: #ffffff;

    @media (max-width:768px) {
        margin-top:10px;

      }
  `,
  sakknewowe: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  asosadnkwew: css`
    padding-left: 10px;
  `,

  xzcbsbjawe: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;
    height: 34px;
    @media (max-width:768px) {
        width: 100%;
    
      }
  `,
  scnsaskejw: css`
    display: flex;
    justify-content: space-between;
    @media (max-width:768px) {
        flex-direction: column;

      }
  `,
  cxnfjerwr: css`
    max-width: 980px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    padding-top: 24px;
  `,
  soajdmdsfsd: css`
    margin-left: 28px;
    margin-top: 20px;
  `,
  ksqcasnfafas: css`
    width: 208px;
    height: 224px;
  `,
  vbdsnerver: css`
    display: flex;
    padding: 16px;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width:881px) {
        overflow: scroll;

      }
  `,
  skanasdcder: css`
    display: flex;
  `,
  vnbhy75tiu: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;
  `,
  nfntfd646: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    margin: 0px;
  `,
  nfas2331sd: css`
    margin-left: 52px;
    border-top: 1px solid #e1e4e8;
    border-bottom: 1px solid #e1e4e8;
  `,
  mxnixewawerw: css`
    display: flex;
    margin-left: 10px;
    min-width: 558px;
    justify-content: space-between;
    height: 32px;
  `,
  kscsaje344: css`
    display: flex;
    max-width: 214px;
  `,
  dsvjbvresre: css`
    width: 67px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26.73px;
  `,
  jb2vmdsere: css`
    display: flex;
    width: 246px;
    margin-right: 50px;
  `,
  mcbasjrjbrw: css`
    margin-right: 27.7px;
    width: 356px;
  `,
  askn24dejer: css`
    width: 282px;
    margin: 0px;
  `,
};
