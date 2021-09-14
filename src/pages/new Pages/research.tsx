import Breadcrumb from '../../components/crumbread';
import TopBar from '../../components/topBar';
import Tabs from '../../components/newComponents/research/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../components/dropdown';
import Icon from '../../icons/icons';
import avt from '../../images/pc1.png';
import Pagination from '../../components/pagination';
import ViewBox from '../../components/newComponents/research/ViewBox';
import { theme } from '../../styles/theme';

export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Opportunities', 'Directory']} activeIndex={1} />
      <Tabs activeTab={0} />
      <div className={Style.ps1}>
        <div className={Style.ps2}>
          <div className={Style.ps3}>
            <div className={Style.ps4}>
              <Icon icon='search' />
              <input className={Style.ps5} placeholder='search' />
            </div>
          </div>
        </div>

        <div className={Style.ps7}>
          <div className={Style.ps8}>
            <div className={Style.ps9}>
              <div className={Style.ps10}>
                <Icon icon='menu' />
                <p className={Style.ps11}>3 Reports</p>
              </div>
              <div className={Style.ps12}>
                <Dropdown title='Sector' />
                <Dropdown title='Type' />
                <Dropdown title='Topic' />
                <Dropdown title='Sort' />
              </div>
            </div>

            <ViewBox
              image={avt}
              title='Overview of the Personal Protective Equipment (PPE) Market'
            />
            <ViewBox
              image={avt}
              title='Equity Investment in a Biotech Start-Up'
            />
            <ViewBox image={avt} title='Introduction to the Cannabis Market' />
          </div>
        </div>
      </div>
      <div className={Style.ps13}>
        <div className={Style.ps14}>
          <Pagination />
        </div>
      </div>
    </>
  );
}

const Style = {
  ps13: css`
    max-width: 728px;
    margin: auto;
    margin-top: 32px;
  `,
  ps14: css`
    display: flex;
    justify-content: center;
    margin-left: 3%;
  `,

  ps12: css`
    max-width: 259px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      margin-top: 10px;
    }
  `,
  ps11: css`
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
  ps10: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  ps9: css`
    display: flex;
    justify-content: space-between;
    padding: 14px 5px 14px 19.15px;
    border-bottom: 1px solid ${theme.colorWhite3};
    background: #f6f8fa;
    @media (max-width: 768px) {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  `,
  ps8: css`
    border: 1px solid ${theme.colorWhite3};
    margin-top: 24px;
    min-width: 980px;
    border-radius: 3px;
    @media (max-width: 768px) {
      min-width: 98%;
      margin: 0px 1%;
    }
  `,
  ps7: css`
    margin-top: 24px;
  `,

  ps6: css`
    height: 34px;
    right: 0px;
    background: ${theme.colorGrey};
    border: 1px solid ${theme.colorGrey};
    border-radius: 2px;
    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize14};
    line-height: 16px;
    align-items: center;
    letter-spacing: -0.1em;
    color: ${theme.colorWhite};

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  `,
  ps5: css`
    background-color: transparent;
    border: none;
    margin-left: 10px;
  `,
  ps4: css`
    padding-left: 10px;
  `,

  ps3: css`
    background: #fafbfc;

    border: 1px solid ${theme.colorWhite3};
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 560px;
    height: 34px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  ps2: css`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `,
  ps1: css`
    max-width: 980px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    padding-top: 24px;
  `,
};
