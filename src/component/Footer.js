import React from 'react';

function Footer() {
    let footerStyle = {
        position: "fixed",
        bottom: "0vw",
        width: "100%"
    }
    
    return ( 
        <footer className='bg-dark text-light py-2 ' style={footerStyle}>
        <p className='text-center'>
            Copyright &copy; MyTodoLists.com
        </p>
        </footer>
        
     );
}

export default Footer;
