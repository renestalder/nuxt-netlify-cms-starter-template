<template>
  <article>
    <h1>{{ title }}</h1>
  </article>
</template>

<script>
import { contentLoader } from '~/assets/core/mixins/content-loader';

export default {
  mixins: [contentLoader],
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );
    const post = await contentLoader.methods.queryContent(
      'blog/posts',
      params.slug
    );

    return post;
  }
};
</script>
