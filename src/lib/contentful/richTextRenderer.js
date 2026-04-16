const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { INLINES } = require("@contentful/rich-text-types");

// see contentLinkLookups.js for how these lookups are built
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

  const resolvedPage = linkLookups?.pages?.get?.(targetId);
  if (resolvedPage) {
    const linkText = node.content?.[0]?.value || resolvedPage.title;
    return `<a href="/${resolvedPage.urlPath}/">${linkText}</a>`;
  }

  const resolvedStaffMember = linkLookups?.staffMembers?.get?.(targetId);
  if (resolvedStaffMember) {
    const linkText = node.content?.[0]?.value || `${resolvedStaffMember.name} (${resolvedStaffMember.role})`;
    const slug = resolvedStaffMember.name.toLowerCase().replace(/\s+/g, '-');
    return `<a href="/coaching-staff/#${slug}">${linkText}</a>`;
  }

  const resolvedVenue = linkLookups?.venues?.get?.(targetId);
  if (resolvedVenue) {
    const linkText = node.content?.[0]?.value || resolvedVenue.name;

    if (resolvedVenue.website) {
      return `<a href="${resolvedVenue.website}">${linkText}</a>`;
    }
    return linkText; // no link if no website provided
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
