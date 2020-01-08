import request from '@/utils/request'

// 首页  轮播标题简介
export function homeSee() {
    return request({
        url: '/api/home_page',
        method: 'get'
    })
}

// 首页  文章列表
export function homeArticle() {
    return request({
        url: '/api/article',
        method: 'get'
    })
}
// 公司简介   查看 
export function getIntroduction() {
    return request({
        url: `/backend/introduction`,
        method: 'get'
    })
}
// 业务范围  列表
export function getBusiness() {
    return request({
        url: `/backend/business`,
        method: 'get'
    })
}
// 案例展示  列表
export function getCase() {
    return request({
        url: `/backend/cases`,
        method: 'get'
    })
}

//联系我们   查看
export function getContacUs() {
    return request({
        url: `/backend/company`,
        method: 'get'
    })
}