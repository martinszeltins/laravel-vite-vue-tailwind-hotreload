<template>
    Hi there, my name is - {{ myName }}
</template>

<script setup>
    import { ref } from 'vue'

    const myName = ref('Martins')
</script>
