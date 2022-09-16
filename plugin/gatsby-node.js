// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

//const fetch = require('fetch');

const fetch = require("node-fetch");

const { EMOJIS } = require("./constants");

const validKeys = Object.keys(EMOJIS);

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    message: Joi.string().default("ARR from the piraty Plugin"),
    emoji: Joi.string()
      .valid(...validKeys)
      .default(validKeys[0])
      .description(`Select between the emoji options`),
    pirateName: Joi.string(),
  });
};

// gatsby-node.js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
// handle Error function

function handleError(err) {
  console.log(`Oh NOOO!`);
}

const pirateJsonPlaceholder = async () => {
  // Endpoint variable to source piraty api
  const piratyEndpoint = `https://jsonplaceholder.typicode.com/todos`;

  const piratPromise = fetch(piratyEndpoint);

  piratPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(handleError);
};

exports.sourceNodes = async (gatsbyUtils) => {
  const { actions, createNodeId, createContentDigest, reporter } = gatsbyUtils;
  const { createNode } = actions;

  const data = await pirateJsonPlaceholder();
  console.log(data);
  createNode({
    id: createNodeId(data.id),
    internal: {
      type: `pirateJsonPlaceholder`,
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data),
    },
  });
};

// 3.1. yarn add gatsby-🐧-utils

// 3.2. 💩🐸On🔌👸
// let coreSupportsOnPluginInit = undefined;
// try {
//   // 3.3. is💜NodeLife🚴‍♀️🐸 from npm i gatsby-🐧-utils
//   const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);
//   // 3.4. if is💜NodeLife🚴‍♀️🐸(`on🐧👸`) { } else if () {}
//   if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
//     coreSupportsOnPluginInit = "stable";
//   } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
//     coreSupportsOnPluginInit = "unstable";
//   }
// 3.5. try {} catch (`Could not check if gatsby supports onPluginInit lifecycle 🚴‍♀️`);
// } catch (error) {
//   console.error(`Could not check if gatsby supports onPluginInit lifecycle 🚴‍♀️`);
// }

// 3.6.  👸🌐🌀 initializeGlobalState
// let globalPluginOptions = {};

// const initializaGlobalState = ({ reporter }, pluginOptions) => {
//   globalPluginOptions = pluginOptions;
// };
// // 3.7 if (💩🐸On🐧👸 === 'stable') {} else if () {} else {🤯.onPreInit = 👸🌐🌀}

// if (coreSupportsOnPluginInit === "stable") {
//   exports.onPluginInit = initializaGlobalState;
// } else if (coreSupportsOnPluginInit === "unstable") {
//   exports.unstable_onPluginInit = initializaGlobalState;
// } else {
//   exports.onPreInit = initializaGlobalState;
// }

// const createPiratyNodes = () => {
//   console.log(`create Piraty Nodes`);
// };

// // Add async

// exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
//   // deleted code
//   // Add await

//   await createPiratyNodes(gatsbyUtils, piraty, globalPluginOptions, pirateName);
// };
