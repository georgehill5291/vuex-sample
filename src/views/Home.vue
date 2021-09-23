<template>
    <div class="home">
        <RunningText />
        <CarouselBanner />
        <AboutTechnologies />
        <CarouselBlog />
    </div>
</template>

<script>
// @ is an alias to /src
import CarouselBanner from '@/components/Banner/CarouselBanner.vue'
import CarouselBlog from '@/components/Blogs/CarouselBlog.vue'
import RunningText from '@/components/shared/RunningText.vue'
import AboutTechnologies from '@/components/shared/AboutTechnologies.vue'
export default {
    name: 'Home',
    components: { CarouselBanner, CarouselBlog, RunningText, AboutTechnologies }
}
</script>
