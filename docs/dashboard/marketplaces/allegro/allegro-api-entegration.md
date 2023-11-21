---
sidebar_label: 'API Entegrasyonu'
sidebar_position: 1
---

# Allegro API Entegrasyonu

## Entegrasyon Süreci Öncesinde Yapılması Gerekenler ve Önemli Bilgiler

Allegro entegrasyon sürecine başlamadan önce marka tanımlamanızı yapmanız gerekmektedir. Bunun için Allegro tarafına ürünlerinizi listelemek istediğiniz kategori kodları ile birlikte ticket açmanız ve marka ekleme talebinde bulunmanız gerekmektedir.


ShopiVerse panelinden **Ayarlar > Mağazalar > Allegro >  API Tanım** alanı altında “*Durum*” kısmı tikleyip, “*Client ID*” ve “*Secret Key*” bilgilerini girerek ilk önce kaydet demeniz gerekiyor, daha sonra yenilenen ekranda “Yetki Talep Et” butonu ile işlem sağlamanız gerekmektedir.

Client ID ve Secret Key bilgileri için; **https://developer.allegro.pl/** sayfası üzerinden giriş yaparak Manage *API > My Applications* sayfasına girerek yeni bir kayıt oluşturmanız gerekiyor.

Yeni kayıt oluşturulurken açılan sayfayı aşağıda belirttiğimiz gibi doldurabilirsiniz.
 “*Application Name*” alanında “*ShopiVerse*” yazabilirsiniz. 
 “*Application description*” alanı optional olduğu için boş bırakabilirsiniz. 
 “*Select Application Type*” alanı altında “*The application has access to the browser that the user uses to sign in to Allegro (e.g., an application on a server or an executable file) The application will receive OAuth grant-type: authorization_code*” olanı tikleyebilirsiniz.
 “*Application Path*” alanına ise “*https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode*” linkini yapıştırabilirsiniz.
 “*App permissions*” alanındaki tüm tiklemeleri yapıp Terms & Conditions kısmını da tikleyerek “Register” butonu ile API tanımlarını yapabilirsiniz.
 Bu API tanımını oluşturduktan sonra Details sayfasına girerek bu sayfa altında Client ID ve Client Secret bilgilerini bulabileceksiniz. Bu bilgileri de ShopiVerse’de **Ayarlar > Mağazalar > Allegro >  API Tanım** alanı altında “*Client ID*” ve “*Secret Key*” alanlarına kopyalayıp yapıştırabilirsiniz.

