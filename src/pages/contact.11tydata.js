module.exports = {
    eleventyComputed: {
      contactPage: (data) => {
        const list = data.pages.flatList || [];
        return (
          list.find((p) => p.urlPath === "contact") ||
          list.find((p) => p.title === "Contact") ||
          null
        );
      },
    },
  };