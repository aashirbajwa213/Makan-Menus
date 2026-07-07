import re
import os

content = open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8').read()

brands = []
blocks = re.findall(r'\{(.*?)\}', content, re.DOTALL)
for b in blocks:
    s_match = re.search(r'slug:\s*[\'\"`]+([^\'\"`]+)[\'\"`]+', b)
    c_match = re.search(r'category:\s*[\'\"`]+([^\'\"`]+)[\'\"`]+', b)
    if s_match and c_match:
        slug = s_match.group(1)
        cat = c_match.group(1)
        url = f'https://makanmenus.my/{cat}/{slug}-menu/'
        if url not in brands:
            brands.append(url)

with open('scratch/urls.txt', 'w', encoding='utf-8') as f:
    for b in brands:
        f.write(b + '\n')
