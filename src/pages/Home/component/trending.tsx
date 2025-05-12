import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { TrendingCard } from "./trending-card"

const trendingMovies = [
    { title: "Deadpool", top10: true, new:false, img: "/assets/img/img10.jpg" },
    { title: "Movie Title 2", top10: true, new:false, img: "/assets/img/img11.jpg" },
    { title: "Movie Title 3", top10: true, new:false, img: "/assets/img/img12.jpg" },
    { title: "Movie Title 4", top10: true, new:false, img: "/assets/img/img13.jpg" },
    { title: "Movie Title 5", top10: true, new:false, img: "/assets/img/img14.jpg" },
  ];

export const Trending = () => {
  return (
    <div className="w-full px-5 sm:px-12 py-8 sm:py-10 bg-[#181A1C]">
      <h2 className="text-white text-2xl font-semibold mb-5">🔥 Trending</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {trendingMovies.map((movie, index) => (
            <CarouselItem
              key={index}
              className="basis-[160px] sm:basis-[200px] lg:basis-[250px]"
            >
             <TrendingCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
        <CarouselNext className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-6 bg-[#2F3334] w-8 h-8 items-center justify-center rounded-full" />
      </Carousel>
    </div>
  )
}
