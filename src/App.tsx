import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Siderbar';
import TablePage from './pages/TablePage';
import Layout from './components/layout/Layout';
import { Route,Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    //<div className="flex h-screen">
    <Layout>
        <Routes>
          <Route path="/" element={<TablePage/>}/>
        </Routes>
    </Layout> 
    //</div>
  );
};

export default App;
