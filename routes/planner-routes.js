const db = require("../models");


module.exports = function(app) {
  // app.get("/api/eventInfos", (req, res) => {
  //   db.eventInfo.findAll({}).then(dbeventInfo => {
  //     res.json(dbeventInfo);
  //   });
  // });

  // app.post("/api/eventInfos", (req, res) => {
  //   db.eventInfo
  //     .create({
  //       venue: req.body.venueInput
  //     })
  //     .then(dbeventInfo => {
  //       res.json(dbeventInfo);
  //     });
  // });

  app.post("/api/eventInfos", (req, res) => {
    console.log(req.body);
    db.eventInfos.create({
      venueName: req.body.venueName
    })
      .then(dbEventInfos => {
        res.json(dbEventInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
