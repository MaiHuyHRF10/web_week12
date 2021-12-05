const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  let requestObj = {
    status: "OK",
    data: [1, 2, 3, 4, 5],
  };
  response.json(requestObj);
});

router.get("/:id", (request, response) => {
  let id = req.params.id;
  let requestObj = {
    status: "OK",
    data: { masv: id },
  };
  response.json(requestObj);
});

router.put("/:id", (request, response) => {
  let requestObj = {
    status: "OK",
    data: request.body,
  };
  response.json(requestObj);
});

module.exports = router;
