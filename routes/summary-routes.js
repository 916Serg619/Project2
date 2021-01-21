const db = require("../models");

module.exports = function(app) {
  // Event Info Import
  app.get("/api/eventInfos", (req, res) => {
    db.eventInfos.findAll({}).then(dbEventInfo => {
      db.vendorInfos.findAll({}).then(vendorInfo => {
        // const event = dbEventInfo[0];
        // console.log(event.eventInfos.dataValues.couple);
        // res.render("summary", event);
        res.json({
          dbEventInfo: dbEventInfo,
          vendorInfo: vendorInfo
        });
      });
    });
  });
  // Vendor Data Import
  // app.get("/api/vendorInfos", (req, res) => {
  //   db.vendorInfos.findAll({}).then(vendorInfo => {
  //     const row = vendorInfo[0];
  //     res.render("summary", row);
  //     // res.json(dbEventInfo);
  //     res.json(row);
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

  // app.post("/api/eventInfos", (req, res) => {
  //   console.log(req.body);
  //   db.eventInfos
  //     .create({
  //       couple: req.body.couple,
  //       venueName: req.body.venueName,
  //       eventDate: req.body.eventDate,
  //       addressStreet: req.body.addressStreet,
  //       addressCity: req.body.addressCity,
  //       foodOptionOne: req.body.foodOptionOne,
  //       foodOptionTwo: req.body.foodOptionTwo
  //     })
  //     .then(dbEventInfos => {
  //       res.json(dbEventInfos);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
};
