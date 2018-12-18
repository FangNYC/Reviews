import React from "react";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import Reviews from "../client/src/index.jsx";
import express from "express";
import path from "path";
import controller from "./controller.js";

const router = express.Router();

router.get("/reviews", controller.cache, controller.getAllReviews);
router.get("/ratings", controller.getRatings);
router.get("/search", controller.search);
router.post("/reviews", controller.postReview);
router.put("/reviews", controller.updateReview);
router.delete("/reviews", controller.deleteReview);
router.get("/loaderio*", controller.getLoader);

const source = path.join(__dirname, "../client/dist/index.html");

router.get("/*", (req, res) => {
  const app = ReactDOMServer.renderToString(<Reviews />);

  const indexFile = path.resolve(source);

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    return res.send(
      data.replace('<div id="reviews"></div>', `<div id="reviews">${app}</div>`)
    );
  });
});

module.exports = router;
