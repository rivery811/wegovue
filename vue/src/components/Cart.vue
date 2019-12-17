<template>
  <div>
	<Navi></Navi>
		<ul>
			<li v-for="item of items" :key="item.name" >
      <img  :src ="item.img"><br/>
				{{item.name}}:{{item.price}}원<br/>
			<input type="text" v-model="item.qty"/><br/><br/>
			</li>
		</ul>
		<button v-on:click="buy">구매</button> 
		<p>합계:{{totalPrice}}</p>


	
<Footer/>
  </div>

</template>

<script>
import Navi from '@/components/Navi.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Cart',
  components:{Navi,Footer},
  data() {return  {items:[{name :'연필', price:300, qty:0, img :require('@/assets/images/pen.png')}
  , {name :'공책', price:400, qty:0,img :require('@/assets/images/note.png')}
  ,{name :'지우개', price:500, qty:0,img :require('@/assets/images/e.png')}]}},
	methods :{
			buy(){alert('click')
			this.result= true
		},// 이시점 바이는 프로퍼티 위에서 buy()안하게 조심 
		},
	computed :{
			totalPrice(){
				return this.items.reduce((sum, item)=>{
					return sum+(item.price*item.qty)
				},0)
			}
		},
		created(){
			//alert('객체생성')
			
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>

