<template>
    <div>
        <h3>Blogs</h3>
        <div class="d-flex p-2 text-left" v-for="blog in blogs" :key="blog.id">
            <div>
                <div>{{ blog.title }}</div>
                <div
                    v-html="$options.filters.truncate(blog.description, 20)"
                ></div>
            </div>
            <div class="p-2 ml-auto my-auto">
                <router-link :to="`/blogs/${blog._id}`" class="mr-2">
                    <button>
                        <b-icon icon="eye"></b-icon>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'PublicBlogs',
    computed: mapGetters(['blogs']),
    created() {
        this.getPublicBlogs()
    },
    methods: {
        ...mapActions(['getPublicBlogs'])
    }
}
</script>

<style></style>
