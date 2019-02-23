<template>
    <div class="theater">
        <div class="columns notification">
            <div class="column">
                <!-- <p>{{location}}</p> -->
                <h1 class="is-size-2 has-text-left">{{theaters[location.locationid].name}}</h1>
                <room v-for="room in movies[movieID].locations" :key="room" :roomID="room"></room>
            </div>
        </div>
    </div>
</template>
<script>
import movies from "../../assets/data/movies.js";
import theaters  from '../../assets/data/theaters.js'
import room from './room.vue'
export default {
    name: 'theater',
    components:{
        room
    },
    data(){
        return{
            movies: movies,
            theaters: theaters
        }
    },
    props: ['location', 'movieID']

}
</script>
<style scoped>
.theater{
    margin-bottom: 1.5em;
    /* overflow: hidden; */
}
</style>
