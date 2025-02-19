import dotenv from 'dotenv';
import dbConfig from './configs/dbConfig.js';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 8002;

async function startServer() {
  try {
    await dbConfig();
    app.listen(PORT, () => {
      console.log(`Dazhboard service running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();