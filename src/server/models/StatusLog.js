import bookshelf from '../db';

const TABLE_NAME = 'status_logs';

class StatusLog extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  static fetchLatestStatusLogs() {
    return this.query(qb => qb.groupBy('name') .orderBy('created_at', 'DESC'))
               .fetchAll();
  }
}

export default StatusLog;
