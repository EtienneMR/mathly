<script setup lang="ts">
const route = useRoute()
const path = withTrailingSlash(route.path)
</script>

<template>
    <ContentList :path="path">
        <template #default="{ list }">
            <hr class="mt-5">
            <ul class="mt-5 select-none">
                <li v-for="link of list" :key="link._path">
                    <h2>{{ link.title }}</h2>
                    <p>{{ link.description }}</p>
                    <UButton icon="i-heroicons-link" :to="link._path">Afficher</UButton>
                </li>
            </ul>
        </template>
        <template #not-found></template>
    </ContentList>
</template>