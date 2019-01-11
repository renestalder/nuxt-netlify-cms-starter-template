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
            - [Manual deployment via FTP](#manual-deployment-via-ftp)
            - [Deploy to Netlify](#deploy-to-netlify)
            - [Deploy with other CI solutions](#deploy-with-other-ci-solutions)
    - [Contribution](#contribution)

<!-- /TOC -->

## Prerequisites

* Make sure to have `node 8.0+` and `npm 5.0+` installed
* You know what Netlify CMS and Nuxt.js is.

## Setup

1. **Install via [vue-cli](https://github.com/vuejs/vue-cli)**: If you use newer version of Vue CLI, you probably will have to install an additional package for `vue init` to work, as this template is not yet optimized for the newer Vue CLI.

``` bash
$ vue init renestalder/nuxt-netlify-cms-starter-template my-project  
$ cd my-project                  
# install dependencies
$ npm install # Or yarn install
```

2. **Push the project to your git repository**: To be able to edit content at all, you need to push your project to a git repository. The CMS always connects directly to the git repository and edits the content on the branch set in `static/admin/config.yml`.

Nice, you did the the important steps to get started. Now configure all the components correctly for your infrastructure.

## Usage

### Configuration

* **CMS authentication & models**
  Configure where your repository is hosted and how users of the CMS will login to edit content. Also define files and fields for your content.    
  *File*: `static/admin/config.yml`  
  *Documentation*: [Official Netlify CMS documentation -> Configuration][netlifydocs-configuration]
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

#### Manual deployment via FTP

To make it work on your production server, the build needs to know the final url/domain where the site will run. For this, you can edit the `npm generate:manual` task in the `package.json` and set your production URL. This is useful when you manually deploy your website:

```bash
# generate a static project that will be hostet on the URL given in package.json
$ npm run generate:manual
```

#### Deploy to Netlify

The folder of your generated project will contain a `netlify-example.toml` file you can rename to `netlify.toml` to get started with Netlify deployment. It automatically sets the `BASE_URL` based on your Netlify configuration and the type of deployment (Production deployment, branch deployment, preview deployment). So **no need to set the production URL in the `package.json`**.

#### Deploy with other CI solutions

If you use other CI solutions, you always have to make sure, that the environment variable `BASE_URL` is set to the URL where the website will run. Tools like GitLab allow you to set *environment variables* in the settings of the project and make it easy to use what ever way you want to deploy your project.

## Contribution

If you're interested in contributing to the project, see [CONTRIBUTING.md][contributing]

[contributing]: ./CONTRIBUTING.md
[netlifydocs-configuration]: https://www.netlifycms.org/docs/configuration-options/
[nuxtdownreadme]: https://github.com/joostdecock/nuxtdown-module/blob/master/README.md
[nuxtconfig]: https://nuxtjs.org/guide/configuration
