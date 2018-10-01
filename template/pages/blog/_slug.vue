<template>
  <article>
    <h1>{{ title }}</h1>
    <p>{{ body }}
      <br>
      <strong>Posted on <time :datetime="date">{{ date }}</time></strong>
    </p>
    <img :src="thumbnail">
  </article>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      body: '',
      thumbnail: '',
      date: ''
    }
  },
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    return post;
  }
};
</script>

