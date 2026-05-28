# Hệ Thống Đặt Vé Xem Phim (Cinema Booking API)

Dự án này là hệ thống API Backend cho ứng dụng Đặt vé xem phim (Cinema Booking), được xây dựng bằng **NestJS** kết hợp với **Prisma ORM** và cơ sở dữ liệu **MongoDB**.

## 🚀 Công nghệ sử dụng

- **Framework**: [NestJS](https://nestjs.com/) (v11)
- **Cơ sở dữ liệu**: MongoDB Atlas
- **ORM**: [Prisma](https://www.prisma.io/) (v6) với cấu hình Custom TypeScript Generator
- **Xác thực**: JSON Web Token (JWT)

---

## 📂 Cấu trúc thư mục (Project Structure)

Dự án được tổ chức theo kiến trúc Module hóa chặt chẽ của NestJS, chia làm 2 nhánh chính: `modules-api` (xử lý nghiệp vụ kinh doanh) và `modules-system` (xử lý nền tảng hệ thống).

```text
src/
├── common/                     # Các file dùng chung toàn cục
│   ├── configs/                # Cấu hình phụ trợ (ví dụ: Multer upload file)
│   ├── constant/               # Khai báo các hằng số, biến môi trường (app.constant.ts)
│   ├── decorators/             # Các custom decorators (@Role, @Public, @User...)
│   ├── guards/                 # Các Guards bảo vệ Route (ProtectGuard, RoleGuard...)
│   └── interceptors/           # Các Interceptors (Logging, Format Response Success...)
│
├── modules-api/                # Nhóm Module xử lý logic nghiệp vụ (Nghiệp vụ Phim, Đặt vé...)
│   └── auth/                   # Module xác thực người dùng (Login, Register...)
│       ├── dto/                # Các class DTO Validate dữ liệu đầu vào
│       ├── auth.controller.ts  # Tiếp nhận Request từ Client
│       └── auth.service.ts     # Xử lý Logic xác thực
│
├── modules-system/             # Nhóm Module nền tảng hệ thống (Dùng chung cho toàn bộ app)
│   ├── prisma/                 # Module kết nối Database
│   │   ├── generated/          # (Tự động sinh) Nơi chứa bộ code PrismaClient đã build ra .ts
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts   # Service Inject PrismaClient
│   └── token/                  # Module quản lý JWT (Tạo và kiểm tra Token)
│
├── app.module.ts               # Module gốc quản lý tất cả các module con
└── main.ts                     # File Entry (Chứa Global Pipes, Interceptors, Prefix)
```

---

## ⚙️ Cài đặt & Khởi chạy (Setup & Run)

### 1. Cài đặt NestJS CLI (Dành cho máy chưa có)

Nếu máy bạn chưa từng cài đặt NestJS CLI, hãy chạy lệnh sau (chỉ cần cài 1 lần duy nhất trên máy tính):

```bash
npm install -g @nestjs/cli
```

### 2. Clone code và cài thư viện

Mở terminal tại thư mục dự án và chạy:

```bash
npm install
```

### 3. Thiết lập Biến môi trường (.env)

Tạo một file `.env` ở thư mục gốc (ngang hàng với `package.json`) và điền các thông tin sau:

```env
# Cổng chạy ứng dụng (Mặc định nếu không có sẽ là 3069)
PORT=3069

# Chuỗi bí mật dùng để mã hóa và giải mã JWT
ACCESS_TOKEN_SECRET=your_hash_key

# Chuỗi kết nối đến MongoDB Atlas (Bắt buộc phải mã hóa các ký tự đặc biệt như @ thành %40)
# Lưu ý: Cần chỉ định tên Database ở cuối chuỗi (ví dụ: /sdn-project)
DATABASE_URL="mongodb+srv://<username>:<password_encoded>@<cluster_url>/<database_name>?appName=<app_name>"
```

### 4. Đồng bộ Prisma & Tạo Client

Dự án sử dụng Prisma với custom provider (`prisma-client`) để sinh ra mã TypeScript gốc phục vụ trình biên dịch của NestJS.

**Lưu ý quan trọng cho Team:**
Bởi vì cấu trúc bảng đã được tạo sẵn trên Cloud MongoDB Atlas, các thành viên trong team khi clone code về **KHÔNG CẦN CHẠY LỆNH PUSH**. Chỉ cần chạy lệnh tạo Client:

```bash
# Tạo bộ thư viện Prisma Client nội bộ vào thư mục src/modules-system/prisma/generated/prisma
npx prisma generate
```

_(Lệnh `npx prisma db push` chỉ dành cho người trực tiếp thiết kế/thay đổi bảng trong `schema.prisma`)_

### 5. Khởi chạy ứng dụng (Development Mode)

```bash
npm run start:dev
```

Nếu Terminal báo `[SERVER] Server online at: 3069`, ứng dụng của bạn đã sẵn sàng!

---

## 🔒 Cơ chế Bảo mật & Interceptors

- **Global Prefix**: Tất cả các APIs đều được tự động gắn tiền tố `/api`.
- **Validation**: Đã bật sẵn `ValidationPipe` toàn cục, sử dụng `class-validator` và `class-transformer` để tự động chặn các request có Body sai định dạng.
- **Logging**: Đã tích hợp `LoggingInterceptor` giúp log lại IP, URL, Thời gian phản hồi của từng request trên Terminal cho mục đích Debug.
- **Response Format**: Đã tích hợp `ResponseSuccessInterceptor` giúp đồng nhất dữ liệu trả về cho Client luôn nằm trong một chuẩn cấu trúc JSON.
- **Auth Guard**: Tích hợp luồng mã hóa Token chuẩn (Đã loại bỏ thuộc tính `password` trong Token Payload tại `TokenService`).

---

## 🛠 Lệnh thao tác nhanh (Scripts)

- Chạy môi trường Dev (có Watch mode tự khởi động lại): `npm run start:dev`
- Build dự án ra thư mục `dist`: `npm run build`
- Chạy môi trường Prod (sau khi đã build): `npm run start:prod`
