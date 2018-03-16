// @ts-check

export const supportedFileTypes = Object.freeze({
  JSON: Symbol('JSON'),
  FRONTMATTER: Symbol('FRONTMATTER')
});

export const contentLoader = {
  created: function () {
    console.log('Content loader activated');
  },
  methods: {
    queryContentAll
  }
}

/**
 * Get list of available content files stored inside the content/ folder
 * @param {string} folder The folder inside content/ to load content list
 * @param {string} rewriteBase Rewrite content slug to this base url
 */
function queryContentAll(folder = null, rewriteBase = null) {
  const fileExtensionsRegEx = /\.(json|md)$/;

  // We need to add every require.context parameter statically
  // because webpack wont be able to make predictions on when those
  // parameters are dynamic, thus can't load the files.
  // @ts-ignore
  const context = require.context('~/content/', true, /\.(json|md)$/);

  const list = context
    .keys()
    // If folder given, filter all files that don't belong to the folder
    .filter(filePath => folder ? filePath.indexOf(folder) !== -1 : true)
    // Create object with file contents
    .map(filePath => {
      const fileContent = context(filePath);
      const contentFormat = getContentFormat(filePath);
      let route = `${filePath.replace(fileExtensionsRegEx, '').replace('./', '')}`;

      if (rewriteBase) {
        route = `${rewriteBase}/${filePath.split('/').pop().replace(fileExtensionsRegEx, '')}`;
      }

      return {
        ...fileContent,
        _meta: {
          path: route,
          originFormat: contentFormat
        }
      }
    })
    // Filter invalid file and content formats
    .filter(content => content._meta.originFormat === supportedFileTypes.JSON);

  return list;
}

/**
 * Get content format based on file extensions
 * @param {string} filePath Path string to analyse
 */
function getContentFormat(filePath) {
  switch (filePath.split('.').pop()) {
    case 'json':
      return supportedFileTypes.JSON;
  }

  return null;
}
