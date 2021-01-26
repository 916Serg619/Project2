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
    db.vendorInfos
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbEventInfo => {
        res.json({
          dbEventInfo: dbEventInfo
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
          eventDate: req.body.key2
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
  app.post("/api/guests", (req, res) => {
    console.log("here" + req.body);
    db.Guest.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      // hard-coded event foreign key
      eventInfoId: req.body.eventInfoId
    })
      .then(dbGuests => {
        res.json(dbGuests);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Edit guest
  app.put("/api/guests/:id", (req, res) => {
    console.log(req.body);
    db.Guest.update(
      {
        firstName: req.body.key0,
        lastName: req.body.key1,
        email: req.body.key2,
        phone: req.body.key3
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbGuests => {
        res.json(dbGuests);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.delete("/api/guests/:id?", (req, res) => {
    db.Guest.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbGuests => {
      res.json({
        dbGuests: dbGuests
      });
    });
  });
  app.get("/api/guests", (req, res) => {
    db.Guest.findAll({}).then(dbGuests => {
      res.json({
        dbGuests: dbGuests
        // eventInfoId: res.params.eventInfoId
      });
    });
  });
  app.get("/api/guests/:id", (req, res) => {
    db.Guest.findOne({
      where: [
        {
          id: req.params.id
        }
      ]
    }).then(dbGuests => {
      res.json({
        dbGuests: dbGuests
        // eventInfoId: res.params.eventInfoId
      });
    });
  });
};
