import React from "react";
import RePieChart from "./PieCharts";
import Bars from "./BarChart";
import Table from "./Table";


const Dashboard = () => {

    return (
        
        <div class="col main pt-5 mt-2">
         
         <nav aria-label="breadcrumb">
         {/* <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="#">Home</a></li>
             <li class="breadcrumb-item"><a href="#">Library</a></li>
             <li class="breadcrumb-item active" aria-current="page">Data</li>
         </ol> */}
         </nav>

{/* <p class="lead d-none d-sm-block">Add Employee Details and Records</p> */}
 
<div class="alert alert-warning fade collapse" role="alert" id="myAlert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        <span class="sr-only">Close</span>
    </button>
    <strong>Data and Records</strong> Learn more about employee
</div>
<div class= "container">
<div class= "item-a">
<div class="row mb-3">
    <div class="col-xl-3 col-sm-6 py-2">
        <div class="card bg-success text-white h-100">
            <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                <div class="rotate">
                    <i class="fa fa-user fa-4x"></i>
                </div>
                <h4 class="text">Earning</h4>
                <h3 class="display-6"><b>$198K</b></h3>
                <h6>37.8% this month</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 py-2">
        <div class="card text-white bg-danger h-100">
            <div class="card-body bg-danger">
                <div class="rotate">
                    <i class="fa fa-list fa-4x"></i>
                </div>
                <h4 class="text">Orders</h4>
                <h3 class="display-6"><b>$2.4K</b></h3>
                <h6>2% this month</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 py-2">
        <div class="card text-white bg-info h-100">
            <div class="card-body bg-info">
                <div class="rotate">
                  <i class="fab fa-twitter fa-4x"></i>
                </div>
                <h4 class="text">Balance</h4>
                <h3 class="display-6"><b>$2.4K</b></h3>
                <h6>2% this month</h6>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 py-2">
        <div class="card text-white bg-warning h-100">
            <div class="card-body">
                <div class="rotate">
                    <i class="fa fa-share fa-4x"></i>
                </div>
                <h4 class="text">Total Sales</h4>
                <h3 class="display-6"><b>$89K</b></h3>
                <h6>11% this week</h6>
            </div>
        </div>
    </div>
    </div>
    <div >
                <h4 className='title mt-3 mb-3 text-center text-secondary'></h4>
                {/* <div className="mb-5" style={{height:"200px",width:"300px"}}> */}
                 <div  align= "left"><b>Overview</b><br/><h17>Monthly Earning</h17></div>
                <div style={{width:'150px',float:'left',height:'100px'}} ><Bars/></div>  
                <div  align= "right"><RePieChart/></div>
                <div style={{height:"100px",width:"700px"}}>
                    <Table/></div>
                </div>
                {/* </div> */}
               
                    
                    
                 
                 
        
</div>
 </div>
 </div>
    )
}

export default Dashboard;

