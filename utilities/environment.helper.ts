export function argParser(stagingData: string, devData: string): string {
    const env = process.env.ENV || 'dev';
    const data = env === 'staging' ? stagingData : devData;

    return data;
}