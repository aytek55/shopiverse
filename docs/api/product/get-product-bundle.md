---
sidebar_label: 'Paket Ürün Getir'
---

# Paket Ürün Getir

### Parametre

![ProductstockRequest](../product/img/ShopiverseApiGetProductBundles.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir.Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

:::note
Shopiverse üzerinde bulunan ürünlerin açıklama bilgilerini ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Product Api GetProduct Bundle](https://api.shopiverse.com/swagger/index.html "Products API Get Product Bundle")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": [
    {
      "id": 0,
      "supplierProductId": 0,
      "bundleSupplierProductId": 0,
      "bundleStock": 0,
      "addTime": "2024-03-05T11:06:14.600Z",
      "editTime": "2024-03-05T11:06:14.600Z"
    }
  ],
  "success": true,
  "message": "string"
}
```

#### Code 400 BadRequest
```json
{
  "success": true,
  "message": "string"
}
```
