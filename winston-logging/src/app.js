const log = require('./config/winston.js');

for (let i = 0; i < 100000; i++) {
  log.info();
  log.info(new Date());
  log.debug('hello debug');
  log.info('hello info');
  log.warn('hello warn');
  log.error('hello error');
}
