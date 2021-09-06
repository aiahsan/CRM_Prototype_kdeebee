import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/M_Contacts/activity';
import avt from '../../../images/1.png';
import UserImg from '../../../images/User.png';
import Pagination from '../../../components/pagination';
import { useHistory } from 'react-router-dom';
export default () => {
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Contacts', 'People']} activeIndex={1} />
      <Tabs activeTab={1} />
      <div className={Style.GH11}>
        <div className={Style.GH12}>
          <div className={Style.GH13}>
            <div className={Style.GH14}>
              <div className={Style.GH15}>
                <Dropdown title='All stages' />
              </div>
              <div className={Style.GH16}>
                <Icon icon='search' />
                <input className={Style.GH17} placeholder='search' />
              </div>
            </div>
            <div className={Style.GH1}>
              <button className={Style.GH2}>
                <Icon icon='label' />
                <p className={Style.GH3}>Tags</p>
                <div className={Style.GH4}>
                  <p className={Style.GH5}>41</p>
                </div>
              </button>
              <button className={Style.GH6}>
                <Icon icon='userwhite' />
                <p className={Style.GH7}>Add Contact</p>
              </button>
            </div>
          </div>
          <div className={Style.GH18}>
            <div className={Style.GH19}>
              <div className={Style.GH20}>
                <input className={Style.GH21} type='checkbox' />
                <img src={UserImg} />
                <p className={Style.GH22}>87 People</p>
              </div>
              <div className={Style.GH23}>
                <Dropdown title='Tag' />
                <Dropdown title='Stage' />
                <Dropdown title='Sort' />
              </div>
            </div>

            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Mary Ek'
                lastActitvy='Last active:  23 minutes ago'
                status='Stage: KYC Completed'
                email='lucy@blu-fo.com'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Sarah Thiem'
                email='sarah.thiem@abc.com'
                lastActitvy='Last active:  44 minutes ago'
                status='Stage: KYC Completed'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Tom Johnson'
                email='tom.johnson@abc.com'
                lastActitvy='Last active:  55 minutes ago'
                status='Stage: KYC Completed'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='James Lennon'
                email='james.lennon@abc.com'
                lastActitvy='Last active:  2 hours ago'
                status='Stage: Investment Preferences Known'
                tag='Tag ABC'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Preethi Mackenzie'
                email='preethi.mackenzie@abc.com'
                lastActitvy='Last active:  3 hours ago'
                status='Stage: Investment Preferences Known'
                tag='Tag XYZ'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Marie Carney'
                email='marie.carney@abc.com'
                lastActitvy='Last active:  4 hours ago'
                status='Stage: KYC Completed'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='James Jarret'
                email='james.jarret@abc.com'
                lastActitvy='Last active:  6 hours ago'
                status='Stage: Prospect'
                tag='ABC BD Partner'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='John Steadman'
                email='john.steadman@abc.com'
                lastActitvy='Last active:  6 hours ago'
                status='Stage: KYC Completed'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Chris Copeland'
                email='chris.copeland@abc.com'
                lastActitvy='Last active:  6 hours ago'
                status='Stage: KYC Completed'
              />
            </div>
            <div className={Style.GH24}>
              <Activity
                onClick={() => history.push('/contacts/usertimeline')}
                image={avt}
                title='Sara Hodge'
                email='sara.hodge@abc.com'
                lastActitvy='Last active:  7 hours ago'
                status='Stage: Transacted'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.GH8}>
        <div className={Style.GH9}>
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

  GH11: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  GH12: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,
  GH13: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 980px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  GH14: css`
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

  GH15: css`
    padding: 8px 9.5px 8px 17px;
    border-right: 1px solid #e1e4e8;
    @media (max-width: 320px) {
      border: none;
    }
  `,
  GH16: css`
    padding-left: 10px;
  `,

  GH17: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  GH18: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 980px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  GH19: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  GH20: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  GH21: css`
    margin-right: 7.5px;
  `,
  GH22: css`
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
  GH23: css`
    max-width: 185px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  GH24: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  GH1: css`
    display: flex;
    @media (max-width: 768px) {
      margin-top: 20px;
    }
  `,
  GH2: css`
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
  `,
  GH3: css`
    margin: 0px 4px;
    letter-spacing: -0.07em;

    color: #586069;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
  `,
  GH4: css`
    width: 24px;
    height: 15px;
    background: #e8e9eb;
    border-radius: 7px;
  `,
  GH5: css`
    align-items: center;
    letter-spacing: -0.07em;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #586069;
  `,
  GH6: css`
    width: 111px;
    height: 34px;
    background: #b6af9d;
    border: 1px solid #b6af9d;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  GH7: css`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.1em;
    color: #ffffff;
    margin: 0px;
    padding: 0px;
    margin-left: 4.25px;
  `,
  GH8: css`
    max-width: 978.98px;
    margin: auto;
    margin-top: 32px;
  `,
  GH9: css`
    display: flex;
    justify-content: center;
    margin-left: 3%;
  `,
};
