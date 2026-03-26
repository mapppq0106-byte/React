import React, { useState } from 'react';
import { Container, Card, Button, Badge, Modal, Form, Table, Image, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form'; // Import useForm cho Validation

const ProductManager = () => {
  // Dữ liệu mẫu đầy đủ theo hình ảnh yêu cầu
  const [products] = useState([
    { id: 1, name: 'Spaghetti Carbonara', desc: 'Classic Italian pasta with a creamy sauce made from eggs, P...', price: 14.00, category: 'Pastas', status: 'Unavailable', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=100' },
    { id: 2, name: 'Cannelloni', desc: 'Large pasta tubes filled with meat or cheese, covered in sau...', price: 15.50, category: 'Pastas', status: 'Available', image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=100' },
    { id: 3, name: 'Coke', desc: 'Classic Coca-Cola served chilled.', price: 2.00, category: 'Cold Drinks', status: 'Unavailable', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100' },
    { id: 4, name: 'Apple Pie', desc: 'Classic apple pie with a flaky crust, filled with cinnamon-spi...', price: 6.00, category: 'Deserts', status: 'Available', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=100' },
    { id: 5, name: 'Ice Cream', desc: 'Your choice of vanilla, chocolate, or strawberry ice cream, s...', price: 4.00, category: 'Deserts', status: 'Unavailable', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=100' },
    { id: 6, name: 'Edamame', desc: 'Steamed young soybeans sprinkled with sea salt. A simple...', price: 5.00, category: 'Starters', status: 'Unavailable', image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=100' },
    { id: 7, name: 'Coffee', desc: 'Freshly brewed coffee, rich and aromatic.', price: 3.00, category: 'Hot Drinks', status: 'Unavailable', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=100' },
    { id: 8, name: 'Cobb Salad', desc: 'A hearty option with mixed greens, chicken, bacon, eggs, av...', price: 12.00, category: 'Salads', status: 'Available', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100' },
    { id: 9, name: 'Sprite', desc: 'Crisp and refreshing lemon-lime Sprite.', price: 2.00, category: 'Cold Drinks', status: 'Available', image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=100' },
    { id: 10, name: 'Nicoise Salad', desc: 'Tuna, green beans, potatoes, eggs, olives, and tomatoes ov...', price: 13.00, category: 'Salads', status: 'Available', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100' },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Cấu hình useForm
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleClose = () => {
    reset(); // Xóa dữ liệu cũ khi đóng modal
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  // Hàm xử lý khi submit form thành công
  const onSubmit = (data) => {
    const newProduct = {
      id: products.length + 1,
      ...data,
      price: parseFloat(data.price),
      image: 'https://via.placeholder.com/100', // Ảnh mặc định cho sản phẩm mới
      status: data.status || 'Available'
    };
    setProducts([newProduct, ...products]);
    handleClose();
    alert("Thêm sản phẩm thành công!");
  };

  return (
    <Container fluid className="px-4 py-4 bg-light min-vh-100">
      <div className="bg-white rounded-4 shadow-sm p-4">
        {/* Header Section [cite: 41, 42] */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Products</h2>
            <p className="text-muted small mb-0">{products.length} Products in total</p>
          </div>
          <div className="d-flex gap-2">
            <div className="d-flex bg-light p-1 rounded-3 border">
                <Button variant="white" className="shadow-sm btn-sm px-2 bg-white"><i className="bi bi-list-ul"></i></Button>
                <Button variant="link" className="text-muted btn-sm px-2 text-decoration-none"><i className="bi bi-grid"></i></Button>
            </div>
            <Button 
              style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} 
              className="rounded-3 px-4 shadow-sm text-white fw-bold d-flex align-items-center gap-2"
              onClick={handleShow}
            >
              <i className="bi bi-plus-lg"></i> Add new product
            </Button>
          </div>
        </div>

        {/* Table Section [cite: 43-51] */}
        <div className="table-responsive">
          <Table borderless hover className="align-middle mb-0">
            <thead className="text-muted small border-bottom bg-light-subtle">
              <tr className="text-uppercase">
                <th className="py-3 ps-3">ID #</th>
                <th>Images</th>
                <th style={{ minWidth: '150px' }}>Name</th>
                <th style={{ minWidth: '250px' }}>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="small">
              {products.map((p, index) => (
                <tr key={p.id} className={index % 2 === 0 ? "" : "bg-light-subtle"}>
                  <td className="ps-3 text-muted">#{p.id}</td>
                  <td><Image src={p.image} rounded style={{ width: '40px', height: '40px', objectFit: 'cover' }} className="border shadow-sm" /></td>
                  <td className="fw-bold">{p.name}</td>
                  <td className="text-muted text-truncate" style={{ maxWidth: '250px' }}>{p.desc}</td>
                  <td className="fw-bold">${p.price.toFixed(2)}</td>
                  <td className="text-muted">{p.category}</td>
                  <td>
                    <Badge bg={p.status === 'Available' ? 'success-subtle' : 'secondary-subtle'} className={`${p.status === 'Available' ? 'text-success' : 'text-secondary'} px-3 py-2 rounded-pill border fw-medium`}>
                      {p.status === 'Available' ? '● Available' : '○ Unavailable'}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Button variant="link" className="text-muted p-0 hover-orange"><i className="bi bi-eye fs-5"></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* MODAL THÊM SẢN PHẨM VỚI VALIDATION [cite: 172-184] */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold">Add new product</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="px-4">
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    isInvalid={!!errors.name}
                    placeholder="Enter product name..." 
                    {...register("name", { required: "Tên sản phẩm không được để trống", minLength: { value: 3, message: "Tên phải ít nhất 3 ký tự" } })} 
                  />
                  <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Description *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    isInvalid={!!errors.desc}
                    placeholder="Brief description of the product..." 
                    {...register("desc", { required: "Vui lòng nhập mô tả sản phẩm" })} 
                  />
                  <Form.Control.Feedback type="invalid">{errors.desc?.message}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Price ($) *</Form.Label>
                  <Form.Control 
                    type="number" 
                    step="0.01" 
                    isInvalid={!!errors.price}
                    placeholder="0.00" 
                    {...register("price", { required: "Giá không được để trống", min: { value: 0.1, message: "Giá phải lớn hơn 0" } })} 
                  />
                  <Form.Control.Feedback type="invalid">{errors.price?.message}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Category *</Form.Label>
                  <Form.Select isInvalid={!!errors.category} {...register("category", { required: "Vui lòng chọn danh mục" })}>
                    <option value="">Select category...</option>
                    <option value="Pastas">Pastas</option>
                    <option value="Cold Drinks">Cold Drinks</option>
                    <option value="Deserts">Deserts</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.category?.message}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold d-block">Status</Form.Label>
                  <div className="d-flex gap-2">
                    <Form.Check type="radio" label="Available" value="Available" defaultChecked {...register("status")} />
                    <Form.Check type="radio" label="Unavailable" value="Unavailable" {...register("status")} />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0 px-4 pb-4">
            <Button variant="light" onClick={handleClose} className="px-4 rounded-3">Cancel</Button>
            <Button 
              type="submit" 
              style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }} 
              className="px-4 rounded-3 text-white fw-bold"
            >
              Save Product
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <style>{`
        .bg-light-subtle { background-color: #f8f9fa !important; }
        .hover-orange:hover { color: #ff5722 !important; }
        .rounded-4 { border-radius: 1rem !important; }
        .form-control:focus, .form-select:focus { border-color: #ff5722; box-shadow: 0 0 0 0.25rem rgba(255, 87, 34, 0.25); }
      `}</style>
    </Container>
  );
};

export default ProductManager;