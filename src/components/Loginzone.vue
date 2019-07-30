<template>
  <div id="loginzone">
        <h2>用户登录</h2>
        <form action="http:\\www.baidu.com"  method="get">
           <ul>
               <li>
                    <div class = "user" v-bind:class="{'userchange':idchange}" id="userId">              
                        <label for="username" v-on:click="labelmove" v-bind:class="{label:labelactiveid,label1:!labelactiveid}">用户名</label>
                        <input type="text" name="username" id="username" >
                        <div id="infoId" @mouseover="showIdInfo" @mouseout="hideIdInfo" v-bind:class="{'idInfoChange':idInfo}">
                            <span class="infoContent" v-bind:style="{opacity:idInfoShow,display:idDisplayChange}">
                                <span class="graphic">
                                </span>
                                用户名通常是您的邮件地址。
                                <a href="#">忘记用户名？</a>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="psw" v-bind:class="{'pswchange':pswchange}" >
                        <label for="psw"  v-on:click="labelmove2" v-bind:class="{label:labelactivepsw,label1:!labelactivepsw}" >密 码</label>
                        <input type="password" name="psw" id="psw">
                        <div id="infoPsw" @mouseover="showPswInfo"  @mouseout="hidePswInfo" v-bind:class="{'pswInfoChange':pswInfo}">
                            <span class="infoContent" v-bind:style="{opacity:pswInfoShow,display:pswDisplayChange}">
                                <span class="graphic">
                                </span>
                                <a href="#">忘记密码？</a>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="loginError">
                <p v-bind:style="{display:error}">用户名或密码有误，请重新输入！</p>
            </div>
            <input type="submit" class="loginButton" @click="loginTo" v-bind:value='buttonValue'>
            <div class="help"><h3>需要帮助？</h3></div>
        </form>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name:"Loginzone",
  data(){
         return {
             labelactiveid:"true",
             labelactivepsw:"true",
             idchange:false,
             pswchange:false,
             idInfo:false,
             pswInfo:false,
             idInfoShow:0,
             pswInfoShow:0,
             idDisplayChange:"none",
             pswDisplayChange:"none",
             error:"none",
             buttonValue:"登录"
         }
  },
  props: {
        
  },
  methods:{
      //label标签被点击  修改标签样式，设置异步执行函数，执行监听click事件，进行原样式恢复的鉴别
      labelmove:function (event){
        if(document.getElementById("username").value===""){
        // console.log(this.$store.state.isRegister),
        this.labelactiveid=!this.labelactiveid,
        this.idchange = !this.idchange,
        setTimeout(()=>{document.addEventListener("click",this.changeX)},0)
        }
      },
      //鼠标点击事件监听，判定是否恢复label样式，input存在输入，则保持，为空则恢复样式
      changeX:function (event){
        
        if(document.getElementById("username").value===""){
            this.labelactiveid=!this.labelactiveid,
            this.idchange = !this.idchange,
            document.removeEventListener("click",this.changeX)
        
        }
      }, 

      //密码input的样式修改及监听
      labelmove2:function (event){
          if(document.getElementById("psw").value===""){
          this.labelactivepsw=!this.labelactivepsw,
          this.pswchange = !this.pswchange,
        setTimeout(()=>{document.addEventListener("click",this.changeY)},0)
          }
      },
      changeY:function (event){ 
        if(document.getElementById("psw").value===""){
            this.labelactivepsw=!this.labelactivepsw,
            this.pswchange = !this.pswchange,
            document.removeEventListener("click",this.changeY)
        }
      } ,

      //输入信息提示，鼠标监听，由于需要在子层级添加鼠标事件对display的影响，不使用hover修改父层样式
      showIdInfo:function(event){
          this.idInfo=!this.idInfo,
          this.idDisplayChange = "inline-block",
          setTimeout(() => {
              this.idInfoShow=1
          }, 20)
          
          
      },
      hideIdInfo:function(){
          this.idInfo=!this.idInfo,
          this.idInfoShow=0,
          setTimeout(() => {
          if(this.idInfo){this.idDisplayChange = "inline-block"  }else{this.idDisplayChange = "none"}          
          }, 1500)

      },
      showPswInfo:function(event){
          this.pswInfo=!this.pswInfo,
           this.pswDisplayChange = "inline-block",
          setTimeout(() => {
              this.pswInfoShow=1
          }, 20)
      },
      hidePswInfo:function(){
          this.pswInfo=!this.pswInfo,
          this.pswInfoShow=0,
          setTimeout(() => {
          if(this.pswInfo){this.pswDisplayChange = "inline-block"  }else{this.pswDisplayChange = "none"}          
          }, 1000)
      },

      //登录按钮的样式修改
      loginTo:function(){
          if(document.getElementById("username").value!==""&&document.getElementById("psw").value!==""){
          this.buttonValue = "正在登录,请稍后.."
          }else{
              this.error = "inline-block"
          }
      }


}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
    color: #406177;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
ul{
    display: block;
}
li{
    display: list-item;
    list-style: none;
    margin-top: 60px;
}
a{
    color: white;
    font:1rem/1.5 Arial,'\5b8b\4f53',sans-serif;
    /* font-size: 1.1rem;
    font-family: Arial; */
}

#loginzone{
    width: 450px;
    height: auto;
    position: relative;
    /* text-align: center; */
    /* display: flex;
    justify-content: center;
    flex-direction: column;  */
    margin: 100px auto 10px;
    padding: 30px 5px 35px 5px ;
    background-color: rgba(255,255,255,0.85);
    border-radius: 5px;

}
@media  (max-width:500px){
    #loginzone{
        width: 100% ;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 30px 5px 35px 5px ;
        background-color: rgba(255,255,255,0.85);
        border-radius: 5px;
    }
}
@media  (max-width:500px){
    #loginzone h2{
        color: red;
    }
}
@media  (max-width:500px){
    #loginzone #infoId,#loginzone #infoPsw{
        left: 220px;
    }
}
@media  (max-width:500px){
    #loginzone ul input{
        margin-left: 40px;
    }
}
@media screen and (max-width: 500px){
#loginzone .infoContent{
    left: -160px;
    top: 50px;
    width: 180px;
    box-shadow: 3px 3px 8px rgb(112, 112, 112);
    padding:5px 5px 5px 15px;
    font:1rem/1.5 Arial,'\5b8b\4f53',sans-serif;
    /* font-size: 1.1rem;
    font-family: Arial !important; */
}
}
@media  (max-width:500px){   
#loginzone .graphic::before{
    border-width: 0 10px 10px 10px;
    border-color: transparent  transparent #324b5c transparent ;
    position: absolute;
    left: 165px;
    top: -10px;
}
}
#userId,.psw{
    width: 80%;
    position: relative;
    margin: 0 auto;
    height: 3.4rem;
    border-bottom: 1px solid #b7cdd9;
    z-index: 100;
}
#loginzone .userchange{
    border-bottom: 1px solid rgb(66, 80, 99) !important;
}

#loginzone .userchange:before{
    background-position: -43px 0 !important;
}
#loginzone .pswchange{
    border-bottom: 1px solid rgb(66, 80, 99) !important;
}

#loginzone .pswchange:before{
    background-position: -43px -42px !important;
}
.user::before{
    content: "";
    width: 3.3rem;
    height: 3.3rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjUuOCIgaGVpZ2h0PSIxNzMuMyIgdmlld0JveD0iMCAwIDE2NS44IDE3My4zIj48cGF0aCBmaWxsPSIjOEFBREJFIiBkPSJNMzguOCAzM2MtLjMtMi4xLTEuNi0zLjktMy41LTQuOGwtOS44LTQuNmMwIC4xLTEgNC4zLTUuNyA2LjgtNC44LTIuNS01LjctNi43LTUuNy02LjhsLTkuOCA0LjZDMi40IDI5LjIgMS4xIDMxIC44IDMzTDAgNDEuNmgzOS4zbC0uNS04LjZ6TTEyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0MyOC4yIDU1LjEgMjMgNTAgMTYuNyA1MFM1LjIgNTUuMiA1LjIgNjEuNXY2LjNIMHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek0yMyA2Ny44SDEwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTMjMgNTggMjMgNjEuNXY2LjN6Ii8+PHBhdGggZmlsbD0iIzMyNEI1QyIgZD0iTTg4LjggMzNjLS4zLTIuMS0xLjYtMy45LTMuNS00LjhsLTkuOC00LjZjMCAuMS0xIDQuMy01LjcgNi44LTQuOC0yLjUtNS43LTYuNy01LjctNi44bC05LjggNC42Yy0xLjkuOS0zLjIgMi43LTMuNSA0LjhsLS44IDguNmgzOS4zbC0uNS04LjZ6TTYyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0M3OC4yIDU1LjEgNzMgNTAgNjYuNyA1MHMtMTEuNSA1LjItMTEuNSAxMS41djYuM0g1MHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek03MyA2Ny44SDYwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTNzMgNTggNzMgNjEuNXY2LjN6TTY4LjggMTAwYy0xMC40IDAtMTguOCA4LjQtMTguOCAxOC44czguNCAxOC44IDE4LjggMTguOCAxOC44LTguNCAxOC44LTE4LjhTNzkuMiAxMDAgNjguOCAxMDB6bTIuMSAzMGgtNC4ydi0xNGg0LjJ2MTR6bTAtMTYuOGgtNC4yVjEwOWg0LjJ2NC4yeiIvPjxwYXRoIGZpbGw9IiM0NzVDNkMiIGQ9Ik0xNi43IDEzMGg0LjJ2LTE0aC00LjJ2MTR6bTAtMjF2NC4yaDQuMlYxMDloLTQuMnoiLz48cGF0aCBmaWxsPSIjNDc1QzZDIiBkPSJNMTguOCAxMDBDOC40IDEwMCAwIDEwOC40IDAgMTE4LjhzOC40IDE4LjggMTguOCAxOC44IDE4LjgtOC40IDE4LjgtMTguOFMyOS4yIDEwMCAxOC44IDEwMHptMCAzNS42Yy05LjMgMC0xNi44LTcuNS0xNi44LTE2LjhTOS42IDEwMiAxOC44IDEwMnMxNi44IDcuNSAxNi44IDE2LjgtNy41IDE2LjgtMTYuOCAxNi44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0uMSAxNTBoMTgwLjR2NDEuMUguMVYxNTB6Ii8+PGc+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTY5IDE2My41aDEwLjZsLTUuNi05LTEwLjIgMTYuM2gtNC43bDEyLjUtMTkuNWMuNS0uOCAxLjQtMS4zIDIuNC0xLjNzMS45LjUgMi40IDEuMmwxMi41IDE5LjZoLTQuN2wtMi4yLTMuNkg3MS40bC0yLjQtMy43em00OC41IDMuN3YtMTdoLTR2MTguNmMwIC41LjIgMSAuNiAxLjRzLjkuNiAxLjUuNmgxOC4xbDIuMy0zLjZoLTE4LjV6TTUyIDE2NC4xYzMuOCAwIDctMy4xIDctNyAwLTMuOC0zLjEtNy03LTdIMzQuN3YyMC42aDR2LTE3aDEzLjFjMS44IDAgMy4zIDEuNSAzLjMgMy4zcy0xLjUgMy4zLTMuMyAzLjNINDAuNmwxMS44IDEwLjNoNS44bC04LTYuNyAxLjguMnptLTQxLjcgNi43Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDEyYzUuNyAwIDEwLjMgNC42IDEwLjMgMTAuM3MtNC42IDEwLjMtMTAuMyAxMC4zaC0xMnptMTEuNy0zLjZjMy43IDAgNi43LTMgNi43LTYuN3MtMy02LjctNi43LTYuN0gxMC42Yy0zLjcgMC02LjcgMy02LjcgNi43czMgNi43IDYuNyA2LjdIMjJ6bTc1LjIgMy42Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDE0LjJsLTIuMyAzLjZIOTcuNWMtMy43IDAtNi43IDMtNi43IDYuN3MzIDYuNyA2LjcgNi43aDE0LjNsLTIuMyAzLjZIOTcuMnptNDguNC0zLjZjLTMgMC01LjYtMi02LjQtNC44aDE2LjlsMi4zLTMuNmgtMTkuM2MuOC0yLjggMy40LTQuOSA2LjQtNC45aDExLjZsMi4zLTMuNmgtMTQuMmMtNS43IDAtMTAuMyA0LjYtMTAuMyAxMC4zczQuNiAxMC4zIDEwLjMgMTAuM2gxMi4ybDIuMy0zLjYtMTQuMS0uMXptMTYuMS0xNC44YzAtMSAuOC0xLjggMS44LTEuOHMxLjguOCAxLjggMS44LS44IDEuOC0xLjggMS44LTEuOC0uOC0xLjgtMS44em0xLjggMi4zYzEuMyAwIDIuMy0xIDIuMy0yLjNzLTEtMi4zLTIuMy0yLjMtMi4zIDEtMi4zIDIuMyAxLjEgMi4zIDIuMyAyLjN6bS0uMi0zLjdjLjQgMCAuNSAwIC43LjEuNS4yLjUuNi41Ljd2LjJjMCAuMS0uMS4zLS4zLjRsLS4xLjEuNiAxLjFoLS43bC0uNS0xaC0uNHYxaC0uNVYxNTFoLjd6bS4yIDEuMmMuMiAwIC4zIDAgLjQtLjIgMC0uMS4xLS4xLjEtLjJzLS4xLS4zLS4yLS4zaC0uNnYuN2guM3oiLz48L2c+PGc+PGNpcmNsZSBmaWxsPSIjRDgwMDAwIiBjeD0iMTE4LjgiIGN5PSIxOS44IiByPSIxOC44Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTExMy41IDMuOWgxMC40djM4LjZoLTEwLjRWMy45eiIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMy40OCAzMC43MjYpIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iJ0FyaWFsLUJvbGRNVCciIGZvbnQtc2l6ZT0iMzEuMjc2Ij4hPC90ZXh0PjwvZz48L3N2Zz4=");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 360%;
    position: absolute;
    left: 0;
}
.psw::before{
    content: "";
    width: 3.3rem;
    height: 3.3rem;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjUuOCIgaGVpZ2h0PSIxNzMuMyIgdmlld0JveD0iMCAwIDE2NS44IDE3My4zIj48cGF0aCBmaWxsPSIjOEFBREJFIiBkPSJNMzguOCAzM2MtLjMtMi4xLTEuNi0zLjktMy41LTQuOGwtOS44LTQuNmMwIC4xLTEgNC4zLTUuNyA2LjgtNC44LTIuNS01LjctNi43LTUuNy02LjhsLTkuOCA0LjZDMi40IDI5LjIgMS4xIDMxIC44IDMzTDAgNDEuNmgzOS4zbC0uNS04LjZ6TTEyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0MyOC4yIDU1LjEgMjMgNTAgMTYuNyA1MFM1LjIgNTUuMiA1LjIgNjEuNXY2LjNIMHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek0yMyA2Ny44SDEwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTMjMgNTggMjMgNjEuNXY2LjN6Ii8+PHBhdGggZmlsbD0iIzMyNEI1QyIgZD0iTTg4LjggMzNjLS4zLTIuMS0xLjYtMy45LTMuNS00LjhsLTkuOC00LjZjMCAuMS0xIDQuMy01LjcgNi44LTQuOC0yLjUtNS43LTYuNy01LjctNi44bC05LjggNC42Yy0xLjkuOS0zLjIgMi43LTMuNSA0LjhsLS44IDguNmgzOS4zbC0uNS04LjZ6TTYyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0M3OC4yIDU1LjEgNzMgNTAgNjYuNyA1MHMtMTEuNSA1LjItMTEuNSAxMS41djYuM0g1MHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek03MyA2Ny44SDYwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTNzMgNTggNzMgNjEuNXY2LjN6TTY4LjggMTAwYy0xMC40IDAtMTguOCA4LjQtMTguOCAxOC44czguNCAxOC44IDE4LjggMTguOCAxOC44LTguNCAxOC44LTE4LjhTNzkuMiAxMDAgNjguOCAxMDB6bTIuMSAzMGgtNC4ydi0xNGg0LjJ2MTR6bTAtMTYuOGgtNC4yVjEwOWg0LjJ2NC4yeiIvPjxwYXRoIGZpbGw9IiM0NzVDNkMiIGQ9Ik0xNi43IDEzMGg0LjJ2LTE0aC00LjJ2MTR6bTAtMjF2NC4yaDQuMlYxMDloLTQuMnoiLz48cGF0aCBmaWxsPSIjNDc1QzZDIiBkPSJNMTguOCAxMDBDOC40IDEwMCAwIDEwOC40IDAgMTE4LjhzOC40IDE4LjggMTguOCAxOC44IDE4LjgtOC40IDE4LjgtMTguOFMyOS4yIDEwMCAxOC44IDEwMHptMCAzNS42Yy05LjMgMC0xNi44LTcuNS0xNi44LTE2LjhTOS42IDEwMiAxOC44IDEwMnMxNi44IDcuNSAxNi44IDE2LjgtNy41IDE2LjgtMTYuOCAxNi44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0uMSAxNTBoMTgwLjR2NDEuMUguMVYxNTB6Ii8+PGc+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTY5IDE2My41aDEwLjZsLTUuNi05LTEwLjIgMTYuM2gtNC43bDEyLjUtMTkuNWMuNS0uOCAxLjQtMS4zIDIuNC0xLjNzMS45LjUgMi40IDEuMmwxMi41IDE5LjZoLTQuN2wtMi4yLTMuNkg3MS40bC0yLjQtMy43em00OC41IDMuN3YtMTdoLTR2MTguNmMwIC41LjIgMSAuNiAxLjRzLjkuNiAxLjUuNmgxOC4xbDIuMy0zLjZoLTE4LjV6TTUyIDE2NC4xYzMuOCAwIDctMy4xIDctNyAwLTMuOC0zLjEtNy03LTdIMzQuN3YyMC42aDR2LTE3aDEzLjFjMS44IDAgMy4zIDEuNSAzLjMgMy4zcy0xLjUgMy4zLTMuMyAzLjNINDAuNmwxMS44IDEwLjNoNS44bC04LTYuNyAxLjguMnptLTQxLjcgNi43Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDEyYzUuNyAwIDEwLjMgNC42IDEwLjMgMTAuM3MtNC42IDEwLjMtMTAuMyAxMC4zaC0xMnptMTEuNy0zLjZjMy43IDAgNi43LTMgNi43LTYuN3MtMy02LjctNi43LTYuN0gxMC42Yy0zLjcgMC02LjcgMy02LjcgNi43czMgNi43IDYuNyA2LjdIMjJ6bTc1LjIgMy42Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDE0LjJsLTIuMyAzLjZIOTcuNWMtMy43IDAtNi43IDMtNi43IDYuN3MzIDYuNyA2LjcgNi43aDE0LjNsLTIuMyAzLjZIOTcuMnptNDguNC0zLjZjLTMgMC01LjYtMi02LjQtNC44aDE2LjlsMi4zLTMuNmgtMTkuM2MuOC0yLjggMy40LTQuOSA2LjQtNC45aDExLjZsMi4zLTMuNmgtMTQuMmMtNS43IDAtMTAuMyA0LjYtMTAuMyAxMC4zczQuNiAxMC4zIDEwLjMgMTAuM2gxMi4ybDIuMy0zLjYtMTQuMS0uMXptMTYuMS0xNC44YzAtMSAuOC0xLjggMS44LTEuOHMxLjguOCAxLjggMS44LS44IDEuOC0xLjggMS44LTEuOC0uOC0xLjgtMS44em0xLjggMi4zYzEuMyAwIDIuMy0xIDIuMy0yLjNzLTEtMi4zLTIuMy0yLjMtMi4zIDEtMi4zIDIuMyAxLjEgMi4zIDIuMyAyLjN6bS0uMi0zLjdjLjQgMCAuNSAwIC43LjEuNS4yLjUuNi41Ljd2LjJjMCAuMS0uMS4zLS4zLjRsLS4xLjEuNiAxLjFoLS43bC0uNS0xaC0uNHYxaC0uNVYxNTFoLjd6bS4yIDEuMmMuMiAwIC4zIDAgLjQtLjIgMC0uMS4xLS4xLjEtLjJzLS4xLS4zLS4yLS4zaC0uNnYuN2guM3oiLz48L2c+PGc+PGNpcmNsZSBmaWxsPSIjRDgwMDAwIiBjeD0iMTE4LjgiIGN5PSIxOS44IiByPSIxOC44Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTExMy41IDMuOWgxMC40djM4LjZoLTEwLjRWMy45eiIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMy40OCAzMC43MjYpIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iJ0FyaWFsLUJvbGRNVCciIGZvbnQtc2l6ZT0iMzEuMjc2Ij4hPC90ZXh0PjwvZz48L3N2Zz4=");
    background-position: 0 -42px;
    background-repeat: no-repeat;
    background-size: 360%;
    position: absolute;
    left: 0;
}

label{
    /* border: 1px solid red; */
    display: block;
    line-height: 3.2rem;
    position: absolute;
    width: 80%;
    text-align: center; 
    z-index: 3;
    top: 3px;
    font-size: 1.6rem;
    font-family: Arial;
    margin: 0 30px;
    color: rgb(105,138,138);
    /* transform: translate(0,-25px) scale(0.8); */
    transition: transform 0.15s;
}
.label1{
    /* border: 1px solid red; */
    display: block;
    position: absolute;
    width: 80%;
    text-align: center; 
    z-index: 3;
    top: 3px;
    font-size: 1.6rem;
    font-family: Arial;
    color: rgb(52, 61, 63);
    transform: translate(0,-30px) scale(0.8);
    transition: transform 0.15s;
}
/* label .label1{
    top: 261px;
} */

#infoId,#infoPsw{
    display: block;
    position: absolute;
    width: 3.3rem;
    height: 3.3rem;
    /* top:10px; */
    left: 320px;
    /* text-indent: -5000px; */
    /* overflow: hidden; */
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjUuOCIgaGVpZ2h0PSIxNzMuMyIgdmlld0JveD0iMCAwIDE2NS44IDE3My4zIj48cGF0aCBmaWxsPSIjOEFBREJFIiBkPSJNMzguOCAzM2MtLjMtMi4xLTEuNi0zLjktMy41LTQuOGwtOS44LTQuNmMwIC4xLTEgNC4zLTUuNyA2LjgtNC44LTIuNS01LjctNi43LTUuNy02LjhsLTkuOCA0LjZDMi40IDI5LjIgMS4xIDMxIC44IDMzTDAgNDEuNmgzOS4zbC0uNS04LjZ6TTEyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0MyOC4yIDU1LjEgMjMgNTAgMTYuNyA1MFM1LjIgNTUuMiA1LjIgNjEuNXY2LjNIMHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek0yMyA2Ny44SDEwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTMjMgNTggMjMgNjEuNXY2LjN6Ii8+PHBhdGggZmlsbD0iIzMyNEI1QyIgZD0iTTg4LjggMzNjLS4zLTIuMS0xLjYtMy45LTMuNS00LjhsLTkuOC00LjZjMCAuMS0xIDQuMy01LjcgNi44LTQuOC0yLjUtNS43LTYuNy01LjctNi44bC05LjggNC42Yy0xLjkuOS0zLjIgMi43LTMuNSA0LjhsLS44IDguNmgzOS4zbC0uNS04LjZ6TTYyLjQgMTIuOGwuMyAyLjJjLjEuNy43IDEuMyAxLjQgMS4zLjggNS41IDQuOSA1LjcgNS42IDUuNy42IDAgNC44LS4yIDUuNi01LjcuNyAwIDEuNC0uNSAxLjUtMS4zbC4zLTIuMmMuMS0uNi0uMi0xLjItLjctMS41LjItLjkuNS0yLjcuNS00LjIgMC0yLjctMi40LTUuNC01LjYtNS43bC0xLTEuNGMtNy43LjQtNy43IDYuNy03LjcgNi43di44YzAgMS40LjMgMyAuNSAzLjktLjUuMi0uOC44LS43IDEuNHptMjEgNzcuN1Y2Ny44aC01LjJ2LTYuM0M3OC4yIDU1LjEgNzMgNTAgNjYuNyA1MHMtMTEuNSA1LjItMTEuNSAxMS41djYuM0g1MHYyMi43bTE4LjYtMTAuOXY0LjJjMCAxLS44IDEuOS0xLjkgMS45cy0xLjktLjgtMS45LTEuOXYtNC4yYy0xLjEtLjYtMS45LTEuOC0xLjktMy4yIDAtMi4xIDEuNy0zLjcgMy43LTMuN3MzLjcgMS43IDMuNyAzLjdjLjEgMS4zLS42IDIuNS0xLjcgMy4yek03MyA2Ny44SDYwLjR2LTYuM2MwLTMuNSAyLjgtNi4zIDYuMy02LjNTNzMgNTggNzMgNjEuNXY2LjN6TTY4LjggMTAwYy0xMC40IDAtMTguOCA4LjQtMTguOCAxOC44czguNCAxOC44IDE4LjggMTguOCAxOC44LTguNCAxOC44LTE4LjhTNzkuMiAxMDAgNjguOCAxMDB6bTIuMSAzMGgtNC4ydi0xNGg0LjJ2MTR6bTAtMTYuOGgtNC4yVjEwOWg0LjJ2NC4yeiIvPjxwYXRoIGZpbGw9IiM0NzVDNkMiIGQ9Ik0xNi43IDEzMGg0LjJ2LTE0aC00LjJ2MTR6bTAtMjF2NC4yaDQuMlYxMDloLTQuMnoiLz48cGF0aCBmaWxsPSIjNDc1QzZDIiBkPSJNMTguOCAxMDBDOC40IDEwMCAwIDEwOC40IDAgMTE4LjhzOC40IDE4LjggMTguOCAxOC44IDE4LjgtOC40IDE4LjgtMTguOFMyOS4yIDEwMCAxOC44IDEwMHptMCAzNS42Yy05LjMgMC0xNi44LTcuNS0xNi44LTE2LjhTOS42IDEwMiAxOC44IDEwMnMxNi44IDcuNSAxNi44IDE2LjgtNy41IDE2LjgtMTYuOCAxNi44eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0uMSAxNTBoMTgwLjR2NDEuMUguMVYxNTB6Ii8+PGc+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTY5IDE2My41aDEwLjZsLTUuNi05LTEwLjIgMTYuM2gtNC43bDEyLjUtMTkuNWMuNS0uOCAxLjQtMS4zIDIuNC0xLjNzMS45LjUgMi40IDEuMmwxMi41IDE5LjZoLTQuN2wtMi4yLTMuNkg3MS40bC0yLjQtMy43em00OC41IDMuN3YtMTdoLTR2MTguNmMwIC41LjIgMSAuNiAxLjRzLjkuNiAxLjUuNmgxOC4xbDIuMy0zLjZoLTE4LjV6TTUyIDE2NC4xYzMuOCAwIDctMy4xIDctNyAwLTMuOC0zLjEtNy03LTdIMzQuN3YyMC42aDR2LTE3aDEzLjFjMS44IDAgMy4zIDEuNSAzLjMgMy4zcy0xLjUgMy4zLTMuMyAzLjNINDAuNmwxMS44IDEwLjNoNS44bC04LTYuNyAxLjguMnptLTQxLjcgNi43Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDEyYzUuNyAwIDEwLjMgNC42IDEwLjMgMTAuM3MtNC42IDEwLjMtMTAuMyAxMC4zaC0xMnptMTEuNy0zLjZjMy43IDAgNi43LTMgNi43LTYuN3MtMy02LjctNi43LTYuN0gxMC42Yy0zLjcgMC02LjcgMy02LjcgNi43czMgNi43IDYuNyA2LjdIMjJ6bTc1LjIgMy42Yy01LjcgMC0xMC4zLTQuNi0xMC4zLTEwLjNzNC42LTEwLjMgMTAuMy0xMC4zaDE0LjJsLTIuMyAzLjZIOTcuNWMtMy43IDAtNi43IDMtNi43IDYuN3MzIDYuNyA2LjcgNi43aDE0LjNsLTIuMyAzLjZIOTcuMnptNDguNC0zLjZjLTMgMC01LjYtMi02LjQtNC44aDE2LjlsMi4zLTMuNmgtMTkuM2MuOC0yLjggMy40LTQuOSA2LjQtNC45aDExLjZsMi4zLTMuNmgtMTQuMmMtNS43IDAtMTAuMyA0LjYtMTAuMyAxMC4zczQuNiAxMC4zIDEwLjMgMTAuM2gxMi4ybDIuMy0zLjYtMTQuMS0uMXptMTYuMS0xNC44YzAtMSAuOC0xLjggMS44LTEuOHMxLjguOCAxLjggMS44LS44IDEuOC0xLjggMS44LTEuOC0uOC0xLjgtMS44em0xLjggMi4zYzEuMyAwIDIuMy0xIDIuMy0yLjNzLTEtMi4zLTIuMy0yLjMtMi4zIDEtMi4zIDIuMyAxLjEgMi4zIDIuMyAyLjN6bS0uMi0zLjdjLjQgMCAuNSAwIC43LjEuNS4yLjUuNi41Ljd2LjJjMCAuMS0uMS4zLS4zLjRsLS4xLjEuNiAxLjFoLS43bC0uNS0xaC0uNHYxaC0uNVYxNTFoLjd6bS4yIDEuMmMuMiAwIC4zIDAgLjQtLjIgMC0uMS4xLS4xLjEtLjJzLS4xLS4zLS4yLS4zaC0uNnYuN2guM3oiLz48L2c+PGc+PGNpcmNsZSBmaWxsPSIjRDgwMDAwIiBjeD0iMTE4LjgiIGN5PSIxOS44IiByPSIxOC44Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTExMy41IDMuOWgxMC40djM4LjZoLTEwLjRWMy45eiIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMy40OCAzMC43MjYpIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iJ0FyaWFsLUJvbGRNVCciIGZvbnQtc2l6ZT0iMzEuMjc2Ij4hPC90ZXh0PjwvZz48L3N2Zz4=");
    background-position: 0 -82px;
    background-repeat: no-repeat;
    background-size: 360%;
    position: absolute;
    z-index: 4;
}


.infoContent{
    display: inline-block;
    position: absolute;
    left: 45px;
    top: -10px;
    width: 200px;
    box-shadow: 5px 5px 13px rgb(112, 112, 112);
    background-color: #324b5c;
    padding:15px 25px;
    color: white;
    font:14px/1.5 Arial,'\5b8b\4f53',sans-serif;
    /* font-size: 1.1rem;
    font-family: Arial !important; */
    letter-spacing: 1px;
    cursor:default;
    opacity: 0;
    transition: opacity 0.6s !important;
    -webkit-transition: opacity 0.6s !important;
    z-index: 101;
}   
.graphic::before{
    content: "";
    border-style: solid;
    border-width: 10px 10px 10px 0;
    border-color: transparent #324b5c transparent transparent ;
    position: absolute;
    left: -10px;
    top: 18px;
}
#loginzone .idInfoChange{
    background-position: -43px -82px !important;
    cursor: pointer;
    /* color: red; */
}

#loginzone .pswInfoChange{
    background-position: -43px -82px !important;
    cursor: pointer;
    /* color: red; */

}



#username,#psw{
    /* text-indent: 1.5rem; */
    margin-left: 70px;
    height: 2.5em;
    border: none;
}
ul input{
    position: absolute;
    width: 70%;
    margin-top: 2px;
    text-align: center;
    /* height: 2em; */
    /* border: 1px,solid,#f40; */
    background: none;
    outline: none;
    font-size: 1.3rem;
    /* margin-bottom: 2px; */

}

.loginError{
    height: 3rem;
    width: 70%;
    text-align: center;
    color: red;
    font: 1em sans-serif;
    text-align: center;
    margin: 0 auto;
}
.loginError p{
    width: 100%;
    text-align: center;
    margin-top: 5px;
}
.loginButton{
    display:block;
    height: 5rem;
    width: 80%;
    margin: 0 auto 15px;
    border: none;
    background-color: #1f4f82;
    color: #fff;
    font-size: 2rem;
    font-family: Arial;
    transition: background-color 0.35s;
    outline: none;
}
.loginButton:hover{
    background-color: #2f73a0;
    cursor: pointer;
}
.help{
    width: 100%;
    margin: 5px auto;
    padding: 2px;
}
.help h3{
    text-align: center;
    color:#2f73a0;
    font-size: 1.4rem;
    font-weight: bold;
}
</style>
