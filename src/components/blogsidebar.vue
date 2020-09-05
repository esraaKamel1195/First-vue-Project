<template>
    <div class="sidebar-widgets">{{ title | upperCase }}</div>
</template>

<script>
export default {
    data: function() {
        return {
            title: "Testing sidebar"
        };
    },
    name: "blog_sidebar",
    filters: {
        upperCase: function(value) {
            return value.toUpperCase();
        }
    }
};
</script>
