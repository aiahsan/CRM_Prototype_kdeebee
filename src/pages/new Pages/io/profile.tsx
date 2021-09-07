import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tabs from '../../../components/newComponents/io/tabs';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import LeftBar from '../../../components/newComponents/io/leftBar';
import Accordian from '../../../components/newComponents/io/profileAccordian';

export default function RCom() {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Opportunities', 'Directory', 'Project Fluid']}
        activeIndex={2}
      />
      <Tabs activeTab={1} />

      <div className={Style.g7}>
        <LeftBar />
        <div>
          <div className={Style.g1}>
            <div className={Style.g2}>
              <div className={Style.g3}>
                <div className={Style.g4}>
                  <div className={Style.g5}>
                    <Icon icon='menu' />
                    <p className={Style.g6}>Investment profile</p>
                  </div>
                </div>

                <Accordian />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Style = {
  g7: css`
    max-width: 1119px;
    margin: auto;
    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
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
  g2: css``,
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
};
