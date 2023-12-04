import './App.css';
import React from 'react';
import Table from './components/table/Table';
import TablewithPagination from './components/table/TablewithPagination';
import Layout from './components/layout/Layout';
import { Route,Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    //<div className="flex h-screen">
    <Layout>
        <Routes>
          <Route path="/" element={<Table/>}/>
        </Routes>
    </Layout> 
    //</div>
  );
};

export default App;
