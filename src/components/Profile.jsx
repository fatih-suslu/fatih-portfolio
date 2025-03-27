export default function Profile() {
  return (
    <main className="text-left flex flex-col md:flex-row place-content-around items-center mt-8 px-6">
      <div className="flex flex-col items-start max-w-[600px]">
        <h1 className="text-5xl font-bold">{content[language].greeting}</h1>
        <p className="text-2xl mt-4 mb-8 z-10">
          {content[language].description}
        </p>

        <div className="flex gap-4">
          <a href="/">
            {theme ? (
              <img src={linkedinsiyah} alt="Icon" />
            ) : (
              <img src={linkedinbeyaz} alt="Icon" />
            )}
          </a>
          <a href="/">
            {theme ? (
              <img src={githubsiyah} alt="Icon" />
            ) : (
              <img src={githubbeyaz} alt="Icon" />
            )}
          </a>
        </div>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          {content[language].freelancingInfo}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 m-6 max-w-[341px] shadow-lg">
        <img src={vesPic} alt="Profile" className="rounded-3xl" />
      </div>
    </main>
  );
}
