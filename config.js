const { resolve } = require('path');

module.exports = {
  publicRoot: process.env.NODE_ENV === 'production' ? 
    resolve('../course-jsbasic-frontend/dist') : resolve('../course-jsbasic-frontend')
};