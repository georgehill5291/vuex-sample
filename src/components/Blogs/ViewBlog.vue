<template>
    <div class="text-left ml-3">
        <h2>{{ currentBlog.title }}</h2>
        <div v-html="currentBlog.description"></div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ViewBlog',
    beforeCreate() {
        this.$store.dispatch('findBlogById', this.$route.params.id)
    },
    computed: mapGetters(['currentBlog']),
    methods: {
        ...mapActions(['updateBlogById']),
        onEditBlog(event) {
            event.preventDefault()
            this.updateBlogById({
                _id: this.currentBlog._id,
                title: this.currentBlog.title,
                description: this.currentBlog.description
            })
        }
    }
}
</script>

<style></style>
