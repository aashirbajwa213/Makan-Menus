import re
from collections import defaultdict

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all brand object blocks more carefully
# Split on top-level { } containing a 'slug:' key
lines = content.split('\n')

# Find all slug: lines and nearby category/menu
current = {}
results = []

for i, line in enumerate(lines):
    line_stripped = line.strip()
    
    sm = re.search(r'slug:\s*[\'"`]([^\'"` ,]+)[\'"`]', line_stripped)
    cm = re.search(r'category:\s*[\'"`]([^\'"` ,]+)[\'"`]', line_stripped)
    mm = re.search(r'menu:\s*([a-zA-Z0-9_]+)', line_stripped)
    
    if sm:
        current['slug'] = sm.group(1)
    if cm:
        current['cat'] = cm.group(1)
    if mm:
        current['menu'] = mm.group(1)
    
    # When we have all three, save it
    if 'slug' in current and 'cat' in current and 'menu' in current:
        results.append((current['slug'], current['cat'], current['menu']))
        current = {}

# Group by menu variable
menu_to_brands = defaultdict(list)
for slug, cat, menu in results:
    key = (cat, slug)
    if key not in menu_to_brands[menu]:
        menu_to_brands[menu].append(key)

# Find duplicates
print("=== MENUS SHARED ACROSS MULTIPLE CATEGORIES ===\n")
dups = {m: brands for m, brands in menu_to_brands.items() if len(brands) > 1}

if not dups:
    print("No cross-category duplicates found!")
else:
    for menu, brands in sorted(dups.items()):
        print(f"Menu variable: {menu}")
        for cat, slug in brands:
            print(f"  /{cat}/{slug}-menu/")
        print()

print(f"\nTotal menu variables with duplicates: {len(dups)}")
print(f"Total brand entries: {len(results)}")
print(f"Unique menu variables: {len(menu_to_brands)}")
