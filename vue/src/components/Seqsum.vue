<template>
<div>
	<Navi/>
	<input type="text"  v-model="start"><br/>
	<input type="text"  v-model="end"><br/>
	<button @click="btn">클릭</button><br/>
	결과값:{{result}}
	<Footer/>
</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
import Footer from '@/components/Footer.vue'
export default{
	name :'seqsum',
	components:{Navi,Footer},
	data(){
		return{
			start:null,
			end : null,
			result :0
			}
	},
	methods :{	
		btn(){ 
			let arr =[parseInt(this.start),parseInt(this.end)].sort(function(a,b){return a-b})
			for(let i = arr[0];i<=arr[1];i++){this.result+=i}		
		}
	}
}
</script>
<style scoped>
</style>