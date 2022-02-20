  const Modal = (()=>{
      let modal, modal_overlay, content_wrapper;

      const setObjects = (modalId)=>{
          modal           = document.querySelector(`#${modalId}`);
          modal_overlay   = modal.querySelector('.modal__overlay');
          content_wrapper = modal.querySelector('.content_wrapper');
      }

      const setEvent = ()=>{
        modal_overlay.addEventListener('click',()=>{
          Modal.close();
        })

        modal.querySelectorAll(".close_button").forEach((element)=>{
          element.addEventListener('click',()=>{
            Modal.close();
          })
        })

      }
      
      return {
        show:(modalId)=>{
          setObjects(modalId);
          modal.classList.add('open__modal')
          modal_overlay.classList.add('open_overlay');
          content_wrapper.classList.add('open__content__wrapper');
          setEvent();
        },
        close:(modalId = null)=>{
          if(modalId){
            setObjects(modalId);
          }
          modal.classList.remove('open__modal')
          modal_overlay.classList.remove('open_overlay');
          content_wrapper.classList.remove('open__content__wrapper');
        }
      }
    })();