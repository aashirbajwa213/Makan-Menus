import csv, os, glob, re, json

csv1 = r'D:\Blogging Projects\Websites\Malaysia Menu\menu-addition\related_ubersuggest_menu.csv'
csv2 = r'D:\Blogging Projects\Websites\Malaysia Menu\menu-addition\related_ubersuggest_menu (1).csv'

all_names = []
for f in [csv1, csv2]:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                keyword = row.get('Keyword', '')
                if keyword:
                    # Clean the keyword
                    name = keyword.lower().replace('menu','').replace('malaysia','').replace('with price','').replace('prices','').replace('2026','').replace('2025','').replace('2024','')
                    name = re.sub(' +', ' ', name).strip().title()
                    all_names.append(name)

# Unique
unique = list(dict.fromkeys(all_names))

# Existing brands
ex_files = glob.glob(r'd:\Blogging Projects\Websites\Malaysia Menu\src\data\*Menu.ts')
ex_brands = [os.path.basename(f).replace('Menu.ts','').lower() for f in ex_files]

invalid = ['Design', 'Sarapan Pagi', 'Harga', 'Makanan', 'Resepi', 'Senarai', 'Buka Puasa', 'Ramadan', 'Delivery', 'Price', 'List']

to_add = []
for n in unique:
    clean_n = re.sub(r'[^a-z]', '', n.lower())
    # skip invalid
    if any(inv.lower() in clean_n for inv in invalid):
        continue
    # skip if exists
    if any(ex in clean_n or clean_n in ex for ex in ex_brands):
        continue
    to_add.append(n)

print(json.dumps(to_add[:10]))
