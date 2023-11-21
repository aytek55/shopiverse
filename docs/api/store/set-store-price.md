---
sidebar_label: 'Mağaza Ürün Fiyat Gönderme'
---

# Mağaza Ürün Fiyat Gönderme

### Request Body

```json
[
  {
    "storeId": 0,
    "stockCode": "string",
    "listPrice": 0,
    "salePrice": 0,
    "currency": "0 - TRY"
  }
]
```

:::note
Shopiverse üzerinde bulunan mağazalarınızı çekmek için ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Store Api SetStorProductPrice](https://api.shopiverse.com/swagger/index.html "Store Api SetStoreProductPrice")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": {
    "taskCode": "string"
  },
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
