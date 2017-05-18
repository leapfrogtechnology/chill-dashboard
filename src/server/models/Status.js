import bookshelf from '../db';

const TABLE_NAME = 'status';

class Status extends bookshelf.Model {
    get tableName() {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true
    }
}

export default Status;
