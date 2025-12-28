import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold tracking-wider">
              글로잉
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              더 나은 나를 위한 홈케어<br />
              언제 어디서나 전문적인 피부 관리를 경험하세요.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-gold transition-colors">전체 상품</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">G-Peel</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">T-Peel</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Device</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Daily Care</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/event" className="hover:text-gold transition-colors">이벤트</Link></li>
              <li><a href="#" className="hover:text-gold transition-colors">고객센터</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">자주 묻는 질문</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-xs text-muted-foreground/60 mb-1">고객센터</span>
                1544-0000
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 mb-1">운영시간</span>
                평일 10:00 - 18:00
              </li>
              <li>
                <span className="block text-xs text-muted-foreground/60 mb-1">이메일</span>
                help@glowing.kr
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 글로잉. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-gold transition-colors">이용약관</a>
              <a href="#" className="hover:text-gold transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-gold transition-colors">사업자정보확인</a>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground/60 leading-relaxed">
            <p>상호명: (주)글로잉 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123, 글로잉빌딩 5층</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
