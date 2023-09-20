const router = require("express").Router();
const data = require("../data/taxonomiesTree.json");
const depthFirstSearch = require("../helpers/depthFirstSearch");

router.get("/:kingdom/:taxon?", async (req, res) => {
  const { kingdom, taxon } = req.params;
  const kingdomTree = data.kingdoms.find((obj) => obj.name === kingdom) || null;
  const result = taxon ? depthFirstSearch(kingdomTree, taxon) : kingdomTree;

  if (result) {
    result.children = result.children.map((child) => ({
      name: child.name,
      total_occurrences: child.total_occurrences
    }));
  }

  res.json(result);
});

// Export the router
module.exports = router;
