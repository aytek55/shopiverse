---
sidebar_label: 'Ürün Niteliklerini Getir'
---

# Ürün Niteliklerini Getir

### Parametre

![ProductstockRequest](../product/img/ShopiverseApiGetProductAttributes.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir.Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

:::note
Shopiverse üzerinde bulunan ürünlerin nitelik bilgilerini ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Product Api GetProduct Attributes](https://api.shopiverse.com/swagger/index.html "Products API Get Product Attributes")** metodunu deneyebilirsiniz.
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
      "attributeName": "0 - Renk",
      "attributeValue": "string",
      "addTime": "2024-03-05T10:23:41.353Z",
      "editTime": "2024-03-05T10:23:41.353Z"
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
