---
sidebar_label: 'Depo Bilgileri Getirme'
---

# Depo Bilgileri Getirme

### Parametre


![GetWarehouseRequest](../warehouse/img/GetWarehousesRequest.png)

:::note
X-Client Key   Shopiverse panelde Api Tanımlarında bulunan APİ-Key bilgisidir. Api İstek limiti **dakikada 2 istek** olarak sabitlenmiştir.
:::

```json
 Status : string Aktif(1) , Pasif(0)
 Name : string
```

:::note
Shopiverse üzerinde bulunan tedarikçileri çekmek için ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip gerekli isteği oluşturarak **[Warehouse Api GetWarehouse](https://api.shopiverse.com/swagger/index.html "Warehouse Api GetWarehouse")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": [
    {
      "status": "0 - Pasif",
      "warehouseType": "0 - EcommerceWarehouse",
      "name": "string",
      "code": "string"
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
