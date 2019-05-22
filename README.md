# gatsby-plugin-hotjar-tracking

Easily add Hotjar Analytics to your Gatsby site.

## Install

`yarn add gatsby-plugin-hotjar-tracking`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-hotjar-tracking`,
    options: {
      includeInDevelopment: false,
      id: YOUR_HOTJAR_ID,
      sv: YOUR_HOTJAR_SNIPPET_VERSION
    }
  }
];
```

To find your Hotjar ID, click the **Tracking code** button for your site. The Hotjar Snippet Version is in the tracking code, look for a line like:

```javascript
h._hjSettings={hjid:[hotjar id],hjsv:6};
```

The version is the value of `hjsv`.
