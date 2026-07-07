import re
from collections import defaultdict

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

brand_blocks = []
block_start = None
depth = 0
current_slug = None
current_cat = None
current_name = None

for i, line in enumerate(lines):
    stripped = line.strip()
    
    opens = stripped.count('{') - stripped.count('}')
    
    if depth == 0 and opens > 0:
        depth = opens
        block_start = i
        current_slug = None
        current_cat = None
        current_name = None
    elif block_start is not None:
        depth += opens
        
        nm = re.search(r"name:\s*['\"`]([^'\"`]+)['\"`]", stripped)
        sm = re.search(r"slug:\s*['\"`]([^'\"`]+)['\"`]", stripped)
        cm = re.search(r"category:\s*['\"`]([^'\"`]+)['\"`]", stripped)
        
        if nm: current_name = nm.group(1)
        if sm: current_slug = sm.group(1)
        if cm: current_cat = cm.group(1)
        
        if depth <= 0:
            if current_slug:
                brand_blocks.append({
                    'start': block_start,
                    'end': i,
                    'name': current_name,
                    'slug': current_slug,
                    'cat': current_cat
                })
            block_start = None
            depth = 0

slugs_seen = defaultdict(list)
for b in brand_blocks:
    slugs_seen[b['slug']].append(b)

duplicates = {slug: blocks for slug, blocks in slugs_seen.items() if len(blocks) > 1}

print(f"Found {len(brand_blocks)} total brands.")
print(f"Found {len(duplicates)} slugs that appear multiple times:")

lines_to_remove = set()
for slug, blocks in duplicates.items():
    print(f"\nSlug: {slug} (appears {len(blocks)} times)")
    for idx, b in enumerate(blocks):
        status = "KEEP (First)" if idx == 0 else "REMOVE (Duplicate)"
        print(f"  - {status}: {b['name']} in '{b['cat']}' (Lines {b['start']+1}-{b['end']+1})")
        if idx > 0:
            for j in range(b['start'], b['end'] + 1):
                lines_to_remove.add(j)

print(f"\nTotal lines to remove: {len(lines_to_remove)}")

# Let's actually create the cleaned version
new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]
with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands_clean.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("Saved clean version to mockBrands_clean.ts")
