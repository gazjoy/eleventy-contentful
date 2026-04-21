const { BLOCKS } = require("@contentful/rich-text-types");

/**
 * Contentful rich text often emits paragraph nodes inside list items.
 * This normalizes the rich text JSON before rendering by unwrapping paragraph
 * nodes anywhere beneath ordered/unordered list nodes.
 */
const removeParagraphsWithinLists = (richTextJson) => {
  const jsonClone = JSON.parse(JSON.stringify(richTextJson));

  const isListNode = (node) => {
    return node?.nodeType === BLOCKS.UL_LIST || node?.nodeType === BLOCKS.OL_LIST;
  };

  const isParagraphNode = (node) => {
    return node?.nodeType === BLOCKS.PARAGRAPH;
  };

  const normalizeNode = (node, isWithinList = false) => {
    if (!node || typeof node !== "object") {
      return node;
    }

    const withinList = isWithinList || isListNode(node);

    if (Array.isArray(node.content)) {
      node.content = node.content.flatMap((child) => {
        const normalizedChild = normalizeNode(child, withinList);

        if (withinList && isParagraphNode(normalizedChild)) {
          return normalizedChild.content || [];
        }

        return [normalizedChild];
      });
    }

    return node;
  };

  return normalizeNode(jsonClone);
};

module.exports = {
  removeParagraphsWithinLists,
};
