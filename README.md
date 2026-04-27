
## Developer Quick Start

- Copy file `/.env.example` to `/.env` and fill out the values as necessary
- In a terminal, run:
```
npm install
npm run start
```
- Go to https://localhost:8080

## Project Technical Details

### Key Technologies
- **Eleventy** (static site generation):
  https://www.11ty.dev/docs/
- **Nunjucks** (templating):
  https://mozilla.github.io/nunjucks/templating.html
- **Contentful** (content management):
  https://www.contentful.com/developers/docs/references/content-delivery-api/
- **Tailwind** (CSS):
  https://tailwindcss.com/docs/styling-with-utility-classes
- **Luxon** (date formatting):
  https://moment.github.io/luxon/#/?id=luxon
- **Markdown-It** (markdown rendering):
  https://markdown-it.github.io/markdown-it/
- **Static Forms**:
  https://www.staticforms.dev/docs

### Project Structure

- `_site/` - where the built output is placed. Do not edit directly
- `src`- all source code for the site
  - _`_data`_ - data loaders that fetch and prepare Contentful content for templates
  - `_includes` - re-usable Nunjucks partials
    - `components` - UI components
    - `layouts` - page layout templates, including `base.nkj`
    - `rich-text` - templates for rendering linked/embedded assests/entries within Contentful rich text fields
  - `css` - customization and extension of the CSS provided by Tailwind
  - `lib` - supporting code for generating the site, mainly JavaScript 
    - `contentful` - Contentful-specific code should be kept here where possible. Includes utilities for helping to access data via the Contentful APIs, for mapping the content data to useful shapes for the front end, and for rendering rich text
    - `eleventy` - helpers for configuring the eleventy setup
    - `utils` - other re-usable helper code
  - `pages` - Nunjucks page templates and route definitions
  - `static` - files that will be copied directly to the output with no processing, such as images

## Coding & Design Principles

TODO

## Coding Standards

TODO

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



## Technical Details
The site is built with Eleventy (Nunjucks) and Contentful, and uses CSS for styling. It uses Tailwind CSS for styling and is configured to copy static files from the `src/static` directory to the output directory. The project also includes filters for formatting dates and times in a human-readable format.
