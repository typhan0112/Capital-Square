import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface DisclaimerProps {
  onBack: () => void;
}

export default function Disclaimer({ onBack }: DisclaimerProps) {
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
          Khuyến Cáo & Miễn Trừ Trách Nhiệm
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg shadow-sm">
            <p className="m-0 text-blue-900 font-medium leading-relaxed">
              <strong>TUYÊN BỐ QUAN TRỌNG:</strong> Website này được vận hành và quản lý bởi <strong>Công ty Cổ phần Đất Xanh Miền Trung</strong> với tư cách là <strong>Đại lý phân phối chính thức</strong> của dự án Capital Square Đà Nẵng. Xin lưu ý rõ, đây <strong>KHÔNG PHẢI</strong> là website trực tiếp của Chủ đầu tư dự án.
            </p>
          </div>

          <p>
            Để đảm bảo tính minh bạch, tuân thủ nghiêm ngặt các chính sách quảng cáo của Google (Google Ads Policies) về việc cung cấp thông tin rõ ràng, không gây nhầm lẫn về danh tính doanh nghiệp, cũng như bảo vệ quyền lợi tối đa của Khách hàng, Đất Xanh Miền Trung xin đưa ra các khuyến cáo và tuyên bố miễn trừ trách nhiệm sau đây:
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Mục đích cung cấp thông tin</h2>
          <p>
            Tất cả các thông tin, tài liệu, bài viết được đăng tải trên website này chỉ nhằm mục đích giới thiệu, cung cấp thông tin tham khảo cho khách hàng quan tâm đến dự án Capital Square Đà Nẵng. Chúng tôi luôn nỗ lực để cập nhật thông tin chính xác nhất từ Chủ đầu tư, tuy nhiên, các thông tin này không mang tính chất cam kết pháp lý hay thay thế cho các văn bản, hợp đồng chính thức.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Hình ảnh, Phối cảnh và Sa bàn</h2>
          <p>
            Các hình ảnh, video, sa bàn ảo, phối cảnh 3D, sơ đồ mặt bằng và thiết kế căn hộ mẫu trên website chỉ mang tính chất minh họa cho dự án. Thực tế thi công, bàn giao có thể có những điều chỉnh, thay đổi từ phía Chủ đầu tư để phù hợp với quy hoạch thực tế và yêu cầu của cơ quan Nhà nước có thẩm quyền.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Giá bán, Chính sách và Tiến độ</h2>
          <p>
            Các thông tin về giá bán (giá dự kiến, khoảng giá), chính sách bán hàng, chương trình ưu đãi, chiết khấu, hỗ trợ lãi suất và tiến độ thanh toán có thể được Chủ đầu tư điều chỉnh, thay đổi theo từng giai đoạn của dự án mà không cần thông báo trước. Thông tin chính thức và có giá trị pháp lý cao nhất là thông tin được ghi nhận trực tiếp trên <strong>Hợp đồng mua bán</strong> và các Phụ lục kèm theo được ký kết giữa Khách hàng và Chủ đầu tư.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Miễn trừ trách nhiệm pháp lý</h2>
          <p>
            Đất Xanh Miền Trung không chịu trách nhiệm pháp lý đối với bất kỳ thiệt hại, rủi ro, hay tổn thất nào (trực tiếp hay gián tiếp) phát sinh từ việc Khách hàng tự ý đưa ra quyết định đầu tư, mua bán chỉ dựa trên các thông tin tham khảo từ website này mà không thông qua sự tư vấn trực tiếp của chuyên viên hoặc không đối chiếu với các văn bản pháp lý chính thức từ Chủ đầu tư.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Bản quyền và Sở hữu trí tuệ</h2>
          <p>
            Các thông tin, logo, hình ảnh dự án thuộc bản quyền của Chủ đầu tư. Đất Xanh Miền Trung sử dụng các tài liệu này dưới tư cách là Đại lý phân phối chính thức để thực hiện các chiến dịch truyền thông, tư vấn bán hàng và tuân thủ các quy định về quyền sở hữu trí tuệ.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-2">Thông tin liên hệ Đại lý phân phối:</h3>
            <p className="mb-1"><strong>Công ty:</strong> Công ty Cổ phần Đất Xanh Miền Trung</p>
            <p className="mb-1"><strong>Vai trò:</strong> Đại lý phân phối chính thức dự án Capital Square Đà Nẵng</p>
            <p className="mb-1"><strong>Hotline tư vấn:</strong> 0793.551.551</p>
            <p className="text-sm mt-4 text-gray-500">Cập nhật lần cuối: Tháng 4/2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}
