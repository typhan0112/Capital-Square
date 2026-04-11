import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export default function TermsOfService({ onBack }: TermsOfServiceProps) {
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
          Điều Khoản Sử Dụng
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Chào mừng Quý khách đến với website chính thức của dự án <strong>Capital Square Đà Nẵng</strong>. Bằng việc truy cập và sử dụng website này, Quý khách đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản và Điều kiện sử dụng dưới đây. Vui lòng đọc kỹ các điều khoản này trước khi sử dụng dịch vụ của chúng tôi.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Mục đích của Website</h2>
          <p>
            Website này được xây dựng nhằm mục đích cung cấp thông tin tổng quan, chính sách bán hàng, tiến độ và các tài liệu liên quan đến dự án Capital Square Đà Nẵng. Các thông tin trên website mang tính chất tham khảo và giới thiệu dự án, không cấu thành một lời chào hàng mang tính ràng buộc pháp lý hay hợp đồng mua bán chính thức.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Tuyên bố từ chối trách nhiệm (Disclaimer)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tính minh họa:</strong> Tất cả hình ảnh, video, sa bàn ảo, phối cảnh 3D và sơ đồ mặt bằng trên website chỉ mang tính chất minh họa. Thực tế thi công có thể có những điều chỉnh nhất định theo yêu cầu của cơ quan chức năng hoặc để tối ưu hóa dự án.</li>
            <li><strong>Thông tin chính thức:</strong> Mọi thông tin chính thức, thông số kỹ thuật, diện tích, giá bán và chính sách sẽ được quy định cụ thể và chi tiết tại <strong>Hợp đồng mua bán</strong> hoặc các văn bản thỏa thuận chính thức được ký kết giữa Chủ đầu tư và Khách hàng.</li>
            <li><strong>Sự thay đổi:</strong> Chủ đầu tư bảo lưu quyền thay đổi, cập nhật thiết kế, chính sách và các thông tin khác của dự án mà không cần thông báo trước, tuân thủ theo quy định của pháp luật.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Quyền sở hữu trí tuệ</h2>
          <p>
            Toàn bộ nội dung trên website này, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, đồ họa, logo, biểu tượng, video và mã nguồn, đều thuộc quyền sở hữu của Chủ đầu tư Capital Square Đà Nẵng hoặc được cấp phép sử dụng hợp pháp. Nghiêm cấm mọi hành vi sao chép, phân phối, sửa đổi hoặc sử dụng nội dung website cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản của chúng tôi.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Trách nhiệm của người dùng</h2>
          <p>
            Khi sử dụng website, Quý khách cam kết:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cung cấp thông tin cá nhân chính xác khi điền vào các biểu mẫu đăng ký nhận thông tin, tải tài liệu hoặc yêu cầu tư vấn.</li>
            <li>Không sử dụng website cho các mục đích bất hợp pháp, lừa đảo hoặc gây tổn hại đến uy tín của dự án và Chủ đầu tư.</li>
            <li>Không can thiệp, phá hoại hoặc làm gián đoạn hoạt động của website và hệ thống máy chủ.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Thu thập và bảo mật thông tin</h2>
          <p>
            Việc thu thập và sử dụng thông tin cá nhân của Quý khách được thực hiện theo <strong>Chính sách bảo mật</strong> của chúng tôi. Chúng tôi cam kết bảo vệ dữ liệu cá nhân của Quý khách theo đúng quy định của pháp luật Việt Nam và các chính sách quảng cáo của Google (Google Ads Policies) liên quan đến việc thu thập dữ liệu minh bạch.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Liên kết đến trang web của bên thứ ba</h2>
          <p>
            Website có thể chứa các liên kết đến các trang web của bên thứ ba. Chúng tôi không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc hoạt động của các trang web này. Việc truy cập vào các liên kết này hoàn toàn là rủi ro của riêng Quý khách.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Luật áp dụng và giải quyết tranh chấp</h2>
          <p>
            Các Điều khoản sử dụng này được điều chỉnh và giải thích theo pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Mọi tranh chấp phát sinh từ hoặc liên quan đến việc sử dụng website sẽ được giải quyết thông qua thương lượng, hòa giải. Nếu không thành, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Việt Nam để giải quyết.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-2">Thông tin liên hệ:</h3>
            <p className="mb-1"><strong>Hotline:</strong> 0793.551.551</p>
            <p><strong>Dự án:</strong> Capital Square Đà Nẵng</p>
            <p className="text-sm mt-4 text-gray-500">Cập nhật lần cuối: Tháng 4/2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}
