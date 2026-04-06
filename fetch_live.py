import json, urllib.request, sys, os
sys.stdout.reconfigure(encoding="utf-8")

token = os.environ.get("SHOPIFY_TOKEN", "")
theme_id = "194015658318"
store = "claudegram-pro.myshopify.com"

req = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json?asset[key]=sections/claudegram-landing.liquid"
)
req.add_header("X-Shopify-Access-Token", token)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())
    content = data["asset"]["value"]

with open(r"C:\Users\jesse\Desktop\tasknext-git\claudegram-landing-live.liquid", "w", encoding="utf-8") as f:
    f.write(content)
sys.stdout.write(f"Fetched: {len(content)} chars\n")
