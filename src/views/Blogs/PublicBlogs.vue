<template>
    <div class="public-blogs">
        <h3>Blogs</h3>

        <div class="row">
            <div class="col-md-4">
                <div class="form-group text-left px-2">
                    <label class="text-left">Title</label>
                    <input v-model="title" placeholder="tilte" class="form-control" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 mx-2 text-left">
                <button class="" @click="onSubmit">Find</button>
                <button class="mx-2" @click="onReset">Reset</button>
            </div>
            <div class="col-md-4 mx-2 text-left"></div>
        </div>

        <div v-for="blog in blogs" :key="blog.id">
            <div class="d-flex text-left blog-item">
                <div class="p-2">
                    <div class="h4">{{ blog.title }}</div>
                    <div v-html="$options.filters.truncate(blog.description, 20)"></div>
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

        <nav aria-label="Page navigation example" class="mx-2">
            <ul class="pagination">
                <li class="page-item" v-if="pagination && pagination.hasPrevPage">
                    <a
                        class="page-link"
                        href="javascript:void(0)"
                        @click="handlePagination(pagination.prevPage)"
                        >Previous</a
                    >
                </li>
                <template v-if="pagination">
                    <li class="page-item" v-for="item in pagination.totalPages" :key="item">
                        <a
                            class="page-link"
                            href="javascript:void(0)"
                            @click="handlePagination(item)"
                            >{{ item }}</a
                        >
                    </li>
                </template>
                <li class="page-item" v-if="pagination && pagination.hasNextPage">
                    <a
                        class="page-link"
                        href="javascript:void(0)"
                        @click="handlePagination(pagination.nextPage)"
                        >Next</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'PublicBlogs',
    computed: mapGetters(['blogs', 'pagination']),
    data() {
        return {
            title: ''
        }
    },
    created() {
        this.getPublicBlogs({ title: '', offset: 0, length: 5 })
    },
    methods: {
        ...mapActions(['getPublicBlogs']),
        copyClipboard(blogId) {
            const full = location.protocol + '//' + location.host
            var blogUrl = `${full}/blogs/${blogId}`
            try {
                navigator.clipboard.writeText(blogUrl)
                alert('Copied the text: ' + blogUrl)
            } catch (error) {
                alert('Copied the text failed')
            }
        },
        onSubmit(event) {
            event.preventDefault()
            this.getPublicBlogs({ title: this.title, offset: 0, length: 5 })
        },
        onReset(event) {
            event.preventDefault()
            this.title = ''
            this.onSubmit(event)
        },
        handlePagination(page) {
            // event.preventDefault()
            this.getPublicBlogs({ title: this.title, offset: (page - 1) * 5, length: 5 })
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
