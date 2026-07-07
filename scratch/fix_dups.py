import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
seen_imports = set()

for line in lines:
    m = re.match(r'^import\s+\{\s*(.*?)\s*\}\s+from', line)
    if m:
        imp_name = m.group(1)
        if imp_name in seen_imports:
            continue # Skip duplicate import
        seen_imports.add(imp_name)
    new_lines.append(line)

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Duplicates removed.")
