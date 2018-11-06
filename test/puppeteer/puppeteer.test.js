/**
 * @author whis admin@wwhis.com
 * @Created 11/5/18
 */
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhoneX = devices['iPhone X'];


puppeteer.launch().then(
    async browser => {
        const page = await browser.newPage();
        await page.goto("http://192.168.1.145:8097/ypmall/ypsc/agreement.html?addressId=91&carTypeId=2003&toScroll=first&financingPlanId=395&auth=16436-2V87R3615AD40G3DVB9G01C9CA9FW9DMA0A1CI50E8CH3DC0&instalmentPlanId=430",
            {waitUntil: ['networkidle0']});
        // await page.emulate(iPhoneX);

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

        // 截图
        // await page.screenshot({
        //     path: 'screenshot.png',
        //     fullPage: true,
        // });

        // pdf
        await page.pdf({
            path: 'agreement.pdf'
        })

        await page.close();
        await browser.close();
    }
)
