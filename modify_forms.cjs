const fs = require('fs');

let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add handleFormSubmit function
const submitFunc = `
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formName: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    // Thay bằng Access Key của bạn từ web3forms.com
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
    formData.append("subject", "Khách hàng mới từ form: " + formName);
    formData.append("from_name", "Capital Square Landing Page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert('Đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất.');
        (e.target as HTMLFormElement).reset();
        setIsModalOpen(false);
        setShowExitIntent(false);
      } else {
        alert('Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error(error);
      alert('Có lỗi xảy ra, vui lòng kiểm tra kết nối mạng.');
    } finally {
      setIsSubmitting(false);
    }
  };
`;

if (!code.includes('handleFormSubmit')) {
  code = code.replace('const [hasShownExitIntent, setHasShownExitIntent] = useState(false);', 'const [hasShownExitIntent, setHasShownExitIntent] = useState(false);\n' + submitFunc);
}

// 2. Replace all onSubmit handlers
code = code.replace(/onSubmit=\{\(e\) => \{ e\.preventDefault\(\); alert\('Đăng ký thành công![^']+'\); \}\}/g, 'onSubmit={(e) => handleFormSubmit(e, "Form Đăng Ký")}');
code = code.replace(/onSubmit=\{\(e\) => \{ e\.preventDefault\(\); setIsModalOpen\(false\); alert\('Đăng ký thành công![^']+'\); \}\}/g, 'onSubmit={(e) => handleFormSubmit(e, "Form Modal")}');
code = code.replace(/onSubmit=\{\(e\) => \{ e\.preventDefault\(\); setIsLegalModalOpen\(false\); alert\('Đăng ký thành công![^']+'\); \}\}/g, 'onSubmit={(e) => handleFormSubmit(e, "Form Pháp Lý")}');
code = code.replace(/onSubmit=\{\(e\) => \{\s*e\.preventDefault\(\);\s*setShowExitIntent\(false\);\s*alert\('Đăng ký thành công![^']+'\);\s*\}\}/g, 'onSubmit={(e) => handleFormSubmit(e, "Form Popup Thoát Trang")}');

// 3. Add name attributes to inputs
code = code.replace(/<input([^>]*?)type="text"([^>]*?)>/g, (match, p1, p2) => {
  if (match.includes('name=')) return match;
  return '<input' + p1 + 'type="text" name="name"' + p2 + '>';
});

code = code.replace(/<input([^>]*?)type="tel"([^>]*?)>/g, (match, p1, p2) => {
  if (match.includes('name=')) return match;
  return '<input' + p1 + 'type="tel" name="phone"' + p2 + '>';
});

code = code.replace(/<input([^>]*?)type="email"([^>]*?)>/g, (match, p1, p2) => {
  if (match.includes('name=')) return match;
  return '<input' + p1 + 'type="email" name="email"' + p2 + '>';
});

fs.writeFileSync('src/App.tsx', code);
console.log('Done modifying forms');
