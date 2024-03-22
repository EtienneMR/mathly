<script setup lang="ts">
const route = useRoute()
const path = withTrailingSlash(route.path)

const { doc, toc } = defineProps<{
    doc: any,
    toc: any,
}>()

const isMarkdown = doc._type == 'markdown'
</script>

<template>
    <div class="flex flex-col-reverse md:flex-row">
        <article class="flex-1 w-full md:w-0">
            <ArticleHeader class="mb-2" />
            <main v-if="doc" class="select-text">
                <h1>{{ doc.title }}</h1>
                <p class="mb-5 ml-5 font-medium">{{ doc.description }}</p>
                <ContentRenderer v-if="isMarkdown" :value="doc" />
            </main>
            <ContentList :path="path">
                <template #default="{ list }">
                    <hr v-if="doc" class="mt-5">
                    <ArticleList :list="list" />
                </template>
                <template #not-found>
                    <ArticleNotFound v-if="!doc" />
                </template>
            </ContentList>
        </article>
        <ArticleToc :toc="toc" />
    </div>
</template>
