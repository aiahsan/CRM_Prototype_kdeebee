import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/M_Contacts/activity';
import avt from '../../../images/img1big.png';
import UserImg from '../../../images/User.png';
import Pagination from '../../../components/pagination';

export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Contacts', 'People']} activeIndex={1} />
      <Tabs activeTab={2} />
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
                  placeholder='Search organasations '
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
                  width: 143px;
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
                <Icon icon='org' color='white' />
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
                  Add Organisation
                </p>
              </button>
            </div>
          </div>
          <div className={Style.ajkhsdfjksde}>
            <div className={Style.asdkfnkdsfner}>
              <div className={Style.aklsdfnkser}>
                <input className={Style.kdsanfjlsdner} type='checkbox' />
                <img src={UserImg} />
                <p className={Style.vkasdnjffsf}>10 Organisations</p>
              </div>
              <div className={Style.jsdabfjsdfser}>
                <Dropdown title='Type' />
                <Dropdown title='Sort' />
              </div>
            </div>

            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Blu Family Office'
                lastActitvy='Last active:  23 minutes ago'
                status='Family Office'
                email=''
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  44 minutes ago'
                status='Family Office'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  55 minutes ago'
                status='Family Office'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  2 hours ago'
                status='Stage: Investment Preferences Known'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  3 hours ago'
                status='Stage: Investment Preferences Known'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  4 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Stage: Prospect'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.kahsdfjkhfsf}>
              <Activity
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  7 hours ago'
                status='Stage: Transacted'
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
    </>
  );
};

const Style = {
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
    max-width: 980px;
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
    max-width: 560px;
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
    min-width: 980px;
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
    max-width: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  kahsdfjkhfsf: css`
    border-bottom: 1px solid #e1e4e8;
  `,
};
