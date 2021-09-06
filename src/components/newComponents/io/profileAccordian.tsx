import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import ViewBox from '../profileComponents/viewBox';
import { css } from '@emotion/css';
import Icon from '../../../icons/icons';
export default () => {
  const [activeeventkey, setactiveeventkey] = React.useState([
    { id: 0, isactive: true },
    { id: 1, isactive: false },
    { id: 2, isactive: false },
    { id: 3, isactive: false },
    { id: 4, isactive: false },
  ]);
  const handleClicktoggle = (id: number) => {
    const obj = activeeventkey.find((x) => x.id == id);
    if (obj) {
      obj.isactive = !obj.isactive;
    }

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
            <p>PROFILE</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <>
            <ViewBox
              title='Overview'
              values={[
                {
                  key1: 'Type',
                  value1: 'Equity',
                  key2: 'Target Raise',
                  value2: 'USD 2.8m',
                  value1Active: false,
                  value2Active: false,
                },

                {
                  key1: 'Sector',
                  value1: 'Healthcare & Pharma',
                  key2: 'Expected IRR',
                  value2: '> 20%',
                  value1Active: false,
                  value2Active: false,
                },

                {
                  key1: 'Geography',
                  value1: 'United States',
                  key2: 'Investment Horizon',
                  value2: '4 Years',
                  value1Active: false,
                  value2Active: false,
                },
                {
                  key1: 'Introduced by',
                  value1: 'Strategic Partner',
                  key2: 'Indication of Interest by',
                  value2: '30 Apr 2021',
                  value1Active: false,
                  value2Active: false,
                },
              ]}
            />

            <div className={Style.c1}>
              <div className={Style.c2}>
                <p className={Style.c3}>Summary</p>
                <Icon icon='pencil' />
              </div>
              <p
                className={css`
                  ${Style.c4}
                `}
              >
                IANUA Members are invited to participate in a private equity
                investment in a US-based MedTech company. This company has
                developed new testing technology that could revolutionise
                medical diagnostics by using any human biofluids to detect and
                analyse key metabolic and systemic biomarkers, such as immune
                health deficiencies or anti-ageing, as well as disease markers.
              </p>
              <p
                className={css`
                  ${Style.c4}
                `}
              >
                The proprietary nano-sensors integrated into each test kit have
                exponentially greater sensitivity, and therefore accuracy, than
                traditional laboratory analysers, which are only available to
                medical professionals and administered in relatively small
                volumes due to global laboratory capacity constraints and costs.
              </p>
              <p
                className={css`
                  ${Style.c4}
                `}
              >
                As part of the R&D effort to build up its medical diagnostics
                platform, the management team worked with an external partner
                who owns a sensor component representing roughly 10% of the
                equity stake of the company. The capital will be used to
                purchase the IP and assets of that company, including the sensor
                component. The addition of this business will enable the
                Investment Opportunity Provider to create a fully integrated
                testing platform that is superior to most of the products
                available at point-of-care and produce them at a reasonable
                price. Therefore, the company seeks USD 750,000 (with a USD 2
                million follow-on) to consolidate all IP and drive expansion
                with global, blue-chip, bio-health corporations.
              </p>
              <p
                className={css`
                  ${Style.c4}
                `}
              >
                The long-term expected success of the business model is based on
                the following USPs:
                <ul className='mt-2'>
                  <li>
                    {' '}
                    Disruption of the medical diagnostics sector with the
                    introduction of considerably lower cost, high-performance
                    health devices,
                  </li>
                  <li>
                    {' '}
                    Substantially higher accuracy than currently available and
                    results in under 5 minutes, and
                  </li>
                  <li>
                    {' '}
                    The opportunity to white label the test kit and scale with
                    globally branded pharmaceutical companies through national
                    retail markets.
                  </li>
                </ul>
              </p>
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
            <p>SUMMARY</p>
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
            <p>MARKET</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='2'>
          <></>
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
            <p>TEAM</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='3'>
          <></>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            onClick={() => handleClicktoggle(4)}
            variant='link'
            eventKey='4'
          >
            <Icon
              icon={activeeventkey[4].isactive == true ? 'cross' : 'plus2'}
            />{' '}
            <p>UPDATES</p>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='4'>
          <></>
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
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    text-align: justify;
    letter-spacing: -0.06em;
    max-width: 616px;
    color: #586069;
  `,
};
