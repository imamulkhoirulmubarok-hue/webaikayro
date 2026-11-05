import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="wrap nav-wrap">
        <nav className="nav" aria-label="Utama">
          <Link href="/" className="brand">
            Kayro AI
          </Link>
          <Link href="/chat" className="btn">
            Coba gratis
          </Link>
        </nav>
      </header>

      <main className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="hero-title">
            Ngobrol dengan AI.
            <br />
            <span>Ikuti berita.</span>
          </h1>
          <p className="hero-lead">
            Kayro AI membantu kamu ngobrol dengan AI dan mengikuti berita terbaru.
          </p>
          <div className="panel" aria-hidden="false">
            <p className="bubble">Mau tanya apa hari ini?</p>
          </div>
        </section>

        <section className="features" aria-label="Fitur">
          <article className="panel feature">
            <h2>Chat AI</h2>
            <p>Tanya apa saja. Riwayat chatmu disimpan.</p>
          </article>
          <article className="panel feature">
            <h2>Berita</h2>
            <p>Cari berita terbaru dari Kompas.</p>
          </article>
        </section>
      </main>

      <footer className="wrap footer">Kayro AI · Coba gratis, akses premium lewat owner di dashboard chat.</footer>
    </>
  );
}
