<template>
    <div class="home">
        <CarouselBanner />
    </div>
</template>

<script>
// @ is an alias to /src
import CarouselBanner from '@/components/Banner/CarouselBanner.vue'
export default {
    name: 'Home',
    components: { CarouselBanner }
}
</script>
