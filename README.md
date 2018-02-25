# Nuxt.js + Netlify CMS starter template

> Build server-less, static websites with Vue.js and Netlify CMS.

This is a fork of the [Nuxt.js starter project](https://github.com/nuxt-community/starter-template) with the goal, to extend it with [Netlify CMS](https://www.netlifycms.org) for building pre-rendered, server-less websites. See the [Further explanation](#further-explanation) section for more information.

Live demo: Coming soon.

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

> Make sure to use a version of vue-cli >= 2.1 (`vue -V`).

**Step 2** Push to GitHub & to Netlify

> Make sure to enable both Netlify's **identity** and **git-checkout** services under `https://app.netlify.com/sites/YOUR_SITE/settings/identity`

## Usage

### Configuration

* `nuxt.config.js` contains the default parameters pls an additional variable to define the route matching between Netlify CMS and Nuxt.js.
* **Netlify CMS**: Please follow the documentation of Netlify CMS to get it up and running with your repository.

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
with a CMS at the same time. It's all about saving time, saving money and especially keep to front-end work, while allowing people to edit content.

### What it does

* [x] **Pre-rendering:** Uses Nuxt.js to pre-render your Vuejs website to static HTML files.
  * [x] **Easy dynamic route rendering**: Allows to map glob patterns to your Nuxt.js page paths.
        This (partially) removes the need to define all dynamic routes by hand.
  * [ ] **Automatic mapping dynamic routes for pre-render:**: No more need to define dynamic routes manually.
        Netlify CMS and Nuxt.js sync their routes automatically.
* [x] **CMS:** Allows to edit content without the need of a server, thanks to Netlify CMS.

### How it works

For this particular example we use following libraries and frameworks:

* **Vue.js with Nuxt.js**: Vue.js for building our application and Nuxt.js for pre-rendering it.
  In general, this could be anything here as long it can read json or markdown files and is can be
  pre-rendered.
* **Netlify CMS**: A CMS which is built on JavaScript and connects to the Git repository.
  It defines the content models and edits the content files in the repository.

Basically, we use the default Nuxt.js boilerplate, add Netlify CMS files and extend the Nuxt.js config
to collect all content files and add those routes automatically to your Nuxt.js files.

Nuxt.js doesn't pre-render dynamic routes, e.g. blog/post/my-blog-post-2. But it allows to add the urls to those
pages manually to your config. Since you don't want to add a route to your config everytime you publish a blog post,
we allow to set dynamic paths with a glob in the Nuxt.js config. Those define glob folders are grabbed and
all files are added as routes to the Nuxt.js generate.route config_.

#### Principles

A pragmatic overview what this does.

1. You have a plain Vue.js and Nuxt.js website. That's fine and it works, but you want your pages to
   be SEO optimized. So you have two choices: Getting a node server for rendering your website server-side or
   you use pre-rendering, which converts all your pages to static HTML pages. This boilerplate does the second one.
2. You add Netlify CMS and connect it to your repository. Now you can create content as json that is stored in
   a content folder in your repository.
3. Through webpack, you import the content into your pages and show it to the users.
4. In addition, you run Nuxt.js' generate command to make all this rendered as static HTML files.
5. Everytime a file changes in the repository, the generate command has to be run so the static files of the
   website are up to date. _This is not part of this boilerplate. I assume you know how this works with your
   favourite CI.

### Why?

Tired of the time investment needed to setup a website that needs to be progressive enhanced,
SEO friendly, accessible and allows to access all content on client-side to benefit from doing additional
UX improvements like page transitions, this is an attempt to make the process for building small or medium sizes
CMS websites fast, easy to edit and easy to use.

You can do all this with CMS like WordPress if you're willing to invest your time:
You have to get an Apache server with PHP, setup WordPress, somehow setup the custom post types
and custom fields (probably by installing ACF), setup the WordPress JSON API, write your templates
in PHP + probably even a second time so you can render them with client-side technology. And then,
at the end, having a website that maybe changes once in a couple of weeks.

This looks like a lot of work for sharing content with the internet.

Second, plain old HTML is still the best. The technology stack in this boilerplate exactly
does that, but gives you the additional tools for content editing and for building advanced web experiences.

In the end, you don't need Vue.js or Nuxt.js. You can get rid of it. You can pre-render your vanilla JavaScript
with Webpack, for sure. You don't need Netlify CMS. Authors could edit Markdown and JSON files directly in the repository.
BUT this is not what we want. We don't want people to get to know Git, we don't want them to edit JSON or Markdown files
without validate their entries.

### Uncertain

#### Build performance with a big amount of pages (e.g. 20'000)

While I've read a while ago that the Nuxt.js documentation is built pre-rendered with up to 20'000 pages.
It's not clear at this point how long such a build takes and how a partial build process could look like.

#### Building different sizes of images

This certainly is an easy one since you could check folders of images and could create a task in webpack or your
CI system to create additional image sizes. Also here, this would have to be a task that partially resizes images
only if they changed.

#### No error check for missing globs

The build might fail all over if you map routes to content that doesn't exist. This will be easy to fix.

### When not to use a static server-less system like this

When your website changes a lot. For example, if you're building news websites whose content changes all 5 minutes,
this would mean, that the whole website is re-generated all 5 minutes. Certainly not the best idea. In this case
you might be better with something more dynamic. But the good part is: If you're building your website on a framework like
Nuxt.js, you can simply switch to server-rendering as soon
as the static, server-less behaviour does not longer fit
your needs. It's as easy as switching two commands in your
build system (and probably changing those window instances that don't work server-side).
