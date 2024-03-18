<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
    <div>
        <ContentDoc>
            <template v-slot="{ doc }">
                <ArticlePage :doc="doc" :toc="toc" />
            </template>

            <template #not-found>
                <ArticleNotFound />
            </template>
        </ContentDoc>
    </div>
</template>
