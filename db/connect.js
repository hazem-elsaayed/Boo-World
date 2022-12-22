const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

exports.connect = async (dbName = 'task_db') => {
  try {
    const mongoInstance =  await MongoMemoryServer.create();
    const uri =  mongoInstance.getUri()
    await mongoose.connect(`${uri}${dbName}`);
    console.log(`${uri}${dbName}`);
    console.log('Successfully connected to the database');
  } catch (error) {
    console.log('Could not connect to the database. ', error);
  }
};

exports.disconnect = () => {
  mongoose.connection.close
}
