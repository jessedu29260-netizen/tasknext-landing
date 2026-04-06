import json, urllib.request, os

token = os.environ.get("SHOPIFY_TOKEN", "")
theme_id = "194015658318"
store = "claudegram-pro.myshopify.com"

req = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json?asset[key]=sections/header-group.json"
)
req.add_header("X-Shopify-Access-Token", token)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())
    content = data["asset"]["value"]

# Parse the JSON structure and update the announcement text
cfg = json.loads(content)
sections = cfg.get("sections", {})
for sk, sv in sections.items():
    blocks = sv.get("blocks", {})
    for bk, bv in blocks.items():
        settings = bv.get("settings", {})
        if "text" in settings and "9.99" in settings["text"]:
            print(f"Found: {settings['text']}")
            settings["text"] = "\u2726 TaskNext.AI is live \u2014 Founding rate \u00a317/mo, locks for life \u2192"
            print(f"Fixed to: {settings['text']}")

new_content = json.dumps(cfg, indent=2, ensure_ascii=False)

payload = json.dumps({"asset": {"key": "sections/header-group.json", "value": new_content}}).encode("utf-8")
req2 = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json",
    data=payload, method="PUT"
)
req2.add_header("X-Shopify-Access-Token", token)
req2.add_header("Content-Type", "application/json")
with urllib.request.urlopen(req2) as resp:
    r = json.loads(resp.read())
    print(f"Updated: {r['asset']['updated_at']}")
