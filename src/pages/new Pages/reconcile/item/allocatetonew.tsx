import React from 'react';
import Breadcrumb from '../../../../components/crumbread';
import TopBar from '../../../../components/topBar';
import Tabs from '../../../../components/M_Contacts/tabs';
import { css } from '@emotion/css';
import Icon from '../../../../icons/icons';
import avt from '../../../../images/image 10a.png';

const Header = ({ title, desc }: { title: string; desc?: string }) => (
  <div className={Style.alloc8}>
    <p className={Style.alloc9}>
      {title}{' '}
      <span
        className={css`
          font-weight: normal;
        `}
      >
        {' '}
        &thinsp; {desc ? desc : ''}
      </span>
    </p>
  </div>
);
export default () => {
  const [option, setoption] = React.useState(0);
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'Reconcile', 'IANUA Anchor Social Housing']}
        activeIndex={2}
      />
      <Tabs activeTab={3} />
      <div className={Style.alloc1}>
        <h1 className={Style.alloc2}>IANUA Anchor Social Housing</h1>
        <div className={Style.alloc3}></div>

        <div>
          <div className={Style.alloc4}>
            <img className={Style.alloc5} src={avt} alt='' />
            <div className={Style.alloc6}>
              <div className={Style.alloc7}>
                <Icon icon='leftchev' />
              </div>

              <Header title='George Bitsonis' desc='sent message 44m ago' />

              <div className={Style.allsd}>
                <p className={Style.allsd1}>
                  <span className={Style.allsd2}>From:</span> George Bitsonis{' '}
                  {`<george@ianua.market>`}
                  <br></br>
                  <br></br>
                  <span className={Style.allsd2}>Sent:</span> 23 April 2021
                  14:06
                  <br></br>
                  <span className={Style.allsd2}>To:</span> Myriam Tandia{' '}
                  {`<polelrealestate@gmail.com>`}
                  <br></br>
                  <span className={Style.allsd2}>Cc:</span> Business Development{' '}
                  {`<bd@ianua.market>`}
                  <br></br>
                  <span className={Style.allsd2}>Subject:</span> IANUA Anchor
                  Social Housing - latest developments
                  <br></br>
                  <br></br>
                  Hi Myriam,
                  <br></br>
                  <br></br>
                  It was great talking again, let us share with you our latest
                  developments.
                  <br></br>
                  <br></br>
                  <br></br>- Lending termsheet signed with Oaknorth Bank for GBP
                  30m at an 60% LTV
                  <br></br>- Incorporation of OpCo started and expected to be
                  done early next week
                  <br></br>- HoldCo already incorporated (see here)
                  <br></br>
                </p>
                <div className={Style.allsd3}>
                  <div className={Style.allsd4}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={Style.allsd5}>
            <img className={Style.allsd6} src={avt} alt='' />
            <div className={Style.allsd7}>
              <div className={Style.allsd8}>
                <Icon icon='leftchev' />
              </div>

              <Header title='Process Message' />

              <div className={Style.ssncakser1}>
                <p>Allocate or remove message</p>

                <div
                  className={css`
                    margin-left: 30px;
                  `}
                >
                  <label className='container1'>
                    Remove
                    <input
                      type='radio'
                      checked={option == 0}
                      onClick={() => setoption(0)}
                      name='radio'
                    />
                    <span className='checkmark'></span>
                  </label>
                  <label className='container1'>
                    Allocate
                    <input
                      type='radio'
                      checked={option == 1}
                      onClick={() => setoption(1)}
                      name='radio'
                    />
                    <span className='checkmark'></span>
                  </label>
                  {option == 1 ? (
                    <>
                      <select className={Style.p6}>
                        <option>Select one or more contacts</option>
                      </select>
                    </>
                  ) : (
                    <></>
                  )}
                  <label className='container1'>
                    Allocate to new contact
                    <input
                      type='radio'
                      checked={option == 2}
                      onClick={() => setoption(2)}
                      name='radio'
                    />
                    <span className='checkmark'></span>
                  </label>
                </div>
                {option == 2 ? (
                  <>
                    <div className={Style.akshdkas232}>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            First Name
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='First Name'
                          />
                        </div>
                      </div>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Relationship Manager
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Relationship Manager'
                          />
                        </div>
                      </div>
                    </div>

                    <div className={Style.akshdkas232}>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Last Name
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Last Name'
                          />
                        </div>
                      </div>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Phone
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Phone'
                          />
                        </div>
                      </div>
                    </div>

                    <div className={Style.akshdkas232}>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Title
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Title'
                          />
                        </div>
                      </div>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Mobile
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Mobile'
                          />
                        </div>
                      </div>
                    </div>

                    <div className={Style.akshdkas232}>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Organisation
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Organisation'
                          />
                        </div>
                      </div>
                      <div className={Style.akshdkas23}>
                        <div className={Style.akshdkas231}>
                          <p
                            className={css`
                              ${Style.TextInputp}
                            `}
                          >
                            Email
                          </p>
                        </div>
                        <div>
                          <input
                            className={css`
                              ${Style.TextInput}
                            `}
                            placeholder='Email'
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div
                  className={css`
                    margin-top: 73px;
                    display: flex;
                    justify-content: flex-end;
                  `}
                >
                  <button
                    className={css`
                      margin-right: 28px;
                      background: linear-gradient(
                        180deg,
                        #f9fafb 0%,
                        #eff3f6 100%
                      );
                      border: 1px solid #c4c8cc;
                      border-radius: 2px;
                      font-family: Lucida Grande;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 14px;
                      line-height: 16px;
                      text-align: center;
                      letter-spacing: -1px;
                      width: 56px;
                      height: 32px;
                      color: #444d56;
                    `}
                  >
                    Cancel
                  </button>
                  <button
                    className={css`
                      background: linear-gradient(
                        180deg,
                        #a1d1a6 0%,
                        #a1d1a6 100%
                      );
                      border: 1px solid #86ad8c;
                      box-sizing: border-box;
                      border-radius: 2px;
                      width: 56px;
                      height: 32px;
                      font-family: Lucida Grande;
                      font-style: normal;
                      font-weight: bold;
                      font-size: 14px;
                      line-height: 16px;
                      align-items: center;
                      text-align: center;
                      letter-spacing: -0.1em;

                      color: #e7f3e9;
                    `}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  TextInputp: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    text-align: right;
    letter-spacing: -0.06em;
    color: #586069;
    margin: 0px;
  `,
  TextInput: css`
    background: linear-gradient(180deg, #fafbfc 0%, #f9fafb 100%);
    border: 1px solid #e1e4e7;
    box-sizing: border-box;
    border-radius: 3px;
    height: 18px;
    width: 140px;
    &::placeholder {
      font-family: Lucida Grande;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;
      padding-left: 8px;
      color: #aeb2b8;
    }
  `,
  alloc1: css`
    max-width: 930.98px;
    margin-bottom: -1px;
    width: 100%;
    margin: auto;
  `,
  alloc2: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: normal;
    font-size: 29px;
    line-height: 37px;
    letter-spacing: -0.05em;
    color: #000000;
    margin-top: 25px;
    margin-bottom: 31.7px;

    @media (max-width: 1024px) {
      margin-left: 10px;
    }
  `,
  alloc3: css`
    height: 0.1px;
    background-color: #e1e4e8;
  `,
  alloc4: css`
    display: flex;
    margin: 18px 18px 18px 0px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,
  alloc5: css`
    width: 56px;
    height: 56px;
    margin-right: 28px;
  `,
  alloc6: css`
    margin-top: -24px;
    min-width: 791px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  alloc7: css`
    position: relative;
    left: -7px;
    z-index: 2;
    top: 37px;
  `,
  alloc8: css`
    background: #f6f8fa;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 29px;
    border-radius: 3px 3px 0px 0px;
    border: 1px solid #e1e4e8;
    border-bottom: 0px;
  `,
  alloc9: css`
    margin: 0px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
  `,
  allsd: css`
    border: 1px solid #e1e4e8;
    padding: 16px 56px 18px 56px;
  `,
  allsd1: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.03em;

    color: #000000;
  `,
  allsd2: css`
    font-weight: bold;
  `,
  allsd3: css`
    position: relative;
  `,
  allsd4: css`
    height: 55px;
    width: 1px;
    background-color: #e1e4e8;
    position: absolute;
    top: 19px;
    @media (max-width: 1024px) {
      left: -20px;
    }
  `,
  allsd5: css`
    display: flex;
    margin: 55px 18px 55px 0px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,
  allsd6: css`
    width: 56px;
    height: 56px;
    margin-right: 28px;
  `,
  allsd7: css`
    margin-top: -24px;
    min-width: 791px;
    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  allsd8: css`
    position: relative;
    left: -6.7px;
    z-index: -1;
    top: 37px;
  `,
  allsd9: css`
    background: #f6f8fa;
    height: 56px;
    display: flex;
    align-items: center;
    padding-left: 29px;
    border-radius: 3px 3px 0px 0px;
  `,
  akshdkas232: css`
    margin-top: 20px;
    margin-left: 56px;
    display: flex;
    max-width: 616px;
    margin: auto;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (max-width: 1024px) {
      margin-left: 5px;
    }
  `,
  akshdkas231: css`
    width: 139px;
    display: flex;
    justify-content: flex-end;
    margin-right: 26px;
  `,
  akshdkas23: css`
    display: flex;
    align-items: center;
  `,
  ssncakser1: css`
    border: 1px solid #e1e4e8;
    padding: 16px 56px 18px 56px;

    @media (max-width: 1024px) {
      padding: 16px 5px 18px 5px;
    }
  `,
  ssncakser: css`
    margin: 0px;
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
  `,
  p6: css`
    width: 100%;
    max-width: 332px;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #c6cbd1;
    padding: 5px;
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 17px 0px;
  `,
};