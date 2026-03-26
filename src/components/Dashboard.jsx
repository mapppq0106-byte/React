// src/components/Dashboard.jsx
import React from 'react';
import { Row, Col, Card, Table, ListGroup, Dropdown } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {
  // Cấu hình chung cho biểu đồ
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { beginAtZero: true, grid: { borderDash: [5, 5] } } },
  };

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // 1. Data cho Biểu đồ Doanh thu (Line Chart với Gradient)
  const revenueData = {
    labels,
    datasets: [{
      fill: true,
      label: 'Revenue',
      data: [800, 900, 850, 1100, 1400, 1200, 900],
      borderColor: '#5d87ff',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(93, 135, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(93, 135, 255, 0)');
        return gradient;
      },
      tension: 0.4,
    }],
  };

  // 2. Data cho Biểu đồ Đơn hàng & Khách hàng (Bar Chart)
  const barData = {
    labels,
    datasets: [{
      label: 'Orders',
      data: [35, 30, 28, 40, 55, 42, 30],
      backgroundColor: '#5d87ff',
      borderRadius: 5,
    }],
  };

  return (
    <div className="bg-light min-vh-100 p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold m-0">Overview</h4>
        <Dropdown>
          <Dropdown.Toggle variant="white" className="border shadow-sm">Last Week</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Last Month</Dropdown.Item>
            <Dropdown.Item>Last Year</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* SECTION 1: 3 BIỂU ĐỒ CHÍNH (Y1.4) */}
      <Row className="g-4 mb-4">
        <Col lg={4}>
          <Card className="border-0 shadow-sm p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted"><i className="bi bi-currency-dollar text-danger me-2"></i>Daily Revenue</span>
              <h5 className="fw-bold m-0">$80.00 <small className="text-success fs-6">▲</small></h5>
            </div>
            <Line data={revenueData} options={options} height={120} />
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="border-0 shadow-sm p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted"><i className="bi bi-bag text-warning me-2"></i>Daily Orders</span>
              <h5 className="fw-bold m-0">150 <small className="text-success fs-6">▲</small></h5>
            </div>
            <Bar data={barData} options={options} height={120} />
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="border-0 shadow-sm p-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted"><i className="bi bi-people text-primary me-2"></i>New Customers</span>
              <h5 className="fw-bold m-0">11,000.00% <small className="text-success fs-6">▲</small></h5>
            </div>
            <Bar data={{...barData, datasets: [{...barData.datasets[0], data: [25, 15, 30, 20, 22, 18, 12]}]}} options={options} height={120} />
          </Card>
        </Col>
      </Row>

      {/* SECTION 2: RECENT ORDERS & TRENDING PRODUCTS (Y1.2) */}
      <Row className="g-4">
        {/* Recent Orders - Bên trái */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 pt-4 px-4 fw-bold">
              <i className="bi bi-clock-history me-2 text-warning"></i>Recent Orders
            </Card.Header>
            <Card.Body className="p-0">
              <Table hover responsive className="mb-0">
                <tbody>
                  {[
                    { id: '#355338', name: 'Albina Ortiz', addr: '11524 Tratory, Lindenhurst', item: 'Edamame x1', price: '$25.00' },
                    { id: '#104389', name: 'Sandrine Reilly', addr: '11342 Garland Parkways, Brooklyn', item: 'Apple Pie x1, Tea x1', price: '$18.00' },
                    { id: '#788824', name: 'Brandy Osinski', addr: 'London, UK', item: 'Coffee x1', price: '$14.00' },
                  ].map((order, idx) => (
                    <tr key={idx} className="border-bottom">
                      <td className="ps-4 py-3 align-middle text-muted">{order.id}</td>
                      <td className="align-middle">
                        <div className="fw-bold">{order.name}</div>
                        <small className="text-muted">{order.addr}</small>
                      </td>
                      <td className="align-middle text-muted small">{order.item}</td>
                      <td className="align-middle fw-bold">{order.price}</td>
                      <td className="align-middle text-end pe-4"><i className="bi bi-three-dots-vertical"></i></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Trending Products - Bên phải */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Header className="bg-white border-0 pt-4 px-4 fw-bold">
              <i className="bi bi-graph-up-arrow me-2 text-danger"></i>Trending Products
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center border-0 mb-3 p-0">
                  <div className="position-relative me-3">
                    <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=100&auto=format&fit=crop" 
                         alt="Coffee" className="rounded shadow-sm" style={{width: '70px', height: '70px', objectFit: 'cover'}}/>
                    <span className="position-absolute top-0 start-0 badge rounded-pill bg-warning text-dark border border-white" style={{transform: 'translate(-30%, -30%)'}}>1.</span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-0">Coffee</h6>
                    <small className="text-muted">$150.00</small>
                    <div className="text-primary small fw-bold">Ordered 50 times</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center border-0 p-0">
                  <div className="position-relative me-3">
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=100&auto=format&fit=crop" 
                         alt="Cheeseburger" className="rounded shadow-sm" style={{width: '70px', height: '70px', objectFit: 'cover'}}/>
                    <span className="position-absolute top-0 start-0 badge rounded-pill bg-secondary text-white border border-white" style={{transform: 'translate(-30%, -30%)'}}>2.</span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-0">Cheeseburger</h6>
                    <small className="text-muted">$120.00</small>
                    <div className="text-primary small fw-bold">Ordered 42 times</div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;