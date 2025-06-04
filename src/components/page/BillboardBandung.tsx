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
      "https://via.placeholder.com/400x250.png?text=Billboard+1A",
      "https://via.placeholder.com/400x250.png?text=Billboard+1B",
    ],
    location: "https://via.placeholder.com/400x250.png?text=Map+1",
    description:
      "Billboard strategis di kawasan Asia Afrika dengan lalu lintas padat.",
  },
  {
    id: 2,
    title: "Billboard Dago",
    images: [
      "https://via.placeholder.com/400x250.png?text=Billboard+2A",
      "https://via.placeholder.com/400x250.png?text=Billboard+2B",
    ],
    location: "https://via.placeholder.com/400x250.png?text=Map+2",
    description:
      "Terletak di jantung wisata Dago, cocok untuk promosi berbagai produk.",
  },
  {
    id: 3,
    title: "Billboard Pasteur",
    images: [
      "https://via.placeholder.com/400x250.png?text=Billboard+3A",
      "https://via.placeholder.com/400x250.png?text=Billboard+3B",
    ],
    location: "https://via.placeholder.com/400x250.png?text=Map+3",
    description:
      "Billboard dekat gerbang tol Pasteur, dilalui kendaraan luar kota.",
  },
  {
    id: 4,
    title: "Billboard Setiabudi",
    images: [
      "https://via.placeholder.com/400x250.png?text=Billboard+4A",
      "https://via.placeholder.com/400x250.png?text=Billboard+4B",
    ],
    location: "https://via.placeholder.com/400x250.png?text=Map+4",
    description:
      "Area ramai mahasiswa dan wisatawan dengan visibilitas tinggi.",
  },
];

const BillboardBandung: React.FC = () => {
  return (
    <main className="bg-[#131310] min-h-screen text-white pt-20 pb-10">
      <div className="back__btn px-4 mb-6">
        <a href="/" className="text-white/85 flex items-center gap-2">
          <p className="text-lg">&#x2190; back</p>
        </a>
      </div>
      <h1 className="unbounded text-center text-3xl mb-8">Billboard Bandung</h1>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 px-4">
        {billboards.map((b) => (
          <div
            key={b.id}
            className="bg-white text-[#131310] rounded-lg shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 p-4">
              {b.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${b.title} ${i + 1}`}
                  className="h-32 w-full object-cover rounded"
                />
              ))}
            </div>
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-semibold">{b.title}</h2>
              <p className="text-sm">{b.description}</p>
              <img
                src={b.location}
                alt={`Lokasi ${b.title}`}
                className="w-full h-40 object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BillboardBandung;
