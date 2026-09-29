# Oyun Envanteri Takip Uygulamasi

Bu proje; React kütüphanesi, Vite derleme aracı ve Tailwind CSS kullanılarak geliştirilmiş, modüler mimariye ve tam CRUD (Create, Read, Update, Delete) işlevselliğine sahip bir ön yüz (frontend) web uygulamasıdır. Veri kalıcılığı tarayıcı yerel depolama alanı (LocalStorage API) üzerinden sağlanmaktadır.

---

## Genel Bakis ve Ozellikler

- Bilesen Bazli Mimari: Moduler, bakimi kolay ve birbirinden bagimsiz bilesen yapisi.
- Kalici Veri Depolama: Veriler tarayicinin LocalStorage alaninda saklanarak sayfa yenilemelerinde korunur.
- Tam CRUD Islevselligi:
  - Listeleme (Read): Kayitli tum oyunlarin kart diziliminde ozet bilgileriyle listelenmesi.
  - Ekleme (Create): Form araciligiyla veri dogrulamasi yapilarak envantere yeni oyun kaydi yapilmasi.
  - Guncelleme (Update): Var olan kayitlarin form uzerinden duzenlenip anlik guncellenmesi.
  - Silme (Delete): Onay mekanizmasi ile secilen kaydin envanterden ve yerel depolamadan kaldirilmasi.
- Responsive Tasarim: Tailwind CSS ile mobil ve masaustu cihazlara tam uyumlu arayuz.

---

## Proje Dizin Yapisi

```text
oyun-takip/
├── screenshots/              # Uygulama calisma anina ait ekran goruntuleri
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Ust baslik ve istatistik gostergesi
│   │   ├── OyunFormu.jsx     # Kayit ekleme ve duzenleme formu
│   │   ├── OyunKarti.jsx     # Tekil kart gorunumu ve aksiyon butonlari
│   │   └── OyunListesi.jsx   # Kartlarin listelendigi tasiyici bilesen
│   ├── data/
│   │   └── varsayilanOyunlar.js # Ilk acilista yuklenen varsayilan veri seti
│   ├── services/
│   │   └── oyunServisi.js    # LocalStorage islemlerini yoneten CRUD servis katmani
│   ├── App.jsx               # Ana uygulama tasiyicisi ve durum (state) yonetimi
│   ├── index.css             # Tailwind direktifleri ve temel stiller
│   └── main.jsx              # React baslatma ve render giris noktasi
├── index.html
├── package.json
├── vite.config.js
└── README.md