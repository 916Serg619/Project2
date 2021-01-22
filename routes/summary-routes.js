const db = require("../models");

module.exports = function(app) {
  // Event Info Import
  // app.get("/api/eventInfos", (req, res) => {
  //   db.eventInfos.findAll({}).then(dbEventInfo => {
  //     db.vendorInfos.findAll({}).then(vendorInfo => {
  //       // const event = dbEventInfo[0];
  //       // console.log(event.eventInfos.dataValues.couple);
  //       // res.render("summary", event);
  //       res.json({
  //         dbEventInfo: dbEventInfo,
  //         vendorInfo: vendorInfo
  //       });
  //     });
  //   });
  // });

  // Searches all event info for specific id or all. displays json data
  app.get("/api/eventInfos/:id?", (req, res) => {
    if (req.params.id) {
      db.eventInfos
        .findOne({
          where: {
            id: req.params.id
          }
        })
        .then(data => {
          return res.json(data);
        });
    } else {
      db.eventInfos.findAll({}).then(dbEventInfo => {
        db.vendorInfos.findAll({}).then(vendorInfo => {
          res.json({
            dbEventInfo: dbEventInfo,
            vendorInfo: vendorInfo
            // eventInfoId: res.params.eventInfoId
          });
        });
      });
    }
  });
  app.delete("/api/eventInfos/:id?", (req, res) => {
    db.eventInfos
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbEventInfo => {
        res.json({
          dbEventInfo: dbEventInfo,
          vendorInfo: vendorInfo
          // eventInfoId: res.params.eventInfoId
        });
      });
  });
};
