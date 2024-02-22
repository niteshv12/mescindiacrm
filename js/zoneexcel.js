// List of Training Centers
let table = document.querySelector(".privateTcEast-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[4];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table1 = document.querySelector(".privateTcNorth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[5];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table1.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table2 = document.querySelector(".privateTcWest-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[6];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table2.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table3 = document.querySelector(".privateTcSouth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[7];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table3.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();


// List of Training Centers
let table5 = document.querySelector(".govtTcEast-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table5.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table6 = document.querySelector(".govtTcNorth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[1];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table6.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table7 = document.querySelector(".govtTcWest-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[2];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table7.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();
// List of Training Centers
let table8 = document.querySelector(".govtTcSouth-data");
(async () => {
    try {
        let response = await fetch("excel/List of Training Centers.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[3];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered' style='width:100%'>";
        htmlTable += "<tr>";
        for (let header of jsonData[0]) {
            htmlTable += "<th>" + header + "</th>";
        }
        htmlTable += "</tr>";
        for (let i = 1; i < jsonData.length; i++) {
            htmlTable += "<tr>";
            for (let cell of jsonData[i]) {
                htmlTable += "<td>" + cell + "</td>";
            }
            htmlTable += "</tr>";
        }
        htmlTable += "</table>";
        table8.innerHTML = htmlTable;
    } catch (error) {
        console.log(error);
    }
})();