<template>
    <div>
        <Carouselmovie>a</Carouselmovie>
        <div class="container is-fluid">
            <!-- Main container -->
            <div class="columns is-centered search">
                <div class="cloumn is-half">
                    <div class="control has-icons-right searchio">
                        <input class="input is-hovered" type="text" placeholder="Search Movie ...">
                        <span class="icon is-small is-right">
                        <font-awesome-icon icon="bookmark" class="bookmark"/>                        
                        </span>
                    </div>
                </div>
            </div>
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <font-awesome-icon icon="bookmark" class="bookmark"/>
                    </div>
                    <div class="level-item">
                        <h2 class="title is-2">Recommend</h2>
                    </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                    <div class="level-item">
                        <h4 class="title is-4">แนวภาพยนตร์</h4>
                    </div>
                    <div class="level-item">
                        <div class="select is-rounded ">
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
                    </div>                

                </div>
            </nav>
            <div class="columns is-multiline is-6 is-centered">
                <div class="column is-4" v-for="n in 9" :key="n">
                    <moviecard></moviecard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Carouselmovie from './Carouselmovie.vue'
    import moviecard from './movie/moviecard.vue'
    export default {
        name: 'index',
        components: {
            Carouselmovie,
            moviecard
        }
    }
</script>
<style scoped>
.bookmark{
    font-size: 30px;    
}
.red{
    background: red;
}
.green{
    background: green;
}
.search{
    margin-top: 10px;
}
.searchio{
    width: 400px;
}
</style>

