const { configResolver } = require('../ioHelpers').dethunked;
const sanitizeFolderName = require('../utils/sanitizeFolderName');
const { PROJECTS_DIR, MODEL_DB } = require('../config');
const path = require('path');

const findStageContainerFilePath = async (sc) => {
  const scg = await configResolver(MODEL_DB.STAGE_CONTAINER_GROUPS, sc.stageContainerGroupId);

  return path.join(PROJECTS_DIR,
    sanitizeFolderName(scg.title),
    sanitizeFolderName(sc.version));
}

module.exports = findStageContainerFilePath;