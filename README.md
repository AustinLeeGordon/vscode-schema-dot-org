# VS Code Schema.org Snippets

[![Visual Studio Marketplace Version](https://vsmarketplacebadge.apphb.com/version/austinleegordon.vscode-schema-dot-org.svg)](https://marketplace.visualstudio.com/items?itemName=austinleegordon.vscode-schema-dot-org) [![Build Status](https://travis-ci.com/AustinLeeGordon/vscode-schema-dot-org.svg?branch=master)](https://travis-ci.com/AustinLeeGordon/vscode-schema-dot-org)

This extension includes [VS Code](https://code.visualstudio.com/) snippets for implementing [Schema.org](https://www.schema.org/) JSON-LD. Currently working on snippets following the [Google Structured Data Guide](https://developers.google.com/search/docs/guides/intro-structured-data). Snippets include properties that are both required and recommended by Google. Structured data is very flexible, and certain optional properties may have undesired results. Follow the [Google Structured Data Guide](https://developers.google.com/search/docs/guides/intro-structured-data) to ensure the intended use.

## Installation

Launch the Command Pallete with `Ctrl` + `Shift` + `P` (Windows/Linux) or `Cmd` + `Shift` + `P` (OSX) and type Extensions. From there, you can search for this extension and click `Install`. You can also install it on the [VS Code Extensions Marketplace](https://marketplace.visualstudio.com/items?itemName=austinleegordon.vscode-schema-dot-org).

## Supported Languages/File Extensions

* JavaScript (.js)
* TypeScript (.ts)
* JavaScript React (.jsx)
* TypeScript React (.tsx)

## Usage

Type part of a snippet and press `enter` or `tab`. If tab completion is disabled, go to `File` + `Preferences` + `Settings` (Windows/Linux) or `Code` + `Preferences` + `Settings` (OSX) and set `editor.tabCompletion` to `true`.

## Snippets

| Snippet | Content |
| ------- | ------- |
| `breadcrumb-list-schema` | Breadcrumb List Schema ([Google](https://developers.google.com/search/docs/data-types/breadcrumb), [Schema.org](https://schema.org/BreadcrumbList)) |
| `corporate-contact-schema` | Corporate Contact Schema ([Google](https://developers.google.com/search/docs/data-types/corporate-contact)) |
| `event-schema` | Event Schema ([Google](https://developers.google.com/search/docs/data-types/event), [Schema.org](https://schema.org/Event)) |
| `job-posting-schema` | Job Posting Schema ([Google](https://developers.google.com/search/docs/data-types/job-posting), [Schema.org](https://schema.org/JobPosting)) |
| `product-aggregate-offer-schema` | Product Aggregate Offer Schema ([Google](https://developers.google.com/search/docs/data-types/product), [Schema.org](https://schema.org/AggregateOffer)) |
| `product-schema` | Product Schema ([Google](https://developers.google.com/search/docs/data-types/product), [Schema.org](https://schema.org/Product)) |
| `recipe-schema` | Recipe Schema ([Google](https://developers.google.com/search/docs/data-types/recipe), [Schema.org](https://schema.org/Recipe)) |
| `script-json-ld` | JSON-LD Script Tag |
| `sitelinks-searchbox-schema` | Sitelinks Searchbox Schema ([Google](https://developers.google.com/search/docs/data-types/sitelinks-searchbox), [Schema.org](https://schema.org/WebSite)) |
| `video-schema` | Video Schema ([Google](https://developers.google.com/search/docs/data-types/video), [Schema.org](https://schema.org/VideoObject)) |

## Contributing

### Overview

The project utilizes a simple build system where varaibles can be defined in the `src/snippets.json` file and injected on build. Variables make it easier to add and maintain things such as ISO standards for tab completion suggestions.

#### Example:

```js
{
// ...
    "Schema Name": {
        "prefix": "schema-name",
        "description": "Schema Description",
        "body": [
            "{",
            "\t\"@context\": \"http://schema.org\",",
            "\t\"@type\": \"SchemaName\",",
            "\t\"examplekey\": \"${1:|<%example%>|}\"", // <%example%> will be replaced on build
            "}"
        ]
    },
// ...
}
```

Defining the variable in the `src/templates.js` file:

```js
// ...
function getTemplates() {

    // ...

    // Example
    let example = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];
    example = example.join(','); // Format

    return {
        example, // The returned key must be the same as the variable name used in the snippet: <%example%>
        // ...
    };
}

module.exports = getTemplates();
```

Now whenever you run `npm run build`, the renderer will replace every occurrence of `<%example%>` with `Suggestion 1,Suggestion 2,Suggestion 3` and export the file to the `snippets/` directory.

## License

MIT © [Austin Gordon](https://www.austinleegordon.com)