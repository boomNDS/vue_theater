<template>
    <div class="seat" @click="isActive = !isActive" :class="[{ active: isActive }]">
        {{name}}
    </div>
</template>
<script>
export default {
    name: 'seat',
    props: ['name'],
    data(){
        return{
            isActive: false,
            list: [],
        }
    },
    mounted() {
      this.list = JSON.parse(localStorage.getItem('seats_sel'))
    },
    watch:{
        isActive(){
            if(this.isActive == true){
                this.list.push(this.name)
                localStorage.setItem('seats_sel', JSON.stringify(this.list))
            }else{
                let index = this.list.indexOf(this.name);
                this.list.splice(index, 1)
                localStorage.setItem('seats_sel', JSON.stringify(this.list))
            }
        }
    }
}
</script>
<style scoped>
.seat{
    width: 35px;
    height: auto;
    border-radius: 15px;
    background: #232323;
    color: #fff;
    text-align: center;
    padding: 3px;
    transition: 0.25s all;
}
.active{
    background: #FA7268;
}
</style>
