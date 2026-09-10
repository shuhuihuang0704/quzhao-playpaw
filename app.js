const PRODUCTS = [
  {
    id: "yama",
    image: "images/yama.jpg",
    animal: "both",
    category: "forage",
    badge: "bestseller",
    price: { cny: 268, usd: 38 },
    name: { zh: "山峦嗅闻垫", en: "Yama Sniff Mat" },
    blurb: {
      zh: "一层一层的羊毛山峰，藏进零食，让嗅觉慢慢醒来。",
      en: "Layered wool peaks that hide treats and slow the nose down.",
    },
    story: {
      zh: "用湿毡羊毛叠出起伏的山形，缝线故意留一点不规则。把粮撒进谷地，狗会用鼻子一寸一寸找，猫也会把爪子伸进去试探。适合每日十分钟的安静游戏，用完可以整片手洗。",
      en: "Wet-felted wool stacked into a small mountain range. Scatter kibble in the valleys and let them hunt. A ten-minute quiet game, then hand-wash the whole piece.",
    },
    material: { zh: "美利奴羊毛毡", en: "Merino wool felt" },
    size: { zh: "约 32 × 28 cm", en: "Approx. 32 × 28 cm" },
    care: { zh: "冷水手洗，平铺阴干", en: "Cold hand wash, dry flat" },
  },
  {
    id: "nawa",
    image: "images/nawa.jpg",
    animal: "dog",
    category: "tug",
    badge: null,
    price: { cny: 168, usd: 24 },
    name: { zh: "双色棉绳", en: "Nawa Tug Rope" },
    blurb: {
      zh: "陶土色与燕麦色交缠，粗、软、禁得起拉扯。",
      en: "Clay and oatmeal cotton, thick enough to tug, soft enough to chew.",
    },
    story: {
      zh: "三股有机棉绳手工编织，收尾打成圆结，方便衔取。适合室内轻轻拔河，不鼓励真正较劲。棉纤维会慢慢起毛，那是它被爱过的痕迹。",
      en: "Three-ply organic cotton, finished with a round knot that sits well in the mouth. For gentle indoor tug, not a contest of force. It will fuzz. That is the point.",
    },
    material: { zh: "有机棉", en: "Organic cotton" },
    size: { zh: "长约 38 cm", en: "Approx. 38 cm" },
    care: { zh: "放入洗衣袋机洗冷水", en: "Machine wash cold in a bag" },
  },
  {
    id: "nezumi",
    image: "images/nezumi.jpg",
    animal: "cat",
    category: "hunt",
    badge: null,
    price: { cny: 98, usd: 14 },
    name: { zh: "毡毛小鼠", en: "Nezumi Felt Mouse" },
    blurb: {
      zh: "一枚刚好能被叼走的小鼠，亚麻耳朵会轻轻颤。",
      en: "A mouse just small enough to steal, with linen ears that tremble.",
    },
    story: {
      zh: "针毡羊毛塑形，耳朵是薄亚麻，尾巴是麻绳。没有塑料眼睛，没有响纸。它安静，却足够像一只会跑的东西。适合单独逗猎，也可丢进藏宝袋。",
      en: "Needle-felted wool, linen ears, a hemp tail. No plastic eyes, no crinkle. Quiet, but convincing. Hunt it alone or drop it in the burrow bag.",
    },
    material: { zh: "羊毛 / 亚麻 / 麻绳", en: "Wool, linen, hemp" },
    size: { zh: "长约 11 cm", en: "Approx. 11 cm" },
    care: { zh: "局部擦拭，勿浸泡", en: "Spot clean only" },
  },
  {
    id: "wan",
    image: "images/wan.jpg",
    animal: "both",
    category: "forage",
    badge: "studio",
    price: { cny: 228, usd: 32 },
    name: { zh: "慢食陶碗", en: "Wan Puzzle Bowl" },
    blurb: {
      zh: "一只不规矩的炻器碗，让进食重新变成一件事。",
      en: "An irregular stoneware bowl that turns eating back into an activity.",
    },
    story: {
      zh: "景德镇附近的小窑烧制，釉色是砂与苔藓。碗底有浅浅的脊，粮会停在那里。它不是益智玩具的塑料迷宫，只是一只需要慢慢对待的碗。",
      en: "Fired in a small kiln near Jingdezhen. Sand and moss glaze, a low ridge inside that catches kibble. Not a plastic maze — just a bowl that asks for patience.",
    },
    material: { zh: "手工炻器", en: "Handmade stoneware" },
    size: { zh: "口径约 16 cm", en: "Approx. 16 cm diameter" },
    care: { zh: "可洗碗机，避免骤冷骤热", en: "Dishwasher safe; avoid thermal shock" },
  },
  {
    id: "fukuro",
    image: "images/fukuro.jpg",
    animal: "both",
    category: "forage",
    badge: null,
    price: { cny: 198, usd: 28 },
    name: { zh: "帆布藏宝袋", en: "Fukuro Burrow Bag" },
    blurb: {
      zh: "一袋皱着的原色帆布，把玩具和零食藏进去。",
      en: "A crumpled raw-canvas bag for hiding toys and treats.",
    },
    story: {
      zh: "未漂白帆布，陶土色缝线，袋口不封死。把小鼠、棉球或冻干塞进去，让他们用鼻子和爪子一层一层翻。用旧了会更软，也更好看。",
      en: "Unbleached canvas, terracotta stitching, an open mouth. Tuck in a mouse, a wool ball, or freeze-dried treats. It gets softer — and better — with use.",
    },
    material: { zh: "原色帆布", en: "Raw canvas" },
    size: { zh: "约 28 × 22 cm", en: "Approx. 28 × 22 cm" },
    care: { zh: "冷水手洗，勿烘干", en: "Cold hand wash, no dryer" },
  },
  {
    id: "tama",
    image: "images/tama.jpg",
    animal: "both",
    category: "hunt",
    badge: null,
    price: { cny: 148, usd: 21 },
    name: { zh: "榉木滚球", en: "Tama Wood Ball" },
    blurb: {
      zh: "实木滚过去，里面的羊毛球偶尔探出头。",
      en: "A solid-wood roller with a wool pom that peeks through the holes.",
    },
    story: {
      zh: "欧洲山毛榉车成圆球，打磨到圆润但不抛成塑料光。开几个洞，塞进一颗羊毛球。它在地板上走得很慢，适合傍晚那段无所事事的时间。",
      en: "European beech, turned and sanded, never lacquered to a plastic shine. A wool pom sits inside the holes. It rolls slowly. Best at dusk.",
    },
    material: { zh: "山毛榉 / 羊毛", en: "Beech, wool" },
    size: { zh: "直径约 7 cm", en: "Approx. 7 cm diameter" },
    care: { zh: "干布擦拭，勿浸泡", en: "Wipe dry; do not soak" },
  },
  {
    id: "hane",
    image: "images/hane.jpg",
    animal: "cat",
    category: "hunt",
    badge: null,
    price: { cny: 188, usd: 26 },
    name: { zh: "胡桃逗猫杖", en: "Hane Feather Wand" },
    blurb: {
      zh: "一根胡桃木，一条亚麻丝带，一根羽毛。",
      en: "Walnut, a linen ribbon, a single feather.",
    },
    story: {
      zh: "杖身是黑胡桃，手感沉一点。丝带足够长，羽毛只选一根，避免满屋子乱飞的碎屑。逗完请收起来，它才继续像一根杖，而不是地上的枯枝。",
      en: "Black walnut, a little weight in the hand. One long ribbon, one feather — less debris on the floor. Put it away after play so it stays a wand, not a stick.",
    },
    material: { zh: "黑胡桃 / 亚麻 / 羽毛", en: "Walnut, linen, feather" },
    size: { zh: "杖长约 45 cm", en: "Wand approx. 45 cm" },
    care: { zh: "悬挂收纳，勿折羽毛", en: "Hang to store; do not crush the feather" },
  },
  {
    id: "kumo",
    image: "images/kumo.jpg",
    animal: "both",
    category: "rest",
    badge: null,
    price: { cny: 248, usd: 35 },
    name: { zh: "云朵安抚枕", en: "Kumo Cloud Cushion" },
    blurb: {
      zh: "一朵原色亚麻云，给爱枕东西的孩子。",
      en: "A natural-linen cloud for anyone who likes to rest a chin on something.",
    },
    story: {
      zh: "云的轮廓故意不对称。面料是未染色亚麻，填充是回收棉。它可以当午睡枕，也可以被轻轻咬着走来走去。如果它变扁了，揉一揉就好。",
      en: "The outline is deliberately uneven. Undyed linen, recycled-cotton fill. A nap pillow, or something to carry from room to room. If it flattens, give it a squeeze.",
    },
    material: { zh: "亚麻 / 回收棉", en: "Linen, recycled cotton" },
    size: { zh: "约 26 × 18 cm", en: "Approx. 26 × 18 cm" },
    care: { zh: "外套可拆，冷水手洗", en: "Cover removable; cold hand wash" },
  },
];

const I18N = {
  zh: {
    langLabel: "EN",
    brand: { short: "趣爪", full: "趣爪创新宠物用品有限公司" },
    nav: { shop: "选物", about: "关于", cart: "购物袋" },
    hero: {
      eyebrow: "趣爪创新宠物用品有限公司",
      title: "给毛孩子的好玩伴",
      lede: "质量扎实，做工细，材料也安全。羊毛、棉绳和陶，经得起玩，也放得进家里。",
      shop: "进入选物",
      story: "关于趣爪",
      caption: "午后 · 客厅",
    },
    manifesto:
      "玩具不必喧哗。一块好毡、一根好绳、一只不规矩的碗，已经足够<em>认真地玩</em>。",
    featured: { kicker: "本季", title: "正在桌上的", all: "看全部" },
    atelier: {
      kicker: "关于趣爪",
      title: "做好玩的，也做得安心。",
      p1: "趣爪创新宠物用品有限公司做嗅闻、啃咬与安抚。羊毛从牧场来，陶从窑里来，木头被车圆，帆布被缝出皱褶。我们不做会发光的塑料，也不做一年后就裂开的填充。",
      p2: "每件玩物都标了护理方式。它们会被咬、被叼、被洗，这是设计的一部分。",
      cta: "认识趣爪",
    },
    cats: {
      kicker: "按玩法",
      title: "先选一种心情",
      forage: { name: "嗅闻", desc: "藏与找" },
      tug: { name: "啃咬", desc: "拉与嚼" },
      hunt: { name: "逗猎", desc: "追与扑" },
      rest: { name: "安抚", desc: "枕与靠" },
    },
    quotes: {
      kicker: "屋里的人",
      title: "他们这样说",
      items: [
        { q: "山峦垫让晚饭前那十分钟安静下来。", c: "阿白的家人 · 上海" },
        { q: "陶碗比任何慢食盆都好看，也更难被推翻。", c: "豆豆 · 京都" },
        { q: "小鼠没有眼睛，我家猫反而更当真。", c: "Mika · Berlin" },
      ],
    },
    news: {
      kicker: "信",
      title: "新物件上桌时，写一封很短的信。",
      placeholder: "你的邮箱",
      send: "订阅",
      ok: "记下了。下一封信见。",
    },
    footer: {
      blurb: "趣爪创新宠物用品有限公司。陪狗和猫好好玩一玩。",
      shop: "选物",
      house: "公司",
      care: "照料",
      all: "全部玩物",
      dogs: "狗的",
      cats: "猫的",
      about: "关于我们",
      ship: "配送与退换",
      materials: "材料",
      contact: "写信 hello@quzhao.com",
    },
    shop: {
      kicker: "目录",
      title: "选物",
      all: "全部",
      dog: "狗",
      cat: "猫",
      both: "共用",
      empty: "这一格还是空的。",
    },
    product: {
      add: "放入购物袋",
      added: "已放入购物袋",
      related: "还可以看看",
      material: "材料",
      size: "尺寸",
      care: "护理",
      animal: "对象",
      animals: { dog: "狗", cat: "猫", both: "狗与猫" },
    },
    about: {
      kicker: "关于我们",
      title: "趣爪创新宠物用品有限公司",
      p1: "趣是一起玩，爪是它踩过地板的声音。智创是先把玩法想明白，再用羊毛、棉绳和陶做出来。对外英文名是 Playpaw。",
      p2: "羊毛毡在浙江，陶碗在景德镇附近，木头在东阳车。每批不多，卖完再做，不赶。",
      p3: "配送：中国大陆满 299 元包邮，海外按实际计。七日内未使用可退。被认真玩过的，请留下。",
      v1t: "材料",
      v1: "羊毛、亚麻、棉、木头和陶，摸得到，也放心咬。没有会响的塑料芯片。",
      v2t: "节奏",
      v2: "小炉小批就能做，先让它玩起来再加量。卖完了等下一炉，不赶着铺货。",
      v3t: "使用",
      v3: "请陪在旁边玩。细小零件不适合咬得很凶的大型犬。",
    },
    cart: {
      title: "购物袋",
      empty: "袋子是空的。",
      total: "合计",
      checkout: "去结账",
      remove: "拿掉",
      close: "关闭",
    },
    checkout: {
      kicker: "结账",
      title: "送到哪里",
      name: "姓名",
      email: "邮箱",
      phone: "电话",
      address: "地址",
      note: "备注",
      pay: "支付方式",
      wechat: "微信",
      alipay: "支付宝",
      card: "银行卡",
      place: "提交订单",
      summary: "订单",
      ship: "运费",
      free: "已包邮",
      shipFee: "满 299 包邮",
    },
    success: {
      title: "收到了。",
      body: "这是一间演示店铺，不会真正扣款，也不会寄出包裹。若你喜欢这些形状，可以按同样的节奏去做自己的店。",
      back: "回到首页",
    },
    badges: { bestseller: "常被带走", studio: "窑里新出" },
    toastAdd: "已放入购物袋",
  },
  en: {
    langLabel: "中文",
    brand: { short: "Playpaw", full: "Playpaw Pet Products Co., Ltd." },
    nav: { shop: "Shop", about: "About", cart: "Bag" },
    hero: {
      eyebrow: "Playpaw Pet Products Co., Ltd.",
      title: "Playmates for dogs and cats",
      lede: "Solid quality, fine craft, safe material.",
      shop: "Enter the shop",
      story: "About Playpaw",
      caption: "Afternoon · living room",
    },
    manifesto:
      "A toy does not need to shout. Good felt, a honest rope, an irregular bowl — enough to <em>play properly</em>.",
    featured: { kicker: "This season", title: "On the table", all: "See all" },
    atelier: {
      kicker: "About Playpaw",
      title: "Made to play with — and to feel good about.",
      p1: "Playpaw Pet Products Co., Ltd. makes objects for sniffing, tugging, and resting. Wool from the pasture, clay from the kiln, wood turned round, canvas left wrinkled. We do not make glowing plastic, or stuffing that splits in a year.",
      p2: "Every object lists how to care for it. They will be bitten, carried, washed. That is part of the design.",
      cta: "Our story",
    },
    cats: {
      kicker: "By mood",
      title: "Start with a way to play",
      forage: { name: "Forage", desc: "Hide and seek" },
      tug: { name: "Tug", desc: "Pull and chew" },
      hunt: { name: "Hunt", desc: "Chase and pounce" },
      rest: { name: "Rest", desc: "Pillow and lean" },
    },
    quotes: {
      kicker: "From the house",
      title: "They wrote",
      items: [
        { q: "The mountain mat made the ten minutes before dinner quiet.", c: "Bai’s people · Shanghai" },
        { q: "The bowl is better looking than any slow feeder, and harder to tip.", c: "Mame · Kyoto" },
        { q: "The mouse has no eyes. The cat takes it more seriously.", c: "Mika · Berlin" },
      ],
    },
    news: {
      kicker: "Letter",
      title: "When something new lands on the table, a short letter.",
      placeholder: "Your email",
      send: "Subscribe",
      ok: "Noted. See you in the next letter.",
    },
    footer: {
      blurb: "Playpaw Pet Products Co., Ltd. For dogs and cats who just want to play.",
      shop: "Shop",
      house: "Company",
      care: "Care",
      all: "All objects",
      dogs: "For dogs",
      cats: "For cats",
      about: "About us",
      ship: "Shipping & returns",
      materials: "Materials",
      contact: "Write hello@quzhao.com",
    },
    shop: {
      kicker: "Catalogue",
      title: "Shop",
      all: "All",
      dog: "Dogs",
      cat: "Cats",
      both: "Shared",
      empty: "Nothing in this drawer yet.",
    },
    product: {
      add: "Add to bag",
      added: "Added to bag",
      related: "Also on the table",
      material: "Material",
      size: "Size",
      care: "Care",
      animal: "For",
      animals: { dog: "Dogs", cat: "Cats", both: "Dogs & cats" },
    },
    about: {
      kicker: "About us",
      title: "Playpaw Pet Products Co., Ltd.",
      p1: "Qu is playing together; zhao is the sound of paws on the floor. Snuffle mats, ropes, mice, and soft pillows — a little more fun in the day.",
      p2: "Few suppliers. Felt in Zhejiang, stoneware near Jingdezhen, wood turned in Dongyang. Small batches. When a kiln or a bolt of cloth runs out, we wait.",
      p3: "Shipping: free on the mainland over ¥299; international calculated. Unused returns within seven days. If it has been properly played with, keep it.",
      v1t: "Materials",
      v1: "Wool, linen, cotton, solid wood, stoneware. No sound chips.",
      v2t: "Pace",
      v2: "Small batches. When it is gone, it is gone until the next firing.",
      v3t: "Use",
      v3: "Play with supervision. Small parts are not for heavy chewers.",
    },
    cart: {
      title: "Bag",
      empty: "The bag is empty.",
      total: "Total",
      checkout: "Checkout",
      remove: "Remove",
      close: "Close",
    },
    checkout: {
      kicker: "Checkout",
      title: "Where it goes",
      name: "Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      note: "Note",
      pay: "Payment",
      wechat: "WeChat",
      alipay: "Alipay",
      card: "Card",
      place: "Place order",
      summary: "Order",
      ship: "Shipping",
      free: "Free",
      shipFee: "Free over ¥299 / $42",
    },
    success: {
      title: "Received.",
      body: "This is a demonstration shop. Nothing will be charged, and nothing will ship. If you like the pace of these objects, you can build your own house the same way.",
      back: "Back home",
    },
    badges: { bestseller: "Often taken", studio: "Just from the kiln" },
    toastAdd: "Added to bag",
  },
};

const memoryStore = {};

function storageGet(key, fallback) {
  try {
    if (typeof localStorage === "undefined") return fallback;
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (err) {
    return key in memoryStore ? memoryStore[key] : fallback;
  }
}

function storageSet(key, value) {
  try {
    if (typeof localStorage === "undefined") {
      memoryStore[key] = value;
      return;
    }
    localStorage.setItem(key, value);
  } catch (err) {
    memoryStore[key] = value;
  }
}

function readCart() {
  try {
    const parsed = JSON.parse(storageGet("quzhao-cart", "[]"));
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

const state = {
  locale: storageGet("quzhao-locale", "zh") === "en" ? "en" : "zh",
  cart: readCart(),
  drawer: false,
  menu: false,
  toast: "",
  qty: 1,
  pay: "wechat",
  filter: { animal: "all", category: "all" },
};

const t = () => I18N[state.locale];
const productById = (id) => PRODUCTS.find((p) => p.id === id);

function money(product, n = 1) {
  if (state.locale === "zh") return `¥${product.price.cny * n}`;
  return `$${product.price.usd * n}`;
}

function cartTotal() {
  return state.cart.reduce(
    (acc, line) => {
      const p = productById(line.id);
      if (!p) return acc;
      acc.cny += p.price.cny * line.qty;
      acc.usd += p.price.usd * line.qty;
      return acc;
    },
    { cny: 0, usd: 0 }
  );
}

function formatTotal(total) {
  return state.locale === "zh" ? `¥${total.cny}` : `$${total.usd}`;
}

function saveCart() {
  storageSet("quzhao-cart", JSON.stringify(state.cart));
}

function parseQuery(query) {
  const params = {};
  String(query || "")
    .split("&")
    .forEach((part) => {
      if (!part) return;
      const eq = part.indexOf("=");
      const key = eq === -1 ? part : part.slice(0, eq);
      const value = eq === -1 ? "" : part.slice(eq + 1);
      try {
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      } catch (err) {
        params[key] = value;
      }
    });
  return params;
}

function parseHash() {
  const raw = (location.hash || "").replace(/^#/, "") || "/";
  const [path, query = ""] = raw.split("?");
  const parts = path.split("/").filter(Boolean);
  const params = parseQuery(query);
  if (parts[0] === "product" && parts[1]) return { name: "product", id: parts[1], params };
  if (parts[0] === "shop") return { name: "shop", params };
  if (parts[0] === "about") return { name: "about", params };
  if (parts[0] === "checkout") return { name: "checkout", params };
  if (parts[0] === "success") return { name: "success", params };
  return { name: "home", params };
}

function go(hash) {
  location.hash = hash;
}

function cartCount() {
  return state.cart.reduce((n, l) => n + l.qty, 0);
}

function addToCart(id, qty = 1) {
  const line = state.cart.find((l) => l.id === id);
  if (line) line.qty += qty;
  else state.cart.push({ id, qty });
  saveCart();
  state.toast = t().toastAdd;
  render();
  setTimeout(() => {
    state.toast = "";
    render();
  }, 1800);
}

function removeFromCart(id) {
  state.cart = state.cart.filter((l) => l.id !== id);
  saveCart();
  render();
}

function setQty(id, qty) {
  const line = state.cart.find((l) => l.id === id);
  if (!line) return;
  line.qty = Math.max(1, qty);
  saveCart();
  render();
}

function setLocale() {
  state.locale = state.locale === "zh" ? "en" : "zh";
  storageSet("quzhao-locale", state.locale);
  document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
  document.title =
    state.locale === "zh"
      ? "趣爪 Playpaw"
      : "Playpaw — Play, thought through";
  render();
}

function iconBag() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 8h12l-1 13H7L6 8z"/><path d="M9 8V7a3 3 0 0 1 6 0v1"/></svg>`;
}

function iconClose() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
}

function mark() {
  return `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="6" fill="currentColor"/><circle cx="11" cy="11" r="3" fill="#F3EEE6"/><circle cx="21" cy="11" r="3" fill="#F3EEE6"/><circle cx="8" cy="17.5" r="2.4" fill="#F3EEE6"/><circle cx="24" cy="17.5" r="2.4" fill="#F3EEE6"/><ellipse cx="16" cy="22" rx="5" ry="4.2" fill="#F3EEE6"/></svg>`;
}

function header(route) {
  const i = t();
  return `
    <header class="header">
      <a class="brand" href="#/">${mark()} <span class="brand-lockup"><span>${i.brand.short}</span><span class="brand-en">${state.locale === "zh" ? "PLAYPAW · 智创" : "趣爪 · 智创"}</span></span></a>
      <nav class="nav">
        <a href="#/shop" class="${route.name === "shop" ? "is-active" : ""}">${i.nav.shop}</a>
        <a href="#/about" class="${route.name === "about" ? "is-active" : ""}">${i.nav.about}</a>
      </nav>
      <div class="header-actions">
        <button class="lang-toggle" data-act="locale">${i.langLabel}</button>
        <button class="icon-btn" data-act="drawer" aria-label="${i.nav.cart}">
          ${iconBag()} <span class="cart-count">${cartCount()}</span>
        </button>
        <button class="icon-btn menu-btn" data-act="menu" aria-label="Menu">☰</button>
      </div>
    </header>
    ${
      state.menu
        ? `<nav class="mobile-nav">
            <a href="#/shop">${i.nav.shop}</a>
            <a href="#/about">${i.nav.about}</a>
          </nav>`
        : ""
    }
  `;
}

function footer() {
  const i = t().footer;
  return `
    <footer class="footer">
      <div class="wrap footer-grid">
        <div>
          <div class="brand">${mark()} ${i.brand.short}</div>
          <p class="company-full">${i.brand.full}</p>
          <p style="margin-top:10px">${i.blurb}</p>
        </div>
        <div>
          <h4>${i.shop}</h4>
          <a href="#/shop">${i.all}</a>
          <a href="#/shop?animal=dog">${i.dogs}</a>
          <a href="#/shop?animal=cat">${i.cats}</a>
        </div>
        <div>
          <h4>${i.house}</h4>
          <a href="#/about">${i.about}</a>
          <a href="#/about">${i.ship}</a>
        </div>
        <div>
          <h4>${i.care}</h4>
          <a href="#/about">${i.materials}</a>
          <a href="mailto:hello@quzhao.com">${i.contact}</a>
        </div>
      </div>
      <div class="wrap">
        <div class="wordmark">${state.locale === "zh" ? "趣爪 · 智创" : "PLAYPAW"}</div>
        <div class="legal"><span>© ${new Date().getFullYear()} ${i.brand.full}</span><span>${state.locale === "zh" ? "Playpaw" : "趣爪 · 智创"}</span></div>
      </div>
    </footer>
  `;
}

function productCard(p) {
  const i = t();
  const badge = p.badge ? `<span class="card-badge">${i.badges[p.badge]}</span>` : "";
  return `
    <a class="card" href="#/product/${p.id}">
      <div class="card-media">${badge}<img src="${p.image}" alt="${p.name[state.locale]}" /></div>
      <div class="card-meta">
        <h3>${p.name[state.locale]}</h3>
        <span class="price">${money(p)}</span>
      </div>
      <p class="card-sub">${p.blurb[state.locale]}</p>
    </a>
  `;
}

function viewHome() {
  const i = t();
  const featured = PRODUCTS.filter((p) => ["yama", "wan", "hane", "kumo"].includes(p.id));
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">${i.hero.eyebrow}</p>
        <h1 class="display">${i.hero.title}</h1>
        <p class="lede">${i.hero.lede}</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="#/shop">${i.hero.shop}</a>
          <a class="btn btn-ghost" href="#/about">${i.hero.story}</a>
        </div>
      </div>
      <div class="hero-visual">
        <img src="images/hero.jpg" alt="" />
        <p class="hero-caption">${i.hero.caption}</p>
      </div>
    </section>
    <section class="section manifesto">
      <div class="wrap"><p>${i.manifesto}</p></div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="section-kicker">${i.featured.kicker}</p>
            <h2 class="display">${i.featured.title}</h2>
          </div>
          <a class="link-arrow" href="#/shop">${i.featured.all}</a>
        </div>
        <div class="product-grid four">${featured.map(productCard).join("")}</div>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="wrap split">
        <img src="images/atelier.jpg" alt="" />
        <div class="split-copy">
          <p class="section-kicker">${i.atelier.kicker}</p>
          <h2 class="display">${i.atelier.title}</h2>
          <p>${i.atelier.p1}</p>
          <p>${i.atelier.p2}</p>
          <a class="btn btn-ghost" href="#/about">${i.atelier.cta}</a>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="section-kicker">${i.cats.kicker}</p>
            <h2 class="display">${i.cats.title}</h2>
          </div>
        </div>
        <div class="cats">
          ${["forage", "tug", "hunt", "rest"]
            .map(
              (key) => `
            <a class="cat" href="#/shop?category=${key}">
              <span>0${["forage", "tug", "hunt", "rest"].indexOf(key) + 1}</span>
              <div>
                <strong>${i.cats[key].name}</strong>
                <p>${i.cats[key].desc}</p>
              </div>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="section-kicker">${i.quotes.kicker}</p>
            <h2 class="display">${i.quotes.title}</h2>
          </div>
        </div>
        <div class="quotes">
          ${i.quotes.items
            .map((q) => `<figure class="quote"><p>“${q.q}”</p><cite>${q.c}</cite></figure>`)
            .join("")}
        </div>
      </div>
    </section>
    <section class="section news">
      <div class="wrap">
        <div>
          <p class="section-kicker">${i.news.kicker}</p>
          <h2 class="display">${i.news.title}</h2>
        </div>
        <form class="news-block" data-form="news">
          <div class="news-form">
            <input type="email" name="email" required placeholder="${i.news.placeholder}" />
            <button class="btn btn-primary" type="submit">${i.news.send}</button>
          </div>
          <p class="form-note" data-news-note></p>
        </form>
      </div>
    </section>
  `;
}

function viewShop(route) {
  const i = t();
  const animal = route.params.animal || "all";
  const category = route.params.category || "all";
  const list = PRODUCTS.filter((p) => {
    const animalOk = animal === "all" || p.animal === animal || p.animal === "both";
    const catOk = category === "all" || p.category === category;
    return animalOk && catOk;
  });
  const chips = [
    { href: "#/shop", on: animal === "all" && category === "all", label: i.shop.all },
    { href: "#/shop?animal=dog", on: animal === "dog", label: i.shop.dog },
    { href: "#/shop?animal=cat", on: animal === "cat", label: i.shop.cat },
    { href: "#/shop?category=forage", on: category === "forage", label: i.cats.forage.name },
    { href: "#/shop?category=tug", on: category === "tug", label: i.cats.tug.name },
    { href: "#/shop?category=hunt", on: category === "hunt", label: i.cats.hunt.name },
    { href: "#/shop?category=rest", on: category === "rest", label: i.cats.rest.name },
  ];
  return `
    <section class="wrap page-hero">
      <p class="section-kicker">${i.shop.kicker}</p>
      <h1 class="display">${i.shop.title}</h1>
      <div class="filters">
        ${chips
          .map((c) => `<a class="chip ${c.on ? "is-on" : ""}" href="${c.href}">${c.label}</a>`)
          .join("")}
      </div>
      ${
        list.length
          ? `<div class="product-grid">${list.map(productCard).join("")}</div>`
          : `<p class="empty">${i.shop.empty}</p>`
      }
    </section>
    <div style="height:80px"></div>
  `;
}

function viewProduct(route) {
  const p = productById(route.id);
  if (!p) return `<section class="wrap page-hero"><h1>404</h1></section>`;
  const i = t();
  const related = PRODUCTS.filter((x) => x.id !== p.id && (x.animal === p.animal || x.category === p.category)).slice(0, 3);
  return `
    <section class="wrap pdp">
      <div class="pdp-media"><img src="${p.image}" alt="${p.name[state.locale]}" /></div>
      <div class="pdp-info">
        <p class="eyebrow">${i.product.animals[p.animal]}</p>
        <h1 class="display">${p.name[state.locale]}</h1>
        <p class="pdp-price">${money(p)}</p>
        <p>${p.story[state.locale]}</p>
        <div class="qty">
          <button data-act="qty-minus">−</button>
          <span data-qty>${state.qty}</span>
          <button data-act="qty-plus">+</button>
        </div>
        <button class="btn btn-primary btn-block" data-act="add" data-id="${p.id}">${i.product.add}</button>
        <dl class="specs">
          <div class="spec"><dt>${i.product.material}</dt><dd>${p.material[state.locale]}</dd></div>
          <div class="spec"><dt>${i.product.size}</dt><dd>${p.size[state.locale]}</dd></div>
          <div class="spec"><dt>${i.product.care}</dt><dd>${p.care[state.locale]}</dd></div>
        </dl>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="wrap">
        <div class="section-head"><h2 class="display">${i.product.related}</h2></div>
        <div class="product-grid">${related.map(productCard).join("")}</div>
      </div>
    </section>
  `;
}

function viewAbout() {
  const i = t().about;
  return `
    <section class="wrap about-hero">
      <p class="section-kicker">${i.kicker}</p>
      <h1 class="display">${i.title}</h1>
    </section>
    <section class="wrap about-grid">
      <img src="images/atelier.jpg" alt="" />
      <div class="about-copy">
        <p>${i.p1}</p>
        <p>${i.p2}</p>
        <p>${i.p3}</p>
      </div>
    </section>
    <section class="wrap values">
      <article class="value"><h3 class="display">${i.v1t}</h3><p>${i.v1}</p></article>
      <article class="value"><h3 class="display">${i.v2t}</h3><p>${i.v2}</p></article>
      <article class="value"><h3 class="display">${i.v3t}</h3><p>${i.v3}</p></article>
    </section>
  `;
}

function viewCheckout() {
  const i = t();
  const total = cartTotal();
  const shipFree = total.cny >= 299;
  const ship = shipFree ? 0 : state.locale === "zh" ? 18 : 6;
  const grand = state.locale === "zh" ? `¥${total.cny + (shipFree ? 0 : 18)}` : `$${total.usd + (shipFree ? 0 : 6)}`;
  if (!state.cart.length) {
    return `<section class="wrap success"><h1 class="display">${i.cart.empty}</h1><a class="btn btn-primary" href="#/shop">${i.nav.shop}</a></section>`;
  }
  return `
    <section class="wrap page-hero">
      <p class="section-kicker">${i.checkout.kicker}</p>
      <h1 class="display">${i.checkout.title}</h1>
    </section>
    <section class="wrap checkout">
      <form data-form="checkout">
        <div class="field"><label>${i.checkout.name}</label><input name="name" required /></div>
        <div class="field"><label>${i.checkout.email}</label><input name="email" type="email" required /></div>
        <div class="field"><label>${i.checkout.phone}</label><input name="phone" required /></div>
        <div class="field"><label>${i.checkout.address}</label><textarea name="address" required></textarea></div>
        <div class="field"><label>${i.checkout.note}</label><textarea name="note"></textarea></div>
        <div class="field">
          <label>${i.checkout.pay}</label>
          <div class="pay-opts">
            <button type="button" class="pay-opt ${state.pay === "wechat" ? "is-on" : ""}" data-act="pay" data-pay="wechat">${i.checkout.wechat}</button>
            <button type="button" class="pay-opt ${state.pay === "alipay" ? "is-on" : ""}" data-act="pay" data-pay="alipay">${i.checkout.alipay}</button>
            <button type="button" class="pay-opt ${state.pay === "card" ? "is-on" : ""}" data-act="pay" data-pay="card">${i.checkout.card}</button>
          </div>
        </div>
        <button class="btn btn-primary btn-block" type="submit">${i.checkout.place}</button>
      </form>
      <aside class="summary">
        <h3>${i.checkout.summary}</h3>
        ${state.cart
          .map((line) => {
            const p = productById(line.id);
            return `<div class="sum-item"><span>${p.name[state.locale]} × ${line.qty}</span><span>${money(p, line.qty)}</span></div>`;
          })
          .join("")}
        <div class="sum-row"><span>${i.checkout.ship}</span><span>${shipFree ? i.checkout.free : state.locale === "zh" ? "¥18" : "$6"}</span></div>
        <div class="sum-row sum-total"><span>${i.cart.total}</span><span>${grand}</span></div>
        <p class="card-sub" style="margin-top:12px">${i.checkout.shipFee}</p>
      </aside>
    </section>
  `;
}

function viewSuccess() {
  const i = t().success;
  return `
    <section class="wrap success">
      <p class="eyebrow">${t().brand.short}</p>
      <h1 class="display">${i.title}</h1>
      <p class="lede">${i.body}</p>
      <a class="btn btn-primary" href="#/">${i.back}</a>
    </section>
  `;
}

function drawer() {
  const i = t();
  const total = cartTotal();
  const lines = state.cart
    .map((line) => {
      const p = productById(line.id);
      if (!p) return "";
      return `
        <div class="line">
          <img src="${p.image}" alt="" />
          <div>
            <h4>${p.name[state.locale]}</h4>
            <p>${money(p)} · × ${line.qty}</p>
            <button class="remove" data-act="remove" data-id="${p.id}">${i.cart.remove}</button>
          </div>
          <div>
            <button data-act="line-minus" data-id="${p.id}">−</button>
            <button data-act="line-plus" data-id="${p.id}">+</button>
          </div>
        </div>`;
    })
    .join("");
  return `
    <div class="overlay ${state.drawer ? "is-open" : ""}" data-act="close-drawer"></div>
    <aside class="drawer ${state.drawer ? "is-open" : ""}" aria-hidden="${!state.drawer}">
      <div class="drawer-head">
        <strong>${i.cart.title}</strong>
        <button class="icon-btn" data-act="close-drawer" aria-label="${i.cart.close}">${iconClose()}</button>
      </div>
      <div class="drawer-body">
        ${state.cart.length ? lines : `<p class="empty">${i.cart.empty}</p>`}
      </div>
      <div class="drawer-foot" style="border-top:1px solid var(--line);flex-direction:column;align-items:stretch;gap:12px">
        <div class="sum-row"><span>${i.cart.total}</span><strong>${formatTotal(total)}</strong></div>
        ${
          state.cart.length
            ? `<a class="btn btn-primary" href="#/checkout" data-act="close-drawer">${i.cart.checkout}</a>`
            : `<a class="btn btn-ghost" href="#/shop" data-act="close-drawer">${i.nav.shop}</a>`
        }
      </div>
    </aside>
  `;
}

function render() {
  const root = document.getElementById("app");
  if (!root) return;
  try {
    document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
    document.title =
      state.locale === "zh"
        ? "趣爪 — 趣爪创新宠物用品有限公司"
        : "Playpaw — Play, thought through";
    const route = parseHash();
    if (route.name !== "product") state.qty = 1;
    const views = {
      home: viewHome,
      shop: () => viewShop(route),
      product: () => viewProduct(route),
      about: viewAbout,
      checkout: viewCheckout,
      success: viewSuccess,
    };
    const view = views[route.name] || viewHome;
    root.innerHTML = `
      ${header(route)}
      <main>${view()}</main>
      ${footer()}
      ${drawer()}
      <div class="toast ${state.toast ? "is-on" : ""}">${state.toast}</div>
    `;
    bind();
  } catch (err) {
    root.innerHTML =
      '<section class="wrap page-hero"><h1 class="display">页面加载失败</h1><p class="lede">请刷新后重试。</p></section>';
    console.error(err);
  }
}

function bind() {
  document.querySelectorAll("[data-act]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const act = el.getAttribute("data-act");
      if (act === "locale") setLocale();
      if (act === "drawer") {
        state.drawer = true;
        render();
      }
      if (act === "close-drawer") {
        const href = el.tagName === "A" ? el.getAttribute("href") : null;
        if (href) e.preventDefault();
        state.drawer = false;
        if (href) go(href);
        else render();
      }
      if (act === "menu") {
        state.menu = !state.menu;
        render();
      }
      if (act === "add") addToCart(el.getAttribute("data-id"), state.qty);
      if (act === "remove") removeFromCart(el.getAttribute("data-id"));
      if (act === "qty-plus") {
        state.qty += 1;
        render();
      }
      if (act === "qty-minus") {
        state.qty = Math.max(1, state.qty - 1);
        render();
      }
      if (act === "line-plus") setQty(el.getAttribute("data-id"), (state.cart.find((l) => l.id === el.getAttribute("data-id"))?.qty || 1) + 1);
      if (act === "line-minus") setQty(el.getAttribute("data-id"), (state.cart.find((l) => l.id === el.getAttribute("data-id"))?.qty || 1) - 1);
      if (act === "pay") {
        state.pay = el.getAttribute("data-pay");
        render();
      }
    });
  });

  const news = document.querySelector('[data-form="news"]');
  if (news) {
    news.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = news.querySelector("[data-news-note]");
      note.textContent = t().news.ok;
      news.reset();
    });
  }

  const checkout = document.querySelector('[data-form="checkout"]');
  if (checkout) {
    checkout.addEventListener("submit", (e) => {
      e.preventDefault();
      state.cart = [];
      saveCart();
      state.drawer = false;
      go("#/success");
    });
  }
}

window.addEventListener("hashchange", () => {
  state.menu = false;
  window.scrollTo(0, 0);
  render();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.drawer) {
    state.drawer = false;
    render();
  }
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", render);
} else {
  render();
}
