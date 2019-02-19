<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="../../assets/img/friendzone.jpg" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <p>{{path}}</p>
                <h4 class="is-2">ชื่อเริ่อง : {{title}}</h4>
                <h4 class="is-2">แนวหนัง : <span class="tag is-dark">{{types}}</span></h4>
                <div class="is-grouped">
                    <button class="button is-warning">ดูรอบหนัง</button>
                    <button class="button is-info">รายละเอียด</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'moviecard',
    data(){
        return{

        }
    },
    props: ['title', 'types', 'path']
}
</script>
<style scoped>
.card{
    width: 450px;
    height: auto;
    border-radius: 5%;
    overflow: hidden;
}
.content h4{
    text-align: left;
}
</style>
