<template>
  <base-template :menu="menu">
    <slot />
  </base-template>
</template>

<script setup lang="ts">
import BaseTemplate from '../BaseTemplate.vue';
import menu from './menu';
</script>