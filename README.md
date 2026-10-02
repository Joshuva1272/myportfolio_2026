# Joshuva Jeemon — Portfolio

Live: https://joshuva1272.github.io/myportfolio_2026/

A single-page, terminal-themed portfolio hosted on GitHub Pages.

## Layout

| Path | Purpose |
| --- | --- |
| `site/template.html` | Editable source: all content, styles and script |
| `index.html` | Generated bundle that gets deployed (do not edit by hand) |
| `tools/pack.py` | Writes `site/template.html` back into `index.html` |
| `public/` | Static files copied next to `index.html` on deploy |

## Workflow

1. Edit `site/template.html`.
2. Run `python tools/pack.py` to regenerate `index.html`.
3. Preview locally: `python -m http.server 8765`, then open http://127.0.0.1:8765/
4. Commit and push to `main`. GitHub Actions deploys automatically and fails if `index.html` is out of date (`python3 tools/pack.py --check`).

## License

MIT, see [LICENSE](LICENSE).
