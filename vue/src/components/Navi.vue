<template>
<div>
  <nav class = "navbar navbar-default">
  <div class = "container-fluid">
    <div class ="navbar-header">
    <a href="#" class ="navbar-brand">비트캠프</a>
	<ul class ="nav navbar-nav">
      <li class="active"><router-link to="/">home</router-link></li>
      <li><router-link to="/cart">장바구니</router-link></li>
      <li><router-link to="/calulator">계산기</router-link></li>
      <li><router-link to="/seqsum">입력된 두수사이의 자연수의 합 </router-link></li>
      <li><router-link to="/bank">은행 </router-link></li>
      <li><router-link to="/todo">할일  </router-link></li>
      <li>회원가입</li>
      <li>로그인</li>
    </ul>
    </div>
    
  </div>
    
  </nav>
</div>
</template>
<script>
export default{

}
</script>
<style scoped></style>