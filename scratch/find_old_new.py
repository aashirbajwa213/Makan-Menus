import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find line numbers for each duplicate menu usage
duplicates_to_check = [
    'bbqTownMenu', 'bienzMenu', 'burgerLobsterMenu', 'dominosPizzaMenu',
    'flourFireAndStoneMenu', 'kbbArtisanSteakhouseMenu', 'kennyHillsBakersMenu',
    'krispyKremeMenu', 'oBriensMenu', 'oldtownWhiteCoffeeMenu',
    'stuffdMenu', 'zukkiniMenu'
]

for menu_var in duplicates_to_check:
    print(f"\n=== {menu_var} ===")
    for i, line in enumerate(lines, 1):
        if f'menu: {menu_var}' in line:
            # Get slug from nearby lines
            for j in range(max(0, i-10), i):
                if 'slug:' in lines[j]:
                    slug_m = re.search(r"slug:\s*['\"`]([^'\"`]+)['\"`]", lines[j])
                    cat_m = re.search(r"category:\s*['\"`]([^'\"`]+)['\"`]", lines[j])
                    if slug_m:
                        print(f"  Line {i}: slug={slug_m.group(1)}")
                    if cat_m:
                        print(f"  Line {i}: cat={cat_m.group(1)}")
            for j in range(max(0, i-15), i):
                line_s = lines[j].strip()
                if 'slug:' in line_s or 'category:' in line_s:
                    print(f"    L{j+1}: {line_s}")
            print(f"  >> menu used at line: {i}")
