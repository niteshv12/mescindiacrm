// Certified Trainers and Assessors
let table = document.querySelector(".trainers-data");
(async () => {
    try {
        let response = await fetch("excel/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[0];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered'>";
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
// Certified Trainers and Assessors
let table1 = document.querySelector(".masterTrainers-data");
(async () => {
    try {
        let response = await fetch("excel/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[1];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered'>";
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
// Certified Trainers and Assessors
let table2 = document.querySelector(".assesorMaster-data");
(async () => {
    try {
        let response = await fetch("excel/Certified Trainers and Assessors.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array"
        });
        let sheetName = workbook.SheetNames[2];
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1
        });
        let htmlTable = "<table class='table table-bordered'>";
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