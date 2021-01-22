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
        where: [
          {
            id: req.params.id
          }
        ]
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
      res.json({
        vendorInfo: vendorInfo
        // eventInfoId: res.params.eventInfoId
      });
    });
  });
  app.delete("/api/vendorInfos/:id?", (req, res) => {
    db.eventInfos.destroy({
      where: {
        id: req.params.id
      }
    });
  });
};
