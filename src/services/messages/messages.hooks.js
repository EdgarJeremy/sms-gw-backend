const { authenticate } = require('@feathersjs/authentication').hooks;

const authenticateKey = require('../../hooks/authenticate-key');

const sendSms = require('../../hooks/send-sms');

module.exports = {
  before: {
    all: [authenticateKey()],
    find: [],
    get: [],
    create: [sendSms()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
