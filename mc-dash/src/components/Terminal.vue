<template>
  <div class="
    flex flex-col items-center
    w-11/12 h-[95%]
    rounded-lg border-solid border-slate-800 border-4
    shadow-md shadow-slate-800 hover:shadow-lg hover:shadow-slate-800
    bg-slate-950
    text-white font-mono font-medium"
  >
    <h1 class="text-2xl text-extrabold drop-shadow-xlp text-pink-500">lxsr net</h1>
    <MessageArea :messages="messages" />
    <TextInput :sendMessage="sendMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TextInput from './TextInput.vue'
import MessageArea from './MessageArea.vue'

const socket = new WebSocket('wss://lxsr.net');

const messages = ref([])

function sendMessage(content) {
  socket.send(content);
  messages.value.push(content);
}

socket.onmessage = (event) => {
  const message = event.data;
  messages.value.push(message);
}

</script>