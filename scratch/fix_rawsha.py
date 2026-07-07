with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/alRawshaMenu.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('description":', 'description:')

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/alRawshaMenu.ts', 'w', encoding='utf-8') as f:
    f.write(content)
