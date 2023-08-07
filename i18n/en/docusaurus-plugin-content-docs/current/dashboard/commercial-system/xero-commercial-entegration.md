---
sidebar_label: 'Xero'

---

# Xero Entegrasyon

## Client ID - Client Secret

https://developer.xero.com/documentation/getting-started-guide/  (bu link üzerinde entegrasyon adımları ile ilgili detaylı bilgi mevcut.)

![XeroGet](../commercial-system/XeroGet.png)

**Add your application** linkine tıklanarak açılan ekrandan Client Id ve Client Secret bilgileri talep edilir.

![XeroGetCreate](../commercial-system/XeroGetcreate.png)

Form doldurularak **Create App** butonuna basılır. 

**App Name** : *ShopiVerse* , **Company Url** : *https://app.shopiverse.tech*  ,  **Redirect Url**: *https://app.shopiverse.tech/tr/settings/commercialsystem/xeroaccept* 

Kayıt işleminden sonra böyle bir ekran görüntülenir.

![XeroGenerate](../commercial-system/XeroGenerate.png)

**Generate a Secret** butonuna basılarak detay bilgi görüntülenir.

![XeroClient](../commercial-system/Xeroclient.png)

## Ticari Sistem Tanımları

Buradan kopyalanan **Client Id ve Client Secret** bilgileri, **ShopiVerse > Ayarlar > Ticari Sistem Ayarlar > Parametre Tanım** sekmesine kaydedilir.

![XeroEdit](../commercial-system/Xeroedit.png)

:::caution
Listede **Ticari Sisteminiz** bulunmuyorsa yeni Ticari Sistem tanımlamayı **[Ticari Sistem Tanımları](/shopiverse/en/docs/category/ticari-sistem-tanımları)**'ndan yapabilirsiniz.
:::

![XeroEditParameter](../commercial-system/XeroeditParamaeter.png)

Daha sonra tekrar Xero paneline giriş yapılır. **Accounting** butonu üzerinden hesap detaylarına gidilir.

Hesap detaylarında bulunan **Account Number** alanındaki değer kopyalanarak yine **ShopiVerse parametrelerine** kaydedilir.

:::caution
Xero panelindeki **Account Number** bilgisi boş ise doldurularak kayıt edilmelidir.
:::



