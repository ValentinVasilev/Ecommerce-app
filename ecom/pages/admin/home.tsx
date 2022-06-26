import React from "react";
import AdminTabs from "../../components/sub-components/admin-tabs.component";

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <AdminTabs name="Home" />
      </div>
    </div>
  )
}

export default Home;