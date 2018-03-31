<template>
  <section class="container">
    <h2>Blog</h2>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="post._meta.path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { contentLoader } from '~/assets/core/mixins/content-loader';

export default {
  mixins: [contentLoader],
  data() {
    const posts = this.queryContentAll('/blog/posts/', '/blog');
    return { posts };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
