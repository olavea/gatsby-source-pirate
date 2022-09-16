module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-pirate",
      options: {
        emoji: "pirate",
        pirateName: process.env.PIRATY_PIRATE_NAME,
      },
    },
  ],
};
