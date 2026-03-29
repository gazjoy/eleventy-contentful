module.exports = {
    eleventyComputed: {
      contactPage: (data) => {
        const list = data.pages || [];
        return (
          list.find((p) => p.slug === "contact") ||
          list.find((p) => p.title === "Contact") ||
          null
        );
      },
    },
  };