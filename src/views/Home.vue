<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/Login'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style>
.home{
  width: 100%;
}

</style>
