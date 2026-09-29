# Oyun Envanteri Takip Uygulamasi

Bu proje; React kutuphanesi, Vite derleme araci ve Tailwind CSS kullanilarak gelistirilmis, moduler mimariye ve tam CRUD (Create, Read, Update, Delete) islevselligine sahip bir on yuz (frontend) web uygulamasidir. Veri kaliciligi tarayici yerel depolama alani (LocalStorage API) uzerinden saglanmaktadir.

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

oyun-takip/
├── screenshots/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── OyunFormu.jsx
│   │   ├── OyunKarti.jsx
│   │   └── OyunListesi.jsx
│   ├── data/
│   │   └── varsayilanOyunlar.js
│   ├── services/
│   │   └── oyunServisi.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## Kurulum ve Calistirma

### Gereksinimler
- Node.js (v18.x veya uzeri onerilir)
- npm (v9.x veya uzeri)

### 1. Bagimliliklarin Yuklenmesi
Depo yerel ortama klonlandiktan sonra proje dizininde asagidaki komutu calistirin:

npm install

### 2. Gelistirme Sunucusunun Baslatilmasi
Uygulamayi yerel gelistirme modunda calistirmak icin:

npm run dev

Uygulama varsayilan olarak http://localhost:5173/ adresi uzerinde yayina baslayacaktir.

### 3. Uretim (Production) Derlemesi
Canli ortam cikti dosyalarini (dist/) olusturmak icin:

npm run build

---

## Veri Modeli

Uygulama kapsaminda tutulan tekil nesne yapisi asagidaki alanlardan olusur:

| Alan | Veri Tipi | Zorunluluk | Aciklama |
|---|---|---|---|
| id | Number | Sistem Tarafindan | Benzersiz kayit numarasi (Zaman damgasi) |
| ad | String | Evet | Oyun basligi |
| tur | String | Evet | Oyun kategorisi (RPG, Aksiyon, Macera vb.) |
| fiyat | Number | Hayir | ₺ cinsinden fiyat bilgisi |
| puan | Number | Hayir | 10 uzerinden degerlendirme puani |

---

## Canli Yayin ve Dagitim

Proje, Netlify uzerinde surekli entegrasyon (CI/CD) mekanizmasi ile yayina alinmistir.
