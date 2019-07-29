<template>
  <div id="login">
    <Loginzone/>
    <Registerzone/>
  </div>
</template>

<script>
import Registerzone from '../components/Registerzone'
import Loginzone from '../components/Loginzone'
export default {
  name:"",
  components: {
    Registerzone,
    Loginzone,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
  width: 100%;
  position: relative;
}
</style>
