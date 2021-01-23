const db = require("../models");

module.exports = function(app) {
  // Posts the data from the page to the db
  app.post("/api/vendorInfos", (req, res) => {
    console.log("here" + req.body);
    db.vendorInfos
      .create({
        vendorName: req.body.vendorName,
        service: req.body.service,
        email: req.body.email,
        phone: req.body.phone,
        // hard-coded event foreign key
        eventInfoId: req.body.eventInfoId
      })
      .then(dbVendorInfos => {
        res.json(dbVendorInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Edit vendor
  app.put("/api/vendorInfos/:id", (req, res) => {
    console.log(req.body);
    db.vendorInfos
      .update(
        {
          vendorName: req.body.key0,
          service: req.body.key1,
          email: req.body.key2,
          phone: req.body.key3
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(dbVendorInfos => {
        res.json(dbVendorInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
