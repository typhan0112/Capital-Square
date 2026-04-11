import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface DataProcessingPolicyProps {
  onBack: () => void;
}

export default function DataProcessingPolicy({ onBack }: DataProcessingPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-[100]">
        <div className="container mx-auto px-4 h-20 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại trang chủ
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-24 px-4 container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-8 text-center">
          Chính Sách Xử Lý Dữ Liệu Cá Nhân
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg shadow-sm">
            <p className="m-0 text-blue-900 font-medium leading-relaxed">
              <strong>THÔNG TIN ĐƠN VỊ THU THẬP:</strong> Website này được vận hành bởi <strong>Công ty Cổ phần Đất Xanh Miền Trung</strong> - Đại lý phân phối chính thức của dự án Capital Square Đà Nẵng. Chúng tôi <strong>KHÔNG PHẢI</strong> là Chủ đầu tư dự án. Mọi dữ liệu thu thập trên website này được quản lý trực tiếp bởi Đất Xanh Miền Trung nhằm mục đích tư vấn và hỗ trợ khách hàng.
            </p>
          </div>

          <p>
            Nhằm tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân của Chính phủ Việt Nam và các <strong>Chính sách thu thập dữ liệu của Google Ads</strong>, Đất Xanh Miền Trung cam kết minh bạch trong việc thu thập, xử lý và bảo vệ dữ liệu cá nhân của Quý khách hàng như sau:
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Loại dữ liệu cá nhân được thu thập</h2>
          <p>
            Khi Quý khách chủ động điền vào các biểu mẫu (form) đăng ký nhận thông tin, tải bảng giá hoặc yêu cầu gọi lại trên website, chúng tôi sẽ thu thập các thông tin cơ bản bao gồm:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Họ và tên</li>
            <li>Số điện thoại liên hệ</li>
            <li>Địa chỉ Email (nếu có)</li>
            <li>Nhu cầu quan tâm cụ thể đối với dự án</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Mục đích xử lý dữ liệu</h2>
          <p>
            Dữ liệu của Quý khách chỉ được sử dụng cho các mục đích hợp pháp và minh bạch sau đây:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Liên hệ tư vấn trực tiếp, giải đáp thắc mắc về dự án Capital Square Đà Nẵng.</li>
            <li>Gửi các tài liệu dự án (brochure, mặt bằng, chính sách bán hàng, bảng giá) qua Email hoặc Zalo theo yêu cầu của Quý khách.</li>
            <li>Hỗ trợ thủ tục đăng ký tham quan nhà mẫu hoặc thực tế dự án.</li>
            <li>Chăm sóc khách hàng và thông báo các sự kiện mở bán, ưu đãi từ Chủ đầu tư (chỉ khi Quý khách đồng ý nhận thông tin).</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Nguyên tắc chia sẻ dữ liệu</h2>
          <p>
            Đất Xanh Miền Trung cam kết <strong>KHÔNG BÁN, KHÔNG CHO THUÊ</strong> và <strong>KHÔNG CHIA SẺ</strong> dữ liệu cá nhân của Quý khách cho bất kỳ bên thứ ba nào vì mục đích thương mại độc lập. Dữ liệu chỉ có thể được chia sẻ trong các trường hợp:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chia sẻ với Chủ đầu tư dự án Capital Square Đà Nẵng khi Quý khách quyết định tiến hành các thủ tục đặt cọc, ký kết Hợp đồng mua bán.</li>
            <li>Khi có yêu cầu hợp pháp từ các cơ quan Nhà nước có thẩm quyền theo quy định của pháp luật.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Thời gian lưu trữ và Bảo mật</h2>
          <p>
            Dữ liệu cá nhân của Quý khách sẽ được lưu trữ an toàn trên hệ thống CRM nội bộ của Đất Xanh Miền Trung cho đến khi hoàn thành mục đích thu thập hoặc khi Quý khách có yêu cầu xóa bỏ. Chúng tôi áp dụng các biện pháp kỹ thuật mã hóa và phân quyền truy cập nghiêm ngặt để chống lại việc truy cập, thay đổi hoặc phá hoại dữ liệu trái phép.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Quyền của Chủ thể dữ liệu (Khách hàng)</h2>
          <p>
            Theo quy định của pháp luật, Quý khách hoàn toàn có các quyền sau đối với dữ liệu cá nhân của mình:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Quyền được biết:</strong> Quý khách được quyền biết dữ liệu của mình đang được thu thập và xử lý như thế nào (thông qua chính sách này).</li>
            <li><strong>Quyền chỉnh sửa và xóa bỏ:</strong> Quý khách có quyền yêu cầu chúng tôi cập nhật, chỉnh sửa hoặc xóa bỏ hoàn toàn thông tin cá nhân khỏi hệ thống bất kỳ lúc nào.</li>
            <li><strong>Quyền rút lại sự đồng ý:</strong> Quý khách có thể từ chối nhận các thông báo, email marketing hoặc yêu cầu ngừng xử lý dữ liệu bằng cách liên hệ trực tiếp với chúng tôi.</li>
          </ul>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-2">Đơn vị xử lý dữ liệu - Thông tin liên hệ:</h3>
            <p className="mb-1"><strong>Công ty:</strong> Công ty Cổ phần Đất Xanh Miền Trung</p>
            <p className="mb-1"><strong>Vai trò:</strong> Đại lý phân phối chính thức dự án Capital Square Đà Nẵng</p>
            <p className="mb-1"><strong>Hotline hỗ trợ & Yêu cầu xóa dữ liệu:</strong> 0793.551.551</p>
            <p className="text-sm mt-4 text-gray-500">Cập nhật lần cuối: Tháng 4/2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}
