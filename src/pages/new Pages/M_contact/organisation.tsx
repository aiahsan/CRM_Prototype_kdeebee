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
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Contacts', 'People']} activeIndex={1} />
      <Tabs activeTab={2} />
      <div className={Style.GH6}>
        <div className={Style.GH7}>
          <div className={Style.GH8}>
            <div className={Style.GH9}>
              <div className={Style.GH10}>
                <Dropdown title='All stages' />
              </div>
              <div className={Style.GH11}>
                <Icon icon='search' />
                <input
                  className={Style.GH12}
                  placeholder='Search organasations '
                />
              </div>
            </div>
            <div className={Style.GH1}>
              <button className={Style.GH2}>
                <Icon icon='org' color='white' />
                <p className={Style.GH3}>Add Organisation</p>
              </button>
            </div>
          </div>
          <div className={Style.GH13}>
            <div className={Style.GH14}>
              <div className={Style.GH15}>
                <input className={Style.GH16} type='checkbox' />
                <img src={UserImg} />
                <p className={Style.GH17}>10 Organisations</p>
              </div>
              <div className={Style.GH18}>
                <Dropdown title='Type' />
                <Dropdown title='Sort' />
              </div>
            </div>

            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Blu Family Office'
                lastActitvy='Last active:  23 minutes ago'
                status='Family Office'
                email=''
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  44 minutes ago'
                status='Family Office'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  55 minutes ago'
                status='Family Office'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  2 hours ago'
                status='Stage: Investment Preferences Known'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  3 hours ago'
                status='Stage: Investment Preferences Known'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  4 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Stage: Prospect'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Carter Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
                image={avt}
                title='Blu Family Office'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='Family Office'
              />
            </div>
            <div className={Style.GH19}>
              <Activity
                onClick={() => history.push('/contacts/organisation/timeline')}
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
      <div className={Style.GH4}>
        <div className={Style.GH5}>
          <Pagination />
        </div>
      </div>
    </>
  );
};

const Style = {
  GH1: css`
    display: flex;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  GH2: css`
    width: 143px;
    height: 34px;
    background: #b6af9d;
    border: 1px solid #b6af9d;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  GH3: css`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.1em;
    color: #ffffff;
    margin: 0px;
    padding: 0px;
    margin-left: 4.25px;
  `,
  GH4: css`
    max-width: 978.98px;
    margin: auto;
    margin-top: 32px;
  `,
  GH5: css`
    display: flex;
    justify-content: center;
    margin-left: 3%;
  `,

  GH6: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  GH7: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,
  GH8: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  GH9: css`
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

  GH10: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;
    @media (max-width: 320px) {
      border: none;
    }
  `,
  GH11: css`
    padding-left: 10px;
  `,

  GH12: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  GH13: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 980px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  GH14: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  GH15: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  GH16: css`
    margin-right: 7.5px;
  `,
  GH17: css`
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
  GH18: css`
    max-width: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  GH19: css`
    border-bottom: 1px solid #e1e4e8;
  `,
};
