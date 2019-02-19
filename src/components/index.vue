<template>
    <div>
        <Carouselmovie>a</Carouselmovie>
        <div class="container is-fluid">
            <!-- Main container -->
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
            <div class="columns is-multiline is-6">
                <div class="column is-4">
                    <moviecard></moviecard>
                </div>
                <div class="column is-4">
                    <moviecard></moviecard>
                </div>
                <div class="column is-4">
                    <moviecard></moviecard>
                </div>
                <div class="column is-4">
                    <moviecard></moviecard>
                </div>
                <div class="column is-4">
                    <moviecard></moviecard>
                </div>
                <div class="column is-4">
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
</style>

