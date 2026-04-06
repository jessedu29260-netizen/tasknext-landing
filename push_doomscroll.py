import json, urllib.request, sys, os
sys.stdout.reconfigure(encoding="utf-8")

token = os.environ.get("SHOPIFY_TOKEN", "")
theme_id = "194015658318"
store = "claudegram-pro.myshopify.com"

with open(r"C:\Users\jesse\Desktop\tasknext-git\claudegram-landing-doomscroll.liquid", "r", encoding="cp1252", errors="replace") as f:
    content = f.read()

payload = json.dumps({"asset": {"key": "sections/claudegram-landing.liquid", "value": content}}).encode("utf-8")
req = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json",
    data=payload, method="PUT"
)
req.add_header("X-Shopify-Access-Token", token)
req.add_header("Content-Type", "application/json")
with urllib.request.urlopen(req) as resp:
    r = json.loads(resp.read())
    sys.stdout.write(f"PUSHED: {r['asset']['key']} at {r['asset']['updated_at']}\n")
