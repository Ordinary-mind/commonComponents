import customText from './custom-text'
import customList from './custom-list'

const components = [
    customText, customList
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装。这里批量给组件添加install方法
components.map(a => {
    a.install = function (Vue) {
        Vue.component(a.name, a);
    }
})

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    // 以下是具体的组件列表
    customText, customList
}