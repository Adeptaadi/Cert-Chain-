const mongoose = require('mongoose');

async function resetDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/credential-system');
        console.log('Connected to DB');
        await mongoose.connection.db.dropDatabase();
        console.log('Database dropped successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error dropping db', error);
        process.exit(1);
    }
}

resetDB();
