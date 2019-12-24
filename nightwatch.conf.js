const path = require('path')

module.exports = {
    src_folders: ['tests'],
    output_folder: path.resolve(__dirname, './reports'),
    globals_path: path.resolve(__dirname, './globals.js'),
    custom_assertions_path: ['custom-assertions'],
    custom_commands_path: ['custom-commands'],
    selenium: {
        start_process: false
    },
    live_output : true, // unbuffered out
    // test_workers: false,
    test_workers: {
        "enabled": true,
        "workers": "auto" // CPUs || {number}
    },
    test_settings: {
        default: {
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix : '',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--no-sandbox', '--headless', '--disable-gpu', 'window-size=1280,1024']   // 'window-size=1280,800'
                },
                acceptSslCerts: true
            }
        }
    }
}
