<template>
    <div class="carousel-blog pb-3">
        <h3 class="text-left pl-4 pt-3 text-white font-weight-bold">Noted</h3>
        <div id="carouselBlog" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <!-- start -->
                <div
                    :class="row == 1 ? 'carousel-item active' : 'carousel-item'"
                    v-for="row in nrows"
                    :key="row"
                >
                    <div class="cards-wrapper">
                        <template v-for="(col, i) in 3">
                            <div
                                class="card"
                                v-bind:key="col"
                                v-if="
                                    blogs[(row - 1) * 3 + i] &&
                                        blogs[(row - 1) * 3 + i].title &&
                                        blogs[(row - 1) * 3 + i].description
                                "
                            >
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {{ blogs[(row - 1) * 3 + i].title }}
                                    </h5>
                                    <p
                                        class="card-text"
                                        v-html="
                                            $options.filters.truncate(
                                                blogs[(row - 1) * 3 + i].description,
                                                40
                                            )
                                        "
                                    ></p>
                                    <router-link
                                        :to="`/blogs/${blogs[(row - 1) * 3 + i]._id}`"
                                        class="btn btn-primary"
                                    >
                                        Watch more
                                    </router-link>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- end -->
            </div>
            <a class="carousel-control-prev" href="#carouselBlog" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselBlog" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CarouselBlog',
    computed: {
        ...mapGetters(['blogs']),
        nrows() {
            return Math.floor((this.blogs.length - 1) / 3) + 1
        }
    },
    created() {
        this.getPublicBlogs()
    },
    methods: {
        ...mapActions(['getPublicBlogs'])
    }
}
</script>

<style scoped lang="scss">
.cards-wrapper {
    display: flex;
    justify-content: center;

    .card-wrapper-2 {
        flex: 1;
        width: 100vw;
    }

    .card {
        border-radius: 10px;
        flex: 1;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        height: 200px;
    }

    a.btn {
        margin-top: auto;
    }
}
.card img {
    max-width: 100%;
    max-height: 100%;
}
.card {
    margin: 0 0.5em;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
    border: none;
    border-radius: 0;
}
.carousel-inner {
    padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
    background-color: #e1e1e1;
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.carousel-blog {
    background: url('https://g-node-test.s3.ap-southeast-1.amazonaws.com/5eb3545872f01216421f2e54a1705d46-banner');
}

@media (min-width: 768px) {
    .card img {
        height: 11em;
    }
}
</style>
