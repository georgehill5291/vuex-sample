<template>
    <div class="container-fluid carousel-blog ">
        <h3 class="px-3 pt-3 text-left text-white">Noted</h3>
        <div class="text-left">
            <router-link :to="`/blogs`" class="btn btn-secondary text-left mx-3">
                View All
            </router-link>
        </div>

        <div class="owl-carousel owl-theme">
            <div v-for="item in blogs" :key="item._id">
                <div class="blog-item">
                    <div class="card m-3">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ item.title }}
                            </h5>
                            <p
                                class="card-text"
                                v-html="$options.filters.truncate(item.description, 80)"
                            ></p>
                        </div>
                        <router-link :to="`/blogs/${item._id}`" class="btn btn-primary">
                            Watch more
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import { mapActions, mapGetters } from 'vuex'
import Vue from 'vue'
export default {
    name: 'CarouselBlog',
    computed: {
        ...mapGetters(['blogs']),
        nrows() {
            return Math.floor((this.blogs.length - 1) / 3) + 1
        }
    },
    created() {
        this.getPublicBlogs({ title: '', offset: 0, length: 10 })
    },
    methods: {
        ...mapActions(['getPublicBlogs'])
    },
    watch: {
        blogs() {
            Vue.nextTick(function() {
                let owl = window.$('.owl-carousel')
                owl.owlCarousel({
                    items: 3,
                    singleItem: true,
                    loop: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3,
                            nav: false
                        },
                        1000: {
                            items: 5,
                            nav: true,
                            loop: false,
                            margin: 20
                        }
                    }
                })
            })
        }
    }
}
</script>

<style scoped lang="scss">
.carousel-blog {
    background: url('https://g-node-test.s3.ap-southeast-1.amazonaws.com/5eb3545872f01216421f2e54a1705d46-banner');
}

.blog-item {
    flex: 1;
    background: white;
    height: 100%;

    .card {
        border: none;
        height: 250px;
        justify-content: center;
        align-items: center;

        .card-body {
            word-break: break-word;
        }
    }

    a.btn {
        width: 100%;
        margin-top: auto;
    }
}
</style>
