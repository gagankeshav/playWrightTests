const report = require("multiple-cucumber-html-reporter");
const b = require('../platform_details.json')

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Test Automation Report",
    pageTitle: "Test Report",
    displayDuration: true,
    metadata: {
        browser: {
            name: b.bname[0],
            version: b.bversion[0],
        },
        platform: {
            name: "OSX",
            version: "Ventura",
        }
    }
});