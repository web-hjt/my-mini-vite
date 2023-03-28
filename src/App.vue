<template>
  <h1>哈哈哈哈 hjt</h1>
  <h2>count is {{ count }}</h2>
  <button @click="count++">button++</button>
</template>
<script>
import { ref, defineComponent } from 'vue'

export default {
  setup() {
    const count = ref(6)
    function add() {
      count.value++
    }
    return { count }
  },
}
</script>
