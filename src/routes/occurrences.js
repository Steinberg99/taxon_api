const router = require("express").Router();
const data = require("../data/occurrences.json");
const binarySearch = require("../helpers/binarySearch");

router.get("/:species", (req, res) => {
  const { species } = req.params;
  const result = binarySearch(data.occurrences, species);

  res.json(result);
});

// Export the router
module.exports = router;
