import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { CardFilm } from "@/components/card-film"

const topRated = [
  { title: "A Man Called Otto", img: "/assets/img/img5.jpg", new: true, top10: true},
  { title: "Ted Lasso", img: "/assets/img/img6.jpg", new: true, top10: false},
  { title: "Movie Title 3", img: "/assets/img/img7.jpg", new: true, top10: false},
  { title: "Movie Title 4", img: "/assets/img/img8.jpg", new: true, top10: false},
  { title: "Movie Title 5", img: "/assets/img/img9.jpg", new: true, top10: false},
  { title: "Movie Title 6", img: "/assets/img/img1.jpg", premium: true, top10: false},
]

export function TopRating() {
  return (
    <div className="w-full px-5 sm:px-12 py-5 bg-[#181A1C]">
      <h2 className="text-white text-2xl font-semibold mb-5">Top Rating Film dan Series Hari ini</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {topRated.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-[160px] sm:basis-[200px] lg:basis-[250px]"
            >
              <CardFilm movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
        <CarouselNext className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
      </Carousel>
    </div>
  )
}
