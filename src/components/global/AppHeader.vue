<template>
    <div class="header">
        <div class="container">
            <div class="logo">Learning Vue</div>
            <ul id="nav" class="text-right">
                <router-link to="/" tag="li" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/blog" tag="li">
                    <a>blog</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>
                <router-link to="/help" tag="li" replace>
                    <a>Help</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.header {
    background-color: deepskyblue;
    color: #ffffff;
    overflow: hidden;
}
.logo {
    padding: 17px;
    font-size: 24px;
    float: left;
    width: 300px;
}
#nav {
    float: left;
    width: calc(100% - 300px);
    margin: 0px;
    li {
        font-size: 20px;
        display: inline-block;
        padding: 20px;
        a {
            color: #ffffff;
            text-decoration: none;
        }
    }
    li.router-link-active {
        background-color: #ffffff;
        a {
            color: deepskyblue;
        }
    }
}
</style>
