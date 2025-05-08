// Bisa nanti ambil dari API atau constant
const genres = [
  "Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi",
  "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis",
  "Sains & Alam", "Thriller",
];

const bantuan = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

export default function Footer() {
  return (
    <footer className="bg-[#181A1C] text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-4">
              <img
                src="/src/assets/img/logo-chill.png"
                alt="Chill logo"
                className="h-20"
              />
            </div>
            <p className="text-gray-400 text-sm">
              ©2025 Chill All Rights Reserved.
            </p>
          </div>

          {/* Genre List */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Genre</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-400 text-sm">
              {genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bantuan</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {bantuan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
