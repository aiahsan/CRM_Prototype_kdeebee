import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/M_Contacts/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../../components/dropdown';
import Icon from '../../../icons/icons';
import Activity from '../../../components/M_Contacts/activity';
import Pagination from '../../../components/pagination';
import { useHistory } from 'react-router-dom';
import { theme } from '../../../styles/theme';

export default () => {
  const history = useHistory();
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Contacts', 'People']} activeIndex={1} />
      <Tabs activeTab={3} />
      <div className={Style.GH11}>
        <div className={Style.GH10}>
          <div className={Style.GH9}>
            <div className={Style.GH8}>
              <div className={Style.GH7}>
                <Icon icon='chain1' />
                <p className={Style.GH12}>11 Items to reconcile</p>
              </div>
              <div className={Style.GH6}>
                <Dropdown title='Type' />
                <Dropdown title='Sort' />
              </div>
            </div>

            <div className={Style.GH5}>
              <Activity
                title='IANUA Anchor Social Housing '
                lastActitvy='Last active:  23 minutes ago'
                status='BCC'
                email=''
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='Updates on IB’s'
                email=''
                lastActitvy='Last active:  44 minutes ago'
                tag='TO'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='Catch-up'
                email=''
                lastActitvy='Last active:  55 minutes ago'
                status='BCC'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='IANUA UK Social Housing'
                email=''
                lastActitvy='Last active:  2 hours ago'
                tag='TO'
              />

              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='Update - Anchor Social Housing'
                email=''
                lastActitvy='Last active:  3 hours ago'
                tag='TO'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='Summary of Fundamentum track record'
                email=''
                lastActitvy='Last active:  4 hours ago'
                status='BCC'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='IANUA UK Social Housing'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='BCC'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='IANUA follow-up'
                email=''
                lastActitvy='Last active:  6 hours ago'
                tag='TO'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='Catch-up'
                email=''
                lastActitvy='Last active:  6 hours ago'
                status='BCC'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
            <div className={Style.GH5}>
              <Activity
                title='IANUA follow-up'
                email=''
                lastActitvy='Last active:  7 hours ago'
                status='BCC'
              />
              <button
                onClick={() => history.push('/contacts/recoil/allocate')}
                className={Style.GH4}
              >
                <Icon icon='eye' />
                <p className={Style.GH3}>View Details</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.GH1}>
        <div className={Style.GH2}>
          <Pagination />
        </div>
      </div>
    </>
  );
};

const Style = {
  GH2: css`
    display: flex;
    justify-content: center;
    margin-left: 3%;
  `,
  GH1: css`
    max-width: 980px;
    margin: auto;
    margin-top: 32px;
  `,

  GH11: css`
    max-width: 980px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  GH10: css`
    margin-left: 29.04px;
    width: 100%;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,

  GH9: css`
    border: 1px solid ${theme.colorWhite3};
    margin-top: 24px;
    min-width: 980px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  GH8: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid ${theme.colorWhite3};
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  GH7: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  GH12: css`
    margin: 0px;

    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    letter-spacing: -0.06em;
    margin-left: 7.5px;
    color: ${theme.colorGrey1};
  `,
  GH6: css`
    max-width: 115px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  GH5: css`
    border-bottom: 1px solid ${theme.colorWhite3};
    display: flex;
    justify-content: space-between;
    padding-right: 12px;
    align-items: center;
  `,
  GH4: css`
    width: 111px;
    height: 34px;
    background: ${theme.colorWhite};
    border: 1px solid #dce0e4;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  GH3: css`
    font-size: ${theme.fontSize14};
    line-height: 16px;
    letter-spacing: -0.1em;
    color: #202528;
    margin: 0px;
    padding: 0px;
    margin-left: 4.25px;
  `,
};
