import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tab from '../../../components/newComponents/organisations/tab';
import { css } from '@emotion/css';
import ProfileBar from '../../../components/newComponents/organisations/profileBar';
import Icon from '../../../icons/icons';
import ViewBox from '../../../components/newComponents/profileComponents/viewBox';

const Profile = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <Tab activeTab={1} />
      <div
        className={css`
          ${Style.p1}
        `}
      >
        <ProfileBar />
        <div>
          <div className={Style.g1}>
            <div>
              <div className={Style.g3}>
                <div className={Style.g4}>
                  <div className={Style.g5}>
                    <Icon icon='org' />
                    <p className={Style.g6}>Profile Items</p>
                  </div>
                </div>

                <>
                  <div className={Style.c1}>
                    <div className={Style.c2}>
                      <p className={Style.c3}>Background Info</p>
                      <Icon icon='pencil' />
                    </div>
                    <p
                      className={css`
                        ${Style.c4}
                      `}
                    >
                      Blu Family Office was founded in 2010 to manage the assets
                      and affairs of a single family. Since 2012, we have been
                      mandated to help others protect, invest and grow their
                      wealth.
                    </p>
                    <p
                      className={css`
                        ${Style.c4}
                        ${Style.GH1}
                      `}
                    >
                      ​We provide investment management solutions and advise on
                      tax strategy, according to the bespoke needs,
                      jurisdictions and wishes of our clients.
                    </p>
                  </div>

                  <ViewBox
                    title='Contact Details'
                    values={[
                      {
                        key1: 'Phone',
                        value1: '+44 208 166 1223',
                        key2: 'Website',
                        value2: 'www.blu-fo.com',
                        value1Active: true,
                        value2Active: false,
                      },
                      {
                        key1: 'Street',
                        value1: '16 Water Lane',
                        key2: 'Postal Code',
                        value2: 'TW9 1TJ',
                        value1Active: false,
                        value2Active: false,
                      },
                      {
                        key1: 'City',
                        value1: 'Richmond, London',
                        key2: 'Country',
                        value2: 'United Kingdom',
                        value1Active: false,
                        value2Active: false,
                      },
                    ]}
                  />

                  <div className={Style.GH2}>
                    <iframe
                      width='100%'
                      height='300'
                      frameBorder='0'
                      scrolling='no'
                      src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    ></iframe>
                  </div>
                  <div className={Style.GH3}>
                    <div className={Style.GH4}>
                      <div className={Style.c2}>
                        <p
                          className={css`
                            ${Style.c3}
                            border:none;
                          `}
                        >
                          Additional Links
                        </p>
                        <Icon icon='pencil' />
                      </div>
                      <div className='w-100 mb-5'>
                        <div className={Style.GH5}>
                          <p
                            className={css`
                              ${Style.cs6}
                              ${Style.cs7}
                            `}
                          >
                            LinkedIn
                          </p>
                          <p
                            className={css`
                              ${Style.cs6}
                              color:#1269D3
                            `}
                          >
                            https://www.linkedin.com/company/blu-family-office/
                          </p>
                        </div>

                        <div className={Style.GH6}>
                          <p
                            className={css`
                              ${Style.cs6}
                              ${Style.cs7}
                            `}
                          >
                            Twitter
                          </p>
                          <p
                            className={css`
                              ${Style.cs6}
                              color:#1269D3
                            `}
                          >
                            https://twitter.com/BluFamilyOffice
                          </p>
                        </div>

                        <div className={Style.GH7}>
                          <p
                            className={css`
                              ${Style.cs6}
                              ${Style.cs7}
                            `}
                          >
                            Facebook
                          </p>
                          <p
                            className={css`
                              ${Style.cs6}
                              color:#1269D3
                            `}
                          >
                            https://www.facebook.com/BluFamilyOffice/{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  GH1: css`
    margin-bottom: 0px;
  `,
  GH2: css`
    max-width: 711px;
    margin: auto;
    margin-top: 18px;
  `,
  GH3: css`
    display: flex;
    padding: 28px 16px 0px 16px;
  `,
  GH4: css`
    margin-left: 40px;
    margin-right: 40px;
    width: 100%;

    @media (max-width: 534px) {
      margin-left: 0px;
      margin-right: 0px;
    }
  `,
  GH5: css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 534px) {
      flex-direction: column;
    }
  `,
  GH6: css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 534px) {
      flex-direction: column;
    }
  `,
  GH7: css`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 534px) {
      flex-direction: column;
    }
  `,
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
  c1: css`
    margin-left: 54px;
    margin-top: 23px;
    @media (max-width: 639px) {
      margin: 23px 12px;
      margin-bottom: 0px;
    }
  `,
  c2: css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    padding-bottom: 11px;
    margin-bottom: 5px;
  `,
  c3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
    margin-right: 7.45px;
  `,

  c4: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.06em;
    color: #586069;
    max-width: 558px;
  `,
  cs6: css`
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: -0.06em;
    color: #586069;
    margin: 0px;
    padding: 7px 0px;

    @media (max-width: 534px) {
      margin: 0;
      justify-content: flex-start;
    }
  `,
  cs7: css`
    width: 100px;
    display: flex;
    justify-content: flex-end;
    margin-right: 28px;
  `,
};
export default Profile;
