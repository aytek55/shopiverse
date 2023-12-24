---
sidebar_label: 'Get Warehouse'
---

# Warehouse

### Parameter

![GetWarehouseRequest](../warehouse/img/GetWarehousesRequest.png)

```json
 Status : string Aktif(1) , Pasif(0)
 Name : string
```

:::note
X-Client Key is the API-Key information found in the Api Definitions in the Shopiverse panel. Api Request limit is fixed as **2 requests per minute**.
:::

:::note
To attract suppliers on Shopiverse, you can try the **[Warehouse Api GetWarehouse](https://api.shopiverse.com/swagger/index.html "Warehouse Api GetWarehouse")** method by entering the necessary information via the ShopiVerse Api as above and creating the necessary request. .
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
