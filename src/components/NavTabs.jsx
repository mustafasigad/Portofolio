// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

import { NavLink } from "react-bootstrap";

const styles = {
  headerStyle: {
    background: '#210032',
    
  },

};


function NavTabs({ handlePageChange }) {
  return (
    <ul className="navbar nav-tabs " style={styles.headerStyle}>
      <div>
      <li className="text-white " >
                   
       Mustafa Sigad
      
      </li>
      </div>
      <div className=" list-inline">
      <li className="text-white list-unstyled list-inline-item  mx-4 px-4">
        <NavLink
          href="#about"
          onClick={() => handlePageChange('About')}
          // // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={({ isActive }) => (isActive ? 'highlighted' : '')}
        >
          About
        </NavLink>
      </li>
      <li className="text-white list-unstyled list-inline-item  mx-4 px-4">
        <NavLink
          href="#Portofolio"
          onClick={() => handlePageChange('Portofolio')}
          
        >
        Portofolio
        </NavLink>
      </li>
      <li className="text-white list-unstyled list-inline-item mx-4 px-4">
        <NavLink
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        
        >
          Resume
        </NavLink>
      </li>


      <li className="text-white list-unstyled list-inline-item  mx-4 px-4">
        <NavLink
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          
        >
          Contact
        </NavLink>
      </li>
      </div>
    </ul>
  );
}

export default NavTabs;

