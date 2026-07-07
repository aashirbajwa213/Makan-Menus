with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the orphaned Subway block - it starts at "{ name: "Pop Meals"" 
# but actually contains Subway data. We need to remove lines
# from the opening { before "image: subway_url" 
# to the closing }, before Pop Meals

# Strategy: find line with Subway's specific image URL (not shared)
# The orphan block has: image with subway url, tags Halal, desc "Eat Fresh"
# then a big block of menu items ending with "]" before "    },"

# Find "desc: \"Eat Fresh\"" - this is unique to Subway
target_start = None
target_end = None
for i, line in enumerate(lines):
    if 'desc: "Eat Fresh"' in line:
        # Find the { that opens this block (go back)
        for j in range(i, -1, -1):
            if lines[j].strip() == '{':
                target_start = j
                break
        # Find the closing }, 
        depth = 0
        for j in range(target_start, len(lines)):
            depth += lines[j].count('{') - lines[j].count('}')
            if depth <= 0 and j > target_start:
                target_end = j
                break
        break

if target_start and target_end:
    print(f"Found orphan Subway block: lines {target_start+1} to {target_end+1}")
    print(f"First line: {repr(lines[target_start].rstrip())}")
    print(f"Last line: {repr(lines[target_end].rstrip())}")
    
    # Remove these lines
    new_lines = lines[:target_start] + lines[target_end+1:]
    with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Removed!")
else:
    print("Could not find orphan block")
