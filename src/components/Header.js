import React from "react";

export const Navbar =()=>{
return(
    
<nav class="navbar navbar-light" style={{backgroundcolor:"#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand"><b>Dashboard</b></a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

)
}



export default Navbar;