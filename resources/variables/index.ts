import { configDev as devConfig } from "./dev.data";
import { configStaging as stagingConfig } from "./staging.data";

const env = process.env.ENV || 'dev';
export const variable = env === 'staging' ? stagingConfig : devConfig;