export default function Footer() {

  const containerStyles = {
    display: 'flex',
      background: '#210032',
     alignItems: 'center'
  }
  



  const linksStyles = {
    display: 'flex',
    gap: '50px',
     }
      
  return (
    <footer>
      <div style={containerStyles}>
      
         
        <div style={linksStyles}>
          <p >Copyright © {new Date().getFullYear()}</p> 
          <a href="https://www.linkedin.com">
            LinkedIn  
          </a>
            
          <a href="https://github.com/mustafasigad">
            GitHub
          </a>   
        </div>
      </div>
  
    </footer>
  )
  }


