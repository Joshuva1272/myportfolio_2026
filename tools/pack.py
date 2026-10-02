"""Regenerate index.html from site/template.html.

Usage: python tools/pack.py          (writes index.html)
       python tools/pack.py --check  (exit 1 if index.html is out of date)
"""
import json
import pathlib
import re
import sys

root = pathlib.Path(__file__).resolve().parent.parent
index = root / "index.html"
template = (root / "site" / "template.html").read_text(encoding="utf8")

html = index.read_text(encoding="utf8")
m = re.search(r'(<script type="__bundler/template">)(.*?)(</script>)', html, re.S)

# A literal "</" must not appear inside the script block, so escape the slash.
encoded = json.dumps(template, ensure_ascii=False).replace("</", "<" + chr(92) + "u002F")
new = html[: m.start(2)] + encoded + html[m.end(2):]

if "--check" in sys.argv:
    sys.exit(0 if new == html else 1)

index.write_bytes(new.encode("utf8"))
print("index.html updated" if new != html else "index.html unchanged")
