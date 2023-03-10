---
sidebar_label: 'API Entegrasyonu'
sidebar_position: 1
---


# Amazon API Entegrasyonu

**Amazon** API entegrasyonu için; ShopiVerse panelinden **Ayarlar > Mağazalar > Amazon >  API Tanımı** alanı altındaki “**Merchant Token**” alanını doldurmamız gerekiyor. 

## Ayarlar
![Ayarlar](../amazon/img/svayarlar.png)

 
## Mağazalar > Amazon
![Amazon](../amazon/img/svamazon.png)

## Amazon > API Tanımı
![AmazonAPI](../amazon/img/svamazonapi.png)


## Merchant Token Almak İçin

Merchant Token Almak İçin
https://sellercentral.amazon.com/hz/sc/account-information sayfasında “**Business Information > Merchant Token**” alanına girerek bu bilgiyi ShopiVerse panelindeki ilgili alana girmemiz gerekiyor. 

Daha sonra “*Durum*” kısmını tikleyerek “*Kaydet*” diyoruz ve sayfa yeniden yüklendiğinde oluşacak “**Yetki Talep Et**” butonu ile Amazon paneline giderek kullanıcı girişi yapıp, istenilen bilgilere izin veriliyor ve Amazon ile api entegrasyon bağlantımız tamamlanmış oluyor. 

:::caution

Dikkat edilmesi gereken nokta, yetki talep edilirken ShopiVerse panelindeki dil seçeneği Türkçe olarak seçili olmalı.

Not: Her amazon ülkesi için ayrı bir entegrasyon yapılması gerekiyor, dolayısıyla bu api tanımlarını doğru pazaryeri özelinde yapılması çok önemlidir. 


:::
