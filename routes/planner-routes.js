const db = require("../models");

module.exports = function(app) {
  app.get("/api/eventInfos", (req, res) => {
    db.eventInfos.findAll({}).then(dbeventInfo => {
      res.json(dbeventInfo);
    });
  });

  // Create new event
  app.post("/api/eventInfos", (req, res) => {
    console.log(req.body);
    db.eventInfos
      .create({
        couple: req.body.couple,
        venueName: req.body.venueName,
        eventDate: req.body.eventDate
      })
      .then(dbEventInfos => {
        res.json(dbEventInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
