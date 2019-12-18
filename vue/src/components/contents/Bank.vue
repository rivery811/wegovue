<template>
<div>
		<Navi/>
<div id="example" class="container layout1">

    <p><input type="text" v-model="amount" class="form-control" /></p>
    <p>
        <button id="create" @click.once="specialEvent"
           class="btn btn-primary">계좌 개설 10000원 이벤트</button>
        <button id="deposit" @click="deposit($event)"
            class="btn btn-primary">예금</button>
        <button id="withdraw" @click="withdraw"
            class="btn btn-primary">인출</button>
    </p>            
    <h3>계좌 잔고 : {{balance}}</h3>

</div>
	<Footer/>
</div>
</template>
<script>
import Navi from '@/components/cmm/Navi.vue'
import Footer from '@/components/cmm/Footer.vue'
export default{
	name: 'bank',
	components:{Navi,Footer},
	data(){
		return {amount : null, balance:0, sevent:false}
	},
	methods:{
		specialEvent(){
			this.sevent = true
			this.balance=parseInt(10000)
			},
		deposit(){
			this.sevent
			?this.balance+=parseInt(this.amount)
			:alert('계좌를 개설해주세요')

			},
		withdraw(){
			(parseInt(this.balance)-parseInt(this.amount)>0)
			?this.balance-=parseInt(this.amount)
			:alert('잔고부족')
			},
	}
}
</script>
<style scoped>

      .layout1 { margin:30px 30px 30px 30px; }

</style>