import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('p-icon', Icon)
Vue.component('p-button', Button)

new Vue({
    el: '#app',
})