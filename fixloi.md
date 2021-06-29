# Fix lỗi liên quan end of line (eol)

## Nhận diện lỗi

- Khi commit lên Git sẽ hiển thị "LF will be replaced by CRLF"
- Khi khôi phục code thì eslint sẽ báo lỗi liên quan 'endOfLine'

## Lý do

- Mặc định Windows sẽ dùng eol là CRLF
- Khi chúng ta commit thì CRLF sẽ được git tự động chuyển thành LF
- Khi pull code về hoặc checkout thì LF sẽ tự động chuyển thành CRLF

## Cách khắc phục

### 1. Vào setting gõ 'eol'

Files: eol thành auto (mặc định)
Prettier: End Of Line thành lf (mặc định)

### 2. Vào .prettierrc

"endOfLine": "crlf"

### 3. Vào .eslintrc

Xóa dòng "endOfLine": "lf", để không thông báo về endOfLine nữa

### 4. Mở terminal lên

yarn prettier:fix

### 5. Xóa "endOfLine": "crlf" trong .prettierrc

### 6. Nếu có file nào còn dạng LF thì chuyển sang CRLF Editor
