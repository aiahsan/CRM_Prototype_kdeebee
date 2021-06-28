import React from 'react';
import Breadcrumb from '../../../../components/crumbread';
import TopBar from '../../../../components/topBar';
import Tabs from '../../../../components/M_Contacts/tabs';
import { css, cx } from '@emotion/css'
import Dropdown from '../../../../components/dropdown'
import Icon from '../../../../icons/icons'
import Activity from '../../../../components/M_Contacts/activity'
import avt from '../../../../images/image 10a.png'
interface SideMenuProps {
    title: string,
    isActive: Boolean
}

const TextInputp = css`
font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
align-items: center;
text-align: right;
letter-spacing: -0.06em;
color: #586069;
margin: 0px;
`
const TextInput = css`
background: linear-gradient(
    180deg
    , #FAFBFC 0%, #F9FAFB 100%);
        border: 1px solid #E1E4E7;
        box-sizing: border-box;
        border-radius: 3px;
        height:18px;
        width: 140px;
        &::placeholder{
            font-family: Lucida Grande;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
padding-left:8px;
color: #AEB2B8;
        }
`
export default () => {
    return <>
        <TopBar />
        <Breadcrumb list={["Contacts", "Reconcile", "IANUA Anchor Social Housing"]} activeIndex={2} />
        <Tabs activeTab={3} />
        <div className={css`
  max-width: 1078px;
  width: 100%;
  margin: auto;
  margin-bottom: -1px;
  `}>
            <h1 className={css`
        font-family: Lucida Grande;
        font-style: normal;
        font-weight: normal;
        font-size: 29px;
        line-height: 37px;
        letter-spacing: -0.05em;
        color: #000000;
        margin-top:25px;
        margin-bottom:31.7px;
        `}>IANUA Anchor Social Housing
            </h1>
            <div className={css`
    border: 1px solid #E7EBF0;

    `}>

            </div>

            <div>
                <div className={css`
                    display: flex;
                    margin: 18px;
                `}>
                    <img className={css`
                        width: 56px;
                        height: 56px;
                        margin-right: 28px;
                    `} src={avt} alt="" />
                    <div className={css`
                    margin-top:-24px;
                    min-width:840px;
                    `}>
                        <div className={css`
                        position: relative;
                        left: -7px;
                        z-index: -1;
                        top: 37px;
                        `}>
                            <Icon icon="leftchev" />

                        </div>

                        <div className={css`
                            background: #F6F8FA;
                            height: 56px;
                            display: flex;
                            align-items: center;
                            padding-left: 29px;
                            border-radius: 3px 3px 0px 0px;

                        `}>
                            <p className={css`
                                margin: 0px;
                                font-family: Lucida Grande;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 16px;
                                display: flex;
                                align-items: center;
                                letter-spacing: -0.03em;
                            `}>George Bitsonis <span className={css`font-weight:normal`}> &thinsp; sent message 44m ago</span></p>

                        </div>

                        <div className={css`
                        border: 1px solid #E1E4E8;
                        padding:16px 56px 18px 56px
                        `}>
                            <p className={css`
                        font-family: Lucida Grande;
                        font-style: normal;
                        font-size: 15px;
                        line-height: 22px;
                        letter-spacing: -0.03em;
                        
                        color: #000000;
                        `}>
                                <span className={css`
                                                    font-weight: bold;

                            `}>From:</span> George Bitsonis {`<george@ianua.market>`}
                                <br></br>
                                <br></br>
                                <span className={css`
                                                    font-weight: bold;

                            `}>Sent:</span> 23 April 2021 14:06
                                <br></br>

                                <span className={css`
                                                    font-weight: bold;

                            `}>To:</span> Myriam Tandia {`<polelrealestate@gmail.com>`}
                                <br></br>

                                <span className={css`
                                                    font-weight: bold;

                            `}>Cc:</span> Business Development {`<bd@ianua.market>`}
                                <br></br>

                                <span className={css`
                                                    font-weight: bold;

                            `}>Subject:</span> IANUA Anchor Social Housing - latest developments

                                <br></br>
                                <br></br>
                                Hi Myriam,

                                <br></br>
                                <br></br>
                                It was great talking again, let us share with you our latest developments.
                                <br></br>
                                <br></br><br></br>

                                - Lending termsheet signed with Oaknorth Bank for GBP 30m at an 60% LTV
                                <br></br>
                                - Incorporation of OpCo started and expected to be done early next week
                                <br></br>
                                - HoldCo already incorporated (see here)
                                <br></br>
                            </p>
                            <div className={css`
                            position: relative;
                        `}>
                                <div className={css`
                        height:55px;
                        width:1px;
                        background-color:#E1E4E8;
                        position: absolute;
                        top: 19px
                        `}></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={css`
                    display: flex;
                    margin: 55px 18px;
                `}>
                    <img className={css`
                        width: 56px;
                        height: 56px;
                        margin-right: 28px;
                    `} src={avt} alt="" />
                    <div className={css`
                    margin-top:-24px;
                    min-width:840px;
                    `}>
                        <div className={css`
                        position: relative;
                        left: -7px;
                        z-index: -1;
                        top: 37px;
                        `}>
                            <Icon icon="leftchev" />

                        </div>

                        <div className={css`
                            background: #F6F8FA;
                            height: 56px;
                            display: flex;
                            align-items: center;
                            padding-left: 29px;
                            border-radius: 3px 3px 0px 0px;

                        `}>
                            <p className={css`
                                margin: 0px;
                                font-family: Lucida Grande;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 14px;
                                line-height: 16px;
                                display: flex;
                                align-items: center;
                                letter-spacing: -0.03em;
                            `}>Process Message</p>

                        </div>

                        <div className={css`
                        border: 1px solid #E1E4E8;
                        padding:16px 56px 18px 56px
                        `}>

                            <p>Allocate or remove message</p>

                            <div
                                className={css`margin-left:30px`}
                            >
                                <label className="container1">Remove
                                    <input type="radio" name="radio" /><span className="checkmark"></span>
                                </label>
                                <label className="container1">Allocate
                                    <input type="radio" name="radio" /><span className="checkmark"></span>
                                </label>
                                <label className="container1">Allocate to new contact
                                    <input type="radio" name="radio" /><span className="checkmark"></span>
                                </label>
                            </div>

                            <div
                                className={css`
                            margin-top: 20px;
    margin-left: 56px;
    display: flex;
    max-width: 616px;
    margin: auto;
    justify-content: space-between;
                            `}
                            >
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>First Name</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Relationship Manager</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Relationship Manager" />
                                    </div>
                                </div>
                            </div>


                            <div
                                className={css`
                            margin-top: 20px;
    margin-left: 56px;
    display: flex;
    max-width: 616px;
    margin: auto;
    justify-content: space-between;
                            `}
                            >
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Last Name</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Phone</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Phone" />
                                    </div>
                                </div>
                            </div>



                            <div
                                className={css`
                            margin-top: 20px;
    margin-left: 56px;
    display: flex;
    max-width: 616px;
    margin: auto;
    justify-content: space-between;
                            `}
                            >
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Title</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Title" />
                                    </div>
                                </div>
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Mobile</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Mobile" />
                                    </div>
                                </div>
                            </div>




                            <div
                                className={css`
                            margin-top: 20px;
    margin-left: 56px;
    display: flex;
    max-width: 616px;
    margin: auto;
    justify-content: space-between;
                            `}
                            >
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Organisation</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Organisation" />
                                    </div>
                                </div>
                                <div className={css`display:flex;align-items: center;`}>
                                    <div className={css`
                                width: 139px;
                                display: flex;
                                justify-content: flex-end;
                                margin-right: 26px;
                                `}>
                                        <p className={css`
                                      ${TextInputp}
                                    `}>Email</p>
                                    </div>
                                    <div>
                                        <input className={css`
                                
                                ${TextInput}

                                `} placeholder="Email" />
                                    </div>
                                </div>
                            </div>


                            <div className={css`
                       margin-top: 73px;
                       display: flex;
                       justify-content: flex-end;

                        `}>
<button className={css`
margin-right:28px;
background: linear-gradient(180deg, #F9FAFB 0%, #EFF3F6 100%);
border: 1px solid #C4C8CC;
border-radius: 2px;
font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: -1px;
width:56px;
height:32px;
color: #444D56;
`}>Cancel</button>
    <button className={css`
    
    background: linear-gradient(180deg, #A1D1A6 0%, #A1D1A6 100%);
border: 1px solid #86AD8C;
box-sizing: border-box;
border-radius: 2px;
width:56px;
height:32px;
font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
align-items: center;
text-align: center;
letter-spacing: -0.1em;

color: #E7F3E9;
    `}>Save</button>
               </div>
                        </div>
                        
                   
                    </div>
                </div>


            </div>
        </div>
    </>
}