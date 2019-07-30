<template>
  <div id="login">
    <Loginzone></Loginzone>
    <Registerzone></Registerzone>
  </div>
</template>

<script>
import Registerzone from '../components/Registerzone'
import Loginzone from '../components/Loginzone'
export default {
  name:"",
  props:[
    
  ],
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
