import app from './app.js';
import { env } from './config/index.js';
import { startJobs } from './jobs/index.js';

app.listen(env.BACKEND_PORT, () => {
  console.log(`Backend running on http://localhost:${env.BACKEND_PORT}`);
  startJobs();
});
