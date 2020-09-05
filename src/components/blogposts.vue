<template lang="html">
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title | reversing }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="js">

  export default  {
    name: 'blogposts',
    props: ["views", "title", "date", "content", "author", "category"],
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.post-box {
    padding: 15px;
    background-color: rgb(238, 226, 226);
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
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
