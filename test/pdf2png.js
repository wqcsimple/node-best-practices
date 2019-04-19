/**
 * @author whis admin@wwhis.com
 * @Created 2019-04-16
 */
const fs = require('fs');
const pdf2png = require("pdf2png-mp2")

pdf2png.convert("/Users/whis/Downloads/test.pdf", function(resp){
    if(!resp.success)
    {
        console.log("Something went wrong: " + resp.error);

        return;
    }

    console.log("Yayy the pdf got converted, now I'm gonna save it!");

    fs.writeFile("./example_simple.png", resp.data, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("The file was saved!");
        }
    });
});
