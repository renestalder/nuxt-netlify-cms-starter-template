# Contribution

Contributions are more than welcome.

## Development

This section describes steps for direct contribution to this template.

1. Checkout git repository.
2. Install dependencies.
  ```sh
  $ npm ci # or npm i
  ```
3. Automatically install and build the template to a test folder.
  ```sh
  $ npm run ci:test
  ```

Now, whenever you make changes to the source files in `template/`, you can directly test the installation
and the build. It isn't possible to directly build the project inside `template/` due to variables
that get replaced during the vue init steps.

## Commit Message Guidelines

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.
The **footer** can contain a ticket reference in case the commits don't get squashed.

The body should contain a user friendly description of the change. most likely, the header contains the "What was changed" while the body explains the "Why". See the body as the part that goes to a end-user changelog.

```
docs(changelog): update changelog
```
```
fix(layouts): add additional horizontal space

The layout was improved to look better on big viewports.
```