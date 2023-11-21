---
sidebar_label: 'API Integration'
sidebar_position: 1
---


# Joom API Integration

## Things to Do and Important Information Before the Integration Process

Images in Joom must be square. Rectangular images are acceptable, but their size must be between **1:11 and 3:4**.
Product measurement information (Width x Length x Height x Weight) must be entered correctly on the products in ShopiVerse. Joom collects shipping and customs costs directly from the customer, and adds the shipping cost to the product price according to the information entered here.

For **Joom** API integration; We need to fill in the "`Secret Key`", "`Client ID`" and "`Store ID`" information under the **Settings > Stores > Joom > API Definition** field from the ShopiVerse panel.


## Settings
![Settings](../joom/img/svayarlar.png)

 
## Shops > Joom
![Joom](../joom/img/svjoom.png)

## Joom > API Description
![JoomAPI](../joom/img/svjoomapi.png)

## Information Required for Integration
 
To do this, we create a store under the address https://merchant.joom.com/panel/stores with “**Open a New Store**” and then click on the store name we created and go to the store detail page, in the “**General Information**” field here. We copy the **code** written under “**Identity Number**” and paste it into the **StoreId** section in the *Shopiverse Store API Definition*.

Then, we go to the “**API Applications**” page in your account information area at the top right of the Joom panel. Here we click on the “**Create New Application**” button. Here, in the Title section, we select the store you created in the “**ShopiVerse**” Store section. In the “**Redirection URL**” field, we write “`https://app.shopiverse.tech/tr/settings/store/joomcallbackcode`” and click save.

Then, by clicking on the **title name** on the page that opens, enter the "**Client ID Number**" field into the "**Client ID**" field in the ShopiVerse panel; We enter the “**Secret Key**” field into the “**Secret Key**” field in the ShopiVerse panel, click on the Status section and click save.

Then, with the "**Request Authorization**" button that will appear when the page is reloaded, the user logs in to the Joom panel, the requested information is allowed and our API integration connection with Joom is completed.