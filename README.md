1. Cài đặt nodeJs
   npm i
2. Khởi chạy server
   npm start
   Pop-up hiện lên thông báo ứng dụng đang chạy ở cổng 3000.
   Chọn "Open browser" để đến trang chạy ứng dụng. Tại đây sẽ thực hiện các thao tác.
3. Truy cập vào các file frontend theo các đường dẫn và kiểm tra chức năng hoạt động của Backend
   /get.html
   /update.html
   /list.html

Cách thức hoạt động
#1 Khi khởi chạy:

- Nếu một file hợp lệ trong folder views thì giao diện tương ứng sẽ được hiển thị.
- Nếu không, nó sẽ chuyển đến file index.js. Trong này, route(app) sẽ chuyển đến phần định tuyến trong folder routes.
  #2 Trong /routes/index.js, với từng đường dẫn sẽ dẫn đến những bộ xử lý tương ứng như:

* student.js - url có bắt đầu dưới dạng "/student/\*". students.js sẽ đưa ra các hành động phù hợp với những đường dẫn và phương thức cụ thể.
* fallBack.js - với các trường hợp khác.
