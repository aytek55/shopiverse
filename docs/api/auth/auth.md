---
sidebar_label: 'Token Alma'
---

# Token Alma

### Request
![AutRequest](../auth/img/Auth.png)

**Api-Key (Required) , User-Name(Required) , Password(Required)** parametre bilgilerinize Shopiverse panelde bulunan **Ana Sayfa > Ayarlar > Api Key** bölümünden ulaşabilirsiniz.

:::caution
ShopiVerse Api üzerinden gerekli isteği oluşturarak **[Auth Api OwnToken](https://api.shopiverse.com/swagger/index.html "Auth Api OwmToken")** metodunu deneyebilirsiniz.
:::

### Responses

#### Code 200 Success Response
```json
{
  "data": {
    "token": "string",
    "tokenType": "string",
    "expiration": "2023-05-23T12:54:29.714Z"
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
