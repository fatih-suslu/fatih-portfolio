import photo from "../assets/photo.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="bg-gray-100 w-screen h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 py-8">
        {/* Biyografi */}
        <div className="flex flex-col w-full lg:w-1/2 h-full justify-center">
          {/* Yatay Çizgi ve İsim */}
          <section className="flex items-center space-x-4">
            <div className="h-[2px] w-16 bg-gray-300"></div>
            <h5 className="text-xl font-bold text-blue-500">Fatih Süslü</h5>
          </section>
          <h1 className="text-5xl font-bold mt-4">
            Creative thinker
            <br />
            Minimalism lover
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Hi, I’m Fatih. I’m a full-stack developer. If you are looking for a
            Developer who can craft solid and scalable frontend products with
            great user experiences, let’s shake hands with me.
          </p>
          <section className="mt-6 flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">
              Button 1
            </button>
            <button className="bg-gray-500 text-white py-3 px-6 rounded-lg">
              Button 2
            </button>
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg">
              Button 3
            </button>
          </section>
        </div>

        {/* Resim */}
        <img
          src={photo}
          alt="photo"
          className="w-full lg:w-1/2 h-full object-cover rounded-3xl"
        />
      </section>
    </div>
  );
}
