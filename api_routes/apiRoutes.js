const axios = require("axios");
const router = require("express").Router();

router.get("/api/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

  router.post("/api/books", (req, res) => {
    axios
      .post("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

  router.delete("/api/books/:id", (req, res) => {
    axios
      .delete("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;

