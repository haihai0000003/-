import React from "react";
import Header from '@/components/header'
import Main from '@/views/Main/main'

import TableApt from "@/components/tableApt";
const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 21 },
  };
const Home: React.FC<{}> = () => {
    return (
        <>
        <Header />
        <Main />
        </>
    )
}

export default Home