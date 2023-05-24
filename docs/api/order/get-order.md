---
sidebar_label: 'Sipariş Getirme'
---

# Sipariş Getirme

### Request Body

```json
{
  "pageCount": 0,
  "pageNumber": 0,
  "pageSize": 0,
  "totalItemCount": 0,
  "endDate": "string",
  "startDate": "string",
  "orderGroupCode": "string",
  "receiverCountry": "string",
  "recipientNameAndSurname": "string",
  "status": "string",
  "generalStatus": "string"
}
```

:::caution
Shopiverse üzerinde bulunan siparişlerinizi çekmek için ShopiVerse Api üzerinden gerekli bilgileri yukarıdaki gibi girip isteği oluşturarak **[Order Api GetOrders](https://api.shopiverse.com/swagger/index.html "Order Api GetOrders")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": {
    "data": [
      {
        "cargoDeliveryDate": "2023-05-23T13:46:46.968Z",
        "cargoCompanyCode": "string",
        "cargoCompanyType": 0,
        "cargoTrackingUrl": "string",
        "cargoLabelUrl": "string",
        "cargoKonsimentoUrl": "string",
        "cargoInvoiceUrl": "string",
        "itemStatus": "string",
        "itemStatusName": "string",
        "languageType": 0,
        "mainProductCode": "string",
        "productStockCode": "string",
        "productBarcode": "string",
        "productName": "string",
        "productImageUrl": "string",
        "productAttributeNames": "string",
        "productAttributeValues": "string",
        "quantity": 0,
        "quantityUnitCode": "string",
        "quantityUnitType": 0,
        "tax": 0,
        "taxAmount": 0,
        "price": 0,
        "currencyType": 0,
        "isPriceIncludingTax": 0,
        "exchangeRate": 0,
        "discount": 0,
        "marketplaceNote": "string",
        "cargoNumberCreateDate": "2023-05-23T13:46:46.968Z",
        "cargoNumber": "string",
        "cargoPayment": "string",
        "cargoNotificationNumber": "string",
        "cargoPrice": "string",
        "paymentType": 0,
        "paymentStatus": "string",
        "bankName": "string",
        "orderDeliveryDate": "2023-05-23T13:46:46.968Z",
        "orderDeliveryCode": "string",
        "orderDeliveryType": 0,
        "id": 0,
        "storeId": 0,
        "storeName": "string",
        "receiverCode": "string",
        "orderGroupCode": "string",
        "completedSuccessfully": true,
        "generalStatus": 0,
        "status": "string",
        "statusName": "string",
        "orderDate": "2023-05-23T13:46:46.968Z",
        "agreedDeliveryDate": "2023-05-23T13:46:46.968Z",
        "specialNote": "string",
        "receiverName": "string",
        "receiverCity": "string",
        "receiverDistrict": "string",
        "receiverProvince": "string",
        "receiverNeighbourhood": "string",
        "receiverCountry": "string",
        "receiverAddress": "string",
        "receiverPhone": "string",
        "receiverPostCode": "string",
        "receiverEmail": "string",
        "receiverCompanyName": "string",
        "receiverIdentityNumber": "string",
        "receiverTaxNumber": "string",
        "receiverTaxOffice": "string",
        "invoiceName": "string",
        "invoiceLastName": "string",
        "invoiceIdentityNumber": "string",
        "invoiceTaxNumber": "string",
        "invoiceTaxOffice": "string",
        "invoiceAddress": "string",
        "invoiceCity": "string",
        "invoiceDistrict": "string",
        "invoiceNeighbourhood": "string",
        "invoiceProvince": "string",
        "invoiceCountry": "string",
        "invoicePhone": "string",
        "invoicePostCode": "string",
        "invoiceEmail": "string",
        "invoiceCompanyName": "string",
        "infoNote": "string",
        "orderCode": "string",
        "packageCode": "string",
        "orderItemNumber": "string",
        "orderItemType": 0,
        "partialNumber": "string",
        "receiverLastName": "string",
        "orderDetails": [
          "string"
        ],
        "cancel": true,
        "stock": 0,
        "invoiceNumber": "string",
        "fulfillmentService": "string"
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
