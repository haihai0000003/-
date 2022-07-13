import React, { useState, useEffect } from "react";
import { usePopper } from 'react-popper';
import { Row, Col, Button, Input } from 'antd'
import './style/header.scss'

const { Search } = Input;
const menu = ['首页','测试','测试','测试','测试']
const Header: React.FC<{}> = () => {
    const [visible,setVisible] = useState<boolean>(true);
    const [popperVisible,setPopperVisible] = useState<boolean>(false);
    const [active,setActive] = useState<number>(0);

    const listerScroll = (e:WheelEvent):void => {
        const offsetTop = document.documentElement.scrollTop || document.body.scrollTop
        e.deltaY > 0? offsetTop > 200?visible?setVisible(false):'':'':visible?'': setVisible(true)
    }

    const [referenceElement, setReferenceElement] = useState<any>(null);
    const [popperElement, setPopperElement] = useState<any>(null);
    const [arrowElement, setArrowElement] = useState<any>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
        placement: 'bottom',
    });
    useEffect(() => {
        window.addEventListener('wheel',listerScroll)

        return () => {
            window.removeEventListener('wheel',listerScroll)

        }
    })
    const onSearch = (valeu:string):void => {
        console.log(valeu)
    }

    const darkOrLight = ():void => {
        let htmlStatus = document.getElementsByTagName('html')[0]
        
        if(htmlStatus.getAttribute('data-theme') === 'light') {
            htmlStatus.setAttribute('data-theme','dark')
        } else {
            htmlStatus.setAttribute('data-theme','light')
        }
    }
    return (
        <header id="header" className={visible?'visible':''}>
            <Row style={{flexFlow:'nowrap'}}>
                    <h1>
                        <a id="logo" href="#">
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
                            <span className="logoName">密地</span>
                         </a>
                    </h1>
                    <ul className="main-nav">
                        <li className="main-list">
                            <ul className="nav-list">
                                {
                                    menu.map((item,index) => 
                                        <li onClick={() => setActive(index)} className={`nav-item ${active === index ? 'active' : ''}`} key={index}>
                                            <a>
                                                {item}
                                            </a>
                                        </li>
                                    )
                                }
                                
                            </ul>
                            <div onClick={() => setPopperVisible(!popperVisible) } className="phone-show-menu" ref={setReferenceElement}>
                                <span className={popperVisible?'arrowUp':''}>首页</span>
                            </div>
                            <div className={`popperDia ${!popperVisible?'popperShow':''}`} ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                                Popper element
                                <div id="arrow" ref={setArrowElement} style={styles.arrow} />
                            </div>
                        </li>
                        
                        
                        <li className="serch-list">
                            <Search className="search" placeholder="搜索" onSearch={onSearch} style={{ width: 200 }} />
                            <Button id="article" onClick={darkOrLight}>发布文章</Button>
                        </li>
                        <li className="author">
                            <button type="button" className="login-button">登录</button>
                            
                        </li>
                    </ul>
                    
            </Row>
        </header>
    )
}

export default Header;