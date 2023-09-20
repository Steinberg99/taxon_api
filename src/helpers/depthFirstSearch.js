const depthFirstSearch = (tree, name) => {
  if (!tree) return null;

  if (tree.name === name) return tree;

  if (tree.children && Array.isArray(tree.children)) {
    for (const child of tree.children) {
      const result = depthFirstSearch(child, name);

      if (result) {
        return result;
      }
    }
  }

  return null;
};

module.exports = depthFirstSearch;
