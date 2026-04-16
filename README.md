
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

## To-Do List
 
- split team members into committee (positions/roles seats with holders as a field, no photo field), and coaching staff (people with roles as a field)
- preview site
  - rely on user clicking build?
  - auto-build triggered by webhook on save?
- align rich text editor options
  - allowed functions (H1, tables etc.)
  - linkable content types
- sitemap?
- linting?
- tests?