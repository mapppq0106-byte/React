// src/components/CustomerManager.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Form, InputGroup, Modal } from 'react-bootstrap';

const CustomerManager = () => {
  // 1. Dữ liệu mẫu khách hàng (Y1.3)
  const [customers] = useState([
    { id: 'CUS001', name: 'Albina Ortiz', email: 'albina@example.com', address: '11524 Tratory, Lindermurst', orders: 12, totalSpent: 450.00 },
    { id: 'CUS002', name: 'Sandrine Reilly', email: 'sandrine@example.com', address: '11342 Brooklyn, NY', orders: 5, totalSpent: 120.50 },
    { id: 'CUS003', name: 'Phan Phú Quý', email: 'phuquy@fpt.edu.vn', address: 'Đà Nẵng, Việt Nam', orders: 20, totalSpent: 1500.00 },
    { id: 'CUS004', name: 'Brandy Osinski', email: 'brandy@osinski.com', address: 'London, UK', orders: 2, totalSpent: 45.00 },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="mt-4 pb-5 animate__animated animate__fadeIn">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-end mb-4 bg-white p-4 shadow-sm rounded-4 border-start border-primary border-5">
        <div>
          <h2 className="fw-bold mb-1">Quản lý Khách hàng</h2>
          <p className="text-muted mb-0">Lưu trữ thông tin và lịch sử mua hàng (Y1.3)</p>
        </div>
        <Button 
          style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} 
          className="rounded-pill px-4 py-2 fw-bold text-white shadow"
          onClick={() => setShowModal(true)}
        >
          + Thêm khách hàng mới
        </Button>
      </div>

      {/* Tìm kiếm & Lọc */}
      <Row className="mb-4">
        <Col md={8}>
          <InputGroup className="shadow-sm rounded-pill overflow-hidden border">
            <Form.Control 
              placeholder="Tìm khách hàng theo tên, email hoặc địa chỉ..." 
              className="border-0 px-4 py-2"
            />
            <Button variant="white" className="border-0 px-3 text-muted">Tìm kiếm</Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Bảng danh sách khách hàng */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Table hover responsive className="mb-0 align-middle text-nowrap">
          <thead className="bg-light border-bottom">
            <tr className="text-muted small text-uppercase fw-bold">
              <th className="ps-4 py-3">Khách hàng</th>
              <th>Liên hệ</th>
              <th>Địa chỉ</th>
              <th className="text-center">Số đơn hàng</th>
              <th className="text-end">Tổng chi tiêu</th>
              <th className="text-center pe-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cus) => (
              <tr key={cus.id}>
                <td className="ps-4 py-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                      {cus.name.charAt(0)}
                    </div>
                    <div>
                      <div className="fw-bold">{cus.name}</div>
                      <small className="text-muted">#{cus.id}</small>
                    </div>
                  </div>
                </td>
                <td>{cus.email}</td>
                <td><small className="text-muted text-wrap d-block" style={{maxWidth: '200px'}}>{cus.address}</small></td>
                <td className="text-center">
                   <Badge bg="info-subtle" className="text-info px-3 py-2 rounded-pill">{cus.orders} đơn</Badge>
                </td>
                <td className="text-end fw-bold text-success pe-4">${cus.totalSpent.toFixed(2)}</td>
                <td className="text-center">
                  <Button variant="link" className="text-dark p-0 me-3">Lịch sử</Button>
                  <Button variant="link" className="text-danger p-0">Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Modal Thêm Khách Hàng (Y1.3) */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Thông tin khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Tên khách hàng</Form.Label>
              <Form.Control type="text" placeholder="Nguyễn Văn A" className="py-2" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Địa chỉ</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Số nhà, đường, quận..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 px-4 pb-4">
          <Button variant="light" className="rounded-pill px-4" onClick={() => setShowModal(false)}>Hủy</Button>
          <Button style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} className="rounded-pill px-4 text-white" onClick={() => setShowModal(false)}>
            Lưu khách hàng
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CustomerManager;