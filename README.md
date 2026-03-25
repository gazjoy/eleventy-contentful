
## To Run Locally

1. `npm install`
1. `npm run start`
1. https://localhost:8080

## Useful Resources

- **Eleventy:**
  https://www.11ty.dev/docs/
- **Contentful (CMS):**
  https://www.contentful.com/developers/docs/references/content-delivery-api/
- **Luxon (date formatting):**
https://moment.github.io/luxon/#/?id=luxon

## To-Do List

- No need for mapping to "includes" for referenced entries??
- Pull static pages from CF (POC using 'About' tree, with pages only defined in CMS - in separate branch)
- Demonstrate adding links 
- Pagination for data? CF API limit is 1000 (use cursor approach if so)
- Plan for handling timezones in dates/times
- preview site
  - rely on user clicking build?
  - auto-build triggered by webhook on save?
- sitemap?
- update robots (ideally by env) when going live