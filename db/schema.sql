CREATE DATABASE bradley_wedding_db;
USE bradley_wedding_db;
CREATE TABLE where_when(
  venue_name VARCHAR(30) NOT NULL,
  event_date DATE NOT NULL,
  `addrStreet`   varchar(50) NOT NULL   default '',
  `addrCity`     varchar(25) NOT NULL   default '',
  `addrState`    char(2)     NOT NULL   default '',
  `addrZIP`      char(10)    NOT NULL   default '',
  -- https://rosettacode.org/wiki/Table_creation/Postal_addresses#MySQL
);
CREATE TABLE guest_info(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  `addrStreet`   varchar(50) NOT NULL   default '',
  `addrCity`     varchar(25) NOT NULL   default '',
  `addrState`    char(2)     NOT NULL   default '',
  `addrZIP`      char(10)    NOT NULL   default '',
  -- email
  -- phone number
  -- food preference
);
CREATE TABLE vendor_info(
  id INT NOT NULL AUTO_INCREMENT,
  vendor_name VARCHAR(30) NOT NULL,
  service_provided VARCHAR(30) NOT NULL,
  -- email
  -- phone number
);