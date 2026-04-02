# -*- coding: utf-8 -*-
import sys, json, urllib.request
sys.stdout.reconfigure(encoding='utf-8')

token = "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"
theme_id = "194015658318"
store = "claudegram-pro.myshopify.com"

req = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json?asset[key]=sections/header-group.json"
)
req.add_header("X-Shopify-Access-Token", token)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())
    content = data["asset"]["value"]

cfg = json.loads(content)
for sk, sv in cfg.get("sections", {}).items():
    for bk, bv in sv.get("blocks", {}).items():
        s = bv.get("settings", {})
        if "text" in s and "9.99" in s["text"]:
            s["text"] = "TaskNext.AI is LIVE - Founding rate 17/mo, locks for life"

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
    sys.stdout.write("Done: " + r["asset"]["updated_at"] + "\n")
