# Fix lỗi liên quan end of line (eol)

## Nhận diện lỗi

- Khi commit lên Git sẽ hiển thị "LF will be replaced by CRLF"
- Khi khôi phục code thì eslint sẽ báo lỗi liên quan 'endOfLine'

## Lí do

- Mặc định Windows sẽ dùng eol là CRLF
- Khi chúng ta commit thì CRLF sẽ được git tự động chuyển thành LF
