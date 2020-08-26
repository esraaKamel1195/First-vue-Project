<template>
    <div class="post-box">
        <span class="post-views">15</span>
        <h3 class="post-title">Blog post title</h3>
        <span class="post-date">25-11-2019</span>
        <p class="post-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem,ipsum
            dolor sit amet consectetur adipisicing elit.kjkjjkk Lorem, dolor sit
            dolor sit amet consectetur adipisicing elit.kjkjjkk
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">Post Author</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">Category Name</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "blogPosts"
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 15px;
    background-color: rgb(238, 226, 226);
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #ffffff;
        border-radius: 4px;
        padding: 1px 5px;
        color: #000000;
        text-align: center;
        font-weight: bold;
    }
    .post-date {
        display: block;
        padding: 0px 0px 5px;
        color: #8f2f42;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666;
    }
    .post-author {
        background-color: #00bfff;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category {
        background-color: #00bfff;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>
