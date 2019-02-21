<template>
    <div>
        <Carouselmovie>a</Carouselmovie>
        <div class="container is-fluid">
            <!-- Main container -->
            <div class="columns is-centered search">
                <div class="cloumn is-half">
                    <div class="control has-icons-right searchio">
                        <input class="input is-hovered" type="text" placeholder="Search Movie ..." v-model="searchText">
                        <span class="icon is-small is-right">
                        <font-awesome-icon icon="search" class="bookmark"/>                        
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
                            <select v-model="categories_seleted">
                                <option v-for="item in categories" :key="item.id">{{item.name}}</option>
                            </select>
                        </div>
                    </div>                

                </div>
            </nav>
            <!-- <p>{{whatCategories(categories_seleted)}}</p> -->
            <div class="columns is-multiline is-6">
                <div class="column is-3-desktop is-12-mobile" v-for="movie in showmovies" :key="movie.id">
                    <moviecard :title="movie.name.th" :types="movie.categories" :path="movie.poster"></moviecard>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Carouselmovie from './Carouselmovie.vue'
    import moviecard from './movie/moviecard.vue'
    import categories  from '../assets/data/categories.js'
    import movies  from '../assets/data/movies.js'
    export default {
        name: 'index',
        components: {
            Carouselmovie,
            moviecard
        },
        data: function () {
            return {
                buttons: [
                    { text: 'Save', method: this.save, disabled: !this.dataHasChanged }
                    ],
                categories: categories,
                movies: movies,
                searchText: "",
                categories_seleted: "Action",
                categories_id: 0,
                showmovies: movies
            }
        },
        methods: {
  
        },
        computed:{
          blogSearchResult(){
            return this.movies.filter(movie =>{
              let searchText = this.searchText.toLowerCase()
              let isMatchingtitleTH = movie.name.th.toLowerCase().includes(searchText)
              let isMatchingtitleEN = movie.name.en.toLowerCase().includes(searchText)
              return isMatchingtitleTH | isMatchingtitleEN
            })
            },
            whatCategories(){
            return this.categories.filter(categorie =>{
              let categories_seleted = this.categories_seleted.toLowerCase()
              let isMatching = categorie.name.toLowerCase().includes(categories_seleted)
              return isMatching
            })
            },
            CategorieResult(){
                return this.movies.filter(movie =>{
                    for(let i = 0; i < movie.categories.length;i++){
                        if(this.categories_id == 0){
                            return movie
                        }else if(movie.categories[i] == this.categories_id){
                            return movie
                        }
                    }
                })
            }
        },
        watch: {
            whatCategories(){
                this.categories_id = this.whatCategories[0].id
            },
            categories_id(){
                this.showmovies = this.CategorieResult
            },
            searchText(){
                this.showmovies = this.blogSearchResult
            }
            
        },
    }
</script>
<style scoped>
.bookmark{
    font-size: 30px;    
}
.search{
    margin-top: 10px;
}
.searchio{
    width: 400px;
}
</style>

