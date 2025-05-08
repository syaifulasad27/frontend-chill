import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CardFilmContinue } from "@/components/card-film-continue"

const movies = [
  { title: "Don't Look Up", rating: "4.5", img: "/src/assets/img/img1.png" },
  { title: "The Batman", rating: "4.2", img: "/src/assets/img/img2.png" },
  { title: "Blue Lock", rating: "4.6", img: "/src/assets/img/img3.png" },
  { title: "A Man Called Otto", rating: "4.4", img: "/src/assets/img/img4.png" },
]

export function FilmContinue() {
  return (
    <div className="w-full px-5 sm:px-12 py-5 bg-[#181A1C]">
      <h2 className="text-white text-2xl font-semibold mb-2 sm:mb-4">
        Melanjutkan Tonton Film
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-[370px] sm:basis-[300px] md:basis-[350px]"
            >
              <CardFilmContinue movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
        <CarouselNext className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
      </Carousel>
    </div>
  )
}
