const fs = require("fs");

const filePath = "/dist/team.html";

if (fs.existsSync(filePath)) {
    console.log("team.html exists");
    fs.unlink(filePath);
} else {
    console.log("team.html does not exist.");
};