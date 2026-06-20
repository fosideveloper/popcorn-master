# 🍿 Popcorn Master

Mısırları patlat, bomba ve yanmışlardan kaç, yüksek skor yap! HTML5 Canvas ile yapılmış, mobil öncelikli bir tarayıcı oyunu.

## 🎮 Oyun Modları

- **Sonsuz (Arcade):** Süre yok, istediğin kadar oyna.
- **Zamanla Yarış:** 60 saniyede en yüksek skor.
- **Zor Mod (Survival):** Tek bomba = oyun biter. Zorluk arttıkça hızlanır.

## 🕹️ Nasıl Oynanır

- Mısırlara dokun / tıkla veya parmağını sürükleyerek patlat.
- 🌽 Normal: +10 &nbsp; ✨ Altın: +50 &nbsp; ❄️ Donmuş: 2 vuruş, +30
- 🔥 Yanmış: -10 &nbsp; 💣 Bomba: -50 (Zor Mod'da oyunu bitirir)

## 🚀 Çevrimiçi Oyna

GitHub Pages açıldıktan sonra:

```
https://KULLANICI-ADIN.github.io/popcorn-master/
```

> `KULLANICI-ADIN` yerine kendi GitHub kullanıcı adını yaz.

## 💻 Yerelde Çalıştırma

Dosyalar bir web sunucusundan servis edilmeli (ES modülleri `file://` ile çalışmaz):

```bash
# Python ile basit sunucu
python -m http.server 8000
# Tarayıcıda aç: http://localhost:8000
```

## 🛠️ Teknolojiler

- HTML5 Canvas + saf JavaScript (kütüphane yok)
- Web Audio API (ses efektleri)
- Firebase Authentication (Google ile giriş)
- Cloud Firestore (skor tablosu)

## ⚙️ Firebase Notu

Çevrimiçi sürümde Google girişi ve skor tablosunun çalışması için Firebase Console'da
**Authentication → Settings → Authorized domains** kısmına `KULLANICI-ADIN.github.io`
alan adını eklemen gerekir. Aksi halde giriş ve liderlik tablosu hata verir.

---
*Tüm görsel, ses ve video varlıkları oyuna aittir.*
