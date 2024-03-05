---
sidebar_label: 'Ürün Resimlerini Getir'
---

# Ürün Resimlerini Getir

### Parametre

![ProductstockRequest](../product/img/ShopiverseApiGetProductImages.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir.Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

:::note
Shopiverse üzerinde bulunan ürünlerin resim bilgilerini ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Product Api GetProduct Images](https://api.shopiverse.com/swagger/index.html "Products API Get Product Images")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": [
    {
      "id": 0,
      "supplierProductId": 0,
      "rowNumber": 0,
      "imageUrl": "string",
      "addTime": "2024-03-05T10:29:16.765Z",
      "editTime": "2024-03-05T10:29:16.765Z"
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
