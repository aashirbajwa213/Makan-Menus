import glob
import re
import os

files = glob.glob('d:/Blogging Projects/Websites/Malaysia Menu/src/data/*Menu.ts')
menu_vars = []
for f in files:
    name = os.path.basename(f).replace('.ts', '')
    menu_vars.append(name)

content = open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8').read()

brands = []
blocks = re.findall(r'\{(.*?)\}', content, re.DOTALL)
for b in blocks:
    m_match = re.search(r'menu:\s*([a-zA-Z0-9_]+)', b)
    if m_match and m_match.group(1) in menu_vars:
        s_match = re.search(r'slug:\s*[\'\"`]+([^\'\"`]+)[\'\"`]+', b)
        c_match = re.search(r'category:\s*[\'\"`]+([^\'\"`]+)[\'\"`]+', b)
        if s_match and c_match:
            slug = s_match.group(1)
            cat = c_match.group(1)
            url = f'https://makanmenus.my/{cat}/{slug}-menu/'
            if url not in brands:
                brands.append(url)

with open('d:/Blogging Projects/Websites/Malaysia Menu/scratch/273_urls.txt', 'w', encoding='utf-8') as f:
    for b in brands:
        f.write(b + '\n')

print(len(brands))
