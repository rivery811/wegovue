<template>
<div>
	<Navi/>
	<JumboTron/>
	<Footer/>

</div>
</template>
<script>
import Navi from '@/components/Navi.vue'
import Footer from '@/components/Footer.vue'
import JumboTron from '@/components/JumboTron.vue'
export default{
	name :'home',
	components :{
		Navi,Footer,JumboTron
	},
	data(){
		return {msg :'홈화면들어옴'}
	}
}
</script>
<style scoped></style>