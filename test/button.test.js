// 单元测试
import chai from 'chai'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from 'vue'
import Button from '../src/button'
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Button', () => {
    it('Button 是一个存在的值', () => {
        expect(Button).to.be.exist
    })
    it('Button 可以设置 icon', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
        vm.$el.remove()
        vm.$destroy()
    })
    it('Button 同时设置 icon 和 Loading 时显示 loading', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true,
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    })
    it('Button 如果不传 iconPosition 那么icon order 就是 1, icon 显示在左边', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('Button 如果传了 iconPosition 那么 icon order 就是 2, icon 显示在右边', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right',
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('Button 这个组件可以响应 Click 事件', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })
        vm.$mount(div)
        const callback = sinon.spy();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
        vm.$el.remove()
        vm.$destroy()
    })
})