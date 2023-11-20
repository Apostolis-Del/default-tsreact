import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Siderbar';
import TablePage from './pages/TablePage';
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="flex h-screen">
      <Layout>
        <div className="flex-1">
          <TablePage />
        </div>
      </Layout>
    </div>
    </BrowserRouter>
  );
};

export default App;
