import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

brand_info = []
i = 0
depth = 0
block_start = None
current_slug = None
current_cat = None
current_menu = None

for i, line in enumerate(lines):
    stripped = line.strip()
    
    opens = stripped.count('{') - stripped.count('}')
    
    if depth == 0 and opens > 0:
        depth = opens
        block_start = i
        current_slug = None
        current_cat = None
        current_menu = None
    elif block_start is not None:
        depth += opens
        
        sm = re.search(r"slug:\s*['\"`]([^'\"`]+)['\"`]", stripped)
        cm = re.search(r"category:\s*['\"`]([^'\"`]+)['\"`]", stripped)
        mm = re.search(r"menu:\s*([a-zA-Z0-9_]+)", stripped)
        
        if sm: current_slug = sm.group(1)
        if cm: current_cat = cm.group(1)
        if mm: current_menu = mm.group(1)
        
        if depth <= 0:
            if current_slug and current_cat and current_menu:
                brand_info.append((block_start, i, current_slug, current_cat, current_menu))
            block_start = None
            depth = 0

# Find all (slug, cat) combos and their line ranges
from collections import defaultdict
combo_blocks = defaultdict(list)
for (start, end, slug, cat, menu) in brand_info:
    combo_blocks[(slug, cat)].append((start, end))

# Find duplicates: same slug+category appearing more than once (keep first, remove rest)
# Also find: same slug in sandwiches-health that also exists in fast-food (Subway)
# And: same slug in fast-food appearing twice (McDonald's)
lines_to_remove = set()

# 1. Remove duplicate (slug, cat) entries - keep first, remove subsequent
for (slug, cat), blocks in combo_blocks.items():
    if len(blocks) > 1:
        print(f"Duplicate (slug={slug}, cat={cat}): {len(blocks)} entries, removing {len(blocks)-1}")
        for (start, end) in blocks[1:]:  # Remove all but first
            for j in range(start, end + 1):
                lines_to_remove.add(j)

# 2. Subway in sandwiches-health is a new duplicate - fast-food is original
subway_sandwich = combo_blocks.get(('subway', 'sandwiches-health'), [])
for (start, end) in subway_sandwich:
    for j in range(start, end + 1):
        lines_to_remove.add(j)
    print(f"Removing Subway from sandwiches-health (lines {start}-{end})")

# Write cleaned file
new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"\nDone! Removed {len(lines_to_remove)} lines total.")
