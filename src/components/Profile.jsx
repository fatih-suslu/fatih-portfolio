export default function Profile() {
  const profileInfo = [
    { label: "Doğum Tarihi", value: "04.11.1998" },
    { label: "İkamet Şehri", value: "Antalya" },
    {
      label: "Eğitim Durumu",
      value: "Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği, Lisans",
    },
    { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
  ];

  const aboutMe =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!";

  return (
    <section className="px-32 py-16">
      <h2 className="text-5xl font-bold mb-12">Profile</h2>
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-lg">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
            Profile
          </h3>
          {profileInfo.map((item, index) => (
            <div key={index} className="flex text-lg">
              <span className="font-bold w-1/3">{item.label}:</span>
              <span className="ml-2 w-2/3">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col max-w-lg">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
            About Me
          </h3>
          <p className="text-gray-700">{aboutMe}</p>
        </div>
      </div>
    </section>
  );
}
