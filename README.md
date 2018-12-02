# Nuxt.js + Netlify CMS starter template

> Build server-less, static websites with Vue.js and Netlify CMS.

This is a starter template to build static websites with Vue.js and Netlify CMS, based on Nuxt v1.x. What it covers:

* **Setup via Vue CLI**: Easily setup a nearly blank Nuxt.js project.
  *Currently not optimized for Vue CLI v3.0*.
* **Example of Netlify CMS file collections**.

<!-- TOC -->

- [Nuxt.js + Netlify CMS starter template](#nuxtjs--netlify-cms-starter-template)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Configuration](#configuration)
        - [Development](#development)
        - [Production](#production)
    - [Further explanation](#further-explanation)
        - [How it works](#how-it-works)
    - [Contribution](#contribution)

<!-- /TOC -->

## Prerequisites

* Make sure to have `node 8.0+` and `npm 5.0+` installed
* You know what Netlify CMS and Nuxt.js is.

## Installation

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

* `nuxt.config.js` is the default Nuxt configuration. The only addition is the `nuxtdown` module which allows to load markdown files in the frontmatter format.
* **Netlify CMS**: The Netlify CMS configuration with example collections. Please follow the documentation of Netlify CMS to get it up and running with your repository.  
  **Important:** This starter template only supports the default file format of Netlify CMS to store content (Frontmatter with Markdown). So if you don't define the file format of your content in the configuration, you're fine.

### Development

``` bash
# serve with hot reloading at localhost:3000
$ npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

### Production

``` bash
# generate a static project
$ npm run generate
```

While the other commands from Nuxt.js remain in this starter kit, we clearly focus on serving static HTML files, thus the `generate` command is our task to create the website for production.

## Further explanation

The goal of this boilerplate is to allow creating websites server-less and enable content management
with a CMS at the same time. It's all about saving time, saving money and especially stick to front-end work, while allowing people to edit content.

### How it works

For this particular example we use following libraries and frameworks:

* **Vue.js with Nuxt.js**: Vue.js for building our application and Nuxt.js for pre-rendering it.
  In general, this could be anything here as long it can read json or markdown files and is can be
  pre-rendered.
* **Netlify CMS**: A CMS which is built on JavaScript and connects to the Git repository.
  It defines the content models and edits the content files in the repository.

## Contribution

If you're interested in contributing to the project, see [CONTRIBUTING.md](contributing)

[contributing]: https://github.com/renestalder/nuxt-netlify-cms-starter-template/blob/feature/frontmatter/CONTRIBUTING.md