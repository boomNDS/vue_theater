<template>
    <div>
        <carousel :perPage="1" :loop=true :autoplay="true" :autoplayTimeout="2500" :autoplayHoverPause="true">
        <slide>
            <img src="https://lh3.googleusercontent.com/PzTevlWemgnwBj30NFLHWluuIZ-8x0_n8J2tkMV1ujNSnoSqhVFjrrdlnxpzFaRmTw3cIa6Gm4Ds819L25P_=w888">
        </slide>
        <slide>
            <img src="https://lh3.googleusercontent.com/PzTevlWemgnwBj30NFLHWluuIZ-8x0_n8J2tkMV1ujNSnoSqhVFjrrdlnxpzFaRmTw3cIa6Gm4Ds819L25P_=w888">
        </slide>
        <slide>
            <img src="https://lh3.googleusercontent.com/MeqOFdsVLXpbyV8OaEye4eXz32WztlCcOirta6cDOd71W2iZ3fY4DoZpbSVp92c_vtPtICMyELt3d3BufwAz=w888">
        </slide>
        <slide>
            <img src="https://lh3.googleusercontent.com/FmZPKM2cmEhKgsnKpFJwrrB4TimE8qkdbKQVkGUCDzbOnGpTCvjN14bAvjf0FBM7AwpT_tMh8hCYQLvq_sc=w888">
        </slide>
        </carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Carouselmovie',
    data() {
        return {
            msg: 'asd'
        }
    },
    components:{
        Carousel,
        Slide
    }
}
</script>
<style scoped>
img{
    max-width: 100%;
    height: 100%;
    margin: 0;
}
</style>
