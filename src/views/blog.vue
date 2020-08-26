<template>
    <div class="blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <blogPosts />
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
import blogPosts from "@/components/blog/blogposts";
import blogSidebar from "@/components/blog/blogsidebar.vue";
export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "this is blog page"
        };
    },
    name: "Blog",
    components: {
        blogPosts,
        blogSidebar
    }
};
</script>
