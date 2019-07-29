<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about"><Navbar/></router-link>
    </div>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Home from './views/Home'
import Navbar from './components/Navbar'
export default {
  components:{
    Home,
    Navbar
  }
  
}
</script>




<style scope>
*{
  padding: 0px;
  margin: 0px;
  margin-top:0px;
  font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
body{
  height: 100%; 
  
}
#app{
  width: 100%;
  height: 100%;
  background-image: url("../public/img/timg.jpg");
  background-repeat: no-repeat !important;
  background-size: cover;
  /* background-position: 0; */
  background-attachment: fixed !important;
  position: fixed ;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}
</style>
