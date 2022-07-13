import React, { useState, useEffect } from "react";
import './main.scss'
import ListHeader from '@/components/listHeader'

const Main: React.FC<{}> = () => {

    const clickOrder = (valeu:string) => {
        console.log(valeu)
    }

    return (
        <main className="main-container">
            <div className="search-view">
                <div className="search-list">
                    <ListHeader  clickOrder = {clickOrder} />
                    
                </div>
            </div>
        </main>
    )
}
export default Main