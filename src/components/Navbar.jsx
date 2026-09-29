export default function Navbar({ toplamOyun }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
            🎮
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Oyun Envanteri</h1>
            <p className="text-xs text-slate-400">Kütüphane & İstek Listesi Takibi</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700 text-sm">
          <span className="text-slate-400">Toplam Kayıt:</span>
          <span className="font-semibold text-indigo-400">{toplamOyun}</span>
        </div>
      </div>
    </header>
  );
}
