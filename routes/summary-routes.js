const db = require("../models");

module.exports = function(app) {
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
          });
        });
      });
    }
  });

  // Delete event
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
        });
      });
  });

  app.get("/api/vendorInfos/:id", (req, res) => {
    db.vendorInfos
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(vendorInfo => {
        res.json({
          vendorInfo: vendorInfo
          // eventInfoId: res.params.eventInfoId
        });
      });
  });
  app.get("/api/vendorInfos", (req, res) => {
    db.vendorInfos.findAll({}).then(vendorInfo => {
      console.log(vendorInfo[id].dataValues.id);
      res.json({
        vendorInfo: vendorInfo
        // eventInfoId: res.params.eventInfoId
      });
    });
  });

  // Edit event
  app.put("/api/eventInfos/:id", (req, res) => {
    db.eventInfos
      .update(
        {
          couple: req.body.key0,
          venueName: req.body.key1,
          eventDate: req.body.key2,
          foodOptionOne: req.body.key3,
          foodOptionTwo: req.body.key4
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(dbEventInfos => {
        res.json(dbEventInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
