import Vue from 'vue'

 

// axios
import ajax from '@util/axios'

// filters
import '@util/filters' 
 
import bus from '@util/bus'

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
