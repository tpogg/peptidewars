// Cloudflare Pages Function — GET /api/peptides
// Returns full peptide database with optional filtering
// CORS enabled for ezlooksmaxxing.com integration

const PEPTIDES = [
  {
    id: "bpc157",
    name: "BPC-157",
    aka: "Body Protection Compound-157",
    category: "healing",
    tags: ["healing", "gut", "tendon", "anti-inflammatory", "skin"],
    aminoAcids: 15,
    molecularWeight: "1419.5 g/mol",
    halfLife: "~4 hours",
    administration: "Subcutaneous, Oral",
    status: "Research",
    description: "Pentadecapeptide derived from human gastric juice with remarkable healing properties across tendons, ligaments, muscles, intestinal lining, bone, and brain.",
    mechanism: "Upregulates growth factor expression (EGF, NGF, VEGF), promotes angiogenesis, modulates nitric oxide system",
    primaryUse: "Tissue repair, wound healing, gut healing",
    aestheticBenefits: ["Accelerates skin wound healing", "Reduces scarring", "Improves skin recovery after procedures", "Gut health for clearer skin"],
    skinBenefits: ["Wound healing acceleration", "Collagen support via growth factor upregulation", "Anti-inflammatory skin effects", "Scar reduction"],
    facialRelevance: {
      skinQuality: 8,
      antiAging: 5,
      healing: 10,
      collagen: 7,
      inflammation: 9,
      jawline: 0,
      lips: 0,
      eyes: 3,
      hair: 4,
    },
    dosageRange: "200-500 mcg 1-2x daily",
    popularity: 98,
  },
  {
    id: "ghkcu",
    name: "GHK-Cu",
    aka: "Copper Peptide GHK",
    category: "cosmetic",
    tags: ["skin", "collagen", "anti-aging", "hair", "wound-healing"],
    aminoAcids: 3,
    molecularWeight: "403.9 g/mol",
    halfLife: "~1 hour",
    administration: "Topical, Subcutaneous",
    status: "Available",
    description: "Naturally occurring copper-binding tripeptide that declines 60% by age 60. One of the most studied peptides in dermatology with broad regenerative effects.",
    mechanism: "Stimulates collagen/GAG synthesis, promotes stem cell proliferation, increases SOD and catalase, modulates NF-kB",
    primaryUse: "Skin rejuvenation, wound healing, hair growth",
    aestheticBenefits: ["Increases collagen by 70%", "Reduces wrinkles and fine lines", "Improves skin elasticity and firmness", "Stimulates hair follicle growth", "Reduces photodamage"],
    skinBenefits: ["Collagen I, III, IV synthesis", "Glycosaminoglycan production", "Antioxidant enzyme activation", "Skin remodeling gene activation"],
    facialRelevance: {
      skinQuality: 10,
      antiAging: 10,
      healing: 8,
      collagen: 10,
      inflammation: 6,
      jawline: 2,
      lips: 3,
      eyes: 7,
      hair: 9,
    },
    dosageRange: "Topical: 1-2%. SC: 50-200 mcg daily",
    popularity: 88,
  },
  {
    id: "argireline",
    name: "Argireline",
    aka: "Acetyl Hexapeptide-3",
    category: "cosmetic",
    tags: ["anti-wrinkle", "skin", "expression-lines", "eyes", "forehead"],
    aminoAcids: 6,
    molecularWeight: "889.0 g/mol",
    halfLife: "Topical sustained",
    administration: "Topical",
    status: "Commercially Available",
    description: "Known as 'topical Botox' — inhibits SNARE complex formation to reduce muscle contraction and expression lines without injections.",
    mechanism: "Competes with SNAP-25 to inhibit SNARE complex, reducing neurotransmitter release at neuromuscular junction",
    primaryUse: "Anti-wrinkle, expression line reduction",
    aestheticBenefits: ["Reduces crow's feet around eyes", "Smooths forehead lines", "Softens frown lines (11s)", "Non-invasive Botox alternative"],
    skinBenefits: ["30% wrinkle depth reduction in 30 days", "No systemic effects", "Safe for continuous use"],
    facialRelevance: {
      skinQuality: 7,
      antiAging: 9,
      healing: 1,
      collagen: 2,
      inflammation: 1,
      jawline: 0,
      lips: 2,
      eyes: 10,
      hair: 0,
    },
    dosageRange: "5-10% topical formulation",
    popularity: 79,
  },
  {
    id: "matrixyl",
    name: "Matrixyl",
    aka: "Palmitoyl Pentapeptide-4",
    category: "cosmetic",
    tags: ["collagen", "anti-wrinkle", "skin", "elasticity"],
    aminoAcids: 5,
    molecularWeight: "802.1 g/mol",
    halfLife: "Topical sustained",
    administration: "Topical",
    status: "Commercially Available",
    description: "One of the most clinically validated cosmetic peptides. Mimics collagen fragment signals to stimulate fibroblasts to produce new collagen.",
    mechanism: "Mimics matrikine signals from collagen breakdown, stimulating fibroblasts to produce collagen I, III, IV and fibronectin",
    primaryUse: "Anti-wrinkle, collagen boosting, skin rejuvenation",
    aestheticBenefits: ["Reduces wrinkle depth up to 68%", "Doubles collagen production", "Non-irritating retinol alternative", "Improves skin firmness"],
    skinBenefits: ["Collagen synthesis stimulation", "Fibronectin production", "Wrinkle depth reduction", "Skin density improvement"],
    facialRelevance: {
      skinQuality: 9,
      antiAging: 9,
      healing: 3,
      collagen: 10,
      inflammation: 2,
      jawline: 3,
      lips: 4,
      eyes: 7,
      hair: 0,
    },
    dosageRange: "0.001-0.005% in formulations",
    popularity: 82,
  },
  {
    id: "tb500",
    name: "TB-500",
    aka: "Thymosin Beta-4 Fragment",
    category: "healing",
    tags: ["healing", "anti-inflammatory", "hair", "tissue-repair", "skin"],
    aminoAcids: 43,
    molecularWeight: "4963 g/mol",
    halfLife: "~2-3 hours",
    administration: "Subcutaneous, Intramuscular",
    status: "Research",
    description: "Synthetic fraction of Thymosin Beta-4. Critical role in tissue repair, cell migration, blood vessel growth, and inflammation regulation.",
    mechanism: "Promotes cell migration via actin sequestration, upregulates cell-building proteins, reduces pro-inflammatory cytokines, activates hair follicle stem cells",
    primaryUse: "Tissue repair, anti-inflammation, hair growth",
    aestheticBenefits: ["Promotes hair regrowth", "Reduces skin scarring", "Accelerates wound healing", "Reduces puffiness/inflammation"],
    skinBenefits: ["Hair follicle stem cell activation", "Wound healing acceleration", "Anti-inflammatory effects", "Reduced scarring"],
    facialRelevance: {
      skinQuality: 7,
      antiAging: 5,
      healing: 9,
      collagen: 5,
      inflammation: 9,
      jawline: 0,
      lips: 0,
      eyes: 3,
      hair: 10,
    },
    dosageRange: "2-5 mg 2x weekly",
    popularity: 92,
  },
  {
    id: "semaglutide",
    name: "Semaglutide",
    aka: "Ozempic / Wegovy",
    category: "metabolic",
    tags: ["weight-loss", "jawline", "facial-definition", "metabolic"],
    aminoAcids: 31,
    molecularWeight: "4113.6 g/mol",
    halfLife: "~7 days",
    administration: "Subcutaneous weekly, Oral daily",
    status: "FDA Approved",
    description: "GLP-1 receptor agonist that has revolutionized obesity treatment. Achieves 15-20% weight loss, dramatically improving facial definition and jawline.",
    mechanism: "GLP-1 receptor agonist — stimulates insulin, suppresses glucagon, slows gastric emptying, activates hypothalamic satiety centers",
    primaryUse: "Weight management, type 2 diabetes",
    aestheticBenefits: ["Dramatic jawline definition through fat loss", "Reduced facial puffiness", "Improved facial contours", "Reduced double chin"],
    skinBenefits: ["Facial fat reduction for definition", "Metabolic health improves skin quality", "Reduced inflammation"],
    facialRelevance: {
      skinQuality: 4,
      antiAging: 3,
      healing: 1,
      collagen: 1,
      inflammation: 5,
      jawline: 10,
      lips: 0,
      eyes: 3,
      hair: 1,
    },
    dosageRange: "0.25-2.4 mg weekly (prescription)",
    popularity: 100,
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    aka: "Mounjaro / Zepbound",
    category: "metabolic",
    tags: ["weight-loss", "jawline", "facial-definition", "metabolic"],
    aminoAcids: 39,
    molecularWeight: "4813.5 g/mol",
    halfLife: "~5 days",
    administration: "Subcutaneous weekly",
    status: "FDA Approved",
    description: "Dual GIP/GLP-1 receptor agonist achieving up to 22.5% weight loss. Superior facial definition results compared to GLP-1 monotherapy.",
    mechanism: "Dual GIP and GLP-1 receptor agonist — activates both incretin pathways, enhances insulin sensitivity, reduces appetite",
    primaryUse: "Obesity, type 2 diabetes",
    aestheticBenefits: ["Superior jawline sculpting through fat loss", "Facial contouring", "Reduced buccal fat appearance", "Defined cheekbones"],
    skinBenefits: ["Facial fat reduction", "Improved metabolic markers enhance skin", "Anti-inflammatory systemic effects"],
    facialRelevance: {
      skinQuality: 4,
      antiAging: 3,
      healing: 1,
      collagen: 1,
      inflammation: 5,
      jawline: 10,
      lips: 0,
      eyes: 3,
      hair: 1,
    },
    dosageRange: "2.5-15 mg weekly (prescription)",
    popularity: 97,
  },
  {
    id: "epithalon",
    name: "Epithalon",
    aka: "Epitalon",
    category: "anti-aging",
    tags: ["anti-aging", "telomere", "longevity", "skin", "melatonin"],
    aminoAcids: 4,
    molecularWeight: "390.35 g/mol",
    halfLife: "~2-3 hours",
    administration: "Subcutaneous",
    status: "Research",
    description: "Synthetic tetrapeptide that activates telomerase to maintain telomere length. Key compound in longevity and anti-aging research with 35+ years of study.",
    mechanism: "Activates telomerase (hTERT), stimulates pineal melatonin production, increases antioxidant enzymes",
    primaryUse: "Anti-aging, telomere biology, longevity",
    aestheticBenefits: ["Slows cellular aging of skin", "Improves sleep quality (melatonin) for skin repair", "Antioxidant protection against photoaging", "Cellular rejuvenation"],
    skinBenefits: ["Telomere maintenance in skin cells", "Melatonin-driven overnight skin repair", "Antioxidant enzyme activation", "Cellular longevity"],
    facialRelevance: {
      skinQuality: 8,
      antiAging: 10,
      healing: 4,
      collagen: 5,
      inflammation: 4,
      jawline: 0,
      lips: 2,
      eyes: 5,
      hair: 3,
    },
    dosageRange: "5-10 mg daily for 10-20 day cycles",
    popularity: 70,
  },
  {
    id: "selank",
    name: "Selank",
    aka: "TP-7",
    category: "nootropic",
    tags: ["anxiety", "stress", "skin-stress", "cortisol", "immune"],
    aminoAcids: 7,
    molecularWeight: "751.9 g/mol",
    halfLife: "~1-3 minutes (effects prolonged)",
    administration: "Intranasal",
    status: "Approved (Russia)",
    description: "Synthetic anxiolytic peptide that reduces stress without sedation. Stress reduction directly improves skin quality by lowering cortisol.",
    mechanism: "Modulates GABA, serotonin, dopamine systems. Increases BDNF, stabilizes enkephalins, modulates IL-6",
    primaryUse: "Anxiety reduction, cognitive enhancement",
    aestheticBenefits: ["Reduces stress-related skin aging", "Lowers cortisol for better skin", "Improves sleep for skin repair", "Reduces stress-induced acne"],
    skinBenefits: ["Cortisol reduction → less collagen breakdown", "Improved sleep quality", "Immune modulation for skin health", "Stress-acne prevention"],
    facialRelevance: {
      skinQuality: 7,
      antiAging: 6,
      healing: 3,
      collagen: 4,
      inflammation: 6,
      jawline: 0,
      lips: 0,
      eyes: 4,
      hair: 3,
    },
    dosageRange: "250-500 mcg intranasal 2-3x daily",
    popularity: 65,
  },
  {
    id: "pt141",
    name: "PT-141",
    aka: "Bremelanotide (Vyleesi)",
    category: "melanocortin",
    tags: ["tanning", "skin-tone", "melanin"],
    aminoAcids: 7,
    molecularWeight: "1025.2 g/mol",
    halfLife: "~2.7 hours",
    administration: "Subcutaneous",
    status: "FDA Approved (for HSDD)",
    description: "Melanocortin receptor agonist. While FDA-approved for sexual dysfunction, the melanocortin pathway also influences skin pigmentation and facial appearance.",
    mechanism: "MC4R agonist activating CNS pathways. Related compounds (MT-II) stimulate melanogenesis via MC1R",
    primaryUse: "HSDD treatment",
    aestheticBenefits: ["Melanocortin pathway activation", "Related to skin tone modulation research"],
    skinBenefits: ["Melanocortin pathway research"],
    facialRelevance: {
      skinQuality: 3,
      antiAging: 2,
      healing: 1,
      collagen: 1,
      inflammation: 2,
      jawline: 0,
      lips: 0,
      eyes: 0,
      hair: 0,
    },
    dosageRange: "1.75 mg as needed (prescription)",
    popularity: 76,
  },
  {
    id: "ll37",
    name: "LL-37",
    aka: "Cathelicidin",
    category: "antimicrobial",
    tags: ["acne", "antimicrobial", "skin-infection", "wound-healing", "immune"],
    aminoAcids: 37,
    molecularWeight: "4493.3 g/mol",
    halfLife: "~4-6 hours",
    administration: "Subcutaneous, Topical",
    status: "Research",
    description: "The only human cathelicidin antimicrobial peptide. Kills bacteria, modulates immune response, and promotes wound healing. Key for acne and skin infections.",
    mechanism: "Broad-spectrum antimicrobial via membrane disruption, TLR signaling immunomodulation, angiogenesis promotion, biofilm disruption, LPS neutralization",
    primaryUse: "Antimicrobial defense, wound healing, skin infections",
    aestheticBenefits: ["Fights acne-causing bacteria", "Clears skin infections", "Promotes clearer complexion", "Wound healing for procedure recovery"],
    skinBenefits: ["Anti-acne antimicrobial action", "Biofilm disruption on skin", "Immune modulation for skin health", "Wound healing promotion"],
    facialRelevance: {
      skinQuality: 9,
      antiAging: 3,
      healing: 8,
      collagen: 2,
      inflammation: 7,
      jawline: 0,
      lips: 0,
      eyes: 2,
      hair: 1,
    },
    dosageRange: "Variable research protocols",
    popularity: 60,
  },
  {
    id: "aod9604",
    name: "AOD-9604",
    aka: "Advanced Obesity Drug",
    category: "metabolic",
    tags: ["fat-loss", "jawline", "facial-definition", "body-composition"],
    aminoAcids: 15,
    molecularWeight: "1815.1 g/mol",
    halfLife: "~30 minutes",
    administration: "Subcutaneous, Oral",
    status: "Research / TGA Listed",
    description: "Modified fragment of human growth hormone (aa 177-191) designed for fat-reducing effects without growth-promoting or diabetogenic effects.",
    mechanism: "Stimulates lipolysis and inhibits lipogenesis via beta-3 adrenergic receptor. Mimics fat-burning properties of GH without affecting blood sugar",
    primaryUse: "Fat loss, body composition",
    aestheticBenefits: ["Facial fat reduction for definition", "Jawline sculpting", "Reduced submental (double chin) fat", "Body contouring"],
    skinBenefits: ["Targeted fat reduction", "No effect on IGF-1 or blood glucose"],
    facialRelevance: {
      skinQuality: 2,
      antiAging: 2,
      healing: 1,
      collagen: 1,
      inflammation: 2,
      jawline: 8,
      lips: 0,
      eyes: 2,
      hair: 0,
    },
    dosageRange: "250-500 mcg daily",
    popularity: 74,
  },
  {
    id: "cjc1295",
    name: "CJC-1295 + Ipamorelin",
    aka: "GH Secretagogue Stack",
    category: "growth-hormone",
    tags: ["anti-aging", "collagen", "skin", "hair", "body-composition", "sleep"],
    aminoAcids: 30,
    molecularWeight: "3367.9 g/mol",
    halfLife: "6-8 days (with DAC)",
    administration: "Subcutaneous",
    status: "Research",
    description: "The gold standard GH secretagogue combination. CJC-1295 provides sustained GH elevation while Ipamorelin adds selective pulsatile GH release without cortisol or prolactin spikes.",
    mechanism: "CJC-1295: GHRH analogue for sustained GH release. Ipamorelin: selective ghrelin receptor agonist for pulsatile GH without side effects",
    primaryUse: "GH optimization, anti-aging, body composition",
    aestheticBenefits: ["Increased collagen for skin elasticity", "Improved skin thickness and quality", "Better sleep for skin repair", "Hair quality improvement", "Fat loss for facial definition"],
    skinBenefits: ["GH-mediated collagen synthesis", "Skin thickness improvement", "Enhanced overnight repair via deep sleep", "IGF-1 driven cellular renewal"],
    facialRelevance: {
      skinQuality: 8,
      antiAging: 9,
      healing: 6,
      collagen: 8,
      inflammation: 3,
      jawline: 5,
      lips: 3,
      eyes: 5,
      hair: 7,
    },
    dosageRange: "CJC: 1-2mg weekly. Ipam: 100-300mcg 1-3x daily",
    popularity: 83,
  },
  {
    id: "dsip",
    name: "DSIP",
    aka: "Delta Sleep-Inducing Peptide",
    category: "sleep",
    tags: ["sleep", "recovery", "skin-repair", "stress", "cortisol"],
    aminoAcids: 9,
    molecularWeight: "848.8 g/mol",
    halfLife: "~7-8 minutes",
    administration: "Subcutaneous, Intranasal",
    status: "Research",
    description: "Naturally occurring neuropeptide that promotes delta wave sleep. Deep sleep is when skin performs most of its repair and collagen synthesis.",
    mechanism: "Modulates GABA-A receptors, influences cortisol and beta-endorphin levels, promotes delta wave sleep architecture",
    primaryUse: "Sleep optimization, stress modulation",
    aestheticBenefits: ["Enhances overnight skin repair via deep sleep", "Reduces dark circles from better sleep", "Lowers cortisol for skin health", "Improves skin recovery"],
    skinBenefits: ["Delta sleep maximizes skin repair", "Cortisol reduction", "Growth hormone release during deep sleep", "Reduced under-eye darkness"],
    facialRelevance: {
      skinQuality: 7,
      antiAging: 6,
      healing: 5,
      collagen: 5,
      inflammation: 4,
      jawline: 0,
      lips: 0,
      eyes: 8,
      hair: 3,
    },
    dosageRange: "100-300 mcg before sleep",
    popularity: 55,
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    aka: "Egrifta",
    category: "growth-hormone",
    tags: ["anti-aging", "fat-loss", "collagen", "cognitive", "jawline"],
    aminoAcids: 44,
    molecularWeight: "5135.9 g/mol",
    halfLife: "26-38 minutes",
    administration: "Subcutaneous daily",
    status: "FDA Approved",
    description: "Only FDA-approved GHRH analogue. Stimulates physiological GH release for visceral fat reduction, cognitive improvement, and skin quality enhancement.",
    mechanism: "GHRH receptor agonist stimulating pulsatile GH secretion. Promotes lipolysis, improves IGF-1 levels, neuroprotective",
    primaryUse: "Visceral fat reduction, GH optimization",
    aestheticBenefits: ["Visceral fat loss improves facial definition", "GH-mediated skin quality improvement", "Collagen synthesis support", "Cognitive clarity"],
    skinBenefits: ["Physiological GH for skin renewal", "Fat loss for facial contours", "Maintained GH pulsatility"],
    facialRelevance: {
      skinQuality: 7,
      antiAging: 8,
      healing: 4,
      collagen: 7,
      inflammation: 3,
      jawline: 7,
      lips: 2,
      eyes: 4,
      hair: 4,
    },
    dosageRange: "2 mg daily (prescription)",
    popularity: 78,
  },
];

// Recommendation engine: maps facial analysis concerns to peptide relevance
const CONCERN_PEPTIDE_MAP = {
  skinQuality: { weight: 1.0, label: "Skin Quality" },
  antiAging: { weight: 0.9, label: "Anti-Aging" },
  healing: { weight: 0.7, label: "Healing & Recovery" },
  collagen: { weight: 0.9, label: "Collagen Production" },
  inflammation: { weight: 0.8, label: "Inflammation Control" },
  jawline: { weight: 1.0, label: "Jawline Definition" },
  lips: { weight: 0.6, label: "Lip Enhancement" },
  eyes: { weight: 0.8, label: "Eye Area" },
  hair: { weight: 0.7, label: "Hair Health" },
};

function recommendPeptides(concerns) {
  // concerns is an object like { skinQuality: 8, jawline: 6, eyes: 7, ... }
  // Score each peptide based on how well it matches the user's needs
  const scored = PEPTIDES.map((p) => {
    let score = 0;
    let matchedAreas = [];
    for (const [key, need] of Object.entries(concerns)) {
      if (need > 0 && p.facialRelevance[key]) {
        const contribution = (p.facialRelevance[key] / 10) * (need / 10) * (CONCERN_PEPTIDE_MAP[key]?.weight || 1);
        score += contribution;
        if (p.facialRelevance[key] >= 7 && need >= 5) {
          matchedAreas.push(CONCERN_PEPTIDE_MAP[key]?.label || key);
        }
      }
    }
    return { ...p, relevanceScore: Math.round(score * 100) / 100, matchedAreas };
  });

  return scored
    .filter((p) => p.relevanceScore > 0.3)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);
}

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const action = url.searchParams.get("action");

  // Action: recommend — takes facial analysis concerns and returns ranked peptides
  if (action === "recommend") {
    const concerns = {};
    for (const key of Object.keys(CONCERN_PEPTIDE_MAP)) {
      const val = parseInt(url.searchParams.get(key) || "0");
      if (val > 0) concerns[key] = Math.min(10, val);
    }
    const results = recommendPeptides(concerns);
    return new Response(JSON.stringify({ success: true, count: results.length, peptides: results }), { headers: corsHeaders });
  }

  // Action: get — get a single peptide by ID
  if (action === "get") {
    const id = url.searchParams.get("id");
    const peptide = PEPTIDES.find((p) => p.id === id);
    if (!peptide) {
      return new Response(JSON.stringify({ success: false, error: "Peptide not found" }), { status: 404, headers: corsHeaders });
    }
    return new Response(JSON.stringify({ success: true, peptide }), { headers: corsHeaders });
  }

  // Action: search
  if (action === "search") {
    const q = (url.searchParams.get("q") || "").toLowerCase();
    const category = url.searchParams.get("category");
    let results = PEPTIDES;
    if (q) {
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.aka.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    if (category) {
      results = results.filter((p) => p.category === category);
    }
    return new Response(JSON.stringify({ success: true, count: results.length, peptides: results }), { headers: corsHeaders });
  }

  // Default: return all peptides
  const category = url.searchParams.get("category");
  let results = PEPTIDES;
  if (category) {
    results = results.filter((p) => p.category === category);
  }
  return new Response(
    JSON.stringify({
      success: true,
      count: results.length,
      endpoints: {
        all: "/api/peptides",
        recommend: "/api/peptides?action=recommend&skinQuality=8&jawline=6&eyes=7",
        search: "/api/peptides?action=search&q=collagen",
        get: "/api/peptides?action=get&id=ghkcu",
        byCategory: "/api/peptides?category=cosmetic",
      },
      peptides: results,
    }),
    { headers: corsHeaders }
  );
}
