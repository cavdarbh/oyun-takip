export default function OyunKarti({ oyun, onDuzenle, onSil }) {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-lg text-slate-100 line-clamp-1">
            {oyun.ad}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 whitespace-nowrap">
            ★ {oyun.puan}
          </span>
        </div>

        <div className="space-y-1.5 text-sm text-slate-400 mb-6">
          <div className="flex justify-between">
            <span>Tür:</span>
            <span className="font-medium text-slate-200">{oyun.tur}</span>
          </div>
          <div className="flex justify-between">
            <span>Fiyat:</span>
            <span className="font-medium text-emerald-400">{oyun.fiyat} ₺</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
        <button
          onClick={() => onDuzenle(oyun)}
          className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition border border-slate-700"
        >
          Düzenle
        </button>
        <button
          onClick={() => onSil(oyun.id)}
          className="py-1.5 px-3 rounded-lg text-xs font-medium bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white transition border border-rose-500/20"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
