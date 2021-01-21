// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup.handlebars");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("index.handlebars");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    db.eventInfos.findAll({}).then(dbEventInfo => {
      const event = dbEventInfo;
      console.log(event);
      res.render("members.handlebars", {
        event: event
      });
    });
  });

  app.get("/planner", isAuthenticated, (req, res) => {
    res.render("planner.handlebars");
  });

  // Vendor creation page
  app.get("/vendorInfos", isAuthenticated, (req, res) => {
    res.render("vendor-create.handlebars");
  });

  // Summary Page
  // app.get("/summary", isAuthenticated, (req, res) => {
  //   db.eventInfos.findAll({}).then(dbEventInfo => {
  //     const event = dbEventInfo[0].dataValues;
  //     // console.log(event);
  //     db.vendorInfos.findAll({}).then(dbVendorInfos => {
  //       // const vendor = dbVendorInfos[0].dataValues;
  //       const vendor = dbVendorInfos;
  //       // console.log(vendor);
  //       res.render("summary", {
  //         event: event,
  //         vendor: vendor
  //       });
  //     });
  //   });
  // });

  // Summary Page rendering for each wedding
  app.get("/summary/:id?", isAuthenticated, (req, res) => {
    pageNum = req.params.id;
    db.eventInfos
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(dbEventInfo => {
        console.log(dbEventInfo);
        const event = dbEventInfo.dataValues;
        db.vendorInfos.findAll({}).then(dbVendorInfos => {
          const vendor = dbVendorInfos;
          res.render("summary", {
            event: event,
            vendor: vendor
          });
        });
      });
  });
};
