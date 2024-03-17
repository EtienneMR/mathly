<template>
    <AppLink :href="href" :target="target">
        <slot></slot>
    </AppLink>
</template>

<script setup lang="ts">
defineProps({
    href: {
        type: String,
        default: ''
    },
    target: {
        type: String,
        required: false
    }
})
</script>