import { Smartphone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F6F3F9] border-t border-[#EAE6F0] text-gray-600 font-sans">
            <div className="mx-auto max-w-[85%] px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-start">
                        <a href="/" className="flex items-center gap-0 group" aria-label="Mievoh Homepage">
                            <img 
                                src="/images/mievoh_logo.png" 
                                alt="Mievoh Logo" 
                                className="h-10 w-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-200" 
                            />
                            <img 
                                src="/images/mievoh_text.png" 
                                alt="mievoh" 
                                className="h-32 w-auto object-contain my-[-3.0rem] ml-[-1.0rem] transition-transform duration-200 group-hover:scale-[1.02]" 
                            />
                        </a>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs">
                            Trải nghiệm điện ảnh đỉnh cao. Đặt vé dễ dàng, thưởng thức trọn vẹn.
                        </p>
                        <p className="mt-6 text-xs text-gray-400">
                            © 2024 mievoh. All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Khám Phá */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-4">Khám Phá</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Hỗ Trợ */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-4">Hỗ Trợ</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    Liên hệ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 hover:text-[#7B68EE] hover:underline transition-colors">
                                    Câu hỏi thường gặp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Tải Ứng Dụng */}
                    <div>
                        <h3 className="text-base font-bold text-gray-900 mb-4">Tải Ứng Dụng</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#7B68EE] transition-colors">
                                    <Smartphone className="h-5 w-5" />
                                    <span>App Store</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#7B68EE] transition-colors">
                                    <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                                        <rect x="3" y="5" width="18" height="14" rx="3" />
                                        <circle cx="8" cy="12" r="2" />
                                        <circle cx="16" cy="12" r="2" />
                                        <line x1="11" y1="10" x2="13" y2="10" />
                                        <line x1="11" y1="14" x2="13" y2="14" />
                                    </svg>
                                    <span>Google Play</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}


