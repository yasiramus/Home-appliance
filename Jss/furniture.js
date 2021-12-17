  const container = document.querySelector('.search');
        const inputbutton = document.querySelector('input');
        const btn = document.querySelector('.button');
        
        btn.addEventListener('click',( )=>{
            // toggle means on and off
            container.classList.toggle('active')
            // the classlist gives the list of the classes that container have(return an array)
            inputbutton.focus( );
        })