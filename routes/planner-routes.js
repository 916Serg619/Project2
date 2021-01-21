const db = require("../models");

module.exports = function(app) {
  app.get("/api/eventInfos", (req, res) => {
    db.eventInfos.findAll({ 
      include: db.vendorinfos
    }).then(dbeventInfo => {
      res.json(dbeventInfo);
    });
  });

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
    db.eventInfos
      .create({
        couple: req.body.couple,
        venueName: req.body.venueName,
        eventDate: req.body.eventDate,
        addressStreet: req.body.addressStreet,
        addressCity: req.body.addressCity,
        foodOptionOne: req.body.foodOptionOne,
        foodOptionTwo: req.body.foodOptionTwo
      })
      .then(dbEventInfos => {
        res.json(dbEventInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
