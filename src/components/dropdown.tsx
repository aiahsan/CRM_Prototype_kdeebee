import React from 'react';
import { Dropdown } from 'react-bootstrap'
import Icon from '../icons/icons'
import { css, cx } from '@emotion/css'
const dropCss = css`
background-color: transparent!important;
border: transparent!important;
`
interface Props{
    title:String
}
export default (props:Props)=>{
    return <>
    <Dropdown >
                            <Dropdown.Toggle className={css`
      ${dropCss}
      font-family: Lucida Grande;
      font-style: normal!important;
      font-weight: bold!important;
      font-size: 15px!important;
      line-height: 18px!important;
      
      display: flex!important;
      align-items: center!important;
      letter-spacing: -1px!important;
      
      color: #444D56!important;
      padding:0px!important;
      &::after{
        border:none!important;
    }
    &:hover{
        ${dropCss}
    }
      
  `} >
                               <p className={css`
                               margin:0px;
                               margin-right:3.5px
                               `}>{props.title}</p>
                                <Icon icon="chevblackdown" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

    </>
}