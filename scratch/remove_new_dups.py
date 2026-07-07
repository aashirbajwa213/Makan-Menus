import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# These are the NEW duplicate brand blocks to REMOVE
# Format: (slug, category) — these are the NEWER duplicates, NOT the originals
# Determined by higher line numbers = added later
duplicates_to_remove = [
    # bbqTownMenu: keep japanese-korean (line ~4847), remove buffet-dining (line ~7696)
    ("bbq-town", "buffet-dining"),
    
    # bienzMenu: keep pizza-italian (line ~5859), remove western-grilled (line ~6352)
    ("bienz", "western-grilled"),
    
    # burgerLobsterMenu: keep burger-lobster-klcc (line ~6437), remove burger-lobster (line ~6862)
    ("burger-lobster", "western-grilled"),
    
    # dominosPizzaMenu: keep fast-food (line ~332), remove pizza-italian (line ~5951)
    ("dominos-pizza", "pizza-italian"),
    
    # flourFireAndStoneMenu: keep coffee-bakeries (line ~1522), remove pizza-italian (line ~5842)
    ("flour-fire-stone", "pizza-italian"),
    
    # kbbArtisanSteakhouseMenu: keep kbb-artisan-steakhouse-ttdi (line ~6386), remove generic (line ~6811)
    ("kbb-artisan-steakhouse", "western-grilled"),
    
    # kennyHillsBakersMenu: keep ioi-city-mall slug (line ~1573), remove generic at line ~2385
    ("kenny-hills-bakers", "coffee-bakeries"),
    
    # krispyKremeMenu: keep krispy-kreme-malaysia slug (line ~1624), remove generic at line ~2459
    ("krispy-kreme", "coffee-bakeries"),
    
    # oBriensMenu: keep fast-food (line ~400), remove coffee-bakeries (line ~1437) and sandwiches-health (line ~7384)
    ("obriens", "coffee-bakeries"),
    ("obriens", "sandwiches-health"),
    
    # oldtownWhiteCoffeeMenu: keep coffee-bakeries (line ~2348), remove local-asian (line ~3423)
    ("oldtown-white-coffee", "local-asian"),
    
    # stuffdMenu: keep fast-food (line ~349), remove sandwiches-health (line ~7367)
    ("stuffd", "sandwiches-health"),
    
    # zukkiniMenu: keep coffee-bakeries (line ~1505), remove western-grilled (line ~6947)
    ("zukkini", "western-grilled"),
]

# We need to remove brand object blocks that contain these (slug, category) combos
# Strategy: split by brand blocks and filter out matching ones

# Use a regex to find complete brand object blocks
# Each brand block starts with { and ends with }
# We'll use a state machine approach

removed_count = 0
lines = content.split('\n')

# Track which (slug, category) combos we've seen - keep first occurrence, remove subsequent ones
seen_combos = {}  # (slug, cat) -> first_occurrence_line

# First pass: find line ranges for all brand blocks with slug+category
brand_info = []  # list of (start_line, end_line, slug, category)

i = 0
depth = 0
block_start = None
current_slug = None
current_cat = None
current_menu = None

for i, line in enumerate(lines):
    stripped = line.strip()
    
    if stripped.startswith('{') and block_start is None and depth == 0:
        depth = stripped.count('{') - stripped.count('}')
        if depth > 0:
            block_start = i
            current_slug = None
            current_cat = None
            current_menu = None
    elif block_start is not None:
        depth += stripped.count('{') - stripped.count('}')
        
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
            current_slug = None
            current_cat = None
            current_menu = None

# Now identify the lines to remove (the new duplicate blocks)
# For each (slug, category) pair to remove, find the LATER occurrence
lines_to_remove = set()

# Build a lookup of (slug, cat) -> list of (start, end) blocks
combo_blocks = {}
for (start, end, slug, cat, menu) in brand_info:
    key = (slug, cat)
    if key not in combo_blocks:
        combo_blocks[key] = []
    combo_blocks[key].append((start, end))

# Track which slugs we've already seen for specific menus that have same slug in different categories
seen_for_removal = {}
for (slug, cat) in duplicates_to_remove:
    key = (slug, cat)
    if key in combo_blocks:
        blocks = combo_blocks[key]
        # Remove all occurrences of this slug in this category EXCEPT the first one
        # But actually for duplicates_to_remove, the whole (slug, cat) combo is new/wrong
        # Just remove ALL of them (since the original is in a different cat or different slug)
        
        # Special handling for kennyHillsBakers and krispyKreme - 
        # they have different slugs so we need to check which slug to remove
        for (start, end) in blocks:
            for i in range(start, end + 1):
                lines_to_remove.add(i)
        removed_count += len(blocks)
        print(f"Marked for removal: /{cat}/{slug}-menu/ ({len(blocks)} block(s), lines {blocks})")
    else:
        print(f"WARNING: ({slug}, {cat}) not found in brand_info")

# Also handle the case of stuffd having double entries in fast-food (lines ~349 and ~451)
# Keep only the FIRST one in fast-food
stuffd_fast_food = [(s,e) for (s,e,sl,ca,_) in brand_info if sl == 'stuffd' and ca == 'fast-food']
if len(stuffd_fast_food) > 1:
    for (start, end) in stuffd_fast_food[1:]:
        for i in range(start, end + 1):
            lines_to_remove.add(i)
    print(f"Also removed duplicate stuffd in fast-food: {stuffd_fast_food[1:]}")

# Handle dominos-pizza double in fast-food
dominos_fast_food = [(s,e) for (s,e,sl,ca,_) in brand_info if sl == 'dominos-pizza' and ca == 'fast-food']
if len(dominos_fast_food) > 1:
    for (start, end) in dominos_fast_food[1:]:
        for i in range(start, end + 1):
            lines_to_remove.add(i)
    print(f"Also removed duplicate dominos-pizza in fast-food: {dominos_fast_food[1:]}")

# Write the cleaned file
new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]
new_content = '\n'.join(new_lines)

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\nDone! Removed {len(lines_to_remove)} lines ({removed_count} duplicate brand blocks)")
