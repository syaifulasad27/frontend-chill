import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

type Movie = {
  title: string
  top10: boolean
  img: string  
  new: boolean  
}

export const TrendingCard = ({ movie }: { movie: Movie }) => {
  return (
    <motion.div
      className="relative w-36 sm:w-56 cursor-pointer"
      whileHover={{ scale: 1.07 }}
    >
      <Card className="relative overflow-hidden p-0 w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-xl">
        {/* Background image */}
        <img
          src={movie.img}
          alt={movie.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {movie.new && (
          <div className="absolute top-1 sm:top-3 left-1 sm:left-3 bg-blue-800 text-white text-[8px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-md">
          Episode Baru
        </div>
        )}        
        {movie.top10 && (
        <div className="absolute top-0 sm:top-0 right-2 sm:right-5 bg-red-700 text-white w-[28px] h-[36px] p-[1.91px] rounded-tr-[1.91px] rounded-bl-[1.91px] shadow-md flex flex-col items-center justify-center gap-[4.78px] text-[6px] sm:text-[8px] font-bold leading-none">
          <span className="text-[10px]">Top</span>
          <span className="text-[10px] sm:text-xs">10</span>
        </div>
        )}

        {/* Hover overlay content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 text-white p-0 flex flex-col justify-end"
        >
          {/* Content Section */}
          <div className="text-white p-4 space-y-1 h-[calc(250px-114px)]">
            {/* Buttons */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <Button className="w-6 h-6 sm:w-8 sm:h-8 p-0 text-xs sm:text-sm bg-white text-black rounded-full inline-flex items-center justify-center hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
                </Button>
                <Button className="w-6 h-6 sm:w-8 sm:h-8 p-0 text-xs sm:text-sm text-white border border-gray-400 rounded-full inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                </Button>
              </div>
              <Button className="w-6 h-6 sm:w-8 sm:h-8 p-0 text-xs sm:text-sm text-white border border-gray-400 rounded-full inline-flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg></Button>
            </div>

            {/* Info */}
            <div className="flex items-center text-xs gap-4 mt-2">
              <span className="border border-[#CDF1FF4D] px-1.5 py-0.5 bg-[#CDF1FF4D] rounded-full text-xs text-[#C1C2C4]">13+</span>
              <span>2j 33m</span>
            </div>

            {/* Genre */}
            <p className="text-sm text-gray-300">Drama · Komedi · Romantis</p>
          </div>
        </motion.div>
      </Card>
    </motion.div>

  )
}