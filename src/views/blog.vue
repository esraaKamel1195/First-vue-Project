<template>
    <div class="blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <blogPosts
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :date="post.date"
                            :content="post.content"
                            :author="post.author"
                            :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <blogSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogPosts from "../components/blogposts.vue";
import blogSidebar from "../components/blogsidebar.vue";
import JSONPosts from "../json/Blog_posts";

export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "this is blog page",
            posts: JSONPosts
        };
    },
    name: "Blog",
    components: {
        blogPosts,
        blogSidebar
    }
};
</script>
