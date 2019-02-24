<template>
    <div>
        <p>moviebooking</p>
        <p>{{title}}</p>
        <ul v-for="items in users" :key="items">
            <li v-for="i in items" :key="i">{{i}}</li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'moviebooking',
    computed: {
        ...mapState([
        'users',
        ...mapActions([

        ])
    ]),
    //other stuff
    }
}
</script>
<style scoped>

</style>
