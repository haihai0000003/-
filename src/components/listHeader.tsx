import React, { useState, useEffect } from "react";
import './style/listHeader.scss'

type IProps =  {
    clickOrder:(valeu:string) => void;
}
const ListHeader:React.FC<IProps> = (props) => {
    const navList = ['综合排序','最新优先','最热优先']
    
    const [active,setActive] = useState<number>(0)

    const {clickOrder} = props
    
    const changeOrder = (value:string,index:number) => {
        setActive(index)
        clickOrder(value)
    }

    return (
        <header className="list-header">
            <nav className="list-nav">
                <ul className="nav-list">
                    {
                        navList.map((item,index) => {
                            return (
                                <li className={['nav-item', active === index ? 'active' : ''].join(' ')} key={item}>
                                    <a onClick={() => changeOrder(item,index)}>{item}</a>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                <div>
                    占位
                </div>
            </nav>
        </header>
    )
}

export default ListHeader