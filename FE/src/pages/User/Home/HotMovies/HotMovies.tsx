import { Star } from "lucide-react";
import Button from "../../../../components/Button/Button.tsx";
import Slider from "react-slick";
import { slickHotMoviesSettings } from "../../../../config/slick/slickConfig.ts";
import CountUp from "react-countup";

interface Movie {
    id: number;
    title: string;
    image: string;
    rating: number;
    genres: string[];
}

const movies: Movie[] = [
    {
        id: 1,
        title: "Kẻ Đánh Cắp Giấc Mơ",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        genres: ["Hành động", "Viễn tưởng"],
    },
    {
        id: 2,
        title: "Giai Điệu Tình Yêu",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        genres: ["Tình cảm", "Âm nhạc"],
    },
    {
        id: 3,
        title: "Bí Ẩn Căn Phòng",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
        rating: 4.3,
        genres: ["Hình sự", "Giật gân"],
    },
    {
        id: 4,
        title: "Nụ Cười Ngày Mới",
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
        genres: ["Hài hước", "Gia đình"],
    },
    {
        id: 5,
        title: "Chiến Binh Vũ Trụ",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        genres: ["Hành động", "Sci-Fi"],
    },
    {
        id: 6,
        title: "Thung Lũng Gió",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        rating: 4.7,
        genres: ["Phiêu lưu", "Hoạt hình"],
    },
    {
        id: 7,
        title: "Thám Tử Tư",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
        rating: 4.4,
        genres: ["Bí ẩn", "Hình sự"],
    },
    {
        id: 8,
        title: "Quái Vật Đáy Biển",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        rating: 4.1,
        genres: ["Kinh dị", "Giật gân"],
    },
    {
        id: 9,
        title: "Huyền Thoại Sân Cỏ",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
        rating: 4.6,
        genres: ["Thể thao", "Kịch tính"],
    },
    {
        id: 10,
        title: "Hành Tinh Xanh",
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
        rating: 4.8,
        genres: ["Tài liệu", "Thiên nhiên"],
    },
];

export default function HotMovies() {

    // Resolve default export for react-slick in Vite environment
    const SlickSlider = (Slider as any).default || Slider;
    const CountUpComponent = (CountUp as any).default || CountUp;

    return (
        <section className="mx-auto max-w-[85%] px-4 py-16 sm:py-20 font-sans">
            {/* Header section with heading */}
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Phim Đang Hot
                </h2>
            </div>

            {/* Movies Slider */}
            <div className="relative slider-container">
                <SlickSlider {...slickHotMoviesSettings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="px-2 pb-4">
                            <div 
                                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#F6F3F9] p-3 shadow-md hover:shadow-xl transition-all duration-300 border border-[#EAE6F0] hover:scale-[1.02] h-full cursor-pointer"
                            >
                                {/* Movie Image Container */}
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                                    <img
                                        src={movie.image}
                                        alt={movie.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    
                                    {/* Rating Badge */}
                                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-md border border-white/10">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span>
                                            <CountUpComponent end={movie.rating} decimals={1} duration={1.5} enableScrollSpy scrollSpyOnce />
                                        </span>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-[#6D28D9] transition-colors duration-200 mb-2">
                                        {movie.title}
                                    </h3>

                                    {/* Genres */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {movie.genres.map((genre, idx) => (
                                            <span 
                                                key={idx}
                                                className="inline-block rounded-md bg-[#F3E8FF] px-2 py-0.5 text-xs font-semibold text-[#6D28D9]"
                                            >
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Mua Vé Nhanh Button */}
                                <div className="mt-auto">
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="w-full text-center border-gray-200 hover:border-[#6D28D9]"
                                    >
                                        Mua Vé Nhanh
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </SlickSlider>
            </div>
        </section>
    );
}
