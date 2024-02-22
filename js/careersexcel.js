// // List of Training Centers
// let table = document.querySelector(".careers");
// (async () => {
//     try {
//         let response = await fetch("excel/job-post.xlsx");
//         let arrayBuffer = await response.arrayBuffer();
//         let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
//             type: "array"
//         });
//         let sheetName = workbook.SheetNames[0];
//         let worksheet = workbook.Sheets[sheetName];
//         let jsonData = XLSX.utils.sheet_to_json(worksheet, {
//             header: 1
//         });
//         let htmlTable = "<table class='table table-bordered' style='width:100%'>";
//         htmlTable += "<tr>";
//         for (let header of jsonData[0]) {
//             htmlTable += "<th>" + header + "</th>";
//         }
//         htmlTable += "</tr>";
//         for (let i = 1; i < jsonData.length; i++) {
//             htmlTable += "<tr>";
//             for (let cell of jsonData[i]) {
//                 htmlTable += "<td>" + cell + "</td>";
//             }
//             htmlTable += "</tr>";
//         }
//         htmlTable += "</table>";
//         table.innerHTML = htmlTable;
//     } catch (error) {
//         console.log(error);
//     }
// })();

// List of Training Centers
let table = document.querySelector(".careers");
(async () => {
    try {
        // Include the XLSX library
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.5/xlsx.full.min.js';
        document.head.appendChild(script);

        await new Promise((resolve) => {
            script.onload = resolve;
        });

        let response = await fetch("excel/job-post.xlsx");
        let arrayBuffer = await response.arrayBuffer();
        let workbook = XLSX.read(new Uint8Array(arrayBuffer), {
            type: "array",
        });
        let sheetName = workbook.SheetNames[0]; // assuming the first sheet
        let worksheet = workbook.Sheets[sheetName];
        let jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
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
