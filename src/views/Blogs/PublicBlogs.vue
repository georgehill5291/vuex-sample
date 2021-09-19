<template>
    <div class="public-blogs">
        <h3>Blogs</h3>
        <div v-for="blog in blogs" :key="blog.id">
            <div class="d-flex text-left blog-item">
                <div class="p-2">
                    <div class="h4">{{ blog.title }}</div>
                    <div
                        v-html="$options.filters.truncate(blog.description, 20)"
                    ></div>
                </div>
                <div class="view-button-wrapper">
                    <div @click="copyClipboard(blog._id)">
                        <div class="link-button">
                            <b-icon icon="link"></b-icon>
                        </div>
                    </div>
                    <router-link :to="`/blogs/${blog._id}`">
                        <div class="view-button">
                            <b-icon icon="eye"></b-icon>
                        </div>
                    </router-link>
                </div>
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
        ...mapActions(['getPublicBlogs']),
        copyClipboard(blogId) {
            const full = location.protocol + '//' + location.host
            var blogUrl = `${full}/blogs/${blogId}`
            try {
                alert('Copied the text: ' + blogUrl)
                navigator.clipboard.writeText(blogUrl)
            } catch (error) {
                alert('Copied the text failed')
            }
        }
    }
}
</script>

<style>
.blog-item {
    border: 1px solid black;
    border-radius: 8px;
    margin: 10px 10px;
    height: 100px;
}

.view-button-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
}

.view-button {
    width: 50px;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 0 8px 8px 0;
    background-color: #73d672;
    color: black;
}

.link-button {
    width: 50px;
    align-items: center;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 0;
    background-color: #5f8daa;
    color: black;
}

.view-button:hover,
.link-button:hover {
    color: white;
}
</style>
