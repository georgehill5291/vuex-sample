<template>
    <div class="home">
        <RunningText />
        <CarouselBanner />
        <CarouselBlog />
    </div>
</template>

<script>
// @ is an alias to /src
import CarouselBanner from '@/components/Banner/CarouselBanner.vue'
import CarouselBlog from '@/components/Blogs/CarouselBlog.vue'
import RunningText from '@/components/shared/RunningText.vue'
export default {
    name: 'Home',
    components: { CarouselBanner, CarouselBlog, RunningText }
}
</script>
