module.exports = {
    eleventyComputed: {
      aboutPage: (data) => {
        const list = data.pages || [];
        return (
          list.find((p) => p.urlPath === "about") ||
          list.find((p) => p.title === "About") ||
          null
        );
      },
    },
  };