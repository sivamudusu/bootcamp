document.addEventListener("DOMContentLoaded",function(){
    const countries = ["India","USA","Canada","UK","Australia","Germany","France"]

    function addCountries(){
        const container = document.getElementById("container");
        countries.forEach((country)=>{
            const div = document.createElement("div");
            div.classList.add("country");
            div.innerHTML = country;
            div.classList.add(country);
            div.style.width = "300PX";
            div.style.height = "200PX";
            container.append(div);

        })

    }
    addCountries();
})