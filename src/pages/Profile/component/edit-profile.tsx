import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardFooter,  
} from "@/components/ui/card"

const ProfileEdit = () => {
  return (
    <div className="px-4 lg:px-14 py-10 gap-8">
      <h2 className="text-white text-2xl font-semibold mb-5">Profile Saya</h2>
      {/* Flex dibalik di mobile (form bawah, card atas), normal di desktop (form kiri, card kanan) */}
      <div className="flex flex-col-reverse lg:flex-row gap-20 mb-5">
        {/* Form edit profile (di kiri desktop) */}
        <form className="w-full sm:w-[500px] lg:w-[642px] space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="/assets/img/avatar.png"
              alt="Avatar"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div className="flex flex-col gap-1">
              <Button
                className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-full"
                aria-label="Ubah Avatar"
              >
                Ubah Foto
              </Button>
              <span className="text-gray-500 font-semibold text-sm">Maksimal 2Mb</span>
            </div>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="username" className="text-gray-400 font-medium">Nama Pengguna</Label>
            <Input
              id="username"
              type="username"
              placeholder="Masukan nama pengguna"
              className="w-full border border-gray-300 bg-[#22282A] rounded-lg p-2"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email" className="text-gray-400 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Masukan Email"
              className="w-full border border-gray-300 bg-[#22282A] rounded-lg p-2"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password" className="text-gray-400 font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Masukan password baru"
              className="w-full border border-gray-300 bg-[#22282A] rounded-lg p-2"
              required
            />
          </div>
        </form>

        <div className="h-fit">
          <Card className="bg-[#3D4142] w-full sm:w-[350px] lg:w-[500px] border-0">
            <CardContent className="grid gap-2 sm:gap-4">
              <div className=" flex items-center space-x-4 text-white">
                <img src="/assets/img/warning.webp" className="h-10 w-10 sm:h-20 sm:w-20" alt="warning" />
                <div className="flex-1 space-y-2">
                  <p className="text-sm sm:text-lg font-medium leading-none">
                    Saat ini anda belum berlangganan
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#2F3334] px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                Mulai Berlangganan
              </Button>
            </CardFooter>
          </Card>
        </div>

      </div>
      <Button className="bg-[#0F1E93] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full" aria-label="Simpan">Simpan</Button>
    </div>
  );
};
  
export default ProfileEdit;
  