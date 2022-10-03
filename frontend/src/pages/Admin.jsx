import React from "react";
import SideBar from "../components/SideBar/SideBar";
import DataCustomer from "../components/DataCustomer/DataCustomer";
import WareHouse from "../components/WareHouse/WareHouse";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AddProductContent from "../components/AddProductContent/AddProductContent";
import Action from "../components/Action/Action";
function Admin() {
  const categories = ["Revenue", "data customer", "warehouse", "something"];

  return (
    <>
      <Header />
      <div className="admin-container">
        <SideBar
          showPost={false}
          showSearch={true}
          showFilter={false}
          categories={categories}
        />
        {/* component admin */}
        {/* <DataCustomer /> */}
        <WareHouse>
          
        </WareHouse>
        {/* <AddProductContent/> */}
      </div>
      <Footer />
    </>
  );
}

export default Admin;
