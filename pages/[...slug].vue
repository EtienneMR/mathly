<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
    <div class="flex flex-col-reverse md:flex-row">
        <article class="flex-1 w-full md:w-0">
            <ContentDoc>
                <template v-slot="{ doc }">
                    <ArticleHeader class="mb-2" />
                    <main class="select-text">
                        <h1>{{ doc.title }}</h1>
                        <p class="mb-5 ml-5 font-medium">{{ doc.description }}</p>
                        <ContentRenderer :value="doc" />
                    </main>
                    <ArticleList />
                </template>

                <template #not-found>
                    <div class="flex flex-col gap-y-4 items-center justify-center">
                        <span class="text-primary text-6xl">404</span>
                        <h1>Page introuvable</h1>
                        <p>La page demandée n'a pas pu être trouvée.</p>
                        <UButton to="/" icon="i-heroicons-home">Retour à l'accueil</UButton>
                    </div>
                </template>
            </ContentDoc>
        </article>
        <aside class="w-48 ml-5" v-if="toc && toc.links">
            <p class="font-bold mb-2">Sommaire</p>
            <ul>
                <li v-for="link in toc.links" :key="link.text">
                    <AppLink :href="`#${link.id}`">
                        {{ link.text }}
                    </AppLink>
                </li>
            </ul>
        </aside>
    </div>
</template>
