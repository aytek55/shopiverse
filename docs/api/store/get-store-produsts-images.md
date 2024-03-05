---
sidebar_label: 'Mağaza Ürün Resimleri Getirme'
---

# Mağaza Ürün Resimleri Getirme

![GetstoresRequest](../store/img/ShopiverseApiGetStoreProductImages.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir.Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

:::note
Shopiverse üzerinde bulunan mağaza ürün resimlerini çekmek için ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Store Api GetStoreProductImages](https://api.shopiverse.com/swagger/index.html "Store Api GetStoreProductImages")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": [
    {
      "id": 0,
      "storeProductId": 0,
      "rowNumber": 0,
      "imageUrl": "string",
      "addTime": "2024-03-05T12:04:31.979Z",
      "editTime": "2024-03-05T12:04:31.979Z"
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
