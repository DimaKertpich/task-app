<template>
    <div class="second">

        <dv-loading v-if="load == true" @onClick="startLoad"></dv-loading>

        <div class="second__content">
            <div class="second__content-title">
                <h3>ASYNCHRONUS</h3>

                <p>Tell us more</p>
            </div>

            <div class="second__content-response">
                <input @change="saveRespone" v-model="responseUser" placeholder="text input field">
            </div>

            <div class="second__content-btn">
                <button @click="prevStep" type="button">Prev</button>
                <button @click="sendData" type="button">NEXT</button>
            </div>
        </div>
    </div>
</template>

<script>

import loading from './loading-step.vue'

export default{

    components:{
        'dv-loading' : loading
    },

    data(){
        return{
            responseUser: '',
            load: false
        }
    },

    methods:{
        saveRespone(){
            this.$emit('secondStep', this.responseUser);
        },

        sendData(){
            setTimeout(() =>{
                this.$emit('sendData');
                this.load = true
            },4000)
            this.load = true
        },

        prevStep(){
            setTimeout(() =>{
                this.$emit('prevStep');
                this.load = true
            },4000)
            this.load = true
        }
         
    }
}

</script>

<style>

.second{
    width: 100%;
    height: 100vh;
    background: #F1E7CF;
    display: flex;
    justify-content: center;
}

.second__content{
  width: 600px;
  height: 305px;
  border: 1px solid #000;
  margin-top: 120px;
  text-align: center;
}

.second__content-title h3{
  font-size: 24px;
  color: #00835C;
  font-family: 'Jost', sans-serif;
  font-weight: 900;
  margin-top: 33px;
}

.second__content-title p{
  font-size: 17px;
  color: #000;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  margin-top: 10px;
}

.second__content-response{
    margin-top: 50px;
}

.second__content-response input{
    font-size: 18px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    width: 310px;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    border: none;
    padding: 0 10px 0 10px;
}

.second__content-response input::placeholder{
    font-size: 18px;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    color: #000;
    text-align: center;
}

.second__content-btn{
    width: 390px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
}

.second__content-btn button{
  font-size: 18px;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  color: #fff;
  width: 135px;
  height: 38px;
  border-radius: 5px;
  border: none;
  background: #00835C;
  cursor: pointer;
  margin-top: 54px;
}


</style>