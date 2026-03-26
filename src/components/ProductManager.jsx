// src/components/ProductManager.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, InputGroup, Table } from 'react-bootstrap';

const ProductManager = () => {
  const [products] = useState([
    { id: 1, name: 'Spaghetti Carbonara', price: 14.00, category: 'Pastas', status: 'Available' },
    { id: 2, name: 'Coke', price: 2.00, category: 'Cold Drinks', status: 'Unavailable' },
    { id: 3, name: 'Apple Pie', price: 6.00, category: 'Deserts', status: 'Available' },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="mt-4">
      {/* Header đẹp mắt[cite: 1] */}
      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-white shadow-sm rounded">
        <div>
          <h2 className="fw-bold mb-0">Quản lý Sản phẩm</h2>
          <small className="text-muted">Danh sách sản phẩm hiện có</small>
        </div>
        <Button 
          style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} 
          onClick={() => setShowModal(true)}
          className="rounded-pill px-4 shadow-sm"
        >
          + Thêm mới
        </Button>
      </div>

      {/* Bảng danh sách sản phẩm theo ASM[cite: 1] */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-0">
          <Table hover responsive className="mb-0 align-middle">
            <thead className="bg-light">
              <tr>
                <th className="ps-4">ID #</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Danh mục</th>
                <th>Trạng thái</th>
                <th className="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td className="ps-4 text-muted">#{p.id}</td>
                  <td className="fw-bold">{p.name}</td>
                  <td className="text-primary fw-bold">${p.price.toFixed(2)}</td>
                  <td><Badge bg="light" className="text-dark border">{p.category}</Badge></td>
                  <td>
                    <Badge bg={p.status === 'Available' ? 'success' : 'secondary'} pill>
                      {p.status}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Button variant="link" className="text-primary me-2 p-0">Sửa</Button>
                    <Button variant="link" className="text-danger p-0">Xóa</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal Form theo ASM[cite: 1] */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Thêm sản phẩm mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm[cite: 1]</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên..." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giá ($)[cite: 1]</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Danh mục[cite: 1]</Form.Label>
              <Form.Select>
                <option>Chọn danh mục</option>
                <option>Pastas</option>
                <option>Cold Drinks</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trạng thái[cite: 1]</Form.Label>
              <div className="d-flex gap-2">
                <Button variant="outline-success" className="w-50">Available</Button>
                <Button variant="outline-secondary" className="w-50">Unavailable</Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="light" onClick={() => setShowModal(false)}>Hủy</Button>
          <Button style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} onClick={() => setShowModal(false)}>
            Lưu sản phẩm[cite: 1]
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductManager;