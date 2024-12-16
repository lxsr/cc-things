<template>
  <form class="
    flex justify-self-end
    w-[98%] h-8
    space-x-2
    my-2
    text-white text-lg text-bold
  "
  @submit.prevent="handleSend"
  >
    <input 
      type="text" 
      placeholder="Type a message..."
      v-model="message"
      class="
      bg-slate-900 grow text-white caret-pink-500
      focus:shadow-sm focus:shadow-pink-500
      focus:outline-none
      rounded-lg border-solid border-pink-500 border-2
      hover:shadow-sm hover:shadow-pink-500
      "  
      
      > </input>

    <button
      class="
      w-16
      border-sky-500 border-2 rounded-lg
      hover:shadow-sky-500 hover:shadow-sm
      bg-sky-800   text-center "
    >
      Send
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const { sendMessage } = defineProps({
  sendMessage: {
    type: Function,
    required: true
  }
})

const message = ref('');

function handleSend(evt) {
  console.log(message.value);
  sendMessage(message.value);
  message.value = ''
}

</script>