<template>
    <div class="help">
        <h1>{{ pagename }}</h1>
        <p>{{ pageDescriptions }}</p>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            pagename: "Help",
            pageDescriptions: "this is help page"
        };
    },
    name: "help"
};
</script>
