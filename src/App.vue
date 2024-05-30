<script setup>
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
    <div>
        <HeaderNav />
        <RouterView />
    </div>
</template>
