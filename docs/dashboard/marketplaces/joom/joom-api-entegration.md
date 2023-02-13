---
sidebar_label: 'API Entegrasyonu'
sidebar_position: 5
---


# Joom API Entegrasyonu

**Joom** API entegrasyonu için; ShopiVerse panelinden **Ayarlar > Mağazalar > Joom >  API Tanımı** alanı altındaki “`Secret Key`” ve “`Client ID`” bilgilerini doldurmamız gerekiyor. 


## Ayarlar
![Ayarlar](../joom/img/svayarlar.png)

 
## Mağazalar > Joom
![Joom](../joom/img/svjoom.png)

## Joom > API Tanımı
![JoomAPI](../joom/img/svjoomapi.png)

## Entegrasyon İçn Gerekli Bilgiler
 
Bunun için https://merchant.joom.com/panel/stores adresi altında “**Yeni Mağaza Aç**” ile mağaza oluşturup daha sonra oluşturduğumuz mağaza adına tıklayarak mağaza detay sayfasına gidiyoruz, buradaki “**Genel Bilgi**” alanındaki “**Kimlik Bilgileri**” altında yazan **kodu** kopyalıyoruz. 

Daha sonra Joom panelinde sağ üst tarafta bulunan hesap bilgileriniz alanında “**API Uygulamaları**” sayfasına gidiyoruz. Burada “**Yeni Uygulama Oluştur**” butonuna tıklıyoruz. Burada Unvan kısmına “**ShopiVerse**” Mağaza kısmında oluşturduğunuz mağazayı seçiyoruz. “**Yeniden Yönlendirme URL’si**” alanına ise “`https://app.shopiverse.tech/tr/settings/store/joomcallbackcode`” yazıyoruz ve kaydet diyoruz. 

Daha sonra açılan sayfada **ünvan adına** tıklayarak açılan sayfada “**Müşteri Kimlik Numarası**” alanını ShopiVerse panelindeki “**Client ID**” alanına; “**Gizli Anahtar**” alanını ShopiVerse panelindeki “**Secret Key**” alanına giriyoruz ve Durum kısmını tikleyerek kaydet diyoruz. 

Daha sonra sayfa yeniden yüklendiğinde oluşacak “**Yetki Talep Et**” butonu ile Joom paneline giderek kullanıcı girişi yapıp, istenilen bilgilere izin veriliyor ve Joom ile api entegrasyon bağlantımız tamamlanmış oluyor. 