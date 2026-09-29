import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import OyunFormu from './components/OyunFormu';
import OyunListesi from './components/OyunListesi';
import { oyunServisi } from './services/oyunServisi';

export default function App() {
  const [oyunlar, setOyunlar] = useState([]);
  const [seciliOyun, setSeciliOyun] = useState(null);

  // Sayfa açıldığında LocalStorage'dan verileri çek (Read)
  useEffect(() => {
    const veri = oyunServisi.oyunlariGetir();
    setOyunlar(veri);
  }, []);

  // Ekleme veya Güncelleme İşlemi (Create / Update)
  const handleKaydet = (formVerisi) => {
    if (seciliOyun) {
      // Güncelleme
      const guncelListe = oyunServisi.oyunGuncelle(seciliOyun.id, formVerisi);
      setOyunlar(guncelListe);
      setSeciliOyun(null);
    } else {
      // Yeni Ekleme
      const guncelListe = oyunServisi.oyunEkle(formVerisi);
      setOyunlar(guncelListe);
    }
  };

  // Düzenleme Modunu Başlat
  const handleDuzenle = (oyun) => {
    setSeciliOyun(oyun);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Düzenlemeden Vazgeç
  const handleIptal = () => {
    setSeciliOyun(null);
  };

  // Silme İşlemi (Delete)
  const handleSil = (id) => {
    if (window.confirm('Bu oyunu envanterden silmek istediğinize emin misiniz?')) {
      const guncelListe = oyunServisi.oyunSil(id);
      setOyunlar(guncelListe);
      if (seciliOyun?.id === id) {
        setSeciliOyun(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar toplamOyun={oyunlar.length} />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Form Bölümü (Ekleme / Güncelleme) */}
        <section>
          <OyunFormu
            seciliOyun={seciliOyun}
            onKaydet={handleKaydet}
            onIptal={handleIptal}
          />
        </section>

        {/* Liste Bölümü */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Oyun Kütüphanesi
            </h2>
            <span className="text-xs text-slate-400">
              LocalStorage ile senkronize çalışır
            </span>
          </div>

          <OyunListesi
            oyunlar={oyunlar}
            onDuzenle={handleDuzenle}
            onSil={handleSil}
          />
        </section>
      </main>
    </div>
  );
}
