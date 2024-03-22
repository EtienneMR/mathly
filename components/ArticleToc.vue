<script setup lang="ts">
defineProps<{
    toc?: { links: { id: string, text: string }[] }
}>()
</script>

<template>
    <aside class="w-48 md-5 md:md-0 md:ml-5" v-if="toc && toc.links && toc.links.length">
        <p class="font-bold mb-2">Sommaire</p>
        <ul>
            <li v-for="link in toc.links" :key="link.text">
                <AppLink :href="`#${link.id}`">
                    {{ link.text }}
                </AppLink>
            </li>
        </ul>
    </aside>
</template>
