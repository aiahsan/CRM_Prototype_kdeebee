import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Icon from '../../../icons/icons';
import { css } from '@emotion/css';

export default () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <div className={Style.p1}>
        <p className={Style.p2}>Add Call Note</p>
        <div className={Style.p3}>
          <div className={Style.p17}>
            <div className={css``}>
              <p className={Style.p5}>
                Contact <span className={Style.p4}>*</span>
              </p>
              <select className={Style.p6}>
                <option>Select one or more contacts</option>
              </select>
            </div>
            <div>
              <p
                className={css`
                  ${Style.p5}
                  ${Style.p9}
                `}
              >
                Investment Opportunity
              </p>
              <select className={Style.p6}>
                <option>Select one or more investment opportunities</option>
              </select>
            </div>
            <div>
              <p
                className={css`
                  ${Style.p5}
                  ${Style.p9}
                `}
              >
                Call Note <span className={Style.p4}>*</span>
              </p>
              <textarea
                className={css`
                  ${Style.p6}
                  ${Style.p10}
                `}
                placeholder='What are the next steps?'
                rows={10}
              ></textarea>
            </div>
            <div>
              <p
                className={css`
                  ${Style.p5}
                  ${Style.p9}
                `}
              >
                Follow-up
              </p>
              <div className='d-flex'>
                <input type='checkbox' className='mt-2 mr-2' />
                <div className='w-100'>
                  <div className='d-flex align-items-center w-100'>
                    <p className={Style.p8}>Set follow-up task</p>
                    <div
                      className={css`
                        display: flex;
                        align-items: center;
                        @media (max-width: 534px) {
                          flex-direction: column;
                        }
                      `}
                    >
                      <input
                        placeholder='Enter date'
                        className={`${css`
                          ${Style.p6}
                          ${Style.p10}
                        ${Style.p20}
                        `}`}
                      />
                      <div>
                        <p className={Style.p21}>
                          30 days from today{' '}
                          <span className={Style.p22}>|</span>{' '}
                          <Icon icon='calender' />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      className={css`
                        ${Style.p6}
                        ${Style.p10}
                        ${Style.pa19}
                      `}
                      placeholder='Enter the call note narrative'
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              @media (max-width: 534px) {
                margin: 20px 10px;
              }
            `}
          >
            <div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className={`${Style.p5} m-0`}>Date</p>
                <p className='m-0'>
                  <Icon icon='stg' />
                </p>
              </div>
              <div className={Style.p11}>
                <p className={Style.p12}>
                  Today -<span className={Style.p13}>set other date</span>
                </p>
              </div>
            </div>
            <div>
              <div
                className={`d-flex align-items-center justify-content-between ${Style.p19}`}
              >
                <p className={`${Style.p5} m-0 `}>Location</p>
                <p className='m-0'>
                  <Icon icon='stg' />
                </p>
              </div>
              <div className={Style.p11}>
                <p className={Style.p12}>
                  Phone -{' '}
                  <span className={Style.p13}>set physical location</span>
                </p>
              </div>
            </div>{' '}
          </div>
        </div>
        <div className={Style.p14}>
          <button className={Style.p15}>Cancel</button>
          <button className={Style.p16}>
            <div>
              <Icon icon='callnowbtn' />
            </div>
            Add Call Note
          </button>
        </div>
      </div>
    </>
  );
};

const Style = {
  p1: css`
          max-width: 970px;
          margin: auto;
          margin-top: 25px;
      }
      `,
  p2: css`
    font-weight: normal;
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
    padding-bottom: 12px;
    border-bottom: 1px solid #e1e4e8;
  `,
  p3: css`
    display: flex;
    padding-bottom: 25px;
    border-bottom: 1px solid #e1e4e8;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  p4: css`
    color: red;
  `,
  p5: css`
    font-weight: bold;
    font-size: 14px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
  `,
  p6: css`
    width: 100%;
    max-width: 550px;
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
  `,
  p7: css`
    display: flex;
    align-items: center;
  `,

  p8: css`
    font-size: 14px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
    margin: 0px;
    margin-left: 11px;
  `,
  p9: css`
    margin-top: 30px;
  `,
  p10: css`
    &::placeholder {
      color: #c6cbd1;
    }
  `,
  p11: css`
    border-bottom: 1px solid #e7ebf0;
    min-width: 224px;
  `,
  p12: css`
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #596068;
    padding-top: 10px;
    padding-bottom: 17px;
    margin-bottom: 0px;
  `,
  p13: css`
    color: #1269d3;
  `,
  p14: css`
    margin-top: 23px;
    display: flex;
    justify-content: flex-end;
  `,
  p15: css`
    background: linear-gradient(180deg, #f9fafb 0%, #eff3f6 100%);
    border: 1px solid #c4c8cc;
    box-sizing: border-box;
    border-radius: 2px;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -1px;
    font-weight: bold;
    color: #444d56;
    margin-right: 9px;
    padding: 8px 13px;
  `,
  p16: css`
    background: #b6af9d;
    border: 1px solid #b6af9d;
    box-sizing: border-box;
    border-radius: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.1em;
    color: #ffffff;
    padding: 8px 13px;
  `,
  p17: css`
    width: 100%;
    max-width: 550px;
    margin-right: 28px;
    margin-left: 75px;

    @media (max-width: 768px) {
      max-width: initial;
      width: initial;
      margin-right: 10px;
      margin-left: 10px;
    }
  `,
  p18: css`
    margin-left: 75px;
  `,
  p19: css`
    margin-top: 15px;
  `,
  p20: css`
    max-width: 168px;
    margin-left: 8px;
  `,
  p21: css`
    margin-left: 10px;
    margin-bottom: 0px;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.05em;
    color: #1269d3;
  `,
  p22: css`
    margin: 0px 5px;
  `,
  pa19: css`
    margin-top: 25px;
  `,
};
