// src/components/OrderManager.jsx
import React, { useState } from 'react';
import { Container, Table, Badge, Button, Card, Row, Col, InputGroup, Form } from 'react-bootstrap';

const OrderManager = () => {
  // 1. Dữ liệu mẫu cho Đơn hàng (Y1.2)
  const [orders] = useState([
    { id: 'ORD001', customer: 'Albina Ortiz', date: '2024-03-20', total: 25.00, status: 'Completed', items: 'Edamame x1' },
    { id: 'ORD002', customer: 'Sandrine Reilly', date: '2024-03-21', total: 18.00, status: 'Processing', items: 'Apple Pie x1, Tea x1' },
    { id: 'ORD003', customer: 'Brandy Osinski', date: '2024-03-21', total: 14.00, status: 'Pending', items: 'Coffee x1' },
    { id: 'ORD004', customer: 'Phan Phú Quý', date: '2024-03-22', total: 45.00, status: 'Cancelled', items: 'Pizza x2' },
  ]);

  // Hàm hiển thị màu sắc trạng thái
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed': return <Badge bg="success">Đã hoàn thành</Badge>;
      case 'Processing': return <Badge bg="primary">Đang xử lý</Badge>;
      case 'Pending': return <Badge bg="warning text-dark">Chờ thanh toán</Badge>;
      case 'Cancelled': return <Badge bg="danger">Đã hủy</Badge>;
      default: return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container className="mt-4 animate__animated animate__fadeIn">
      {/* Header & Thống kê nhanh đơn hàng */}
      <Row className="mb-4 g-3">
        <Col md={12}>
          <h2 className="fw-bold">Quản lý Đơn hàng</h2>
          <p className="text-muted">Theo dõi và quản lý giao dịch với khách hàng (Y1.2)</p>
        </Col>
        <Col md={3}>
          <Card className="text-center border-0 shadow-sm p-3">
            <h6 className="text-muted">Tổng đơn</h6>
            <h4 className="fw-bold text-primary">{orders.length}</h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center border-0 shadow-sm p-3">
            <h6 className="text-muted">Đang xử lý</h6>
            <h4 className="fw-bold text-warning">1</h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center border-0 shadow-sm p-3">
            <h6 className="text-muted">Hoàn thành</h6>
            <h4 className="fw-bold text-success">1</h4>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center border-0 shadow-sm p-3">
            <h6 className="text-muted">Doanh thu</h6>
            <h4 className="fw-bold text-danger">$102.00</h4>
          </Card>
        </Col>
      </Row>

      {/* Bộ lọc đơn hàng */}
      <Card className="border-0 shadow-sm mb-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <InputGroup>
                <Form.Control placeholder="Tìm theo mã đơn hoặc tên khách hàng..." />
                <Button variant="outline-secondary">Tìm kiếm</Button>
              </InputGroup>
            </Col>
            <Col md={6} className="text-end">
              <Button variant="outline-dark" className="me-2">Xuất file Excel</Button>
              <Button style={{ backgroundColor: '#ff5722', borderColor: '#ff5722', color: 'white' }}>Lọc đơn hàng</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Bảng danh sách đơn hàng */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                <th className="ps-4 py-3">Mã đơn</th>
                <th>Khách hàng</th>
                <th>Sản phẩm</th>
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th className="text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="ps-4 fw-bold text-primary">{order.id}</td>
                  <td>
                    <div className="fw-bold">{order.customer}</div>
                  </td>
                  <td><small className="text-muted">{order.items}</small></td>
                  <td>{order.date}</td>
                  <td className="fw-bold">${order.total.toFixed(2)}</td>
                  <td>{getStatusBadge(order.status)}</td>
                  <td className="text-center">
                    <Button variant="link" className="text-dark p-0 me-3">Xem</Button>
                    <Button variant="link" className="text-primary p-0">Sửa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderManager;