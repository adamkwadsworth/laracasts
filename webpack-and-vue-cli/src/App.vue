<template>
  <div id="app">
    <message>Hello World 1</message>
    <message>Hello World 2</message>
    <message>Hello World 3</message>
    <message>Hello World 4</message>
  </div>
</template>

<script>
import Message from './components/Message.vue'
export default {
  name: 'app',
  components: { Message },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>
