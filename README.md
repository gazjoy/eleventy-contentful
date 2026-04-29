
## Developer Quick Start
- Copy file [`/.env.example`](/.env.example) to [`/.env`](/.env) and fill out the values as necessary
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
- `_site` - where the built output is placed. Do not edit directly
- `src` - all source code for the site
  - _`_data`_ - data loaders that fetch and prepare Contentful content for templates
  - `_includes` - re-usable Nunjucks partials
    - `components` - UI components
    - `layouts` - page layout templates, including `base.nkj`
    - `rich-text` - templates for rendering linked/embedded assests/entries within Contentful rich text fields
  - `css` - customization and extension of the CSS provided by Tailwind
  - `lib` - supporting code for generating the site, mainly JavaScript
    - `contentful` - Contentful-specific code should be kept here where possible. 
    Includes utilities for helping to access data via the Contentful APIs, for mapping the content data to useful shapes for the front end, and for rendering rich text
    - `eleventy` - helpers for configuring the eleventy setup
    - `utils` - other re-usable helper code
  - `pages` - Nunjucks page templates and route definitions
  - `static` - files that will be copied directly to the output with no processing, such as images

### Custom Filters
As well as the default filters, the following are also available to use in templates:
- **`renderRichTextAsHtml`** - for rendering Contentful's rich text JSON as HTML. Must be followed by the `safe` filter. 
See [_includes/rich-text](/src/_includes/rich-text) for partials that render embedded entries/assets. 
_Note that this filter is **not** available within those partials (i.e. one rich text field may not be rendered within another rich text field)_
- **`renderMarkdownAsHtml`** - for rendering markdown (e.g. that produced by Contentful's "Long text" fields) as HTML.
- **`readableDate`** - for rendering a Luxon DateTime object to a user-friendly date string.
- **`readableTime`** - for rendering a Luxon DateTime object to a user-friendly time string.
- **`readableFileSize`** - for rendering a number of bytes as a user-friendly file size string.

## Content and Code Design

### Date and Time Handling
It is assumed that Cannock Phoenix is only concerned with dates and times in the UK.
To avoid relying on content editors to select the correct UTC offset for the date they are entering, "Date and time" fields in Contentful should always be modelled as either "Date only" or "Date and time without timezone". 
I.e. the editor need not consider daylight savings at all.

Then, when these values are received in the frontend code, they should immediately be parsed as Luxon DateTime objects using the UK time zone, via the "Europe/London" IANA code (see `luxonDateTimeOptions` in [helpers.js](/src/lib/utils/helpers.js)).
This ensures that all dates and times are given the correct offset (either +0 or +1, depending on whether GMT or BST is in effect on the date and at the time being modelled), allowing accurate calculations.

### Rich Text Rendering
Contentful's "Rich text" fields store a structured representation of the text as JSON, and the Contentful SDK is used to render this as HTML. 
See [richTextRenderer.js](/src/lib/contentful/richTextRenderer.js).

There is a known 'feature' of Contentful's rich text field, in that it wraps all list items in paragraphs (rendered as HTML `<p>` tags) - to fix this, all such paragraphs are removed before performing the render.

Rich text fields can also contain links to and embeds of other content entries and assets.
These require bespoke rendering logic, via options passed to the SDK function.
The rendering of each type of referenced content entry/asset is delegated nicely to partial templates found at [_includes/rich-text](/src/_includes/rich-text). 
This is achieved by creating a new Nunjucks environment to render the partials from within our JavaScript code (which is why the `renderRichTextAsHtml` function takes a `renderPartial` parameter).

The rendering is made available to templates via the `renderRichTextAsHtml` filter.
However, this filter is _not_ available within the rich text partials - this is to avoid any risk of infinite recursion in the case where a rich text fields contains circular references of content entries.

### Filter Configuration

Custom filters are registered in [filters.js](/src/lib/eleventy/filters.js), which acts as a plugin for the base [Eleventy config](/.eleventy.js).

Custom filters are added to both the primary Eleventy environment and the separate Nunjucks environment used for rendering rich text partials (see [section above](#rich-text-rendering)).
The exception to this is the `renderRichTextAsHtml` filter, which is excluded from the rich text partial environment to avoid infinite recursion.

Eleventy's default filters would not exist on the rich text partial environment, so any default filters that might need to be used within the rich text partials are explicitly copied across.

## To-Do List
- automatic periodic build of site?
  - to cover e.g. whether events are listed as past or upcoming
- preview site?
  - rely on user clicking build?
  - auto-build triggered by webhook on save?
  - automatic periodic build? (would need to be fairly frequent)
- align rich text editor options
  - allowed features (H1, tables etc.)
  - linkable/embeddable content types, and how they should render
- sitemap?
- typescript?
- linting?
- tests?