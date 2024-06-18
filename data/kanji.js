const KANJI = [
    {
        "id": 1,
        "symbol": "一",
        "sound": "ichi - hitotsu - ",
        "meaning": "one - 1 - first"
    },
    {
        "id": 2,
        "symbol": "二",
        "sound": "ni - futatsu - ",
        "meaning": "two - 2 - second"
    },
    {
        "id": 3,
        "symbol": "三",
        "sound": "san - mi - mitsu",
        "meaning": "three - 3 - third"
    },
    {
        "id": 4,
        "symbol": "四",
        "sound": "yon - shi - yotsu",
        "meaning": "four - 4 - forth"
    },
    {
        "id": 5,
        "symbol": "五",
        "sound": "go - itsutsu - ",
        "meaning": "five - 5 - fifth"
    },
    {
        "id": 6,
        "symbol": "六",
        "sound": "roku - mutsu - mui",
        "meaning": "six - 6 - sixth"
    },
    {
        "id": 7,
        "symbol": "七",
        "sound": "shichi - nanatsu - nano",
        "meaning": "seven - 7 - seventh"
    },
    {
        "id": 8,
        "symbol": "八",
        "sound": "hachi - yatsu - you",
        "meaning": "eight - 8 - eighth"
    },
    {
        "id": 9,
        "symbol": "九",
        "sound": "kyuu - ku - kokonotsu",
        "meaning": "nine - 9 - ninth"
    },
    {
        "id": 10,
        "symbol": "十",
        "sound": "juu - tou - ju",
        "meaning": "ten - 10 - tenth"
    },
    {
        "id": 11,
        "symbol": "百",
        "sound": "hyaku - - ",
        "meaning": "hundred - 100 - "
    },
    {
        "id": 12,
        "symbol": "千",
        "sound": "sen - chi - ",
        "meaning": "thousand - 1000 - "
    },
    {
        "id": 13,
        "symbol": "万",
        "sound": "ban - man - ",
        "meaning": "ten thousand - 10, 000 - "
    },
    {
        "id": 14,
        "symbol": "父",
        "sound": "fu - chichi - tou",
        "meaning": "father - dad - "
    },
    {
        "id": 15,
        "symbol": "母",
        "sound": "bo - haha - kaa",
        "meaning": "mother - mom - "
    },
    {
        "id": 16,
        "symbol": "友",
        "sound": "yuu - tomo - ",
        "meaning": "friend - - "
    },
    {
        "id": 17,
        "symbol": "女",
        "sound": "jo - onna - ",
        "meaning": "woman - female - "
    },
    {
        "id": 18,
        "symbol": "男",
        "sound": "dan - otoko - ",
        "meaning": "man - male - "
    },
    {
        "id": 19,
        "symbol": "人",
        "sound": "jin - nin - hito",
        "meaning": "person - people - man"
    },
    {
        "id": 20,
        "symbol": "子",
        "sound": "shi - ko - ",
        "meaning": "child - children - kid"
    },
    {
        "id": 21,
        "symbol": "日",
        "sound": "jitsu - nichi - hi",
        "meaning": "sun - day - "
    },
    {
        "id": 22,
        "symbol": "月",
        "sound": "gatsu - getsu - tsuki",
        "meaning": "month - moon - "
    },
    {
        "id": 23,
        "symbol": "火",
        "sound": "ka - hi - ",
        "meaning": "fire - light - "
    },
    {
        "id": 24,
        "symbol": "水",
        "sound": "sui - mizu - ",
        "meaning": "water - - "
    },
    {
        "id": 25,
        "symbol": "木",
        "sound": "moku - boku - ki",
        "meaning": "tree - wood - "
    },
    {
        "id": 26,
        "symbol": "金",
        "sound": "kin - kon - kane",
        "meaning": "gold - money - "
    },
    {
        "id": 27,
        "symbol": "土",
        "sound": "do - to - tsuchi",
        "meaning": "earth - ground - soil"
    },
    {
        "id": 28,
        "symbol": "本",
        "sound": "hon - - ",
        "meaning": "book - counter for long, slender objects - "
    },
    {
        "id": 29,
        "symbol": "休",
        "sound": "kyuu - yasumi - yasumu",
        "meaning": "vacation - rest - "
    },
    {
        "id": 30,
        "symbol": "語",
        "sound": "go - kataru - katari",
        "meaning": "word - language - speech"
    },
    {
        "id": 31,
        "symbol": "年",
        "sound": "nen - toshi - ",
        "meaning": "year - - "
    },
    {
        "id": 32,
        "symbol": "午",
        "sound": "go - - ",
        "meaning": "noon - - "
    },
    {
        "id": 33,
        "symbol": "前",
        "sound": "zen - mae - ",
        "meaning": "before - in front of - previous"
    },
    {
        "id": 34,
        "symbol": "後",
        "sound": "go - kou - ushiro",
        "meaning": "behind - after - "
    },
    {
        "id": 35,
        "symbol": "時",
        "sound": "ji - toki - ",
        "meaning": "time - - "
    },
    {
        "id": 36,
        "symbol": "間",
        "sound": "kan - aida - ma",
        "meaning": "interval - space - room"
    },
    {
        "id": 37,
        "symbol": "毎",
        "sound": "mai - - ",
        "meaning": "every - - "
    },
    {
        "id": 38,
        "symbol": "先",
        "sound": "sen - saki - ",
        "meaning": "previous - ahead - "
    },
    {
        "id": 39,
        "symbol": "今",
        "sound": "kon - kin - ima",
        "meaning": "now - present - "
    },
    {
        "id": 40,
        "symbol": "何",
        "sound": "ka - nan - nani",
        "meaning": "what - how many - "
    },
    {
        "id": 41,
        "symbol": "上",
        "sound": "jou - ue - ",
        "meaning": "top - above - up"
    },
    {
        "id": 42,
        "symbol": "下",
        "sound": "ka - ge - shita",
        "meaning": "under - bottom - down"
    },
    {
        "id": 43,
        "symbol": "左",
        "sound": "sa - hidari - ",
        "meaning": "left - - "
    },
    {
        "id": 44,
        "symbol": "右",
        "sound": "yuu - migi - u",
        "meaning": "right - - "
    },
    {
        "id": 45,
        "symbol": "東",
        "sound": "tou - higashi - ",
        "meaning": "east - - "
    },
    {
        "id": 46,
        "symbol": "西",
        "sound": "sei - sai - nishi",
        "meaning": "west - - "
    },
    {
        "id": 47,
        "symbol": "南",
        "sound": "nan - minami - ",
        "meaning": "south - - "
    },
    {
        "id": 48,
        "symbol": "北",
        "sound": "hoku - kita - ",
        "meaning": "north - - "
    },
    {
        "id": 49,
        "symbol": "外",
        "sound": "gai - hoka - soto",
        "meaning": "outside - foreign - other"
    },
    {
        "id": 50,
        "symbol": "名",
        "sound": "mei - myou - na",
        "meaning": "name - famous - fame"
    },
    {
        "id": 51,
        "symbol": "高",
        "sound": "kou - takai - ",
        "meaning": "high - expensive - tall"
    },
    {
        "id": 52,
        "symbol": "小",
        "sound": "shou - ko - chiisai",
        "meaning": "small - little - "
    },
    {
        "id": 53,
        "symbol": "中",
        "sound": "chuu - naka - ",
        "meaning": "middle - inside - center"
    },
    {
        "id": 54,
        "symbol": "大",
        "sound": "dai - tai - ooki",
        "meaning": "big - large - great"
    },
    {
        "id": 55,
        "symbol": "長",
        "sound": "chou - nagai - ",
        "meaning": "leader - long - "
    },
    {
        "id": 56,
        "symbol": "半",
        "sound": "han - - ",
        "meaning": "half - - "
    },
    {
        "id": 57,
        "symbol": "分",
        "sound": "fun - bun - wakaru",
        "meaning": "understand - share - part"
    },
    {
        "id": 58,
        "symbol": "学",
        "sound": "gaku - manabu - ",
        "meaning": "learning - learn - science"
    },
    {
        "id": 59,
        "symbol": "校",
        "sound": "kou - - ",
        "meaning": "school - - "
    },
    {
        "id": 60,
        "symbol": "生",
        "sound": "sei - ikiru - shou",
        "meaning": "live - birth - life"
    },
    {
        "id": 61,
        "symbol": "山",
        "sound": "san - yama - ",
        "meaning": "mountain - - "
    },
    {
        "id": 62,
        "symbol": "川",
        "sound": "sen - kawa - ",
        "meaning": "river - stream - "
    },
    {
        "id": 63,
        "symbol": "白",
        "sound": "haku - byaku - shiroi",
        "meaning": "white - - "
    },
    {
        "id": 64,
        "symbol": "天",
        "sound": "ten - ama - ame",
        "meaning": "heaven - sky - "
    },
    {
        "id": 65,
        "symbol": "雨",
        "sound": "u - ama - ame",
        "meaning": "rain - - "
    },
    {
        "id": 66,
        "symbol": "電",
        "sound": "den - - ",
        "meaning": "electricity - electric - power"
    },
    {
        "id": 67,
        "symbol": "気",
        "sound": "ki - ke - iki",
        "meaning": "spirit - energy - power"
    },
    {
        "id": 68,
        "symbol": "車",
        "sound": "sha - kuruma - ",
        "meaning": "car - vehicle - automobile"
    },
    {
        "id": 69,
        "symbol": "国",
        "sound": "koku - kuni - ",
        "meaning": "country - nation - "
    },
    {
        "id": 70,
        "symbol": "円",
        "sound": "en - marui - ",
        "meaning": "circle - yen - money"
    },
    {
        "id": 71,
        "symbol": "話",
        "sound": "wa - hanashi - hanasu",
        "meaning": "talk - topic - story"
    },
    {
        "id": 72,
        "symbol": "聞",
        "sound": "bun - kiku - ",
        "meaning": "hear - listen - ask"
    },
    {
        "id": 73,
        "symbol": "食",
        "sound": "kuu - shoku - taberu",
        "meaning": "eat - meal - food"
    },
    {
        "id": 74,
        "symbol": "読",
        "sound": "doku - yomu - ",
        "meaning": "read - - "
    },
    {
        "id": 75,
        "symbol": "来",
        "sound": "rai - kuru - ",
        "meaning": "come - - "
    },
    {
        "id": 76,
        "symbol": "書",
        "sound": "sho - kaku - ",
        "meaning": "book - document - papers"
    },
    {
        "id": 77,
        "symbol": "見",
        "sound": "ken - miru - mi",
        "meaning": "see - show - "
    },
    {
        "id": 78,
        "symbol": "行",
        "sound": "gyou - kou - iku",
        "meaning": "go - leave - "
    },
    {
        "id": 79,
        "symbol": "出",
        "sound": "shutsu - dasu - deru",
        "meaning": "leave - go out - "
    },
    {
        "id": 80,
        "symbol": "入",
        "sound": "nyuu - iru - hairu",
        "meaning": "enter - insert - go in"
    },
    {
        "id": 81,
        "symbol": "会",
        "sound": "kai - e - au",
        "meaning": "meeting - meet - "
    },
    {
        "id": 82,
        "symbol": "青",
        "sound": "sei - shou - aoi",
        "meaning": "blue - - "
    },
    {
        "id": 83,
        "symbol": "赤",
        "sound": "seki - shaku - akai",
        "meaning": "red - - "
    },
    {
        "id": 84,
        "symbol": "明",
        "sound": "mei - myou - akarui",
        "meaning": "light - bright - dawn"
    },
    {
        "id": 85,
        "symbol": "秋",
        "sound": "shuu - aki - ",
        "meaning": "fall - autumn - "
    },
    {
        "id": 86,
        "symbol": "空",
        "sound": "kuu - kara - sora",
        "meaning": "sky - air - empty"
    },
    {
        "id": 87,
        "symbol": "開",
        "sound": "kai - hiraku - akeru",
        "meaning": "open - - "
    },
    {
        "id": 88,
        "symbol": "悪",
        "sound": "aku - warui - ",
        "meaning": "bad - evil - "
    },
    {
        "id": 89,
        "symbol": "朝",
        "sound": "chou - asa - ",
        "meaning": "morning - - "
    },
    {
        "id": 90,
        "symbol": "字",
        "sound": "ji - aza - ",
        "meaning": "letter - character - mark"
    },
    {
        "id": 91,
        "symbol": "足",
        "sound": "ashi - soku - tariru",
        "meaning": "foot - feet - sufficient"
    },
    {
        "id": 92,
        "symbol": "味",
        "sound": "mi - aji - ",
        "meaning": "taste - experience - "
    },
    {
        "id": 93,
        "symbol": "新",
        "sound": "shin - atarashii - ",
        "meaning": "textframe - fresh - "
    },
    {
        "id": 94,
        "symbol": "集",
        "sound": "shuu - atsumeru - ",
        "meaning": "collect - gather - "
    },
    {
        "id": 95,
        "symbol": "兄",
        "sound": "kei - kyou - ani",
        "meaning": "brother - older brother - "
    },
    {
        "id": 96,
        "symbol": "姉",
        "sound": "shi - ane - ",
        "meaning": "sister - older sister - "
    },
    {
        "id": 97,
        "symbol": "歩",
        "sound": "ho - bu - aruku",
        "meaning": "walk - step - "
    },
    {
        "id": 98,
        "symbol": "有",
        "sound": "yuu - u - aru",
        "meaning": "have - exist - be"
    },
    {
        "id": 99,
        "symbol": "安",
        "sound": "an - yasui - ",
        "meaning": "cheap - peaceful - safe"
    },
    {
        "id": 100,
        "symbol": "医",
        "sound": "i - - ",
        "meaning": "heal - - cure"
    },
    {
        "id": 101,
        "symbol": "意",
        "sound": "i - - ",
        "meaning": "mind - heart - attention"
    },
    {
        "id": 102,
        "symbol": "以",
        "sound": "i - - ",
        "meaning": "more - through - on account"
    },
    {
        "id": 103,
        "symbol": "言",
        "sound": "gen - koto - iu",
        "meaning": "speech - statement - word"
    },
    {
        "id": 104,
        "symbol": "家",
        "sound": "ka - ya - ie",
        "meaning": "house - - "
    },
    {
        "id": 105,
        "symbol": "急",
        "sound": "kyuu - isogu - ",
        "meaning": "hurry - quick - "
    },
    {
        "id": 106,
        "symbol": "犬",
        "sound": "ken - inu - ",
        "meaning": "dog - - "
    },
    {
        "id": 107,
        "symbol": "妹",
        "sound": "mai - imouto - ",
        "meaning": "sister - younger sister - "
    },
    {
        "id": 108,
        "symbol": "色",
        "sound": "iro - shoku - shiki",
        "meaning": "color - - "
    },
    {
        "id": 109,
        "symbol": "音",
        "sound": "oto - on - ne",
        "meaning": "sound - - "
    },
    {
        "id": 110,
        "symbol": "員",
        "sound": "in - - ",
        "meaning": "member - official - "
    },
    {
        "id": 111,
        "symbol": "院",
        "sound": "in - - ",
        "meaning": "institution - academy - "
    },
    {
        "id": 112,
        "symbol": "飲",
        "sound": "in - nomu - ",
        "meaning": "drink - - "
    },
    {
        "id": 113,
        "symbol": "魚",
        "sound": "sakana - gyo - uo",
        "meaning": "fish - - "
    },
    {
        "id": 114,
        "symbol": "動",
        "sound": "ugoku - dou - ",
        "meaning": "move - - "
    },
    {
        "id": 115,
        "symbol": "牛",
        "sound": "gyuu - ushi - ",
        "meaning": "cow - bull - "
    },
    {
        "id": 116,
        "symbol": "歌",
        "sound": "ka - uta - utau",
        "meaning": "song - sing - "
    },
    {
        "id": 117,
        "symbol": "写",
        "sound": "sha - utsusu - ",
        "meaning": "copy - take a photo - "
    },
    {
        "id": 118,
        "symbol": "映",
        "sound": "ei - utsuru - utsusu",
        "meaning": "reflect - project - "
    },
    {
        "id": 119,
        "symbol": "海",
        "sound": "kai - umi - ",
        "meaning": "sea - ocean - "
    },
    {
        "id": 120,
        "symbol": "売",
        "sound": "bai - uri - uru",
        "meaning": "sale - sell - "
    },
    {
        "id": 121,
        "symbol": "運",
        "sound": "un - hakobu - ",
        "meaning": "luck - carry - move"
    },
    {
        "id": 122,
        "symbol": "重",
        "sound": "juu - chou - omoi",
        "meaning": "heavy - important - stress"
    },
    {
        "id": 123,
        "symbol": "英",
        "sound": "ei - - ",
        "meaning": "england - english - grand"
    },
    {
        "id": 124,
        "symbol": "駅",
        "sound": "eki - - ",
        "meaning": "station - (train) station - "
    },
    {
        "id": 125,
        "symbol": "終",
        "sound": "shuu - owari - tsui",
        "meaning": "end - finish - last"
    },
    {
        "id": 126,
        "symbol": "多",
        "sound": "ta - ooi - ",
        "meaning": "many - much - frequent"
    },
    {
        "id": 127,
        "symbol": "起",
        "sound": "ki - okiru - okosu",
        "meaning": "wake - get up - rise"
    },
    {
        "id": 128,
        "symbol": "屋",
        "sound": "oku - ya - ",
        "meaning": "roof - house - shop"
    },
    {
        "id": 129,
        "symbol": "送",
        "sound": "sou - okuru - ",
        "meaning": "send - - "
    },
    {
        "id": 130,
        "symbol": "教",
        "sound": "kyou - oshieru - ",
        "meaning": "teach - education - faith"
    },
    {
        "id": 131,
        "symbol": "弟",
        "sound": "dai - tei - otouto",
        "meaning": "brother - younger brother - "
    },
    {
        "id": 132,
        "symbol": "同",
        "sound": "dou - onaji - ",
        "meaning": "same - agree - equal"
    },
    {
        "id": 133,
        "symbol": "主",
        "sound": "shu - su - nushi",
        "meaning": "lord - master - principal"
    },
    {
        "id": 134,
        "symbol": "思",
        "sound": "shi - omou - ",
        "meaning": "think - thought - "
    },
    {
        "id": 135,
        "symbol": "親",
        "sound": "shin - oya - shitashii",
        "meaning": "parent - relative - familiar"
    },
    {
        "id": 136,
        "symbol": "花",
        "sound": "ka - ke - hana",
        "meaning": "flower - - "
    },
    {
        "id": 137,
        "symbol": "夏",
        "sound": "ka - natsu - ",
        "meaning": "summer - - "
    },
    {
        "id": 138,
        "symbol": "画",
        "sound": "ga - kaku - ",
        "meaning": "picture - stroke - stroke of symbol"
    },
    {
        "id": 139,
        "symbol": "界",
        "sound": "kai - - ",
        "meaning": "world - - "
    },
    {
        "id": 140,
        "symbol": "買",
        "sound": "bai - kau - ",
        "meaning": "buy - - "
    },
    {
        "id": 141,
        "symbol": "帰",
        "sound": "ki - kaeru - ",
        "meaning": "return - arrive - come home"
    },
    {
        "id": 142,
        "symbol": "代",
        "sound": "dai - yo - kawaru",
        "meaning": "generation - substitute - exchange"
    },
    {
        "id": 143,
        "symbol": "楽",
        "sound": "gaku - raku - tanoshii",
        "meaning": "music - comfort - ease"
    },
    {
        "id": 144,
        "symbol": "風",
        "sound": "fuu - fu - kaze",
        "meaning": "wind - air - style"
    },
    {
        "id": 145,
        "symbol": "貸",
        "sound": "tai - kasu - ",
        "meaning": "lend - - "
    },
    {
        "id": 146,
        "symbol": "方",
        "sound": "hou - kata - ",
        "meaning": "direction - way - person"
    },
    {
        "id": 147,
        "symbol": "紙",
        "sound": "shi - kami - ",
        "meaning": "paper - - "
    },
    {
        "id": 148,
        "symbol": "通",
        "sound": "tsuu - tooru - toori",
        "meaning": "avenue - traffic - go through"
    },
    {
        "id": 149,
        "symbol": "体",
        "sound": "tai - karada - katachi",
        "meaning": "body - object - "
    },
    {
        "id": 150,
        "symbol": "借",
        "sound": "shaku - kariru - ",
        "meaning": "borrow - rent - "
    },
    {
        "id": 151,
        "symbol": "漢",
        "sound": "kan - han - ",
        "meaning": "china - chinese - "
    },
    {
        "id": 152,
        "symbol": "館",
        "sound": "kan - yakata - ",
        "meaning": "building - palace - "
    },
    {
        "id": 153,
        "symbol": "元",
        "sound": "gen - gan - moto",
        "meaning": "beginning - origin - "
    },
    {
        "id": 154,
        "symbol": "考",
        "sound": "kou - kangaeru - kangae",
        "meaning": "think - consider - thought"
    },
    {
        "id": 155,
        "symbol": "着",
        "sound": "chaku - jyaku - kiru",
        "meaning": "wear - wear clothes - arrive"
    },
    {
        "id": 156,
        "symbol": "究",
        "sound": "kyuu - ku - kiwameru",
        "meaning": "research - study - "
    },
    {
        "id": 157,
        "symbol": "去",
        "sound": "kyo - ko - saru",
        "meaning": "past - gone - leave"
    },
    {
        "id": 158,
        "symbol": "京",
        "sound": "kyou - miyako - kei",
        "meaning": "capital - - "
    },
    {
        "id": 159,
        "symbol": "強",
        "sound": "kyou - gou - tsuyoi",
        "meaning": "strong - force - "
    },
    {
        "id": 160,
        "symbol": "業",
        "sound": "gyou - gou - waza",
        "meaning": "business - vocation - job"
    },
    {
        "id": 161,
        "symbol": "切",
        "sound": "setsu - sai - kiru",
        "meaning": "cut - cut off - slice"
    },
    {
        "id": 162,
        "symbol": "近",
        "sound": "kin - kon - chikai",
        "meaning": "near - early - soon"
    },
    {
        "id": 163,
        "symbol": "銀",
        "sound": "gin - shirogane - ",
        "meaning": "silver - - "
    },
    {
        "id": 164,
        "symbol": "口",
        "sound": "kou - ku - kuchi",
        "meaning": "mouth - - "
    },
    {
        "id": 165,
        "symbol": "工",
        "sound": "kou - ku - gu",
        "meaning": "construction - craft - "
    },
    {
        "id": 166,
        "symbol": "黒",
        "sound": "koku - kuro - kuroi",
        "meaning": "black - - "
    },
    {
        "id": 167,
        "symbol": "計",
        "sound": "kei - hakaru - ",
        "meaning": "plan - measure - "
    },
    {
        "id": 168,
        "symbol": "研",
        "sound": "ken - togu - ",
        "meaning": "study - sharpen - "
    },
    {
        "id": 169,
        "symbol": "建",
        "sound": "ken - kon - tateru",
        "meaning": "build - - "
    },
    {
        "id": 170,
        "symbol": "験",
        "sound": "ken - tamesu - ",
        "meaning": "test - examine - effect"
    },
    {
        "id": 171,
        "symbol": "古",
        "sound": "ko - furui - ",
        "meaning": "old - old fashioned - "
    },
    {
        "id": 172,
        "symbol": "広",
        "sound": "kou - hiroi - hiromeru",
        "meaning": "wide - broad - big"
    },
    {
        "id": 173,
        "symbol": "心",
        "sound": "shin - kokoro - ",
        "meaning": "heart - mind - "
    },
    {
        "id": 174,
        "symbol": "試",
        "sound": "shi - kokoromiru - tamesu",
        "meaning": "test - try - experiment"
    },
    {
        "id": 175,
        "symbol": "答",
        "sound": "tou - kotaeru - kotae",
        "meaning": "solution - answer - "
    },
    {
        "id": 176,
        "symbol": "事",
        "sound": "ji - zu - koto",
        "meaning": "thing - matter - business"
    },
    {
        "id": 177,
        "symbol": "転",
        "sound": "ten - - ",
        "meaning": "revolve - turn - turn around"
    },
    {
        "id": 178,
        "symbol": "作",
        "sound": "saku - sa - tsukuru",
        "meaning": "make - produce - prepare"
    },
    {
        "id": 179,
        "symbol": "茶",
        "sound": "cha - sa - ",
        "meaning": "tea - - "
    },
    {
        "id": 180,
        "symbol": "早",
        "sound": "sou - hayai - ",
        "meaning": "fast - quick - early"
    },
    {
        "id": 181,
        "symbol": "止",
        "sound": "shi - tomaru - tomeru",
        "meaning": "stop - - "
    },
    {
        "id": 182,
        "symbol": "自",
        "sound": "ji - shi - mizukara",
        "meaning": "oneself - I - self"
    },
    {
        "id": 183,
        "symbol": "仕",
        "sound": "shi - ji - tsukaeru",
        "meaning": "official - serve - attend"
    },
    {
        "id": 184,
        "symbol": "死",
        "sound": "shi - shinu - ",
        "meaning": "death - die - dead"
    },
    {
        "id": 185,
        "symbol": "始",
        "sound": "shi - hajimeru - ",
        "meaning": "begin - beginning - start"
    },
    {
        "id": 186,
        "symbol": "使",
        "sound": "shi - tsukau - tsukai",
        "meaning": "use - - "
    },
    {
        "id": 187,
        "symbol": "私",
        "sound": "shi - watashi - watakushi",
        "meaning": "I - me - private"
    },
    {
        "id": 188,
        "symbol": "地",
        "sound": "chi - ji - ",
        "meaning": "ground - land - earth"
    },
    {
        "id": 189,
        "symbol": "持",
        "sound": "ji - motsu - moteru",
        "meaning": "have - hold - carry"
    },
    {
        "id": 190,
        "symbol": "質",
        "sound": "shitsu - - ",
        "meaning": "quality - matter - substance"
    },
    {
        "id": 191,
        "symbol": "室",
        "sound": "shitsu - muro - ",
        "meaning": "room - chamber - "
    },
    {
        "id": 192,
        "symbol": "品",
        "sound": "hin - shina - ",
        "meaning": "goods - article - dignity"
    },
    {
        "id": 193,
        "symbol": "社",
        "sound": "sha - yashiro - ",
        "meaning": "company - firm - office"
    },
    {
        "id": 194,
        "symbol": "者",
        "sound": "sha - mono - ",
        "meaning": "someone - person - "
    },
    {
        "id": 195,
        "symbol": "手",
        "sound": "shu - zu - te",
        "meaning": "hand - - "
    },
    {
        "id": 196,
        "symbol": "週",
        "sound": "shuu - - ",
        "meaning": "week - - "
    },
    {
        "id": 197,
        "symbol": "習",
        "sound": "shuu - ju - narau",
        "meaning": "learn - - "
    },
    {
        "id": 198,
        "symbol": "住",
        "sound": "juu - chuu - sumu",
        "meaning": "live - reside - dwell"
    },
    {
        "id": 199,
        "symbol": "春",
        "sound": "shun - haru - ",
        "meaning": "spring - spring (season) - "
    },
    {
        "id": 200,
        "symbol": "正",
        "sound": "sei - shou - tadashii",
        "meaning": "correct - right - justice"
    },
    {
        "id": 201,
        "symbol": "少",
        "sound": "shou - sukunai - sukoshi",
        "meaning": "few - little - "
    },
    {
        "id": 202,
        "symbol": "場",
        "sound": "jou - chou - ba",
        "meaning": "area - location - place"
    },
    {
        "id": 203,
        "symbol": "知",
        "sound": "chi - shiru - ",
        "meaning": "know - wisdom - "
    },
    {
        "id": 204,
        "symbol": "真",
        "sound": "shin - ma - makoto",
        "meaning": "true - reality - truth"
    },
    {
        "id": 205,
        "symbol": "図",
        "sound": "zu - to - hakaru",
        "meaning": "map - drawing - plan"
    },
    {
        "id": 206,
        "symbol": "世",
        "sound": "sei - se - yo",
        "meaning": "world - society - generation"
    },
    {
        "id": 207,
        "symbol": "夕",
        "sound": "seki - yuu - ",
        "meaning": "evening - - "
    },
    {
        "id": 208,
        "symbol": "走",
        "sound": "sou - hashiru - ",
        "meaning": "run - - "
    },
    {
        "id": 209,
        "symbol": "族",
        "sound": "zoku - - ",
        "meaning": "tribe - family - "
    },
    {
        "id": 210,
        "symbol": "注",
        "sound": "chuu - sosogu - sasu",
        "meaning": "pour - flow - concentrate"
    },
    {
        "id": 211,
        "symbol": "田",
        "sound": "den - ta - ",
        "meaning": "field - rice field - rice patty"
    },
    {
        "id": 212,
        "symbol": "台",
        "sound": "dai - tai - ",
        "meaning": "stand - stage - pedestal"
    },
    {
        "id": 213,
        "symbol": "待",
        "sound": "tai - matsu - ",
        "meaning": "wait - depend on - "
    },
    {
        "id": 214,
        "symbol": "題",
        "sound": "dai - - ",
        "meaning": "topic - subject - "
    },
    {
        "id": 215,
        "symbol": "度",
        "sound": "do - taku - tabi",
        "meaning": "degree - time - times occurred"
    },
    {
        "id": 216,
        "symbol": "立",
        "sound": "ritsu - ryuu - tatsu",
        "meaning": "stand - stand up - "
    },
    {
        "id": 217,
        "symbol": "旅",
        "sound": "ryo - tabi - ",
        "meaning": "trip - travel - "
    },
    {
        "id": 218,
        "symbol": "力",
        "sound": "ryoku - riki - chikara",
        "meaning": "power - strength - exertion"
    },
    {
        "id": 219,
        "symbol": "昼",
        "sound": "chuu - hiru - ",
        "meaning": "noon - daytime - day"
    },
    {
        "id": 220,
        "symbol": "町",
        "sound": "chou - machi - ",
        "meaning": "town - village - "
    },
    {
        "id": 221,
        "symbol": "鳥",
        "sound": "chou - tori - ",
        "meaning": "bird - - "
    },
    {
        "id": 222,
        "symbol": "店",
        "sound": "ten - mise - ",
        "meaning": "store - shop - problem"
    },
    {
        "id": 223,
        "symbol": "問",
        "sound": "mon - tou - ",
        "meaning": "question - ask - "
    },
    {
        "id": 224,
        "symbol": "冬",
        "sound": "tou - fuyu - ",
        "meaning": "winter - winter (season) - course"
    },
    {
        "id": 225,
        "symbol": "道",
        "sound": "dou - tou - michi",
        "meaning": "way - road - "
    },
    {
        "id": 226,
        "symbol": "堂",
        "sound": "dou - - ",
        "meaning": "hall - - "
    },
    {
        "id": 227,
        "symbol": "特",
        "sound": "toku - - ",
        "meaning": "special - - "
    },
    {
        "id": 228,
        "symbol": "肉",
        "sound": "niku - - ",
        "meaning": "meat - - "
    },
    {
        "id": 229,
        "symbol": "野",
        "sound": "ya - sho - no",
        "meaning": "plains - field - "
    },
    {
        "id": 230,
        "symbol": "発",
        "sound": "hatsu - abaku - tatsu",
        "meaning": "depart - start - happen"
    },
    {
        "id": 231,
        "symbol": "飯",
        "sound": "han - meshi - ",
        "meaning": "meal - rice - cooked rice"
    },
    {
        "id": 232,
        "symbol": "病",
        "sound": "byou - yamai - yamu",
        "meaning": "ill - sick - "
    },
    {
        "id": 233,
        "symbol": "不",
        "sound": "fu - bu - ",
        "meaning": "non - negative - bad"
    },
    {
        "id": 234,
        "symbol": "服",
        "sound": "fuku - - ",
        "meaning": "clothing - obey - "
    },
    {
        "id": 235,
        "symbol": "物",
        "sound": "butsu - motsu - mono",
        "meaning": "thing - matter - object"
    },
    {
        "id": 236,
        "symbol": "文",
        "sound": "bun - mon - fumi",
        "meaning": "sentence - literature - "
    },
    {
        "id": 237,
        "symbol": "別",
        "sound": "betsu - wakareru - wakeru",
        "meaning": "separate - another - specially"
    },
    {
        "id": 238,
        "symbol": "勉",
        "sound": "ben - tsutomeru - ",
        "meaning": "exertion - - "
    },
    {
        "id": 239,
        "symbol": "目",
        "sound": "moku - boku - me",
        "meaning": "eye - - "
    },
    {
        "id": 240,
        "symbol": "用",
        "sound": "you - mochiiru - ",
        "meaning": "use - service - business"
    },
    {
        "id": 241,
        "symbol": "夜",
        "sound": "ya - yo - yoru",
        "meaning": "night - evening - "
    },
    {
        "id": 242,
        "symbol": "曜",
        "sound": "you - - ",
        "meaning": "weekday - - "
    },
    {
        "id": 243,
        "symbol": "洋",
        "sound": "you - - ",
        "meaning": "west - western - ocean"
    },
    {
        "id": 244,
        "symbol": "理",
        "sound": "ri - - ",
        "meaning": "logic - reason - truth"
    },
    {
        "id": 245,
        "symbol": "料",
        "sound": "ryou - - ",
        "meaning": "fee - materials - "
    },
    {
        "id": 246,
        "symbol": "相",
        "sound": "ai - sou - shou",
        "meaning": "mutual - appearance - minister (of state)"
    },
    {
        "id": 247,
        "symbol": "愛",
        "sound": "ai - - ",
        "meaning": "love - affection - "
    },
    {
        "id": 248,
        "symbol": "合",
        "sound": "au - gou - ka (tsu)",
        "meaning": "together - fit - to be together"
    },
    {
        "id": 249,
        "symbol": "商",
        "sound": "akinau - shou - ",
        "meaning": "sell - trade - "
    },
    {
        "id": 250,
        "symbol": "浅",
        "sound": "asai - sen - ",
        "meaning": "shallow - superficial - "
    },
    {
        "id": 251,
        "symbol": "預",
        "sound": "azukaru - yo - azukeru",
        "meaning": "keep - charge - deposit"
    },
    {
        "id": 252,
        "symbol": "汗",
        "sound": "ase - kan - ",
        "meaning": "sweat - perspiration - "
    },
    {
        "id": 253,
        "symbol": "遊",
        "sound": "asobu - yuu - ",
        "meaning": "play - idle - playful"
    },
    {
        "id": 254,
        "symbol": "値",
        "sound": "atai - chi - ne",
        "meaning": "value - price - to value"
    },
    {
        "id": 255,
        "symbol": "与",
        "sound": "ataeru - yo - ",
        "meaning": "give - award - assign"
    },
    {
        "id": 256,
        "symbol": "温",
        "sound": "atatakai - on - ",
        "meaning": "warm - temperature - "
    },
    {
        "id": 257,
        "symbol": "暖",
        "sound": "atatakai - dan - ",
        "meaning": "warm - cordial - "
    },
    {
        "id": 258,
        "symbol": "頭",
        "sound": "atama - tou - zu",
        "meaning": "head - top - "
    },
    {
        "id": 259,
        "symbol": "辺",
        "sound": "atari - hen - be",
        "meaning": "vicinity - neighborhood - "
    },
    {
        "id": 260,
        "symbol": "当",
        "sound": "ataru - tou - ateru",
        "meaning": "hit - win - guess"
    },
    {
        "id": 261,
        "symbol": "圧",
        "sound": "atsu - - ",
        "meaning": "pressure - - "
    },
    {
        "id": 262,
        "symbol": "暑",
        "sound": "atsui - sho - ",
        "meaning": "heat - hot - summer heat"
    },
    {
        "id": 263,
        "symbol": "熱",
        "sound": "atsui - netsu - ",
        "meaning": "heat - hot - fever"
    },
    {
        "id": 264,
        "symbol": "厚",
        "sound": "atsui - kou - ",
        "meaning": "thick - - "
    },
    {
        "id": 265,
        "symbol": "跡",
        "sound": "ato - seki - ",
        "meaning": "trace - marks - remains"
    },
    {
        "id": 266,
        "symbol": "暴",
        "sound": "abaku - bou - ",
        "meaning": "disclose - open - violent"
    },
    {
        "id": 267,
        "symbol": "浴",
        "sound": "abiru - yoku - ",
        "meaning": "bathe - - "
    },
    {
        "id": 268,
        "symbol": "危",
        "sound": "abunai - ki - ayaui",
        "meaning": "dangerous - unsafe - unsteady"
    },
    {
        "id": 269,
        "symbol": "油",
        "sound": "abura - yu - ",
        "meaning": "oil - - "
    },
    {
        "id": 270,
        "symbol": "脂",
        "sound": "abura - shi - ",
        "meaning": "fat - - "
    },
    {
        "id": 271,
        "symbol": "甘",
        "sound": "amai - kan - ",
        "meaning": "sweet - - "
    },
    {
        "id": 272,
        "symbol": "余",
        "sound": "amasu - yo - amaru",
        "meaning": "remain - remainder - to leave over"
    },
    {
        "id": 273,
        "symbol": "編",
        "sound": "amu - hen - ",
        "meaning": "compile - knit - "
    },
    {
        "id": 274,
        "symbol": "過",
        "sound": "ayamachi - ka - sugiru",
        "meaning": "fault - exceed - pass"
    },
    {
        "id": 275,
        "symbol": "誤",
        "sound": "ayamaru - go - ",
        "meaning": "mistake - fault - "
    },
    {
        "id": 276,
        "symbol": "荒",
        "sound": "arai - kou - areru",
        "meaning": "violent - wild - rough"
    },
    {
        "id": 277,
        "symbol": "洗",
        "sound": "arau - sen - ",
        "meaning": "wash - - "
    },
    {
        "id": 278,
        "symbol": "争",
        "sound": "arasou - sou - arasoi",
        "meaning": "struggle - quarrel - dispute"
    },
    {
        "id": 279,
        "symbol": "改",
        "sound": "aratameru - aratamaru - kai",
        "meaning": "change - reform - reformed"
    },
    {
        "id": 280,
        "symbol": "表",
        "sound": "arawasu - hyou - omote",
        "meaning": "show - list - schedule"
    },
    {
        "id": 281,
        "symbol": "現",
        "sound": "arawasu - gen - ",
        "meaning": "actual - appear - "
    },
    {
        "id": 282,
        "symbol": "著",
        "sound": "arawasu - cho - ichijirushii",
        "meaning": "author - writer - remarkable"
    },
    {
        "id": 283,
        "symbol": "在",
        "sound": "aru - zai - ",
        "meaning": "exist - country - suburbs"
    },
    {
        "id": 284,
        "symbol": "暗",
        "sound": "an - kurai - ",
        "meaning": "dark - - "
    },
    {
        "id": 285,
        "symbol": "委",
        "sound": "i - - ",
        "meaning": "commit - entrust - "
    },
    {
        "id": 286,
        "symbol": "衣",
        "sound": "i - koromo - ",
        "meaning": "clothes - garments - "
    },
    {
        "id": 287,
        "symbol": "囲",
        "sound": "i - kakomu - kakou",
        "meaning": "enclose - surround - "
    },
    {
        "id": 288,
        "symbol": "位",
        "sound": "i - kurai - ",
        "meaning": "rank - position - about"
    },
    {
        "id": 289,
        "symbol": "胃",
        "sound": "i - - ",
        "meaning": "stomach - - "
    },
    {
        "id": 290,
        "symbol": "易",
        "sound": "i - eki - yasui",
        "meaning": "easy - - "
    },
    {
        "id": 291,
        "symbol": "移",
        "sound": "i - utsuru - utsusu",
        "meaning": "transfer - infect - move"
    },
    {
        "id": 292,
        "symbol": "依",
        "sound": "i - e - ",
        "meaning": "depend - depend on - "
    },
    {
        "id": 293,
        "symbol": "偉",
        "sound": "i - erai - ",
        "meaning": "great - remarkable - "
    },
    {
        "id": 294,
        "symbol": "違",
        "sound": "i - chigau - chigaeru",
        "meaning": "differ - wrong - "
    },
    {
        "id": 295,
        "symbol": "怒",
        "sound": "ikaru - do - okoru",
        "meaning": "anger - get angry - angry"
    },
    {
        "id": 296,
        "symbol": "息",
        "sound": "iki - soku - ",
        "meaning": "breath - - "
    },
    {
        "id": 297,
        "symbol": "域",
        "sound": "iki - - ",
        "meaning": "boundary - - "
    },
    {
        "id": 298,
        "symbol": "勢",
        "sound": "ikioi - sei - ",
        "meaning": "power - - "
    },
    {
        "id": 299,
        "symbol": "幾",
        "sound": "iku - ki - ",
        "meaning": "how many - some - "
    },
    {
        "id": 300,
        "symbol": "育",
        "sound": "iku - sodatsu - sodateru",
        "meaning": "bring up - educate - grow"
    },
    {
        "id": 301,
        "symbol": "戦",
        "sound": "ikusa - sen - tatakau",
        "meaning": "war - - "
    },
    {
        "id": 302,
        "symbol": "池",
        "sound": "ike - chi - ",
        "meaning": "pond - - "
    },
    {
        "id": 303,
        "symbol": "勇",
        "sound": "isamu - yuu - ",
        "meaning": "brave - - "
    },
    {
        "id": 304,
        "symbol": "石",
        "sound": "ishi - seki - shaku",
        "meaning": "stone - rock - "
    },
    {
        "id": 305,
        "symbol": "泉",
        "sound": "izumi - sen - ",
        "meaning": "spring - - "
    },
    {
        "id": 306,
        "symbol": "忙",
        "sound": "isogashii - bou - ",
        "meaning": "busy - - "
    },
    {
        "id": 307,
        "symbol": "板",
        "sound": "ita - han - ban",
        "meaning": "board - plate - "
    },
    {
        "id": 308,
        "symbol": "痛",
        "sound": "itai - tsuu - itamu",
        "meaning": "pain - hurt - "
    },
    {
        "id": 309,
        "symbol": "抱",
        "sound": "idaku - hou - daku",
        "meaning": "hug - hold - "
    },
    {
        "id": 310,
        "symbol": "頂",
        "sound": "itadaki - chou - itadaku",
        "meaning": "summit - receive - summit (mountain)"
    },
    {
        "id": 311,
        "symbol": "市",
        "sound": "ichi - shi - ",
        "meaning": "market - city - "
    },
    {
        "id": 312,
        "symbol": "糸",
        "sound": "ito - shi - ",
        "meaning": "thread - - "
    },
    {
        "id": 313,
        "symbol": "営",
        "sound": "itonamu - ei - ",
        "meaning": "manage - barracks - "
    },
    {
        "id": 314,
        "symbol": "否",
        "sound": "ina - hi - ",
        "meaning": "no - denial - "
    },
    {
        "id": 315,
        "symbol": "命",
        "sound": "inochi - mei - myou",
        "meaning": "life - order - "
    },
    {
        "id": 316,
        "symbol": "祈",
        "sound": "inoru - ki - ",
        "meaning": "pray - to pray - prayer"
    },
    {
        "id": 317,
        "symbol": "要",
        "sound": "iru - you - ",
        "meaning": "require - necessary - "
    },
    {
        "id": 318,
        "symbol": "居",
        "sound": "iru - kyo - ",
        "meaning": "reside - - "
    },
    {
        "id": 319,
        "symbol": "岩",
        "sound": "iwa - gan - ",
        "meaning": "rock - crag - "
    },
    {
        "id": 320,
        "symbol": "祝",
        "sound": "iwau - shuku - shuu",
        "meaning": "celebrate - - "
    },
    {
        "id": 321,
        "symbol": "引",
        "sound": "in - hiku - hikeru",
        "meaning": "draw - pull - "
    },
    {
        "id": 322,
        "symbol": "印",
        "sound": "in - shirushi - ",
        "meaning": "sign - mark - "
    },
    {
        "id": 323,
        "symbol": "因",
        "sound": "in - yoru - ",
        "meaning": "cause - - "
    },
    {
        "id": 324,
        "symbol": "羽",
        "sound": "u - ha - hane",
        "meaning": "feather - wing - "
    },
    {
        "id": 325,
        "symbol": "宇",
        "sound": "u - - ",
        "meaning": "universe - eaves - house"
    },
    {
        "id": 326,
        "symbol": "初",
        "sound": "hatsu - sho - hajime",
        "meaning": "first - beginning - begin"
    },
    {
        "id": 327,
        "symbol": "植",
        "sound": "ueru - uwaru - shoku",
        "meaning": "plant - to plant - set up"
    },
    {
        "id": 328,
        "symbol": "伺",
        "sound": "ukagau - shi - ",
        "meaning": "ask - visit - hear"
    },
    {
        "id": 329,
        "symbol": "浮",
        "sound": "ukabu - fu - uku",
        "meaning": "float - to float - come to mind"
    },
    {
        "id": 330,
        "symbol": "受",
        "sound": "ukaru - ju - ukeru",
        "meaning": "receive - popularity - receptacle"
    },
    {
        "id": 331,
        "symbol": "承",
        "sound": "uketamawaru - shou - ",
        "meaning": "hear - agree - "
    },
    {
        "id": 332,
        "symbol": "失",
        "sound": "ushinau - shitsu - ",
        "meaning": "lose - slip - "
    },
    {
        "id": 333,
        "symbol": "薄",
        "sound": "usui - haku - ",
        "meaning": "thin - pale - weak"
    },
    {
        "id": 334,
        "symbol": "疑",
        "sound": "utagau - gi - utagai",
        "meaning": "doubt - suspect - suspicion"
    },
    {
        "id": 335,
        "symbol": "内",
        "sound": "uchi - nai - dai",
        "meaning": "inside - - "
    },
    {
        "id": 336,
        "symbol": "打",
        "sound": "utsu - da - ",
        "meaning": "strick - hit - beat"
    },
    {
        "id": 337,
        "symbol": "美",
        "sound": "utsukushii - bi - ",
        "meaning": "beautiful - beauty - "
    },
    {
        "id": 338,
        "symbol": "器",
        "sound": "utsuwa - ki - ",
        "meaning": "vessel - tool - "
    },
    {
        "id": 339,
        "symbol": "腕",
        "sound": "ude - wan - ",
        "meaning": "arm - talent - ability"
    },
    {
        "id": 340,
        "symbol": "産",
        "sound": "ubu - san - umu",
        "meaning": "childbearing - product - birth"
    },
    {
        "id": 341,
        "symbol": "馬",
        "sound": "uma - ba - ma",
        "meaning": "horse - - "
    },
    {
        "id": 342,
        "symbol": "埋",
        "sound": "umaru - mai - umeru",
        "meaning": "bury - fill - fill up"
    },
    {
        "id": 343,
        "symbol": "敬",
        "sound": "uyamau - kei - ",
        "meaning": "respect - - "
    },
    {
        "id": 344,
        "symbol": "裏",
        "sound": "ura - ri - ",
        "meaning": "opposite - back - reverse"
    },
    {
        "id": 345,
        "symbol": "占",
        "sound": "uranau - sen - shimeru",
        "meaning": "divination - to hold (a seat) - occupy"
    },
    {
        "id": 346,
        "symbol": "得",
        "sound": "uru - toku - eru",
        "meaning": "acquire - gain - "
    },
    {
        "id": 347,
        "symbol": "絵",
        "sound": "e - kai - ",
        "meaning": "picture - - "
    },
    {
        "id": 348,
        "symbol": "回",
        "sound": "e - kai - mawaru",
        "meaning": "turn - to turn - "
    },
    {
        "id": 349,
        "symbol": "泳",
        "sound": "ei - oyogu - ",
        "meaning": "swim - - "
    },
    {
        "id": 350,
        "symbol": "栄",
        "sound": "ei - sakaeru - hae",
        "meaning": "glory - flourish - "
    },
    {
        "id": 351,
        "symbol": "永",
        "sound": "ei - nagai - ",
        "meaning": "eternal - - "
    },
    {
        "id": 352,
        "symbol": "鋭",
        "sound": "ei - surudoi - ",
        "meaning": "sharp - - "
    },
    {
        "id": 353,
        "symbol": "役",
        "sound": "eki - yaku - ",
        "meaning": "office - duty - service"
    },
    {
        "id": 354,
        "symbol": "液",
        "sound": "eki - - ",
        "meaning": "liquid - - "
    },
    {
        "id": 355,
        "symbol": "枝",
        "sound": "eda - shi - ",
        "meaning": "branch - tree branch - "
    },
    {
        "id": 356,
        "symbol": "越",
        "sound": "etsu - koeru - kosu",
        "meaning": "exceed - cross - move"
    },
    {
        "id": 357,
        "symbol": "笑",
        "sound": "emu - warau - shou",
        "meaning": "laugh - smile - "
    },
    {
        "id": 358,
        "symbol": "選",
        "sound": "erabu - sen - ",
        "meaning": "choose - choice - "
    },
    {
        "id": 359,
        "symbol": "園",
        "sound": "en - sono - ",
        "meaning": "garden - - "
    },
    {
        "id": 360,
        "symbol": "遠",
        "sound": "en - on - tooi",
        "meaning": "far - - "
    },
    {
        "id": 361,
        "symbol": "塩",
        "sound": "en - shio - ",
        "meaning": "salt - - "
    },
    {
        "id": 362,
        "symbol": "演",
        "sound": "en - - ",
        "meaning": "act - perform - put on a play"
    },
    {
        "id": 363,
        "symbol": "延",
        "sound": "en - nobiru - nobasu",
        "meaning": "postpone - extend - "
    },
    {
        "id": 364,
        "symbol": "煙",
        "sound": "en - kemuri - kemuru",
        "meaning": "smoke - smokey - "
    },
    {
        "id": 365,
        "symbol": "緒",
        "sound": "sho - cho - o",
        "meaning": "cord - string (of a musical instrument) - beginning (lineage)"
    },
    {
        "id": 366,
        "symbol": "汚",
        "sound": "o - kegasu - kitanai",
        "meaning": "soil - dirty - get dirty"
    },
    {
        "id": 367,
        "symbol": "和",
        "sound": "wa - yawaraku - nagomu",
        "meaning": "peace - Japan - sum"
    },
    {
        "id": 368,
        "symbol": "老",
        "sound": "oiru - rou - fukeru",
        "meaning": "old - - "
    },
    {
        "id": 369,
        "symbol": "負",
        "sound": "ou - fu - makeru",
        "meaning": "lose - defeated - to bear"
    },
    {
        "id": 370,
        "symbol": "追",
        "sound": "ou - tsui - ",
        "meaning": "chase - - "
    },
    {
        "id": 371,
        "symbol": "王",
        "sound": "ou - - ",
        "meaning": "king - - "
    },
    {
        "id": 372,
        "symbol": "黄",
        "sound": "ou - kou - ki",
        "meaning": "yellow - - "
    },
    {
        "id": 373,
        "symbol": "央",
        "sound": "ou - - ",
        "meaning": "center - middle - "
    },
    {
        "id": 374,
        "symbol": "横",
        "sound": "ou - yoko - ",
        "meaning": "side - width - beside"
    },
    {
        "id": 375,
        "symbol": "欧",
        "sound": "ou - - ",
        "meaning": "europe - european - "
    },
    {
        "id": 376,
        "symbol": "押",
        "sound": "ou - osu - osaeru",
        "meaning": "push - - "
    },
    {
        "id": 377,
        "symbol": "奥",
        "sound": "ou - oku - ",
        "meaning": "interior - depths - inner"
    },
    {
        "id": 378,
        "symbol": "犯",
        "sound": "okasu - han - ",
        "meaning": "violate - offense - to commit"
    },
    {
        "id": 379,
        "symbol": "拝",
        "sound": "ogamu - hai - ",
        "meaning": "worship - humbly - "
    },
    {
        "id": 380,
        "symbol": "補",
        "sound": "oginau - ho - ",
        "meaning": "supply - supplement - compensate"
    },
    {
        "id": 381,
        "symbol": "置",
        "sound": "oku - chi - ",
        "meaning": "place - put - "
    },
    {
        "id": 382,
        "symbol": "億",
        "sound": "oku - - ",
        "meaning": "hundred million - 100, 000, 000 - "
    },
    {
        "id": 383,
        "symbol": "遅",
        "sound": "okureru - chi - osoi",
        "meaning": "slow - late - "
    },
    {
        "id": 384,
        "symbol": "贈",
        "sound": "okuru - zou - sou",
        "meaning": "gift - present - to present"
    },
    {
        "id": 385,
        "symbol": "幼",
        "sound": "osanai - - you",
        "meaning": "childish - young - "
    },
    {
        "id": 386,
        "symbol": "治",
        "sound": "ji - chi - naosu",
        "meaning": "rule - govern - cure"
    },
    {
        "id": 387,
        "symbol": "収",
        "sound": "shuu - osamaru - ",
        "meaning": "obtain - to store - pay (taxes)"
    },
    {
        "id": 388,
        "symbol": "恐",
        "sound": "osoreru - kyou - osoroshii",
        "meaning": "fear - anxiety - fearful"
    },
    {
        "id": 389,
        "symbol": "落",
        "sound": "ochiru - raku - otosu",
        "meaning": "fall - to fall - drop"
    },
    {
        "id": 390,
        "symbol": "夫",
        "sound": "otto - fu - fuu",
        "meaning": "husband - man - "
    },
    {
        "id": 391,
        "symbol": "訪",
        "sound": "otozureru - hou - tazuneru",
        "meaning": "visit - - "
    },
    {
        "id": 392,
        "symbol": "踊",
        "sound": "odori - you - odoru",
        "meaning": "dance - to dance - "
    },
    {
        "id": 393,
        "symbol": "各",
        "sound": "onoono - kaku - ",
        "meaning": "each - every - "
    },
    {
        "id": 394,
        "symbol": "帯",
        "sound": "obi - tai - obiru",
        "meaning": "belt - region - to wear"
    },
    {
        "id": 395,
        "symbol": "覚",
        "sound": "oboeru - kaku - ",
        "meaning": "remember - understand - "
    },
    {
        "id": 396,
        "symbol": "面",
        "sound": "omo - men - omote",
        "meaning": "face - surface - front"
    },
    {
        "id": 397,
        "symbol": "折",
        "sound": "ori - setsu - oru",
        "meaning": "break - fold - "
    },
    {
        "id": 398,
        "symbol": "降",
        "sound": "kou - furu - oriru",
        "meaning": "fall - come down - get off"
    },
    {
        "id": 399,
        "symbol": "御",
        "sound": "on - gyo - go",
        "meaning": "honorific prefix - - "
    },
    {
        "id": 400,
        "symbol": "香",
        "sound": "ka - kou - kaori",
        "meaning": "fragrance - smell - "
    },
    {
        "id": 401,
        "symbol": "科",
        "sound": "ka - - ",
        "meaning": "subject of study - - "
    },
    {
        "id": 402,
        "symbol": "化",
        "sound": "ka - ke - bakeru",
        "meaning": "change - change into - "
    },
    {
        "id": 403,
        "symbol": "荷",
        "sound": "ka - ni - ",
        "meaning": "load - - "
    },
    {
        "id": 404,
        "symbol": "加",
        "sound": "ka - kuwaeru - kuwawaru",
        "meaning": "add - - "
    },
    {
        "id": 405,
        "symbol": "果",
        "sound": "ka - hatasu - hateru",
        "meaning": "fruit - end - "
    },
    {
        "id": 406,
        "symbol": "貨",
        "sound": "ka - - ",
        "meaning": "money - goods - "
    },
    {
        "id": 407,
        "symbol": "課",
        "sound": "ka - - ",
        "meaning": "section - lesson - "
    },
    {
        "id": 408,
        "symbol": "可",
        "sound": "ka - - ",
        "meaning": "possible - approve - "
    },
    {
        "id": 409,
        "symbol": "河",
        "sound": "ka - - kawa",
        "meaning": "river - - "
    },
    {
        "id": 410,
        "symbol": "菓",
        "sound": "ka - - ",
        "meaning": "candy - confectionery - "
    },
    {
        "id": 411,
        "symbol": "靴",
        "sound": "ka - kutsu - ",
        "meaning": "shoes - - "
    },
    {
        "id": 412,
        "symbol": "貝",
        "sound": "kai - - ",
        "meaning": "shell - shellfish - "
    },
    {
        "id": 413,
        "symbol": "階",
        "sound": "kai - - ",
        "meaning": "floor (of a building) - rank - "
    },
    {
        "id": 414,
        "symbol": "械",
        "sound": "kai - - ",
        "meaning": "machine - - "
    },
    {
        "id": 415,
        "symbol": "快",
        "sound": "kai - - kokoroyoi",
        "meaning": "pleasant - - "
    },
    {
        "id": 416,
        "symbol": "解",
        "sound": "kai - tokeru - toku",
        "meaning": "explanation - solve - dissolve"
    },
    {
        "id": 417,
        "symbol": "灰",
        "sound": "kai - hai - ",
        "meaning": "ashes - - "
    },
    {
        "id": 418,
        "symbol": "介",
        "sound": "kai - - ",
        "meaning": "mediate - aid - come between"
    },
    {
        "id": 419,
        "symbol": "皆",
        "sound": "kai - mina - ",
        "meaning": "all - everyone - everything"
    },
    {
        "id": 420,
        "symbol": "害",
        "sound": "gai - - ",
        "meaning": "harm - calamity - "
    },
    {
        "id": 421,
        "symbol": "交",
        "sound": "kau - kou - majiru",
        "meaning": "mix - be mixed - associate"
    },
    {
        "id": 422,
        "symbol": "返",
        "sound": "kaesu - hen - kaeru",
        "meaning": "return - - "
    },
    {
        "id": 423,
        "symbol": "省",
        "sound": "kaerimiru - sei - shou",
        "meaning": "government department - omit - reflect upon"
    },
    {
        "id": 424,
        "symbol": "変",
        "sound": "kaeru - hen - kawaru",
        "meaning": "change - abnormal - strange"
    },
    {
        "id": 425,
        "symbol": "替",
        "sound": "kaeru - tai - kawaru",
        "meaning": "replace - - "
    },
    {
        "id": 426,
        "symbol": "換",
        "sound": "kaeru - kan - kawaru",
        "meaning": "exchange - - "
    },
    {
        "id": 427,
        "symbol": "係",
        "sound": "kakari - kei - kakaru",
        "meaning": "connect - in charge - "
    },
    {
        "id": 428,
        "symbol": "掛",
        "sound": "kakari - kakeru - kakaru",
        "meaning": "hang - catch - call"
    },
    {
        "id": 429,
        "symbol": "限",
        "sound": "kagiru - gen - ",
        "meaning": "limit - - "
    },
    {
        "id": 430,
        "symbol": "欠",
        "sound": "kaku - ketsu - kakeru",
        "meaning": "lack - - "
    },
    {
        "id": 431,
        "symbol": "角",
        "sound": "kaku - kado - tsuno",
        "meaning": "angle - corner - horn"
    },
    {
        "id": 432,
        "symbol": "客",
        "sound": "kaku - kyaku - ",
        "meaning": "guest - customer - "
    },
    {
        "id": 433,
        "symbol": "格",
        "sound": "kaku - kou - ",
        "meaning": "norm - status - "
    },
    {
        "id": 434,
        "symbol": "確",
        "sound": "kaku - tashika - tashikameru",
        "meaning": "certain - make certain - "
    },
    {
        "id": 435,
        "symbol": "革",
        "sound": "kaku - kawa - ",
        "meaning": "leather - reform - "
    },
    {
        "id": 436,
        "symbol": "額",
        "sound": "gaku - hitai - ",
        "meaning": "amount - forehead - "
    },
    {
        "id": 437,
        "symbol": "賢",
        "sound": "kashikoi - ken - ",
        "meaning": "wise - clever - smart"
    },
    {
        "id": 438,
        "symbol": "数",
        "sound": "kazu - suu - kazoeru",
        "meaning": "count - number - "
    },
    {
        "id": 439,
        "symbol": "形",
        "sound": "kata - kei - katachi",
        "meaning": "shape - form - type"
    },
    {
        "id": 440,
        "symbol": "型",
        "sound": "kata - kei - ",
        "meaning": "type - - "
    },
    {
        "id": 441,
        "symbol": "片",
        "sound": "kata - hen - ",
        "meaning": "fragment - onesided - "
    },
    {
        "id": 442,
        "symbol": "肩",
        "sound": "kata - ken - ",
        "meaning": "shoulder - - "
    },
    {
        "id": 443,
        "symbol": "固",
        "sound": "katai - ko - katameru",
        "meaning": "solid - firm - hard"
    },
    {
        "id": 444,
        "symbol": "難",
        "sound": "katai - nan - muzukashii",
        "meaning": "difficult - hard - disaster"
    },
    {
        "id": 445,
        "symbol": "硬",
        "sound": "katai - kou - ",
        "meaning": "hard - - "
    },
    {
        "id": 446,
        "symbol": "堅",
        "sound": "katai - ken - ",
        "meaning": "firm - - hard"
    },
    {
        "id": 447,
        "symbol": "傾",
        "sound": "katamuku - kei - katamukeru",
        "meaning": "incline - lean - "
    },
    {
        "id": 448,
        "symbol": "勝",
        "sound": "katsu - shou - masaru",
        "meaning": "win - excel - "
    },
    {
        "id": 449,
        "symbol": "活",
        "sound": "katsu - - ",
        "meaning": "active - live - activity"
    },
    {
        "id": 450,
        "symbol": "割",
        "sound": "katsu - waru - saku",
        "meaning": "divide - - "
    },
    {
        "id": 451,
        "symbol": "担",
        "sound": "katsugu - tan - ninau",
        "meaning": "bear - undertake - "
    },
    {
        "id": 452,
        "symbol": "門",
        "sound": "mon - kado - ",
        "meaning": "gate - - "
    },
    {
        "id": 453,
        "symbol": "悲",
        "sound": "kanashii - hi - kanashimu",
        "meaning": "sad - - "
    },
    {
        "id": 454,
        "symbol": "必",
        "sound": "kanarazu - hitsu - ",
        "meaning": "without fail - - "
    },
    {
        "id": 455,
        "symbol": "彼",
        "sound": "kano - hi - kare",
        "meaning": "he - that - "
    },
    {
        "id": 456,
        "symbol": "構",
        "sound": "kamau - kou - kamaeru",
        "meaning": "structure - posture - construct"
    },
    {
        "id": 457,
        "symbol": "神",
        "sound": "kami - shin - jin",
        "meaning": "God - god - mind"
    },
    {
        "id": 458,
        "symbol": "髪",
        "sound": "kami - hatsu - ",
        "meaning": "hair - - "
    },
    {
        "id": 459,
        "symbol": "辛",
        "sound": "karai - shin - ",
        "meaning": "spicy - hot (food) - hard"
    },
    {
        "id": 460,
        "symbol": "枯",
        "sound": "karasu - ko - kareru",
        "meaning": "dry - wither - to dry"
    },
    {
        "id": 461,
        "symbol": "絡",
        "sound": "karamaru - raku - karamu",
        "meaning": "entwine - to twine around - "
    },
    {
        "id": 462,
        "symbol": "軽",
        "sound": "karui - kei - karoyaka",
        "meaning": "light - light (weight) - "
    },
    {
        "id": 463,
        "symbol": "皮",
        "sound": "kawa - hi - ",
        "meaning": "skin - - "
    },
    {
        "id": 464,
        "symbol": "側",
        "sound": "kawa - soku - ",
        "meaning": "side - - "
    },
    {
        "id": 465,
        "symbol": "乾",
        "sound": "kawakasu - kan - kawaku",
        "meaning": "dry - - "
    },
    {
        "id": 466,
        "symbol": "寒",
        "sound": "kan - samui - ",
        "meaning": "cold - - "
    },
    {
        "id": 467,
        "symbol": "感",
        "sound": "kan - - ",
        "meaning": "feeling - sense - feel"
    },
    {
        "id": 468,
        "symbol": "完",
        "sound": "kan - - ",
        "meaning": "complete - perfect - "
    },
    {
        "id": 469,
        "symbol": "官",
        "sound": "kan - - ",
        "meaning": "government - - "
    },
    {
        "id": 470,
        "symbol": "管",
        "sound": "kan - kuda - ",
        "meaning": "pipe - control - "
    },
    {
        "id": 471,
        "symbol": "関",
        "sound": "kan - seki - ",
        "meaning": "concern - barrier - "
    },
    {
        "id": 472,
        "symbol": "観",
        "sound": "kan - - ",
        "meaning": "view - - "
    },
    {
        "id": 473,
        "symbol": "刊",
        "sound": "kan - - ",
        "meaning": "publish - - "
    },
    {
        "id": 474,
        "symbol": "慣",
        "sound": "kan - nareru - narasu",
        "meaning": "habit - custom - get used to"
    },
    {
        "id": 475,
        "symbol": "干",
        "sound": "kan - hosu - hiru",
        "meaning": "dry - - "
    },
    {
        "id": 476,
        "symbol": "巻",
        "sound": "kan - maku - maki",
        "meaning": "roll up - volume - roll"
    },
    {
        "id": 477,
        "symbol": "簡",
        "sound": "kan - - ",
        "meaning": "simple - - "
    },
    {
        "id": 478,
        "symbol": "缶",
        "sound": "kan - - ",
        "meaning": "can - canned (food, drink) - "
    },
    {
        "id": 479,
        "symbol": "患",
        "sound": "kan - wazurau - ",
        "meaning": "sickness - sick - "
    },
    {
        "id": 480,
        "symbol": "丸",
        "sound": "gan - maru - marui",
        "meaning": "round - - "
    },
    {
        "id": 481,
        "symbol": "岸",
        "sound": "gan - kishi - ",
        "meaning": "shore - seashore - "
    },
    {
        "id": 482,
        "symbol": "願",
        "sound": "gan - negau - ",
        "meaning": "wish - ask a favor - desire"
    },
    {
        "id": 483,
        "symbol": "含",
        "sound": "gan - fukumu - fukumeru",
        "meaning": "contain - include - "
    },
    {
        "id": 484,
        "symbol": "記",
        "sound": "ki - shirushu - ",
        "meaning": "write down - record - "
    },
    {
        "id": 485,
        "symbol": "期",
        "sound": "ki - go - ",
        "meaning": "term - expect - "
    },
    {
        "id": 486,
        "symbol": "希",
        "sound": "ki - - ",
        "meaning": "rare - aspire - desire"
    },
    {
        "id": 487,
        "symbol": "季",
        "sound": "ki - - ",
        "meaning": "season - season (of the year) - "
    },
    {
        "id": 488,
        "symbol": "喜",
        "sound": "ki - yorokobu - ",
        "meaning": "joy - happy - "
    },
    {
        "id": 489,
        "symbol": "機",
        "sound": "ki - hata - ",
        "meaning": "machine - occation - "
    },
    {
        "id": 490,
        "symbol": "規",
        "sound": "ki - - ",
        "meaning": "rule - regulation - "
    },
    {
        "id": 491,
        "symbol": "寄",
        "sound": "ki - yoru - yoseru",
        "meaning": "approach - gather - contribute"
    },
    {
        "id": 492,
        "symbol": "机",
        "sound": "ki - tsukue - ",
        "meaning": "desk - - "
    },
    {
        "id": 493,
        "symbol": "議",
        "sound": "gi - - ",
        "meaning": "discuss - debate - "
    },
    {
        "id": 494,
        "symbol": "技",
        "sound": "gi - waza - ",
        "meaning": "skill - - "
    },
    {
        "id": 495,
        "symbol": "消",
        "sound": "kieru - shou - kesu",
        "meaning": "extinguish - put out - spend"
    },
    {
        "id": 496,
        "symbol": "利",
        "sound": "kiku - ri - ",
        "meaning": "advantage - profit - "
    },
    {
        "id": 497,
        "symbol": "効",
        "sound": "kiku - kou - ",
        "meaning": "effect - efficancy - "
    },
    {
        "id": 498,
        "symbol": "兆",
        "sound": "kizashi - chou - kizasu",
        "meaning": "trillion - sign - symptom"
    },
    {
        "id": 499,
        "symbol": "刻",
        "sound": "kizamu - koku - ",
        "meaning": "engrave - carve - "
    },
    {
        "id": 500,
        "symbol": "築",
        "sound": "kizuku - chiku - ",
        "meaning": "build - construct - construction"
    },
    {
        "id": 501,
        "symbol": "競",
        "sound": "kisou - kyou - kei",
        "meaning": "compete (in a race) - - "
    },
    {
        "id": 502,
        "symbol": "喫",
        "sound": "kitsu - - ",
        "meaning": "inhale - drink - "
    },
    {
        "id": 503,
        "symbol": "詰",
        "sound": "kitsu - tsumaru - tsumeru",
        "meaning": "cram - shorten - "
    },
    {
        "id": 504,
        "symbol": "決",
        "sound": "kimeru - ketsu - kimaru",
        "meaning": "decide - be decided - "
    },
    {
        "id": 505,
        "symbol": "君",
        "sound": "kimi - kun - ",
        "meaning": "you - ruler - added to names of boys"
    },
    {
        "id": 506,
        "symbol": "逆",
        "sound": "gyaku - sakarau - saka",
        "meaning": "reverse - opposite - "
    },
    {
        "id": 507,
        "symbol": "級",
        "sound": "kyuu - - ",
        "meaning": "grade - level - "
    },
    {
        "id": 508,
        "symbol": "球",
        "sound": "kyuu - tama - ",
        "meaning": "ball - - "
    },
    {
        "id": 509,
        "symbol": "求",
        "sound": "kyuu - motomeru - ",
        "meaning": "seek - search - "
    },
    {
        "id": 510,
        "symbol": "泣",
        "sound": "kyuu - naku - ",
        "meaning": "cry - - "
    },
    {
        "id": 511,
        "symbol": "救",
        "sound": "kyuu - sukuu - ",
        "meaning": "rescue - save - "
    },
    {
        "id": 512,
        "symbol": "給",
        "sound": "kyuu - - ",
        "meaning": "supply - pay - "
    },
    {
        "id": 513,
        "symbol": "久",
        "sound": "kyuu - ku - hisashii",
        "meaning": "long time - - "
    },
    {
        "id": 514,
        "symbol": "旧",
        "sound": "kyuu - - ",
        "meaning": "old - former - "
    },
    {
        "id": 515,
        "symbol": "吸",
        "sound": "kyuu - suu - ",
        "meaning": "suck - breathe in - "
    },
    {
        "id": 516,
        "symbol": "許",
        "sound": "kyo - yurusu - ",
        "meaning": "permit - pardon - forgive"
    },
    {
        "id": 517,
        "symbol": "漁",
        "sound": "gyo - ryou - ",
        "meaning": "fish - - "
    },
    {
        "id": 518,
        "symbol": "清",
        "sound": "kiyoi - sei - kyomeru",
        "meaning": "clean - clear - pure"
    },
    {
        "id": 519,
        "symbol": "橋",
        "sound": "kyou - hashi - ",
        "meaning": "bridge - - "
    },
    {
        "id": 520,
        "symbol": "共",
        "sound": "kyou - tomo - ",
        "meaning": "together - - "
    },
    {
        "id": 521,
        "symbol": "協",
        "sound": "kyou - - ",
        "meaning": "cooperate - - "
    },
    {
        "id": 522,
        "symbol": "経",
        "sound": "kyou - heru - kei",
        "meaning": "manage - passage - circles of longitude"
    },
    {
        "id": 523,
        "symbol": "境",
        "sound": "kyou - kei - sakai",
        "meaning": "boundary - border line - "
    },
    {
        "id": 524,
        "symbol": "供",
        "sound": "kyou - tomo - sonaeru",
        "meaning": "attendant - offer - "
    },
    {
        "id": 525,
        "symbol": "胸",
        "sound": "kyou - mune - muna",
        "meaning": "chest - chest (body part) - "
    },
    {
        "id": 526,
        "symbol": "叫",
        "sound": "kyou - sakebu - ",
        "meaning": "shout - - "
    },
    {
        "id": 527,
        "symbol": "況",
        "sound": "kyou - - ",
        "meaning": "condition - state of things - "
    },
    {
        "id": 528,
        "symbol": "狭",
        "sound": "kyou - semai - sebameru",
        "meaning": "narrow - - "
    },
    {
        "id": 529,
        "symbol": "挟",
        "sound": "kyou - hasamu - hasamaru",
        "meaning": "hold between - clasp - "
    },
    {
        "id": 530,
        "symbol": "曲",
        "sound": "kyoku - magaru - mageru",
        "meaning": "music - song - curve"
    },
    {
        "id": 531,
        "symbol": "局",
        "sound": "kyoku - - ",
        "meaning": "bureau - segment - "
    },
    {
        "id": 532,
        "symbol": "極",
        "sound": "kyoku - goku - kiwameru",
        "meaning": "extreme - poles (north or south) - "
    },
    {
        "id": 533,
        "symbol": "玉",
        "sound": "gyoku - tama - ",
        "meaning": "gem - jewel - "
    },
    {
        "id": 534,
        "symbol": "際",
        "sound": "kiwa - sai - ",
        "meaning": "verge - occation - "
    },
    {
        "id": 535,
        "symbol": "均",
        "sound": "kin - - ",
        "meaning": "even - level - "
    },
    {
        "id": 536,
        "symbol": "禁",
        "sound": "kin - - ",
        "meaning": "prohibit - not allowed - "
    },
    {
        "id": 537,
        "symbol": "勤",
        "sound": "kin - gon - tsutomeru",
        "meaning": "service - - "
    },
    {
        "id": 538,
        "symbol": "区",
        "sound": "ku - - ",
        "meaning": "district - ward - "
    },
    {
        "id": 539,
        "symbol": "苦",
        "sound": "ku - kurushii - nigai",
        "meaning": "suffering - bitter - painful"
    },
    {
        "id": 540,
        "symbol": "庫",
        "sound": "ku - ko - ",
        "meaning": "storehouse - warehouse - "
    },
    {
        "id": 541,
        "symbol": "紅",
        "sound": "ku - kou - beni",
        "meaning": "crimson - - "
    },
    {
        "id": 542,
        "symbol": "具",
        "sound": "gu - - ",
        "meaning": "tool - utensil - ingredient"
    },
    {
        "id": 543,
        "symbol": "偶",
        "sound": "guu - - ",
        "meaning": "chance - even numbers - by chance"
    },
    {
        "id": 544,
        "symbol": "隅",
        "sound": "guu - sumi - ",
        "meaning": "nook - corner - "
    },
    {
        "id": 545,
        "symbol": "草",
        "sound": "kusa - sou - ",
        "meaning": "grass - - "
    },
    {
        "id": 546,
        "symbol": "薬",
        "sound": "kusuri - yaku - ",
        "meaning": "medicine - drug - "
    },
    {
        "id": 547,
        "symbol": "掘",
        "sound": "kutsu - horu - ",
        "meaning": "dig - - "
    },
    {
        "id": 548,
        "symbol": "配",
        "sound": "kubaru - hai - ",
        "meaning": "distribute - deliver - "
    },
    {
        "id": 549,
        "symbol": "首",
        "sound": "kubi - shu - ",
        "meaning": "head - neck - "
    },
    {
        "id": 550,
        "symbol": "組",
        "sound": "kumi - so - kumu",
        "meaning": "organize - assemble - "
    },
    {
        "id": 551,
        "symbol": "曇",
        "sound": "kumoru - don - ",
        "meaning": "cloudy - - "
    },
    {
        "id": 552,
        "symbol": "蔵",
        "sound": "kura - zou - ",
        "meaning": "store - warehouse - own"
    },
    {
        "id": 553,
        "symbol": "暮",
        "sound": "kurasu - bo - kureru",
        "meaning": "dusk - grow dark - live"
    },
    {
        "id": 554,
        "symbol": "比",
        "sound": "kuraberu - hi - ",
        "meaning": "compare - - "
    },
    {
        "id": 555,
        "symbol": "訓",
        "sound": "kun - - ",
        "meaning": "instruct - - "
    },
    {
        "id": 556,
        "symbol": "軍",
        "sound": "gun - - ",
        "meaning": "army - military - "
    },
    {
        "id": 557,
        "symbol": "群",
        "sound": "gun - mureru - mure",
        "meaning": "group - crowd - "
    },
    {
        "id": 558,
        "symbol": "毛",
        "sound": "ke - mou - ",
        "meaning": "hair - - "
    },
    {
        "id": 559,
        "symbol": "景",
        "sound": "kei - - ",
        "meaning": "scene - - "
    },
    {
        "id": 560,
        "symbol": "警",
        "sound": "kei - - ",
        "meaning": "guard - warn - "
    },
    {
        "id": 561,
        "symbol": "芸",
        "sound": "gei - - ",
        "meaning": "art - skill - "
    },
    {
        "id": 562,
        "symbol": "迎",
        "sound": "gei - mukaeru - ",
        "meaning": "meet - welcome - "
    },
    {
        "id": 563,
        "symbol": "劇",
        "sound": "geki - - ",
        "meaning": "drama - - "
    },
    {
        "id": 564,
        "symbol": "血",
        "sound": "ketsu - chi - ",
        "meaning": "blood - - "
    },
    {
        "id": 565,
        "symbol": "結",
        "sound": "ketsu - musubu - yuu",
        "meaning": "tie - conclude - "
    },
    {
        "id": 566,
        "symbol": "険",
        "sound": "kewashii - ken - ",
        "meaning": "danger - steep - "
    },
    {
        "id": 567,
        "symbol": "県",
        "sound": "ken - - ",
        "meaning": "prefecture - - "
    },
    {
        "id": 568,
        "symbol": "件",
        "sound": "ken - - ",
        "meaning": "matter - - "
    },
    {
        "id": 569,
        "symbol": "券",
        "sound": "ken - - ",
        "meaning": "ticket - certificate - coupon"
    },
    {
        "id": 570,
        "symbol": "検",
        "sound": "ken - - ",
        "meaning": "examine - - "
    },
    {
        "id": 571,
        "symbol": "権",
        "sound": "ken - - ",
        "meaning": "right - power - "
    },
    {
        "id": 572,
        "symbol": "軒",
        "sound": "ken - noki - ",
        "meaning": "eaves - - "
    },
    {
        "id": 573,
        "symbol": "原",
        "sound": "gen - hara - ",
        "meaning": "original - plain - "
    },
    {
        "id": 574,
        "symbol": "減",
        "sound": "gen - heru - herasu",
        "meaning": "decrease - - "
    },
    {
        "id": 575,
        "symbol": "粉",
        "sound": "ko - fun - kona",
        "meaning": "powder - - "
    },
    {
        "id": 576,
        "symbol": "戸",
        "sound": "ko - to - ",
        "meaning": "door - - "
    },
    {
        "id": 577,
        "symbol": "湖",
        "sound": "ko - mizuumi - ",
        "meaning": "lake - - "
    },
    {
        "id": 578,
        "symbol": "個",
        "sound": "ko - - ",
        "meaning": "individual - - "
    },
    {
        "id": 579,
        "symbol": "呼",
        "sound": "ko - yobu - ",
        "meaning": "call - - "
    },
    {
        "id": 580,
        "symbol": "雇",
        "sound": "ko - yatou - ",
        "meaning": "employ - hire - "
    },
    {
        "id": 581,
        "symbol": "互",
        "sound": "go - tagai - ",
        "meaning": "reciprocal - mutual - each other"
    },
    {
        "id": 582,
        "symbol": "恋",
        "sound": "koi - ren - koishii",
        "meaning": "love - - "
    },
    {
        "id": 583,
        "symbol": "濃",
        "sound": "koi - nou - ",
        "meaning": "thick - - "
    },
    {
        "id": 584,
        "symbol": "光",
        "sound": "kou - hikaru - hikari",
        "meaning": "light - - "
    },
    {
        "id": 585,
        "symbol": "向",
        "sound": "kou - muku - mukou",
        "meaning": "turn toward - turn - "
    },
    {
        "id": 586,
        "symbol": "幸",
        "sound": "kou - saiwai - shiawase",
        "meaning": "happy - happiness - "
    },
    {
        "id": 587,
        "symbol": "港",
        "sound": "kou - minato - ",
        "meaning": "port - harbor - "
    },
    {
        "id": 588,
        "symbol": "好",
        "sound": "kou - konomu - suku",
        "meaning": "like - favorable - "
    },
    {
        "id": 589,
        "symbol": "航",
        "sound": "kou - - ",
        "meaning": "navigate - - "
    },
    {
        "id": 590,
        "symbol": "候",
        "sound": "kou - sourou - ",
        "meaning": "season - serve - "
    },
    {
        "id": 591,
        "symbol": "耕",
        "sound": "kou - tagayasu - ",
        "meaning": "till - plow - cultivate"
    },
    {
        "id": 592,
        "symbol": "鉱",
        "sound": "kou - - ",
        "meaning": "ore - mine - "
    },
    {
        "id": 593,
        "symbol": "講",
        "sound": "kou - - ",
        "meaning": "lecture - - "
    },
    {
        "id": 594,
        "symbol": "更",
        "sound": "kou - sara - fukeru",
        "meaning": "retextframe - change - reform"
    },
    {
        "id": 595,
        "symbol": "肯",
        "sound": "kou - - ",
        "meaning": "assent - consent - "
    },
    {
        "id": 596,
        "symbol": "郊",
        "sound": "kou - - ",
        "meaning": "suburb - - "
    },
    {
        "id": 597,
        "symbol": "号",
        "sound": "gou - - ",
        "meaning": "number - signal - sign"
    },
    {
        "id": 598,
        "symbol": "被",
        "sound": "koumuru - hi - kaburu",
        "meaning": "wear (hat) - suffer (damage) - "
    },
    {
        "id": 599,
        "symbol": "声",
        "sound": "koe - sei - kowa",
        "meaning": "voice - - "
    },
    {
        "id": 600,
        "symbol": "超",
        "sound": "koeru - chou - kosu",
        "meaning": "surpass - very - super"
    },
    {
        "id": 601,
        "symbol": "氷",
        "sound": "koori - hyou - hi",
        "meaning": "ice - - "
    },
    {
        "id": 602,
        "symbol": "凍",
        "sound": "kooru - tou - kogoeru",
        "meaning": "freeze - - "
    },
    {
        "id": 603,
        "symbol": "谷",
        "sound": "koku - tani - ",
        "meaning": "valley - - "
    },
    {
        "id": 604,
        "symbol": "告",
        "sound": "koku - tsugeru - ",
        "meaning": "notify - - "
    },
    {
        "id": 605,
        "symbol": "腰",
        "sound": "koshi - you - ",
        "meaning": "waist - hip - "
    },
    {
        "id": 606,
        "symbol": "骨",
        "sound": "kotsu - hone - ",
        "meaning": "bone - - "
    },
    {
        "id": 607,
        "symbol": "断",
        "sound": "kotowaru - dan - tatsu",
        "meaning": "resolve - cut off - "
    },
    {
        "id": 608,
        "symbol": "細",
        "sound": "komakai - sai - hosoi",
        "meaning": "small - slender - thin"
    },
    {
        "id": 609,
        "symbol": "困",
        "sound": "komaru - kon - ",
        "meaning": "trouble - be in trouble - "
    },
    {
        "id": 610,
        "symbol": "込",
        "sound": "komu - komeru - ",
        "meaning": "crowded - into - "
    },
    {
        "id": 611,
        "symbol": "米",
        "sound": "kome - bei - mai",
        "meaning": "rice - america - "
    },
    {
        "id": 612,
        "symbol": "殺",
        "sound": "korosu - satsu - sai",
        "meaning": "kill - - "
    },
    {
        "id": 613,
        "symbol": "怖",
        "sound": "kowai - fu - ",
        "meaning": "fear - fearful - scared"
    },
    {
        "id": 614,
        "symbol": "根",
        "sound": "kon - ne - ",
        "meaning": "root - - "
    },
    {
        "id": 615,
        "symbol": "混",
        "sound": "kon - majiru - mazaru",
        "meaning": "mix - blend - associate with"
    },
    {
        "id": 616,
        "symbol": "婚",
        "sound": "kon - - ",
        "meaning": "marry - marriage - "
    },
    {
        "id": 617,
        "symbol": "差",
        "sound": "sa - sasu - ",
        "meaning": "difference - - "
    },
    {
        "id": 618,
        "symbol": "査",
        "sound": "sa - - ",
        "meaning": "look into - investigate - "
    },
    {
        "id": 619,
        "symbol": "砂",
        "sound": "sa - sha - suna",
        "meaning": "sand - - "
    },
    {
        "id": 620,
        "symbol": "再",
        "sound": "sa - sai - futatabi",
        "meaning": "repeat - again - another time"
    },
    {
        "id": 621,
        "symbol": "座",
        "sound": "za - suwaru - ",
        "meaning": "seat - sit down - constellation"
    },
    {
        "id": 622,
        "symbol": "才",
        "sound": "sai - - ",
        "meaning": "talent - age - "
    },
    {
        "id": 623,
        "symbol": "祭",
        "sound": "sai - matsuri - matsuru",
        "meaning": "festival - - "
    },
    {
        "id": 624,
        "symbol": "菜",
        "sound": "sai - na - ",
        "meaning": "vegetable - - "
    },
    {
        "id": 625,
        "symbol": "最",
        "sound": "sai - mottomo - ",
        "meaning": "most - -est - "
    },
    {
        "id": 626,
        "symbol": "妻",
        "sound": "sai - tsuma - ",
        "meaning": "wife - - "
    },
    {
        "id": 627,
        "symbol": "採",
        "sound": "sai - toru - ",
        "meaning": "pick - gather - "
    },
    {
        "id": 628,
        "symbol": "済",
        "sound": "sai - sumu - sumasu",
        "meaning": "settle - relieve - "
    },
    {
        "id": 629,
        "symbol": "歳",
        "sound": "sai - sei - ",
        "meaning": "year - age - age suffix"
    },
    {
        "id": 630,
        "symbol": "財",
        "sound": "sai - zai - ",
        "meaning": "wealth - - "
    },
    {
        "id": 631,
        "symbol": "材",
        "sound": "zai - - ",
        "meaning": "timber - materials - "
    },
    {
        "id": 632,
        "symbol": "罪",
        "sound": "zai - tsumi - ",
        "meaning": "sin - crime - "
    },
    {
        "id": 633,
        "symbol": "坂",
        "sound": "saka - han - ",
        "meaning": "slope - - "
    },
    {
        "id": 634,
        "symbol": "酒",
        "sound": "sake - shu - ",
        "meaning": "sake - alcohol - "
    },
    {
        "id": 635,
        "symbol": "探",
        "sound": "sagasu - tan - saguru",
        "meaning": "probe - search - "
    },
    {
        "id": 636,
        "symbol": "捜",
        "sound": "sagasu - sou - ",
        "meaning": "look for - search - "
    },
    {
        "id": 637,
        "symbol": "杯",
        "sound": "sakazuki - hai - ",
        "meaning": "cup - counter for cups - "
    },
    {
        "id": 638,
        "symbol": "咲",
        "sound": "saku - - ",
        "meaning": "bloom - come out - "
    },
    {
        "id": 639,
        "symbol": "昨",
        "sound": "saku - - ",
        "meaning": "yesterday - last... - "
    },
    {
        "id": 640,
        "symbol": "冊",
        "sound": "saku - satsu - ",
        "meaning": "card - volume - counter for books"
    },
    {
        "id": 641,
        "symbol": "支",
        "sound": "sasaeru - shi - ",
        "meaning": "support - branch - "
    },
    {
        "id": 642,
        "symbol": "刺",
        "sound": "sasaru - shi - sasu",
        "meaning": "stab - stab (with a knife) - "
    },
    {
        "id": 643,
        "symbol": "指",
        "sound": "sasu - shi - yubi",
        "meaning": "point - finger - "
    },
    {
        "id": 644,
        "symbol": "定",
        "sound": "sadaka - tei - jou",
        "meaning": "fix - decide - establish"
    },
    {
        "id": 645,
        "symbol": "札",
        "sound": "satsu - fuda - ",
        "meaning": "bill - paper money - tag"
    },
    {
        "id": 646,
        "symbol": "刷",
        "sound": "satsu - suru - ",
        "meaning": "print - - "
    },
    {
        "id": 647,
        "symbol": "察",
        "sound": "satsu - - ",
        "meaning": "inspect - guess - "
    },
    {
        "id": 648,
        "symbol": "雑",
        "sound": "zatsu - zou - ",
        "meaning": "mixed - rough - "
    },
    {
        "id": 649,
        "symbol": "様",
        "sound": "sama - you - ",
        "meaning": "mode - formal title - Mr. / Mrs."
    },
    {
        "id": 650,
        "symbol": "冷",
        "sound": "samasu - rei - tsumetai",
        "meaning": "cold - - "
    },
    {
        "id": 651,
        "symbol": "皿",
        "sound": "sara - - ",
        "meaning": "plate - dish - "
    },
    {
        "id": 652,
        "symbol": "触",
        "sound": "sawaru - shoku - fureru",
        "meaning": "touch - feel - "
    },
    {
        "id": 653,
        "symbol": "算",
        "sound": "san - - ",
        "meaning": "calculate - - "
    },
    {
        "id": 654,
        "symbol": "参",
        "sound": "san - mairu - ",
        "meaning": "attend - - "
    },
    {
        "id": 655,
        "symbol": "散",
        "sound": "san - chiru - chirakasu",
        "meaning": "scatter - - "
    },
    {
        "id": 656,
        "symbol": "賛",
        "sound": "san - - ",
        "meaning": "approve - praise - "
    },
    {
        "id": 657,
        "symbol": "残",
        "sound": "zan - nokoru - nokosu",
        "meaning": "remain - ruthless - "
    },
    {
        "id": 658,
        "symbol": "次",
        "sound": "shi - ji - tsugi",
        "meaning": "next - - "
    },
    {
        "id": 659,
        "symbol": "歯",
        "sound": "shi - ha - ",
        "meaning": "tooth - - "
    },
    {
        "id": 660,
        "symbol": "史",
        "sound": "shi - - ",
        "meaning": "history - - "
    },
    {
        "id": 661,
        "symbol": "示",
        "sound": "shi - ji - shimesu",
        "meaning": "show - to show - "
    },
    {
        "id": 662,
        "symbol": "師",
        "sound": "shi - - ",
        "meaning": "master - teacher - "
    },
    {
        "id": 663,
        "symbol": "資",
        "sound": "shi - - ",
        "meaning": "resource - - "
    },
    {
        "id": 664,
        "symbol": "詞",
        "sound": "shi - - ",
        "meaning": "words - - "
    },
    {
        "id": 665,
        "symbol": "誌",
        "sound": "shi - - ",
        "meaning": "magazine - - "
    },
    {
        "id": 666,
        "symbol": "路",
        "sound": "ji - ro - ",
        "meaning": "road - - "
    },
    {
        "id": 667,
        "symbol": "耳",
        "sound": "ji - mimi - ",
        "meaning": "ear - - "
    },
    {
        "id": 668,
        "symbol": "寺",
        "sound": "ji - tera - ",
        "meaning": "buddhist temple - - "
    },
    {
        "id": 669,
        "symbol": "児",
        "sound": "ji - ni - ",
        "meaning": "child - - "
    },
    {
        "id": 670,
        "symbol": "辞",
        "sound": "ji - yameru - ",
        "meaning": "word - resign - retire"
    },
    {
        "id": 671,
        "symbol": "似",
        "sound": "ji - niru - ",
        "meaning": "look like - resemble - "
    },
    {
        "id": 672,
        "symbol": "除",
        "sound": "ji - jo - nozoku",
        "meaning": "remove - - "
    },
    {
        "id": 673,
        "symbol": "式",
        "sound": "shiki - - ",
        "meaning": "ceremony - style - "
    },
    {
        "id": 674,
        "symbol": "識",
        "sound": "shiki - - ",
        "meaning": "know - - "
    },
    {
        "id": 675,
        "symbol": "直",
        "sound": "jiki - choku - naosu",
        "meaning": "straight - fix - "
    },
    {
        "id": 676,
        "symbol": "静",
        "sound": "shizuka - sei - jou",
        "meaning": "quiet - - "
    },
    {
        "id": 677,
        "symbol": "滴",
        "sound": "shizuku - teki - shitataru",
        "meaning": "drop - drop (of liquid) - trickle"
    },
    {
        "id": 678,
        "symbol": "沈",
        "sound": "shizumu - chin - shizumeru",
        "meaning": "sink - to sink - "
    },
    {
        "id": 679,
        "symbol": "湿",
        "sound": "shimeru - shimesu - ",
        "meaning": "damp - - "
    },
    {
        "id": 680,
        "symbol": "実",
        "sound": "jitsu - mi - minoru",
        "meaning": "real - truth - fruit"
    },
    {
        "id": 681,
        "symbol": "島",
        "sound": "shima - tou - ",
        "meaning": "island - - "
    },
    {
        "id": 682,
        "symbol": "閉",
        "sound": "shimeru - tojiru - hei",
        "meaning": "close - - "
    },
    {
        "id": 683,
        "symbol": "捨",
        "sound": "sha - suteru - ",
        "meaning": "throw away - discard - "
    },
    {
        "id": 684,
        "symbol": "昔",
        "sound": "shaku - seki - mukashi",
        "meaning": "old - long ago - former"
    },
    {
        "id": 685,
        "symbol": "弱",
        "sound": "jaku - yowai - ",
        "meaning": "weak - weakness - "
    },
    {
        "id": 686,
        "symbol": "若",
        "sound": "jaku - wakai - ",
        "meaning": "young - - "
    },
    {
        "id": 687,
        "symbol": "守",
        "sound": "shu - mamoru - mori",
        "meaning": "protect - obey - guard"
    },
    {
        "id": 688,
        "symbol": "取",
        "sound": "shu - toru - ",
        "meaning": "take - - "
    },
    {
        "id": 689,
        "symbol": "種",
        "sound": "shu - tane - ",
        "meaning": "seed - variety - "
    },
    {
        "id": 690,
        "symbol": "州",
        "sound": "shuu - su - ",
        "meaning": "state - - "
    },
    {
        "id": 691,
        "symbol": "拾",
        "sound": "shuu - juu - hirou",
        "meaning": "pick up - - "
    },
    {
        "id": 692,
        "symbol": "周",
        "sound": "shuu - mawari - ",
        "meaning": "around - surrounding area - "
    },
    {
        "id": 693,
        "symbol": "船",
        "sound": "shuu - fune - funa",
        "meaning": "boat - small boat - "
    },
    {
        "id": 694,
        "symbol": "柔",
        "sound": "juu - nyuu - yawarakai",
        "meaning": "soft - soft (to the touch) - "
    },
    {
        "id": 695,
        "symbol": "宿",
        "sound": "shuku - yado - yadoru",
        "meaning": "stay - lodge - inn"
    },
    {
        "id": 696,
        "symbol": "述",
        "sound": "jutsu - noberu - ",
        "meaning": "speak - state - "
    },
    {
        "id": 697,
        "symbol": "術",
        "sound": "jutsu - - ",
        "meaning": "art - - "
    },
    {
        "id": 698,
        "symbol": "順",
        "sound": "jun - - ",
        "meaning": "order - turn - obey"
    },
    {
        "id": 699,
        "symbol": "準",
        "sound": "jun - - ",
        "meaning": "standard - rule - semi"
    },
    {
        "id": 700,
        "symbol": "純",
        "sound": "jun - - ",
        "meaning": "pure - purity - "
    },
    {
        "id": 701,
        "symbol": "所",
        "sound": "sho - tokoro - ",
        "meaning": "place - area - "
    },
    {
        "id": 702,
        "symbol": "処",
        "sound": "sho - - ",
        "meaning": "deal with - manage - "
    },
    {
        "id": 703,
        "symbol": "署",
        "sound": "sho - - ",
        "meaning": "government office - - "
    },
    {
        "id": 704,
        "symbol": "諸",
        "sound": "sho - - ",
        "meaning": "many - - "
    },
    {
        "id": 705,
        "symbol": "助",
        "sound": "jo - tasukeru - tasukaru",
        "meaning": "help - - "
    },
    {
        "id": 706,
        "symbol": "章",
        "sound": "shou - - ",
        "meaning": "chapter - - "
    },
    {
        "id": 707,
        "symbol": "焼",
        "sound": "shou - yaku - yakeru",
        "meaning": "burn - - "
    },
    {
        "id": 708,
        "symbol": "象",
        "sound": "shou - zou - ",
        "meaning": "image - elephant - "
    },
    {
        "id": 709,
        "symbol": "照",
        "sound": "shou - teru - tereru",
        "meaning": "illuminate - - "
    },
    {
        "id": 710,
        "symbol": "賞",
        "sound": "shou - - ",
        "meaning": "prize - award - "
    },
    {
        "id": 711,
        "symbol": "招",
        "sound": "shou - maneku - ",
        "meaning": "invite - - "
    },
    {
        "id": 712,
        "symbol": "性",
        "sound": "shou - sei - ",
        "meaning": "nature - gender - "
    },
    {
        "id": 713,
        "symbol": "将",
        "sound": "shou - - ",
        "meaning": "general officer - general - "
    },
    {
        "id": 714,
        "symbol": "装",
        "sound": "shou - sou - yosoou",
        "meaning": "dress - decoration - adorn"
    },
    {
        "id": 715,
        "symbol": "召",
        "sound": "shou - mesu - ",
        "meaning": "summon - - "
    },
    {
        "id": 716,
        "symbol": "床",
        "sound": "shou - toko - yuka",
        "meaning": "floor - - "
    },
    {
        "id": 717,
        "symbol": "姓",
        "sound": "shou - sei - ",
        "meaning": "surname - family name - "
    },
    {
        "id": 718,
        "symbol": "昇",
        "sound": "shou - noboru - ",
        "meaning": "ascend - go up - rise"
    },
    {
        "id": 719,
        "symbol": "紹",
        "sound": "shou - - ",
        "meaning": "intoduce - - "
    },
    {
        "id": 720,
        "symbol": "星",
        "sound": "shou - sei - hoshi",
        "meaning": "star - - "
    },
    {
        "id": 721,
        "symbol": "政",
        "sound": "shou - sei - matsurigoto",
        "meaning": "politics - rule - "
    },
    {
        "id": 722,
        "symbol": "精",
        "sound": "shou - sei - ",
        "meaning": "refine - essence - "
    },
    {
        "id": 723,
        "symbol": "乗",
        "sound": "jou - noru - noseru",
        "meaning": "ride - get on - "
    },
    {
        "id": 724,
        "symbol": "状",
        "sound": "jou - - ",
        "meaning": "form - letter - "
    },
    {
        "id": 725,
        "symbol": "常",
        "sound": "jou - tsune - toko",
        "meaning": "normal - regular - "
    },
    {
        "id": 726,
        "symbol": "情",
        "sound": "jou - sei - nasake",
        "meaning": "condition - emotion - "
    },
    {
        "id": 727,
        "symbol": "城",
        "sound": "jou - shiro - ",
        "meaning": "castle - - "
    },
    {
        "id": 728,
        "symbol": "蒸",
        "sound": "jou - musu - mureru",
        "meaning": "evaporate - steam - "
    },
    {
        "id": 729,
        "symbol": "畳",
        "sound": "jou - tatami - tatamu",
        "meaning": "tatami - fold up - fold"
    },
    {
        "id": 730,
        "symbol": "成",
        "sound": "jou - sei - naru",
        "meaning": "become - form - achieve"
    },
    {
        "id": 731,
        "symbol": "職",
        "sound": "shoku - - ",
        "meaning": "employment - job - "
    },
    {
        "id": 732,
        "symbol": "調",
        "sound": "shiraberu - chou - totonou",
        "meaning": "look up - research - tone"
    },
    {
        "id": 733,
        "symbol": "退",
        "sound": "shirizoku - tai - shirizokeru",
        "meaning": "retreat - - "
    },
    {
        "id": 734,
        "symbol": "森",
        "sound": "shin - mori - ",
        "meaning": "forest - - "
    },
    {
        "id": 735,
        "symbol": "申",
        "sound": "shin - mousu - ",
        "meaning": "report - call - "
    },
    {
        "id": 736,
        "symbol": "身",
        "sound": "shin - mi - ",
        "meaning": "body - self - "
    },
    {
        "id": 737,
        "symbol": "深",
        "sound": "shin - fukai - fukameru",
        "meaning": "deep - - "
    },
    {
        "id": 738,
        "symbol": "進",
        "sound": "shin - susumu - susumeru",
        "meaning": "advance - move forward - "
    },
    {
        "id": 739,
        "symbol": "臣",
        "sound": "shin - jin - ",
        "meaning": "subject - retainer - "
    },
    {
        "id": 740,
        "symbol": "信",
        "sound": "shin - - ",
        "meaning": "believe - message - "
    },
    {
        "id": 741,
        "symbol": "針",
        "sound": "shin - hari - ",
        "meaning": "needle - - "
    },
    {
        "id": 742,
        "symbol": "伸",
        "sound": "shin - nobiru - nobosu",
        "meaning": "stretch - - "
    },
    {
        "id": 743,
        "symbol": "寝",
        "sound": "shin - neru - nekasu",
        "meaning": "sleep - go to sleep - "
    },
    {
        "id": 744,
        "symbol": "震",
        "sound": "shin - furuu - furueru",
        "meaning": "shake - quake - "
    },
    {
        "id": 745,
        "symbol": "吹",
        "sound": "sui - fuku - ",
        "meaning": "blow - - "
    },
    {
        "id": 746,
        "symbol": "末",
        "sound": "sue - matsu - batsu",
        "meaning": "last part - end - "
    },
    {
        "id": 747,
        "symbol": "優",
        "sound": "sugureru - you - yasashii",
        "meaning": "gentle - kind - nice"
    },
    {
        "id": 748,
        "symbol": "涼",
        "sound": "suzushii - ryou - suzumu",
        "meaning": "cool - cool (temp) - "
    },
    {
        "id": 749,
        "symbol": "炭",
        "sound": "sumi - tan - ",
        "meaning": "coal - charcoal - "
    },
    {
        "id": 750,
        "symbol": "速",
        "sound": "sumiyaka - soku - hayai",
        "meaning": "fast - quick - "
    },
    {
        "id": 751,
        "symbol": "背",
        "sound": "se - hai - somuku",
        "meaning": "back - back (body part) - "
    },
    {
        "id": 752,
        "symbol": "晴",
        "sound": "sei - hareru - harasu",
        "meaning": "fine weather - sunny - "
    },
    {
        "id": 753,
        "symbol": "制",
        "sound": "sei - - ",
        "meaning": "system - control - "
    },
    {
        "id": 754,
        "symbol": "製",
        "sound": "sei - - ",
        "meaning": "manufactured - made in - "
    },
    {
        "id": 755,
        "symbol": "税",
        "sound": "zei - - ",
        "meaning": "tax - - "
    },
    {
        "id": 756,
        "symbol": "説",
        "sound": "zei - setsu - toku",
        "meaning": "explain - - "
    },
    {
        "id": 757,
        "symbol": "席",
        "sound": "seki - - ",
        "meaning": "seat - - "
    },
    {
        "id": 758,
        "symbol": "積",
        "sound": "seki - tsumu - ",
        "meaning": "accumulate - - "
    },
    {
        "id": 759,
        "symbol": "責",
        "sound": "seki - semeru - ",
        "meaning": "burden - blame - "
    },
    {
        "id": 760,
        "symbol": "績",
        "sound": "seki - - ",
        "meaning": "achievements - - "
    },
    {
        "id": 761,
        "symbol": "隻",
        "sound": "seki - - ",
        "meaning": "one of a pair - counter for boats - "
    },
    {
        "id": 762,
        "symbol": "籍",
        "sound": "seki - - ",
        "meaning": "register - - "
    },
    {
        "id": 763,
        "symbol": "雪",
        "sound": "setsu - yuki - ",
        "meaning": "snow - - "
    },
    {
        "id": 764,
        "symbol": "設",
        "sound": "setsu - moukeru - ",
        "meaning": "set up - - "
    },
    {
        "id": 765,
        "symbol": "接",
        "sound": "setsu - tsugu - ",
        "meaning": "contact - touch - "
    },
    {
        "id": 766,
        "symbol": "絶",
        "sound": "zetsu - taeru - tatsu",
        "meaning": "die out - cut off - "
    },
    {
        "id": 767,
        "symbol": "線",
        "sound": "sen - - ",
        "meaning": "line - - "
    },
    {
        "id": 768,
        "symbol": "専",
        "sound": "sen - mobbara - ",
        "meaning": "exclusive - sole - "
    },
    {
        "id": 769,
        "symbol": "全",
        "sound": "zen - mattaku - ",
        "meaning": "whole - - "
    },
    {
        "id": 770,
        "symbol": "然",
        "sound": "zen - nen - ",
        "meaning": "yes - however - but"
    },
    {
        "id": 771,
        "symbol": "祖",
        "sound": "so - - ",
        "meaning": "ancestor - - "
    },
    {
        "id": 772,
        "symbol": "想",
        "sound": "so - sou - ",
        "meaning": "conceive - image - imagination"
    },
    {
        "id": 773,
        "symbol": "総",
        "sound": "sou - - ",
        "meaning": "total - general - "
    },
    {
        "id": 774,
        "symbol": "窓",
        "sound": "sou - mado - ",
        "meaning": "window - - "
    },
    {
        "id": 775,
        "symbol": "層",
        "sound": "sou - - ",
        "meaning": "stratum - layer - "
    },
    {
        "id": 776,
        "symbol": "双",
        "sound": "sou - futa - ",
        "meaning": "set of two - twin - double"
    },
    {
        "id": 777,
        "symbol": "掃",
        "sound": "sou - haku - ",
        "meaning": "sweep - - "
    },
    {
        "id": 778,
        "symbol": "燥",
        "sound": "sou - - ",
        "meaning": "dry up - - "
    },
    {
        "id": 779,
        "symbol": "造",
        "sound": "zou - tsukuru - ",
        "meaning": "make - create - "
    },
    {
        "id": 780,
        "symbol": "増",
        "sound": "zou - masu - fueru",
        "meaning": "increase - - "
    },
    {
        "id": 781,
        "symbol": "像",
        "sound": "zou - - ",
        "meaning": "image - - "
    },
    {
        "id": 782,
        "symbol": "臓",
        "sound": "zou - - ",
        "meaning": "internal organ - - "
    },
    {
        "id": 783,
        "symbol": "憎",
        "sound": "zou - nikui - nikumu",
        "meaning": "hate - dislike - "
    },
    {
        "id": 784,
        "symbol": "束",
        "sound": "soku - taba - ",
        "meaning": "tie - bundle - "
    },
    {
        "id": 785,
        "symbol": "則",
        "sound": "soku - - ",
        "meaning": "rule - law - act on"
    },
    {
        "id": 786,
        "symbol": "測",
        "sound": "soku - hakaru - ",
        "meaning": "measure - - "
    },
    {
        "id": 787,
        "symbol": "続",
        "sound": "zoku - tsuzuku - tsuzukeru",
        "meaning": "continue - - "
    },
    {
        "id": 788,
        "symbol": "底",
        "sound": "soko - tei - ",
        "meaning": "bottom - - "
    },
    {
        "id": 789,
        "symbol": "損",
        "sound": "sokonau - son - sokoneru",
        "meaning": "loss - damage - "
    },
    {
        "id": 790,
        "symbol": "卒",
        "sound": "sotsu - - ",
        "meaning": "graduate - - "
    },
    {
        "id": 791,
        "symbol": "率",
        "sound": "sotsu - ritsu - hikiiru",
        "meaning": "rate - percentage - lead"
    },
    {
        "id": 792,
        "symbol": "備",
        "sound": "sonaeru - bi - sonawaru",
        "meaning": "provide - - "
    },
    {
        "id": 793,
        "symbol": "反",
        "sound": "sorasu - han - tan",
        "meaning": "counter - against - "
    },
    {
        "id": 794,
        "symbol": "村",
        "sound": "son - mura - ",
        "meaning": "village - - "
    },
    {
        "id": 795,
        "symbol": "孫",
        "sound": "son - mago - ",
        "meaning": "grandchild - - "
    },
    {
        "id": 796,
        "symbol": "存",
        "sound": "son - zon - ",
        "meaning": "exist - - "
    },
    {
        "id": 797,
        "symbol": "尊",
        "sound": "son - toutobu - tattobu",
        "meaning": "honor - respect - "
    },
    {
        "id": 798,
        "symbol": "太",
        "sound": "ta - futoi - tai",
        "meaning": "big - thick - become fat"
    },
    {
        "id": 799,
        "symbol": "袋",
        "sound": "tai - fukuro - ",
        "meaning": "sack - bag - "
    },
    {
        "id": 800,
        "symbol": "第",
        "sound": "dai - - ",
        "meaning": "rank - no. ~ - "
    },
    {
        "id": 801,
        "symbol": "平",
        "sound": "taira - hei - byou",
        "meaning": "flat - calm - "
    },
    {
        "id": 802,
        "symbol": "倒",
        "sound": "taosu - tou - ",
        "meaning": "topple - fall over - "
    },
    {
        "id": 803,
        "symbol": "宝",
        "sound": "takara - hou - ",
        "meaning": "treasure - - "
    },
    {
        "id": 804,
        "symbol": "宅",
        "sound": "taku - - ",
        "meaning": "house - home - "
    },
    {
        "id": 805,
        "symbol": "濯",
        "sound": "taku - - ",
        "meaning": "rinse - - "
    },
    {
        "id": 806,
        "symbol": "竹",
        "sound": "take - chiku - ",
        "meaning": "bamboo - - "
    },
    {
        "id": 807,
        "symbol": "達",
        "sound": "tatsu - tachi - ",
        "meaning": "attain - arrive - plural marker"
    },
    {
        "id": 808,
        "symbol": "例",
        "sound": "tatoeru - rei - ",
        "meaning": "example - - "
    },
    {
        "id": 809,
        "symbol": "頼",
        "sound": "tanomu - rai - tanomoshii",
        "meaning": "rely on - ask - "
    },
    {
        "id": 810,
        "symbol": "卵",
        "sound": "tamago - ran - ",
        "meaning": "egg - - "
    },
    {
        "id": 811,
        "symbol": "民",
        "sound": "tami - min - ",
        "meaning": "people - - "
    },
    {
        "id": 812,
        "symbol": "便",
        "sound": "tayori - ben - bin",
        "meaning": "post - convenient - "
    },
    {
        "id": 813,
        "symbol": "短",
        "sound": "tan - mijikai - ",
        "meaning": "short - - "
    },
    {
        "id": 814,
        "symbol": "単",
        "sound": "tan - - ",
        "meaning": "single - - "
    },
    {
        "id": 815,
        "symbol": "談",
        "sound": "dan - - ",
        "meaning": "talk - - "
    },
    {
        "id": 816,
        "symbol": "段",
        "sound": "dan - - ",
        "meaning": "step - - "
    },
    {
        "id": 817,
        "symbol": "乳",
        "sound": "chi - nyuu - chichi",
        "meaning": "milk - - "
    },
    {
        "id": 818,
        "symbol": "恥",
        "sound": "chi - hajiru - hazukashii",
        "meaning": "shy - shame - "
    },
    {
        "id": 819,
        "symbol": "畜",
        "sound": "chiku - - ",
        "meaning": "livestock - - "
    },
    {
        "id": 820,
        "symbol": "虫",
        "sound": "chuu - mushi - ",
        "meaning": "insect - - "
    },
    {
        "id": 821,
        "symbol": "柱",
        "sound": "chuu - hashira - ",
        "meaning": "pillar - - "
    },
    {
        "id": 822,
        "symbol": "仲",
        "sound": "chuu - naka - ",
        "meaning": "intermediary - - "
    },
    {
        "id": 823,
        "symbol": "宙",
        "sound": "chuu - - ",
        "meaning": "outer space - space - "
    },
    {
        "id": 824,
        "symbol": "駐",
        "sound": "chuu - - ",
        "meaning": "stationed - - "
    },
    {
        "id": 825,
        "symbol": "貯",
        "sound": "cho - - ",
        "meaning": "lay up - store - "
    },
    {
        "id": 826,
        "symbol": "庁",
        "sound": "chou - - ",
        "meaning": "government agency - - "
    },
    {
        "id": 827,
        "symbol": "珍",
        "sound": "chin - mezurashii - ",
        "meaning": "rare - - "
    },
    {
        "id": 828,
        "symbol": "都",
        "sound": "shi - to - miyako",
        "meaning": "metropolis - city - "
    },
    {
        "id": 829,
        "symbol": "費",
        "sound": "tsuieru - hi - tsuiyasu",
        "meaning": "expense - - "
    },
    {
        "id": 830,
        "symbol": "捕",
        "sound": "tsukamaru - ho - toru",
        "meaning": "catch - arrest - "
    },
    {
        "id": 831,
        "symbol": "疲",
        "sound": "tsukareru - hi - ",
        "meaning": "tired - - "
    },
    {
        "id": 832,
        "symbol": "付",
        "sound": "tsuku - fu - tsukeru",
        "meaning": "attach - add - "
    },
    {
        "id": 833,
        "symbol": "突",
        "sound": "tsuku - totsu - ",
        "meaning": "dash - thrust - "
    },
    {
        "id": 834,
        "symbol": "包",
        "sound": "tsutsumu - hou - ",
        "meaning": "envelop - wrap - "
    },
    {
        "id": 835,
        "symbol": "努",
        "sound": "tsutomeru - do - ",
        "meaning": "exert - - "
    },
    {
        "id": 836,
        "symbol": "務",
        "sound": "tsutomeru - mu - ",
        "meaning": "duty - - "
    },
    {
        "id": 837,
        "symbol": "募",
        "sound": "tsunoru - bo - ",
        "meaning": "raise - - "
    },
    {
        "id": 838,
        "symbol": "粒",
        "sound": "tsubu - ryuu - ",
        "meaning": "grain - - "
    },
    {
        "id": 839,
        "symbol": "連",
        "sound": "tsuraneru - ren - tsureru",
        "meaning": "link - succession - "
    },
    {
        "id": 840,
        "symbol": "庭",
        "sound": "tei - niwa - ",
        "meaning": "court - garden - "
    },
    {
        "id": 841,
        "symbol": "低",
        "sound": "tei - hikui - hikumeru",
        "meaning": "low - - "
    },
    {
        "id": 842,
        "symbol": "停",
        "sound": "tei - - ",
        "meaning": "stop - halt - "
    },
    {
        "id": 843,
        "symbol": "程",
        "sound": "tei - hodo - ",
        "meaning": "extent - span - degree"
    },
    {
        "id": 844,
        "symbol": "泥",
        "sound": "tei - doro - ",
        "meaning": "mud - - "
    },
    {
        "id": 845,
        "symbol": "的",
        "sound": "teki - mato - ",
        "meaning": "mark - target - suffix for making adj"
    },
    {
        "id": 846,
        "symbol": "適",
        "sound": "teki - - ",
        "meaning": "suitable - - "
    },
    {
        "id": 847,
        "symbol": "鉄",
        "sound": "tetsu - - ",
        "meaning": "iron - - "
    },
    {
        "id": 848,
        "symbol": "点",
        "sound": "ten - - ",
        "meaning": "point - mark - dot"
    },
    {
        "id": 849,
        "symbol": "殿",
        "sound": "ten - den - dono",
        "meaning": "palace - lord - "
    },
    {
        "id": 850,
        "symbol": "登",
        "sound": "to - tou - noboru",
        "meaning": "climb - - "
    },
    {
        "id": 851,
        "symbol": "徒",
        "sound": "to - - ",
        "meaning": "follower - - "
    },
    {
        "id": 852,
        "symbol": "途",
        "sound": "to - - ",
        "meaning": "way - - "
    },
    {
        "id": 853,
        "symbol": "渡",
        "sound": "to - wataru - watasu",
        "meaning": "cross - go across - "
    },
    {
        "id": 854,
        "symbol": "塗",
        "sound": "to - nutsu - ",
        "meaning": "apply on a surface - - "
    },
    {
        "id": 855,
        "symbol": "投",
        "sound": "tou - nageru - ",
        "meaning": "throw - - "
    },
    {
        "id": 856,
        "symbol": "等",
        "sound": "tou - hitoshii - ",
        "meaning": "equal - class - "
    },
    {
        "id": 857,
        "symbol": "湯",
        "sound": "tou - yu - ",
        "meaning": "hot water - - "
    },
    {
        "id": 858,
        "symbol": "灯",
        "sound": "tou - hi - ",
        "meaning": "lamp - - "
    },
    {
        "id": 859,
        "symbol": "党",
        "sound": "tou - - ",
        "meaning": "party - sect - group"
    },
    {
        "id": 860,
        "symbol": "到",
        "sound": "tou - - ",
        "meaning": "arrive - - "
    },
    {
        "id": 861,
        "symbol": "逃",
        "sound": "tou - nigeru - nogasu",
        "meaning": "escape - - "
    },
    {
        "id": 862,
        "symbol": "盗",
        "sound": "tou - nusumu - ",
        "meaning": "steal - - "
    },
    {
        "id": 863,
        "symbol": "筒",
        "sound": "tou - tsutsu - ",
        "meaning": "tube - - "
    },
    {
        "id": 864,
        "symbol": "塔",
        "sound": "tou - - ",
        "meaning": "tower - - "
    },
    {
        "id": 865,
        "symbol": "童",
        "sound": "dou - warabe - ",
        "meaning": "child - - "
    },
    {
        "id": 866,
        "symbol": "働",
        "sound": "tou - hataraku - ",
        "meaning": "work - - "
    },
    {
        "id": 867,
        "symbol": "銅",
        "sound": "dou - - ",
        "meaning": "copper - bronze - "
    },
    {
        "id": 868,
        "symbol": "導",
        "sound": "tou - michibiku - ",
        "meaning": "lead - guide - "
    },
    {
        "id": 869,
        "symbol": "溶",
        "sound": "toku - you - tokeru",
        "meaning": "dissolve - melt - "
    },
    {
        "id": 870,
        "symbol": "毒",
        "sound": "doku - - ",
        "meaning": "poison - - "
    },
    {
        "id": 871,
        "symbol": "独",
        "sound": "doku - hitori - ",
        "meaning": "alone - - "
    },
    {
        "id": 872,
        "symbol": "届",
        "sound": "todoku - todokeru - ",
        "meaning": "deliver - reach - "
    },
    {
        "id": 873,
        "symbol": "飛",
        "sound": "tobasu - hi - tobu",
        "meaning": "fly - - "
    },
    {
        "id": 874,
        "symbol": "留",
        "sound": "tomeru - ryuu - ru",
        "meaning": "stay - keep - "
    },
    {
        "id": 875,
        "symbol": "泊",
        "sound": "tomaru - tomeru - haku",
        "meaning": "stay overnight - stay - "
    },
    {
        "id": 876,
        "symbol": "富",
        "sound": "fuu - fu - tomu",
        "meaning": "rich - - "
    },
    {
        "id": 877,
        "symbol": "鈍",
        "sound": "don - nibui - niburu",
        "meaning": "dull - - "
    },
    {
        "id": 878,
        "symbol": "無",
        "sound": "nai - mu - bu",
        "meaning": "without - nothing - "
    },
    {
        "id": 879,
        "symbol": "亡",
        "sound": "nai - bou - mou",
        "meaning": "decease - dead - "
    },
    {
        "id": 880,
        "symbol": "流",
        "sound": "nagasu - ryuu - nagareru",
        "meaning": "flow - current - "
    },
    {
        "id": 881,
        "symbol": "鳴",
        "sound": "naku - mei - naru",
        "meaning": "cry - sound (from a bird...) - "
    },
    {
        "id": 882,
        "symbol": "波",
        "sound": "nami - ha - ",
        "meaning": "wave - - "
    },
    {
        "id": 883,
        "symbol": "並",
        "sound": "nami - hei - naraberu",
        "meaning": "line up - line - "
    },
    {
        "id": 884,
        "symbol": "涙",
        "sound": "namida - - rui",
        "meaning": "tear - teardrop - "
    },
    {
        "id": 885,
        "symbol": "悩",
        "sound": "nayamasu - nou - nayamu",
        "meaning": "suffer - worry - "
    },
    {
        "id": 886,
        "symbol": "軟",
        "sound": "nan - yawaraka - yawarakai",
        "meaning": "soft - - "
    },
    {
        "id": 887,
        "symbol": "任",
        "sound": "nin - makaseru - makasu",
        "meaning": "office - entrust - "
    },
    {
        "id": 888,
        "symbol": "認",
        "sound": "nin - mitomeru - ",
        "meaning": "recognize - - "
    },
    {
        "id": 889,
        "symbol": "抜",
        "sound": "nuku - batsu - nukeru",
        "meaning": "pullout - stand out - "
    },
    {
        "id": 890,
        "symbol": "布",
        "sound": "nuno - fu - ",
        "meaning": "cloth - - "
    },
    {
        "id": 891,
        "symbol": "猫",
        "sound": "neko - byou - ",
        "meaning": "cat - - "
    },
    {
        "id": 892,
        "symbol": "眠",
        "sound": "nemui - min - nemuru",
        "meaning": "sleep - - "
    },
    {
        "id": 893,
        "symbol": "練",
        "sound": "neru - ren - ",
        "meaning": "to train - training - "
    },
    {
        "id": 894,
        "symbol": "念",
        "sound": "nen - - ",
        "meaning": "thoughts - remembering - "
    },
    {
        "id": 895,
        "symbol": "燃",
        "sound": "nen - moeru - moyasu",
        "meaning": "burn - - "
    },
    {
        "id": 896,
        "symbol": "農",
        "sound": "nou - - ",
        "meaning": "farming - farm - "
    },
    {
        "id": 897,
        "symbol": "能",
        "sound": "nou - - ",
        "meaning": "ability - - "
    },
    {
        "id": 898,
        "symbol": "脳",
        "sound": "nou - - ",
        "meaning": "brain - - "
    },
    {
        "id": 899,
        "symbol": "望",
        "sound": "nozomu - bou - mou",
        "meaning": "hope - desire - expect"
    },
    {
        "id": 900,
        "symbol": "葉",
        "sound": "ha - you - ",
        "meaning": "leaf - leaves - "
    },
    {
        "id": 901,
        "symbol": "破",
        "sound": "ha - yaburu - yabureru",
        "meaning": "tear - break - "
    },
    {
        "id": 902,
        "symbol": "敗",
        "sound": "hai - yabureru - ",
        "meaning": "defeated - - "
    },
    {
        "id": 903,
        "symbol": "倍",
        "sound": "bai - - ",
        "meaning": "times X - double - "
    },
    {
        "id": 904,
        "symbol": "量",
        "sound": "hakaru - ryou - ",
        "meaning": "quantity - - "
    },
    {
        "id": 905,
        "symbol": "麦",
        "sound": "baku - mugi - ",
        "meaning": "wheat - - "
    },
    {
        "id": 906,
        "symbol": "爆",
        "sound": "baku - - ",
        "meaning": "explode - - "
    },
    {
        "id": 907,
        "symbol": "箱",
        "sound": "hako - - ",
        "meaning": "box - - "
    },
    {
        "id": 908,
        "symbol": "畑",
        "sound": "hata - hatake - ",
        "meaning": "field - - "
    },
    {
        "id": 909,
        "symbol": "肌",
        "sound": "hada - - ",
        "meaning": "skin - - "
    },
    {
        "id": 910,
        "symbol": "法",
        "sound": "hatsu - hou - hotsu",
        "meaning": "law - - "
    },
    {
        "id": 911,
        "symbol": "鼻",
        "sound": "hana - bi - ",
        "meaning": "nose - - "
    },
    {
        "id": 912,
        "symbol": "放",
        "sound": "hanasu - hou - hanatsu",
        "meaning": "let go - separate - "
    },
    {
        "id": 913,
        "symbol": "幅",
        "sound": "haba - fuku - ",
        "meaning": "width - - "
    },
    {
        "id": 914,
        "symbol": "林",
        "sound": "hayashi - rin - ",
        "meaning": "woods - forest - "
    },
    {
        "id": 915,
        "symbol": "腹",
        "sound": "hara - fuku - ",
        "meaning": "belly - stomach - "
    },
    {
        "id": 916,
        "symbol": "払",
        "sound": "harau - futsu - ",
        "meaning": "pay - clear away - "
    },
    {
        "id": 917,
        "symbol": "判",
        "sound": "han - ban - ",
        "meaning": "judge - - "
    },
    {
        "id": 918,
        "symbol": "版",
        "sound": "han - - ",
        "meaning": "print - publishing - "
    },
    {
        "id": 919,
        "symbol": "般",
        "sound": "han - - ",
        "meaning": "sort - generally - "
    },
    {
        "id": 920,
        "symbol": "販",
        "sound": "han - - ",
        "meaning": "sell - - "
    },
    {
        "id": 921,
        "symbol": "番",
        "sound": "ban - - ",
        "meaning": "order - turn - watch"
    },
    {
        "id": 922,
        "symbol": "晩",
        "sound": "ban - - ",
        "meaning": "evening - - "
    },
    {
        "id": 923,
        "symbol": "非",
        "sound": "hi - - ",
        "meaning": "not - not good - "
    },
    {
        "id": 924,
        "symbol": "匹",
        "sound": "hiki - hitsu - ",
        "meaning": "equal - counter for small animals - "
    },
    {
        "id": 925,
        "symbol": "筆",
        "sound": "hitsu - fude - ",
        "meaning": "brush - writing - "
    },
    {
        "id": 926,
        "symbol": "兵",
        "sound": "hyou - hei - ",
        "meaning": "soldier - - "
    },
    {
        "id": 927,
        "symbol": "秒",
        "sound": "byou - - ",
        "meaning": "second - - "
    },
    {
        "id": 928,
        "symbol": "貧",
        "sound": "hin - bin - mazushii",
        "meaning": "poor - poverty - "
    },
    {
        "id": 929,
        "symbol": "瓶",
        "sound": "bin - kame - ",
        "meaning": "bottle - vase - "
    },
    {
        "id": 930,
        "symbol": "府",
        "sound": "fu - - ",
        "meaning": "prefecture - agency - "
    },
    {
        "id": 931,
        "symbol": "婦",
        "sound": "fu - - ",
        "meaning": "woman - - "
    },
    {
        "id": 932,
        "symbol": "符",
        "sound": "fu - - ",
        "meaning": "symbol - - "
    },
    {
        "id": 933,
        "symbol": "普",
        "sound": "fu - - ",
        "meaning": "wide - universal - general"
    },
    {
        "id": 934,
        "symbol": "膚",
        "sound": "fu - - ",
        "meaning": "skin - - "
    },
    {
        "id": 935,
        "symbol": "部",
        "sound": "bu - - ",
        "meaning": "department - section - "
    },
    {
        "id": 936,
        "symbol": "武",
        "sound": "bu - mu - ",
        "meaning": "military - - "
    },
    {
        "id": 937,
        "symbol": "舞",
        "sound": "bu - mau - mai",
        "meaning": "dance - - "
    },
    {
        "id": 938,
        "symbol": "封",
        "sound": "fuu - hou - ",
        "meaning": "seal - - "
    },
    {
        "id": 939,
        "symbol": "福",
        "sound": "fuku - - ",
        "meaning": "fortune - - "
    },
    {
        "id": 940,
        "symbol": "副",
        "sound": "fuku - - ",
        "meaning": "secondary - - "
    },
    {
        "id": 941,
        "symbol": "復",
        "sound": "fuku - - ",
        "meaning": "return - again - return to"
    },
    {
        "id": 942,
        "symbol": "複",
        "sound": "fuku - - ",
        "meaning": "compound - complex - "
    },
    {
        "id": 943,
        "symbol": "防",
        "sound": "fusegu - bou - ",
        "meaning": "prevent - - "
    },
    {
        "id": 944,
        "symbol": "沸",
        "sound": "futsu - waku - wakasu",
        "meaning": "boil - - "
    },
    {
        "id": 945,
        "symbol": "仏",
        "sound": "butsu - hotoke - ",
        "meaning": "buddha - france - "
    },
    {
        "id": 946,
        "symbol": "報",
        "sound": "hou - mukuiru - ",
        "meaning": "inform - information - "
    },
    {
        "id": 947,
        "symbol": "豊",
        "sound": "hou - yutaka - ",
        "meaning": "plentiful - abundance - "
    },
    {
        "id": 948,
        "symbol": "貿",
        "sound": "bou - - ",
        "meaning": "trade - - "
    },
    {
        "id": 949,
        "symbol": "忘",
        "sound": "bou - wasureru - ",
        "meaning": "forget - - "
    },
    {
        "id": 950,
        "symbol": "棒",
        "sound": "bou - - ",
        "meaning": "stick - rod - "
    },
    {
        "id": 951,
        "symbol": "坊",
        "sound": "bou - botsu - ",
        "meaning": "boy - priest - "
    },
    {
        "id": 952,
        "symbol": "帽",
        "sound": "bou - - ",
        "meaning": "headgear - headwear - "
    },
    {
        "id": 953,
        "symbol": "欲",
        "sound": "hoshii - yoku - hossuru",
        "meaning": "desire - want - "
    },
    {
        "id": 954,
        "symbol": "磨",
        "sound": "ma - magaku - ",
        "meaning": "polish - brush (teeth) - "
    },
    {
        "id": 955,
        "symbol": "枚",
        "sound": "mai - - ",
        "meaning": "counter for sheets (paper) - - "
    },
    {
        "id": 956,
        "symbol": "迷",
        "sound": "mayou - mei - ",
        "meaning": "perplexed - lost - "
    },
    {
        "id": 957,
        "symbol": "満",
        "sound": "man - michiru - mitasu",
        "meaning": "full - - "
    },
    {
        "id": 958,
        "symbol": "未",
        "sound": "mi - - ",
        "meaning": "not yet - still to come - "
    },
    {
        "id": 959,
        "symbol": "乱",
        "sound": "midasu - ran - midareru",
        "meaning": "disordered - - "
    },
    {
        "id": 960,
        "symbol": "緑",
        "sound": "midori - ryoku - ",
        "meaning": "green - - "
    },
    {
        "id": 961,
        "symbol": "夢",
        "sound": "mu - yume - ",
        "meaning": "dream - - "
    },
    {
        "id": 962,
        "symbol": "娘",
        "sound": "musume - - ",
        "meaning": "daughter - girl - "
    },
    {
        "id": 963,
        "symbol": "綿",
        "sound": "men - wata - ",
        "meaning": "cotton - - "
    },
    {
        "id": 964,
        "symbol": "戻",
        "sound": "modosu - rei - modoru",
        "meaning": "return - - "
    },
    {
        "id": 965,
        "symbol": "約",
        "sound": "yaku - - ",
        "meaning": "promise - contract - "
    },
    {
        "id": 966,
        "symbol": "由",
        "sound": "yu - yuu - yoshi",
        "meaning": "reason - - "
    },
    {
        "id": 967,
        "symbol": "輸",
        "sound": "yu - - ",
        "meaning": "transport - - "
    },
    {
        "id": 968,
        "symbol": "郵",
        "sound": "yuu - - ",
        "meaning": "mail - - "
    },
    {
        "id": 969,
        "symbol": "予",
        "sound": "yo - - ",
        "meaning": "advance - - "
    },
    {
        "id": 970,
        "symbol": "良",
        "sound": "yoi - ryou - ",
        "meaning": "good - - "
    },
    {
        "id": 971,
        "symbol": "陽",
        "sound": "you - - ",
        "meaning": "sun - positive - "
    },
    {
        "id": 972,
        "symbol": "容",
        "sound": "you - - ",
        "meaning": "appearance - container - contain"
    },
    {
        "id": 973,
        "symbol": "翌",
        "sound": "yoku - - ",
        "meaning": "following - the next - "
    },
    {
        "id": 974,
        "symbol": "礼",
        "sound": "rai - rei - ",
        "meaning": "etiquette - bow - rite"
    },
    {
        "id": 975,
        "symbol": "陸",
        "sound": "riku - - ",
        "meaning": "land - - "
    },
    {
        "id": 976,
        "symbol": "律",
        "sound": "richi - ritsu - ",
        "meaning": "law - rhythm - "
    },
    {
        "id": 977,
        "symbol": "略",
        "sound": "ryaku - - ",
        "meaning": "abridged - strategy - "
    },
    {
        "id": 978,
        "symbol": "両",
        "sound": "ryou - - ",
        "meaning": "both - - "
    },
    {
        "id": 979,
        "symbol": "領",
        "sound": "ryou - - ",
        "meaning": "territory - - "
    },
    {
        "id": 980,
        "symbol": "了",
        "sound": "ryou - - ",
        "meaning": "finish - comprehend - "
    },
    {
        "id": 981,
        "symbol": "療",
        "sound": "ryou - - ",
        "meaning": "treat - treatment - "
    },
    {
        "id": 982,
        "symbol": "輪",
        "sound": "rin - wa - ",
        "meaning": "wheel - ring - "
    },
    {
        "id": 983,
        "symbol": "類",
        "sound": "rui - - ",
        "meaning": "kind - type - "
    },
    {
        "id": 984,
        "symbol": "令",
        "sound": "rei - - ",
        "meaning": "command - - "
    },
    {
        "id": 985,
        "symbol": "零",
        "sound": "rei - - ",
        "meaning": "zero - - "
    },
    {
        "id": 986,
        "symbol": "齢",
        "sound": "rei - - ",
        "meaning": "age - - "
    },
    {
        "id": 987,
        "symbol": "歴",
        "sound": "reki - - ",
        "meaning": "personal history - history - "
    },
    {
        "id": 988,
        "symbol": "列",
        "sound": "retsu - - ",
        "meaning": "row - line - "
    },
    {
        "id": 989,
        "symbol": "労",
        "sound": "rou - - ",
        "meaning": "labor - effort - "
    },
    {
        "id": 990,
        "symbol": "録",
        "sound": "roku - - ",
        "meaning": "record - - "
    },
    {
        "id": 991,
        "symbol": "論",
        "sound": "ron - - ",
        "meaning": "argue - theory - "
    },
    {
        "id": 992,
        "symbol": "湾",
        "sound": "wan - - ",
        "meaning": "bay - - "
    },
    {
        "id": 993,
        "symbol": "他",
        "sound": "ta - hoka - ",
        "meaning": "other - another - "
    },
    {
        "id": 994,
        "symbol": "伝",
        "sound": "den - tsutau - tsutaeru",
        "meaning": "transmit - report - tradition"
    },
    {
        "id": 995,
        "symbol": "顔",
        "sound": "gan - kao - ",
        "meaning": "face - - "
    },
    {
        "id": 996,
        "symbol": "団",
        "sound": "dan - ton - ",
        "meaning": "group - association - "
    },
    {
        "id": 997,
        "symbol": "対",
        "sound": "tai - tsui - ",
        "meaning": "opposite - versus - compare"
    },
    {
        "id": 998,
        "symbol": "舟",
        "sound": "shuu - fune - funa",
        "meaning": "boat - ship - "
    },
    {
        "id": 999,
        "symbol": "雲",
        "sound": "wan - kumo - ",
        "meaning": "cloud - - "
    },
    {
        "id": 1000,
        "symbol": "巨",
        "sound": "kyo - - ",
        "meaning": "big - giant - "
    }
]