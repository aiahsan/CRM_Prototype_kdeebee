import React from 'react';
import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import LeftBar from '../../../components/newComponents/io/leftBar';
import Activity from '../../../components/newComponents/io/activityChart';
import Dropdown from '../../../components/dropdown';
import UserImg from '../../../images/User.png';
import Pagination from '../../../components/pagination';
import SideMenu from '../../../components/sidemenu';
import ReactQuill from 'react-quill';
import { useHistory } from 'react-router-dom';

import 'react-quill/dist/quill.snow.css';

export default () => {
  const history = useHistory();

  const [convertedText, setConvertedText] = React.useState(
    'Some default content Some default content Some default content U+000A'
  );
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'list',
    'bullet',
    'align',
    'color',
    'background',
  ];
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Directory', 'Project Fluid']}
        activeIndex={2}
      />
      <Tabs activeTab={3} />

      <div>
        <div className={Style.g2}>
          <p className={Style.g3}>
            {' '}
            <span
              className={css`
                color: #1269d3;
              `}
            >
              {' '}
              Project Storebox
            </span>{' '}
            / Send Message
          </p>
          <button className={Style.g4}>
            <div className={Style.g5}>
              <Icon icon='puzzle' />
            </div>{' '}
            Edit SMART Match
          </button>
        </div>
      </div>
      <div className={Style.g1}>
        <div className={Style.sp3}>
          <SideMenu
            onClick={() => history.push('/smartwatch/investor')}
            isActive={false}
            islast={false}
            title='By Investor'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/parameter')}
            isActive={false}
            islast={false}
            title='By Parameter'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/insight')}
            isActive={true}
            islast={false}
            title='Insights'
          />
          <SideMenu
            onClick={() => history.push('/smartwatch/feedback')}
            isActive={false}
            islast={true}
            title='Feedback'
          />
        </div>
        <div>
          <div className={Style.g13}>
            <div
              className={css`
                margin-top: 25px;
                margin-left: 29px;
                width: 100%;
                min-width: 727px;
              `}
            >
              <h2 className={Style.cst1}>Recipients</h2>
              <p className={Style.cst2}>4 Relationship Managers</p>
              <h2 className={Style.cst1}>Email subject</h2>
              <input
                value='IANUA: You Have Been SMART Matched to a new Investment Opportunity'
                className={Style.cst3}
              />
              <h2 className={Style.cst1}>Email message</h2>
              <ReactQuill
                theme='snow'
                modules={modules}
                formats={formats}
                value={convertedText}
                onChange={setConvertedText}
                style={{ minHeight: '525px' }}
              />
              <h2 className={Style.cst1}>Relationship managers</h2>
              <div className={Style.cst5}>
                <p className={Style.cst4}>
                  Attention: For each Relationship Manager, a list with their
                  Investors that haven’t answered yet will be inserted in the
                  email below the above email message.
                </p>
              </div>
              <div className={Style.p14}>
                <button className={Style.p15}>Cancel</button>
                <button className={Style.p16}>
                  <div className='mr-1'>
                    <Icon icon='mail' />
                  </div>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Style = {
  sp3: css`
    margin-top: 25px;
  `,
  g13: css`
    max-width: 978.98px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    display: flex;
  `,
  g14: css`
    margin-top: 24px;
    margin-left: 29.04px;
    @media (max-width: 425px) {
      margin-left: 0px;
    }
  `,
  g15: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 728px;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  g16: css`
    background: #fafbfc;

    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 728px;
    width: 100%;

    @media (max-width: 320px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,

  g17: css`
    padding-left: 10px;
  `,

  g18: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  g19: css`
    border: 1px solid #e1e4e8;
    margin-top: 24px;
    min-width: 728px;
    border-radius: 3px;

    @media (max-width: 1024px) {
      min-width: 100%;
    }
  `,
  g20: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid #e1e4e8;
    background: #f6f8fa;
    flex-wrap: wrap;
  `,
  g21: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  g22: css`
    margin-right: 7.5px;
  `,
  g23: css`
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
  g24: css`
    max-width: 225px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  g25: css`
    border-bottom: 1px solid #e1e4e8;
  `,
  g1: css`
    max-width: 979px;
    margin: auto;

    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  `,

  g26: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  g2: css`
    max-width: 979px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;
    margin: auto;
    margin-top: 23px;
  `,
  g3: css`
    font-size: 24px;
    line-height: 126.02%;
    letter-spacing: -0.05em;
    color: #000000;
    padding-bottom: 12px;
    margin: 0px;
  `,
  g4: css`
    border: 1px solid #e1e4e8;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    background: white;
    align-items: center;
    letter-spacing: -0.07em;
    color: #586069;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    padding: 2px 13px;
  `,

  g5: css`
    margin-top: -4px;
    margin-right: 5px;
  `,
  cst2: css`
    font-weight: normal;
    font-size: 12px;
    line-height: 126.02%;

    letter-spacing: -0.05em;

    color: #1269d3;
    margin-bottom: 22px;
  `,
  cst1: css`
    font-weight: bold;
    font-size: 14px;
    line-height: 126.02%;

    letter-spacing: -0.05em;

    color: #000000;
    margin-bottom: 5px;
  `,
  cst3: css`
    background: linear-gradient(180deg, #fafbfc 0%, #f9fafb 100%);
    border: 1px solid #e1e4e7;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 27px;
    height: 20px;
    width: 560px;
    padding-left: 8px;
  `,
  cst5: css`
  display: flex;
  align-items: center;
  padding-bottom: 18px;
  margin-bottom: 23px;
  border-bottom: 1px solid #e1e4e8;
}
  `,
  cst4: css`
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    margin: 0px;
    color: #000000;
    max-width: 728px;
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
};
