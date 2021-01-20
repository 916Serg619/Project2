const db = require("../models");

module.exports = function(app) {
  // Posts the data from the page to the db
  app.post("/api/vendorInfos", (req, res) => {
    console.log(req.body);
    db.vendorInfos
      .create({
        vendorName: req.body.vendorName,
        service: req.body.service,
        email: req.body.email,
        phone: req.body.phone
      })
      .then(dbVendorInfos => {
        res.json(dbVendorInfos);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
