# Codex++

<p align="center">
  <img src="docs/images/codex-plus-plus.png" alt="Biểu tượng Codex++" width="160">
</p>

<p align="center">
  <a href="README.md">中文</a> | <a href="README_EN.md">English</a> | Tiếng Việt
</p>

<p align="center">
  <img alt="Release" src="https://img.shields.io/github/v/release/BigPizzaV3/CodexPlusPlus">
  <img alt="Stars" src="https://img.shields.io/github/stars/BigPizzaV3/CodexPlusPlus">
  <img alt="License" src="https://img.shields.io/github/license/BigPizzaV3/CodexPlusPlus">
  <img alt="Rust" src="https://img.shields.io/badge/rust-1.85%2B-orange">
  <img alt="Tauri" src="https://img.shields.io/badge/tauri-2.x-24C8DB">
</p>

Codex++ là launcher tăng cường bên ngoài và công cụ quản lý cho Codex App. Công cụ này không sửa đổi file cài đặt gốc của Codex App; thay vào đó, nó khởi chạy Codex từ bên ngoài và chèn script tăng cường qua Chromium DevTools Protocol.

## Bắt Đầu Nhanh

Tải bộ cài mới nhất từ [GitHub Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases):

- Windows: `CodexPlusPlus-*-windows-x64-setup.exe`
- macOS Intel: `CodexPlusPlus-*-macos-x64.dmg`
- macOS Apple Silicon: `CodexPlusPlus-*-macos-arm64.dmg`

Sau khi cài đặt sẽ có hai lối vào:

- `Codex++`: launcher chạy ẩn, không hiển thị giao diện quản lý, chỉ khởi động Codex và chèn tính năng tăng cường.
- `Trình Quản Lý Codex++`: bảng điều khiển Tauri để khởi động, kiểm tra, sửa lỗi, cập nhật, cấu hình relay, quản lý tính năng tăng cường và script người dùng.

Bộ cài Windows tạo shortcut trên Desktop và Start Menu. DMG macOS cài `/Applications/Codex++.app` và `/Applications/Trình Quản Lý Codex++.app`.

## Tính Năng Chính

- Backend Rust và launcher chạy ẩn, không phụ thuộc runtime bổ sung khi khởi động.
- Công cụ quản lý Tauri + React, hỗ trợ chuyển đổi giao diện sáng/tối.
- Chèn CDP từ bên ngoài, không sửa `app.asar` và không ghi DLL vào thư mục cài đặt Codex.
- Chế độ relay: hỗ trợ nhiều cấu hình relay, ghi provider `CodexPlusPlus`, và có thể chuyển lại trạng thái đăng nhập ChatGPT chính thức.
- Chế độ tăng cường truyền thống: mở khóa lối vào plugin, ép cài plugin đặc biệt, xóa phiên, xuất Markdown, di chuyển dự án, Timeline và nhiều tính năng khác.
- Quản lý script người dùng độc lập, có thể chèn script tùy chỉnh khi khởi động.
- Đồng bộ provider: đồng bộ metadata phiên cục bộ trước khi khởi động để các phiên cũ vẫn hiển thị sau khi chuyển provider.
- Lối vào mở bằng Zed: nhận diện ngữ cảnh SSH từ xa và mở file tương ứng trực tiếp trong Zed Remote Development từ Codex.
- Tạo upstream worktree: tạo worktree mới từ `upstream/<base-branch>`, tự động fetch nhánh remote trước khi tạo để giảm rủi ro xung đột do HEAD cục bộ đã cũ.
- Tự động cập nhật qua GitHub Release; cả công cụ quản lý và launcher chạy ẩn đều kiểm tra bản cập nhật khả dụng.
- Windows: một phiên bản chạy duy nhất, không hiện cửa sổ console, manifest quyền quản trị và nhận diện đường dẫn Desktop hệ thống.
- macOS: DMG riêng cho x64/arm64; launcher chạy ẩn không hiện biểu tượng Dock.

## Chế Độ Relay

Chế độ relay phù hợp khi bạn đã đăng nhập tài khoản ChatGPT chính thức trong Codex/ChatGPT nhưng muốn chuyển request model sang API tương thích tùy chỉnh.

Trong trang Relay của công cụ quản lý:

1. Xác nhận đã phát hiện trạng thái đăng nhập ChatGPT.
2. Thêm một hoặc nhiều cấu hình relay, nhập Base URL và Key.
3. Chọn cấu hình hiện tại và áp dụng relay.
4. Khởi động `Codex++`.

Codex++ sẽ ghi cấu hình tương tự sau vào `~/.codex/config.toml`:

```toml
model_provider = "CodexPlusPlus"

[model_providers.CodexPlusPlus]
name = "CodexPlusPlus"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://example.com/v1"
experimental_bearer_token = "sk-..."
```

Để quay lại chế độ đăng nhập chính thức, dùng nút xóa chế độ API trong trang Relay. Thao tác này gỡ cấu hình liên quan đến `OPENAI_API_KEY` và chuyển Codex về xác thực ChatGPT chính thức.

## Tăng Cường

Các tính năng tăng cường được điều khiển trong công cụ quản lý. Tính năng chèn tăng cường bật mặc định; khi tắt, Codex++ sẽ không chèn menu hoặc script.

Khi chế độ relay đang bật, mở khóa lối vào plugin và ép cài plugin không còn cần thiết, giao diện sẽ hiển thị nhắc nhở tương ứng. Các tính năng khác như xóa phiên, xuất, di chuyển, Timeline, nội dung đề xuất và script người dùng vẫn dùng được.

## Nội Dung Đề Xuất

Nội dung đề xuất được tải từ:

```text
https://raw.githubusercontent.com/BigPizzaV3/Ad-List/main/ads.json
https://cdn.jsdelivr.net/gh/BigPizzaV3/Ad-List@main/ads.json
```

Request tự động thêm `?v=timestamp` để tránh cache CDN cũ. Nếu tải nội dung đề xuất chậm, trạng thái kết nối backend không bị đánh dấu là lỗi.

## Cập Nhật Và Gói Cài

Codex++ phát hành bộ cài qua GitHub Releases. Windows tạo bộ cài NSIS, còn macOS tạo hai DMG riêng cho Intel x64 và Apple Silicon arm64.

Trang Giới thiệu của công cụ quản lý có thể kiểm tra và khởi chạy cập nhật. Khi launcher chạy ẩn phát hiện phiên bản mới, nó mở thẳng công cụ quản lý ở màn hình nhắc cập nhật.

## Vị Trí Dữ Liệu

- Cấu hình Codex: `~/.codex/config.toml`
- Trạng thái xác thực Codex: `~/.codex/auth.json`
- Cơ sở dữ liệu cục bộ Codex: `~/.codex/state_5.sqlite`
- Trạng thái và log Codex++: `~/.codex-session-delete/`
- Bản sao lưu đồng bộ provider: `~/.codex/backups_state/provider-sync`

## Câu Hỏi Thường Gặp

### Menu Codex++ không xuất hiện

Hãy chắc chắn bạn khởi động từ lối vào `Codex++`, không phải Codex gốc. Bạn cũng có thể mở trang Chẩn đoán và Log trong công cụ quản lý để kiểm tra trạng thái chèn script.

### Plugin báo backend mất kết nối

Trước tiên hãy kiểm tra endpoint helper:

```powershell
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:57321/backend/status -Body "{}" -ContentType "application/json"
```

Nếu endpoint hoạt động nhưng plugin vẫn báo timeout, thường là do CDP bridge trong trang Codex hoặc cache script. Hãy khởi động lại Codex++, hoặc kiểm tra log của công cụ quản lý với các mục `renderer.script_loaded`, `bridge.request` và `bridge.response`.

### Upstream worktree khác gì so với tạo gốc của Codex?

Codex++ cập nhật nhánh remote trước, sau đó tạo worktree như lệnh:

```bash
git worktree add -b <new-branch> <worktree-path> upstream/<base-branch>
```

Worktree mới bắt đầu từ nhánh remote tracking mới nhất thay vì HEAD cục bộ của phiên hiện tại. Nếu Codex++ không thể nhận diện an toàn form tạo worktree gốc của phiên bản Codex hiện tại, hãy dùng menu Codex++ và nhập thủ công đường dẫn repository, tên nhánh, đường dẫn worktree, remote và base branch.

### macOS báo không thể mở ứng dụng hoặc ứng dụng bị hỏng

Các build chưa ký hoặc chưa notarize có thể bị Gatekeeper chặn. Hãy cho phép ứng dụng trong System Settings -> Privacy & Security. Với phân phối chính thức, cần cấu hình ký Apple Developer ID và notarization.

### Có hỗ trợ Intel Mac không?

Có. Release cung cấp cả `macos-x64.dmg` và `macos-arm64.dmg`. Intel Mac dùng gói x64, còn Apple Silicon dùng gói arm64.

## Phát Triển

```bash
# Kiểm tra frontend
cd apps/codex-plus-manager
npm install
npm run check
npm run vite:build

# Kiểm tra Rust
cd ../..
cargo fmt --check
cargo test
cargo build --release
```

Cấu trúc chính:

```text
apps/
  codex-plus-launcher/          Lối vào launcher chạy ẩn
  codex-plus-manager/           Công cụ quản lý Tauri
assets/inject/
  renderer-inject.js            Script tăng cường được chèn vào renderer của Codex
crates/
  codex-plus-core/              Khởi động, chèn, cấu hình, cập nhật, cài đặt, bridge
  codex-plus-data/              Dữ liệu phiên, xuất, đồng bộ provider
scripts/installer/
  windows/CodexPlusPlus.nsi     Bộ cài NSIS cho Windows
  macos/package-dmg.sh          Script đóng gói DMG cho macOS
```

## Cộng Đồng Và Hỗ Trợ

Tham gia cộng đồng Codex++ để báo lỗi, chia sẻ trải nghiệm sử dụng hoặc đề xuất tính năng:

Nhóm WeChat: [lấy mã QR mới nhất](https://docs.qq.com/doc/DQ2VOanZTTFZJcUpZ#).

Kênh Telegram: <https://t.me/CodexPlusPlus>

Nếu Codex++ hữu ích với bạn, bạn có thể mời tôi một ly cà phê hoặc ủng hộ một khoản nhỏ để tiếp tục duy trì dự án.

<p align="center">
  <img src="docs/images/sponsor-alipay.jpg" alt="Mã QR ủng hộ Alipay" width="220">
  <img src="docs/images/sponsor-wechat.jpg" alt="Mã QR ủng hộ WeChat" width="220">
</p>

## Liên Kết Thân Thiện

- [LINUX DO](https://linux.do)

## Ghi Chú

Codex++ là công cụ tăng cường bên ngoài và không sửa đổi file gốc của Codex App. Nếu bản cập nhật Codex App trong tương lai thay đổi cấu trúc trang, script chèn có thể cần được cập nhật.
