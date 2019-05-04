const arr = ["Generator", "lstree", "unzipper", "Safe-emitter", "Addons-Manager", "Eslint-config", "Utils", "Config-Migration",
    "is", "Units", "Arg-parser", "Lazy", "Queue", "Npm-registry", "Mib-Parser", "TimeMap", "Generator", "lstree", "unzipper",
    "Safe-emitter", "Addons-Manager", "Eslint-config", "Utils", "Config-Migration", "is", "Units", "Arg-parser", "Lazy", "Queue",
    "Npm-registry", "Mib-Parser", "TimeMap", "Winservices", "Winni", "Winmem", "Nodejs-downloader", "Config", "Windrive",
    "Safe-emitter", "Addons-Manager", "Utils", "Config-Migration", "is", "Units", "Arg-parser", "Lazy", "Queue", "Npm-registry",
    "Mib-Parser", "TimeMap", "Winservices", "Winni", "Winmem", "Nodejs-downloader", "Config", "Windrive", "Generator", "lstree",
    "unzipper", "Safe-emitter", "Addons-Manager", "Eslint-config", "Utils", "Config-Migration", "is", "Units", "Arg-parser",
    "Lazy", "Queue", "Nodejs-downloader", "Config", "Windrive"];

function addRow(array) {
    const tableRef = document.getElementById("addon_table");

    for (const ind of array) {
        const newRow = tableRef.insertRow(0);
        const newCell = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);
        const newText = document.createTextNode(ind);
        newCell.appendChild(newText);
        const btn = document.createElement("BUTTON");
        btn.innerHTML = "Settings";
        newCell2.appendChild(btn);
    }
}
addRow(arr);
