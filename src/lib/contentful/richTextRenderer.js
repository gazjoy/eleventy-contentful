const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { INLINES } = require("@contentful/rich-text-types");

const renderRichTextAsHtml = (value, linkLookups) => {
  if (!value) {
    return "";
  }

  return documentToHtmlString(value, {
    renderNode: {
      // in future could handle links and embeds differently
      [INLINES.ENTRY_HYPERLINK]: renderLinkToEntry(linkLookups),
      [INLINES.EMBEDDED_ENTRY]: renderLinkToEntry(linkLookups),
    }
  });
};

const renderLinkToEntry = (linkLookups) => (node) => {
  const target = node?.data?.target;
  const targetId = target?.sys?.id;

  const resolvedLocation = linkLookups?.locations?.get?.(targetId);
  if (resolvedLocation) {
    const linkText = node.content?.[0]?.value || resolvedLocation.name;

    if (resolvedLocation.website) {
      return `<a href="${resolvedLocation.website}">${linkText}</a>`;
    }
    return linkText; // no link if no website provided
  }

  const resolvedPage = linkLookups?.pages?.get?.(targetId);
  if (resolvedPage) {
    const linkText = node.content?.[0]?.value || resolvedPage.title;
    return `<a href="/${resolvedPage.urlPath}/">${linkText}</a>`;
  }

  const resolvedTeamMember = linkLookups?.teamMembers?.get?.(targetId);
  if (resolvedTeamMember) {
    const linkText = node.content?.[0]?.value || resolvedTeamMember.name;
    return `<a href="mailto:${resolvedTeamMember.email}">${linkText}</a>`;
  }

  console.warn(`Could not resolve linked entry with ID ${targetId}`);
  if (node.content?.[0]?.value) {
    return node.content[0].value; // fallback to link text if available
  }

  return `<!-- Unresolved link to entry with ID ${targetId} -->`;
};

module.exports = {
  renderRichTextAsHtml,
};
