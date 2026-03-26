import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Import các Module của Y1
import Dashboard from './components/Dashboard';
import ProductManager from './components/ProductManager';
import OrderManager from './components/OrderManager';
import CustomerManager from './components/CustomerManager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        {/* Navbar phong cách hiện đại cho Admin[cite: 1] */}
        <Navbar bg="white" expand="lg" className="mb-4 shadow-sm border-bottom sticky-top py-3">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
              <span style={{ color: '#ff5722' }}>Shop</span> SeVenEleVen
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto fw-medium gap-3">
                <Nav.Link as={Link} to="/" className="text-dark">Thống kê</Nav.Link>
                <Nav.Link as={Link} to="/products" className="text-dark">Sản phẩm</Nav.Link>
                <Nav.Link as={Link} to="/orders" className="text-dark">Đơn hàng</Nav.Link>
                <Nav.Link as={Link} to="/customers" className="text-dark text-nowrap">Khách hàng</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Vùng hiển thị nội dung chính[cite: 1] */}
        <Container className="pb-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductManager />} />
            <Route path="/orders" element={<OrderManager />} />
            <Route path="/customers" element={<CustomerManager />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
