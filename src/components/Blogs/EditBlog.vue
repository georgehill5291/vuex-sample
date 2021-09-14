<template>
    <div class="add-blog container">
        <h2>Edit Blog</h2>
        <form class="col-md-6 mx-auto" @submit="onEditBlog">
            <div class="form-group text-left">
                <label>Title</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="currentBlog.title"
                />
            </div>

            <div class="form-group text-left">
                <label>Description</label>
                <ckeditor
                    :editor="editor"
                    v-model="currentBlog.description"
                    :config="editorConfig"
                ></ckeditor>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block mt-2">
                Update
            </button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/portal/blog-listing"
                    ><button>Back</button></router-link
                >
            </p>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
export default {
    name: 'EditBlog',
    beforeCreate() {
        this.$store.dispatch('findBlogById', this.$route.params.id)
    },
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            }
        }
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
