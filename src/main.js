import app from './config/app.js';
import { PORT, HOST } from './config/env.js';

const startServer = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running ${HOST}`);
    });
  } catch (error) {
    console.error(`Server Error: ${error}`);
  }
};
