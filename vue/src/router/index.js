import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Cart.vue'
import Footer from '@/components/Footer.vue'
import JumboTron from '@/components/JumboTron.vue'
import Calculator from '@/components/Calculator.vue'
import Seqsum from '@/components/Seqsum.vue'
import Bank from '@/components/Bank.vue'
import Todo from '@/components/Todo.vue'
Vue.use(Router)
export default new Router({
	mode : 'history',
	routes :[
		{path : '/', name : 'home',component:Home},
		{path : '/cart', name : 'cart',component:Cart},
		{path : '/jumboTron', name : 'jumboTron',component:JumboTron},
		{path : '/footer', name : 'footer',component:Footer},
		{path : '/calulator', name : 'calulator',component:Calculator},
		{path : '/seqsum', name : 'seqsum',component:Seqsum},
		{path : '/bank', name : 'bank',component:Bank},
		{path : '/todo', name : 'todo',component:Todo}

	]
})