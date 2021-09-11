import { Dropdown } from 'react-bootstrap';
import Icon from '../icons/icons';
import { css } from '@emotion/css';
import { theme } from '../styles/theme';
interface Props {
  title: String;
  heading?: String;
  items?: {
    id: number;
    title: string;
    checked?: Boolean;
  }[];
  hasFilter?: Boolean;
  placeholder?: string;
}
export default function RCom(props: Props) {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          className={css`
            ${Style.GH1}
            ${Style.GH2}
            &:hover {
              ${Style.GH1}
            }
          `}
        >
          <p className={Style.GH3}>{props.title}</p>
          <Icon icon='chevblackdown' />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.heading ? (
            <Dropdown.Item className='no-hover'>
              {' '}
              <div className='flex-between'>
                <p className='fwb'>{props.heading}</p>
                <Icon icon='drpcan' />
              </div>
            </Dropdown.Item>
          ) : null}
          {props.hasFilter === true ? (
            <>
              <div className='dropdown-item1'>
                <input type='text' placeholder={props.placeholder} />
              </div>
            </>
          ) : null}
          <div className='dpd-child'>
            {props.items
              ? props.items.map((x, i) => (
                  <Dropdown.Item
                    href='#/action-1'
                    key={i}
                    style={{
                      borderBottom:
                        props.items && props.items.length <= i + 1
                          ? '0px '
                          : `1px solid ${theme.colorWhite3}`,
                    }}
                  >
                    {x.checked != undefined ? (
                      x.checked == true ? (
                        <Icon icon='checksort' />
                      ) : (
                        <div className='dpd-check-tick'></div>
                      )
                    ) : (
                      <></>
                    )}{' '}
                    <label className='m-0'>{x.title}</label>
                  </Dropdown.Item>
                ))
              : null}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

const Style = {
  GH1: css`
    background-color: transparent !important;
    border: transparent !important;
  `,
  GH2: css`
    font-family: ${theme.fontFamilyMain}
    font-style: normal !important;
    font-weight: bold !important;
    font-size: ${theme.fontSize15} !important;
    line-height: 18px !important;

    display: flex !important;
    align-items: center !important;
    letter-spacing: -1px !important;

    color: ${theme.colorBlue} !important;
    padding: 0px !important;
    &::after {
      border: none !important;
    }
  `,
  GH3: css`
    margin: 0px;
    margin-right: 3.5px;
  `,
};
