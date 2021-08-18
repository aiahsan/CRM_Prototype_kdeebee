import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import ViewBox from './viewBox';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
import ViewBoxRadio from './viewBoxRadio';
import InvestorprofileBar from './investorProfile/investorprofileBar';
export default () => {
  const [activeeventkey, setactiveeventkey] = React.useState([
    { id: 0, isactive: true },
    { id: 1, isactive: false },
    { id: 2, isactive: false },
    { id: 3, isactive: false },
  ]);
  const handleClicktoggle = (id: number) => {
    const obj = activeeventkey.find((x) => x.id == id);
    if (obj) {
      obj.isactive = !obj.isactive;
    }

    setactiveeventkey([...activeeventkey]);
  };

  const notifiactions = [
    'New Investment Opportunities',
    'Documents Uploaded',
    'IANUA Updates',
  ];
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
            <p>INVESTOR PROFILE</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <div className='mb-5'>
            <InvestorprofileBar
              title='Investment type'
              items={['Equity', 'Debt', 'Fund']}
            />
            <InvestorprofileBar
              title='Participation preference'
              items={['Can act as lead investor', 'Can follow other investors']}
            />
            <InvestorprofileBar
              title='Investment style'
              items={['Capital gain', 'Income', 'Wealth preservation']}
            />
            <InvestorprofileBar
              title='ESG/Impact consideration'
              items={['Very important', 'Good to have', 'Indifferent']}
            />
            <InvestorprofileBar
              title='Currencies'
              items={['GBP', 'EUR', 'USD', 'CHF']}
            />
          </div>
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
            <p>INVESTMENT PREFERENCES</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <>
            <ViewBox
              title='Account Management'
              values={[
                {
                  key1: 'Introducer',
                  value1: 'Sarah Boyes',
                  key2: 'Relationship Manager',
                  value2: 'Joern Czech',
                  value1Active: true,
                  value2Active: true,
                },
                {
                  key1: 'Status',
                  value1: 'Active',
                  key2: 'Expiration Date',
                  value2: 'N/A',
                  value1Active: false,
                  value2Active: false,
                },
                {
                  key1: 'Invite',
                  value1: 'Send Invitation Link',
                  key2: 'Password Reset',
                  value2: 'Send Password Reset Link',
                  value1Active: true,
                  value2Active: true,
                },
                {
                  key1: 'Is archived',
                  value1: 'No',
                  key2: 'Membership Type',
                  value2: 'Prime',
                  value1Active: false,
                  value2Active: false,
                },
              ]}
            />

            <ViewBoxRadio
              title='Account Capacity'
              values={[
                {
                  key1: 'BD Partner',
                  key2: 'Introducer',
                },
                {
                  key1: 'Corporate Member',
                  key2: 'Investment Opportunity Provider',
                },
                {
                  key1: 'IANUA Management',
                  key2: 'Investor',
                },
                {
                  key1: 'IANUA Operations',
                  key2: 'Service Provider',
                },
                {
                  key1: 'IANUA Team',
                  key2: 'IANUA Shareholder',
                },
              ]}
              type={0}
            />
            <ViewBoxRadio
              title='Investor Industry'
              values={[
                {
                  key1: 'Asset Manager',
                  key2: 'Investment Advisor',
                },
                {
                  key1: 'Bank',
                  key2: 'Multi Family Office',
                },
                {
                  key1: 'Broker',
                  key2: 'Other',
                },
                {
                  key1: 'Corporate',
                  key2: 'Public Body',
                },
                {
                  key1: 'HMWI',
                  key2: 'Single Family Office',
                },
                {
                  key1: 'Individual',
                  key2: 'Sovereign Wealth Fund',
                },
              ]}
              type={1}
            />

            <ViewBoxRadio
              title='Account Milestones'
              values={[
                {
                  key1: 'Email Confirmed',
                  key2: 'NDA',
                },
                {
                  key1: 'KC Invite Sent',
                  key2: 'KYC',
                },
                {
                  key1: 'KC Access Activated',
                  key2: 'Contract',
                },
                {
                  key1: 'IANUA Operations',
                  key2: 'Service Provider',
                },
                {
                  key1: 'Onboarding Interview',
                  key2: 'Transacted',
                },
              ]}
              type={0}
            />
          </>
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
            <p>ASSET CLASSES</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='2'>
          <>
            <ViewBox
              title='NDA'
              values={[
                {
                  key1: 'NDA in place',
                  value1: 'Yes',
                  key2: 'NDA Popup Message Shown',
                  value2: 'No',
                  value1Active: false,
                  value2Active: false,
                },
                {
                  key1: 'NDA Link',
                  value1: 'Open NDA',
                  key2: 'Download NDA',
                  value2: 'Link',
                  value1Active: true,
                  value2Active: true,
                },
              ]}
            />

            <ViewBox
              title='KYC'
              values={[
                {
                  key1: 'KYC Completed',
                  value1: 'Yes',
                  key2: 'Download KYC File',
                  value2: 'Link',
                  value1Active: true,
                  value2Active: true,
                },
                {
                  key1: 'KYC Link',
                  value1: 'Open KYC',
                  key2: '',
                  value2: '',
                  value1Active: true,
                  value2Active: false,
                },
              ]}
            />

            <ViewBox
              title='Contract'
              values={[
                {
                  key1: 'Contract Done',
                  value1: 'Yes',
                  key2: 'Contract Questionnaire',
                  value2: 'Link',
                  value1Active: false,
                  value2Active: true,
                },
                {
                  key1: 'Contract Link',
                  value1: 'Open Contract',
                  key2: 'MiFID Classification',
                  value2: 'Company - Eligible Counterparty',
                  value1Active: true,
                  value2Active: false,
                },
                {
                  key1: 'Download Contract',
                  value1: 'Link',
                  key2: 'Membership Type',
                  value2: 'Prime',
                  value1Active: true,
                  value2Active: false,
                },
              ]}
            />
          </>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(3)}
            variant='link'
            eventKey='3'
          >
            <Icon
              icon={activeeventkey[3].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>SECTORS</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='3'>
          <>
            <div className={Style.p1a}>
              <div className={Style.p11a}>
                <div className={Style.p12a}>
                  <p className={Style.p3a}>Notifications</p>
                  <div className={Style.p28a}>
                    <Icon icon='pencil' />
                  </div>
                </div>

                <div className={Style.p13a}>
                  <div className={`d-flex ${Style.p17a}`}>
                    <div className={Style.p16a}>
                      <p className={Style.p14a}></p>
                    </div>
                    <div className={Style.p15a}>
                      <p className={Style.p14a}>Email</p>
                      <p className={Style.p14a}>SMS</p>
                      <p className={Style.p14a}>WhatsApp</p>
                    </div>
                  </div>
                  {notifiactions.map((x) => (
                    <div className={`d-flex ${Style.p17a}`}>
                      <div className={Style.p16a}>
                        <p className={Style.p14a}>{x}</p>
                      </div>
                      <div className={Style.p15a}>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p18a} type='checkbox' />
                        </p>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p19a} type='checkbox' />
                        </p>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p20a} type='checkbox' />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(3)}
            variant='link'
            eventKey='4'
          >
            <Icon
              icon={activeeventkey[3].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>SECTORS</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='4'>
          <>
            <div className={Style.p1a}>
              <div className={Style.p11a}>
                <div className={Style.p12a}>
                  <p className={Style.p3a}>GEOGRAPHIES</p>
                  <div className={Style.p28a}>
                    <Icon icon='pencil' />
                  </div>
                </div>

                <div className={Style.p13a}>
                  <div className={`d-flex ${Style.p17a}`}>
                    <div className={Style.p16a}>
                      <p className={Style.p14a}></p>
                    </div>
                    <div className={Style.p15a}>
                      <p className={Style.p14a}>Email</p>
                      <p className={Style.p14a}>SMS</p>
                      <p className={Style.p14a}>WhatsApp</p>
                    </div>
                  </div>
                  {notifiactions.map((x) => (
                    <div className={`d-flex ${Style.p17a}`}>
                      <div className={Style.p16a}>
                        <p className={Style.p14a}>{x}</p>
                      </div>
                      <div className={Style.p15a}>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p18a} type='checkbox' />
                        </p>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p19a} type='checkbox' />
                        </p>
                        <p className={Style.p14a}>
                          {' '}
                          <input className={Style.p20a} type='checkbox' />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

const Style = {
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
  `,
  c3: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    margin: 0px;
    margin-right: 7.45px;
    margin-bottom: 16px;
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

  p1a: css`
    display: flex;
    padding: 16px 16px 0px 16px;
    margin-bottom: 50px;
  `,

  p27a: css`
    display: flex;
    justify-content: center;
    margin-top: 25px;
  `,
  p28a: css`
    margin-left: 10px;
  `,

  p3a: css`
    font-family: Lucida Grande;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.06em;
    color: #586069;
    margin: 0px;
  `,

  p11a: css`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 23px;

    @media (max-width: 639px) {
      margin: 23px 0px;
      margin-bottom: 0px;
    }
  `,
  p12a: css`
    display: flex;
  `,
  p13a: css`
    margin-top: 11px;

    @media (max-width: 1440px) {
      max-width: 900px;
      overflow: auto;
    }
    @media (max-width: 820px) {
      max-width: 650px;
    }
    @media (max-width: 639px) {
      max-width: 525px;
    }

    @media (max-width: 556px) {
      max-width: 425pxpx;
    }
    @media (max-width: 556px) {
      max-width: 100%;
    }
  `,

  p14a: css`
    margin: 0px;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.06em;
  `,
  p15a: css`
    width: 224px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  p16a: css`
    width: 386px;
  `,
  p17a: css`
    padding: 4px 0px;
    border-bottom: 1px solid #e1e4e8;
  `,
  p18a: css`
    position: relative;
    left: 7px;
  `,
  p19a: css`
    position: relative;
    right: 10px;
  `,
  p20a: css`
    position: relative;
    right: 20px;
  `,
};
