import React from 'react'
import Header from './components/template/Header'
import Sidebar from './components/template/Sidebar'
import Content from './components/template/Content'

function App() {
  return (
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <Header />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;
