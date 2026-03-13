import cron from 'node-cron';
import { runPriceCheckJob } from './price-check.job.js';
import { runAlertSenderJob } from './alert-sender.job.js';

export const startJobs = (): void => {
  // TODO: Step 7 — runs every 6 hours
  cron.schedule('0 */6 * * *', async () => {
    await runPriceCheckJob();
    await runAlertSenderJob();
  });
};
