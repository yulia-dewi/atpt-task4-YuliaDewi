import { exec } from 'child_process';
import { _android as android, AndroidDevice } from '@playwright/test';
import util from 'util';

const execAsync = util.promisify(exec);

export async function launchEmulatorAndWait(avdName: string, password?: string ): Promise<AndroidDevice> {
    let [device]: AndroidDevice[] = await android.devices(); 

    if (device != undefined) return device;

    exec(`emulator -avd ${avdName} -no-snapshot`, () => {});

    // Wait for device to appear
    while (!device) {
        [device] = await android.devices();
        await new Promise(res => setTimeout(res, 1000));
    }

    // Wait for full boot
    let bootCompleted: string = '0';

    while (bootCompleted.trim() !== '1') {
        try {
            bootCompleted = (await execAsync(`adb shell getprop sys.boot_completed`)).stdout.trim();
        } catch {
            bootCompleted = '0';
        }
        
        await new Promise(res => setTimeout(res, 1000));
    }

    if (password) {
        await openLockedDevice(device, password);
    }

    return device;
}

async function openLockedDevice(device: AndroidDevice, password: string): Promise<void> {
    await device.shell('input keyevent KEYCODE_WAKEUP');
    await device.shell('input swipe 300 1000 300 100');
    await device.shell(`input text ${password}`);
    await device.shell('input keyevent KEYCODE_ENTER');
    await new Promise(res => setTimeout(res, 3000));
}
