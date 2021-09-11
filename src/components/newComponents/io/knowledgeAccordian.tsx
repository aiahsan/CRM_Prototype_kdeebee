import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import { theme } from '../../../styles/theme';
export default function RCom() {
  const [activeeventkey, setactiveeventkey] = React.useState([
    { id: 0, isactive: true },
    { id: 1, isactive: false },
    { id: 2, isactive: false },
  ]);
  const handleClicktoggle = (id: number) => {
    const obj = activeeventkey.find((x) => x.id == id);
    if (obj) {
      obj.isactive = !obj.isactive;
    }
    const filted = activeeventkey.filter((x) => x.id !== id);
    filted.forEach((x) => {
      x.isactive = false;
    });
    setactiveeventkey([...activeeventkey]);
  };

  return (
    <Accordion className='jasdnfsdj22-23' defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(0)}
            variant='link'
            eventKey='0'
          >
            <Icon
              icon={activeeventkey[0].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>IANUA INFORMATION</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <>
            <div className={Style.cs1}>
              <p className={Style.cs2}>Investment Opportunity Report</p>
              <button className={Style.cs3}>
                <div className='mr-1'>
                  <Icon icon='download' />
                </div>
                Download
              </button>
            </div>
            <div className={`mt-0 ${Style.cs1} mb-4`}>
              <p className={Style.cs2}>IANUA Q&A</p>
              <button className={Style.cs3}>
                <div className='mr-1'>
                  <Icon icon='download' />
                </div>
                Download
              </button>
            </div>
          </>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(1)}
            variant='link'
            eventKey='1'
          >
            <Icon
              icon={activeeventkey[1].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>THIRD PARTY INFORMATION</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <></>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(2)}
            variant='link'
            eventKey='2'
          >
            <Icon
              icon={activeeventkey[2].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>TRANSACTION DOCUMENTS</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='2'>
          <></>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

const Style = {
  cs1: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.colorWhite3};
    margin: 25px 9% 0px 9%;
    padding: 0px 27px;
    height: 52px;
  `,
  cs2: css`
    font-size: ${theme.fontSize14};
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: ${theme.colorGrey1};
    margin: 0px;
  `,
  cs3: css`
    background: ${theme.colorWhite};
    border: 1px solid #dce0e4;
    box-sizing: border-box;
    border-radius: 6px;
    font-size: ${theme.fontSize12};
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;
    color: ${theme.colorGrey1};
    padding: 6px;
  `,
};
