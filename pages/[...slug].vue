<script setup lang="ts">
const { toc } = useContent()
</script><template>
    <div class="flex flex-col-reverse md:flex-row">
        <article class="flex-1 w-full md:w-0">
            <ArticleHeader class="mb-2" />
            <main class="select-text">
                <ContentDoc v-slot="{ doc }">
                    <h1>{{ doc.title }}</h1>
                    <p class="mb-5 ml-5 font-medium">{{ doc.description }}</p>
                    <ContentRenderer :value="doc" />
                </ContentDoc>
            </main>
            <ArticleList />
        </article>
        <aside class="w-25 borderl-solid">
            <ul v-if="toc && toc.links">
                <li v-for="link in toc.links" :key="link.text">
                    <NuxtLink :href="`#${link.id}`">
                        {{ link.text }}
                    </NuxtLink>
                </li>
            </ul>
        </aside>
    </div>
</template>
