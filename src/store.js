import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {isRegister : false}
export default new Vuex.Store({
  state,
  mutations:{
      registering(state){
          state.isRegister = !isRegister
      }
  },  
  getters:{
      doneRegister:(state)=>{
          return state.isRegister
      }
  },
  actions:{

  }
})
