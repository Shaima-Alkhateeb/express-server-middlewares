'use strict';

module.exports = (err, req, res, next) => {
  res.status(500).json({
    code: 500,
    message: `Server Error: ${err.message || err}`
  });

};
