import OyunKarti from './OyunKarti';

export default function OyunListesi({ oyunlar, onDuzenle, onSil }) {
  if (oyunlar.length === 0) {
    return (
      <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-2xl p-10 text-center">
        <p className="text-slate-400 text-sm">Henüz kayıtlı bir oyun bulunmuyor.</p>
        <p className="text-slate-600 text-xs mt-1">Yukarıdaki formdan yeni bir oyun ekleyerek başlayabilirsiniz.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {oyunlar.map((oyun) => (
        <OyunKarti
          key={oyun.id}
          oyun={oyun}
          onDuzenle={onDuzenle}
          onSil={onSil}
        />
      ))}
    </div>
  );
}
