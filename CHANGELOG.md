# Nhật Ký Thay Đổi

## 1.1.8 - 2026-05-26

- Thêm hỗ trợ worktree cho nhánh upstream, cho phép tạo và chọn workspace độc lập từ repository/nhánh upstream.
- Thêm API và kiểm thử liên quan đến lấy danh sách nhánh upstream, xử lý mặc định, phân tích remote và tạo worktree.
- Tối ưu logic đồng bộ provider, giữ nguyên mtime của file rollout và giảm thay đổi trạng thái phiên không cần thiết sau khi đồng bộ.
- Thêm trang Công cụ và Plugin độc lập để quản lý tập trung MCP, skills và plugins của Codex++ / Codex, không còn gắn với một provider riêng lẻ.
- Khi chuyển provider, cấu hình công cụ và plugin đang bật sẽ được hợp nhất, đồng thời tránh ghi nhầm cấu hình riêng của provider vào cấu hình dùng chung.
- Danh sách công cụ và plugin giờ đọc trạng thái bật/tắt trực tiếp từ cấu hình Codex hiện tại, hỗ trợ bật/tắt và xóa mục ngay trên giao diện.
- Điều chỉnh logic trích xuất cấu hình dùng chung sang thao tác thủ công, giảm ghi đè tự động và nhiễu cấu hình.
- Sửa lỗi cô lập khi chuyển provider, tránh mang `model_catalog_json`, `model_provider` cũ, bảng provider lịch sử và `auth.json` cũ sang provider mới.
- Sửa lỗi chế độ pure API không ghi API Key vào `auth.json`, đồng thời cố định tên provider là `CodexPlusPlus`.
- Tối ưu cách ghi danh mục model, hỗ trợ hợp nhất với danh mục model gốc và hiển thị đường dẫn thật trong bản xem trước.
- Thêm các mục cấu hình trên trang provider: cách chèn model, danh sách model, kích thước ngữ cảnh, kích thước ngữ cảnh nén và tính năng mục tiêu.
- Ẩn danh sách model và cách chèn model trong chế độ chính thức khi chúng chỉ dùng cho tình huống trộn API Key.
- Đưa Base URL, API Key và giao thức upstream lên trước danh sách model; chuyển model kiểm thử và tùy chọn ngữ cảnh vào phần Tùy chọn khác.
- Sửa lỗi ghi trùng `model_reasoning_effort` và `plan_mode_reasoning_effort` khiến TOML có thể phân tích thất bại.
- Sửa lỗi bảng plugin trùng, thân cấu hình rỗng và phân tích boolean khiến file cấu hình có thể phân tích thất bại.
- Tối ưu bố cục trang chi tiết provider, giữ cố định nút quay lại và vùng thông báo phía trên, tăng kích thước cửa sổ mặc định và giảm khoảng trống trên cùng.
- Gỡ chặn checksum khi cài script để tránh cài đặt thất bại khi checksum của script trên market không khớp.
- Dọn các thông tin không cần hiển thị trên trang Giới thiệu và Trạng thái, gồm đăng nhập, provider hiện tại và đường dẫn file cấu hình.
- Căn giữa thông báo để tránh che nút khởi động lại.
- Cập nhật mã QR nhóm thảo luận, nội dung README và script đóng gói DMG cho macOS.
