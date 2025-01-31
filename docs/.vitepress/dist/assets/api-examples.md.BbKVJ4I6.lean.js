import {
  u as p,
  c as r,
  af as k,
  j as s,
  t as e,
  k as t,
  a as i,
  o as d
} from './chunks/framework.FGXgO8Mc.js';
const u = JSON.parse(
    '{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'
  ),
  E = { name: 'api-examples.md' },
  y = Object.assign(E, {
    setup(o) {
      const { site: g, theme: n, page: l, frontmatter: h } = p();
      return (m, a) => (
        d(),
        r('div', null, [
          a[0] || (a[0] = k('', 6)),
          s('pre', null, e(t(n)), 1),
          a[1] ||
            (a[1] = s(
              'h3',
              { id: 'page-data', tabindex: '-1' },
              [
                i('Page Data '),
                s(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#page-data',
                    'aria-label': 'Permalink to "Page Data"'
                  },
                  '​'
                )
              ],
              -1
            )),
          s('pre', null, e(t(l)), 1),
          a[2] ||
            (a[2] = s(
              'h3',
              { id: 'page-frontmatter', tabindex: '-1' },
              [
                i('Page Frontmatter '),
                s(
                  'a',
                  {
                    class: 'header-anchor',
                    href: '#page-frontmatter',
                    'aria-label': 'Permalink to "Page Frontmatter"'
                  },
                  '​'
                )
              ],
              -1
            )),
          s('pre', null, e(t(h)), 1),
          a[3] ||
            (a[3] = s(
              'h2',
              { id: 'more', tabindex: '-1' },
              [
                i('More '),
                s(
                  'a',
                  { class: 'header-anchor', href: '#more', 'aria-label': 'Permalink to "More"' },
                  '​'
                )
              ],
              -1
            )),
          a[4] ||
            (a[4] = s(
              'p',
              null,
              [
                i('Check out the documentation for the '),
                s(
                  'a',
                  {
                    href: 'https://vitepress.dev/reference/runtime-api#usedata',
                    target: '_blank',
                    rel: 'noreferrer'
                  },
                  'full list of runtime APIs'
                ),
                i('.')
              ],
              -1
            ))
        ])
      );
    }
  });
export { u as __pageData, y as default };
