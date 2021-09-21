<template>
    <div class="home">
        <CarouselBanner />
        <CarouselBlog />
    </div>
</template>

<script>
// @ is an alias to /src
import CarouselBanner from '@/components/Banner/CarouselBanner.vue'
import CarouselBlog from '@/components/Blogs/CarouselBlog.vue'
export default {
    name: 'Home',
    components: { CarouselBanner, CarouselBlog }
}
</script>
