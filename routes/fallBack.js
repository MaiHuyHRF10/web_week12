const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  let requestObj = {
    status: "ERR",
    data: "ACTION-NOT-FOUND",
  };
  response.json(reqObj);
});

module.exports = router;
