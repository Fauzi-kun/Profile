import Head from "next/head";

export default function Home() {
  return (
    <div className="dark">
      <Head>
        <title>Portfolio Fauzi</title>
        <meta name="description" content="Portfolio web developer keren." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white ">
        <h1 className="text-4xl font-bold dark:text-yellow-400">
          Fauzi Malik Nashrullah
        </h1>
        <nav className="mt-4 hidden md:block">
          <a href="#about" className="text-xl mx-4 hover:underline">
            About
          </a>
          <a href="#projects" className="text-xl mx-4 hover:underline">
            Projects
          </a>
          <a href="#experience" className="text-xl mx-4 hover:underline">
            Experience
          </a>
          <a href="#timeline" className="text-xl mx-4 hover:underline">
            Journey
          </a>
          <a href="#contact" className="text-xl mx-4 hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="py-10 px-6 bg-gray-100 dark:bg-gray-800">
        <section id="about" className="my-8 flex items-center space-x-6">
          <img
            src="/profile.jpg"
            alt="Foto Kamu"
            className="w-40 h-40 rounded-full border-4 border-blue-800 dark:border-yellow-400 shadow-lg transform hover:scale-105 transition duration-300 object-cover"
          />

          <div>
            <h2 className="text-3xl font-semibold text-blue-800 dark:text-yellow-400">
              About Me
            </h2>
            <p className="mt-4 text-lg text-black dark:text-white">
              Saya seorang web developer pemula dengan pengalaman belajar selama
              6 bulan. Saya sudah terbiasa menggunakan teknologi seperti React,
              Vue, Next.js, Laravel, dan Express.js untuk membangun aplikasi
              modern. Saya menikmati tantangan dalam menyelesaikan masalah yang
              rumit dan selalu tertarik untuk belajar teknologi baru.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white py-16 my-8"
        >
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-yellow-400">
            My Projects
          </h2>
          <ul className="mt-4 space-y-6 text-black">
            <li className="bg-white dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Web CRUD</h3>
              <p className="mt-2">web crud sederhana menggunakan React.Js</p>
              <a
                href="https://video-belajar-sable.vercel.app/"
                className="text-blue-500 dark:text-yellow-400 mt-4 block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
          </ul>
        </section>

        <section id="experience" className="my-8">
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-yellow-400">
            Experience
          </h2>
          <div className="mt-6 border-l-2 border-blue-800 dark:border-yellow-400 pl-4">
            <div className="relative mb-8">
              <h3 className="text-2xl font-bold dark:text-white">
                Fullstack Developer Bootcamp
              </h3>
              <p className="text-gray-700 dark:text-gray-300">HariSenin.com</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Aug 2024 - Present
              </span>
              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                <li>
                  Membangun UI interaktif menggunakan React dan Tailwind CSS.
                </li>
                <li>Mengolah backend menggunakan Express Js</li>
                <li>Optimasi kinerja halaman dengan SSR di Next.js.</li>
                <li>Berkolaborasi dengan tim backend untuk integrasi API.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="timeline" className="my-16">
          <h2 className="text-3xl font-semibold text-blue-800 dark:text-yellow-400 text-center mb-8">
            My Journey
          </h2>
          <div className="relative border-l-2 border-blue-800 dark:border-yellow-400 pl-6">
            {/* Pendidikan */}
            <div className="relative mb-10">
              <h3 className="text-2xl font-bold dark:text-white">
                High School Graduate
              </h3>
              <p className="text-gray-700 dark:text-gray-300">SMKN 2 Banjar</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2019 - 2022
              </span>
            </div>

            {/* Kuliah */}
            <div className="relative mb-10">
              <h3 className="text-2xl font-bold dark:text-white">
                S1 Teknik Elektro
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Universitas Jenderal Soedirman
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2024 - Sekarang
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="my-8">
          <h2 className="text-3xl  font-semibold text-blue-800 dark:text-yellow-400">
            Contact Me
          </h2>
          <p className="mt-3 text-lg text-black dark:text-white">
            Email:{" "}
            <a
              href="mailto:fauzimalik08@gmail.com"
              className="text-blue-500 dark:text-yellow-300 hover:underline"
            >
              fauzimalik08@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
