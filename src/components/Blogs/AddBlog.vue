<template>
    <div class="add-blog container">
        <h2>Add Blog</h2>
        <form class="col-md-6 mx-auto" @submit="onSubmit">
            <div class="form-group text-left">
                <label>Title</label>
                <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="title"
                />
            </div>

            <div class="form-group text-left">
                <label>Description</label>
                <!-- <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="description"
                /> -->
                <ckeditor
                    :editor="editor"
                    v-model="editorData"
                    :config="editorConfig"
                ></ckeditor>
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block mt-2">
                Add
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
import { mapActions } from 'vuex'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    name: 'AddBlog',
    data() {
        return {
            title: '',
            description: '',
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    },
    methods: {
        ...mapActions(['addBlog']),
        onSubmit(event) {
            event.preventDefault()
            this.addBlog({
                title: this.title,
                description: this.editorData
            })
        }
    }
}
</script>

<style></style>
