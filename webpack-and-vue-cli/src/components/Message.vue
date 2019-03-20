<template>
    <div class="box">
        <p><slot></slot></p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.box {
    background-color:gray;
    padding:10px;
    border:solid 1px black;
}
</style>
