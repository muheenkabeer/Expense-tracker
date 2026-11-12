const dns = require('dns');

// Local-dev workaround: on some networks Node's default DNS fails to resolve
// MongoDB Atlas SRV records (querySrv ECONNREFUSED). Use public DNS instead.
if (process.env.NODE_ENV !== 'production') {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
}

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

