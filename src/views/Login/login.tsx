import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox,AutoComplete } from 'antd';
import { UserOutlined, LockOutlined, CloseOutlined} from '@ant-design/icons';
import './login.scss'
import { fetchList,queryArticle } from '../../server/login'
export type userForm = {
    username:string,
    password:string | number,
    remember?: boolean,
}
type options = {
    value: string
}[]
const Login: React.FC<{}> = () => {
    const [userOption,setUserOption] = useState<options>([])

    useEffect(() => {
        quertArtFun()
        let getUserOption:string | null  = window.localStorage.getItem('userName')
        if(getUserOption) {
            setUserOption(JSON.parse(getUserOption))
        }
    },[])

    const renderItem = (title: string,index: number) => ({
        value: title,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {title}
            <span style={{fontSize:'12px'}} onClick={(e) => del(e,index)}>
                <CloseOutlined />
            </span>
          </div>
        ),
    })

    const del = (e:React.MouseEvent,index:number) => {
        e.stopPropagation()
        userOption.splice(index,1)
        setUserOption([...userOption])
        window.localStorage.setItem('userName',JSON.stringify(userOption))
    }

    const quertArtFun = async () => {
        const res = await queryArticle({pageNum:1,PageSize:10})
        console.log(res)
    }

    const onFinish = async (values: userForm) => {
        let userInfo = await fetchList({username:values.username,password:values.password})
        if(values.remember && !(userOption.some(item => values.username === item.value))) {
            userOption.push({
                value: values.username
            })
            setUserOption([...userOption])
            window.localStorage.setItem('userName',JSON.stringify(userOption))
            console.log(userOption)
        }
    };
    
    const onFinishFailed = (errorInfo: any) => {
    };
    return (
        <div className="login-container">
            <Form
                className="login-form"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                 <div className="title-container">
                    <h3 className="title">Login Page</h3>
                </div>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >   
                    <AutoComplete
                        options={userOption.map((item,index) => renderItem(item.value,index) )}
                    >
                        <Input size="large" placeholder="Username" prefix={<UserOutlined/>}/>
                    </AutoComplete>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />}/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{span: 24 }}>
                    <Button type="primary" size="large" htmlType="submit"  style={{width:'100%'}}>
                    Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default Login