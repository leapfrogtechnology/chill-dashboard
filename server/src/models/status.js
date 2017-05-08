import bookshelf from '../db';

const TABLE_NAME = 'status';

let Status = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  hasTimestamps: true
});

export default Status;
