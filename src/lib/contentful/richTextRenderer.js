const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { INLINES, BLOCKS } = require("@contentful/rich-text-types");
const { mapFile, mapImage } = require("./assetMapper");
const { mapCommitteeRole, mapPage, mapStaffMember, mapVenue } = require("./contentMapper");
const { removeParagraphsWithinLists } = require("./richTextUtils");

const renderRichTextAsHtml = (value, renderPartial) => {
  if (!value) {
    return "";
  }

  const normalizedValue = removeParagraphsWithinLists(value);

  return documentToHtmlString(normalizedValue, {
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: renderReference(renderPartial),
      [INLINES.ASSET_HYPERLINK]: renderReference(renderPartial),
      [INLINES.EMBEDDED_ENTRY]: renderReference(renderPartial),
      [BLOCKS.EMBEDDED_ENTRY]: renderReference(renderPartial),
      [BLOCKS.EMBEDDED_ASSET]: renderReference(renderPartial),
    }
  });
};

const renderReference = (renderPartial) => (node) => {
  //return `<p><small>***<br/>${JSON.stringify(node)}<br/>***</small></p>`; // for debugging
  
  const referenceType = node.nodeType;
  const target = node?.data?.target;
  const targetId = target?.sys?.id || "unknown";

  if (target) {
    const targetType = target.sys.type;
    const linkText = node.content?.[0]?.value;

    if (targetType === "Asset") {
      const fileType = target.fields.file.contentType;

      if (fileType?.startsWith("image/")) {
        return renderImageReference(target, referenceType, linkText, renderPartial);
      } 
      // add other asset types (e.g. video) as needed
      else {
        return renderFileReference(target, referenceType, linkText, renderPartial);
      }
    }
  
    if (targetType === "Entry") {
      const entryContentType = target?.sys?.contentType?.sys?.id;

      switch (entryContentType) {
        case "committeeRole":
          return renderCommitteeRoleReference(target, referenceType, linkText, renderPartial);
        case "page":
          return renderPageReference(target, referenceType, linkText, renderPartial);
        case "staffMember":
          return renderStaffMemberReference(target, referenceType, linkText, renderPartial);
        case "venue":
          return renderVenueReference(target, referenceType, linkText, renderPartial);
        default:
          console.warn(`No rendering logic defined for entry content type "${entryContentType}"`);
          return `<!-- Unhandled entry reference of content type "${entryContentType}" -->`;
      }
    }
  }

  console.warn(`Reference of type "${referenceType}" to '${targetId}' was not resolved. It may be deleted or unpublished.`);
  return `<!-- Unresolved ${referenceType} reference to '${targetId}' -->`;
};

const renderImageReference = (asset, type, linkText, renderPartial) => {
  const image = mapImage(asset);
  
  return renderPartial("rich-text/image-reference.njk", {
    type,
    linkText,
    image,
  });
};

const renderFileReference = (asset, type, linkText, renderPartial) => {
  const file = mapFile(asset);

  return renderPartial("rich-text/file-reference.njk", {
    type,
    linkText,
    file,
  });
};

const renderCommitteeRoleReference = (entry, type, linkText, renderPartial) => {
  const committeeRole = mapCommitteeRole(entry);

  return renderPartial("rich-text/committee-role-reference.njk", {
    type,
    linkText,
    committeeRole,
  });
};

const renderPageReference = (entry, type, linkText, renderPartial) => {
  const page = mapPage(entry);

  return renderPartial("rich-text/page-reference.njk", {
    type,
    linkText,
    page,
  });
};

const renderStaffMemberReference = (entry, type, linkText, renderPartial) => {
  const staffMember = mapStaffMember(entry);

  return renderPartial("rich-text/staff-member-reference.njk", {
    type,
    linkText,
    staffMember,
  });
};

const renderVenueReference = (entry, type, linkText, renderPartial) => {
  const venue = mapVenue(entry);

  return renderPartial("rich-text/venue-reference.njk", {
    type,
    linkText,
    venue,
  });
};

module.exports = {
  renderRichTextAsHtml,
};
