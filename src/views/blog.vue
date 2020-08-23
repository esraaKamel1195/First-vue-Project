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
                        done
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogPosts from "@/components/blog/blogPosts.vue";
export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "this is blog page"
        };
    },
    name: "Blog",
    components: {
        blogPosts
    }
};
</script>
