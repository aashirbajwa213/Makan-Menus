import glob
import os

files = glob.glob('d:/Blogging Projects/Websites/Malaysia Menu/src/data/*Menu.ts')
fixed_count = 0

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    orig = content
    content = content.replace('name":', 'name:')
    content = content.replace('price":', 'price:')
    content = content.replace('category":', 'category:')
    content = content.replace('description":', 'description:')
    content = content.replace('slug":', 'slug:')
    
    if orig != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        fixed_count += 1

print(f"Fixed {fixed_count} files.")
