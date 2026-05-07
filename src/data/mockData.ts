export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  image: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  itemCount: string;
  isOpen?: boolean;
}

export const navLinks = [
  { label: 'CATALOGUE', hasDropdown: true },
  { label: 'HEIRLOOM', hasDropdown: false },
  { label: 'PHILOSOPHY', hasDropdown: false },
  { label: 'EDITIONS', hasDropdown: false },
];

export const heroData = {
  title: 'MAISON PREMIÈRE',
  subtitle: 'An intimate maison of antique gold and Bengali heritage heirlooms, created for those who value tradition & radiance.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjsXsfv7scRIhslCiZ7rv54b3EN_yb96mZrSXaE2KIhlAO4_yx--Y-3JK1s1eCMCecujlpZjMNU-l-XRIMXcJOOJ6KFwCias_GrZPjgxBEDVzsZwsYJWBHfS2GMc5xFeOfCNtbxQycaLB05mrDjBN2F6wZIEFklKovOeU1xRSrbWJSwLoJI1K_sti8XTmfVm5Ah385_VI8JenajtpWZzYSpnvfwVhz0Ud4wv440HRxSYaUx-5b8CTory8nkKViF0ehDOWa0omT3Q',
  imageAlt: 'Cinematic close-up of antique gold Bengali bridal jewelry on warm skin',
  currentSlide: 1,
  totalSlides: 24,
};

export const products: Product[] = [
  {
    id: '1',
    category: 'KOLKATA HERITAGE',
    name: 'Antique 22-karat gold choker',
    price: '€1,550',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZEUQv4SyctuTq-mGfx-6mUMn04dxicSLCaEYISrWGSf09UaWq4dM0L0dtRg7xF27s6Z1RAxkjl_U-eSnDp99vKu4va8akbE6-QTGgl0IeOgXntzcf47rajC-ZKz2VVwJFSIZeDH2aBTrVSN3E3jy9yePfEimRbdNI1ZT5SoknvssUj6_bR7N3Mh9_wTIRqo5KqrUOuR2VMnpF0W_voCpIF3DlJb4j53zND1k-Koe5OcKIjxnIOJYhUTBXvYTiYZv6DAXo-B5Rqg',
    alt: 'Flat lay photograph of an antique gold choker necklace',
  },
  {
    id: '2',
    category: 'ARTISANAL GOLD',
    name: 'Handcrafted filigree bridal piece',
    price: '€845',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuos0zRHsbCbsgZQTcobJr9A7uNwCRpZHR6NEfveOn2IDKGUGRapEKWXUfrEqdJXrx5fBieY-jynCeORlkq5OV3fPvfXeEQchgzHoDq0Tt2V01zaGUSJUj03LZrUlq38mvkwy3Z-M5melWe13pS7AK61Mpn7mxzA9da1_mjvcX3Or2UAz7iRneSMVx2ajBhEJ64offo8HMIRbWVyupG53tmrUipqrWpEi9bgfVyCWf1lTnA9Zetwev68X-vssd0Y5TRMa1j3l0gw',
    alt: 'Close-up flat lay of a sculptural gold bridal piece',
  },
  {
    id: '3',
    category: 'HERITAGE MAKERS',
    name: 'Traditional textured gold bangle',
    price: '€965',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSTfPqdZ0hSQGucvtxLLVYxmGdwa9jhfwTbWVQvI_wkACkvfO0b6dhQUEumcSMLW_th1x04kjH1As_FjKRxFcRYtCPBep2AAPWhaRJDa66btvA5PgeHVWs2qBGUs9dysuSW8oBjCvYcThkFku6cK17iOWXOOHT8hPfZf0_sQ5uHaVAMSJ9MC41pmbRnACvjh2CTZpK_BWOFLAGFoeryB1snTq9czjeSzxzVwmM5nPRCFavF0CU5zQ4vUiACNNF9Bzt95tnrpmUgA',
    alt: 'Minimalist flat lay of a textured gold bangle',
  },
];

export const collectionData = {
  title: 'Modern Heirlooms',
  description: 'Curated artisanal gold pieces — crafted by master artisans in Kolkata, designed to transcend seasons.',
  limitedText: '*Limited Seasonal Collection',
  currentSlide: 1,
  totalSlides: 24,
};

export const categories: Category[] = [
  {
    id: 'earrings',
    name: 'earrings',
    description: 'Delicate handcrafted silhouettes designed to blend timeless artistry with modern elegance.',
    itemCount: '67 PIECES',
    isOpen: true,
  },
  {
    id: 'necklaces',
    name: 'necklaces',
    description: 'Sculptural forms that drape elegantly, capturing the essence of Kolkata atelier craftsmanship.',
    itemCount: '42 PIECES',
    isOpen: false,
  },
  {
    id: 'bangles',
    name: 'bangles',
    description: 'Ornate wrist pieces that whisper heritage through intricate filigree and textured gold.',
    itemCount: '38 PIECES',
    isOpen: false,
  },
  {
    id: 'rings',
    name: 'rings',
    description: 'Architectural bands and statement stones crafted for the modern Bengali muse.',
    itemCount: '55 PIECES',
    isOpen: false,
  },
  {
    id: 'heirlooms',
    name: 'heirlooms',
    description: 'Rare vintage finds from Bengal’s finest ateliers — pieces to be treasured across generations.',
    itemCount: '18 PIECES',
    isOpen: false,
  },
];

export const categorySectionData = {
  title: 'CATÈGORIES',
  mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlbaNxU71Vwa-038yCjaajh1xOvcv7fUdQgjVlP7cbLLPDvei7_yAF4-dRZBBGl7o9kruynFrw87ebhDh9cKVPl3Qcfjly3eNK-PZXPBZjcUgL0rjCR1ySuJ__2U2t9fYziUKDIX9tgYUREO7wNujVTuC9zePhtmuen-G34vn4vanh4DIgrozUWpVq8rzo6vQI6goF4dleV5-iAIDPS8AUO936SuHFJCrJNYsuiLS2pbJxIYByX9RMsCAmykm7-ghe0dsR-dXnoQ',
  mainImageAlt: 'Editorial profile shot of a Bengali bride in antique jewelry',
  featuredProduct: {
    category: 'KOLKATA HERITAGE',
    name: 'Traditional Gold Jhumkas',
    price: '€590',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo8oHEJ8TVVgWG7VgZKthPxAb3W0Xur3vlULrsxSjn-SnT8DnBkip_1xkrzT2--T0xdsejVGXGufchwIwsEwEEWygc_KEjD-nQL41yEs6JhGdPKh5mY-g8Sd1g3N8eRuY8ZzIzWb9gy0kWkVOD4KZoasDCk6veZBvNgcGQpNnGQwte-82MDBHPBiFgdbzLIXYKSJFLd5yWhgxNT4y-QnK9f0ZpQb6rbex7jUU4wAMPkKFZcZZ543Km5nsaoGcLrO3Mk1SZBpa6Ng',
    alt: 'Detailed product shot of gold jhumka earring',
  },
};

export const philosophyData = {
  title: 'OUR PHILOSOPHY',
  description: 'We create pieces that live with the body — carrying the soul of Bengal\'s rich artisanal heritage. Each form is guided by tradition, proportion, and tactility, allowing antique gold to speak through light, weight, and history. Nothing is excessive; every detail exists for a reason, crafted to be passed down through generations.',
  currentSlide: 2,
  totalSlides: 8,
  images: [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAArI0fd4-5QcqfDr8lTsPpjVx1lqJ6aZZLNUPUShbr4ACzkxJdbNFFHV3oRM8fGLrEKYquMcYdt4SjxuDxNviCpz8uiaulFngJus0Eka6BQy9oeOM7INNhP3-h-Zq7tKQABu_L_3a0Lgh2PeU3WGfr_bhV_PDYUUJJLExxd0pMBS5XYMZKH1jcL6vGGgMw3YoZpSrfMu8noCrtA1Ax_9RZNnzNaUWz8oLv0Y4pJ2Y7j9Td17E7PtBAZacOTgYwU9xOnWB3GVmnfA',
      alt: 'Faded sketch of jewelry',
      width: 192,
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBiH2h2i2W4a5gR3JWTQrvZNk9KdcbjIN1daxOkD-DHRx6szwyC4SbMBrzUibfMcqifPvCV2vz1eb1Y0CVWu5MfFxNmXQyJh2n1pWOhX4ImjOupM8g33E_nTeDS2i6z4BNM-zKZCP1sbBIh26F5yDy-QUGZRH1rL4mSONTZOCoowtVGQawYlrbUEbBtc-vZUL0N1OsXEWmRkCzJE1RKARySTa_LjCbmWrb2-vitVR9PIQYSr4tVF2rIkeauC2SWAjQIDaQ-Qby4A',
      alt: 'Antique gold collar',
      isFeatured: true,
      label: 'THE HERITAGE COLLAR',
      subLabel: '*FIRST EDITION',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlQIlJLqu8O7fOIfcHMkZRk21UOhDapixxM92xbGqyohuEzDG8SGk5hTbw37tPuwH7KxLnczgxAwBZsQSTa1oTDHjyZ7dL8w023-IcV77-wGX4RaGv5k8IofeF2SxHsYNyMWjKQEHeWKut9havWO_yrCak8_SuHOJBPVLqpyzfAC9PGGuPgiAZfiJ0CuCWF_QfzFWyrA0kDmL--xhquZh_wf0r6frbt4syQq19LHgpgoruNt-QD2CeayB35ztOI0um1dWd8UPOJA',
      alt: 'Close up of bride wearing chunky antique earrings',
      isLarge: true,
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMbZHZCw5eugY5DjbokVg30TSEVUadqbMIFHM6f2GmzUOp77-zJcOrKLs8fLJtllM07bAzjzy2Z-yK5Bv_kcflTHO2Qn9sRcqsFPwt6B4gUl4AwXtIGyYswglEi9us7RA9GsJ8nYczEmwHD3ADebkTe59-yHxOD2RBMxEzNo0Zyua9Y9zk_2qe3B4_q62kqXDT4Ywm7JhfZMWHq7IAvEMExuXPOqwfmh0VdECbHu5s35-igfC2JxcOywP3w3GqmjCowZjgUW5YgA',
      alt: 'Faded sketch of jewelry',
      width: 224,
    },
  ],
};

export const artisanData = {
  title: 'ARTISAN FOCUS',
  description: 'A study in tradition, texture, and quiet statement. Each curve is shaped by master artisans, allowing the piece to feel intentional yet deeply connected to our roots — an object designed not just to decorate, but to endure.',
  mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzhVCT4OW8gESTcIh33ESWDihXaHuDmnndFFYB8-7gD-DYdPTinW2jgSy20UzMEpH9vseqU2IQLOkId4opZpUXftnhrbWBRPr4X0Mepwu5saarGMPeBgPMjPQJyO3STLLfDKRdnSeWsNW_ud3R4-tp5D3k7k5B2-Mz2gfb9q9RliWPY-sy7TcH33shkD26U8bITPV8gdYFNl-AQuaiK3tdwN78JDcxp34DbsHrWfiPJp1m6G3IQf0Fndn4RzR98chNn9N5RUa1fw',
  mainImageAlt: "Bride's neck and shoulder showcasing layered antique gold necklaces",
  ringImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2gEuHrh9h-BFuIMldsM5tyr63aAT-gOLMkBnDW2-9nk4xg1-fZOVmOLlK3QqBQRwd2BJGEn4GiGDAY7PNfkfbS81s4y5JeougCDIpyoYZznsMbTKHqeRDwQ35GlDjDIF4ulZ59POtvhWGBIqza8oqGfXrmzi2JDO-AOxPe0ohLpbLLyBzE2jQNCfPtot9e96lszKmOdzzzScfKQNKRLLFtL8fENtvACa7U9m2HhWORqHxlLwZwOTx-NT8UZNpfArvo17NtJtzyA',
  ringImageAlt: 'Chunky gold architectural ring',
};

export const heritageEditData = {
  title: 'HERITAGE ÈDIT',
  tabs: ['bridal glow', 'evening mood', 'timeless classics'],
  activeTab: 'bridal glow',
  currentSlide: 1,
  totalSlides: 13,
  products: [
    {
      category: 'KOLKATA HERITAGE',
      name: 'Traditional 22-karat yellow gold Sita Haar necklace',
      price: '€3,450',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMLpae8NhFJbnulWQMtgpFUWKV_qTqxmuFpAcHm9PwB-1ebwBtl6jnrrAm_4L19cwAnW-7dU0qVWy4agxS8gi-hoerr40YzJ2AY3ENZ8hd6zF484-4BJv1nJ382zFAX3ysRPjv3uzlf-0lV8A8yiKo9xJvIDfRmSUy5hSBt1L2XHsXywaqIMK8nwQrdz9YdPLA4GigU9UpqYByiukx5ePlMxJDQmXo9pwAOkTonowsqZc2JUgC6EahglEwZ_n40elL2CqiNxksuA',
      alt: 'Antique gold necklace',
      isLarge: true,
    },
    {
      category: 'ARTISANAL GOLD',
      name: 'Handcrafted filigree bangles',
      price: '€1,210',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvA7RSMEfumBIf6hZcJQM_pp5iAeKBqXwIsmLzpcbD2l-piWpanjXt5PznTUpFTCxHgZLcb9c56NbBo5dxwjzSBLO7Jt1tzPyx_FleQ4UDly2OoF6nC2y3RrJW9Z230sUTfm-DDtUhh8tOh29N_dpOONvc2gu-L5JCbz7kSmQ8RLVrNfTiUw2aVECjRmWy6gPfyKgdCTX-yu8hS1mFLw2jwu_wZF8u2rqjCRc-0OlZcUW_UqIGdKIDVQBdalLmqWVY6O3Qmj7KPQ',
      alt: "Bride's hands showcasing gold bangles",
      isMedium: true,
    },
    {
      category: 'HERITAGE MAKERS',
      name: 'Antique gold vermeil traditional brooch',
      price: '€670',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8Z8dzBdldVJOn3rHwVbaT4VcBKSKEhDiqVWu6eeLZu9-OFJbpZkWXBWk4zlgTT1RRsNKQ-NbfDBZubj_Zd50yAUP2oEqfAGluEGl4PUnVEZBEpQmu88_3Yv0eMIxtQ-WQ5Bxwb4ePU-gwSaxmIxuOVvBJD6iwwdYH9nKIC3VmClQsuNHgkASxq8Fpqa7zzzoVVUVTBATdJbgRvM-oJofLO9mj7391vPV3XrpiXjELVOVGzCTR655CBkxcA56lg1wyPI4tSaokQ',
      alt: 'Antique gold brooch',
      isSmall: true,
    },
  ],
};

export const finalStatementData = {
  title: 'HEIRLOOM STATEMENTS,\nBOLD TRADITION,\nJEWELRY THAT MOVES\nWITH HISTORY',
  description: 'A LIMITED HERITAGE PIECE DESIGNED AS A STUDY IN BENGALI TRADITION AND CRAFT.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4elIOyR3kE3cVp8xbF0IKZahtyan0_8G-p5DvG6vYE0xHvJxauUAG-4HW__7f3qlKZGfqnGKa6M55PTRozAIJDknw987moz_EQecHnjAVg1PtKarknCCNEUm4dNJpxjbwYkfjcV3fUeY8RCXtGW-BBPJXIzXCymsuUajJS4i9A4GV3Igw3BADa8JrNk73oOH3hsXCKS1kyCx8s4kVBvJQZyIaca_IOf5fuoah83Fz_oEiLZmOPAxR0e8zt1MBg-UmA7jxpV3izw',
  imageAlt: 'Editorial close-up of intricate gold bridal earrings',
};