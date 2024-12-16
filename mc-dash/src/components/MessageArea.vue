<template>
  <div class="
    flex flex-col-reverse
    w-11/12
    grow
    overflow-auto
    break-words
    text-wrap
    text-lg
  "
  >
    <div class="flex flex-col">
      <div 
        v-for="(message, index) in messages"
        :key="index"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { messages } = defineProps({
  messages: {
    type: Array,
    required: true
  }
})
</script>