

const images = ["bg2.webp","bg3.webp","bg4.webp","food.jpeg","images.jpg","bg4.webp"];

UIController = (function(){

    let DomStrings = {
        modal:"modal",
        modalId:"#modal",
        modalBtn:"modal__button",
        cardContainer:".card__Conatiner",
        modalContainer:".modalContainer"
    }

    let element = ()=>{
        return {
            modal:document.querySelector("#modal"),
            modalContainer:document.querySelector(DomStrings.modalContainer)
        }
    }

    let setModalContainer = (image)=>{
        document.body.insertAdjacentHTML("beforeend",`<div class="modalContainer"><div id="modal"><div class="fa fa-close">*</div><img src="${image}" width="100%"></div></div>`);
    }

    return {
        addCard:(images)=>{

            let cardContainer = document.querySelector(DomStrings.cardContainer);
            images.forEach((item)=>{
                let html = `<div class="col-md-4 mb-2"><div class="card"><img class="card-img-top" src="images/${item}" alt="food picture" width="100%" ><div class="card-header"><h5 class="card-title mb-0">Card with image and button</h5></div><div class="card-body"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="#" class="btn btn-primary modal__button">Show Details</a></div></div></div>`;
                cardContainer.insertAdjacentHTML("beforeend",html);
            });
        },

        addModal:function(status,imgDir){            
            setModalContainer(imgDir);
            element().modal.innerHTML = "";
            element().modal.insertAdjacentHTML("beforeend",`<img src="${imgDir}" width="100%">`);
            document.querySelector("body").setAttribute("style","overflow:hidden");
        },

        removeModal:()=>{
            let child = document.querySelector(DomStrings.modalContainer);
            if(child){
                document.body.removeChild(child);
                document.querySelector("body").setAttribute("style","overflow:auto");
            }
        },

        getDomString:()=>{
            return DomStrings;
        }

    }

})();




const controller = ((UICtrl,img)=>{

    const eventHandler = ()=>{
        window.addEventListener('keydown',function(event){
            if(event.keyCode === 27 || event.which === 27){
                UICtrl.removeModal();
            }
        });
        document.addEventListener('click',function(event){
           attributes = {
                class:event.target.className,
                id:event.target.id
            }

            takeAction(attributes,event);
        });
    }

    

    const takeAction = (attributes,event)=>{

        let DomStrings = UICtrl.getDomString();
        let modalBtn = attributes.class.includes(DomStrings.modalBtn);
        if(modalBtn){
            let imageDir = event.target.parentNode.parentNode.childNodes[0].currentSrc;
            UICtrl.addModal("show",imageDir);
        }
        else if(attributes.class === DomStrings.modalContainer.slice(1,DomStrings.modalContainer.length)){
            UICtrl.removeModal();
        }

        if(modalBtn){

        }
    }

    return{
        init:()=>{
            UICtrl.addCard(img);
            eventHandler();
        }
    }
    

})(UIController,images);

controller.init();