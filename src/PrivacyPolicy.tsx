import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          Chính Sách Bảo Mật Thông Tin
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>
            Chào mừng Quý khách đến với website chính thức của dự án <strong>Capital Square Đà Nẵng</strong>. Chúng tôi hiểu rằng quyền riêng tư và bảo mật thông tin cá nhân là rất quan trọng đối với Quý khách. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân của Quý khách khi truy cập và sử dụng dịch vụ trên website của chúng tôi.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Mục đích thu thập thông tin</h2>
          <p>
            Chúng tôi thu thập thông tin cá nhân của Quý khách (bao gồm nhưng không giới hạn: Họ tên, Số điện thoại, Email) thông qua các biểu mẫu đăng ký trên website nhằm các mục đích sau:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tư vấn, cung cấp thông tin chi tiết về dự án Capital Square Đà Nẵng theo yêu cầu của Quý khách.</li>
            <li>Gửi các tài liệu dự án, bảng giá, chính sách bán hàng, tiến độ thanh toán qua Email hoặc Zalo.</li>
            <li>Hỗ trợ đăng ký tham quan thực tế dự án hoặc nhà mẫu.</li>
            <li>Gửi các thông báo về sự kiện mở bán, chương trình ưu đãi mới nhất.</li>
            <li>Nâng cao chất lượng dịch vụ chăm sóc khách hàng.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Phạm vi sử dụng thông tin</h2>
          <p>
            Thông tin cá nhân của Quý khách thu thập được sẽ chỉ được sử dụng trong nội bộ dự án Capital Square Đà Nẵng và các đối tác phân phối chính thức của dự án. Chúng tôi cam kết không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào khác vì mục đích thương mại.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Thời gian lưu trữ thông tin</h2>
          <p>
            Dữ liệu cá nhân của Quý khách sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ phía Quý khách. Trong mọi trường hợp, thông tin cá nhân sẽ được bảo mật an toàn trên máy chủ của chúng tôi.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Cam kết bảo mật thông tin</h2>
          <p>
            Chúng tôi áp dụng các biện pháp kỹ thuật và an ninh phù hợp để ngăn chặn truy cập trái phép hoặc trái pháp luật, mất mát hoặc tiêu hủy, thiệt hại cho thông tin của Quý khách. Tuy nhiên, không có dữ liệu nào truyền trên Internet có thể được bảo mật 100%. Do đó, chúng tôi không thể cam kết bảo mật thông tin một cách tuyệt đối và không chịu trách nhiệm trong trường hợp có sự truy cập trái phép thông tin cá nhân của Quý khách do lỗi từ phía người dùng.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Quyền lợi của khách hàng</h2>
          <p>
            Quý khách có quyền yêu cầu chúng tôi cập nhật, điều chỉnh hoặc xóa bỏ thông tin cá nhân của mình khỏi hệ thống cơ sở dữ liệu bất kỳ lúc nào bằng cách liên hệ trực tiếp qua Hotline hoặc Email được cung cấp trên website.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Thay đổi chính sách</h2>
          <p>
            Chúng tôi có quyền thay đổi, cập nhật Chính sách bảo mật này bất cứ lúc nào để phù hợp với các thay đổi của pháp luật hoặc hoạt động của dự án. Mọi thay đổi sẽ được cập nhật công khai trên website.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-bold text-slate-900 mb-2">Thông tin liên hệ:</h3>
            <p className="mb-1"><strong>Hotline:</strong> 0793.551.551</p>
            <p><strong>Dự án:</strong> Capital Square Đà Nẵng</p>
          </div>
        </div>
      </main>
    </div>
  );
}
