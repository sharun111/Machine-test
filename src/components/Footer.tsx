export default function Footer() {
  return (
    <section className="relative w-full bg-black text-white py-20 px-[100px] font-montserrat  overflow-hidden">
      <div className="absolute inset-0 rotate-180 z-0 ">
        <img
          src="/c5e14e11ec0ab683136075decb92161458861ab1.jpg"
          alt="footer background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 mb-[182px]">
        <h2 className="text-3xl md:text-5xl font-medium leading-snug">
          Need more clarity?
          <br />
          Get in touch!
        </h2>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
          Book a demo →
        </button>
      </div>

      <div className="relative z-10 flex justify-between items-center w-full">
        <div className="text-sm text-gray-400">© 2024 All Rights Reserved</div>

        <div className="flex gap-4">
          {["in", "ig", "be", "dr", "g"].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
            >
              <span className="text-sm text-white uppercase">{icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
