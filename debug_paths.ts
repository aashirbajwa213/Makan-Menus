import { brandMocks } from './src/data/mockBrands';

const categories = Object.keys(brandMocks);
const paths = categories.flatMap((catSlug) => {
  const brands = brandMocks[catSlug];
  return brands.map((brand) => ({
    params: {
      categorySlug: catSlug,
      brandSlug: `${brand.slug}-menu`,
    },
    props: { brand },
  }));
});

console.log(JSON.stringify(paths.map(p => `/${p.params.categorySlug}/${p.params.brandSlug}/`), null, 2));
