<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by6">
            <img :src="path" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <h4 class="is-2">ชื่อเริ่อง : {{title}}</h4>
                <h4 class="is-2">แนวหนัง : <span class="tag is-dark" v-for="type in types" :key="type">{{(categories[type].name)}}</span></h4>
                <div class="is-grouped" v-if="showbtn">
                    <button class="button is-warning"><router-link :to="'/selectingmovie/' + id" class="btn">ดูรอบหนัง</router-link></button>
                    <button class="button is-info"><router-link :to="'/moviedetail/' + id" class="btn">รายละเอียด</router-link></button>
                    <!-- <router-link  class="navbar-item" to="/">About</router-link> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import categories  from '../../assets/data/categories.js'
export default {
    name: 'moviecard',
    data(){
        return{
            categories: categories
        }
    },
    methods: {

    },
    computed:{

    },
    watch:{
    },
    props: ['id','title', 'types', 'path', 'showbtn'],
}
</script>
<style scoped>
.card{
    width: auto;
    height: auto;
    border-radius: 5%;
    overflow: hidden;
}
.content h4{
    text-align: left;
}
.tag{
    margin: 1%;
}
.btn{
    color:#fff;
}
.button{
    margin-bottom: 5px;
}
</style>
