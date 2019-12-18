<template>
<div>
	<Navi/>
	<JumboTron/>
	<Footer/>

</div>
</template>
<script>
import Navi from '@/components/cmm/Navi.vue'
import Footer from '@/components/cmm/Footer.vue'
import JumboTron from '@/components/cmm/JumboTron.vue'
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