const button = document.querySelector(".simple-btn");
const modal = document.querySelector(".modal");
const closeMe = document.querySelector(".modal-icon")




const buttonHandler = () =>{
    const modal = document.querySelector(".modal");
    modal.classList.toggle("modal-active");

}

const closeModal = ()=>{
    modal.classList.toggle("modal-active")
}

closeMe.addEventListener("click",closeModal)
button.addEventListener('click',buttonHandler);
