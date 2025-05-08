import { Card, CardContent } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

type Movie = {
    title: string
    rating?: string
    img: string
    new?: boolean
    top10?: boolean
    premium?: boolean
}

export function CardFilm({ movie }: { movie: Movie }) {
  return (
    <div className="p-0 sm:px-2 relative">
        <HoverCard>
            <HoverCardTrigger asChild>
                <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-0 relative cursor-pointer">
                      <img
                        src={movie.img}
                        alt={movie.title}
                        className="rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer object-cover w-full h-[250px] sm:h-[300px] lg:h-[350px]"
                      />
                      {movie.new && (
                          <div className="absolute top-2 sm:top-5 left-2 sm:left-5 bg-blue-800 text-white text-[8px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                              Episode Baru
                          </div>
                      )}
                      {movie.top10 && (
                      <div className="absolute top-0 sm:top-0 right-2 sm:right-5 bg-red-700 text-white w-[28px] h-[36px] p-[1.91px] rounded-tr-[1.91px] rounded-bl-[1.91px] shadow-md flex flex-col items-center justify-center gap-[4.78px] text-[6px] sm:text-[8px] font-bold leading-none">
                          <span className="text-[10px]">Top</span>
                          <span className="text-[10px] sm:text-xs">10</span>
                      </div>
                      )}
                      {movie.premium && (
                      <div className="absolute top-2 sm:top-5 left-2 sm:left-5 bg-[#B7A207] text-white text-[8px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                        Premium
                      </div>
                      )}
                    </CardContent>
                </Card>
            </HoverCardTrigger>
            <HoverCardContent side="top"
                    sideOffset={-400} // Jarak dari card
                    align="center" // Posisi tengah
                    className="z-50 w-[408px] h-[460px] hidden sm:block rounded-[15px] bg-neutral-900 border-neutral-900 text-white shadow-xl p-0"
                  >
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className="w-full h-[254px] object-cover rounded-t-[20px]"
                    />
                    {/* Content Section */}
                    <div className="text-white px-6 py-4 space-y-4">
                      {/* Buttons */}
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 bg-white text-black rounded-full flex items-center justify-center hover:bg-white cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </Button>
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 border border-gray-400 text-white rounded-full flex items-center justify-center cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </Button>
                        </div>
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 border border-gray-400 text-white rounded-full flex items-center justify-center cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </Button>
                      </div>

                      {/* Info */}
                      <div className="flex items-center text-xl gap-4 mt-2">
                        <span className="border border-[#CDF1FF4D] px-1.5 py-0.5 bg-[#CDF1FF4D] rounded-full text-lg text-[#C1C2C4]">13+</span>
                        <span>16 Episode</span>
                      </div>

                      {/* Genre */}
                      <p className="text-lg text-gray-300">Drama · Komedi · Romantis</p>
                    </div>
            </HoverCardContent>
        </HoverCard>
    </div>
  )
}