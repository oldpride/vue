<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
  <!-- 
    @click is the same as v-on:click.
  -->
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      console.log('click')
      this.$emit('btn-click')
    },
  },
}
</script>
