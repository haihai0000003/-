import request from './index'
import { userForm } from '../views/Login/login'

type pams = {
  pageNum: number,
  PageSize: number
}

export async function fetchList(query:userForm) {
    return request({
      url: '/login',
      method: 'post',
      data: query
    })
  }

export async function queryArticle(query:pams) {
  return request({
    url: '/articles',
    method: 'post',
    data: query
  })
}