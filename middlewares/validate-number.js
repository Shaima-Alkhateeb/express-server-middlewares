'use strict';

module.exports = (num) => {
  return (req, res, next) => {
    if(typeof num === 'number') {
      req.number = num*num;
      next();
    }
    else {
      next('Try agin is not a number');
    }
  };
};
