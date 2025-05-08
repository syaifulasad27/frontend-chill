import { Card, CardContent } from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

type Movie = {
    title: string
    rating: string
    img: string
}

export function CardFilmContinue({ movie }: { movie: Movie }) {
  return (
    <div className="p-1 relative">
        <HoverCard>
            <HoverCardTrigger asChild>
                <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-0 relative cursor-pointer">
                        <img
                          src={movie.img}
                          alt={movie.title}
                          className="rounded-lg shadow-lg object-cover w-full h-[230px] sm:h-[200px]"
                        />
                        <div className="absolute bottom-0 bg-black/20 left-0 right-0 p-2 text-white flex justify-between items-center rounded-b-lg">
                          <span className="truncate">{movie.title}</span>
                          <span>⭐ {movie.rating}/5</span>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent side="top" // Muncul di atas trigger
                    sideOffset={-400} // Jarak dari card
                    align="center" // Posisi tengah
                    className="z-50 w-[408px] h-[490px] hidden sm:block rounded-[20px] bg-neutral-900 border-neutral-900 text-white shadow-xl p-0"
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
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 bg-white text-black rounded-full flex items-center justify-center hover:bg-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </Button>
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 border border-gray-400 text-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </Button>
                        </div>
                        <Button className="w-9 h-9 sm:w-10 sm:h-10 p-0 border border-gray-400 text-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </Button>
                      </div>

                      <h1 className="text-xl font-semibold">"Episode 1"</h1>

                      {/* Durasi Progress Bar */}
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[60%] h-full bg-white"></div> {/* Adjust width as progress */}
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>2j 33m</span>
                        </div>
                      </div>

                      {/* Genre */}
                      <p className="text-lg text-gray-300">Drama · Komedi · Romantis</p>
                    </div>
            </HoverCardContent>
        </HoverCard>
    </div>
  )
}