<template>
  <div id="loginzone">
      <h2>没有展会账户？</h2>
      <button type="button">创建账户</button>
      <div class="registering">

      </div>
      <div class="statement">
          © 展会 | 隐私政策 | 使用条款
      </div>
  </div>
</template>

<script>
export default {
  name:"",
  props: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
#loginzone{
    width: 450px;
    height: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column; 
    margin: 0 auto 100px;
    padding: 15px 20px 35px 20px ;
    background-color: rgba(255,255,255,0.85);
}

</style>
