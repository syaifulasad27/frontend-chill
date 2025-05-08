import bgImg from "@/assets/img/bg-hero.png"
import { Button } from "@/components/ui/button"

const HeroContent = () => {
    return (
        <section className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[600px]" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00000000] via-[#101213DB] to-[#181A1C]" style={{
            background: 'linear-gradient(0deg, #181A1C 0%, #101213DB 40%, #00000000 80%)',}} />
            <div className="relative p-6 sm:p-12 pt-24 xl:pt-72 mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold">Duty After School</h1>
                <p className="mt-4 text-gray-300 text-xs sm:text-[18px]">Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,<br />Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa<br /> sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                <div className="flex flex-row mt-6 items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#0F1E93] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full" aria-label="Mulai">Mulai</Button>
                        <Button className="bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full" aria-label="Selengkapnya">Selengkapnya</Button>
                        <Button className="w-8 h-8 sm:w-10 sm:h-10 p-0 text-xs sm:text-sm text-gray-400 border border-gray-400 rounded-full inline-flex items-center justify-center">18+</Button>
                    </div>
                    <Button className="w-8 h-8 sm:w-10 sm:h-10 p-0 text-xs sm:text-sm text-gray-400 border border-gray-400 rounded-full inline-flex items-center justify-center" aria-label="volume">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>
                    </Button>
                </div>            
            </div>
        </section>
    );
  };
  
  export default HeroContent;
  