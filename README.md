
## To Run Locally

- Copy file `/.env.example` to `/.env` and fill out the values as necessary
- In a terminal, run:
```
npm install
npm run start
```
- Go to https://localhost:8080

## Useful Resources

- **Eleventy (SSG):**
  https://www.11ty.dev/docs/
- **Nunjucks (templating):**
  https://mozilla.github.io/nunjucks/templating.html
- **Contentful (CMS):**
  https://www.contentful.com/developers/docs/references/content-delivery-api/
- **Luxon (date formatting):**
https://moment.github.io/luxon/#/?id=luxon
- **Markdown-It (markdown rendering)**
https://markdown-it.github.io/markdown-it/

## To-Do List
 
- preview site
  - rely on user clicking build?
  - auto-build triggered by webhook on save?
- align rich text editor options
  - allowed features (H1, tables etc.)
  - linkable/embeddable content types, and how they should render
- sitemap?
- linting?
- tests?