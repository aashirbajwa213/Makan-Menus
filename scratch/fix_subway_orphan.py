import re

with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the broken block - it starts with { image: ... (missing name/slug/category)
# We need to find and remove the entire orphan Subway block in sandwiches-health
# The block starts after saladAtelierMenu } and before the next proper brand

# Find the pattern: a { that immediately has image/tags/desc without name/slug/category
# from around line 7084 in original numbering

# Better approach: remove the orphaned block (starting at the { that has the subway image URL)
subway_image_url = "https://images.unsplash.com/photo-1509722747041-616f39b57569"

if subway_image_url in content:
    # Find the block containing this image
    idx = content.find(subway_image_url)
    # Find the opening { before this index
    block_start = content.rfind('    {', 0, idx)
    # Find the closing } after the menu: subwayMenu reference
    # The menu item ends with ]\n    },
    block_end = content.find('\n    },', idx)
    if block_end != -1:
        block_end += len('\n    },')
        removed_block = content[block_start:block_end]
        # Verify this is the subway sandwiches-health block (should NOT have name/slug/category before the image)
        snippet = content[block_start:block_start+200]
        print("Block to remove starts with:")
        print(repr(snippet))
        print("\nRemoving...")
        content = content[:block_start] + '    },' + content[block_end:]
        with open('d:/Blogging Projects/Websites/Malaysia Menu/src/data/mockBrands.ts', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Done!")
    else:
        print("Could not find block end")
else:
    print("Subway image URL not found - already removed?")
