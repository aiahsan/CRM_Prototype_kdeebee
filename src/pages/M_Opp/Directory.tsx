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
    introducedby: string
}
interface BoxTextProps {

    key1: string,
    value1: string,
    key2: string,
    value2: string,
}
const baseText = css`
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
`
const ViewBoxText = (props: BoxTextProps) => {
    const {

        key1, key2, value1, value2
    } = props;
    return <div
        className={css`
margin-left:52px;
border-top: 1px solid #E1E4E8;
border-bottom: 1px solid #E1E4E8;
`}
    >

        <div className={css`
   `}><div className={css`
    display: flex;
    margin-left: 10px;
    min-width: 558px;
    justify-content: space-between;
    height: 32px;
`}>
                <div className={css`
    display: flex;
    max-width: 214px;
    `}>
                    <p className={css`${baseText}
           width: 67px;
           display: flex;
           justify-content: flex-end;
           margin-right:26.73px;
        `}>{key1}</p>
                    <p className={css`${baseText}
        
        `}>{value1}</p>
                </div>
               
               <div className={css`display: flex;
    width: 246px;
   margin-right:50px; 
    `}>
                   <p className={css`
                   ${baseText}
                   margin-right: 27.7px;
                   width: 356px;
                   `}>{key2}</p>
                   <p className={css`
                     ${baseText}
                       width: 282px;
                       margin: 0px;
                   `}>{value2}</p>
               </div>
              
               
                 </div>
        </div>
    </div>

}
const ViewBox = (props: BoxProps) => {
    const {
        title,
        image,
        subtitle,
        type,
        sector,
        expectedIRR,
        rargetRaise,
        assetGeography,
        indicationOfInterestby,
        investmentHorizon,
        introducedby
    } = props;

    return (
        <div className={css`
    display: flex;
    padding: 16px;
    border-bottom:1px solid #E1E4E8;
    `}>
            <div className={css``}>
                <img className={css`
            width: 208px;
            height: 224px;
        `} src={image} alt="" />
            </div>
            <div className={css`
          margin-left: 28px;
          margin-top: 20px;
      `}>
                <div className={css`
            display: flex;
        `}>
                    <p className={css`    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin: 0px;`}>{title}</p>
                    <p className={css`    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    margin: 0px;`}>&thinsp;- {subtitle}</p>
                </div>


                <div className={css`
                margin-top:27px;
            `}>
                    <ViewBoxText key1="Type" value1="Equity" key2="Asset Geography" value2="United States" />
                    <ViewBoxText key1="Sector" value1="Healthcare & Pharma" key2="Indication of Interest by" value2="30 Apr 2021" />
                    <ViewBoxText key1="Expected IRR" value1="> 20%" key2="Investment Horizon" value2="4 Years" />
                    <ViewBoxText key1="Target Raise" value1="USD 2.8m" key2="Introduced by" value2="Strategic Partner" />

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
            <div
                className={css`
          max-width: 980px;
          width: 100%;
          margin: auto;
          margin-bottom: -1px;
          padding-top: 24px;
        `}
            >
                <div
                    className={css`
            display: flex;
            justify-content: space-between;
          `}
                >
                    <div
                        className={css`
              background: #fafbfc;

              border: 1px solid #e1e4e8;
              box-sizing: border-box;
              border-radius: 2px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              width: 560px;
              height: 34px;
            `}
                    >
                        <div
                            className={css`
                padding-left: 10px;
              `}
                        >
                            <Icon icon="search" />
                            <input
                                className={css`
                  background-color: transparent;
                  border: none;
                  margin-left: 10px;
                `}
                                placeholder="search"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className={css`
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
              `}
                        >
                            <Icon icon="plus1" /> Submit New
                        </button>
                    </div>
                </div>

                <div
                    className={css`
            margin-top: 24px;
          `}
                >
                 
                    <div
                        className={css`
              border: 1px solid #e1e4e8;
              margin-top: 24px;
              min-width: 728px;
            `}
                    >
                        <div
                            className={css`
                display: flex;
                justify-content: space-between;
                padding: 14px 5px 14px 19.15px;
                background: #f6f8fa;
              `}
                        >
                            <div
                                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
                            >
                                <Icon icon="menu" />
                                <p
                                    className={css`
                    margin: 0px;

                    font-family: Lucida Grande;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: -0.06em;
                    margin-left: 7.5px;
                    color: #586069;
                  `}
                                >
                                    41 Opportunities
                                </p>
                            </div>
                            <div
                                className={css`
                  max-width: 439px;
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                `}
                            >
                                <Dropdown title="Currency" />
                                <Dropdown title="Sector" />
                                <Dropdown title="Target IRR" />
                                <Dropdown title="Geography" />
                                <Dropdown title="Sort" />
                            </div>
                        </div>

                        {/* cards */}
                        <ViewBox image={avt} title="Project Fluid" subtitle="Equity Investment in a Biotech Start-Up"

                            type="Equity Investment in a Biotech Start-Up"
                            sector="Healthcare & Pharma"
                            expectedIRR="> 20%"
                            rargetRaise="USD 2.8m"
                            assetGeography="United States"
                            indicationOfInterestby="30 Apr 2021"
                            investmentHorizon="4 Years"
                            introducedby="Strategic Partner"
                        />
                            <ViewBox image={avt} title="Project Fluid" subtitle="Equity Investment in a Biotech Start-Up"

type="Equity Investment in a Biotech Start-Up"
sector="Healthcare & Pharma"
expectedIRR="> 20%"
rargetRaise="USD 2.8m"
assetGeography="United States"
indicationOfInterestby="30 Apr 2021"
investmentHorizon="4 Years"
introducedby="Strategic Partner"
/>
<ViewBox image={avt} title="Project Fluid" subtitle="Equity Investment in a Biotech Start-Up"

type="Equity Investment in a Biotech Start-Up"
sector="Healthcare & Pharma"
expectedIRR="> 20%"
rargetRaise="USD 2.8m"
assetGeography="United States"
indicationOfInterestby="30 Apr 2021"
investmentHorizon="4 Years"
introducedby="Strategic Partner"
/>
<ViewBox image={avt} title="Project Fluid" subtitle="Equity Investment in a Biotech Start-Up"

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
