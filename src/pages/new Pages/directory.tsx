import Breadcrumb from '../../components/crumbread';
import TopBar from '../../components/topBar';
import Tabs from '../../components/tabs';
import { css } from '@emotion/css';
import Dropdown from '../../components/dropdown';
import Icon from '../../icons/icons';
import avt from '../../images/pc1.png';
import Pagination from '../../components/pagination';
import ViewBox from '../../components/newComponents/directory/ViewBox';
import { theme } from '../../styles/theme';

export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb list={['Opportunities', 'Directory']} activeIndex={1} />
      <Tabs activeTab={1} />
      <div className={Style.ps1}>
        <div className={Style.ps2}>
          <div className={Style.ps3}>
            <div className={Style.ps4}>
              <Icon icon='search' />
              <input className={Style.ps5} placeholder='search' />
            </div>
          </div>
          <div>
            <button className={Style.ps6}>
              <Icon icon='plus1' /> Submit New
            </button>
          </div>
        </div>

        <div className={Style.ps7}>
          <div className={Style.ps8}>
            <div className={Style.ps9}>
              <div className={Style.ps10}>
                <Icon icon='menu' />
                <p className={Style.ps11}>41 Opportunities</p>
              </div>
              <div className={Style.ps12}>
                <Dropdown
                  heading='Filter by currency'
                  items={[
                    { id: 0, title: 'Pound Sterling' },
                    { id: 1, title: 'Euro' },
                    { id: 2, title: 'US Dollar' },
                    { id: 3, title: 'Swiss Franc' },
                    { id: 4, title: 'Canadian Dollar' },
                    { id: 5, title: 'Norwegian Krone' },
                    { id: 6, title: `Swedish Krona` },
                    { id: 7, title: 'Danish Krone' },
                    { id: 8, title: 'Australian Dollar' },
                    { id: 9, title: 'Yuan Renminbi' },
                  ]}
                  hasFilter={true}
                  placeholder='Filter currencies'
                  title='Filter currencies'
                />
                <Dropdown title='Sector' />
                <Dropdown title='Target IRR' />
                <Dropdown title='Geography' />
                <Dropdown
                  title='Sort'
                  heading='Sort by'
                  items={[
                    { id: 0, title: 'Newest', checked: true },
                    { id: 1, title: 'Oldest', checked: false },
                    {
                      id: 2,
                      title: 'Min. Exp. IRR: Low to High',
                      checked: false,
                    },
                    {
                      id: 3,
                      title: 'Min. Exp. IRR: High to Low ',
                      checked: false,
                    },
                  ]}
                />
              </div>
            </div>

            <ViewBox
              image={avt}
              title='Project Fluid'
              subtitle='Equity Investment in a Biotech Start-Up'
              type='Equity Investment in a Biotech Start-Up'
              sector='Healthcare & Pharma'
              expectedIRR='> 20%'
              rargetRaise='USD 2.8m'
              assetGeography='United States'
              indicationOfInterestby='30 Apr 2021'
              investmentHorizon='4 Years'
              introducedby='Strategic Partner'
            />
            <ViewBox
              image={avt}
              title='Project Fluid'
              subtitle='Equity Investment in a Biotech Start-Up'
              type='Equity Investment in a Biotech Start-Up'
              sector='Healthcare & Pharma'
              expectedIRR='> 20%'
              rargetRaise='USD 2.8m'
              assetGeography='United States'
              indicationOfInterestby='30 Apr 2021'
              investmentHorizon='4 Years'
              introducedby='Strategic Partner'
            />
            <ViewBox
              image={avt}
              title='Project Fluid'
              subtitle='Equity Investment in a Biotech Start-Up'
              type='Equity Investment in a Biotech Start-Up'
              sector='Healthcare & Pharma'
              expectedIRR='> 20%'
              rargetRaise='USD 2.8m'
              assetGeography='United States'
              indicationOfInterestby='30 Apr 2021'
              investmentHorizon='4 Years'
              introducedby='Strategic Partner'
            />
            <ViewBox
              image={avt}
              title='Project Fluid'
              subtitle='Equity Investment in a Biotech Start-Up'
              type='Equity Investment in a Biotech Start-Up'
              sector='Healthcare & Pharma'
              expectedIRR='> 20%'
              rargetRaise='USD 2.8m'
              assetGeography='United States'
              indicationOfInterestby='30 Apr 2021'
              investmentHorizon='4 Years'
              introducedby='Strategic Partner'
            />
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
    max-width: 509px;
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
    min-width: 981px;
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
    max-width: 981px;
    width: 100%;
    margin: auto;
    margin-bottom: -1px;
    padding-top: 24px;
  `,
};
