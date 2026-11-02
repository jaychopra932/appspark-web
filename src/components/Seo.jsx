import { useEffect } from "react";

const SITE_URL = "https://appspark-web-six.vercel.app";

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;

    const setMeta = (selector, attribute, value, create) => {
      let element = document.head.querySelector(selector);

      if (!element && create) {
        element = document.createElement("meta");

        if (selector.includes("property=")) {
          element.setAttribute(
            "property",
            selector.match(/property=["']([^"']+)/)?.[1] || "",
          );
        } else {
          element.setAttribute(
            "name",
            selector.match(/name=["']([^"']+)/)?.[1] || "",
          );
        }

        document.head.appendChild(element);
      }

      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    setMeta('meta[name="description"]', "content", description, true);
    setMeta(
      'meta[name="robots"]',
      "content",
      "index,follow,max-image-preview:large",
      true,
    );

    setMeta('meta[property="og:type"]', "content", type, true);
    setMeta('meta[property="og:title"]', "content", title, true);
    setMeta('meta[property="og:description"]', "content", description, true);
    setMeta('meta[property="og:url"]', "content", canonicalUrl, true);

    setMeta(
      'meta[name="twitter:card"]',
      "content",
      "summary_large_image",
      true,
    );
    setMeta('meta[name="twitter:title"]', "content", title, true);
    setMeta('meta[name="twitter:description"]', "content", description, true);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const schemaId = "appspark-page-schema";
    document.getElementById(schemaId)?.remove();

    const schema = document.createElement("script");
    schema.id = schemaId;
    schema.type = "application/ld+json";

    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: "AppSpark",
        url: SITE_URL,
      },
    });

    document.head.appendChild(schema);

    return () => document.getElementById(schemaId)?.remove();
  }, [title, description, path, type]);

  return null;
}
