<script setup lang="ts">
defineProps<{
    doc: any,
    toc: any,
}>()
</script>

<template>
    <div class="flex flex-col-reverse md:flex-row">
        <article class="flex-1 w-full md:w-0">
            <ArticleHeader class="mb-2" />
            <main class="select-text">
                <h1>{{ doc.title }}</h1>
                <p class="mb-5 ml-5 font-medium">{{ doc.description }}</p>
                <ContentRenderer :value="doc" />
            </main>
            <ArticleList />
        </article>
        <ArticleToc :toc="toc" />
    </div>
</template>
