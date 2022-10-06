<template>
    <div class="blog-listing">
        <h3 class="text-left ml-4">Blog Lising</h3>
        <div class="text-left ml-4">
            <router-link to="/portal/blog-listing/add">
                <div id="img_container">
                    <button class="button">Add</button>
                </div>
            </router-link>
        </div>
        <div class="p-2 portal-blog-item" v-for="blog in blogs" :key="blog.id">
            <div class="p-2 portal-blog-item-data">
                <div class="h4">{{ blog.title }}</div>
                <div
                    class="text-break"
                    v-html="$options.filters.truncate(blog.description, 100)"
                ></div>
            </div>
            <div class="view-button-wrapper">
                <router-link :to="`/blogs/${blog._id}`" class="mr-2">
                    <button>
                        <b-icon icon="eye"></b-icon>
                    </button>
                </router-link>
                <router-link :to="`/portal/blog-listing/edit/${blog._id}`" class="mr-2">
                    <button>
                        <b-icon icon="pencil"></b-icon>
                    </button>
                </router-link>
                <!-- <a href="javascript:void(0)">
                    <button @click="deleteBlog(blog._id)">
                        <b-icon icon="trash"></b-icon></button
                ></a> -->
            </div>

            <!-- <div class="col pr-0">
                <div class="card blog-card">
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <div class="p-10">
                                <h5 class="card-title">{{ blog.title }}</h5>
                                <p class="card-text">
                                    {{ blog.description }}
                                </p>
                            </div>
                            <div class="p-2 ml-auto my-auto">
                                <router-link
                                    :to="`/blogs/${blog._id}`"
                                    class="mr-2"
                                >
                                    <button>
                                        <b-icon icon="eye"></b-icon>
                                    </button>
                                </router-link>
                                <router-link
                                    :to="
                                        `/portal/blog-listing/edit/${blog._id}`
                                    "
                                    class="mr-2"
                                >
                                    <button>
                                        <b-icon icon="pencil"></b-icon>
                                    </button>
                                </router-link>

                                <button @click="deleteBlog(blog._id)">
                                    <b-icon icon="trash"></b-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'BlogListing',
    computed: mapGetters(['blogs']),
    created() {
        this.getBlogs()
    },
    methods: {
        ...mapActions(['getBlogs', 'deleteBlog'])
    }
}
</script>

<style>
.blog-card {
    text-align: left;
}

.portal-blog-item {
    display: flex;
    flex: 1;
    border-bottom: solid 1px black;
}

.portal-blog-item-data {
    flex: 1;
    text-align: left;
}

@media (max-width: 768px) {
    .portal-blog-item {
        display: block;
    }
}
</style>
