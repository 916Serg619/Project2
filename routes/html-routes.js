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
      res.render("members.handlebars", {
        event: dbEventInfo
      });
    });
  });
  //Path to login page
  app.get("/signup", (req, res) => {
    res.render("signup.handlebars");
  });

  app.get("/signup", (req, res) => {
    res.render("signup.handlebars");
  });

  // Create new event page
  app.get("/planner", isAuthenticated, (req, res) => {
    res.render("planner.handlebars");
  });

  // Vendor creation page
  app.get("/vendorInfos/:id?", isAuthenticated, (req, res) => {
    res.render("vendor-create.handlebars", {
      eventInfoId: req.params.id
    });
  });

  // Guest creation page
  app.get("/guests/:id?", isAuthenticated, (req, res) => {
    res.render("guest-create.handlebars", {
      eventInfoId: req.params.id
    });
  });

  // Summary Page/Event summary
  app.get("/summary/:id?", isAuthenticated, (req, res) => {
    pageNum = req.params.id;
    // Find that event
    db.eventInfos
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(dbEventInfo => {
        console.log(dbEventInfo);
        const event = dbEventInfo.dataValues;
        // Finds all associated vendors
        db.vendorInfos
          .findAll({
            where: { eventInfoId: req.params.id }
          })
          .then(dbVendorInfos => {
            const vendor = dbVendorInfos;
            // Finds all associated guests
            db.Guest.findAll({
              where: { eventInfoId: req.params.id }
            }).then(dbGuest => {
              console.log(dbGuest);
              const guest = dbGuest;
              res.render("summary", {
                event: event,
                vendor: vendor,
                guest: guest
              });
            });
          });
      });
  });
};
