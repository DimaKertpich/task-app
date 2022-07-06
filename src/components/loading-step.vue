<template>

    <div class="loading">
        <div :style="animation" class="loading__animation"></div>
    </div>

</template>

<script>

export default{
    
    data(){
        return{
            timer: 0,
            load: 0
        }
    },

    mounted(){
        
         setInterval(() => {
            if(this.timer != 4  ){
                this.timer++
                this.load += 25
            }
                    
        }, 700)  
    
    },

    computed:{
        animation(){
            return {
                width: this.load + '%',
                transition: 'ease-in'
            }
        }
    }
}

</script>

<style>

.loading{
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -174px;
    width: 360px;
    height: 15px;    
    border: 1px solid #000;
    border-radius: 5px;
}

.loading__animation{
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background: #00835C;
    border-radius: 3px;
}

</style>