import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import Button from "../../../../components/Button/Button.tsx";
import CountUp from "react-countup";

interface Cinema {
    id: number;
    name: string;
    logo: string;
    rating: number;
    votes: string;
    address: string;
}

const cinemas: Cinema[] = [
    {
        id: 1,
        name: "CGV Vincom Center Bà Triệu",
        logo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=120&q=80",
        rating: 4.8,
        votes: "1.2k+",
        address: "Tầng 6, Vincom Center, 191 Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội",
    },
    {
        id: 2,
        name: "BHD Star Thảo Điền",
        logo: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=120&q=80",
        rating: 4.5,
        votes: "850+",
        address: "Tầng 5, Vincom Mega Mall Thảo Điền, 159 Xa lộ Hà Nội, Quận 2, TP.HCM",
    },
    {
        id: 3,
        name: "Cinestar Quốc Thanh",
        logo: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=120&q=80",
        rating: 4.3,
        votes: "620+",
        address: "271 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM",
    },
    {
        id: 4,
        name: "Lotte Cinema Nam Sài Gòn",
        logo: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=120&q=80",
        rating: 4.7,
        votes: "950+",
        address: "Tầng 3, Lotte Mart Nam Sài Gòn, 469 Nguyễn Hữu Thọ, Quận 7, TP.HCM",
    },
];

const parseVotes = (votesStr: string) => {
    const match = votesStr.match(/^([\d.]+)(k)?(\+)?$/);
    if (match) {
        const val = parseFloat(match[1]);
        const hasK = !!match[2];
        const hasPlus = !!match[3];
        const decimals = match[1].includes(".") ? 1 : 0;
        return {
            value: val,
            decimals,
            suffix: `${hasK ? "k" : ""}${hasPlus ? "+" : ""}`
        };
    }
    return { value: 0, decimals: 0, suffix: "" };
};

export default function Cinemas() {
    const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null);
    const CountUpComponent = (CountUp as any).default || CountUp;

    return (
        <section className="mx-auto max-w-[85%] px-4 py-16 sm:py-20 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Rạp Chiếu Nổi Bật
                </h2>
                <a 
                    href="/cinemas" 
                    className="text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors flex items-center gap-1 group"
                >
                    <span>Xem tất cả</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </a>
            </div>

            {/* Cinemas Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {cinemas.map((cinema) => {
                    const isSelected = selectedCinemaId === cinema.id;
                    return (
                        <div 
                            key={cinema.id} 
                            onClick={() => setSelectedCinemaId(cinema.id)}
                            className={`group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#F6F3F9] p-5 shadow-md hover:shadow-lg transition-all duration-300 border cursor-pointer hover:scale-[1.01] ${
                                isSelected 
                                    ? "border-[#6D28D9] ring-2 ring-[#F3E8FF]" 
                                    : "border-[#EAE6F0]"
                              }`}
                        >
                            {/* Rating and Votes */}
                            <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#6D28D9] bg-[#F3E8FF]/60 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                                <Star className="h-3 w-3 fill-[#6D28D9] text-[#6D28D9]" />
                                <span>
                                    <CountUpComponent end={cinema.rating} decimals={1} duration={1.5} enableScrollSpy scrollSpyOnce />
                                    {" ("}
                                    {(() => {
                                        const { value, decimals, suffix } = parseVotes(cinema.votes);
                                        return <CountUpComponent end={value} decimals={decimals} suffix={suffix} duration={1.5} enableScrollSpy scrollSpyOnce />;
                                    })()}
                                    {")"}
                                </span>
                            </div>

                            {/* Logo */}
                            <div className="relative h-14 w-14 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center bg-gray-50 mb-3 mx-auto shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <img
                                    src={cinema.logo}
                                    alt={cinema.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="text-center flex-grow flex flex-col justify-between">
                                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#6D28D9] transition-colors duration-200 line-clamp-1 mb-2">
                                    {cinema.name}
                                </h3>

                                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex items-start gap-1 justify-center max-w-[200px] mx-auto min-h-[36px]">
                                    <MapPin className="h-3 w-3 flex-none mt-0.5 text-gray-400" />
                                    <span>{cinema.address}</span>
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-auto">
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="w-full text-center border-gray-200 hover:border-[#6D28D9]"
                                >
                                    Xem lịch chiếu
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
