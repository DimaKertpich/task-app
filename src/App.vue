<template>
  <div>
    <dv-first v-if="curretnComp == 1" @firstStep="firstStep"></dv-first>
    <dv-second v-if="curretnComp == 2" 
               @secondStep="secondStep"
               @sendData="sendData"
               @prevStep="prevStep"
               >
    </dv-second>
    <dv-third v-if="curretnComp == 3"></dv-third>
  </div>
</template>

<script>
import first from './components/first-step.vue'
import second from './components/second-step.vue'
import third from './components/third-step.vue'
import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {
    'dv-first' : first,
    'dv-second' : second,
    'dv-third' : third
  },
  
  data(){
    return{
      curretnComp: 1,
      fieldOne: '',
      fieldTwo: ''
    }
  },

  methods: {
      firstStep(value){
        this.fieldOne = value;
        this.curretnComp++;
      },

      secondStep(value){
        this.fieldTwo = value;
        console.log(this.fieldTwo);
      },

      sendData(){

        this.$apollo.mutate({
          mutation: gql`mutation submit($numb: Int, $text: String){
            insert_numbText(objects: [{
              numb: $numb
              text: $text
            }]){
              returning{
                id
              }
            }
          }`,
          variables:{
            numb: this.fieldOne,
            text: this.fieldTwo
          }
        })

        this.curretnComp++;
      },

      prevStep(){
        this.curretnComp--;
      }
  }
  
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}

</style>

