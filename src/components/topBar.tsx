import React from 'react';
import { css, cx } from '@emotion/css'
import Icon from '../icons/icons'
import logo from '../images/fav.png'
import { Dropdown } from 'react-bootstrap'
import avt from '../images/image 10.png'
import { useMediaQuery } from 'react-responsive'
import NavBar from '../components/navbar'
interface MenuTextProps {
    title: String
}

const MenuText = (props: MenuTextProps) => {
    const { title } = props;
    return <p className={Style.jkasdfasklf}>{title}</p>
}
export default () => {
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
      })
    return isTablet?<><NavBar/></>: <div className={`d-flex justify-content-between ${Style.kdasfnase3w
        }`} >
        <div className={Style.asdvisasdans}>
            <img src={logo} alt="" />
            <input placeholder="Search or jump to..." className={Style.anksdvajewe} />

            <MenuText title="Opportunities" />
            <MenuText title="Contacts" />
            <MenuText title="Library" />
        </div>
        <div className={Style.kandvseriwe}>

            <Icon icon="bell" />
            <div className={Style.anvsjdjnfa3}>
                <Icon icon="plus" />
                <div className={css`margin-left:5px`}>
                    <Icon icon="chevdown" />
                </div>

            </div>
            <Dropdown >
                <Dropdown.Toggle className={Style.vnasdknsfsadd} >
                    <img src={avt} alt="" />
                    <Icon icon="chevdown" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    </div>

}

export const Style={
jkasdfasklf:css`font-family: Lucida Grande;
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 18px;
margin:0px;
display: flex;
align-items: center;
color: #FFFFFF;`,
dropCss : css`
background-color: transparent!important;
border: transparent!important;
`,
kdasfnase3w:css`
background: #B6AF9D;
padding:14px 29.5px;
height:64px;
`,
asdvisasdans:css` max-width:617px;
display:flex;
justify-content: space-between;
width: 100%;
`,
anksdvajewe:css`
border: 1px solid #FFFFFF;
background-color: transparent;
box-sizing: border-box;
border-radius: 5px;
min-width:272px;

&::placeholder {
padding: 5px 14px;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}
`
,
kandvseriwe:css`
width:128px;
height:36px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 3px 0px;
`,
anvsjdjnfa3:css`
display:flex;
align-items: center;
justify-content: center;
`,
vnasdknsfsadd:css`
background-color: transparent!important;
border: transparent!important;

padding:0px!important;
&::after{
  border:none!important;
}
&:hover{
    background-color: transparent!important;
    border: transparent!important;
}
`

}