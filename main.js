window.onload = () => {
    let tabs = document.querySelectorAll("[data-tab]");

    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let page_num = tab.dataset.tab;
    
        tab.addEventListener("click", () => {
            document.querySelector(".tab.active").classList.remove("active");
            tab.classList.add("active");
    
            changePage(page_num);
        })
        
    }
    
    function changePage(page_num) {
        document.querySelector(".page.active").classList.remove("active");
        document.querySelector(`[data-page="${page_num}"]`).classList.add("active");
    }

    /*Converters*/

    /*Meter to Feet*/
    function getMeterToFeet(meter) {
        return meter * 3.28084;
    }
    document.getElementById("btn_ConvertMeter").addEventListener("click", () => {
        document.getElementById("out_ConvertedMeter").value = getMeterToFeet(document.getElementById("in_Meter").value);
    })

    /*Feet to Meter*/
    function getFeetToMeter(feet) {
        return feet / 3.28084
    }
    document.getElementById("btn_ConvertFeet").addEventListener("click", () => {
        document.getElementById("out_ConvertedFeet").value = getFeetToMeter(document.getElementById("in_Feet").value);
    })

    /*Celsius to Fahrenheit*/
    function getCelToFah(cel) {
        return (cel * 9/5) + 32; 
    }
    document.getElementById("btn_ConvertCelsius").addEventListener("click", () => {
        document.getElementById("out_ConvertedCelsius").value = getCelToFah(document.getElementById("in_Celsius").value);
    })

    /*Fahrenheit to Celsius*/
    function getFahToCel (fah) {
        return (fah - 32) * 5/9;
    }
    document.getElementById("btn_ConvertFahrenheit").addEventListener("click", () => {
        document.getElementById("out_ConvertedFahrenheit").value = getFahToCel(document.getElementById("in_Fahrenheit").value);
    })

    /*End Converters*/

    /*Factorial, Summation, Average*/

    /*Factorial*/
    function getFactorial(in_factorial) {
        let index = 1;
        let op_factorial = 1;
        while (index <= in_factorial) {
            op_factorial *= index;
            index++
        }
        return op_factorial;
    }
    document.getElementById("btn_CalcFactorial").addEventListener("click", () => {
        document.getElementById("out_Factorial").value = getFactorial(document.getElementById("in_Factorial").value);
    })

    /*Summation*/
    function getSum(in_sum) {
        let index = 0;
        let op_sum = 0;
        do {
            op_sum += index;
            index++
        } while (index <= in_sum);
        return op_sum;
    }
    document.getElementById("btn_CalcSum").addEventListener("click", () => {
        document.getElementById("out_Sum").value = getSum(document.getElementById("in_Sum").value);
    })

    /*Average*/
    function getAverage(in_average) {
        let op_average = 0;
        for (let index = 0; index <= in_average; index++) {
            op_average += index;
        }
        return op_average / in_average;
    }
    document.getElementById("btn_CalcAverage").addEventListener("click", () => {
        document.getElementById("out_Average").value = getAverage(document.getElementById("in_Average").value);
    })

    /*End Factorial, Summation, Average*/

    /*Tax Calculator*/
    function getIncomeTax (in_income) {
        if(in_income >= 1 && in_income <= 250000) {
            return 0;
        }
        else if(in_income > 250000 && in_income <= 400000) {
            return ((in_income - 250000) * 0.2).toFixed(2);
        }
        else if(in_income > 400000 && in_income <= 800000) {
            return (((in_income - 400000) * 0.25) + 30000).toFixed(2);
        }
        else if(in_income > 800000 && in_income <= 2000000) {
            return (((in_income - 800000) * 0.3) + 130000).toFixed(2); 
        }
        else if(in_income > 2000000 && in_income <= 8000000) {
            return (((in_income - 2000000) * 0.32) + 490000).toFixed(2);
        }
        else if(in_income > 8000000) {
            return (((in_income - 8000000) * 0.35) + 2410000).toFixed(2);
        }
    }
    document.getElementById("btn_CalcTax").addEventListener("click", () => {
        document.getElementById("out_Tax").value = getIncomeTax(document.getElementById("in_Income").value);
    })

    /*Payroll Table Generator*/
    let input = {
        employee_names: [],
        days_worked: [],
        daily_rates: [],
        deduction_amounts: []
    }

    table = document.querySelector(".table");

    function showTable() {
        let tbl_header, tbl_row, gross_pay, net_pay;

        tbl_header = "<thead>";
        tbl_header += "<tr>";
        tbl_header += "<th>No.</th>";
        tbl_header += "<th>Employee Name</th>";
        tbl_header += "<th>Days Worked</th>";
        tbl_header += "<th>Daily Rate</th>";
        tbl_header += "<th>Gross Pay</th>";
        tbl_header += "<th>Deduction Amount</th>";
        tbl_header += "<th>Net Pay</th>";
        tbl_header += "</tr>"
        tbl_header += "</thead>";

        tbl_row = "<tbody>";
        for (let i = 0; i < input.employee_names.length; i++) {
            row_num = i + 1;

            tbl_row += "<tr>";
            tbl_row += "<td>"+row_num+"</td>";

            tbl_row += "<td>"+input.employee_names[i]+"</td>";
            tbl_row += "<td>"+input.days_worked[i]+"</td>";
            tbl_row += "<td>"+input.daily_rates[i]+"</td>";

            gross_pay = input.daily_rates[i] * input.days_worked[i];
            tbl_row += "<td>"+gross_pay+"</td>";

            tbl_row += "<td>"+input.deduction_amounts[i]+"</td>";

            net_pay = gross_pay - input.deduction_amounts[i];
            tbl_row += "<td>"+net_pay+"</td>";

            tbl_row += "</tr>"; 
        }
        tbl_row += "</tbody>";
    
        table.innerHTML = "<table>"+tbl_header+tbl_row+"</table>";
    }

    document.getElementById("btn_AddWorker").addEventListener("click", () => {
        input.employee_names.push(document.getElementById("in_EmployeeName").value);
        input.days_worked.push(document.getElementById("in_DaysWorked").value);
        input.daily_rates.push(document.getElementById("in_DailyRate").value);
        input.deduction_amounts.push(document.getElementById("in_DeductionAmount").value);
        showTable();
    })

    document.getElementById("btn_DelLine").addEventListener("click", () => {
        let removeLine = document.getElementById("in_DelLine").value - 1;
        input.employee_names.splice(removeLine, 1);
        input.days_worked.splice(removeLine, 1);
        input.daily_rates.splice(removeLine, 1);
        input.deduction_amounts.splice(removeLine, 1);
        showTable();
    })
}