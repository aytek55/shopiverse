---
sidebar_label: 'Ürünleri Getir'
---

# Ürünleri Getir

### Parametre

![ProductstockRequest](../product/img/ShopiverseApiGetProductsParameter.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir.Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

:::note
Shopiverse üzerinde bulunan ürünlerin bilgilerini ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Product Api GetProducts](https://api.shopiverse.com/swagger/index.html "Products API Get Products")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": {
    "data": [
      {
        "supplierProductId": 0,
        "productStatus": "0 - Pasif",
        "productType": "0 - StandardProduct",
        "sourceType": "0 - Xml",
        "supplierId": 0,
        "supplierStockCode": "string",
        "mainProductCode": "string",
        "productCode": "string",
        "stockCode": "string",
        "barcode": "string",
        "gtin": "string",
        "brand": "string",
        "category": "string",
        "packageWidth": 0,
        "packageLength": 0,
        "packageHeight": 0,
        "packageWeighting": 0,
        "packageDesi": 0,
        "productWidth": 0,
        "productLength": 0,
        "productHeight": 0,
        "productWeighting": 0,
        "productDesi": 0,
        "stock": 0,
        "costPrice": 0,
        "listPrice": 0,
        "salePrice": 0,
        "currency": "0 - TRY",
        "vat": 0,
        "videoUrl": "string",
        "addTime": "2024-03-05T09:30:40.840Z",
        "editTime": "2024-03-05T09:30:40.840Z"
      }
    ],
    "pageCount": 0,
    "pageNumber": 0,
    "pageSize": 0,
    "totalItemCount": 0
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
