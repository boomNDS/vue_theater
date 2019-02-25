<template>
    <div class="room">
        <div class="container">
            <div class="columns">
                <div class="column is-2">
                    <div class="box">
                        <p>{{theaters[locationID].rooms[room.roomID].name}}</p>
                        <!-- <p>{{theaters[room.roomID].name}}</p> -->
                        <!-- <p>{{theaters[locationID].rooms[roomID]}}</p> -->
                    </div>
                </div>
                <div class="column is-10">
                        <!-- <p>{{room}}</p> -->
                <div id="ck-button" v-for="time in room.times" :key="time">
                <label>
                    <input type="radio" :value="time" v-model="time_sel" name="a" @change="emitEvent" ><span>{{time}}</span>
                </label>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import theaters  from '../../assets/data/theaters.js'
export default {
    name: 'room',
    props: ['room', 'locationID'],
    data(){
        return{
            time_sel: "",
            theaters: theaters
        }
    },
    methods:{
          emitEvent(){
            // this.$emit('time', this.time_sel)
            this.$emit('time', {'time_sel':this.time_sel,'roomname': this.theaters[this.locationID].rooms[this.room.roomID].name})
          }
    }
}
</script>
<style scoped>
.box{
    background: #232323;
    color: #fff;
    margin-left: 10px;
}
.container{
    background: #e5e5e5;
}
.room{
    margin-top: 20px;
    margin-bottom: 20px;
}
#ck-button {
    margin:4px;
    background-color:#EFEFEF;
    border-radius:4px;
    border:1px solid #D0D0D0;
    overflow:auto;
    float:left;
}

#ck-button label {
    float:left;
    width:4.0em;
}

#ck-button label span {
    text-align:center;
    padding:3px 0px;
    display:block;
}

#ck-button label input {
    position:absolute;
    top:-20px;
}

#ck-button input:checked + span {
    background-color:#911;
    color:#fff;
}
input {
    visibility:hidden;
}
</style>
