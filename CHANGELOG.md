# Changelog
All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0 - 2019-01-11

### Features

* **Nuxt v2.2.x**: The template was updated to use Nuxt v2.0.0.
* **Netlify Config Example**: Added a Netlify config example that enables the `npm run generate` to work on all kinds of deployments e.g. Branch, Preview and Production deployment without the need of additional configuration.

In addition, the README was updated with more clear instructions how to use it in different environments, not only with Netlify deploy.

### Breaking changes

If you want to apply the template changes to your current project using the template, be aware of the following required changes to make your project work.

* Nuxt v2.x replaces `isClient` with `process.client`. See [required](https://github.com/renestalder/nuxt-netlify-cms-starter-template/commit/ca752c53adb221bde3070a8c4197ea140ccd4a5a#diff-ab6b79105e8be7d546b7510a53d2dd71) changes to the `nuxt.config.js`.

## 1.0.0 - 2019-01-06

Initial stable release with frontmatter support.

