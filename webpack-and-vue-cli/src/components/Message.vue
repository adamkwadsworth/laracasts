<template>
    <div class="box">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .box {
        background-color: red;
        p {
            color: white;
        }
    }
</style>
