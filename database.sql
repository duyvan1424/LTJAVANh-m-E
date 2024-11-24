-- Tạo cơ sở dữ liệu
CREATE DATABASE logistics_management;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE logistics_management;

-- Tạo bảng users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,               -- Khóa chính tự tăng
    email VARCHAR(255) NOT NULL UNIQUE,              -- Đảm bảo email là duy nhất
    username VARCHAR(255) NOT NULL UNIQUE,           -- Đảm bảo username là duy nhất
    password VARCHAR(255) NOT NULL,                  -- Lưu mật khẩu
    role TINYINT NOT NULL DEFAULT 0                  -- Vai trò: 0: USER, 1: ADMIN
);

-- Tạo bảng orders
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,               -- Khóa chính tự tăng
    user_id INT NOT NULL,                            -- Tham chiếu đến người dùng
    username VARCHAR(255) NOT NULL,                 -- Username của người dùng (mới thêm)
    sender_address VARCHAR(255) NOT NULL,           -- Địa chỉ người gửi
    receiver_name VARCHAR(255) NOT NULL,            -- Tên người nhận
    receiver_address VARCHAR(255) NOT NULL,         -- Địa chỉ người nhận
    receiver_phone VARCHAR(20) NOT NULL,            -- Số điện thoại người nhận
    status TINYINT NOT NULL DEFAULT 0,              -- Trạng thái: 0: PENDING, 1: APPROVED, 2: DELIVERED, 3: CANCELLED
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Thời gian tạo đơn hàng
    FOREIGN KEY (user_id) REFERENCES users(id)      -- Khóa ngoại tham chiếu bảng users
);

-- Thêm dữ liệu vào bảng users
INSERT INTO users (email, username, password, role) VALUES
('admin@example.com', 'admin', 'hashed_password_admin', 1), -- ADMIN
('user1@example.com', 'user1', 'hashed_password_user1', 0); -- USER

-- Thêm dữ liệu vào bảng orders
-- Cần đảm bảo username được ánh xạ đúng từ user_id
INSERT INTO orders (user_id, username, sender_address, receiver_name, receiver_address, receiver_phone, status) VALUES
(2, 'user1', '123 Main St', 'John Doe', '456 Elm St', '0123456789', 0), -- PENDING
(2, 'user1', '123 Main St', 'Jane Smith', '789 Pine St', '0987654321', 2); -- DELIVERED
