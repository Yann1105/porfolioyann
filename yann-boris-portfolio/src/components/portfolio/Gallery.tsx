export const Gallery = () => {
    const images = [
      "/images/gallery1.jpg",
      "/images/gallery2.jpg",
      "/images/gallery3.jpg",
      "/images/gallery4.jpg",
      "/images/gallery5.jpg",
      "/images/gallery6.jpg",
      "/images/gallery7.jpg",
    ];
  
    return (
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  