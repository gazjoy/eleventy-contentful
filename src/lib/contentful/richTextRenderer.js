const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { INLINES, BLOCKS } = require("@contentful/rich-text-types");
const { formatFileSize } = require("../utils/formatters");
const { slugify } = require("../utils/helpers");
const { mapPage, mapStaffMember, mapVenue } = require("./contentMapper");

const renderRichTextAsHtml = (value) => {
  if (!value) {
    return "";
  }

  return documentToHtmlString(value, {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: renderReference(),
      [INLINES.ASSET_HYPERLINK]: renderReference(),
      [INLINES.EMBEDDED_ENTRY]: renderReference(),
      [BLOCKS.EMBEDDED_ENTRY]: renderReference(),
      [BLOCKS.EMBEDDED_ASSET]: renderReference(),
    }
  });
};

const renderReference = () => (node) => {
  //return `<p><small>${JSON.stringify(node)}</small></p>`;
  
  const referenceType = node.nodeType;
  const target = node?.data?.target;

  if (target) {
    const targetType = target.sys.type;
    const linkText = node.content?.[0]?.value;

    if (targetType === "Asset") {
      return renderAssetReference(target, referenceType, linkText);
    };
  
    if (targetType === "Entry") {
      const entryContentType = target?.sys?.contentType?.sys?.id;

      switch (entryContentType) {
        case "page":
          return renderPageReference(target, referenceType, linkText);
        case "staffMember":
          return renderStaffMemberReference(target, referenceType, linkText);
        case "venue":
          return renderVenueReference(target, referenceType, linkText);
        default:
          console.warn(`No rendering logic defined for entry content type "${entryContentType}"`);
          return `<!-- Unhandled entry reference of content type "${entryContentType}" -->`;
      }
    }
  }

  console.warn(`Reference of type "${referenceType}" to '${target.sys.id}' was not resolved. It may be deleted or unpublished.`);
  return `<!-- Unresolved ${referenceType} reference to '${target.sys.id}' -->`;
};

const renderAssetReference = (asset, type, linkText) => {
  const file = asset.fields.file;
  const assetTitle = asset.fields.title;
  const assetDescription = asset.fields.description || "";
  
  // Render hyperlink to asset URL
  if (type === INLINES.ASSET_HYPERLINK) {
    return `<a href="${file.url}" target="_blank" rel="noopener noreferrer">${linkText || assetTitle}</a>`;
  }
  
  if (type === BLOCKS.EMBEDDED_ASSET) {
    // If an image, render it directly, with a caption
    if (file.contentType?.startsWith("image/")) {
      return `<p style="width: fit-content; text-align: center;">
        <img src="${file.url}" alt="${assetDescription}" style="max-width: 100%; height: auto;" />
        <br/>
        <small>${assetTitle}</small>
      </p>`;
    }

    // Otherwise, render a link to the asset with file size info and description
    return `<p>
      <a href="${file.url}" target="_blank" rel="noopener noreferrer">${assetTitle}</a>
      (${formatFileSize(file.details.size)})
      <br/>
      <small>${assetDescription}</small>
     </p>`;
  }
};

const renderPageReference = (entry, type, linkText) => {
  const page = mapPage(entry);
  
  // Render hyperlink to page itself
  if (type === INLINES.ENTRY_HYPERLINK
    || type === INLINES.EMBEDDED_ENTRY
    || type === BLOCKS.EMBEDDED_ENTRY) {
    return `<a href="/${page.urlPath}/">${linkText || page.title}</a>`;
  }
};

const renderStaffMemberReference = (entry, type, linkText) => {
  const staffMember = mapStaffMember(entry);
  const linkUrl = `/coaching-staff#${slugify(staffMember.name)}`;
  const photoAlt = staffMember.photo?.alt || staffMember.name;
  
  if (type === INLINES.ENTRY_HYPERLINK) {
    return `<a href="${linkUrl}">${linkText || staffMember.name}</a>`;
  }

  if (type === INLINES.EMBEDDED_ENTRY) {
    return `<a href="${linkUrl}">
      ${linkText || staffMember.name}
      <img src="${staffMember.photo.url}" alt="${photoAlt}" style="height: 20px;" />
    </a>`;
  }

  if (type === BLOCKS.EMBEDDED_ENTRY) {
    return `<div style="display: flex;">
      <img src="${staffMember.photo.url}" alt="${photoAlt}" style="height: 100px;" />
      <p><strong>${staffMember.name}</strong><br/>${staffMember.role}</p>
    </div>`;
  }
};

const renderVenueReference = (entry, type, linkText) => {
  const venue = mapVenue(entry);
  
  if (type === INLINES.ENTRY_HYPERLINK
    || type === INLINES.EMBEDDED_ENTRY
  ) {
    return `<a href="${venue.website}/" target="_blank" rel="noopener noreferrer">${linkText || venue.name}</a>`;
  }

  if (type === BLOCKS.EMBEDDED_ENTRY) {
    return `<p>
      ${venue.name}
      <br/>
      <a href="tel:${venue.phoneNumber}" target="_blank" rel="noopener noreferrer">${venue.phoneNumber}</a>
      <br/>
      <a href="${venue.website}" target="_blank" rel="noopener noreferrer">${venue.website}</a>
    </p>`;
  }
};

module.exports = {
  renderRichTextAsHtml,
};
