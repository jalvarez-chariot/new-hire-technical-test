import CustomerDisplay from './components/CustomerDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Chariot Energy</h1>
        <p className="text-xl text-gray-300 mt-2">Developer Technical Challenge</p>
      </div>
      <CustomerDisplay />
    </main>
  );
}