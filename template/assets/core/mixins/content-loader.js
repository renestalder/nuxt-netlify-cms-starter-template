// @ts-check
let contentContext;

export const supportedFileTypes = Object.freeze({
  JSON: Symbol('JSON'),
  FRONTMATTER: Symbol('FRONTMATTER')
});

export const contentLoader = {
  created: function () {
    console.log('Content loader activated');
  },
  methods: {
    queryContentAll,
    queryContent
  }
}

/**
 * Get webpacks file context from the content folder.
 */
function getContext() {
  // @ts-ignore
  contentContext = contentContext || require.context('~/content/', true, /\.(json|md)$/);
  return contentContext;
}

/**
 * Gets a list of all files in a directory
 * @param {string} [folder] Folder to list. Base, and also default if not given, is /content
 */
function getContentFolderList(folder = null) {
  const context = getContext();

  if (folder) {
    return context.keys()
      // If folder given, filter all files that don't belong to the folder
      .filter(filePath => folder ? filePath.indexOf(folder) !== -1 : true);
  }

  return context.keys();
}

/**
 * Get list of available content files stored inside the content/ folder
 * @param {string} folder The folder inside content/ to load content list
 * @param {string} rewriteBase Rewrite content slug to this base url
 */
function queryContentAll(folder = null, rewriteBase = null) {
  const fileExtensionsRegEx = /\.(json|md)$/;
  const context = getContext();

  // We need to add every require.context parameter statically
  // because webpack wont be able to make predictions on when those
  // parameters are dynamic, thus can't load the files.
  let fileList = getContentFolderList(folder);

  const list = fileList
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
 * Get content
 * @param {string} folder Folder to query
 * @param {string} slug Content slug, which also is the file name.
 */
async function queryContent(folder, slug) {
  const basePath = `${folder}/${slug}`;
  const contentList = getContentFolderList(folder);

  let fileType = null;
  let fileExt = null;

  /**
   * We try to find the correct file with help of the slug
   * and decide then, based on the file extensions,
   * which file type it is and which method for reading
   * the content is needed.
   */
  for (let i = 0; i < contentList.length; i++) {
    if (contentList[i].indexOf(slug) !== -1) {
      const fileName = contentList[i];
      fileExt = fileName.split('.').pop();
      fileType = getContentFormat(fileName);
      break;
    }
  }

  if (fileType === supportedFileTypes.JSON) {
    // ~/content needs to be statically in the import statement
    // otherwise webpack breaks.
    let post = await import('~/content/' + basePath + '.' + fileExt);
    return post;
  }

  console.log('Content file not found or file type not supported.');
  return;
}

/**
 * Get content format based on file extensions
 * @param {string} filePath Path string to analyse
 */
function getContentFormat(filePath) {
  switch (filePath.split('.').pop()) {
    case 'json':
      return supportedFileTypes.JSON;
    case 'md':
    case 'markdown':
      return supportedFileTypes.FRONTMATTER;
  }

  return null;
}
