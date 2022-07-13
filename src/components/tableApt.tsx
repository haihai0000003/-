import React from "react";
import { Table } from 'antd';
import './style/tableApt.scss'
const columns = [
    {
      width:'200px',
      title: '节点',
      dataIndex: 'name',
      key: 'name',
      render: (text:any) => <span className="name">{text}</span>
    },
    {
      title: '意见',
      dataIndex: 'age',
      width:700,
      key: 'age',
      render: (text:any) => 
      <>
      <div className="content">{text.content}</div>
      <div className="person">{text.person}</div>
      <div className="date">{text.date}</div>
      </>,
    },
    {
      title: '操作',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '接收人',
      key: 'tags',
      dataIndex: 'tags',
      render: (text:any) => <span className="tags">{text}</span>
    },
  ];

  const data = [
    {
      key: '3',
      name: '部门经理',
      age: {content:'月末有上线，大厦政策不允许短时间内回京人员去现场支持',person:'解决方案一部/李林江',date:'2021-12-20 10:12:33'},
      address: '驳回',
      tags: '显示',
    },
    {
      key: '2',
      name: '直接上级',
      age: {content:'同意',person:'解决方案一部/高天池',date:'2021-12-17  14:32:55'},
      address: '批准',
      tags: '显示',
    },
    {
      key: '1',
      name: '请示人',
      age: {content:'大学室友结婚，需要离京，离京日期：12月24号，目的地河南，请领导批准',person:'解决方案一部/吴海波',date:'2021-12-17  11:04:24'},
      address: '提交',
      tags:'显示',
    },
    
  ];


  const TableApt: React.FC<{}> = () => {
    return (
        <Table columns={columns} dataSource={data} bordered />
    ) 
  }
  export default TableApt;