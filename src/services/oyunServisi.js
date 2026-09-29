import { varsayilanOyunlar } from '../data/varsayilanOyunlar';

const DEPO_ANAHTARI = 'oyunlar_listesi';

export const oyunServisi = {
  // 1. Listele (Read)
  oyunlariGetir: () => {
    const kayitliVeri = localStorage.getItem(DEPO_ANAHTARI);
    if (!kayitliVeri) {
      localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(varsayilanOyunlar));
      return varsayilanOyunlar;
    }
    return JSON.parse(kayitliVeri);
  },

  // 2. Ekle (Create)
  oyunEkle: (yeniOyun) => {
    const mevcutOyunlar = oyunServisi.oyunlariGetir();
    const oyun = {
      ...yeniOyun,
      id: Date.now() // Benzersiz ID
    };
    const guncelListe = [oyun, ...mevcutOyunlar];
    localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(guncelListe));
    return guncelListe;
  },

  // 3. Güncelle (Update)
  oyunGuncelle: (id, guncelBilgiler) => {
    const mevcutOyunlar = oyunServisi.oyunlariGetir();
    const guncelListe = mevcutOyunlar.map((o) =>
      o.id === id ? { ...o, ...guncelBilgiler } : o
    );
    localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(guncelListe));
    return guncelListe;
  },

  // 4. Sil (Delete)
  oyunSil: (id) => {
    const mevcutOyunlar = oyunServisi.oyunlariGetir();
    const guncelListe = mevcutOyunlar.filter((o) => o.id !== id);
    localStorage.setItem(DEPO_ANAHTARI, JSON.stringify(guncelListe));
    return guncelListe;
  }
};
