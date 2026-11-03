# KAGA Coin website

Static GitHub Pages site. No build or installation is required.

- `index.html`: existing content, navigation, community links and exchange listings.
- `styles.css`: responsive black, silver and white presentation.
- `script.js`: mobile navigation and current-section indication.
- `assets/kaga-night-lake.png`: generated alpine night landscape for the hero.
- `assets/kaga-night-{memory,vision,repurchase,details,exchange,community}.png`: six related viewpoints generated from the original hero image as a visual reference. Each lower chapter uses its own background with dark overlays and mobile framing; the VIP panel reuses the details viewpoint.

The hero contains a realistic snowy owl, rendered from eight transparent flight frames in `assets/kaga-snowy-owl-flight.png`. CSS cycles through the 4 × 2 atlas and moves the owl from the lower right to the upper left. Cool, subdued lighting matches the alpine night landscape. Reduced-motion preferences disable the flight and keep the owl still. The original logo file is unchanged.

## Add an exchange

In `index.html`, duplicate an `li.exchange-card` inside `ul.exchange-list`.
Update the exchange name, letter mark, trading pair, destination URL and accessible link label. Only add confirmed listings. Keep `target="_blank"` with `rel="noopener noreferrer"` on external trading links.

## Preview and publication

Open `index.html` locally, or serve the repository with a static web server. Review desktop and mobile layouts before publication. GitHub Pages settings and `CNAME` are unchanged. No deployment was performed as part of this redesign.
