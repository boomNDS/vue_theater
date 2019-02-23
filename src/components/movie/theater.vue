<template>
    <div class="theater">
        <div class="columns notification">
            <div class="column">
                <p>{{theater[0].name}}</p>
                <!-- <p>{{theater}}</p> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'theater',
    data() {
        return{

        }
    },
    props: ['theater']

}
</script>
<style scoped>
.theater{
    margin-bottom: 1.5em;
}
</style>
