import json, urllib.request, sys

token = "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"
theme_id = "194015658318"
store = "claudegram-pro.myshopify.com"

with open(r"C:\Users\jesse\Desktop\tasknext-git\claudegram-landing-fixed.liquid", "r", encoding="utf-8") as f:
    content = f.read()

payload = json.dumps({"asset": {"key": "sections/claudegram-landing.liquid", "value": content}}).encode("utf-8")

req = urllib.request.Request(
    f"https://{store}/admin/api/2024-01/themes/{theme_id}/assets.json",
    data=payload,
    method="PUT"
)
req.add_header("X-Shopify-Access-Token", token)
req.add_header("Content-Type", "application/json")

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
        print(f"SUCCESS - Key: {data['asset']['key']} | Updated: {data['asset']['updated_at']}")
except Exception as e:
    print(f"ERROR: {e}")
