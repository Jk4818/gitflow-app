

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24 }}>
    <h1>gitflow-app • frontend</h1>
    <p>Env: {process.env.NEXT_PUBLIC_ENV || 'local'}</p>
  </main>
  );
}
