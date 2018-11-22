const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../helpers/auth");

// models
const Result = require("../models/Result");
const User = require("../models/User");

// results introduction route
router.get("/introduction", ensureAuthenticated, (req, res) => {
  Result.find({ user: req.user._id }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }

      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/results-introduction", {
        title: "Introduction",
        results: resultJSON,
        resultString: resultString,
        user: user,

      });
    });
  });
});

// results introduction route
router.get("/summary", ensureAuthenticated, (req, res) => {
  Result.find({ user: req.user._id }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }

      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/results-summary", {
        title: "Summary",
        results: resultJSON,
        resultString: resultString,
        user: user,
        summaryActive: true
      });
    });
  });
});

// life factor results route
router.get("/life-factors", ensureAuthenticated, (req, res) => {
  Result.find({
    user: req.user._id,
    section: "Life Factors",
    factor: { $exists: true }
  }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }
      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/life-factors-results", {
        title: "Life Factors",
        results: resultJSON,
        resultString: resultString,
        lifeFactorsActive: true
      });
    });
  });
});

// individual attributes results route
router.get("/individual-attributes", ensureAuthenticated, (req, res) => {
  Result.find({
    user: req.user._id,
    section: "Individual Attributes",
    factor: { $exists: true }
  }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }
      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/attributes-results", {
        title: "Individual Attributes",
        results: resultJSON,
        resultString: resultString,
        individualAttrActive: true
      });
    });
  });
});

// reading rate and recall results route
router.get("/reading", ensureAuthenticated, (req, res) => {
  Result.find({
    user: req.user._id,
    section: "Reading Skills",
    factor: { $exists: true }
  }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }
      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/reading-results", {
        title: "Reading Skills",
        results: resultJSON,
        resultString: resultString,
        readingActive: true
      });
    });
  });
});

// technology factors results route
router.get("/technology-factors", ensureAuthenticated, (req, res) => {
  Result.find({
    user: req.user._id,
    section: "Technical Factors",
    factor: { $exists: true }
  }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }
      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      res.render("results/technology-factors-results", {
        title: "Technical Factors",
        results: resultJSON,
        resultString: resultString,
        technologyFactorsActive: true
      });
    });
  });
});

// typing results route
router.get("/typing", ensureAuthenticated, (req, res) => {
  Result.find({ user: req.user._id }).then(results => {
    const query = { _id: req.user._id };
    User.getUserById(query, (err, user) => {
      if (err) {
        res.send(err);
      }
      var resultString = JSON.stringify(results);
      var resultJSON = JSON.parse(resultString);
      
      res.render("results/typing-results", {
        title: "Typing Skills",
        results: resultJSON,
        resultString: resultString,
        typingActive: true
      });
    });
  });
});

router.get('/*', (req, res, next) => {
  res.redirect("/results/summary")
});

module.exports = router;
