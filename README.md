<p align="center">
  <img width="386" src="https://raw.githubusercontent.com/renestalder/nuxt-netlify-cms-starter-template/master/docs/nuxt-netlify.svg?sanitize=true" alt="Nuxt Netlify Logo" />
</p>

# Nuxt.js + Netlify CMS starter template

[![Build Status](https://travis-ci.org/renestalder/nuxt-netlify-cms-starter-template.svg?branch=master)](https://travis-ci.org/renestalder/nuxt-netlify-cms-starter-template)

> Build server-less, static websites with Vue.js and Netlify CMS.

This is a starter template to build static websites with Vue.js and Netlify CMS, based on Nuxt v1.x. What it covers:

* **Setup via Vue CLI** 🏗  
  Easily setup a nearly blank Nuxt.js project.  
  *Currently not optimized for Vue CLI v3.0*.
* **Content editing via Netlify CMS** ✏️  
  Netlify CMS is a client-side CMS connecting directly to your git repository to edit markdown files.  
  *Also supports other file formats, but this template only works with the default, frontmatter markdown format.*
* **Show content in Vue.js via Nuxtent/Nuxtdown module** 🔍️  
  The Nuxtdown module (fixed fork from Nuxtent) allows querying the content and show in the UI.
* **Static-site generation via Nuxt.js** ✅  
  Nuxt.js, the famous framework to build universal Vue.js applications, generates a static-site.

  ---

<!-- TOC -->

- [Nuxt.js + Netlify CMS starter template](#nuxtjs--netlify-cms-starter-template)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
        - [Configuration](#configuration)
        - [Development](#development)
        - [Production](#production)
    - [Contribution](#contribution)

<!-- /TOC -->

## Prerequisites

* Make sure to have `node 8.0+` and `npm 5.0+` installed
* You know what Netlify CMS and Nuxt.js is.

## Setup

**Step 1** This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ vue init renestalder/nuxt-netlify-cms-starter-template my-project  
$ cd my-project                     
# install dependencies
$ npm install # Or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`). It wasn't tested with Vue CLI >= 3.0.

**Step 2** Push to GitHub & to Netlify

> Make sure to enable both Netlify's **identity** and **git-gateway** services under `https://app.netlify.com/sites/YOUR_SITE/settings/identity`

## Usage

### Configuration

* **CMS & content models**  
  Define content files and fields for your content.  
  *File*: `static/admin/config.yml`  
  *Documentation*: [Official Netlify CMS documentation -> Configuration][netlifydocs]
* **Routing & querying**  
  Out of the box, the UI doesn't have a clue where your content is stored and which dynamic routes belong to which content. Nuxt.js can only map static pages by default. Dynamic routes like blog posts with different file names are not detected. The configuration for this happens by Nuxtdown.  
  *File*: `nuxtdown.config.js`  
  *Documentation*: [Nuxtdown Readme][nuxtdownreadme]
* **General website information**  
  General information like HTML `<head>` tags and page titles are set via Nuxt.js. Don't bother with routing configuration for Nuxt.js, this is solved by Nuxtdown.  
  *File*: `nuxt.config.js`  
  *Documentation*: [Official Nuxt.js Documentation -> Configuration][nuxtconfig]

### Development

During development, run the client-side SPA version of your application. Use the `dev` or `serve` task, whatever fits you better. They do the same.

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

For production, generate the static-site.

``` bash
# generate a static project
$ npm run generate
```

While the other commands from Nuxt.js remain in this starter kit, we clearly focus on serving static HTML files, thus the `generate` command is our task to create the website for production.

## Contribution

If you're interested in contributing to the project, see [CONTRIBUTING.md][contributing]

[contributing]: ./CONTRIBUTING.md
[netlifydocs]: https://www.netlifycms.org/docs/configuration-options/
[nuxtdownreadme]: https://github.com/joostdecock/nuxtdown-module/blob/master/README.md
[nuxtconfig]: https://nuxtjs.org/guide/configuration
