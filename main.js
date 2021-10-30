window.onload = () => {
    
    /* Page and tab switcher */
    let tabs = document.querySelectorAll("[data-tab]");
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let page_num = tab.dataset.tab

        tab.addEventListener("click", () => {
            document.querySelector(".tab.active").classList.remove("active");
            tab.parentNode.classList.add("active");
            changePages(page_num);
        })
    }

    function changePages(page_num) {
        document.querySelector(".page.active").classList.remove("active");
        document.querySelector(`[data-page="${page_num}"]`).classList.add("active");
    }

    /* Convert Buttons */

    /* Meter to Feet */
    function getMeterToFeet() {
        let input = document.getElementById("mtrToFt").value;

        return input * 3.2808;
    }

    document.getElementById("convertToFt").addEventListener("click", () => {
        alert(getMeterToFeet().toFixed(4));
    })


    /* Feet to Meter */
    function getFeetToMeter() {
        let input = document.getElementById("ftToMtr").value;

        return input / 3.2808
    }
    
    document.getElementById("convertToMtr").addEventListener("click", () => {
        alert(getFeetToMeter().toFixed(4));
    })

    /* Celsius to Fahrenheit */
    function getCelToFah() {
        let input = document.getElementById("celToFah").value;

        return (input * 9/5) + 32;
    }

    document.getElementById("convertToFah").addEventListener("click", () => {
        alert(getCelToFah().toFixed(4));
    })


    /* Fahrenheit to Celsius */
    function getFahToCel() {
        let input = document.getElementById("fahToCel").value;

        return (input - 32) * 5/9;
    }

    document.getElementById("convertToCel").addEventListener("click", () => {
        alert(getFahToCel().toFixed(4));
    })
}