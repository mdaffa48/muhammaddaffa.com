import React from "react";

interface Billboard {
  id: number;
  title: string;
  images: string[];
  location: string;
  description: string;
}

const billboards: Billboard[] = [
  {
    id: 1,
    title: "Billboard Asia Afrika",
    images: [
      "https://placehold.co/600x400?text=Billboard+1A",
      "https://placehold.co/600x400?text=Billboard+1B",
    ],
    location: "https://placehold.co/600x400?text=Map+1",
    description:
      "Billboard strategis di kawasan Asia Afrika dengan lalu lintas padat.",
  },
  {
    id: 2,
    title: "Billboard Dago",
    images: [
      "https://placehold.co/600x400?text=Billboard+2A",
      "https://placehold.co/600x400?text=Billboard+2B",
    ],
    location: "https://placehold.co/600x400?text=Map+2",
    description:
      "Terletak di jantung wisata Dago, cocok untuk promosi berbagai produk.",
  },
  {
    id: 3,
    title: "Billboard Pasteur",
    images: [
      "https://placehold.co/600x400?text=Billboard+3A",
      "https://placehold.co/600x400?text=Billboard+3B",
    ],
    location: "https://placehold.co/600x400?text=Map+3",
    description:
      "Billboard dekat gerbang tol Pasteur, dilalui kendaraan luar kota.",
  },
  {
    id: 4,
    title: "Billboard Setiabudi",
    images: [
      "https://placehold.co/600x400?text=Billboard+4A",
      "https://placehold.co/600x400?text=Billboard+4B",
    ],
    location: "https://placehold.co/600x400?text=Map+4",
    description:
      "Area ramai mahasiswa dan wisatawan dengan visibilitas tinggi.",
  },
];

const BillboardBandung: React.FC = () => {
  React.useEffect(() => {
    document.title =
      "Billboard Bandung - Informasi Lokasi dan Penyewaan Reklame";

    const description =
      "Daftar lokasi billboard strategis di Kota Bandung lengkap dengan foto dan peta. Hubungi kami untuk penyewaan media promosi.";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = description;
      document.head.appendChild(metaTag);
    }
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800 font-serif min-h-screen">
      <header className="bg-blue-900 text-white py-6 mb-8">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-center flex-1">
            Info Billboard Bandung
          </h1>
        </div>
      </header>
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <p className="text-lg mb-8">
          Temukan lokasi billboard yang tersedia di Bandung dan pilih tempat
          terbaik untuk mempromosikan bisnis Anda.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {billboards.map((b) => (
            <article
              key={b.id}
              className="bg-white rounded-lg shadow-lg p-4 space-y-4"
            >
              <div className="grid gap-2 sm:grid-cols-2">
                {b.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${b.title} ${i + 1}`}
                    className="w-full h-40 object-cover rounded"
                  />
                ))}
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{b.title}</h2>
                <p className="leading-relaxed">{b.description}</p>
                <img
                  src={b.location}
                  alt={`Peta lokasi ${b.title}`}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BillboardBandung;