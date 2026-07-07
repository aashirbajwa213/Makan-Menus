import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

slug_lines = []
for i, line in enumerate(lines):
    match = re.search(r"slug:\s*['\"`]([^'\"`]+)['\"`]", line)
    if match:
        slug_lines.append((i, match.group(1)))

brands = []
for idx, slug in slug_lines:
    # Walk backward
    start_idx = idx
    depth = 1
    for j in range(idx - 1, -1, -1):
        if '{' in lines[j] and '}' not in lines[j]:
            depth -= 1
        if '}' in lines[j] and '{' not in lines[j]:
            depth += 1
            
        if re.match(r'^\s*\{\s*$', lines[j]) or re.match(r'^\s*\{\s*name:', lines[j]):
            start_idx = j
            break
            
    # Walk forward
    end_idx = idx
    for j in range(idx + 1, len(lines)):
        if re.match(r'^\s*\},?\s*$', lines[j]):
            if lines[j].startswith('  }') or lines[j].startswith('    }'):
                end_idx = j
                break
                
    brands.append({
        'slug': slug,
        'start': start_idx,
        'end': end_idx
    })

seen_slugs = set()
lines_to_remove = set()
removed_count = 0

for b in brands:
    slug = b['slug']
    if slug in seen_slugs:
        print(f"Removing duplicate slug: {slug} (Lines {b['start']+1}-{b['end']+1})")
        for i in range(b['start'], b['end'] + 1):
            lines_to_remove.add(i)
        removed_count += 1
    else:
        seen_slugs.add(slug)

print(f"\nTotal duplicate brands removed: {removed_count}")
print(f"Total lines to remove: {len(lines_to_remove)}")

new_lines = [line for i, line in enumerate(lines) if i not in lines_to_remove]
with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("Saved directly to mockBrands.ts")
