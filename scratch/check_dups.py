from collections import Counter
import re

content = open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8').read()
imports = re.findall(r'import\s+\{\s*(.*?)\s*\}\s+from', content)
counts = Counter(imports)
dups = {k: v for k, v in counts.items() if v > 1}
print('Duplicate imports:', dups)
