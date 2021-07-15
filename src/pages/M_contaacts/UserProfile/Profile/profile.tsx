import React from "react";
import Breadcrumb from "../../../../components/crumbread";
import TopBar from "../../../../components/topBar";
import Tabs from "../../../../components/M_Contacts/profile/tabs";
import { css, cx } from "@emotion/css";
import Dropdown from "../../../../components/dropdown";
import Icon from "../../../../icons/icons";
import avt1 from "../../../../images/coverprofile.png";
import rothschild from "../../../../images/Rothschild.png";
import image14 from "../../../../images/image14.png";
import { Card, Accordion, Button } from "react-bootstrap";
import {useMediaQuery} from 'react-responsive'

interface BoxProps {
  title: string;
  values: BoxTextProps[];
}
interface BoxTextProps {
  key1: string;
  value1: string;
  key2: string;
  value2: string;
  index?: number;
  value1Active: boolean;
  value2Active: boolean;
  isLast?:boolean;

}
const ViewBoxText = (props: BoxTextProps) => {
  const { key1, key2, value1, value2, index, value1Active, value2Active } =
    props;
    const isMobile = useMediaQuery({
      query: '(max-width: 535px)'
    })
  return (
    isMobile?<>
    <div className={css`
      display:flex;
      padding: 6px 0px;
    border-top: 1px solid #E1E4E8;
    justify-content: center;
    align-items: center;
    border-bottom:${props.isLast&&props.isLast==true?"1px solid #e1e4e8":"0px"}}
    `}>

<p
              className={css`
                ${Style.baseText}
                ${Style.dsvjbvresre}
                width:82px;
              `}
            >
              {key1}
            </p>

            <p
              className={css`
                ${Style.baseText}
                ${Style.dsvjbvresre}
                width: 109px;
                `}
            >
              {value1}
            </p>
    </div>
    <div className={css`
      display:flex;
      padding: 6px 0px;
    border-top: 1px solid #E1E4E8;
    border-bottom:${props.isLast&&props.isLast==true?"1px solid #e1e4e8":"0px"}}
    `}>

<p
              className={css`
                ${Style.baseText}
                ${Style.dsvjbvresre}
                width:82px;
              `}
            >
              {key2}
            </p>

            <p
              className={css`
                ${Style.baseText}
                ${Style.dsvjbvresre}
                width: 109px;
                `}
            >
              {value2}
            </p>
    </div>

    </>:
    <div
      className={css`
      border-bottom: 1px solid #E1E4E8;
      `}
    >
      <div className={css``}>
        <div
          className={css`
            ${Style.prfcst36}
          `}
        >
          <div className={Style.prfcst37}>
            <p
              className={css`
                ${Style.baseText}
                ${Style.prfcst38}
              `}
            >
              {key1}
            </p>
            <p
              className={css`
                ${Style.baseText}
                ${value1Active == true ? "color:#1269D3" : ""}
              `}
            >
              {value1}
            </p>
          </div>

          <div className={Style.prfcst39}>
            <p
              className={css`
                ${Style.baseText}
                ${Style.prfcst40}
              `}
            >
              {key2}
            </p>
            <p
              className={css`
                ${Style.baseText}
                ${Style.prfcst41}
                   ${value2Active == true ? "color:#1269D3" : ""}
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
  const { title, values } = props;

  return (
    <div
      className={Style.viewBoxstl}
    >
      <div
        className={Style.viewBoxstl1}
      >
        <div
          className={Style.viewBoxstl2}
        >
          <p className={Style.prfcst42}>{title}</p>
          <div
            className={css`
              margin-left: 10px;
            `}
          >
            <Icon icon="pencil" />
          </div>
        </div>

        <div
          className={Style.viewBoxstl3}
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
              isLast={i==values.length?true:false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SideMenuProps {
  title: string;
  isActive: Boolean;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive } = props;
  return (
    <div
      className={css`
        ${Style.prfcst}
        ${isActive == true ? "border-left:2.03px solid #B6AF9D" : ""}
      `}
    >
      {title}
    </div>
  );
};
export default () => {
  const [activeeventkey,setactiveeventkey]=React.useState([{id:0,isactive:true},{id:1,isactive:false},{id:2,isactive:false},{id:3,isactive:false}]);
  const handleClicktoggle=(id:number)=>
  {
    const obj=activeeventkey.find(x=>x.id==id);
    if(obj)
    {
      obj.isactive=!obj.isactive
    }

    setactiveeventkey([...activeeventkey]);
  }
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={["Contacts", "People", "Lucy Granger"]}
        activeIndex={2}
      />
      <Tabs activeTab={1} />

      <div className={Style.prfcst1}>
        <div className={Style.asjdkasjfwer}>
          <div>
            <img src={avt1} className={Style.kasjfkrnf} />

            <h1 className={Style.kasdjaklds}>Lucy Granger</h1>

          </div>
          <div className={Style.kasjhlrer}></div>


          <div className={Style.cbjasbjkwew}>
            <h2 className={Style.ksajkfasnfa}>Highlights</h2>
            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="email" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                lucy@blu-fo.com
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="landline" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                +44 206 876 1357
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="phone" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                +44 777 5678 762
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.snkaknkdad}`}
            >
              <Icon icon="stage" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >
                KYC Completed
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${Style.askjdkls1}`}
            >
              <Icon icon="user" />
              <p
                className={css`
                  ${Style.BaseHighlightText}
                `}
              >Joern Czech
              </p>
            </div>
          </div>
          <div className={Style.kasjhlrer}></div>

          <div className={css`margin-bottom:22px`}>
            <h2 className={Style.prfcst11}>Investment preferences</h2>

            <div className={Style.prfcst12}>
              <div className={Style.prfcst13}></div>

              <div className={Style.prfcst14}>
                <div className={Style.prfcst15}>
                  <p className={Style.prfcst16}>40%</p>
                </div>
              </div>

            </div>
          </div>

          <div className={Style.kasjhlrer}></div>

          <div className={css`margin-top:17px;margin-bottom:17px`}>
            <h2 className={Style.prfcst18}>Organisations</h2>
            <div className={Style.prfcst19}>
              <img className={Style.prfcst20} src={image14} alt="" />
              <p className={Style.prfcst21}>Blu Family Office</p>
            </div>
          </div>
          <div className={Style.kasjhlrer}></div>
          <div className={css`margin-top:17px;margin-bottom:17px`}>
            <h2 className={Style.prfcst18}>BD Partner</h2>
            <div className={Style.prfcst19}>
              <img className={Style.prfcst20} src={rothschild} alt="" />
              <p className={Style.prfcst21}>Rothschild & Co.</p>
            </div>
          </div>

        </div>



        <div>
          <div className={Style.prfcst27}>
            <div className={Style.prfcst28}>
              <div className={Style.prfcst29}>
                <div className={Style.prfcst30}>
                  <div className={Style.prfcst31}>
                    <Icon icon="user" />
                    <p className={Style.prfcst32}>Profile Items</p>
                  </div>
                </div>
                <Accordion  className="jasdnfsdj22-23" defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle  as={Button} onClick={()=>handleClicktoggle(0)}  variant="link" eventKey="0">
                        <Icon icon={activeeventkey[0].isactive==true?"cross":"plus2"} /> <p>PROFILE</p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <>
                        <ViewBox
                          title="Contact Details"
                          values={[
                            {
                              key1: "First Name",
                              value1: "Lucy",
                              key2: "Relationship Manager",
                              value2: "Joern Czech",
                              value1Active: false,
                              value2Active: true,
                            },
                            {
                              key1: "Last Name",
                              value1: "Granger",
                              key2: "Phone",
                              value2: "+44 208 876 1357",
                              value1Active: false,
                              value2Active: false,
                            },
                            {
                              key1: "Title",
                              value1: "Mrs",
                              key2: "Mobile",
                              value2: "+44 777 567 8762",
                              value1Active: false,
                              value2Active: false,
                            },
                            {
                              key1: "Organisation",
                              value1: "Blu Family Office",
                              key2: "Email",
                              value2: "lucy@blu-fo.com",
                              value1Active: true,
                              value2Active: true,
                            },
                          ]}
                        />

                        <ViewBox
                          title="Address Information"
                          values={[
                            {
                              key1: "Street",
                              value1: "16 Water Lane",
                              key2: "Postal Code",
                              value2: "TW9 1TJ",
                              value1Active: false,
                              value2Active: false,
                            },
                            {
                              key1: "City",
                              value1: "Richmond, London",
                              key2: "Country",
                              value2: "United Kingdom",
                              value1Active: false,
                              value2Active: false,
                            },
                          ]}
                        />

                        <ViewBox
                          title="Compliance Information"
                          values={[
                            {
                              key1: "Nationality",
                              value1: "Dutch",
                              key2: "Date of Birth",
                              value2: "28th February 1984",
                              value1Active: false,
                              value2Active: false,
                            },
                            {
                              key1: "Tax Residency",
                              value1: "UK",
                              key2: "",
                              value2: "",
                              value1Active: false,
                              value2Active: false,
                            },
                          ]}
                        />

                        <ViewBox
                          title="Additional Links"
                          values={[
                            {
                              key1: "LinkedIn URL",
                              value1: "https://linkedin.com/in/lucygranger4",
                              key2: "Email 2",
                              value2: "lucy_granger@outlook.com",
                              value1Active: true,
                              value2Active: true,
                            },
                            {
                              key1: "Instagram URL",
                              value1: "https://www.instagram.com/lucygranger4/",
                              key2: "Email 3",
                              value2: "lucy@granger.me",
                              value1Active: true,
                              value2Active: true,
                            },
                          ]}
                        />

                        <div className={Style.prfcst33}>
                          <div className={Style.prfcst34}>
                            <p className={Style.prfcst35}>Background Info</p>
                            <Icon icon="pencil" />
                          </div>
                          <p
                            className={css`
                              ${Style.paraText}
                            `}
                          >
                            Lucy is the founder of Granger Innovation LLC, a
                            positioning and branding firm that helps consultants
                            and other thought leaders increase their fees by up
                            to 2,000%.
                          </p>
                          <p
                            className={css`
                              ${Style.paraText}
                            `}
                          >
                            Before devoting her work fulltime to Granger
                            Innovation LLC, Lucy served as Chief Marketing
                            Officer at an Inc. 5,000 experiential branding
                            organisation whose clients include Bank of America,
                            Goldman Sachs, Samsung, Apple and Harvard and
                            Stanford Universities.
                          </p>
                          <p
                            className={css`
                              ${Style.paraText}
                            `}
                          >
                            Lucy has written for the New York Times, and has
                            written or co-created five books. Her last book,
                            “Accidental Genius” has been published in ten
                            languages.
                          </p>
                          <p
                            className={css`
                              ${Style.paraText}
                            `}
                          >
                            Lucy has also taught research writing at Harvard
                            business school.
                          </p>
                        </div>
                      </>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle   as={Button} onClick={()=>handleClicktoggle(1)} variant="link" eventKey="1">
                        <Icon icon={activeeventkey[1].isactive==true?"cross":"plus2"} /> <p>ACCOUNT</p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse  eventKey="1">
                      <></>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle  as={Button} onClick={()=>handleClicktoggle(2)} variant="link" eventKey="2">
                        <Icon icon={activeeventkey[2].isactive==true?"cross":"plus2"} /> <p>LEGAL</p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <></>
                    </Accordion.Collapse>
                  </Card>

                  <Card>
                    <Card.Header>
                      <Accordion.Toggle  as={Button} onClick={()=>handleClicktoggle(3)} variant="link" eventKey="3">
                        <Icon icon={activeeventkey[3].isactive==true?"cross":"plus2"} /> <p>COMMUNICATIONS</p>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                      <></>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};
const Style = {
  prfcst: css`
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
  prfcst1: css`
    max-width: 1119px;
    margin: auto;
    display: flex;

    @media (max-width:1024px) {
      flex-direction: column;
    }
    
    @media (max-width:556px) {
      align-items: center;
    }
  `,
  prfcst2: css`
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
    @media (max-width:532px) {
      display:block;
      padding:10px;
    }
  `,
  prfcst3: css`
    width: 224px;
    height: 224px;
    border-radius: 224px;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  `,
  prfcst4: css`
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
  prfcst5: css`
    border: 1px solid #e1e4e8;
    margin-top: 22px;
  `,
  prfcst6: css`
    margin-top: 17.51px;
    margin-bottom: 18.49px;
  `,
  prfcst7: css`
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
  prfcst8: css`
    margin-top: 10px;
  `,
  prfcst9: css`
    margin-top: 10px;
    margin-bottom: 22px;
  `,
  prfcst10: css`
    border: 1px solid #e1e4e8;
    margin-top: 22px;
    margin-bottom: 17.5px;
  `,
  prfcst11: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.07em;
    color: #000000;
    margin-top:17px;
    margin-bottom:26px;
  `,
  prfcst12: css`
    background: linear-gradient(
      180deg,
      rgba(190, 190, 190, 0.5) 0%,
      rgba(219, 219, 219, 0.5) 100%
    );
    border: 1px solid #7c7c7c;
    box-sizing: border-box;
    border-radius: 5px;
    width: 224px;
    height: 24px;
  `,
  prfcst13: css`
    background: #b6af9d;
    border-radius: 3px;
    width: 89px;
    height: 16px;
    margin: 3px;
  `,
  prfcst14: css`
    position: relative;
  `,
  prfcst15: css`
    width: 40px;
    background: #4e4b5b;
    height: 40px;
    border-radius: 40px;
    position: absolute;
    left: 40%;
    top: -29px;
  `,
  prfcst16: css`
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.07em;
    color: #ffffff;
    position: relative;
    top: 8px;
    left: 5px;
  `,
  prfcst17: css`
    border: 1px solid #e1e4e8;
    margin-top: 46px;
    margin-bottom: 17.5px;
  `,
  prfcst18: css`
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
  prfcst19: css`
    display: flex;
    align-items: center;
  `,
  prfcst20: css`
    width: 25px;
    height: 25px;
    margin: 7px;
  `,
  prfcst21: css`
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.08em;
    color: #5b626a;
    margin: 0px;
  `,

  prfcst22: css`
    border: 1px solid #e1e4e8;
    margin-top: 27px;
    margin-bottom: 17.5px;
  `,
  prfcst23: css`
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
  prfcst24: css`
    display: flex;
    align-items: center;
  `,
  prfcst25: css`
    width: 25px;
    height: 25px;
    margin: 7px;
  `,
  prfcst26: css`
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.08em;
    color: #5b626a;
    margin: 0px;
  `,
  prfcst27: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;






    @media (max-width:1024px) {
      justify-content: center;
    }




  `,
  prfcst28: css`
    margin-top: 24px;
  `,
  prfcst29: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius:3px;

    @media (max-width:1089px) {
      min-width: 100%;
    }
  `,
  prfcst30: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;

    @media (max-width:534px) {
      flex-wrap:wrap;
    }
  `,
  prfcst31: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  prfcst32: css`
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
  prfcst33: css`
    margin-left: 54px;
    margin-top: 23px;
    @media(max-width:639px)
    {
      margin:23px 12px;
      margin-bottom:0px;
      
    }
  `,
  prfcst34: css`
    display: flex;
    align-items: center;
  `,
  prfcst35: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
    margin-right: 7.45px;
    margin-bottom: 16px;
  `,

  prfcst36: css`
    display: flex;
    margin-left: 10px;
    min-width: 700px;
    justify-content: space-between;
    height: 32px;
  `,
  prfcst37: css`
    display: flex;
    max-width: 329px;
  `,
  prfcst38: css`
    width: 76px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26.73px;
  `,
  prfcst39: css`
    display: flex;
    width: 314px;
    margin-right: 57px;
  `,
  prfcst40: css`
    margin-right: 27.7px;
    width: 317px;
    display: flex;
    justify-content: flex-end;
  `,
  prfcst41: css`
    width: 304px;
    margin: 0px;
  `,
  prfcst42: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: #586069;

    margin: 0px;
  `,
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
dsvjbvresre: css`
width: 67px;
display: flex;
justify-content: flex-end;
margin-right: 26.73px;
`,
  paraText: css`
  font-family: Lucida Grande;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.06em;
  color: #586069;
  max-width: 558px;
`,
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
  viewBoxstl: css`
        display: flex;
        padding: 16px 16px 0px 16px;
      `,
  viewBoxstl1: css`
          margin-left: 40px;
          margin-right: 40px;
          margin-top: 23px;

          @media(max-width:639px)
          {
            margin:23px 0px;
            margin-bottom:0px;
            
          }
        `,
  viewBoxstl2: css`
            display: flex;
          `,
  viewBoxstl3: css`
            margin-top: 11px;

            @media(max-width:1440px)
            {
              max-width: 900px;
              overflow: auto;
            }
            @media(max-width:820px)
            {
              max-width: 650px;
              
            }
            @media(max-width:639px)
            {
              max-width: 525px;
              
            }
            
            @media(max-width:556px)
            {
              max-width: 425px;
              
            }
            @media(max-width:556px)
            {
              max-width: 100%;
            }
            
          `,
  kasdfjersajdk2: css`
          @media (max-width:1024px) {
            margin-right: 15px;
          }
          @media (max-width:556px) {
            margin: 0;
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
          @media (max-width:556px) {
            display:block;
            padding:10px;
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
          margin-bottom:22px;
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
  height: 0.1px;
  background-color: #e1e4e8;        `,
  ksahdks31: css`
          margin-top: 22px;
        `,
  xznfzsff: css`
          margin-top: 10px;
          margin-bottom: 22px;
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
          margin-bottom:18px;
        `,
  snkaknkdad: css`
          margin-top: 10px;
        `,
  askjdkls1: css`
    margin-top: 10px;
    margin-bottom: 22px;
    
  `,
};
