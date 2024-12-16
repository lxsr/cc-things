<template>
  <div class="
    flex flex-col items-center
    w-11/12 h-[95%]
    rounded-lg border-solid border-slate-700 border-4
    shadow-md shadow-slate-800 hover:shadow-lg hover:shadow-slate-800
    bg-slate-950
    text-white font-mono font-medium"
  >
    <h1 class="text-2xl text-extrabold drop-shadow-xlp text-pink-500">lxsr net</h1>
    <MessageArea />
    <TextInput />
  </div>
</template>

<script setup>
import TextInput from './TextInput.vue'
import MessageArea from './MessageArea.vue'
</script>