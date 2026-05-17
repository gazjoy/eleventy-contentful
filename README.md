## 1. Developer Quick Start

### 1.1 Setup

- Installation of [FNM](https://www.fnmnode.com/) or [NVM](https://www.nvmnode.com/) is highly recommended. Otherwise, install the required Node.js version (see [package.json](/package.json)).
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

#### 1.2.1. Content Cache

By default, content is cached locally for 60 mins, to avoid hitting Contentful's API limits when building the site frequently during development.

Edit the cache duration or disable it entirely (set to 0) via your [`.env`](/.env) or, to clear the cache, run:

```
npm run clean:cache
```

The cached data (at [\_cache](/_cache/)) can also be manually edited for testing purposes.

_Note: It is unimportant whether caching is enabled or not for production, because the file system will start off clean for each build, so fresh content will always be fetched._

#### 1.2.2. npm Scripts

The following scripts are available:

- `npm run start` - install dependencies, build the site, and start the dev server (localhost:8080)
- `npm run build` - full build: run ESLint, build Eleventy, and output to `_site/`
- `npm run build:eleventy` - build only the Eleventy site (faster for rapid iteration)
- `npm run dev:eleventy` - start Eleventy dev server with file watching (localhost:8081)
- `npm run lint` - run ESLint on all JavaScript files
- `npm run clean:cache` - clear the Contentful content cache

### 1.3. Golden Rules for Development

- Keep code simple and readable, and files well organised. Follow existing patterns and conventions.
- Minimise dependencies. Only install new packages if they bring real benefit.
- Use Nunjucks templates wherever possible for presentation, and keep Javascript focussed on data shaping and orchestration.
- Use UK timezone for handling of all dates/times in content (see [section 3.2](#32-date-and-time-handling)).
- Use Tailwind for all styling.
- Do not use inline styling and avoid using `!important`
- Keep on top of dependency vulnerabilities via `npm audit`.
- Keep this README updated and accurate, it should be the definitive instruction manual for both humans and AI assistants.

### 1.4. Deployment

The site is hosted on **Netlify** and deployed automatically when changes are pushed to the `main` branch.

Netlify runs `npm run build` and publishes the [\_site](/_site) output folder.

Environment variables (see [`.env.example`](/.env.example)) must be configured in the Netlify site settings under **Site configuration > Environment variables**.

You can inspect which commit of the code is deployed via the `X-Commit-Ref` response header included in all page responses from Netlify.

## 2. Project Technical Overview

This is a statically generated website requiring Node.js.
Please keep the Node version in sync between [package.json](/package.json), [.node-version](/.node-version) and [.nvmrc](/.nvmrc).

The use of HTML and JavaScript goes without saying.

### 2.1. Key Technologies

- **Netlify** (hosting & CDN):
  https://docs.netlify.com/start/overview/
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

- `_cache` - a cache of Contentful content, used locally only
- `_site` - where the built output is placed. Do not edit directly (this will get cleaned and overwritten anyway when running locally)
- `src` - all source code for the site
  - `_data` - data loaders that fetch and prepare Contentful content for templates
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
    - `config` - templates for non-HTML pages, such as sitemap.xml and robots.txt
  - `static` - files that will be copied directly to the output with no processing, such as images
- `reference` - design reference materials (root level, not inside `src`)
  - `figma-make-react-export` - React component prototype exported from Figma design.
    Use this as the specification for implementing pages and components.
    Inspect individual component files (e.g. `App.tsx`, component pages) to understand layout,
    responsive behaviour, and visual design before building the Nunjucks template equivalent.

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

#### 2.4.3. Naming, Comments and Readability

Name files, functions and variables descriptively.

A domain term (e.g. "event", "staffMember", "photo") should only be used for an object. Specific aspects of those items should be named clearly to avoid confusion:

- a string value `"Joe Bloggs"` should be called `staffMemberName` rather than `staffMember`
- a string value of `"https://img.com/pic.jpg"` should be called `photoUrl` rather than `photo`

Numeric values should be named with their unit, unless it is obvious:

- use `timeoutMs` rather than `timeout`
- `minSwimmerAge` is acceptable, as it can be assumed to be in years

Comments should be used only where they add value. Try to make the code itself as readable as possible, especially in areas which might be extended or modified in future.

JSDoc comments should be used if the intention is to describe a JavaScript function or object structure - this automatically provides intellisense for that function/object when used elsewhere.

### 2.5. Design Reference

The project includes a React prototype at [`reference/figma-make-react-export/`](reference/figma-make-react-export/) that serves as the exact visual and interaction specification for the site.

When building or updating a page or component:
1. Inspect the corresponding component in the React prototype to understand layout, spacing, and responsive behaviour
2. Identify which Tailwind utilities are needed to replicate the design
3. Build the Nunjucks template using Tailwind utilities first (see section 3.5)
4. Refer back to the prototype if visual discrepancies appear

Run the prototype locally with `npm run dev` from within the `reference/figma-make-react-export/` folder to test responsive behaviour at different viewport sizes.

## 3. Content and Code Design

### 3.1. Content Modelling in Contentful

- All content types should have a clear **Name** and useful **Description** (including examples if necessary).
- All fields should have useful **Help text**.
- **Enable localization of this field** should never be ticked; all content is only in English.
- Where field format is important (e.g. email addresses, times etc.), tick **Match a specific pattern** and use a regex if there is no suitable pattern provided.
  - Keep regexes consistent across fields that model the same data type.
- _Rich text_ fields should be consistent in their allowed **Formatting** options, and should always have **Accept only specified entry type** ticked for all links/embeds.
- _Reference_ fields should always have **Accept only specified entry type** ticked and the appropriate type(s) selected.
- All content types should have the _JSON Viewer_ app added to their **Entry editors**.

### 3.2. Date and Time Handling

It is assumed that Cannock Phoenix is only concerned with dates and times in the UK.
To avoid relying on content editors to select the correct UTC offset for the date they are entering, "Date and time" fields in Contentful should always be modelled as either "Date only" or "Date and time without timezone".
I.e. the editor need not consider daylight savings at all.

Then, when these values are received in the frontend code, they should immediately be parsed as Luxon DateTime objects using the UK time zone, via the "Europe/London" IANA code (see `luxonDateTimeOptions` in [helpers.js](/src/lib/utils/helpers.js)).
This ensures that all dates and times are given the correct offset (either +0 or +1, depending on whether GMT or BST is in effect on the date and at the time being modelled), allowing accurate calculations.

### 3.3. Rich Text Rendering

Contentful's "Rich text" fields store a structured representation of the text as JSON, and the Contentful SDK is used to render this as HTML.
See [richTextRenderer.js](/src/lib/contentful/richTextRenderer.js).

There is a known 'feature' of Contentful's rich text field, in that it wraps all list items in paragraphs (rendered as HTML `<p>` tags) - to fix this, all such paragraphs are removed before performing the render.

Rich text fields can also contain links to and embeds of other content entries and assets.
These require bespoke rendering logic, via options passed to the SDK function.
The rendering of each type of referenced content entry/asset is delegated nicely to partial templates found at [\_includes/rich-text](/src/_includes/rich-text).
This is achieved by creating a new Nunjucks environment to render the partials from within our JavaScript code (which is why the `renderRichTextAsHtml` function takes a `renderPartial` parameter).

The rendering is made available to templates via the `renderRichTextAsHtml` filter.
However, this filter is _not_ available within the rich text partials - this is to avoid any risk of infinite recursion in the case where a rich text field contains circular references of content entries.

### 3.4. Filter Configuration

Custom filters are registered in [filters.js](/src/lib/eleventy/filters.js), which acts as a plugin for the base [Eleventy config](/.eleventy.js).

Custom filters are added to both the primary Eleventy environment and the separate Nunjucks environment used for rendering rich text partials (see [section 3.3](#33-rich-text-rendering)).
The exception to this is the `renderRichTextAsHtml` filter, which is excluded from the rich text partial environment to avoid infinite recursion.

Eleventy's default filters would not exist on the rich text partial environment, so any default filters that might need to be used within the rich text partials are explicitly copied across.

### 3.5. Component Architecture and CSS Philosophy

#### Building Components from the Design Reference

When converting a React component from `reference/figma-make-react-export/` to a Nunjucks template:
1. Create a new file in [`src/_includes/components/`](src/_includes/components/) with a descriptive kebab-case name
2. Structure the Nunjucks template to accept parameters for content (e.g. `heroTitle`, `heroImage`, `accentColor`)
3. Use Tailwind responsive utilities exclusively for styling
4. Follow the mobile-first approach: base styles apply to mobile, use `lg:` prefix for desktop (1024px breakpoint)

#### CSS-First Approach

Tailwind utilities are always the first choice for styling:
- Responsive layout: use `hidden lg:flex`, `max-lg:flex-col lg:flex-row`, etc.
- Spacing: use `pt-4`, `mb-8`, `gap-3`, etc.
- Typography: use `text-sm`, `font-bold`, `leading-relaxed`, etc.
- Colours: use `bg-primary`, `text-secondary`, etc.

#### When Custom CSS is Necessary

Only add custom CSS to [`src/css/components/`](src/css/components/) when:
- A Tailwind utility cannot achieve the desired effect (e.g. pseudo-elements with dynamic values, complex selectors)
- The custom rule applies to a specific component and is reusable across that component
- Performance or maintainability would suffer without it

Keep custom CSS minimal: ideally < 50 lines per file.
Never use `!important` - if you feel you need it, restructure the HTML to use Tailwind utilities instead.

Example: Navbar section indicators use `::before` pseudo-elements tied to a `data-section` attribute, which Tailwind cannot achieve alone (see [`src/css/components/navbar.css`](src/css/components/navbar.css)).

#### Mobile-First and Viewport-Specific Animations

Design animations with both mobile and desktop in mind:
- Use `max-lg:` prefix to apply mobile-specific animations (e.g. `max-lg:animate-accordion-open`)
- Use `lg:` prefix for desktop animations (e.g. `lg:animate-panel-slide`)
- This prevents layout shifting when animations run in opposite directions on different viewports

When defining keyframes, ensure mobile and desktop animations are consistent in direction to avoid visual jumps on viewport resize.

### 3.6. Accessibility and Semantic HTML

All pages must follow semantic HTML principles and WCAG 2.1 Level AA accessibility standards.

#### Semantic Structure

- Use appropriate HTML elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<ul>`/`<li>` for lists, etc.
- Avoid using `<div>` for structural elements; use semantic elements instead
- Page regions should use appropriate `<section>` elements with clear purpose
- Navigation menus should use `<nav>` with `<ul>`/`<li>` structure (even if list bullets are hidden with Tailwind's `list-none`)

#### Images and Icons

- All `<img>` tags must have descriptive `alt` text
- Decorative images should use `aria-hidden="true"` to hide them from screen readers
- SVG icons used in components should include `aria-label` or `role` attributes as appropriate

#### Interactive Elements

- Ensure sufficient colour contrast between text and background (minimum 4.5:1 for normal text, 3:1 for large text)
- Focus states must be visible; avoid removing outline styles without providing an alternative
- Forms must include associated `<label>` elements (use `for` attribute)
- All buttons must have descriptive text or `aria-label`

## 4. Implementation Status

### 4.1. Completed Pages and Components

- **Header** - Fixed navigation with logo, desktop menu, mobile menu indicator, CTA button
- **Navigation Mega-Menu** - 6-section menu (Learn, Compete, Our Club, Club Events, Members, Join Phoenix) with desktop panels and mobile accordion
- **Page Hero Component** - Reusable sub-page hero with section label, icon, title, subtitle, and wave divider
- **Homepage Hero** - Full-screen gradient overlay with shimmer animation, heading, CTA buttons, and wave divider
- **Footer** - Logo, Swim England affiliation section

### 4.2. Planned Pages and Components

- Sub-page section navigation (sidebar for nested pages)
- Content pages (About, Events, Learn to Swim, Staff, Venues, etc.) wired to Contentful
- News/blog post pages
- Forms (contact, newsletter signup, etc.)

### 4.3. Known Limitations and Deferred Tasks

- **SVG Rendering** - SVG paths in navbar section icons are not currently rendering. Will be addressed via SVG standardization task.
- **Header Scroll Behaviour** - Design shows transparent header on homepage scroll top, transitioning to solid blue after scrolling ~40px. Not yet implemented.
- **Contentful Integration** - Homepage hero and footer are currently hardcoded; should be content-driven from Contentful.

## 5. Future Enhancements

An informal list of ideas for areas to work on next.

- automatic periodic build of site?
  - this feels like the simplest way of handling content updates, as long as the interval is short enough
  - note that the alternative way to surface content updates (triggering a build off a publish webhook) would not cover time-related calculated content, e.g. whether events are listed as past or upcoming, or the copyright year in the footer
- preview site? (probably a nice to have rather than essential)
  - rely on user clicking build button in the CMS?
  - or an auto-build triggered by webhook on save?
  - automatic periodic build (see above) could also work, but the interval would need to be very short (~1min?) which could hit contentful/netlify limits
- align rich text editor options
  - we want consistency in the CMS
  - consider allowed features (e.g. should editors be able to include H1s, tables etc.?)
  - consider linkable/embeddable content types, and how they should render for different types of references (inline vs block vs link) - needs to match up with what richTextRenderer.js supports
