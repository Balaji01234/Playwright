async function getMatrix(page) {
  let transMatrix = page.evaluate(() => {
    // @ts-ignore
    return store.selectionStack[0].getWorldMatrix();
  });

  return transMatrix;
}

module.exports = getMatrix;
