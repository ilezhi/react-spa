if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configStore');
} else {
  module.exports = require('./AppStore');
}
