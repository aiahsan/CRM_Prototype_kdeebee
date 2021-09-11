import Breadcrumb from '../../../components/crumbread';
import TopBar from '../../../components/topBar';
import Tab from '../../../components/newComponents/profileComponents/tab';
import { css } from '@emotion/css';
import ProfileBar from '../../../components/newComponents/profileComponents/profileBar';
import Icon from '../../../icons/icons';
import Accordian from '../../../components/newComponents/profileComponents/accordianPreferences';
import { theme } from '../../../styles/theme';

const Profile = () => {
  return (
    <>
      <TopBar />
      <Breadcrumb
        list={['Contacts', 'People', 'Lucy Granger']}
        activeIndex={2}
      />
      <Tab activeTab={2} />
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
                    <Icon icon='dollar12' />
                    <p className={Style.g6}>Investment Preferences</p>
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
};

const Style = {
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
    border: 1px solid ${theme.colorWhite3};
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
    border-bottom: 1px solid ${theme.colorWhite3};

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

    font-family: ${theme.fontFamilyMain}
    font-style: normal;
    font-weight: bold;
    font-size: ${theme.fontSize16};
    line-height: 19px;
    letter-spacing: -0.06em;
    margin-left: 7.5px;
    color: ${theme.colorGrey1};
  `,
};
export default Profile;
