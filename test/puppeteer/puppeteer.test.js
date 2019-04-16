/**
 * @author whis admin@wwhis.com
 * @Created 11/5/18
 */
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhoneX = devices['iPhone X'];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.goto('https://whis.wang', {waitUntil: 'networkidle0'});
    await page.goto("https://ynr.oss-cn-hangzhou.aliyuncs.com/2019/4/16/1555379189359_whis.pdf",
        {waitUntil: ['networkidle0']});

    // await page.emulate(iPhoneX);

    await page.screenshot({
        path: 'screenshot.png',
        fullPage: true,
    });

    //调用evaluate 方法返回id 为form元素的位置信息
    // let clip = await page.evaluate(() => {
    //     let {
    //         x,
    //         y,
    //         width,
    //         height
    //     } = document.getElementById('form').getBoundingClientRect();
    //     return {
    //         x,
    //         y,
    //         width,
    //         height
    //     };
    // });

    // pdf
    // await page.pdf({
    //     path: 'agreement.pdf'
    // })

    await browser.close();
})();
