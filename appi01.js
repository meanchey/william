const filterbuttons = document.querySelectorAll(".filter_buttons button");
const filterablecads = document.querySelectorAll(".filterable_cards .card");

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterablecads.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        } 
    });
};

filterbuttons.forEach(button => button.addEventListener("click", filterCards));
    
