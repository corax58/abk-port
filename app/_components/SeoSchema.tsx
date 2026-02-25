import { SITE } from "@/lib/site";
import { SOCIAL_LINKS } from "@/data/socialLinks";

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: SITE.author.name,
        url: SITE.url,
        image: `${SITE.url}${SITE.socialImage}`,
        jobTitle: "Full Stack TypeScript Developer",
        email: `mailto:${SITE.author.email}`,
        telephone: SITE.author.phone,
        sameAs: SOCIAL_LINKS.map((link) => link.url),
      },
      {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        publisher: {
          "@type": "Person",
          name: SITE.author.name,
          url: SITE.url,
        },
      },
      {
        "@type": "WebPage",
        name: SITE.title,
        url: SITE.url,
        description: SITE.description,
        about: {
          "@type": "Person",
          name: SITE.author.name,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE.url}${SITE.socialImage}`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
