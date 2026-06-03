const productType = {
    version: "1.0.1",
    tax: "10"
}

//hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getFullName(codeId, productName) {
    doBreakLine();
    console.log("Product - " + codeId + "--" + productName);
}

async function getProductLabel(productName) {
    console.log("Product - " + productName);
}

module.exports = { getFullName, getProductLabel, productType }