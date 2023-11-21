---
sidebar_label: 'API Integration'
sidebar_position: 1
---

# Allegro API Integration

## Things to Do and Important Information Before the Integration Process

Before starting the Allegro integration process, you need to define your brand. To do this, you need to open a ticket on Allegro with the category codes in which you want to list your products and request to add a brand.


From the ShopiVerse panel, you need to click on the "*Status*" section under the **Settings > Stores > Allegro > API Definition** field, enter the "*Client ID*" and "*Secret Key*" information and click save first, then " You must complete the action with the "Request Authorization" button.

For Client ID and Secret Key information; You need to create a new record by logging in via **https://developer.allegro.pl/** and going to the Manage **API > My Applications** page.

You can fill out the page that opens when creating a new registration as stated below.
  You can write “*ShopiVerse*” in the “*Application Name*” field.
  Since the “*Application description*” field is optional, you can leave it blank.
  Under the “*Select Application Type*” field, “*The application has access to the browser that the user uses to sign in to Allegro (e.g., an application on a server or an executable file) The application will receive OAuth grant-type: authorization_code You can tick "*".
  You can paste the link “*https://app.shopiverse.tech/tr/settings/store/allegrocallbackcode*” into the “*Application Path*” field.
  You can make API definitions with the "Register" button by making all the ticks in the "*App permissions*" field and clicking the Terms & Conditions section.
  After creating this API definition, you will be able to enter the Details page and find the Client ID and Client Secret information under this page. You can also copy and paste this information into the "*Client ID*" and "*Secret Key*" fields under **Settings > Stores > Allegro > API Definition** area in ShopiVerse.