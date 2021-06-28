import React from "react";
import Breadcrumb from "../../../../components/crumbread";
import TopBar from "../../../../components/topBar";
import Tabs from "../../../../components/M_Contacts/profile/tabs";
import { css, cx } from "@emotion/css";
import Dropdown from "../../../../components/dropdown";
import Icon from "../../../../icons/icons";
import Activity from "../../../../components/dashboard/expanded/activity";
import ActivitySub from "../../../../components/dashboard/expanded/activitysub";
import avt from "../../../../images/1.png";
import avt1 from "../../../../images/coverprofile.png";
import rothschild from "../../../../images/Rothschild.png";
import image14 from "../../../../images/image14.png";

const BaseMoreText = css`
  font-family: Lucida Grande;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #1269d3;
  margin-top: 7px;
`;
const BaseHighlightText = css`
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
`;
interface SideMenuProps {
  title: string;
  isActive: Boolean;
}
const SideMenu = (props: SideMenuProps) => {
  const { title, isActive } = props;
  return (
    <div
      className={css`
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
        list={["Contacts", "People", "Lucy Granger"]}
        activeIndex={2}
      />
      <Tabs activeTab={1} />

      <div
        className={css`
          max-width: 1119px;
          margin: auto;
          display: flex;
        `}
      >
        <div
          className={css`
            margin-right: 28px;
            max-width: 224px;
            position: relative;
            bottom: 29px;
          `}
        >
          <img
            src={avt1}
            className={css`
              width: 224px;
              height: 224px;
              border-radius: 224px;
              filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
            `}
          />

          <h1
            className={css`
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
            `}
          >
            Lucy Granger
          </h1>

          <div
            className={css`
              border: 1px solid #e1e4e8;
              margin-top: 22px;
            `}
          ></div>

          <div
            className={css`
              margin-top: 17.51px;
              margin-bottom: 18.49px;
            `}
          >
            <h2
              className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                display: flex;
                align-items: center;
                letter-spacing: -0.07em;
                color: #000000;
              `}
            >
              Highlights
            </h2>
            <div
              className={`d-flex ml-2 align-items-center ${css`
                margin-top: 10px;
              `}`}
            >
              <Icon icon="email" />
              <p
                className={css`
                  ${BaseHighlightText}
                `}
              >
                lucy@blu-fo.com
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${css`
                margin-top: 10px;
              `}`}
            >
              <Icon icon="landline" />
              <p
                className={css`
                  ${BaseHighlightText}
                `}
              >
                +44 206 876 1357
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${css`
                margin-top: 10px;
              `}`}
            >
              <Icon icon="phone" />
              <p
                className={css`
                  ${BaseHighlightText}
                `}
              >
                +44 777 5678 762
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${css`
                margin-top: 10px;
              `}`}
            >
              <Icon icon="stage" />
              <p
                className={css`
                  ${BaseHighlightText}
                `}
              >
                KYC Completed
              </p>
            </div>

            <div
              className={`d-flex ml-2 align-items-center ${css`
                margin-top: 10px;
                margin-bottom: 22px;
              `}`}
            >
              <Icon icon="sales" />
              <p
                className={css`
                  ${BaseHighlightText}
                `}
              >
                Joern Czech
              </p>
            </div>
            <div
              className={css`
                border: 1px solid #e1e4e8;
                margin-top: 22px;
                margin-bottom: 17.5px;
              `}
            ></div>
            <h2
              className={css`
                font-family: Lucida Grande;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                display: flex;
                align-items: center;
                letter-spacing: -0.07em;
                color: #000000;
              `}
            >
              Investment preferences
            </h2>
            <div
              className={css`
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
              `}
            >
              <div
                className={css`
                  background: #b6af9d;
                  border-radius: 3px;
                  width: 89px;
                  height: 16px;
                  margin: 3px;
                `}
              ></div>
              <div
                className={css`
                  position: relative;
                `}
              >
                <div
                  className={css`
                    width: 40px;
                    background: #4e4b5b;
                    height: 40px;
                    border-radius: 40px;
                    position: absolute;
                    left: 40%;
                    top: -29px;
                  `}
                >
                  {" "}
                  <p
                    className={css`
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
                    `}
                  >
                    40%
                  </p>
                </div>
              </div>

              <div
                className={css`
                  border: 1px solid #e1e4e8;
                  margin-top: 46px;
                  margin-bottom: 17.5px;
                `}
              ></div>

              <h2
                className={css`
                  font-family: Lucida Grande;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 19px;
                  display: flex;
                  align-items: center;
                  letter-spacing: -0.07em;
                  color: #000000;
                `}
              >
                Organisations
              </h2>
              <div
                className={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <img
                  className={css`
                    width: 25px;
                    height: 25px;
                    margin: 7px;
                  `}
                  src={image14}
                  alt=""
                />
                <p
                  className={css`
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.08em;
                    color: #5b626a;
                    margin: 0px;
                  `}
                >
                  Blu Family Office
                </p>
              </div>

              <div
                className={css`
                  border: 1px solid #e1e4e8;
                  margin-top: 27px;
                  margin-bottom: 17.5px;
                `}
              ></div>
              <h2
                className={css`
                  font-family: Lucida Grande;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 19px;
                  display: flex;
                  align-items: center;
                  letter-spacing: -0.07em;
                  color: #000000;
                `}
              >
                BD Partner
              </h2>
              <div
                className={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <img
                  className={css`
                    width: 25px;
                    height: 25px;
                    margin: 7px;
                  `}
                  src={rothschild}
                  alt=""
                />
                <p
                  className={css`
                    font-size: 16px;
                    line-height: 19px;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.08em;
                    color: #5b626a;
                    margin: 0px;
                  `}
                >
                  Rothschild & Co.
                </p>
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={css`
              max-width: 1124px;
              width: 100%;
              margin: auto;
              margin-bottom: -1px;
              display: flex;
            `}
          >
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
                    <Icon icon="user" />
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
                      Profile Items
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
