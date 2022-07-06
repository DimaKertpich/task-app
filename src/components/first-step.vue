<template>
  <div class="first">

    <dv-loading v-if="load == true" @onClick="startLoad"></dv-loading>

    <div class="first__content">
      <div class="first__content-title">
        <h3>ASYNCHRONUS</h3>

        <p>Would you recomend our services to other?</p>
      </div>

      <div class="first__content-assessment">
        <ul>
          <li @click="userСhoice = index + 1" v-for="(numb, index) in numbers" :key="index">
              {{ numb.value }}        
          </li>
        </ul>
      </div>
      <div class="first__content-btn">
        <button @click="sendInfo" :disable="numb > 5" type="button">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>

import loading from './loading-step.vue'

export default {
  components:{
    'dv-loading' : loading
  },
  data(){
    return{
      numbers: [
        {
          value: 1
        },
        {
          value: 2
        },
        {
          value: 3
        },
        {
          value: 4
        },
        {
          value: 5
        }
      ],
      userСhoice: true,
      load: false,
      numb: 0
    }
  },

  methods: {
    sendInfo(){
      setTimeout(() =>{
        this.$emit('firstStep', this.userСhoice);
      },4000)
      this.load = true
    }
  }
}
</script>


<style>

.first{
  width: 100%;
  height: 100vh;
  background: #F1E7CF;
  display: flex;
  justify-content: center;
}

.first__content{
  width: 600px;
  height: 305px;
  border: 1px solid #000;
  margin-top: 120px;
  text-align: center;
}

.first__content-title h3{
  font-size: 24px;
  color: #00835C;
  font-family: 'Jost', sans-serif;
  font-weight: 900;
  margin-top: 33px;
}

.first__content-title p{
  font-size: 17px;
  color: #000;
  font-family: 'Jost', sans-serif;
  font-weight: 600;
  margin-top: 10px;
}

.first__content-assessment ul{
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  width: 280px;
}

.first__content-assessment ul li{
  font-size: 18px;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  width: 46px;
  height: 40px;
  list-style: none;
  background: #DAA535;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
}

.first__content-btn button{
  font-size: 18px;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  color: #fff;
  width: 135px;
  height: 38px;
  border-radius: 5px;
  border: none;
  background: #00835C;
  margin-top: 54px;
  cursor: pointer;
}

</style>
