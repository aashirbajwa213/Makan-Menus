with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    content = f.read()

imports_to_add = [
    "import { donkaiMenu } from './donkaiMenu';",
    "import { wallaceMenu } from './wallaceMenu';",
    "import { dailyCoffeeMenu } from './dailyCoffeeMenu';",
    "import { kfcMenu } from './kfcMenu';"
]

for imp in imports_to_add:
    if imp not in content:
        content = imp + '\n' + content

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
    f.write(content)
