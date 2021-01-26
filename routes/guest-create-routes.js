const db = require("../models");

module.exports = function(app) {
  // Posts the data from the page to the db
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
      .then(dbguests => {
        res.json(dbguests);
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
    db.guests
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
};
