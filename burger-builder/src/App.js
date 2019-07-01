import React from "react";
import Layout from "./components/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div style={{ height: '100%' }}>

      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
