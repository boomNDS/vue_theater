<template>
    <div class="theater">
        <div class="columns notification">
            <div class="column">
                <h1 class="is-size-2 has-text-left"  @click="timesent()">{{theaters[location.locationID].name}}</h1>
                <room v-for="room in location.rooms" :key="room" :room="room" :locationID="location.locationID" @time="timeset"></room>
            </div>
        </div>
    </div>
</template>
<script>
import movies from "../../assets/data/movies.js";
import theaters  from '../../assets/data/theaters.js'
import room from './room.vue'
import { mapState} from "vuex";
export default {
    name: 'theater',
    components:{
        room
    },
    data(){
        return{
            movies: movies,
            theaters: theaters,
            time_sel: '',
            roomname: '',
        }
    },
    mounted() {
        localStorage.setItem('time_sel', this.time_sel)
        localStorage.setItem('roomname', this.roomname)
        localStorage.setItem('locationID', this.location.locationID)
    },
    methods:{
        timeset(event){
            this.time_sel = event.time_sel
            this.roomname = event.roomname
        },
        timesent(){
            this.$emit('timeall', this.time_sel)
        }
    },
    props: ['location', 'movieID'],
    watch:{
        time_sel(){
           localStorage.setItem('time_sel', this.time_sel)
            localStorage.setItem('locationID', this.location.locationID)
        },
        roomname(){
           localStorage.setItem('roomname', this.roomname)
        localStorage.setItem('locationID', this.location.locationID)

        }
    }

}
</script>
<style scoped>
.theater{
    margin-bottom: 1.5em;
    /* overflow: hidden; */
}
</style>
