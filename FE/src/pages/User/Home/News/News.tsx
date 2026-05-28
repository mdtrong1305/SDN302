interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "Top 5 bộ phim không thể bỏ lỡ trong tháng này",
        description: "Điểm qua những bom tấn điện ảnh đang khuấy đảo phòng vé mà bạn không thể bỏ qua.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
        category: "Tin tức",
        date: "15/10/2024",
    },
    {
        id: 2,
        title: "Phỏng vấn độc quyền với đạo diễn của \"Hành Trình Vô Tận\"",
        description: "Khám phá quá trình sáng tạo sau một kiệt tác viễn tưởng đang làm mưa làm gió hiện nay.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
        category: "Phỏng vấn",
        date: "10/10/2024",
    },
    {
        id: 3,
        title: "Bật mí những bí mật hậu trường chưa từng công bố",
        description: "Cùng xem những điều thú vị xảy ra phía sau ống kính của các dự án điện ảnh lớn.",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
        category: "Hậu trường",
        date: "08/10/2024",
    },
];

export default function News() {

    return (
        <section className="mx-auto max-w-[85%] px-4 py-16 sm:py-20 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Tin Tức Điện Ảnh
                </h2>
                <a 
                    href="/news" 
                    className="text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors flex items-center gap-1 group"
                >
                    <span>Xem tất cả</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {articles.map((article) => (
                    <article 
                        key={article.id}
                        className="group flex flex-col overflow-hidden rounded-2xl bg-[#F6F3F9] p-3 shadow-md border border-[#EAE6F0] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    >
                        {/* Image Wrapper */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 mb-4 shadow-sm">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Text Details */}
                        <div className="flex flex-col px-2 pb-2">
                            {/* Meta: Category & Date */}
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                {article.category} - {article.date}
                            </span>

                            {/* Headline */}
                            <h3 className="text-base font-bold text-gray-900 group-hover:text-[#6D28D9] transition-colors duration-200 line-clamp-2 mb-2 leading-snug">
                                {article.title}
                            </h3>

                            {/* Brief Description */}
                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                {article.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
