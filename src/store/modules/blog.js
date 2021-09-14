import axios from 'axios'
import router from '../../router'
import { apiUrl } from '../../util/constUtil'

const blogModule = {
    state: {
        currentBlog: null,
        blogs: []
    },
    getters: {
        blogs: state => state.blogs,
        currentBlog: state => state.currentBlog
    },
    actions: {
        async getBlogs({ commit }) {
            try {
                const response = await axios.get(`${apiUrl}/blogs`)
                commit('GET_BLOGS', response.data)
            } catch (error) {
                console.log('error', error)
            }
        },
        async addBlog({ commit }, blogInput) {
            try {
                const response = await axios.post(`${apiUrl}/blogs`, blogInput)
                commit('ADD_BLOG', response.data)
            } catch (error) {
                console.log('error', error)
            }
        },
        async findBlogById({ commit }, blogId) {
            try {
                const response = await axios.get(`${apiUrl}/blogs/${blogId}`)
                commit('FIND_BLOG_BY_ID', response.data)
            } catch (error) {
                console.log('error', error)
            }
        },
        async updateBlogById({ commit }, blogUpdateInput) {
            try {
                const response = await axios.put(
                    `${apiUrl}/blogs/${blogUpdateInput._id}`,
                    blogUpdateInput
                )
                commit('UPDATE_BLOG_BY_ID', response.data)
            } catch (error) {
                console.log('error', error)
            }
        },
        async deleteBlog({ commit }, blogId) {
            try {
                await axios.delete(`${apiUrl}/blogs/${blogId}`)
                commit('DELETE_BLOG', blogId)
            } catch (error) {
                console.log('error', error)
            }
        }
    },
    mutations: {
        GET_BLOGS(state, response) {
            state.blogs = response.blogs
        },
        ADD_BLOG(state, response) {
            state.blogs.unshift(response.blog)
            router.push('/portal/blog-listing')
        },
        FIND_BLOG_BY_ID(state, response) {
            state.currentBlog = response.blog
        },
        UPDATE_BLOG_BY_ID(state, response) {
            state.blogs = state.blogs.map(blog => {
                if (blog._id === response.blog._id) {
                    return response.blog
                } else {
                    return blog
                }
            })
            router.push('/portal/blog-listing')
        },
        DELETE_BLOG(state, blogId) {
            state.blogs = state.blogs.filter(blog => blog._id !== blogId)
            router.push('/portal/blog-listing')
        }
    }
}

export default blogModule
