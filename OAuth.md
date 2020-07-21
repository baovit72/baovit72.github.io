# OAUTH 2
## 1. Khái niệm
Là một **authorization framework** cho phép **ứng dụng third-party** đạt được **truy cập giới hạn** vào  **HTTP Service**, thay mặt cho **resource owner** bằng việc xây dựng một cơ chế cấp phép giữa **resource owner** và **HTTP Service**, hoặc cho phép **ứng dụng third-party** truy cập thay mặt chính nó. 
=> Đây là một **protocol ủy quyền (delegation protocol)** để người dùng **cấp phép cho ứng dụng** truy cập **tài nguyên** thay mặt họ.
## 2. Các đối tượng tham gia
![Involved Factors](https://baoho.imfast.io/oauth_involved_factor.png)
### Resource Owner
- Có quyền truy cập một số tài nguyên hoặc API.
- Có thể ủy quyền truy cập tới các tài nguyên, API này.
- Thường có thể truy cập tới web browser.
- Thường là người dùng.
### Protected Resource
- Web service (API) được kiểm soát bảo mật.
- Bảo vệ các dữ liệu cho Resource Owner.
- Chia sẻ dữ liệu theo yêu cầu của Resource Ownder
### Client Application (theo OAuth)
- Muốn có quyền truy cập protected resource.
- Thực hiện các việc thay mặt cho resource owner.
- Có thể là web server.
### Authorization Server
- Tạo token cho client.
- Xác thực resource owner.
- Xác thực client.
- Quản lý authorization.
### OAuth Token
- Đại diện cho các quyền được ủy nhiệm từ Resource Owner đến Client để truy cập các Protected Resource.
- Được tạo bởi Authorization Server.
- Sử dụng bởi Client.
- Được "tiêu thụ" bởi Protected Resource.
## 3. Đặc điểm:
- Không được định nghĩa bên ngoài HTTP.
    * Giao thức lõi được định nghĩa chỉ cho HTTP
    * Dựa vào TLS để bảo mật thông điệp.
    * Để sử dụng ngoài giao thức HTTP: GSSAPI, CoAP
- Không phải giao thức xác thực
    * Dựa vào authentication ở
        * Xác thực client ở token endpoint.
        * Xác thực Resource Owner ở authorization endpoint.
    * Không trao đổi thông tin gì về người dùng.
    * Có thể xây dựng giao thức xác thực bằng OAuth (OpenID Connect).
- Không ủy quyền user-to-user
    * Cho phép người dùng ủy quyền cho ứng dụng, không ủy quyền cho người dùng khác.
    * Có thể xây dựng ủy quyền nhiều bên bằng OAuth như UMA.
- Không xử lý authorization
    * Token chứa thông tin về phạm vi truy cập và một số thông tin về authorization.
    * Xử lý những thông tin này do Resource server.
- Không có định dạng token riêng
    * Token không rõ ràng với Client.
    * Token được cấp bởi Authorization Server và được hiểu bởi Resource Server.
    * JWT cung cấp một định dạng phổ biến.
## 4. Flow hoạt động
Với mỗi loại Client, sẽ có những flow hoạt động tương ứng.
### Authorization Code Flow
* Authorization server trả lại authorization code.
* Được sử dụng cho các ứng dụng web hoặc một vài ứng dụng native.
* Tránh việc lưu/lộ token ở phía browser người dùng.
#### Step 1
![Flow step 1](https://baoho.imfast.io/oauth_flow_step1.png)
#### Step 2
![Flow Step 2](https://baoho.imfast.io/oauth_step2.png)
#### Step 3
![Flow Step 3](https://baoho.imfast.io/oauth_step3.png)
#### Step 4
![Flow Step 4](https://baoho.imfast.io/oauth_step4.png)
#### Step 5
![Flow Step 5](https://baoho.imfast.io/oauth_step5.png)
#### Step 6
![Flow Step 6](https://baoho.imfast.io/oauth_step6.png)
#### Step 7
![Flow Step 7](https://baoho.imfast.io/oauth_step7.png)
### Implicit Flow
* Authorization server trả lại access token.
* Đây là trường hợp ứng dụng in-browser
 ![Implicit Flow](https://baoho.imfast.io/oauth_implicit_flow.png)
### Client Credentials Flow
* Client sử dụng credentials của nó để lấy access token từ authorization server.
* Trường hợp không có tương tác người dùng.
 ![Credentials Flow](https://baoho.imfast.io/oauth_credentials_flow.png)
### PKCE-enhanced Authorization Code Flow
* Với trường hợp client là ứng dụng native thì có thể bị lộ secret key để xác thực với server và Authentication code có thể bị đánh cắp.
* Client tạo ra 1 Code Verifier và 1 Code Challenge để phục vụ việc lấy Access Token từ Authorization Code nên cho dù bị lộ Code thì cũng không đủ điều kiện để nhận được Access Token.
![PKCE](https://baoho.imfast.io/oauth_pkce.png)
