## 1. Developer Quick Start

### 1.1 Setup

- Installation of [FNM](https://www.fnmnode.com/) or [NVM](https://www.nvmnode.com/) is highly recommended. Otherwise, install the required Node.js version (see [package.json](./package.json)).
- Copy file [`/.env.example`](/.env.example) to [`/.env`](/.env) and fill out the values as explained there.
- If using VSCode, install the recommended extensions.

### 1.2. Running Locally

- In a terminal, run:

```
npm install
npm run start
```

- Go to http://localhost:8080

Hot reloading is available for most Nunjucks templates.

### 1.3. Golden Rules for Development

- Keep code simple and readable, and files well organised. Follow existing patterns and conventions.
- Minimise dependencies. Only install new packages if they bring real benefit.
- Use Nunjucks templates wherever possible for presentation, and keep Javascript focussed on data shaping and orchestration.
- Use UK date/time handling (see [section 3.1](#31-date-and-time-handling)).
- Use Tailwind for all styling.
- Keep on top of dependency vulnerabilities via `npm audit`.

### 1.4. Deployment

The site is hosted on **Netlify** and deployed automatically when changes are pushed to the `main` branch.

Netlify runs `npm run build` and publishes the `_site` output folder.

Environment variables (see [`.env.example`](/.env.example)) must be configured in the Netlify site settings under **Site configuration > Environment variables**.

## 2. Project Technical Overview

This is a statically generated website requiring Node.js.
Please keep the Node version in sync between [package.json](./package.json), [.node-version](./.node-version) and [.nvmrc](./.nvmrc).

The use of HTML and JavaScript goes without saying.

### 2.1. Key Technologies

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
- **Static Forms** (web forms):
  https://www.staticforms.dev/docs
- **JSDoc** (JavaScript documentation):
  https://jsdoc.app/

### 2.2. Project Structure

- `_site` - where the built output is placed. Do not edit directly
- `src` - all source code for the site
  - _`_data`_ - data loaders that fetch and prepare Contentful content for templates
  - `_includes` - re-usable Nunjucks partials
    - `components` - UI components
    - `layouts` - page layout templates, including `base.njk`
    - `rich-text` - templates for rendering linked/embedded assets/entries within Contentful rich text fields
  - `css` - customization and extension of the CSS provided by Tailwind
  - `lib` - supporting code for generating the site, mainly JavaScript
    - `contentful` - Contentful-specific code should be kept here where possible.
      Includes utilities for helping to access data via the Contentful APIs, for mapping the content data to useful shapes for the front end, and for rendering rich text
    - `eleventy` - helpers for configuring the eleventy setup
    - `utils` - other re-usable helper code
  - `pages` - Nunjucks page templates and route definitions
  - `static` - files that will be copied directly to the output with no processing, such as images

### 2.3. Custom Filters

As well as the custom filters listed below, Eleventy's default filters are available in normal templates.

> Note: rich text reference partials in [\_includes/rich-text](/src/_includes/rich-text) are rendered using a separate Nunjucks environment, where default filters are _not_ automatically available. In these partials, the `renderRichTextAsHtml` custom filter is also _not_ available.
>
> See [section 3](#3-content-and-code-design) for more details.

- **`renderRichTextAsHtml`** - for rendering Contentful's rich text JSON as HTML. Must be followed by the `safe` filter.
  Embedded entries/assets are rendered by specific partials (see note above).
- **`renderMarkdownAsHtml`** - for rendering markdown (e.g. that produced by Contentful's "Long text" fields) as HTML. Must be followed by the `safe` filter.
- **`readableDate`** - for rendering a Luxon DateTime object to a user-friendly date string.
- **`readableTime`** - for rendering a Luxon DateTime object to a user-friendly time string.
- **`readableFileSize`** - for rendering a number of bytes as a user-friendly file size string.

### 2.4. Code Quality

#### 2.4.1. Linting and Testing

Linting for JavaScript is provided by **ESLint**. This is configured to run when building the site and, if using VSCode, when saving files.

You can also run the following in your terminal to perform linting on the whole project:

```
npm run lint
```

For the time being, tests are considered an unnecessary overhead. If testing feels necessary in future then **Jest** (https://jestjs.io/) would be the recommended framework.

#### 2.4.2. Formatting and Consistency

Formatting is not enforced on build but, if using VSCode, will run when saving files. The **Prettier** extension is used for formatting most common file types, while the **Nunjucks 11ty Plus** extension is used for formatting `.njk` files (templates).

Try to follow patterns and naming conventions set by existing files.

#### 2.4.3. Comments and Readability

Comments should be used only where they add value. Try to make the code itself as readable as possible, especially in areas which might be extended or modified in future.

## 3. Content and Code Design

### 3.1. Date and Time Handling

It is assumed that Cannock Phoenix is only concerned with dates and times in the UK.
To avoid relying on content editors to select the correct UTC offset for the date they are entering, "Date and time" fields in Contentful should always be modelled as either "Date only" or "Date and time without timezone".
I.e. the editor need not consider daylight savings at all.

Then, when these values are received in the frontend code, they should immediately be parsed as Luxon DateTime objects using the UK time zone, via the "Europe/London" IANA code (see `luxonDateTimeOptions` in [helpers.js](/src/lib/utils/helpers.js)).
This ensures that all dates and times are given the correct offset (either +0 or +1, depending on whether GMT or BST is in effect on the date and at the time being modelled), allowing accurate calculations.

### 3.2. Rich Text Rendering

Contentful's "Rich text" fields store a structured representation of the text as JSON, and the Contentful SDK is used to render this as HTML.
See [richTextRenderer.js](/src/lib/contentful/richTextRenderer.js).

There is a known 'feature' of Contentful's rich text field, in that it wraps all list items in paragraphs (rendered as HTML `<p>` tags) - to fix this, all such paragraphs are removed before performing the render.

Rich text fields can also contain links to and embeds of other content entries and assets.
These require bespoke rendering logic, via options passed to the SDK function.
The rendering of each type of referenced content entry/asset is delegated nicely to partial templates found at [\_includes/rich-text](/src/_includes/rich-text).
This is achieved by creating a new Nunjucks environment to render the partials from within our JavaScript code (which is why the `renderRichTextAsHtml` function takes a `renderPartial` parameter).

The rendering is made available to templates via the `renderRichTextAsHtml` filter.
However, this filter is _not_ available within the rich text partials - this is to avoid any risk of infinite recursion in the case where a rich text field contains circular references of content entries.

### 3.3. Filter Configuration

Custom filters are registered in [filters.js](/src/lib/eleventy/filters.js), which acts as a plugin for the base [Eleventy config](/.eleventy.js).

Custom filters are added to both the primary Eleventy environment and the separate Nunjucks environment used for rendering rich text partials (see [section 3.2](#32-rich-text-rendering)).
The exception to this is the `renderRichTextAsHtml` filter, which is excluded from the rich text partial environment to avoid infinite recursion.

Eleventy's default filters would not exist on the rich text partial environment, so any default filters that might need to be used within the rich text partials are explicitly copied across.

## 4. To-Do List

An informal list of ideas for areas to work on next.

- automatic periodic build of site?
  - to cover e.g. whether events are listed as past or upcoming
- preview site?
  - rely on user clicking build?
  - auto-build triggered by webhook on save?
  - automatic periodic build? (would need to be fairly frequent)
- align rich text editor options
  - allowed features (H1, tables etc.)
  - linkable/embeddable content types, and how they should render
