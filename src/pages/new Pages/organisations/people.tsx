import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tab from '../../../components/newComponents/organisations/tab';
import { css } from '@emotion/css';
import ProfileBar from '../../../components/newComponents/organisations/profileBar';
import Icon from '../../../icons/icons';
import Pagination from '../../../components/pagination';
import Accordian from '../../../components/newComponents/profileComponents/accordian';
import Dropdown from '../../../components/dropdown';
import Activity from '../../../components/M_Contacts/activity';
import UserImg from '../../../images/User.png';
import avt from '../../../images/1.png';

const Profile = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <Tab activeTab={2} />
      <div
        className={css`
          ${Style.p1}
        `}
      >
        <ProfileBar />
        <div>
          <div className={Style.akdshgksdhner}>
            <div className={Style.kandsfjsdneR}>
              <div className={Style.aknsdlsereT}>
                <div className={Style.dnkavksdernkiser}>
                  <div className={Style.kasdgneet}>
                    <Dropdown title='All stages' />
                  </div>
                  <div className={Style.kansfdjerew}>
                    <Icon icon='search' />
                    <input
                      className={Style.ks2asdjfkfnre}
                      placeholder='search'
                    />
                  </div>
                </div>
                <div
                  className={css`
                    display: flex;
                    @media (max-width: 768px) {
                      margin-top: 20px;
                    }
                  `}
                >
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
                  <button
                    className={css`
                      width: 111px;
                      height: 34px;
                      background: #b6af9d;
                      border: 1px solid #b6af9d;
                      box-sizing: border-box;
                      border-radius: 2px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <Icon icon='userwhite' />
                    <p
                      className={css`
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 16px;
                        letter-spacing: -0.1em;
                        color: #ffffff;
                        margin: 0px;
                        padding: 0px;
                        margin-left: 4.25px;
                      `}
                    >
                      Add Contact
                    </p>
                  </button>
                </div>
              </div>
              <div className={Style.ajkhsdfjksde}>
                <div className={Style.asdkfnkdsfner}>
                  <div className={Style.aklsdfnkser}>
                    <input className={Style.kdsanfjlsdner} type='checkbox' />
                    <img src={UserImg} />
                    <p className={Style.vkasdnjffsf}>87 People</p>
                  </div>
                  <div className={Style.jsdabfjsdfser}>
                    <Dropdown title='Tag' />
                    <Dropdown title='Stage' />
                    <Dropdown title='Sort' />
                  </div>
                </div>

                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='Mary Ek'
                    lastActitvy='Last active:  23 minutes ago'
                    status='Stage: KYC Completed'
                    email='lucy@blu-fo.com'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='Sarah Thiem'
                    email='sarah.thiem@abc.com'
                    lastActitvy='Last active:  44 minutes ago'
                    status='Stage: KYC Completed'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='Tom Johnson'
                    email='tom.johnson@abc.com'
                    lastActitvy='Last active:  55 minutes ago'
                    status='Stage: KYC Completed'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='James Lennon'
                    email='james.lennon@abc.com'
                    lastActitvy='Last active:  2 hours ago'
                    status='Stage: Investment Preferences Known'
                    tag='Tag ABC'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='James Lennon'
                    email='james.lennon@blu-fo.com'
                    lastActitvy='Last active:  3 hours ago'
                    status='Stage: Investment Preferences Known'
                    tag='Tag XYZ'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='Marie Carney'
                    email='marie.carney@abc.com'
                    lastActitvy='Last active:  4 hours ago'
                    status='Stage: KYC Completed'
                  />
                </div>
                <div className={Style.kahsdfjkhfsf}>
                  <Activity
                    image={avt}
                    title='James Jarret'
                    email='james.jarret@abc.com'
                    lastActitvy='Last active:  6 hours ago'
                    status='Stage: Prospect'
                    tag='ABC BD Partner'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              max-width: 978.98px;
              margin: auto;
              margin-top: 32px;
            `}
          >
            <div
              className={css`
                display: flex;
                justify-content: center;
                margin-left: 3%;
              `}
            >
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  p1: css`
    max-width: 1119px;
    margin: auto;
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    @media (max-width: 556px) {
      align-items: center;
    }
  `,

  p27: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,

  g1: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  `,
  g2: css`
    margin-top: 24px;
  `,
  g3: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;

    @media (max-width: 1089px) {
      min-width: 100%;
    }
  `,
  g4: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    background: #f6f8fa;
    border-bottom: 1px solid #e1e4e8;

    @media (max-width: 534px) {
      flex-wrap: wrap;
    }
  `,
  g5: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  g6: css`
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
    @media (max-width: 639px) {
      margin: 23px 12px;
      margin-bottom: 0px;
    }
  `,

  hajksdghks: css`
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

  akdshgksdhner: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  kandsfjsdneR: css`
    margin-top: 24px;
    margin-left: 29.04px @media (max-width: 425) {
      margin-left: 0px;
    }
  `,
  aknsdlsereT: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 728px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  dnkavksdernkiser: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 458px;
    width: 100%;

    @media (max-width: 320px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  kasdgneet: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;
    @media (max-width: 320px) {
      border: none;
    }
  `,
  kansfdjerew: css`
    padding-left: 10px;
  `,

  ks2asdjfkfnre: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  ajkhsdfjksde: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  asdkfnkdsfner: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  aklsdfnkser: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  kdsanfjlsdner: css`
    margin-right: 7.5px;
  `,
  vkasdnjffsf: css`
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
  jsdabfjsdfser: css`
    max-width: 185px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  kahsdfjkhfsf: css`
    border-bottom: 1px solid #e1e4e8;
  `,
};
export default Profile;
