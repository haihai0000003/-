import React, { useState, useEffect } from "react";
import './style/articleList.scss'
type ArticleItem = {
    author: String,
    tiem:String,
    title:String,
    content:String,
    imgScr:String,
    tec:String
}
const ArticleList:React.FC<ArticleItem> = (props) => {
    return (
        <>
            <li className="advertisement">
                <div className="meta-container">
                    <div className="user-message">

                    </div>
                    <div className="date">

                    </div>
                </div>
                <div className="main">
                    <div className="info-box">

                    </div>
                    <img className="thumb" />
                </div>
            </li>
        </>
    )
}
export default ArticleList