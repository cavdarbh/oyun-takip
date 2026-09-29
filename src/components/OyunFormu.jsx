import { useState, useEffect } from 'react';

export default function OyunFormu({ seciliOyun, onKaydet, onIptal }) {
  const [ad, setAd] = useState('');
  const [tur, setTur] = useState('RPG');
  const [fiyat, setFiyat] = useState('');
  const [puan, setPuan] = useState('');

  useEffect(() => {
    if (seciliOyun) {
      setAd(seciliOyun.ad || '');
      setTur(seciliOyun.tur || 'RPG');
      setFiyat(seciliOyun.fiyat || '');
      setPuan(seciliOyun.puan || '');
    } else {
      setAd('');
      setTur('RPG');
      setFiyat('');
      setPuan('');
    }
  }, [seciliOyun]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ad.trim()) return alert('Lütfen oyun adını giriniz.');

    const veri = {
      ad: ad.trim(),
      tur,
      fiyat: Number(fiyat) || 0,
      puan: Number(puan) || 0
    };

    onKaydet(veri);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
        <span>{seciliOyun ? 'Oyunu Güncelle' : 'Yeni Oyun Ekle'}</span>
        {seciliOyun && (
          <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-normal">
            Düzenleme Modu
          </span>
        )}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">
            Oyun Adı *
          </label>
          <input
            type="text"
            required
            value={ad}
            onChange={(e) => setAd(e.target.value)}
            placeholder="Örn: Elden Ring"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Tür
            </label>
            <select
              value={tur}
              onChange={(e) => setTur(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="RPG">RPG</option>
              <option value="Aksiyon">Aksiyon</option>
              <option value="Aksiyon-RPG">Aksiyon-RPG</option>
              <option value="Macera">Macera</option>
              <option value="Strateji">Strateji</option>
              <option value="Simülasyon">Simülasyon</option>
              <option value="Spor">Spor</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Fiyat (₺)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={fiyat}
              onChange={(e) => setFiyat(e.target.value)}
              placeholder="299"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">
              Puan (10 üzerinden)
            </label>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={puan}
              onChange={(e) => setPuan(e.target.value)}
              placeholder="8.5"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-lg shadow-indigo-600/30"
          >
            {seciliOyun ? 'Değişiklikleri Kaydet' : 'Kütüphaneye Ekle'}
          </button>
          {seciliOyun && (
            <button
              type="button"
              onClick={onIptal}
              className="py-2.5 px-4 rounded-xl text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 transition border border-slate-700"
            >
              Vazgeç
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
