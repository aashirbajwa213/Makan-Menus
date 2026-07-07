import glob
import os

files = glob.glob('d:/Blogging Projects/Websites/Malaysia Menu/src/data/*Menu.ts')
fixed_count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if 'description":' in content:
        content = content.replace('description":', 'description:')
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        fixed_count += 1

print(f"Fixed {fixed_count} files.")
