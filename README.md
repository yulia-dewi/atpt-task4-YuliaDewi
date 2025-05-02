# playwright_training

## Requirements 
- OS Windows 10 or Greater.
- Mac OS 10.15 or Greater.
- Laptop / PC with RAM 8 GB or Higher.
- Node.JS 16 or above (https://nodejs.org/en/download).
- Visual Studio Code (https://code.visualstudio.com/download)
- Plugin for Visual Studio Code :
        - Playwright test for VSCode
        - Playwright test Snippet

## Environment Variables
This template use **dev** and **staging** environment which located on folder **resources/variables**
There are different way to set environment via CLI (command Line) on MacOS and Windows.

- MacOS => **ENV=staging npx playwright test**
- Windows => **set ENV=staging && npx playwright test**

The environment variable has been set **dev** as default.

## Shortcut
Normally playwright test run by write **npx playwright test** in CLI.
However, the shortcut has been created to make it easier.

- **npm run test** Run all test cases in spec folder.
- **npm run debug** Run all test cases in spec folder in debug mode.
- **npm run error** Run all test cases in spec folder with tag @error.
- **npm run regression** Run all test cases in spec folder with file name contains "regression".
- **npm run sanity** Run all test cases in spec folder with file name contains "sanity".
- **npm run staging** Run all test cases in spec folder with staging data. (MacOS)
- **npm run staging_windows** Run all test cases in spec folder with staging data. (Windows)
- **npm run record** Run record windows for saucedemo.com page.
- **npm run ui** Open UI windows for running automation.

