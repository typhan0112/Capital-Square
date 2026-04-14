import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Star, TrendingUp, CheckCircle, Shield, Phone, Mail, X, Clock, Plane, FileText, Download, Check, Scale, Building2, Crown, Sunrise, Sun, Sunset, Moon, Maximize, Eye, Layout, Activity, Layers, ChevronDown, Menu, Sparkles, FileSpreadsheet, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Disclaimer from './Disclaimer';
import DataProcessingPolicy from './DataProcessingPolicy';

const FadeInSection = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

const faqData = [
  {
    question: "Capital Square có những loại căn hộ nào?",
    answer: "Dự án cung cấp đa dạng các loại hình từ 1-3 phòng ngủ, Duplex và Penthouse, đáp ứng nhu cầu khắt khe của giới tinh hoa và chuyên gia quốc tế."
  },
  {
    question: "Vị trí Capital Square có thuận tiện di chuyển không?",
    answer: "Tọa lạc tại quỹ đất hiếm hoi ven sông Hàn, giao lộ Trần Hưng Đạo - Ngô Quyền, cách Vincom Plaza 30 giây, biển Mỹ Khê 3 phút và sân bay 10 phút."
  },
  {
    question: "Tiến độ xây dựng Capital Square như thế nào?",
    answer: "Dự án đang được thi công bởi các nhà thầu uy tín hàng đầu (Hòa Bình, Delta, Fecon) và dự kiến bàn giao tòa Victory Place vào Quý I/2027."
  },
  {
    question: "Capital Square có những tiện ích gì?",
    answer: "Dự án sở hữu bộ sưu tập 88+ tiện ích đặc quyền bao gồm hồ bơi vô cực 1.500m2, quảng trường trung tâm 2.000m2, phố thương mại Park Boulevard 24/7 và an ninh sinh trắc học."
  },
  {
    question: "Pháp lý Capital Square có đảm bảo không?",
    answer: "Dự án sở hữu pháp lý vững chắc: Sổ hồng sở hữu lâu dài cho người Việt Nam và 50 năm cho người nước ngoài. Đặc biệt, đủ điều kiện bán & cho thuê hợp pháp cho người nước ngoài."
  },
  {
    question: "Giá bán căn hộ Capital Square bao nhiêu?",
    answer: "Vui lòng đăng ký nhận bảng giá chi tiết để cập nhật thông tin mới nhất và các chính sách ưu đãi đặc quyền (như chiết khấu 15% hoặc gói vay 0% trong 24 tháng)."
  }
];

const comparisonData = [
  {
    id: 'capital',
    name: 'Capital Square',
    isHighlighted: true,
    data: {
      location: 'Lõi trung tâm Sông Hàn, Sơn Trà',
      developer: 'SIH & Mega Assets',
      scale: '14 tòa tháp, 24-29 tầng',
      legal: 'Sổ hồng lâu dài ✓',
      density: '40% mật độ xây dựng',
      amenities: '88+ tiện ích, Hồ bơi 1.500m2',
      operator: 'Savills Việt Nam',
      price: 'Từ 3.x tỷ/căn',
      progress: 'Bàn giao Q1/2027',
      highlight: 'Bán & cho thuê người nước ngoài'
    }
  },
  {
    id: 'peninsula',
    name: 'Peninsula Đà Nẵng',
    isHighlighted: false,
    data: {
      location: 'Lê Văn Duyệt, Sơn Trà',
      developer: 'Tập đoàn Phương Trang',
      scale: '2 tòa tháp, 30 tầng',
      legal: 'Sở hữu lâu dài',
      density: '44% mật độ xây dựng',
      amenities: 'Tiện ích nội khu cơ bản',
      operator: 'Chưa công bố',
      price: 'Từ 3.5 tỷ/căn',
      progress: 'Đang thi công',
      highlight: 'Giá tiếp cận tốt'
    }
  },
  {
    id: 'masteri',
    name: 'Masteri Rivera',
    isHighlighted: false,
    data: {
      location: '50 Quy Mỹ, Hải Châu',
      developer: 'Masterise Homes',
      scale: '2 tòa 39 tầng',
      legal: 'Cần xác nhận',
      density: 'Chưa công bố',
      amenities: '31 tiện ích compound',
      operator: 'Chưa công bố',
      price: 'Từ 4.13 tỷ/căn 1PN',
      progress: 'Đang thi công tầng 14',
      highlight: 'Thương hiệu Masterise'
    }
  }
];

const criteriaLabels = [
  { key: 'location', label: 'Vị trí', icon: MapPin },
  { key: 'developer', label: 'Chủ đầu tư', icon: Building2 },
  { key: 'scale', label: 'Quy mô', icon: Layers },
  { key: 'legal', label: 'Pháp lý', icon: ShieldCheck },
  { key: 'density', label: 'Mật độ xây dựng', icon: Scale },
  { key: 'amenities', label: 'Tiện ích', icon: Star },
  { key: 'operator', label: 'Đơn vị vận hành', icon: Crown },
  { key: 'price', label: 'Khoảng giá', icon: TrendingUp },
  { key: 'progress', label: 'Tiến độ', icon: Activity },
  { key: 'highlight', label: 'Điểm nổi bật', icon: Star }
];

const amenities = [
  {
    id: 'dawn',
    label: 'Bình minh',
    icon: Sunrise,
    title: 'Hồ Bơi Vô Cực 1.500m²',
    desc: 'Đánh thức mọi giác quan tại Hồ bơi vô cực mặt nước 1.500m² lúc bình minh. Hít thở không khí trong lành, đón ánh nắng đầu tiên của ngày mới giữa lưng trời Đà Nẵng.',
    image: 'https://capitalsquaredanang.vn/wp-content/uploads/capital-square-da-nang-tien-ich.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'morning',
    label: 'Buổi sáng',
    icon: Sun,
    title: 'Quảng Trường Trung Tâm 2.000m²',
    desc: 'Tái tạo năng lượng với không gian xanh mát tại Quảng trường trung tâm. Không gian thư giãn đỉnh cao giúp bạn duy trì vóc dáng và sức khỏe mỗi ngày.',
    image: 'https://w.ladicdn.com/s900x650/661b9fa1474606001290ffc6/z7589278146507_3f3a38a06b9178f4602a710ef78584bb-20260305070632-nk26w.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'sunset',
    label: 'Hoàng hôn',
    icon: Sunset,
    title: 'Phố Thương Mại Park Boulevard',
    desc: 'Hoàng hôn buông xuống, đắm mình trong không gian mua sắm xa xỉ tại Phố thương mại Park Boulevard hoạt động 24/7. Thỏa mãn mọi nhu cầu giải trí và ẩm thực.',
    image: 'https://media.thanhtra.com.vn/public/uploads/2026/03/25/69c3754482227375122c09e7.png?w=1319?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'night',
    label: 'Màn đêm',
    icon: Moon,
    title: 'Dịch Vụ Concierge Savills',
    desc: 'Và khi màn đêm buông xuống, tận hưởng sự an tâm tuyệt đối với an ninh đa lớp IoT sinh trắc học và dịch vụ Concierge qua ứng dụng Savills Property Cube.',
    image: 'https://capitalsquares-danang.com/wp-content/uploads/2026/03/herobanner-capitalsquare-1.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Spa & Wellness Center' },
  { url: 'https://capitalsquaredanang.vn/wp-content/uploads/capital-square-da-nang-tien-ich-14.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Lounge Sang Trọng' },
  { url: 'https://capitalsquaredanang.vn/wp-content/uploads/tien-ich-du-an-capital-square-da-nang-4.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Khu Vui Chơi Trẻ Em' },
  { url: 'https://capitalsquaredanang.vn/wp-content/uploads/tien-ich-du-an-capital-square-da-nang-6.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Sân Goft ngoài trời' },
  { url: 'https://cdn.xanhsm.com/2025/01/83bce446-nha-hang-5-sao-quan-1-6.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Nhà Hàng 5 Sao' },
  { url: 'https://capitalsquaredanang.vn/wp-content/uploads/capital-square-da-nang-tien-ich-5.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', title: 'Sảnh Đón Khách' },
];

const floorPlans = [
  {
    id: '1br',
    name: 'Căn 1PN',
    area: '50m² - 60m²',
    view: 'Sông Hàn, Cầu Rồng',
    layout: '1 Phòng ngủ, 1 WC, Phòng khách, Bếp, Ban công',
    images: [
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-1.webp',
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-2-1.jpg'
    ],
  },
  {
    id: '2br',
    name: 'Căn 2PN',
    area: '73m² - 84m²',
    view: 'Biển Mỹ Khê, Bán đảo Sơn Trà',
    layout: '2 Phòng ngủ, 2 WC, Phòng khách, Bếp, Ban công rộng',
    images: [
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-3.webp',
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-4.webp'
    ],
  },
  {
    id: '3br',
    name: 'Căn 3PN',
    area: '100m² - 115m²',
    view: 'Sông Hàn, Biển Mỹ Khê, Trung tâm TP',
    layout: '3 Phòng ngủ, 2 WC, Phòng khách lớn, Bếp, 2 Ban công',
    images: [
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-5.webp',
      'http://capital-square.com.vn/wp-content/uploads/2026/04/Concept-noi-that-Du-an-Capital-Square-hinh-anh-4-1-1.jpg'
    ],
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    area: '256m² - 415m²',
    view: 'Panorama 360 độ Sông - Núi - Biển',
    layout: '4 Phòng ngủ, 5 WC, Hồ bơi riêng, Sân vườn, Phòng giải trí',
    images: [
      'https://estuaryresidental.com/du-an/wp-content/uploads/2025/04/Nha-mau-can-ho-Capital-Square-Da-Nang-tai-Capital-Square-2-3.jpg',
      'https://capitalsquaredanang.vn/wp-content/uploads/capital-square-da-nang-tien-ich.jpg'
    ],
  }
];

const constructionImages = [
  { url: 'https://phungbds.com/wp-content/uploads/2025/02/tien-do-du-an-can-ho-capital-square-2-3-thang-5-2025.webp?auto=format&fit=crop&q=80&w=1000', title: 'Cập nhật tiến độ thi công Tháng 3/2026' },
  { url: 'https://phungbds.com/wp-content/uploads/2025/02/tien-do-du-an-can-ho-capital-square-2-3-thang-5-2025-2.webp?auto=format&fit=crop&q=80&w=1000', title: 'Thi công kết cấu phần thân' },
  { url: 'https://daongocchienthangreal.vn/wp-content/uploads/2025/10/DAT-min.jpg?auto=format&fit=crop&q=80&w=1000', title: 'Toàn cảnh công trường từ trên cao' },
  { url: 'https://capitalsquaredanang.org/wp-content/uploads/2026/01/6-1024x768.jpg?auto=format&fit=crop&q=80&w=1000', title: 'Đội ngũ kỹ sư giám sát chặt chẽ' },
  { url: 'https://phungbds.com/wp-content/uploads/2025/02/tien-do-du-an-can-ho-capital-square-2-3-thang-5-2025.webp?auto=format&fit=crop&q=80&w=1000', title: 'Đảm bảo tiến độ 3 ca/ngày' },
  { url: 'https://static1.cafeland.vn/cafelandnew/hinh-anh/2025/07/14/195/image-20250714173158-12.png?t=1?auto=format&fit=crop&q=80&w=1000', title: 'Chất lượng thi công đạt chuẩn quốc tế' },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  
  const defaultModalConfig = {
    title: "Đăng Ký Nhận Thông Tin",
    subtitle: "Bảng giá & Chiết khấu Đợt 1 Capital Square",
    buttonText: "NHẬN BÁO GIÁ NGAY"
  };
  const [modalConfig, setModalConfig] = useState(defaultModalConfig);

  const openModal = (config?: Partial<typeof defaultModalConfig>) => {
    setModalConfig({ ...defaultModalConfig, ...config });
    setIsModalOpen(true);
  };

  const [activeStep, setActiveStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFloorPlan, setActiveFloorPlan] = useState(1); // Default to 2BR
  const [activeFloorPlanImageIndex, setActiveFloorPlanImageIndex] = useState(0);
  const [comparisonMode, setComparisonMode] = useState<'table' | 'cards'>('table');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'disclaimer' | 'data-processing'>('home');
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{show: boolean, message: string, type: 'success' | 'error'}>({show: false, message: '', type: 'success'});

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000); // Hide after 5 seconds
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formName: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Thay bằng Access Key của bạn từ web3forms.com
    formData.append("access_key", "0799f5f6-1bb8-4efb-b5fd-f0ed88f5d26b");
    formData.append("subject", "Khách hàng mới từ form: " + formName);
    formData.append("from_name", "Capital Square Landing Page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showNotification('Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.', 'success');
        (e.target as HTMLFormElement).reset();
        setIsModalOpen(false);
        setIsLegalModalOpen(false);
        setShowExitIntent(false);
      } else {
        showNotification('Có lỗi xảy ra, vui lòng thử lại sau.', 'error');
      }
    } catch (error) {
      console.error(error);
      showNotification('Có lỗi xảy ra, vui lòng kiểm tra kết nối mạng.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };


  // Exit intent logic
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent && currentPage === 'home') {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitIntent, currentPage]);

  // Reset image index when floor plan changes
  useEffect(() => {
    setActiveFloorPlanImageIndex(0);
  }, [activeFloorPlan]);

  // Auto-play logic for floor plan images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFloorPlanImageIndex((prev) => 
        (prev + 1) % floorPlans[activeFloorPlan].images.length
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [activeFloorPlan]);

  const nextFloorPlanImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveFloorPlanImageIndex((prev) => (prev + 1) % floorPlans[activeFloorPlan].images.length);
  };

  const prevFloorPlanImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveFloorPlanImageIndex((prev) => (prev - 1 + floorPlans[activeFloorPlan].images.length) % floorPlans[activeFloorPlan].images.length);
  };

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'disclaimer') {
    return <Disclaimer onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'data-processing') {
    return <DataProcessingPolicy onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="font-sans text-gray-800 bg-white relative pb-16 md:pb-0 pt-20">
      {/* Notification Toast */}
      {notification.show && (
        <div 
          id={notification.type === 'success' ? 'guiThanhCong' : undefined}
          className={`fixed top-24 right-4 z-[9999] p-4 rounded-lg shadow-2xl text-white font-medium transition-all duration-500 transform translate-y-0 opacity-100 flex items-center gap-3 ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
        >
          {notification.type === 'success' ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <AlertCircle className="w-6 h-6" />
          )}
          <span>{notification.message}</span>
          <button onClick={() => setNotification(prev => ({ ...prev, show: false }))} className="ml-4 hover:opacity-80">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-[100] transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <img src="http://capital-square.com.vn/wp-content/uploads/2026/04/logo__15_-removebg-preview.png" alt="Capital Square Logo" className="h-10 md:h-12 object-contain" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#overview" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Tổng quan</a>
            <a href="#location" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Vị trí</a>
            <a href="#amenities" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Tiện ích</a>
            <a href="#floor-plan" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Mặt bằng</a>
            <a href="#sales-policy" className="text-sm font-bold text-slate-700 hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Chính sách</a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => openModal()}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] hover:from-[#C5A028] hover:to-[#997A15] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Nhận báo giá
            </button>
            <button 
              className="lg:hidden text-slate-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <a href="#overview" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#D4AF37] py-2 border-b border-gray-50 uppercase">Tổng quan</a>
            <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#D4AF37] py-2 border-b border-gray-50 uppercase">Vị trí</a>
            <a href="#amenities" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#D4AF37] py-2 border-b border-gray-50 uppercase">Tiện ích</a>
            <a href="#floor-plan" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#D4AF37] py-2 border-b border-gray-50 uppercase">Mặt bằng</a>
            <a href="#sales-policy" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-slate-700 hover:text-[#D4AF37] py-2 border-b border-gray-50 uppercase">Chính sách</a>
            <button 
              onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] hover:from-[#C5A028] hover:to-[#997A15] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)] mt-2"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              Nhận báo giá
            </button>
          </div>
        )}
      </header>

      {/* SECTION 1: Hero Banner */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Video (YouTube) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/Yhr8-XtYMU4?autoplay=1&mute=1&loop=1&playlist=Yhr8-XtYMU4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex-grow flex flex-col justify-center items-center mt-20 mb-24">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white text-sm md:text-base font-medium tracking-wide">
              Hơn <strong className="text-yellow-400 font-bold">628+</strong> nhà đầu tư đã pre-booking
            </span>
          </div>
          
          <h1 className="text-yellow-500 uppercase text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight drop-shadow-lg">
            CAPITAL SQUARE ĐÀ NẴNG: MỸ CẢNH TẦNG KHÔNG - TRÁI TIM LÕI TRUNG TÂM SÔNG HÀN
          </h1>
          <p className="text-white text-lg md:text-xl mt-6 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
            Ra mắt bộ sưu tập giới hạn tòa <span className="text-yellow-500 font-bold">Victory Place</span>. Đặc quyền sống thượng lưu <span className="text-yellow-500 font-bold uppercase">Sở Hữu Lâu Dài</span> - Vận hành bởi danh tiếng toàn cầu Savills.
          </p>
          <button 
            onClick={() => openModal()}
            className="mt-10 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(202,138,4,0.6)]"
          >
            ĐĂNG KÝ NHẬN GIÁ QUỸ CĂN ĐẸP GĐ1
          </button>
        </div>

        {/* Trust Badges */}
        <div className="relative z-20 w-full bg-black/40 backdrop-blur-sm border-t border-white/10 py-6 mt-auto overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-gray-300 text-sm text-center mb-4 uppercase tracking-widest">Đối tác phát triển hàng đầu</p>
            <div className="flex w-max animate-marquee opacity-80 hover:opacity-100 transition-opacity">
              {/* First set of logos */}
              <div className="flex justify-center items-center gap-12 md:gap-24 px-6 md:px-12">
                <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-wider whitespace-nowrap">SIH & MEGA ASSETS</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">HÒA BÌNH</span>
                <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">DELTA</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">FECON</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">SAVILLS</span>
              </div>
              {/* Duplicated set for seamless looping */}
              <div className="flex justify-center items-center gap-12 md:gap-24 px-6 md:px-12" aria-hidden="true">
                <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-wider whitespace-nowrap">SIH & MEGA ASSETS</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">HÒA BÌNH</span>
                <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">DELTA</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">FECON</span>
                <span className="text-white font-sans font-bold text-xl md:text-2xl tracking-widest whitespace-nowrap">SAVILLS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 Core Values (USPs) */}
      <FadeInSection className="py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="bg-white shadow-xl p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3 text-slate-900">Sở Hữu Lâu Dài</h3>
            <p className="text-gray-600 leading-relaxed">
              Pháp lý sổ hồng vĩnh viễn (Người VN) / 50 năm (Người nước ngoài).
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white shadow-xl p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3 text-slate-900">Cộng Đồng Toàn Cầu</h3>
            <p className="text-gray-600 leading-relaxed">
              Dự án hiếm hoi đủ điều kiện Bán & Cho thuê hợp pháp cho người nước ngoài.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white shadow-xl p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
              <Activity className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3 text-slate-900">Bảo Chứng Tiến Độ</h3>
            <p className="text-gray-600 leading-relaxed">
              Thi công bởi Tập đoàn Hòa Bình, Delta, Fecon. (Dự kiến bàn giao Q1/2027).
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white shadow-xl p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-6">
              <Star className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3 text-slate-900">Dịch Vụ 5 Sao</h3>
            <p className="text-gray-600 leading-relaxed">
              Quản lý vận hành hệ sinh thái bởi Savills Việt Nam.
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 2.5: Special Offer & CTA Form */}
      <FadeInSection className="relative py-20 px-4 bg-[#0A192F] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Capital Square View" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/90"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight uppercase">
              MỞ BÁN CĂN HỘ CAO CẤP "HÀNG GHẾ ĐẦU NGẮM PHÁO HOA"<br/>
              <span className="text-[#D4AF37]">CAPITAL SQUARE ĐÀ NẴNG</span>
            </h2>
          </div>

          {/* 3 Highlight Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#E67E22] rounded-full py-4 px-6 text-center shadow-lg border border-[#F39C12]/50 transform hover:scale-105 transition-transform">
              <p className="text-white font-bold text-lg leading-tight uppercase">GIÁ BÁN CHỈ 3,X TỶ</p>
              <p className="text-white/90 text-sm font-medium uppercase">SỞ HỮU LÂU DÀI</p>
            </div>
            <div className="bg-[#E67E22] rounded-full py-4 px-6 text-center shadow-lg border border-[#F39C12]/50 transform hover:scale-105 transition-transform">
              <p className="text-white font-bold text-lg leading-tight uppercase">ƯU ĐÃI CHIẾT KHẤU TỚI 22%</p>
              <p className="text-white/90 text-sm font-medium uppercase">GIAI ĐOẠN 1</p>
            </div>
            <div className="bg-[#E67E22] rounded-full py-4 px-6 text-center shadow-lg border border-[#F39C12]/50 transform hover:scale-105 transition-transform">
              <p className="text-white font-bold text-lg leading-tight uppercase">HỖ TRỢ LÃI SUẤT 0%</p>
              <p className="text-white/90 text-sm font-medium uppercase">TRONG 24 THÁNG</p>
            </div>
          </div>

          {/* Form Box */}
          <div className="border-2 border-[#D4AF37] rounded-lg p-6 md:p-10 bg-white/5 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-3 uppercase">
                ANH CHỊ MUỐN TẢI XUỐNG BÁO GIÁ NGAY BÂY GIỜ?
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Mở bán giỏ hàng độc quyền <strong className="text-white">18 căn VIEW ĐẸP NHẤT</strong> và được ưu tiên chọn căn đẹp
              </p>
            </div>

            {/* File Downloads Preview */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded border border-white/20">
                <div className="bg-green-600 p-1.5 rounded text-white">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <span className="text-white text-sm font-medium">Bang-gia-sau-uu-dai-tot-nhat-T04/2026.csv</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded border border-white/20">
                <div className="bg-red-600 p-1.5 rounded text-white">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-white text-sm font-medium">Chinh-sach-uu-dai-T04/2026.pdf</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => handleFormSubmit(e, "Form Đăng Ký")}>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Tên Quý Khách:</label>
                <input 
                  type="text" name="name" 
                  placeholder="Nhập Họ và tên quý khách" 
                  className="w-full p-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">SĐT/Zalo/Viber Quý Khách:</label>
                <input 
                  type="tel" name="phone" 
                  placeholder="Nhập Số điện thoại quý khách" 
                  className="w-full p-3 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm mb-2">Chọn sản phẩm cần tư vấn:</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-white cursor-pointer bg-white/10 px-3 py-2 rounded border border-white/20 hover:bg-white/20 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-[#D4AF37]" />
                    <span className="text-sm">1 phòng ngủ</span>
                  </label>
                  <label className="flex items-center gap-2 text-white cursor-pointer bg-white/10 px-3 py-2 rounded border border-white/20 hover:bg-white/20 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-[#D4AF37]" />
                    <span className="text-sm">2 phòng ngủ</span>
                  </label>
                  <label className="flex items-center gap-2 text-white cursor-pointer bg-white/10 px-3 py-2 rounded border border-white/20 hover:bg-white/20 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-[#D4AF37]" />
                    <span className="text-sm">3 phòng ngủ</span>
                  </label>
                  <label className="flex items-center gap-2 text-white cursor-pointer bg-white/10 px-3 py-2 rounded border border-white/20 hover:bg-white/20 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-[#D4AF37]" />
                    <span className="text-sm">Penthouse</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#F1C40F] to-[#F39C12] hover:from-[#F39C12] hover:to-[#E67E22] text-slate-900 font-bold py-4 rounded text-lg transition-all shadow-[0_0_15px_rgba(241,196,15,0.5)] mt-4 uppercase"
              >
                TẢI XUỐNG NGAY !!!!
              </button>
              
              <p className="text-center text-gray-400 text-xs mt-4">
                *Giám đốc dự án của dự án sẽ gửi Full bảng giá và phương án mua tốt nhất cho anh chị chỉ sau 2 Phút – 0905.683.225
              </p>
            </form>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 3: Project Overview */}
      <FadeInSection id="overview" className="py-24 bg-[#0B1320] px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Tổng quan dự án
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
              Tổ hợp <span className="text-yellow-500">Đại Đô Thị Thu Nhỏ 6 HA</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capital Square là dự án tổ hợp thương mại dịch vụ, căn hộ cao cấp toạ lạc tại đường Trần Hưng Đạo, quận Sơn Trà, Đà Nẵng. Dự án Capital Square Đà Nẵng được xây dựng trên diện tích 61.368m2 chia thành 2 phân khu Capital Square 2 và Capital Square 3 bao gồm 14 toà căn hộ cao từ 24 – 29 tầng với 3,391 căn hộ. Capital Square Đà Nẵng hứa hẹn mang đến một không gian sống đẳng cấp quốc tế với phong cách kiến trúc độc đáo và hệ thống tiện ích đa dạng. Dự án được ví như biểu tượng sống mới dành cho giới tinh hoa, kiến tạo nên một cộng đồng cư dân văn minh, thịnh vượng và đẳng cấp.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left: Info Block */}
            <div className="w-full lg:w-1/2">
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 md:p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center">
                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Tên dự án</span>
                    <span className="md:w-2/3 text-white font-medium">Capital Square Đà Nẵng</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Chủ đầu tư</span>
                    <span className="md:w-2/3 text-white font-medium">Công ty TNHH Mega Assets & Công ty TNHH BĐS SIH</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Vị trí</span>
                    <span className="md:w-2/3 text-white font-medium leading-relaxed">Giao lộ Trần Hưng Đạo - Ngô Quyền, phường An Hải Bắc, quận Sơn Trà, TP. Đà Nẵng.</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Tổng diện tích</span>
                    <span className="md:w-2/3 text-white font-medium">61.368 m² (Hơn 6 ha)</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Mật độ xây dựng</span>
                    <span className="md:w-2/3 text-white font-medium">40%</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Quy mô & Loại hình</span>
                    <span className="md:w-2/3 text-white font-medium leading-relaxed">14 tòa tháp cao 24 - 29 tầng.<br/>Căn hộ cao cấp, Duplex, Penthouse và Shophouse.</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Tổng thầu thi công</span>
                    <span className="md:w-2/3 text-white font-medium">Hòa Bình, Delta, Fecon</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Tổng vốn đầu tư</span>
                    <span className="md:w-2/3 text-white font-medium">1.885 tỷ đồng</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Tiến độ thực hiện</span>
                    <span className="md:w-2/3 text-white font-medium">Bàn giao tòa Victory Place: Quý I/2027</span>
                  </li>
                  <li className="flex flex-col md:flex-row md:border-b border-slate-700/50 md:pb-4 last:border-0 last:pb-0 gap-1 md:gap-4">
                    <span className="md:w-1/3 text-gray-400 uppercase tracking-wider text-xs font-semibold shrink-0 mt-1">Pháp lý</span>
                    <span className="md:w-2/3 text-white font-medium">Sổ hồng sở hữu lâu dài</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right: Video & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start gap-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 relative group">
                <iframe 
                  className="w-full h-full relative z-0"
                  src="https://www.youtube.com/embed/_f_r6NFoxZ0?rel=0" 
                  title="Capital Square TVC" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* New Content Block */}
              <div className="bg-slate-800/40 border border-slate-700/50 p-6 md:p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold font-serif text-yellow-500 mb-4">Đơn vị tư vấn và đối tác hỗ trợ giải ngân dự án:</h3>
                
                <div className="space-y-4 text-gray-300 text-sm md:text-base">
                  <p>
                    <strong className="text-white">Đất Xanh Miền Trung:</strong> Cung cấp các dịch vụ hỗ trợ pháp lý, vay vốn ngân hàng và đồng hành xuyên suốt quá trình cùng nhà đầu tư.
                  </p>
                  
                  <div>
                    <p className="font-semibold text-white mb-2">– Đối tác ngân hàng (Hỗ trợ 24 tháng 0% lãi suất, ân hạn gốc 36 tháng*):</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ngân hàng TMCP Hàng Hải Việt Nam (MSB).</li>
                      <li>Ngân hàng TMCP Ngoại thương Việt Nam (VCB).</li>
                      <li>Ngân hàng TMCP Quân Đội (MB).</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="font-bold text-yellow-400 mb-3 text-lg">🎯 Đăng ký ngay để nhận ưu đãi & Thông tin chính thức từ Chủ đầu tư!</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">🎁</span>
                        <span>Bảng giá & Chính sách ưu đãi Giỏ hàng mới nhất. Dự án Capital Square</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">🧾</span>
                        <span>File PDF "So sánh chi tiết các dự án cùng khu vực".</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="shrink-0">💬</span>
                        <span>Tư vấn 1-1 miễn phí 15 phút với Chuyên viên dự án.</span>
                      </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => openModal()}
                        className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg"
                      >
                        👉 Nhận bảng giá & Tư vấn ngay
                      </button>
                      <button 
                        onClick={() => setIsLegalModalOpen(true)}
                        className="flex-1 bg-slate-700 hover:bg-slate-600 border border-slate-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg"
                      >
                        📄 Nhận trọn bộ Hồ sơ pháp lý
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 4: Location (Split Layout) */}
      <FadeInSection id="location" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Video / Image */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative group">
              <img loading="lazy" 
                src="https://capitalsquarebrg.com.vn/wp-content/uploads/2025/10/capital-square.jpg" 
                alt="Vị trí Capital Square Đà Nẵng" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Highlight Label */}
            <div className="bg-gradient-to-r from-[#FDF8F0] to-white border-l-4 border-[#D4AF37] rounded-r-xl p-5 shadow-sm flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-slate-800 font-medium leading-relaxed text-lg">
                Đón đầu làn sóng thịnh vượng từ quy hoạch <strong className="text-[#D4AF37] font-bold">Khu thương mại tự do (FTZ) 2026</strong>.
              </p>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-6 leading-tight">
              Tọa Độ Kim Cương - Lõi Trung Tâm Sông Hàn
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Capital Square tọa lạc tại quỹ đất hiếm hoi còn sót lại ven sông Hàn, giao lộ Trần Hưng Đạo - Ngô Quyền.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-5">
                <div className="bg-[#FDF8F0] p-4 rounded-xl shrink-0 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-1">30 Giây:</h4>
                  <p className="text-slate-800 text-lg">Kết nối Vincom Plaza và các tiện ích trung tâm.</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FDF8F0] p-4 rounded-xl shrink-0 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-1">3 Phút:</h4>
                  <p className="text-slate-800 text-lg">Đắm mình tại bãi biển Mỹ Khê (Top 6 hành tinh).</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-[#FDF8F0] p-4 rounded-xl shrink-0 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-1">10 Phút:</h4>
                  <p className="text-slate-800 text-lg">Sân bay Quốc tế Đà Nẵng.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Full-width Location Image */}
        <div className="w-full mt-16">
          <img loading="lazy" 
            src="https://capitalsquaredanang.vn/wp-content/uploads/lien-ket-vung-du-an-capital-square-da-nang.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Bản đồ vị trí Capital Square Đà Nẵng" 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </FadeInSection>

      {/* SECTION 4.5: Flight Ticket CTA */}
      <FadeInSection className="relative py-20 px-4 bg-[#0A192F] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img loading="lazy" 
            src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Capital Square View" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 via-[#0A192F]/80 to-[#0A192F]/90"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight uppercase">
              NHẬN MIỄN PHÍ VÉ MÁY BAY VÀ XE ĐƯA ĐÓN THĂM QUAN DỰ ÁN
            </h2>
            <p className="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
              Để các nhà đầu tư Hà Nội trải nghiệm đặc quyền đưa đón thăm quan dự án miễn phí, chúng tôi gửi tặng 1 cặp vé máy bay tới khách hàng khi đăng ký form dưới đây (có điều kiện)
            </p>
          </div>

          {/* Content Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden flex flex-col md:flex-row shadow-2xl max-w-4xl mx-auto">
            {/* Left: Image */}
            <div className="w-full md:w-5/12 relative">
              <img loading="lazy" 
                src="https://w.ladicdn.com/s750x700/661b9fa1474606001290ffc6/anh-man-hinh-2024-11-03-luc-090505-20241103020553-3m4w1.png" 
                alt="Nhận vé máy bay miễn phí" 
                className="w-full h-full object-cover min-h-[300px]"
                referrerPolicy="no-referrer"
              />
              {/* Fallback image if the above URL is not working */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center -z-10">
                <div className="text-center p-6">
                  <h3 className="text-white font-bold text-xl mb-2 uppercase">BAY HẠNG THƯƠNG GIA</h3>
                  <h4 className="text-[#D4AF37] font-bold text-2xl uppercase">NHẬN VÉ MIỄN PHÍ</h4>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Quý khách vui lòng điền thông tin dưới đây. Hệ thống sẽ gửi vào Zalo trong ít phút. Quý khách sẽ không bị làm phiền. Cam kết bảo mật thông tin khách hàng
              </p>

              <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Form Đăng Ký")}>
                <div>
                  <input 
                    type="text" name="name" 
                    placeholder="Họ và tên" 
                    className="w-full p-3.5 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" name="phone" 
                    placeholder="Số điện thoại" 
                    className="w-full p-3.5 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#F1C40F] to-[#F39C12] hover:from-[#F39C12] hover:to-[#E67E22] text-slate-900 font-bold py-4 rounded text-lg transition-all shadow-[0_0_15px_rgba(241,196,15,0.5)] mt-2"
                >
                  Bấm Gửi Cho Tôi Ngay
                </button>
                
                <p className="text-center text-gray-400 text-xs mt-4">
                  Bằng việc bấm vào nút "Bấm Gửi Cho Tôi Ngay", Quý vị đồng ý với <strong className="text-white">Chính Sách Bảo Mật Thông Tin</strong> của chúng tôi.
                </p>
              </form>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 4.5: Amenities Storytelling */}
      <FadeInSection id="amenities" className="py-24 bg-[#0B1320] text-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Tiện ích đặc quyền
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Một Ngày Trọn Vẹn Tại <span className="text-[#D4AF37]">Capital Square</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Không chỉ là nơi ở, đây là nơi mỗi khoảnh khắc đều trở thành trải nghiệm đáng nhớ. Hãy để chúng tôi kể cho bạn câu chuyện về một ngày sống tại Capital Square.
            </p>
          </div>

          {/* Desktop/Tablet Timeline */}
          <div className="hidden md:block relative mb-24 max-w-4xl mx-auto px-4 md:px-0">
            {/* Connecting Line */}
            <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-800 z-0"></div>
            <div 
              className="absolute top-8 left-0 h-0.5 bg-[#D4AF37] z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (amenities.length - 1)) * 100}%` }}
            ></div>

            <div className="relative z-10 flex justify-between">
              {amenities.map((item, index) => {
                const isActive = index === activeStep;
                const isPast = index < activeStep;
                const Icon = item.icon;
                
                return (
                  <div 
                    key={item.id} 
                    className="flex flex-col items-center cursor-pointer group w-20 md:w-24"
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 bg-[#0B1320] ${
                      isActive 
                        ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)] scale-110' 
                        : isPast
                          ? 'border-[#D4AF37]'
                          : 'border-slate-700 group-hover:border-slate-500'
                    }`}>
                      {isActive ? (
                        <div className="w-full h-full rounded-full bg-[#D4AF37] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-slate-900" />
                        </div>
                      ) : (
                        <Icon className={`w-6 h-6 ${isPast ? 'text-[#D4AF37]' : 'text-slate-500 group-hover:text-slate-400'}`} />
                      )}
                    </div>
                    <span className={`mt-6 text-sm md:text-base font-medium transition-colors text-center ${
                      isActive ? 'text-[#D4AF37]' : 'text-slate-500 group-hover:text-slate-400'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet Content Area */}
          <div className="hidden md:flex bg-slate-800/30 border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
              <img loading="lazy" 
                src={amenities[activeStep].image} 
                alt={amenities[activeStep].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <span className="text-white/90 font-semibold tracking-widest uppercase text-sm">
                  {amenities[activeStep].label}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                {amenities[activeStep].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {amenities[activeStep].desc}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] font-medium tracking-wide">Trải nghiệm tiêu chuẩn 5 sao</span>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden flex flex-col gap-12">
            {amenities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#1A2332] flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-1">{item.label}</div>
                      <h3 className="text-2xl font-bold font-serif text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-slate-700/50">
                    <img loading="lazy" src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <p className="text-white/90 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Amenities Gallery */}
          <div className="mt-32">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-center text-white mb-12 leading-tight">
              Và hơn 88+ tiện ích cao cấp ngay tại <br className="hidden md:block" />
              <span className="text-[#D4AF37]">Tổ hợp Capital Square Đà Nẵng</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative group overflow-hidden rounded-xl md:rounded-2xl aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(img.url)}
                >
                  <img loading="lazy" src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium text-sm md:text-lg tracking-wide text-center px-2">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => openModal({ title: 'Tải Trọn Bộ Tài Liệu Tiện Ích', subtitle: 'Danh mục 50+ tiện ích nội khu & ngoại khu đẳng cấp', buttonText: 'NHẬN TÀI LIỆU NGAY' })}
                className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-900 font-bold py-4 px-10 rounded-xl transition-colors duration-300 text-lg shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
              >
                NHẬN TRỌN BỘ TÀI LIỆU TIỆN ÍCH
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 4.75: Interactive Floor Plans */}
      <FadeInSection id="floor-plan" className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Tuyệt Tác Kiến Trúc
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">
              Tòa Tháp Victory Place
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thiết kế đột phá với 100% căn hộ sở hữu tầm nhìn Panorama, kính Low-E chạm trần và hệ thống loggia kép tối ưu không gian sống.
            </p>
          </div>

          {/* Product Types & Specs */}
          <div className="flex flex-col lg:flex-row gap-8 mb-24">
            {/* Left: Product Types */}
            <div className="w-full lg:w-[60%] bg-[#0B1320] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col md:flex-row gap-8">
              {/* Background decorative image/gradient */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1320] via-[#0B1320]/95 to-[#0B1320]/90"></div>

              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-10 border-b border-slate-700/50 pb-6">
                  <div className="w-1 h-12 bg-[#D4AF37]"></div>
                  <div>
                    <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-1">Thông tin</p>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase tracking-wide">LOẠI HÌNH<br/>SẢN PHẨM</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* CĂN HỘ THƯƠNG MẠI */}
                  <div>
                    <h4 className="text-[#D4AF37] text-lg font-bold mb-4 uppercase tracking-wider">CĂN HỘ THƯƠNG MẠI</h4>
                    <div className="flex items-center justify-between bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-2 border-[#D4AF37] p-3 mb-6">
                      <div className="text-xs font-medium text-[#D4AF37] leading-tight uppercase">SỞ HỮU<br/>LÂU DÀI</div>
                      <div className="text-2xl font-serif font-bold text-white">800 <span className="text-xs font-normal text-gray-400 font-sans italic">căn</span></div>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between border-b border-slate-700/50 pb-2"><span className="text-gray-300">Căn 1PN</span><span className="text-white font-medium">40m² - 55m²</span></li>
                      <li className="flex justify-between border-b border-slate-700/50 pb-2"><span className="text-gray-300">Căn 1PN +1</span><span className="text-white font-medium">58m² - 63m²</span></li>
                      <li className="flex justify-between border-b border-slate-700/50 pb-2"><span className="text-gray-300">Căn 2PN</span><span className="text-white font-medium">73m² - 84m²</span></li>
                      <li className="flex justify-between border-b border-slate-700/50 pb-2"><span className="text-gray-300">Căn 3PN</span><span className="text-white font-medium">112m² - 115m²</span></li>
                      <li className="flex justify-between border-b border-slate-700/50 pb-2"><span className="text-gray-300">Penthouse</span><span className="text-white font-medium">256m² - 415m²</span></li>
                    </ul>
                  </div>

                  {/* CĂN HỘ DỊCH VỤ & KHÁCH SẠN */}
                  <div className="space-y-8">
                    {/* DỊCH VỤ */}
                    <div>
                      <h4 className="text-[#38bdf8] text-lg font-bold mb-4 uppercase tracking-wider">CĂN HỘ DỊCH VỤ</h4>
                      <div className="flex items-center justify-between bg-gradient-to-r from-[#38bdf8]/20 to-transparent border-l-2 border-[#38bdf8] p-3 mb-4">
                        <div className="text-xs font-medium text-[#38bdf8] leading-tight uppercase">SỞ HỮU<br/>50 NĂM</div>
                        <div className="text-2xl font-serif font-bold text-white">222 <span className="text-xs font-normal text-gray-400 font-sans italic">phòng</span></div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Studio</span><span className="text-white font-medium">35m²</span></li>
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Căn 1PN</span><span className="text-white font-medium">55m²</span></li>
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Căn 2PN</span><span className="text-white font-medium">75m²</span></li>
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Căn 3PN</span><span className="text-white font-medium">95m²</span></li>
                      </ul>
                    </div>

                    {/* KHÁCH SẠN */}
                    <div>
                      <h4 className="text-[#34d399] text-lg font-bold mb-4 uppercase tracking-wider">SẢN PHẨM KHÁCH SẠN</h4>
                      <div className="flex items-center justify-between bg-gradient-to-r from-[#34d399]/20 to-transparent border-l-2 border-[#34d399] p-3 mb-4">
                        <div className="text-xs font-medium text-[#34d399] leading-tight uppercase">SỞ HỮU<br/>50 NĂM</div>
                        <div className="text-2xl font-serif font-bold text-white">222 <span className="text-xs font-normal text-gray-400 font-sans italic">phòng</span></div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Standard</span><span className="text-white font-medium">35m²</span></li>
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">Suite</span><span className="text-white font-medium">70m²</span></li>
                        <li className="flex justify-between border-b border-slate-700/50 pb-1"><span className="text-gray-300">F-Suite</span><span className="text-white font-medium">140m²</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs */}
            <div className="w-full lg:w-[40%] bg-[#FDF8F0] rounded-3xl p-8 md:p-10 shadow-xl border-l-4 border-[#D4AF37] flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-10 uppercase tracking-wide">THÔNG SỐ KỸ THUẬT</h3>
              
              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-end border-b border-gray-300 border-dashed pb-3">
                  <span className="text-gray-600 text-base md:text-lg">Tổng diện tích:</span>
                  <span className="text-[#D4AF37] font-medium text-lg md:text-xl">11.478 m²</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-300 border-dashed pb-3">
                  <span className="text-gray-600 text-base md:text-lg">Mật độ xây dựng:</span>
                  <span className="text-[#D4AF37] font-medium text-lg md:text-xl">35%</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-300 border-dashed pb-3">
                  <span className="text-gray-600 text-base md:text-lg">Số tháp căn hộ:</span>
                  <span className="text-[#D4AF37] font-medium text-lg md:text-xl">02 Tháp</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-300 border-dashed pb-3">
                  <span className="text-gray-600 text-base md:text-lg">Chiều cao:</span>
                  <span className="text-[#D4AF37] font-medium text-lg md:text-xl">25 - 29 Tầng</span>
                </div>
                <div className="flex justify-between items-end border-b border-gray-300 border-dashed pb-3">
                  <span className="text-gray-600 text-base md:text-lg">Loại hình:</span>
                  <span className="text-[#D4AF37] font-medium text-lg md:text-xl text-right max-w-[60%]">1PN-{'>'}3PN, Penthouse</span>
                </div>
              </div>

              <button 
                onClick={() => openModal({ title: 'Tải Trọn Bộ Mặt Bằng', subtitle: 'Layout chi tiết từng căn hộ & Penthouse (File PDF chất lượng cao)', buttonText: 'TẢI MẶT BẰNG NGAY' })}
                className="w-full bg-[#333333] hover:bg-black text-white font-bold py-4 rounded-xl mt-12 flex items-center justify-center gap-3 transition-colors shadow-lg text-sm md:text-base tracking-wide"
              >
                <Download className="w-5 h-5" />
                TẢI TRỌN BỘ MẶT BẰNG (PDF)
              </button>
            </div>
          </div>

          {/* Legal Superiority Block */}
          <div className="bg-slate-900 text-white text-center p-10 md:p-16 rounded-3xl shadow-2xl mb-24 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon Box */}
              <div className="relative w-20 h-20 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center mb-8">
                <Shield className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                <div className="absolute -top-2 -right-2 bg-[#D4AF37] rounded-full p-1.5 shadow-lg">
                  <FileText className="w-3 h-3 text-slate-900" strokeWidth={2.5} />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-[#D4AF37] text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6 uppercase leading-[1.2] tracking-wide max-w-4xl">
                DI SẢN KẾ THỪA - SỔ HỒNG<br className="hidden md:block" />SỞ HỮU LÂU DÀI TỪNG CĂN
              </h2>

              {/* Description */}
              <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed mb-10">
                Giữa bối cảnh thị trường khan hiếm nguồn cung minh bạch, Capital Square mang đến sự an tâm tuyệt đối với <strong className="text-[#D4AF37] font-semibold">Quyền sở hữu vĩnh viễn</strong> và <strong className="text-[#D4AF37] font-semibold">Pháp lý minh bạch tối đa</strong>. Đủ điều kiện Bán & Cho thuê hợp pháp cho người nước ngoài.
              </p>

              {/* Form */}
              <form className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-12" onSubmit={(e) => handleFormSubmit(e, "Form Đăng Ký")}>
                <input 
                  type="text" name="name" 
                  placeholder="Họ và tên" 
                  className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white/10 transition-all"
                  required
                />
                <input 
                  type="tel" name="phone" 
                  placeholder="Số điện thoại" 
                  className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:bg-white/10 transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#F1C40F] to-[#F39C12] hover:from-[#F39C12] hover:to-[#E67E22] text-slate-900 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.2)] whitespace-nowrap uppercase"
                >
                  <Download className="w-5 h-5" />
                  TẢI HỒ SƠ NGAY
                </button>
              </form>

              {/* Checklist */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <Check className="w-5 h-5" strokeWidth={3} />
                  <span className="text-sm md:text-base text-gray-200">Đã có GCNQSDĐ</span>
                </div>
                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <Check className="w-5 h-5" strokeWidth={3} />
                  <span className="text-sm md:text-base text-gray-200">Văn bản chấp thuận huy động vốn</span>
                </div>
                <div className="flex items-center gap-3 text-[#D4AF37]">
                  <Check className="w-5 h-5" strokeWidth={3} />
                  <span className="text-sm md:text-base text-gray-200">Pháp lý minh bạch 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Floor Plan Image */}
          <div className="mb-24 flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4 uppercase">
                MẶT BẰNG TOÀ ĐIỂN HÌNH CAPITAL SQUARE ĐÀ NẴNG
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
            </div>
            <div 
              className="w-full bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedImage('https://capitalsquaredanang.vn/wp-content/uploads/mat-bang-toa-c4-capital-square-da-nang.jpg')}
            >
              <img loading="lazy" 
                src="https://capitalsquaredanang.vn/wp-content/uploads/mat-bang-toa-c4-capital-square-da-nang.jpg" 
                alt="Layout mặt bằng tầng điển hình của dự án Capital Square Đà Nẵng"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Maximize className="w-5 h-5" /> Phóng to mặt bằng
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-center italic text-sm md:text-base">
              Layout mặt bằng điển hình toà C4 của dự án Capital Square Đà Nẵng
            </p>
          </div>
          <div className="mb-24 flex flex-col items-center">
            <div 
              className="w-full bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedImage('https://capitalsquaredanang.vn/wp-content/uploads/mat-bang-toa-c6-capital-square-da-nang.jpg')}
            >
              <img loading="lazy" 
                src="https://capitalsquaredanang.vn/wp-content/uploads/mat-bang-toa-c6-capital-square-da-nang.jpg" 
                alt="Layout mặt bằng tầng điển hình của dự án Capital Square Đà Nẵng"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Maximize className="w-5 h-5" /> Phóng to mặt bằng
                </div>
              </div>
            </div>
            <p className="mt-6 text-gray-500 text-center italic text-sm md:text-base">
              Layout mặt bằng điển hình toà C6 của dự án Capital Square Đà Nẵng
            </p>
          </div>

          {/* CTA Receive Floor Plan (Moved here) */}
          <div className="py-16 md:py-20 bg-[#1e3a5f] relative overflow-hidden px-4 rounded-3xl shadow-2xl mb-24">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/90 to-[#152a45]/95"></div>

            <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Nhận trọn bộ</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">MẶT BẰNG CÁC TÒA KHÁC</h3>
              <p className="text-2xl md:text-3xl text-white mb-12">Qua Zalo & Email</p>

              {/* Icons */}
              <div className="flex items-center justify-center gap-6 md:gap-10 mb-12">
                {/* PDF Icon */}
                <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center w-20 h-24 shadow-lg">
                  <FileText className="w-10 h-10 text-red-600 mb-1" />
                  <span className="text-slate-900 font-bold text-sm">PDF</span>
                </div>
                {/* Zalo Icon */}
                <div className="bg-[#0068FF] rounded-2xl p-4 flex items-center justify-center w-24 h-24 shadow-lg relative">
                  <div className="absolute -bottom-2 left-4 w-6 h-6 bg-[#0068FF] rotate-45"></div>
                  <span className="text-white font-bold text-2xl relative z-10">Zalo</span>
                </div>
                {/* Email Icon */}
                <div className="bg-white rounded-lg p-4 flex items-center justify-center w-24 h-24 shadow-lg">
                  <Mail className="w-16 h-16 text-red-500" strokeWidth={1.5} />
                </div>
              </div>

              {/* Description Box */}
              <div className="bg-[#2a4a73]/60 border border-white/10 rounded p-6 flex items-start gap-4 mb-8 text-left backdrop-blur-sm w-full shadow-inner">
                <div className="bg-white rounded p-2 shrink-0 border border-gray-200">
                  <FileText className="w-8 h-8 text-red-600" />
                  <div className="text-center text-[10px] font-bold text-slate-900 mt-1">PDF</div>
                </div>
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  Trên đây là mặt bằng 2 tòa điển hình (C4 & C6). Để nhận chi tiết layout các tòa khác và nhận tư vấn chọn căn đẹp nhất, quý khách vui lòng để lại thông tin. Tài liệu sẽ được gửi ngay qua Zalo & Email!
                </p>
              </div>

              {/* Form */}
              <form className="w-full space-y-4" onSubmit={(e) => handleFormSubmit(e, "Form Đăng Ký")}>
                <input 
                  type="text" name="name" 
                  placeholder="Họ và Tên" 
                  className="w-full p-4 rounded bg-white text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0068FF] shadow-inner"
                  required
                />
                <input 
                  type="tel" name="phone" 
                  placeholder="Số điện thoại" 
                  className="w-full p-4 rounded bg-white text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-[#0068FF] shadow-inner"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-4 rounded text-xl uppercase transition-colors shadow-lg mt-2"
                >
                  BẤM TẢI XUỐNG NGAY
                </button>
              </form>

              {/* Footer Text */}
              <div className="mt-6 space-y-3">
                <p className="text-white/90 italic text-lg">
                  (*) Nhập số chính xác để nhận được tài liệu!
                </p>
                <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                  Bằng việc bấm vào nút "Bấm Gửi Cho Tôi Ngay", Quý vị đồng ý với <strong className="text-white font-medium">Chính Sách Bảo Mật Thông Tin</strong> của chúng tôi.
                </p>
              </div>
            </div>
          </div>

          {/* Floor Plan Tabs Title */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">
              Mặt Bằng Chi Tiết Thiết Kế <span className="text-[#D4AF37]">Từng Loại Căn Hộ</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
          </div>

          {/* Floor Plan Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {floorPlans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setActiveFloorPlan(index)}
                className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  activeFloorPlan === index
                    ? 'bg-[#0B1320] text-[#D4AF37] shadow-lg scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#D4AF37] hover:text-[#0B1320]'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Floor Plan Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              {/* Image Area */}
              <div className="w-full lg:w-3/5 relative bg-white min-h-[300px] lg:min-h-[450px] p-4 md:p-8 flex items-center justify-center group cursor-pointer overflow-hidden" onClick={() => setSelectedImage(floorPlans[activeFloorPlan].images[activeFloorPlanImageIndex])}>
                <img loading="lazy" 
                  src={floorPlans[activeFloorPlan].images[activeFloorPlanImageIndex]} 
                  alt={`Mặt bằng ${floorPlans[activeFloorPlan].name}`}
                  className="w-full h-full object-contain transition-transform duration-700 scale-110 group-hover:scale-125"
                  key={`${floorPlans[activeFloorPlan].id}-${activeFloorPlanImageIndex}`} // Force re-render for animation
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 text-slate-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <Maximize className="w-5 h-5" /> Phóng to mặt bằng
                  </div>
                </div>

                {/* Carousel Controls */}
                {floorPlans[activeFloorPlan].images.length > 1 && (
                  <>
                    <button 
                      onClick={prevFloorPlanImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextFloorPlanImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {floorPlans[activeFloorPlan].images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-all ${idx === activeFloorPlanImageIndex ? 'bg-[#D4AF37] w-4' : 'bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Details Area */}
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#0B1320] text-white">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold font-serif text-[#D4AF37] mb-2">
                    {floorPlans[activeFloorPlan].name}
                  </h3>
                  <p className="text-gray-400 text-lg">Diện tích: {floorPlans[activeFloorPlan].area}</p>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Layout className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Sơ đồ bố trí</h4>
                      <p className="text-lg font-medium">{floorPlans[activeFloorPlan].layout}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                      <Eye className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-1">Hướng View</h4>
                      <p className="text-lg font-medium">{floorPlans[activeFloorPlan].view}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => openModal({ title: 'Nhận Báo Giá Chi Tiết', subtitle: 'Bảng tính dòng tiền & giá bán dự kiến cho từng loại căn hộ', buttonText: 'NHẬN BÁO GIÁ NGAY' })}
                  className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-slate-900 font-bold py-4 rounded-xl transition-colors duration-300 text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                >
                  NHẬN BÁO GIÁ CHI TIẾT
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>


      {/* SECTION: Pricing & Policies */}
      <FadeInSection id="sales-policy" className="py-24 bg-[#FDFBF7] px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Thông Tin Đầu Tư</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-slate-900 mb-6 leading-tight">
              Giá Bán & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C]">Chính Sách Dự Án</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
              Cập nhật bảng giá dự kiến và các chính sách ưu đãi mới nhất trực tiếp từ chủ đầu tư Capital Square Đà Nẵng.
            </p>
          </div>

          <div className="space-y-20">
            {/* Quote Request Form & Pricing Image */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1320]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <div className="relative group cursor-pointer" onClick={() => setSelectedImage('http://capital-square.com.vn/wp-content/uploads/2026/04/bang-gia-capital-square.png')}>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center z-10">
                    <Maximize className="w-10 h-10 text-white" />
                  </div>
                  <img 
                    src="http://capital-square.com.vn/wp-content/uploads/2026/04/bang-gia-capital-square.png" 
                    alt="Bảng giá Capital Square" 
                    className="w-full rounded-2xl shadow-lg border border-gray-100 object-cover"
                  />
                </div>

                {/* Right: Form */}
                <div className="text-left">
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4">
                    Nhận Bảng Báo Giá Chi Tiết
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Đăng ký để nhận ngay bảng báo giá chi tiết quỹ căn đẹp, ngoại giao chính thức từ chủ đầu tư với mức giá tốt nhất.
                  </p>
                  
                  <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Form Nhận Báo Giá Chi Tiết")}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Họ và tên *" 
                        className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        required
                      />
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Số điện thoại *" 
                        className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email (Không bắt buộc)" 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#D4AF37] hover:bg-[#AA8C2C] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'ĐANG GỬI...' : 'NHẬN BÁO GIÁ NGAY'}
                      {!isSubmitting && <TrendingUp className="w-5 h-5" />}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Payment Schedule Table */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-8 flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <span className="w-4 h-4 rounded-full bg-[#D4AF37]"></span>
                </div>
                Tiến Độ Thanh Toán Chuẩn
              </h3>
              
              {/* Desktop Table */}
              <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider border-b border-gray-200">Đợt</th>
                      <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider border-b border-gray-200">Tỷ Lệ</th>
                      <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider border-b border-gray-200">Thời Gian</th>
                      <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider border-b border-gray-200">Điều Kiện / Ghi Chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">Đặt cọc</td>
                      <td className="py-5 px-6 font-bold text-[#D4AF37] text-lg">100 Triệu</td>
                      <td className="py-5 px-6 text-gray-600">Ngay khi ký Thỏa thuận đặt cọc</td>
                      <td className="py-5 px-6 text-gray-600">Xác nhận quyền mua</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">Đợt 1</td>
                      <td className="py-5 px-6 font-bold text-[#D4AF37] text-lg">10%</td>
                      <td className="py-5 px-6 text-gray-600">Trong vòng 15 ngày kể từ ngày đặt cọc</td>
                      <td className="py-5 px-6 text-gray-600">Ký Hợp đồng mua bán (HĐMB)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">Đợt 2 - 7</td>
                      <td className="py-5 px-6 font-bold text-[#D4AF37] text-lg">10% / Đợt</td>
                      <td className="py-5 px-6 text-gray-600">Mỗi đợt cách nhau 2 tháng</td>
                      <td className="py-5 px-6 text-gray-600">Theo tiến độ xây dựng thực tế</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">Đợt 8</td>
                      <td className="py-5 px-6 font-bold text-[#D4AF37] text-lg">25%</td>
                      <td className="py-5 px-6 text-gray-600">Theo thông báo bàn giao nhà</td>
                      <td className="py-5 px-6 text-gray-600">Dự kiến Quý IV/2027 (+ 2% Phí bảo trì)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-semibold text-slate-900">Đợt 9</td>
                      <td className="py-5 px-6 font-bold text-[#D4AF37] text-lg">5%</td>
                      <td className="py-5 px-6 text-gray-600">Theo thông báo bàn giao GCN</td>
                      <td className="py-5 px-6 text-gray-600">Cấp Giấy chứng nhận quyền sở hữu</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden relative border-l-2 border-[#D4AF37]/30 ml-4 space-y-8 py-4">
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] shadow-sm"></div>
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Đặt cọc</h4>
                      <span className="font-bold text-[#D4AF37] text-lg">100 Triệu</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-slate-800">Thời gian:</span> Ngay khi ký Thỏa thuận đặt cọc</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600 italic border-l-2 border-gray-300">
                      Xác nhận quyền mua
                    </div>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] shadow-sm"></div>
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Đợt 1</h4>
                      <span className="font-bold text-[#D4AF37] text-lg">10%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-slate-800">Thời gian:</span> Trong vòng 15 ngày kể từ ngày đặt cọc</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600 italic border-l-2 border-gray-300">
                      Ký Hợp đồng mua bán (HĐMB)
                    </div>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] shadow-sm"></div>
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Đợt 2 - 7</h4>
                      <span className="font-bold text-[#D4AF37] text-lg">10% / Đợt</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-slate-800">Thời gian:</span> Mỗi đợt cách nhau 2 tháng</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600 italic border-l-2 border-gray-300">
                      Theo tiến độ xây dựng thực tế
                    </div>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] shadow-sm"></div>
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Đợt 8</h4>
                      <span className="font-bold text-[#D4AF37] text-lg">25%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-slate-800">Thời gian:</span> Theo thông báo bàn giao nhà</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600 italic border-l-2 border-gray-300">
                      Dự kiến Quý IV/2027 (+ 2% Phí bảo trì)
                    </div>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#FDFBF7] shadow-sm"></div>
                  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Đợt 9</h4>
                      <span className="font-bold text-[#D4AF37] text-lg">5%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2"><span className="font-medium text-slate-800">Thời gian:</span> Theo thông báo bàn giao GCN</p>
                    <div className="bg-gray-50 p-2 rounded text-sm text-gray-600 italic border-l-2 border-gray-300">
                      Cấp Giấy chứng nhận quyền sở hữu
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Image */}
            <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 group cursor-pointer" onClick={() => setSelectedImage(window.innerWidth >= 768 ? "https://capitalsquaredanang.net/wp-content/uploads/2025/07/F4-min.jpg" : "https://capitalsquaredanang.net/wp-content/uploads/2025/07/F4-min.jpg")}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                  <Maximize className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              {/* Desktop Image */}
              <img loading="lazy" 
                src="https://capitalsquaredanang.net/wp-content/uploads/2025/07/F4-min.jpg" 
                alt="Chính sách bán hàng Capital Square Đà Nẵng" 
                className="hidden md:block w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Mobile Image */}
              <img loading="lazy" 
                src="https://capitalsquaredanang.net/wp-content/uploads/2025/07/F4-min.jpg" 
                alt="Chính sách bán hàng Capital Square Đà Nẵng" 
                className="md:hidden block w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 5: Financial FOMO & Offer */}
      <FadeInSection className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="border-2 border-yellow-500 rounded-3xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full -mr-32 -mt-32 opacity-50 z-0"></div>
            
            <div className="relative z-10">
              <h2 className="text-center text-red-600 font-bold font-serif text-3xl md:text-4xl mb-10">
                CHÍNH SÁCH ƯU ĐÃI ĐỘC QUYỀN EARLY BIRD
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-800">Hỗ trợ vay 70%, lãi suất 0% trong 24 tháng.</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-800">Ân hạn nợ gốc lên đến 36 tháng.</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-800">Chiết khấu 15% khi thanh toán sớm 95%.</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-lg font-medium text-gray-800">Tiến độ thanh toán giãn lên đến 30 tháng.</span>
                </div>
              </div>
              
              <div className="bg-red-50 text-red-700 p-5 mt-8 rounded-xl text-center font-bold text-lg md:text-xl border border-red-100">
                🔥 ĐẶC QUYỀN: Chiết khấu thêm 2% cho 25 suất Early Birds.
              </div>
              
              <form className="mt-8" onSubmit={(e) => handleFormSubmit(e, "Form Giữ Chỗ")}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" name="name" placeholder="Họ tên (*)" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required />
                  <input type="tel" name="phone" placeholder="Số điện thoại (*)" className="px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" required />
                  <button type="submit" className="w-full md:w-1/3 bg-red-600 hover:bg-red-700 text-white text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/30">
                    ĐĂNG KÝ GIỮ CHỖ NGAY
                  </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4 italic">Thông tin của quý khách được bảo mật tuyệt đối.</p>
              </form>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 6: Construction Progress Gallery */}
      <FadeInSection className="py-24 bg-slate-900 text-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
              Tiến Độ Xây Dựng & Thi Công
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Cập nhật liên tục tiến độ thi công dự án Capital Square Đà Nẵng. Đảm bảo chất lượng và thời gian bàn giao đúng cam kết.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12">
            {constructionImages.map((img, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(img.url)}
              >
                <img loading="lazy" 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-3 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1">{img.title}</h3>
                  <div className="w-8 md:w-12 h-1 bg-[#D4AF37] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/50 backdrop-blur-sm p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => openModal({ title: 'Đăng Ký Tham Quan Dự Án', subtitle: 'Trải nghiệm thực tế không gian sống & tầm nhìn panorama', buttonText: 'ĐĂNG KÝ THAM QUAN' })}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b5952f] text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
            >
              <Eye className="w-5 h-5" />
              ĐĂNG KÝ THAM QUAN THỰC TẾ DỰ ÁN
            </button>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION: Da Nang Landmarks & Potential */}
      <FadeInSection className="pt-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Part 1: 12 Landmarks */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a5f] text-center mb-10 uppercase tracking-wide">
              12 CÔNG TRÌNH BIỂU TƯỢNG CỦA ĐÀ NẴNG – TĂNG GIÁ BẤT ĐỘNG SẢN
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {[
                { name: 'Bà Nà Hill', image: 'https://bizweb.dktcdn.net/100/514/927/products/z6092595379502-59475570f04c6354d6501859c471cf21.jpg?v=1766729940600?auto=format&fit=crop&q=80&w=800' },
                { name: 'Asia Park', image: 'https://duan-sungroup.com/wp-content/uploads/2022/11/Asia-park-cong-vien-chau-a-da-nang-to-hop-vui-choi-giai-tri.jpg?auto=format&fit=crop&q=80&w=800' },
                { name: 'Novotel Da Nang', image: 'https://sungroupcity.com.vn/wp-content/uploads/2022/02/novotel-nam-ngay-ben-bo-tay-song-han-tho-mong.jpg?auto=format&fit=crop&q=80&w=800' },
                { name: 'InterContinental Sun', image: 'https://duan-sungroup.com/wp-content/uploads/2022/12/intercontinental-da-nang-sun-peninsula-resort-la-du-an-nghi-duong-dang-cap-quoc-te.png?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Vàng', image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800' },
                { name: 'Biển Mỹ Khê', image: 'https://bizweb.dktcdn.net/100/539/761/files/my-khe-2.jpg?v=1758861811717?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Rồng', image: 'https://benduthuyendanang.com/wp-content/uploads/Lich-Cau-rong-phun-lua.jpg?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Sông Hàn', image: 'https://api.sovaba.travel/uploads/cau_quay_song_han_2d999d485c.jpg?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Trần Thị Lý', image: 'https://statics.vinpearl.com/cau-tran-thi-ly-da-nang-9_1634091275.JPG?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Thuận Phước', image: 'https://mia.vn/media/uploads/blog-du-lich/don-tim-truoc-ve-dep-lang-man-cua-cau-thuan-phuoc-da-nang-01-1640687388.jpeg?auto=format&fit=crop&q=80&w=800' },
                { name: 'Cầu Tình Yêu', image: 'https://vietluxtour.com/Upload/images/2024/khamphatrongnuoc/C%E1%BA%A7u%20t%C3%ACnh%20y%C3%AAu%20%C4%90%C3%A0%20N%E1%BA%B5ng/cau-tinh-yeu-da-nang%20(8)-min.jpg?auto=format&fit=crop&q=80&w=800' },
                { name: 'Tượng Cá Chép Hóa Rồng', image: 'https://image.vietgoing.com/destination/large/vietgoing_bzf2103034311.webp?auto=format&fit=crop&q=80&w=800' },
              ].map((landmark, idx) => (
                <div key={idx} className="relative group overflow-hidden aspect-[4/3]">
                  <img loading="lazy" src={landmark.image} alt={landmark.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-0 w-full text-center">
                    <span className="text-white text-sm md:text-base font-medium drop-shadow-md">{landmark.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Potential */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a5f] text-center mb-12 uppercase tracking-wide">
              "BỆ PHÓNG" CHO CÁC DÒNG BẤT ĐỘNG SẢN HẠNG SANG GIÀU TIỀM NĂNG
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-4 uppercase">THỦ PHỦ DU LỊCH SỐ 1 VIỆT NAM</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Đà Nẵng đã trở thành điểm đến quen thuộc trên bản đồ du lịch Việt Nam và vươn tầm quốc tế, số lượng khách du lịch ổn định mang tới một diện mạo hiện đại và đẳng cấp. Năm 2019 Đà Nẵng đón gần <strong>9 triệu lượt khách</strong> trong đó khách quốc tế đạt <strong>3,9 triệu lượt</strong> (lượng khách quốc tế cả nước là 18 triệu lượt). Doanh thu từ khách du lịch đạt <strong>30.487 tỷ</strong>. Đây là những con số tăng trưởng cao nhất của du lịch Đà Nẵng từ trước đến nay.
                </p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-4 uppercase">CHÍNH SÁCH PHỤC HỒI DU LỊCH MẠNH MẼ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thủ tướng đã chỉ đạo gấp rút phục hồi du lịch như trước dịch ngay trong năm 2023. Các đường bay quốc tế thường lệ dần được khôi phục. Các địa phương đã bắt đầu mở cửa đón khách du lịch trong và ngoài nước, hứa hẹn một năm 2024 khởi sắc mạnh mẽ của ngành du lịch.
                  <br/><br/>
                  Đà Nẵng chắc chắn sẽ đón lượng khách du lịch cực lớn sau thời gian dài bị ảnh hưởng.
                </p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-4 uppercase">ĐẦU TƯ PHÁT TRIỂN HẠ TẦNG NGHÌN TỶ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hơn <strong>8000 tỷ đồng</strong> là số vốn mà Đà Nẵng tập trung để phát triển hạ tầng giao thông, thúc đẩy giao thương, xúc tiến du lịch cũng như thu hút đầu tư. Chiến lược bài bản này đã và đang tạo điều kiện cho các tập đoàn kinh tế lớn trong và ngoài nước triển khai hàng loạt dự án BĐS, khu nghỉ dưỡng, vui chơi, giải trí lớn tại Đà Nẵng. Mục tiêu đến năm 2025 Đà Nẵng sẽ thu hút dòng vốn đầu tư <strong>lên đến 3 tỷ USD.</strong>
                </p>
              </div>
              <div className="border-l-4 border-[#D4AF37] pl-6">
                <h3 className="text-[#1e3a5f] font-bold text-xl mb-4 uppercase">QUỸ ĐẤT KHAN HIẾM THU HÚT GIỚI ĐẦU TƯ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hiện tại, quỹ đất dành cho phát triển các dự án Bất động sản <strong>không còn nhiều</strong>. Sự "khan hiếm" về quỹ đất xây dựng lại là lợi thế cho những dự án đang hình thành tại Đà Nẵng. Các nhà đầu tư hoàn toàn tin chắc vào tiềm năng tăng giá trong tương lai của các dự án Bất động sản hạng sang đặc biệt là các vị trí giao lộ trung tâm nội thành.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 3: CTA Form with Blue Wave Background */}
        <div className="relative w-full overflow-hidden bg-[#1e4b82] py-20 mt-10">
          
          {/* Background decorative lines */}
          // <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')]"></div>

          <div className="container mx-auto max-w-4xl relative z-10 text-center px-4">
            <p className="text-white text-sm tracking-widest uppercase mb-2">TẢI XUỐNG THÔNG TIN DỰ ÁN</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">GIÁ CHO THUÊ CĂN HỘ ĐÀ NẴNG</h2>
            <p className="text-white/80 text-sm mb-8">Quý khách vui lòng điền thông tin dưới đây. Hệ thống sẽ gửi vào Email/Zalo trong ít phút</p>

            <form className="flex flex-col md:flex-row gap-4 justify-center mb-6" onSubmit={(e) => handleFormSubmit(e, "Form Tải Bảng Giá")}>
              <input type="text" name="name" placeholder="Họ tên (*)" className="px-4 py-3 rounded bg-white text-gray-900 w-full md:w-1/4 focus:outline-none" required />
              <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded bg-white text-gray-900 w-full md:w-1/4 focus:outline-none" />
              <input type="tel" name="phone" placeholder="Số điện thoại (*)" className="px-4 py-3 rounded bg-white text-gray-900 w-full md:w-1/4 focus:outline-none" required />
              <button type="submit" className="px-8 py-3 rounded bg-[#E6A122] hover:bg-[#c98c1d] text-white font-bold w-full md:w-1/4 transition-colors">
                TẢI XUỐNG
              </button>
            </form>

            <p className="text-white/70 text-xs mb-10 italic">
              Hotline tư vấn trực tiếp: <strong className="text-white font-semibold">0793.551.551</strong><br/>
              Quý khách sẽ không bị làm phiền. Cam kết bảo mật thông tin khách hàng
            </p>

            {/* Document Icons */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { icon: FileText, label: 'Tài liệu\ndự án' },
                { icon: FileText, label: 'Tiến độ\nthanh toán' },
                { icon: FileText, label: 'Bảng giá\nChính sách' },
                { icon: FileText, label: 'Mặt bằng\nbản nét' },
                { icon: FileText, label: 'Pháp lý\ndự án' },
                { icon: FileText, label: 'Brochure\ndự án' },
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="bg-white p-1.5 rounded text-red-600">
                    <doc.icon className="w-5 h-5" />
                  </div>
                  <span className="text-white text-xs text-left whitespace-pre-line leading-tight">{doc.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 7: Comparison */}
      <FadeInSection className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              So Sánh Dự Án
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-slate-900">
              Tại Sao Chọn <span className="text-[#D4AF37]">Capital Square?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              So sánh chi tiết với các dự án cùng phân khúc tại Đà Nẵng để đưa ra quyết định đầu tư sáng suốt
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200 inline-flex">
              <button
                onClick={() => setComparisonMode('table')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  comparisonMode === 'table'
                    ? 'bg-slate-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Bảng So Sánh
              </button>
              <button
                onClick={() => setComparisonMode('cards')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  comparisonMode === 'cards'
                    ? 'bg-slate-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Thẻ Chi Tiết
              </button>
            </div>
          </div>

          {comparisonMode === 'table' ? (
            <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-100">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-6 bg-slate-900 text-white font-bold w-1/4 rounded-tl-2xl">Tiêu chí</th>
                    {comparisonData.map((project, idx) => (
                      <th 
                        key={project.id} 
                        className={`p-6 font-bold text-center ${
                          project.isHighlighted 
                            ? 'bg-[#D4AF37] text-slate-900' 
                            : 'bg-slate-900 text-white'
                        } ${idx === comparisonData.length - 1 ? 'rounded-tr-2xl' : ''}`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {project.isHighlighted && <Crown className="w-5 h-5" />}
                          {project.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {criteriaLabels.map((criterion, idx) => {
                    const Icon = criterion.icon;
                    const isLast = idx === criteriaLabels.length - 1;
                    return (
                      <tr key={criterion.key} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="p-6 font-medium text-gray-700 flex items-center gap-3">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                          {criterion.label}
                        </td>
                        {comparisonData.map((project) => (
                          <td 
                            key={`${project.id}-${criterion.key}`} 
                            className={`p-6 text-center text-gray-800 ${
                              project.isHighlighted 
                                ? (isLast ? 'bg-yellow-100/50 font-bold text-[#D4AF37]' : 'bg-yellow-50/30 font-medium') 
                                : (isLast ? 'font-bold bg-gray-50' : '')
                            }`}
                          >
                            {project.data[criterion.key as keyof typeof project.data]}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {comparisonData.map((project) => (
                <div 
                  key={project.id} 
                  className={`rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                    project.isHighlighted 
                      ? 'bg-slate-900 text-white border-2 border-[#D4AF37]' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {project.isHighlighted && (
                    <div className="bg-[#D4AF37] text-slate-900 text-center py-2 font-bold flex items-center justify-center gap-2">
                      <Crown className="w-4 h-4" /> Khuyên Dùng
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold font-serif mb-8 ${project.isHighlighted ? 'text-white' : 'text-slate-900'}`}>
                      {project.name}
                    </h3>
                    <div className="space-y-6">
                      {criteriaLabels.filter(c => c.key !== 'highlight' && c.key !== 'price').map((criterion) => {
                        const Icon = criterion.icon;
                        return (
                          <div key={criterion.key} className="flex gap-4">
                            <Icon className={`w-6 h-6 shrink-0 ${project.isHighlighted ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} />
                            <div>
                              <p className={`text-sm mb-1 ${project.isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                {criterion.label}
                              </p>
                              <p className="font-medium leading-snug">
                                {project.data[criterion.key as keyof typeof project.data]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className={`mt-8 pt-8 border-t ${project.isHighlighted ? 'border-gray-800' : 'border-gray-100'}`}>
                      <p className={`text-sm mb-2 ${project.isHighlighted ? 'text-gray-400' : 'text-gray-500'}`}>Khoảng giá</p>
                      <p className="text-2xl font-bold">{project.data.price}</p>
                    </div>

                    {project.isHighlighted && (
                      <button 
                        onClick={() => openModal({ title: 'Nhận Báo Giá & Ưu Đãi', subtitle: 'Nhận ngay bảng so sánh chi tiết và chính sách tốt nhất', buttonText: 'NHẬN BÁO GIÁ NGAY' })}
                        className="w-full mt-8 bg-[#D4AF37] hover:bg-[#b5952f] text-slate-900 font-bold py-4 rounded-xl transition-colors"
                      >
                        Nhận Báo Giá Ngay
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Conclusion Part */}
          <div className="mt-24">
            {/* Dark Blue Card */}
            <div className="bg-[#0B1426] rounded-3xl p-8 md:p-16 pb-24 md:pb-32 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
                  Lợi Thế Vượt Trội Của <span className="text-[#D4AF37]">Capital Square</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  4 yếu tố quyết định giá trị đầu tư bền vững
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-[#1E293B] rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/60">
                    <MapPin className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Vị trí độc tôn</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Giao lộ Trần Hưng Đạo - Ngô Quyền, lõi trung tâm sông Hàn
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1E293B] rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/60">
                    <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Pháp lý minh bạch</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sổ hồng lâu dài - Quyền sở hữu kế thừa vĩnh viễn
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1E293B] rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/60">
                    <Crown className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Vận hành quốc tế</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Savills quản lý tài sản và vận hành 5 sao
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#1E293B] rounded-2xl p-8 text-center transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/60">
                    <Scale className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Mật độ thấp</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Chỉ 40% mật độ xây dựng, không gian xanh tối đa
                  </p>
                </div>
              </div>
            </div>

            {/* White Conclusion Card - Overlapping */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-4xl mx-auto relative z-20 -mt-16 md:-mt-24 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 text-center mb-6">
                Kết Luận: Capital Square Là Lựa Chọn Tối Ưu
              </h2>
              <p className="text-gray-600 text-center mb-10 text-lg leading-relaxed">
                Với vị trí lõi trung tâm sông Hàn, <span className="text-[#D4AF37] font-bold">sổ hồng lâu dài</span>, mật độ xây dựng thấp 40% và <span className="font-bold text-slate-900">đơn vị vận hành quốc tế Savills</span>, Capital Square là dự án hiếm hoi đáp ứng đầy đủ tiêu chí đầu tư an toàn và sinh lời bền vững tại Đà Nẵng.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => openModal({ title: 'Đăng Ký Nhận Tư Vấn', subtitle: 'Chuyên viên sẽ liên hệ hỗ trợ bạn trong thời gian sớm nhất', buttonText: 'GỬI YÊU CẦU TƯ VẤN' })}
                  className="bg-[#D4AF37] hover:bg-[#b5952f] text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#D4AF37]/30"
                >
                  Đăng Ký Nhận Tư Vấn
                </button>
                <a 
                  href="tel:0905683225"
                  className="bg-[#0B1426] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                >
                  Gọi Hotline: 0905 683 225
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 8: Review & FAQ */}
      <FadeInSection className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Review & FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4 text-slate-900">
              Đánh Giá Chi Tiết & <span className="text-[#D4AF37]">Câu Hỏi Thường Gặp</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tìm hiểu sâu hơn về Capital Square qua góc nhìn chuyên gia và giải đáp những thắc mắc phổ biến nhất.
            </p>
          </div>

          <div className="flex flex-col gap-12 items-center">
            {/* FAQ Accordion */}
            <div className="w-full max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-[#D4AF37] bg-yellow-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    >
                      <span className={`font-bold pr-4 ${activeFaq === index ? 'text-[#D4AF37]' : 'text-slate-900'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-180 text-[#D4AF37]' : 'text-gray-400'}`} 
                      />
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* SECTION 9: Footer & Lead Capture Form */}
      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t-4 border-[#D4AF37]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            {/* Column 1: Company Info */}
            <div className="space-y-6">
              <img 
                src="http://capital-square.com.vn/wp-content/uploads/2026/04/logo__15_-removebg-preview.png" 
                alt="Capital Square Logo" 
                className="h-12 md:h-16 object-contain"
              />
              <div className="text-sm space-y-3">
                <p className="font-bold text-[#D4AF37]">Đại lý phân phối chính thức</p>
                <p>CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN NAM MIỀN TRUNG</p>
                <p>(Công ty con thuộc Đất Xanh Miền Trung)</p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#D4AF37]" />
                  <span>số 346 đường 2/9, Hòa Cường, Đà Nẵng</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                  <a href="tel:0905683225" className="hover:text-[#D4AF37] transition-colors font-bold">0905 683 225</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-[#D4AF37]" />
                  <a href="mailto:qlkd.datxanhmientrung@gmail.com" className="hover:text-[#D4AF37] transition-colors">qlkd.datxanhmientrung@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links (Sitelinks) */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Điều hướng nhanh</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Tổng quan dự án</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Vị trí đắc địa</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Hệ thống tiện ích</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Mặt bằng thiết kế</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Chính sách bán hàng</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> Tiến độ thi công</a></li>
              </ul>
            </div>

            {/* Column 3: Legal Pages */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Pháp lý & Quy định</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('privacy'); }} 
                    className="hover:text-[#D4AF37] transition-colors underline underline-offset-2 text-left"
                  >
                    Chính sách bảo mật
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); }} 
                    className="hover:text-[#D4AF37] transition-colors underline underline-offset-2 text-left"
                  >
                    Điều khoản sử dụng
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('disclaimer'); }} 
                    className="hover:text-[#D4AF37] transition-colors underline underline-offset-2 text-left"
                  >
                    Khuyến cáo / Miễn trừ trách nhiệm
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => { e.preventDefault(); setCurrentPage('data-processing'); }} 
                    className="hover:text-[#D4AF37] transition-colors underline underline-offset-2 text-left"
                  >
                    Chính sách xử lý dữ liệu cá nhân
                  </button>
                </li>
              </ul>
              <div className="mt-6 text-xs text-gray-500 leading-relaxed">
                <strong className="block text-gray-400 mb-1">TUYÊN BỐ MIỄN TRỪ TRÁCH NHIỆM VÀ BẢN QUYỀN (DISCLAIMER):</strong>
                * Các thông tin, hình ảnh 3D, phối cảnh trong website này chỉ mang tính chất minh họa và tham khảo. Thông tin chính thức sẽ được quy định cụ thể tại Hợp đồng mua bán.
              </div>
            </div>

            {/* Column 4: Trust Badges */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Đối tác chiến lược</h4>
              <div className="grid grid-cols-2 gap-4 mb-8 opacity-80">
                <div className="bg-white/5 p-3 rounded flex items-center justify-center border border-white/10">
                  <span className="font-serif font-bold text-sm tracking-widest text-white">SIH</span>
                </div>
                <div className="bg-white/5 p-3 rounded flex items-center justify-center border border-white/10">
                  <span className="font-serif font-bold text-sm tracking-widest text-white">SAVILLS</span>
                </div>
                <div className="bg-white/5 p-3 rounded flex items-center justify-center border border-white/10">
                  <span className="font-sans font-bold text-sm tracking-widest text-white">HÒA BÌNH</span>
                </div>
                <div className="bg-white/5 p-3 rounded flex items-center justify-center border border-white/10">
                  <span className="font-sans font-bold text-sm tracking-widest text-white">DELTA</span>
                </div>
              </div>
              
              {/* BCT Logo Placeholder */}
              <div className="inline-block border-2 border-blue-500 rounded p-2 bg-white">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                  <ShieldCheck className="w-5 h-5" />
                  <span>ĐÃ THÔNG BÁO BỘ CÔNG THƯƠNG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Capital Square Đà Nẵng. Thiết kế và Marketing <a href="https://www.facebook.com/typhan0112">Tý Phan</a></p>
            <p className="mt-2 md:mt-0">Được phát triển và vận hành bởi Đại lý phân phối chính thức.</p>
          </div>
        </div>
      </footer>

      {/* GLOBAL BEHAVIORS: Sticky Bottom Mobile Menu */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex justify-between p-2.5 border-t border-gray-100 pb-safe">
        <a 
          href="tel:0905683225"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl w-1/2 mr-1.5 py-2.5 flex justify-center items-center gap-2 font-bold text-sm shadow-[0_4px_10px_rgba(16,185,129,0.3)] active:scale-95 transition-all"
        >
          <div className="bg-white/20 p-1.5 rounded-full animate-pulse">
            <Phone className="w-4 h-4" />
          </div>
          Gọi Hotline
        </a>
        <button 
          onClick={() => openModal()}
          className="bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] text-white rounded-xl w-1/2 ml-1.5 py-2.5 flex justify-center items-center gap-2 font-bold text-sm shadow-[0_4px_10px_rgba(212,175,55,0.3)] active:scale-95 transition-all"
        >
          <div className="bg-white/20 p-1.5 rounded-full">
            <Mail className="w-4 h-4" />
          </div>
          Nhận Báo Giá
        </button>
      </div>

      {/* Modal Pop-up */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-slate-900 p-6 text-center">
              <h3 className="text-2xl font-bold font-serif text-yellow-500">{modalConfig.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{modalConfig.subtitle}</p>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={(e) => handleFormSubmit(e, "Form Modal")}>
              <div>
                <input 
                  type="text" name="name" 
                  placeholder="Họ và tên *" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" name="phone" 
                  placeholder="Số điện thoại *" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" name="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded-lg text-lg transition-colors duration-300 mt-4 shadow-lg"
              >
                {modalConfig.buttonText}
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Thông tin của bạn được bảo mật tuyệt đối.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Legal Modal Pop-up */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsLegalModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-slate-900 p-6 text-center">
              <h3 className="text-2xl font-bold font-serif text-yellow-500">Tải Trọn Bộ Hồ Sơ Pháp Lý</h3>
              <p className="text-gray-300 mt-2 text-sm">Giấy phép xây dựng, Quyết định 1/500, Sổ hồng quỹ đất...</p>
            </div>
            
            <form className="p-6 space-y-4" onSubmit={(e) => handleFormSubmit(e, "Form Pháp Lý")}>
              <div>
                <input 
                  type="text" name="name" 
                  placeholder="Họ và tên *" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" name="phone" 
                  placeholder="Số điện thoại (Zalo) *" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" name="email" 
                  placeholder="Email nhận tài liệu" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-lg text-lg transition-colors duration-300 mt-4 shadow-lg flex justify-center items-center gap-2"
              >
                <Download className="w-5 h-5" />
                TẢI XUỐNG NGAY
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Thông tin của bạn được bảo mật tuyệt đối.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" 
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img loading="lazy" 
            src={selectedImage} 
            alt="Tiện ích Capital Square" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10 bg-white/50 rounded-full p-1"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Left side - Image/Graphic */}
              <div className="w-full md:w-2/5 bg-slate-900 relative hidden md:block">
                <img loading="lazy" 
                  src="https://api.cvr.com.vn/uploads/2025/8/975f4f13-66b2-41b1-be79-c9e71b20b3c6.jpeg?w=3840&q=75" 
                  alt="Capital Square Đà Nẵng" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <div className="text-yellow-500 font-bold text-4xl mb-1">25</div>
                  <div className="text-white text-sm font-medium uppercase tracking-wider">Suất Nội Bộ Cuối Cùng</div>
                </div>
              </div>

              {/* Right side - Content & Form */}
              <div className="w-full md:w-3/5 p-8 md:p-10">
                <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4 animate-pulse">
                  🔥 ĐỪNG BỎ LỠ CƠ HỘI VÀNG!
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 mb-3 leading-tight">
                  Nhận Ngay <span className="text-red-600">Chiết Khấu 15% + 2%</span> (Early Bird)
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Chỉ còn vài suất nội bộ giá tốt nhất giai đoạn 1. Để lại thông tin để chuyên viên Đất Xanh Miền Trung hỗ trợ bạn giữ chỗ ngay lập tức!
                </p>
                
                <form 
                  className="space-y-4" 
                  onSubmit={(e) => handleFormSubmit(e, "Form Popup Thoát Trang")}
                >
                  <div>
                    <input 
                      type="text" name="name" 
                      placeholder="Họ và tên của bạn *" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" name="phone" 
                      placeholder="Số điện thoại (Zalo) *" 
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-1"
                  >
                    NHẬN BÁO GIÁ & ƯU ĐÃI NGAY
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Thông tin được bảo mật tuyệt đối
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Zalo Button */}
      <a 
        href="https://zalo.me/0905683225" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-[0_0_20px_rgba(0,132,255,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce group"
        aria-label="Chat Zalo"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping group-hover:animate-none"></div>
        <img loading="lazy" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1280px-Icon_of_Zalo.svg.png" 
          alt="Zalo" 
          className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10"
        />
      </a>
    </div>
  );
}
