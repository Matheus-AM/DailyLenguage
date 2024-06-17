const KANJI = [
    {
        "id": 1,
        "kanji": "一",
        "description": "ichi - hitotsu - ",
        "meaning": "one - 1 - first"
    },
    {
        "id": 2,
        "kanji": "二",
        "description": "ni - futatsu - ",
        "meaning": "two - 2 - second"
    },
    {
        "id": 3,
        "kanji": "三",
        "description": "san - mi - mitsu",
        "meaning": "three - 3 - third"
    },
    {
        "id": 4,
        "kanji": "四",
        "description": "yon - shi - yotsu",
        "meaning": "four - 4 - forth"
    },
    {
        "id": 5,
        "kanji": "五",
        "description": "go - itsutsu - ",
        "meaning": "five - 5 - fifth"
    },
    {
        "id": 6,
        "kanji": "六",
        "description": "roku - mutsu - mui",
        "meaning": "six - 6 - sixth"
    },
    {
        "id": 7,
        "kanji": "七",
        "description": "shichi - nanatsu - nano",
        "meaning": "seven - 7 - seventh"
    },
    {
        "id": 8,
        "kanji": "八",
        "description": "hachi - yatsu - you",
        "meaning": "eight - 8 - eighth"
    },
    {
        "id": 9,
        "kanji": "九",
        "description": "kyuu - ku - kokonotsu",
        "meaning": "nine - 9 - ninth"
    },
    {
        "id": 10,
        "kanji": "十",
        "description": "juu - tou - ju",
        "meaning": "ten - 10 - tenth"
    },
    {
        "id": 11,
        "kanji": "百",
        "description": "hyaku - - ",
        "meaning": "hundred - 100 - "
    },
    {
        "id": 12,
        "kanji": "千",
        "description": "sen - chi - ",
        "meaning": "thousand - 1000 - "
    },
    {
        "id": 13,
        "kanji": "万",
        "description": "ban - man - ",
        "meaning": "ten thousand - 10, 000 - "
    },
    {
        "id": 14,
        "kanji": "父",
        "description": "fu - chichi - tou",
        "meaning": "father - dad - "
    },
    {
        "id": 15,
        "kanji": "母",
        "description": "bo - haha - kaa",
        "meaning": "mother - mom - "
    },
    {
        "id": 16,
        "kanji": "友",
        "description": "yuu - tomo - ",
        "meaning": "friend - - "
    },
    {
        "id": 17,
        "kanji": "女",
        "description": "jo - onna - ",
        "meaning": "woman - female - "
    },
    {
        "id": 18,
        "kanji": "男",
        "description": "dan - otoko - ",
        "meaning": "man - male - "
    },
    {
        "id": 19,
        "kanji": "人",
        "description": "jin - nin - hito",
        "meaning": "person - people - man"
    },
    {
        "id": 20,
        "kanji": "子",
        "description": "shi - ko - ",
        "meaning": "child - children - kid"
    },
    {
        "id": 21,
        "kanji": "日",
        "description": "jitsu - nichi - hi",
        "meaning": "sun - day - "
    },
    {
        "id": 22,
        "kanji": "月",
        "description": "gatsu - getsu - tsuki",
        "meaning": "month - moon - "
    },
    {
        "id": 23,
        "kanji": "火",
        "description": "ka - hi - ",
        "meaning": "fire - light - "
    },
    {
        "id": 24,
        "kanji": "水",
        "description": "sui - mizu - ",
        "meaning": "water - - "
    },
    {
        "id": 25,
        "kanji": "木",
        "description": "moku - boku - ki",
        "meaning": "tree - wood - "
    },
    {
        "id": 26,
        "kanji": "金",
        "description": "kin - kon - kane",
        "meaning": "gold - money - "
    },
    {
        "id": 27,
        "kanji": "土",
        "description": "do - to - tsuchi",
        "meaning": "earth - ground - soil"
    },
    {
        "id": 28,
        "kanji": "本",
        "description": "hon - - ",
        "meaning": "book - counter for long, slender objects - "
    },
    {
        "id": 29,
        "kanji": "休",
        "description": "kyuu - yasumi - yasumu",
        "meaning": "vacation - rest - "
    },
    {
        "id": 30,
        "kanji": "語",
        "description": "go - kataru - katari",
        "meaning": "word - language - speech"
    },
    {
        "id": 31,
        "kanji": "年",
        "description": "nen - toshi - ",
        "meaning": "year - - "
    },
    {
        "id": 32,
        "kanji": "午",
        "description": "go - - ",
        "meaning": "noon - - "
    },
    {
        "id": 33,
        "kanji": "前",
        "description": "zen - mae - ",
        "meaning": "before - in front of - previous"
    },
    {
        "id": 34,
        "kanji": "後",
        "description": "go - kou - ushiro",
        "meaning": "behind - after - "
    },
    {
        "id": 35,
        "kanji": "時",
        "description": "ji - toki - ",
        "meaning": "time - - "
    },
    {
        "id": 36,
        "kanji": "間",
        "description": "kan - aida - ma",
        "meaning": "interval - space - room"
    },
    {
        "id": 37,
        "kanji": "毎",
        "description": "mai - - ",
        "meaning": "every - - "
    },
    {
        "id": 38,
        "kanji": "先",
        "description": "sen - saki - ",
        "meaning": "previous - ahead - "
    },
    {
        "id": 39,
        "kanji": "今",
        "description": "kon - kin - ima",
        "meaning": "now - present - "
    },
    {
        "id": 40,
        "kanji": "何",
        "description": "ka - nan - nani",
        "meaning": "what - how many - "
    },
    {
        "id": 41,
        "kanji": "上",
        "description": "jou - ue - ",
        "meaning": "top - above - up"
    },
    {
        "id": 42,
        "kanji": "下",
        "description": "ka - ge - shita",
        "meaning": "under - bottom - down"
    },
    {
        "id": 43,
        "kanji": "左",
        "description": "sa - hidari - ",
        "meaning": "left - - "
    },
    {
        "id": 44,
        "kanji": "右",
        "description": "yuu - migi - u",
        "meaning": "right - - "
    },
    {
        "id": 45,
        "kanji": "東",
        "description": "tou - higashi - ",
        "meaning": "east - - "
    },
    {
        "id": 46,
        "kanji": "西",
        "description": "sei - sai - nishi",
        "meaning": "west - - "
    },
    {
        "id": 47,
        "kanji": "南",
        "description": "nan - minami - ",
        "meaning": "south - - "
    },
    {
        "id": 48,
        "kanji": "北",
        "description": "hoku - kita - ",
        "meaning": "north - - "
    },
    {
        "id": 49,
        "kanji": "外",
        "description": "gai - hoka - soto",
        "meaning": "outside - foreign - other"
    },
    {
        "id": 50,
        "kanji": "名",
        "description": "mei - myou - na",
        "meaning": "name - famous - fame"
    },
    {
        "id": 51,
        "kanji": "高",
        "description": "kou - takai - ",
        "meaning": "high - expensive - tall"
    },
    {
        "id": 52,
        "kanji": "小",
        "description": "shou - ko - chiisai",
        "meaning": "small - little - "
    },
    {
        "id": 53,
        "kanji": "中",
        "description": "chuu - naka - ",
        "meaning": "middle - inside - center"
    },
    {
        "id": 54,
        "kanji": "大",
        "description": "dai - tai - ooki",
        "meaning": "big - large - great"
    },
    {
        "id": 55,
        "kanji": "長",
        "description": "chou - nagai - ",
        "meaning": "leader - long - "
    },
    {
        "id": 56,
        "kanji": "半",
        "description": "han - - ",
        "meaning": "half - - "
    },
    {
        "id": 57,
        "kanji": "分",
        "description": "fun - bun - wakaru",
        "meaning": "understand - share - part"
    },
    {
        "id": 58,
        "kanji": "学",
        "description": "gaku - manabu - ",
        "meaning": "learning - learn - science"
    },
    {
        "id": 59,
        "kanji": "校",
        "description": "kou - - ",
        "meaning": "school - - "
    },
    {
        "id": 60,
        "kanji": "生",
        "description": "sei - ikiru - shou",
        "meaning": "live - birth - life"
    },
    {
        "id": 61,
        "kanji": "山",
        "description": "san - yama - ",
        "meaning": "mountain - - "
    },
    {
        "id": 62,
        "kanji": "川",
        "description": "sen - kawa - ",
        "meaning": "river - stream - "
    },
    {
        "id": 63,
        "kanji": "白",
        "description": "haku - byaku - shiroi",
        "meaning": "white - - "
    },
    {
        "id": 64,
        "kanji": "天",
        "description": "ten - ama - ame",
        "meaning": "heaven - sky - "
    },
    {
        "id": 65,
        "kanji": "雨",
        "description": "u - ama - ame",
        "meaning": "rain - - "
    },
    {
        "id": 66,
        "kanji": "電",
        "description": "den - - ",
        "meaning": "electricity - electric - power"
    },
    {
        "id": 67,
        "kanji": "気",
        "description": "ki - ke - iki",
        "meaning": "spirit - energy - power"
    },
    {
        "id": 68,
        "kanji": "車",
        "description": "sha - kuruma - ",
        "meaning": "car - vehicle - automobile"
    },
    {
        "id": 69,
        "kanji": "国",
        "description": "koku - kuni - ",
        "meaning": "country - nation - "
    },
    {
        "id": 70,
        "kanji": "円",
        "description": "en - marui - ",
        "meaning": "circle - yen - money"
    },
    {
        "id": 71,
        "kanji": "話",
        "description": "wa - hanashi - hanasu",
        "meaning": "talk - topic - story"
    },
    {
        "id": 72,
        "kanji": "聞",
        "description": "bun - kiku - ",
        "meaning": "hear - listen - ask"
    },
    {
        "id": 73,
        "kanji": "食",
        "description": "kuu - shoku - taberu",
        "meaning": "eat - meal - food"
    },
    {
        "id": 74,
        "kanji": "読",
        "description": "doku - yomu - ",
        "meaning": "read - - "
    },
    {
        "id": 75,
        "kanji": "来",
        "description": "rai - kuru - ",
        "meaning": "come - - "
    },
    {
        "id": 76,
        "kanji": "書",
        "description": "sho - kaku - ",
        "meaning": "book - document - papers"
    },
    {
        "id": 77,
        "kanji": "見",
        "description": "ken - miru - mi",
        "meaning": "see - show - "
    },
    {
        "id": 78,
        "kanji": "行",
        "description": "gyou - kou - iku",
        "meaning": "go - leave - "
    },
    {
        "id": 79,
        "kanji": "出",
        "description": "shutsu - dasu - deru",
        "meaning": "leave - go out - "
    },
    {
        "id": 80,
        "kanji": "入",
        "description": "nyuu - iru - hairu",
        "meaning": "enter - insert - go in"
    },
    {
        "id": 81,
        "kanji": "会",
        "description": "kai - e - au",
        "meaning": "meeting - meet - "
    },
    {
        "id": 82,
        "kanji": "青",
        "description": "sei - shou - aoi",
        "meaning": "blue - - "
    },
    {
        "id": 83,
        "kanji": "赤",
        "description": "seki - shaku - akai",
        "meaning": "red - - "
    },
    {
        "id": 84,
        "kanji": "明",
        "description": "mei - myou - akarui",
        "meaning": "light - bright - dawn"
    },
    {
        "id": 85,
        "kanji": "秋",
        "description": "shuu - aki - ",
        "meaning": "fall - autumn - "
    },
    {
        "id": 86,
        "kanji": "空",
        "description": "kuu - kara - sora",
        "meaning": "sky - air - empty"
    },
    {
        "id": 87,
        "kanji": "開",
        "description": "kai - hiraku - akeru",
        "meaning": "open - - "
    },
    {
        "id": 88,
        "kanji": "悪",
        "description": "aku - warui - ",
        "meaning": "bad - evil - "
    },
    {
        "id": 89,
        "kanji": "朝",
        "description": "chou - asa - ",
        "meaning": "morning - - "
    },
    {
        "id": 90,
        "kanji": "字",
        "description": "ji - aza - ",
        "meaning": "letter - character - mark"
    },
    {
        "id": 91,
        "kanji": "足",
        "description": "ashi - soku - tariru",
        "meaning": "foot - feet - sufficient"
    },
    {
        "id": 92,
        "kanji": "味",
        "description": "mi - aji - ",
        "meaning": "taste - experience - "
    },
    {
        "id": 93,
        "kanji": "新",
        "description": "shin - atarashii - ",
        "meaning": "textframe - fresh - "
    },
    {
        "id": 94,
        "kanji": "集",
        "description": "shuu - atsumeru - ",
        "meaning": "collect - gather - "
    },
    {
        "id": 95,
        "kanji": "兄",
        "description": "kei - kyou - ani",
        "meaning": "brother - older brother - "
    },
    {
        "id": 96,
        "kanji": "姉",
        "description": "shi - ane - ",
        "meaning": "sister - older sister - "
    },
    {
        "id": 97,
        "kanji": "歩",
        "description": "ho - bu - aruku",
        "meaning": "walk - step - "
    },
    {
        "id": 98,
        "kanji": "有",
        "description": "yuu - u - aru",
        "meaning": "have - exist - be"
    },
    {
        "id": 99,
        "kanji": "安",
        "description": "an - yasui - ",
        "meaning": "cheap - peaceful - safe"
    },
    {
        "id": 100,
        "kanji": "医",
        "description": "i - - ",
        "meaning": "heal - - cure"
    },
    {
        "id": 101,
        "kanji": "意",
        "description": "i - - ",
        "meaning": "mind - heart - attention"
    },
    {
        "id": 102,
        "kanji": "以",
        "description": "i - - ",
        "meaning": "more - through - on account"
    },
    {
        "id": 103,
        "kanji": "言",
        "description": "gen - koto - iu",
        "meaning": "speech - statement - word"
    },
    {
        "id": 104,
        "kanji": "家",
        "description": "ka - ya - ie",
        "meaning": "house - - "
    },
    {
        "id": 105,
        "kanji": "急",
        "description": "kyuu - isogu - ",
        "meaning": "hurry - quick - "
    },
    {
        "id": 106,
        "kanji": "犬",
        "description": "ken - inu - ",
        "meaning": "dog - - "
    },
    {
        "id": 107,
        "kanji": "妹",
        "description": "mai - imouto - ",
        "meaning": "sister - younger sister - "
    },
    {
        "id": 108,
        "kanji": "色",
        "description": "iro - shoku - shiki",
        "meaning": "color - - "
    },
    {
        "id": 109,
        "kanji": "音",
        "description": "oto - on - ne",
        "meaning": "sound - - "
    },
    {
        "id": 110,
        "kanji": "員",
        "description": "in - - ",
        "meaning": "member - official - "
    },
    {
        "id": 111,
        "kanji": "院",
        "description": "in - - ",
        "meaning": "institution - academy - "
    },
    {
        "id": 112,
        "kanji": "飲",
        "description": "in - nomu - ",
        "meaning": "drink - - "
    },
    {
        "id": 113,
        "kanji": "魚",
        "description": "sakana - gyo - uo",
        "meaning": "fish - - "
    },
    {
        "id": 114,
        "kanji": "動",
        "description": "ugoku - dou - ",
        "meaning": "move - - "
    },
    {
        "id": 115,
        "kanji": "牛",
        "description": "gyuu - ushi - ",
        "meaning": "cow - bull - "
    },
    {
        "id": 116,
        "kanji": "歌",
        "description": "ka - uta - utau",
        "meaning": "song - sing - "
    },
    {
        "id": 117,
        "kanji": "写",
        "description": "sha - utsusu - ",
        "meaning": "copy - take a photo - "
    },
    {
        "id": 118,
        "kanji": "映",
        "description": "ei - utsuru - utsusu",
        "meaning": "reflect - project - "
    },
    {
        "id": 119,
        "kanji": "海",
        "description": "kai - umi - ",
        "meaning": "sea - ocean - "
    },
    {
        "id": 120,
        "kanji": "売",
        "description": "bai - uri - uru",
        "meaning": "sale - sell - "
    },
    {
        "id": 121,
        "kanji": "運",
        "description": "un - hakobu - ",
        "meaning": "luck - carry - move"
    },
    {
        "id": 122,
        "kanji": "重",
        "description": "juu - chou - omoi",
        "meaning": "heavy - important - stress"
    },
    {
        "id": 123,
        "kanji": "英",
        "description": "ei - - ",
        "meaning": "england - english - grand"
    },
    {
        "id": 124,
        "kanji": "駅",
        "description": "eki - - ",
        "meaning": "station - (train) station - "
    },
    {
        "id": 125,
        "kanji": "終",
        "description": "shuu - owari - tsui",
        "meaning": "end - finish - last"
    },
    {
        "id": 126,
        "kanji": "多",
        "description": "ta - ooi - ",
        "meaning": "many - much - frequent"
    },
    {
        "id": 127,
        "kanji": "起",
        "description": "ki - okiru - okosu",
        "meaning": "wake - get up - rise"
    },
    {
        "id": 128,
        "kanji": "屋",
        "description": "oku - ya - ",
        "meaning": "roof - house - shop"
    },
    {
        "id": 129,
        "kanji": "送",
        "description": "sou - okuru - ",
        "meaning": "send - - "
    },
    {
        "id": 130,
        "kanji": "教",
        "description": "kyou - oshieru - ",
        "meaning": "teach - education - faith"
    },
    {
        "id": 131,
        "kanji": "弟",
        "description": "dai - tei - otouto",
        "meaning": "brother - younger brother - "
    },
    {
        "id": 132,
        "kanji": "同",
        "description": "dou - onaji - ",
        "meaning": "same - agree - equal"
    },
    {
        "id": 133,
        "kanji": "主",
        "description": "shu - su - nushi",
        "meaning": "lord - master - principal"
    },
    {
        "id": 134,
        "kanji": "思",
        "description": "shi - omou - ",
        "meaning": "think - thought - "
    },
    {
        "id": 135,
        "kanji": "親",
        "description": "shin - oya - shitashii",
        "meaning": "parent - relative - familiar"
    },
    {
        "id": 136,
        "kanji": "花",
        "description": "ka - ke - hana",
        "meaning": "flower - - "
    },
    {
        "id": 137,
        "kanji": "夏",
        "description": "ka - natsu - ",
        "meaning": "summer - - "
    },
    {
        "id": 138,
        "kanji": "画",
        "description": "ga - kaku - ",
        "meaning": "picture - stroke - stroke of kanji"
    },
    {
        "id": 139,
        "kanji": "界",
        "description": "kai - - ",
        "meaning": "world - - "
    },
    {
        "id": 140,
        "kanji": "買",
        "description": "bai - kau - ",
        "meaning": "buy - - "
    },
    {
        "id": 141,
        "kanji": "帰",
        "description": "ki - kaeru - ",
        "meaning": "return - arrive - come home"
    },
    {
        "id": 142,
        "kanji": "代",
        "description": "dai - yo - kawaru",
        "meaning": "generation - substitute - exchange"
    },
    {
        "id": 143,
        "kanji": "楽",
        "description": "gaku - raku - tanoshii",
        "meaning": "music - comfort - ease"
    },
    {
        "id": 144,
        "kanji": "風",
        "description": "fuu - fu - kaze",
        "meaning": "wind - air - style"
    },
    {
        "id": 145,
        "kanji": "貸",
        "description": "tai - kasu - ",
        "meaning": "lend - - "
    },
    {
        "id": 146,
        "kanji": "方",
        "description": "hou - kata - ",
        "meaning": "direction - way - person"
    },
    {
        "id": 147,
        "kanji": "紙",
        "description": "shi - kami - ",
        "meaning": "paper - - "
    },
    {
        "id": 148,
        "kanji": "通",
        "description": "tsuu - tooru - toori",
        "meaning": "avenue - traffic - go through"
    },
    {
        "id": 149,
        "kanji": "体",
        "description": "tai - karada - katachi",
        "meaning": "body - object - "
    },
    {
        "id": 150,
        "kanji": "借",
        "description": "shaku - kariru - ",
        "meaning": "borrow - rent - "
    },
    {
        "id": 151,
        "kanji": "漢",
        "description": "kan - han - ",
        "meaning": "china - chinese - "
    },
    {
        "id": 152,
        "kanji": "館",
        "description": "kan - yakata - ",
        "meaning": "building - palace - "
    },
    {
        "id": 153,
        "kanji": "元",
        "description": "gen - gan - moto",
        "meaning": "beginning - origin - "
    },
    {
        "id": 154,
        "kanji": "考",
        "description": "kou - kangaeru - kangae",
        "meaning": "think - consider - thought"
    },
    {
        "id": 155,
        "kanji": "着",
        "description": "chaku - jyaku - kiru",
        "meaning": "wear - wear clothes - arrive"
    },
    {
        "id": 156,
        "kanji": "究",
        "description": "kyuu - ku - kiwameru",
        "meaning": "research - study - "
    },
    {
        "id": 157,
        "kanji": "去",
        "description": "kyo - ko - saru",
        "meaning": "past - gone - leave"
    },
    {
        "id": 158,
        "kanji": "京",
        "description": "kyou - miyako - kei",
        "meaning": "capital - - "
    },
    {
        "id": 159,
        "kanji": "強",
        "description": "kyou - gou - tsuyoi",
        "meaning": "strong - force - "
    },
    {
        "id": 160,
        "kanji": "業",
        "description": "gyou - gou - waza",
        "meaning": "business - vocation - job"
    },
    {
        "id": 161,
        "kanji": "切",
        "description": "setsu - sai - kiru",
        "meaning": "cut - cut off - slice"
    },
    {
        "id": 162,
        "kanji": "近",
        "description": "kin - kon - chikai",
        "meaning": "near - early - soon"
    },
    {
        "id": 163,
        "kanji": "銀",
        "description": "gin - shirogane - ",
        "meaning": "silver - - "
    },
    {
        "id": 164,
        "kanji": "口",
        "description": "kou - ku - kuchi",
        "meaning": "mouth - - "
    },
    {
        "id": 165,
        "kanji": "工",
        "description": "kou - ku - gu",
        "meaning": "construction - craft - "
    },
    {
        "id": 166,
        "kanji": "黒",
        "description": "koku - kuro - kuroi",
        "meaning": "black - - "
    },
    {
        "id": 167,
        "kanji": "計",
        "description": "kei - hakaru - ",
        "meaning": "plan - measure - "
    },
    {
        "id": 168,
        "kanji": "研",
        "description": "ken - togu - ",
        "meaning": "study - sharpen - "
    },
    {
        "id": 169,
        "kanji": "建",
        "description": "ken - kon - tateru",
        "meaning": "build - - "
    },
    {
        "id": 170,
        "kanji": "験",
        "description": "ken - tamesu - ",
        "meaning": "test - examine - effect"
    },
    {
        "id": 171,
        "kanji": "古",
        "description": "ko - furui - ",
        "meaning": "old - old fashioned - "
    },
    {
        "id": 172,
        "kanji": "広",
        "description": "kou - hiroi - hiromeru",
        "meaning": "wide - broad - big"
    },
    {
        "id": 173,
        "kanji": "心",
        "description": "shin - kokoro - ",
        "meaning": "heart - mind - "
    },
    {
        "id": 174,
        "kanji": "試",
        "description": "shi - kokoromiru - tamesu",
        "meaning": "test - try - experiment"
    },
    {
        "id": 175,
        "kanji": "答",
        "description": "tou - kotaeru - kotae",
        "meaning": "solution - answer - "
    },
    {
        "id": 176,
        "kanji": "事",
        "description": "ji - zu - koto",
        "meaning": "thing - matter - business"
    },
    {
        "id": 177,
        "kanji": "転",
        "description": "ten - - ",
        "meaning": "revolve - turn - turn around"
    },
    {
        "id": 178,
        "kanji": "作",
        "description": "saku - sa - tsukuru",
        "meaning": "make - produce - prepare"
    },
    {
        "id": 179,
        "kanji": "茶",
        "description": "cha - sa - ",
        "meaning": "tea - - "
    },
    {
        "id": 180,
        "kanji": "早",
        "description": "sou - hayai - ",
        "meaning": "fast - quick - early"
    },
    {
        "id": 181,
        "kanji": "止",
        "description": "shi - tomaru - tomeru",
        "meaning": "stop - - "
    },
    {
        "id": 182,
        "kanji": "自",
        "description": "ji - shi - mizukara",
        "meaning": "oneself - I - self"
    },
    {
        "id": 183,
        "kanji": "仕",
        "description": "shi - ji - tsukaeru",
        "meaning": "official - serve - attend"
    },
    {
        "id": 184,
        "kanji": "死",
        "description": "shi - shinu - ",
        "meaning": "death - die - dead"
    },
    {
        "id": 185,
        "kanji": "始",
        "description": "shi - hajimeru - ",
        "meaning": "begin - beginning - start"
    },
    {
        "id": 186,
        "kanji": "使",
        "description": "shi - tsukau - tsukai",
        "meaning": "use - - "
    },
    {
        "id": 187,
        "kanji": "私",
        "description": "shi - watashi - watakushi",
        "meaning": "I - me - private"
    },
    {
        "id": 188,
        "kanji": "地",
        "description": "chi - ji - ",
        "meaning": "ground - land - earth"
    },
    {
        "id": 189,
        "kanji": "持",
        "description": "ji - motsu - moteru",
        "meaning": "have - hold - carry"
    },
    {
        "id": 190,
        "kanji": "質",
        "description": "shitsu - - ",
        "meaning": "quality - matter - substance"
    },
    {
        "id": 191,
        "kanji": "室",
        "description": "shitsu - muro - ",
        "meaning": "room - chamber - "
    },
    {
        "id": 192,
        "kanji": "品",
        "description": "hin - shina - ",
        "meaning": "goods - article - dignity"
    },
    {
        "id": 193,
        "kanji": "社",
        "description": "sha - yashiro - ",
        "meaning": "company - firm - office"
    },
    {
        "id": 194,
        "kanji": "者",
        "description": "sha - mono - ",
        "meaning": "someone - person - "
    },
    {
        "id": 195,
        "kanji": "手",
        "description": "shu - zu - te",
        "meaning": "hand - - "
    },
    {
        "id": 196,
        "kanji": "週",
        "description": "shuu - - ",
        "meaning": "week - - "
    },
    {
        "id": 197,
        "kanji": "習",
        "description": "shuu - ju - narau",
        "meaning": "learn - - "
    },
    {
        "id": 198,
        "kanji": "住",
        "description": "juu - chuu - sumu",
        "meaning": "live - reside - dwell"
    },
    {
        "id": 199,
        "kanji": "春",
        "description": "shun - haru - ",
        "meaning": "spring - spring (season) - "
    },
    {
        "id": 200,
        "kanji": "正",
        "description": "sei - shou - tadashii",
        "meaning": "correct - right - justice"
    },
    {
        "id": 201,
        "kanji": "少",
        "description": "shou - sukunai - sukoshi",
        "meaning": "few - little - "
    },
    {
        "id": 202,
        "kanji": "場",
        "description": "jou - chou - ba",
        "meaning": "area - location - place"
    },
    {
        "id": 203,
        "kanji": "知",
        "description": "chi - shiru - ",
        "meaning": "know - wisdom - "
    },
    {
        "id": 204,
        "kanji": "真",
        "description": "shin - ma - makoto",
        "meaning": "true - reality - truth"
    },
    {
        "id": 205,
        "kanji": "図",
        "description": "zu - to - hakaru",
        "meaning": "map - drawing - plan"
    },
    {
        "id": 206,
        "kanji": "世",
        "description": "sei - se - yo",
        "meaning": "world - society - generation"
    },
    {
        "id": 207,
        "kanji": "夕",
        "description": "seki - yuu - ",
        "meaning": "evening - - "
    },
    {
        "id": 208,
        "kanji": "走",
        "description": "sou - hashiru - ",
        "meaning": "run - - "
    },
    {
        "id": 209,
        "kanji": "族",
        "description": "zoku - - ",
        "meaning": "tribe - family - "
    },
    {
        "id": 210,
        "kanji": "注",
        "description": "chuu - sosogu - sasu",
        "meaning": "pour - flow - concentrate"
    },
    {
        "id": 211,
        "kanji": "田",
        "description": "den - ta - ",
        "meaning": "field - rice field - rice patty"
    },
    {
        "id": 212,
        "kanji": "台",
        "description": "dai - tai - ",
        "meaning": "stand - stage - pedestal"
    },
    {
        "id": 213,
        "kanji": "待",
        "description": "tai - matsu - ",
        "meaning": "wait - depend on - "
    },
    {
        "id": 214,
        "kanji": "題",
        "description": "dai - - ",
        "meaning": "topic - subject - "
    },
    {
        "id": 215,
        "kanji": "度",
        "description": "do - taku - tabi",
        "meaning": "degree - time - times occurred"
    },
    {
        "id": 216,
        "kanji": "立",
        "description": "ritsu - ryuu - tatsu",
        "meaning": "stand - stand up - "
    },
    {
        "id": 217,
        "kanji": "旅",
        "description": "ryo - tabi - ",
        "meaning": "trip - travel - "
    },
    {
        "id": 218,
        "kanji": "力",
        "description": "ryoku - riki - chikara",
        "meaning": "power - strength - exertion"
    },
    {
        "id": 219,
        "kanji": "昼",
        "description": "chuu - hiru - ",
        "meaning": "noon - daytime - day"
    },
    {
        "id": 220,
        "kanji": "町",
        "description": "chou - machi - ",
        "meaning": "town - village - "
    },
    {
        "id": 221,
        "kanji": "鳥",
        "description": "chou - tori - ",
        "meaning": "bird - - "
    },
    {
        "id": 222,
        "kanji": "店",
        "description": "ten - mise - ",
        "meaning": "store - shop - problem"
    },
    {
        "id": 223,
        "kanji": "問",
        "description": "mon - tou - ",
        "meaning": "question - ask - "
    },
    {
        "id": 224,
        "kanji": "冬",
        "description": "tou - fuyu - ",
        "meaning": "winter - winter (season) - course"
    },
    {
        "id": 225,
        "kanji": "道",
        "description": "dou - tou - michi",
        "meaning": "way - road - "
    },
    {
        "id": 226,
        "kanji": "堂",
        "description": "dou - - ",
        "meaning": "hall - - "
    },
    {
        "id": 227,
        "kanji": "特",
        "description": "toku - - ",
        "meaning": "special - - "
    },
    {
        "id": 228,
        "kanji": "肉",
        "description": "niku - - ",
        "meaning": "meat - - "
    },
    {
        "id": 229,
        "kanji": "野",
        "description": "ya - sho - no",
        "meaning": "plains - field - "
    },
    {
        "id": 230,
        "kanji": "発",
        "description": "hatsu - abaku - tatsu",
        "meaning": "depart - start - happen"
    },
    {
        "id": 231,
        "kanji": "飯",
        "description": "han - meshi - ",
        "meaning": "meal - rice - cooked rice"
    },
    {
        "id": 232,
        "kanji": "病",
        "description": "byou - yamai - yamu",
        "meaning": "ill - sick - "
    },
    {
        "id": 233,
        "kanji": "不",
        "description": "fu - bu - ",
        "meaning": "non - negative - bad"
    },
    {
        "id": 234,
        "kanji": "服",
        "description": "fuku - - ",
        "meaning": "clothing - obey - "
    },
    {
        "id": 235,
        "kanji": "物",
        "description": "butsu - motsu - mono",
        "meaning": "thing - matter - object"
    },
    {
        "id": 236,
        "kanji": "文",
        "description": "bun - mon - fumi",
        "meaning": "sentence - literature - "
    },
    {
        "id": 237,
        "kanji": "別",
        "description": "betsu - wakareru - wakeru",
        "meaning": "separate - another - specially"
    },
    {
        "id": 238,
        "kanji": "勉",
        "description": "ben - tsutomeru - ",
        "meaning": "exertion - - "
    },
    {
        "id": 239,
        "kanji": "目",
        "description": "moku - boku - me",
        "meaning": "eye - - "
    },
    {
        "id": 240,
        "kanji": "用",
        "description": "you - mochiiru - ",
        "meaning": "use - service - business"
    },
    {
        "id": 241,
        "kanji": "夜",
        "description": "ya - yo - yoru",
        "meaning": "night - evening - "
    },
    {
        "id": 242,
        "kanji": "曜",
        "description": "you - - ",
        "meaning": "weekday - - "
    },
    {
        "id": 243,
        "kanji": "洋",
        "description": "you - - ",
        "meaning": "west - western - ocean"
    },
    {
        "id": 244,
        "kanji": "理",
        "description": "ri - - ",
        "meaning": "logic - reason - truth"
    },
    {
        "id": 245,
        "kanji": "料",
        "description": "ryou - - ",
        "meaning": "fee - materials - "
    },
    {
        "id": 246,
        "kanji": "相",
        "description": "ai - sou - shou",
        "meaning": "mutual - appearance - minister (of state)"
    },
    {
        "id": 247,
        "kanji": "愛",
        "description": "ai - - ",
        "meaning": "love - affection - "
    },
    {
        "id": 248,
        "kanji": "合",
        "description": "au - gou - ka (tsu)",
        "meaning": "together - fit - to be together"
    },
    {
        "id": 249,
        "kanji": "商",
        "description": "akinau - shou - ",
        "meaning": "sell - trade - "
    },
    {
        "id": 250,
        "kanji": "浅",
        "description": "asai - sen - ",
        "meaning": "shallow - superficial - "
    },
    {
        "id": 251,
        "kanji": "預",
        "description": "azukaru - yo - azukeru",
        "meaning": "keep - charge - deposit"
    },
    {
        "id": 252,
        "kanji": "汗",
        "description": "ase - kan - ",
        "meaning": "sweat - perspiration - "
    },
    {
        "id": 253,
        "kanji": "遊",
        "description": "asobu - yuu - ",
        "meaning": "play - idle - playful"
    },
    {
        "id": 254,
        "kanji": "値",
        "description": "atai - chi - ne",
        "meaning": "value - price - to value"
    },
    {
        "id": 255,
        "kanji": "与",
        "description": "ataeru - yo - ",
        "meaning": "give - award - assign"
    },
    {
        "id": 256,
        "kanji": "温",
        "description": "atatakai - on - ",
        "meaning": "warm - temperature - "
    },
    {
        "id": 257,
        "kanji": "暖",
        "description": "atatakai - dan - ",
        "meaning": "warm - cordial - "
    },
    {
        "id": 258,
        "kanji": "頭",
        "description": "atama - tou - zu",
        "meaning": "head - top - "
    },
    {
        "id": 259,
        "kanji": "辺",
        "description": "atari - hen - be",
        "meaning": "vicinity - neighborhood - "
    },
    {
        "id": 260,
        "kanji": "当",
        "description": "ataru - tou - ateru",
        "meaning": "hit - win - guess"
    },
    {
        "id": 261,
        "kanji": "圧",
        "description": "atsu - - ",
        "meaning": "pressure - - "
    },
    {
        "id": 262,
        "kanji": "暑",
        "description": "atsui - sho - ",
        "meaning": "heat - hot - summer heat"
    },
    {
        "id": 263,
        "kanji": "熱",
        "description": "atsui - netsu - ",
        "meaning": "heat - hot - fever"
    },
    {
        "id": 264,
        "kanji": "厚",
        "description": "atsui - kou - ",
        "meaning": "thick - - "
    },
    {
        "id": 265,
        "kanji": "跡",
        "description": "ato - seki - ",
        "meaning": "trace - marks - remains"
    },
    {
        "id": 266,
        "kanji": "暴",
        "description": "abaku - bou - ",
        "meaning": "disclose - open - violent"
    },
    {
        "id": 267,
        "kanji": "浴",
        "description": "abiru - yoku - ",
        "meaning": "bathe - - "
    },
    {
        "id": 268,
        "kanji": "危",
        "description": "abunai - ki - ayaui",
        "meaning": "dangerous - unsafe - unsteady"
    },
    {
        "id": 269,
        "kanji": "油",
        "description": "abura - yu - ",
        "meaning": "oil - - "
    },
    {
        "id": 270,
        "kanji": "脂",
        "description": "abura - shi - ",
        "meaning": "fat - - "
    },
    {
        "id": 271,
        "kanji": "甘",
        "description": "amai - kan - ",
        "meaning": "sweet - - "
    },
    {
        "id": 272,
        "kanji": "余",
        "description": "amasu - yo - amaru",
        "meaning": "remain - remainder - to leave over"
    },
    {
        "id": 273,
        "kanji": "編",
        "description": "amu - hen - ",
        "meaning": "compile - knit - "
    },
    {
        "id": 274,
        "kanji": "過",
        "description": "ayamachi - ka - sugiru",
        "meaning": "fault - exceed - pass"
    },
    {
        "id": 275,
        "kanji": "誤",
        "description": "ayamaru - go - ",
        "meaning": "mistake - fault - "
    },
    {
        "id": 276,
        "kanji": "荒",
        "description": "arai - kou - areru",
        "meaning": "violent - wild - rough"
    },
    {
        "id": 277,
        "kanji": "洗",
        "description": "arau - sen - ",
        "meaning": "wash - - "
    },
    {
        "id": 278,
        "kanji": "争",
        "description": "arasou - sou - arasoi",
        "meaning": "struggle - quarrel - dispute"
    },
    {
        "id": 279,
        "kanji": "改",
        "description": "aratameru - aratamaru - kai",
        "meaning": "change - reform - reformed"
    },
    {
        "id": 280,
        "kanji": "表",
        "description": "arawasu - hyou - omote",
        "meaning": "show - list - schedule"
    },
    {
        "id": 281,
        "kanji": "現",
        "description": "arawasu - gen - ",
        "meaning": "actual - appear - "
    },
    {
        "id": 282,
        "kanji": "著",
        "description": "arawasu - cho - ichijirushii",
        "meaning": "author - writer - remarkable"
    },
    {
        "id": 283,
        "kanji": "在",
        "description": "aru - zai - ",
        "meaning": "exist - country - suburbs"
    },
    {
        "id": 284,
        "kanji": "暗",
        "description": "an - kurai - ",
        "meaning": "dark - - "
    },
    {
        "id": 285,
        "kanji": "委",
        "description": "i - - ",
        "meaning": "commit - entrust - "
    },
    {
        "id": 286,
        "kanji": "衣",
        "description": "i - koromo - ",
        "meaning": "clothes - garments - "
    },
    {
        "id": 287,
        "kanji": "囲",
        "description": "i - kakomu - kakou",
        "meaning": "enclose - surround - "
    },
    {
        "id": 288,
        "kanji": "位",
        "description": "i - kurai - ",
        "meaning": "rank - position - about"
    },
    {
        "id": 289,
        "kanji": "胃",
        "description": "i - - ",
        "meaning": "stomach - - "
    },
    {
        "id": 290,
        "kanji": "易",
        "description": "i - eki - yasui",
        "meaning": "easy - - "
    },
    {
        "id": 291,
        "kanji": "移",
        "description": "i - utsuru - utsusu",
        "meaning": "transfer - infect - move"
    },
    {
        "id": 292,
        "kanji": "依",
        "description": "i - e - ",
        "meaning": "depend - depend on - "
    },
    {
        "id": 293,
        "kanji": "偉",
        "description": "i - erai - ",
        "meaning": "great - remarkable - "
    },
    {
        "id": 294,
        "kanji": "違",
        "description": "i - chigau - chigaeru",
        "meaning": "differ - wrong - "
    },
    {
        "id": 295,
        "kanji": "怒",
        "description": "ikaru - do - okoru",
        "meaning": "anger - get angry - angry"
    },
    {
        "id": 296,
        "kanji": "息",
        "description": "iki - soku - ",
        "meaning": "breath - - "
    },
    {
        "id": 297,
        "kanji": "域",
        "description": "iki - - ",
        "meaning": "boundary - - "
    },
    {
        "id": 298,
        "kanji": "勢",
        "description": "ikioi - sei - ",
        "meaning": "power - - "
    },
    {
        "id": 299,
        "kanji": "幾",
        "description": "iku - ki - ",
        "meaning": "how many - some - "
    },
    {
        "id": 300,
        "kanji": "育",
        "description": "iku - sodatsu - sodateru",
        "meaning": "bring up - educate - grow"
    },
    {
        "id": 301,
        "kanji": "戦",
        "description": "ikusa - sen - tatakau",
        "meaning": "war - - "
    },
    {
        "id": 302,
        "kanji": "池",
        "description": "ike - chi - ",
        "meaning": "pond - - "
    },
    {
        "id": 303,
        "kanji": "勇",
        "description": "isamu - yuu - ",
        "meaning": "brave - - "
    },
    {
        "id": 304,
        "kanji": "石",
        "description": "ishi - seki - shaku",
        "meaning": "stone - rock - "
    },
    {
        "id": 305,
        "kanji": "泉",
        "description": "izumi - sen - ",
        "meaning": "spring - - "
    },
    {
        "id": 306,
        "kanji": "忙",
        "description": "isogashii - bou - ",
        "meaning": "busy - - "
    },
    {
        "id": 307,
        "kanji": "板",
        "description": "ita - han - ban",
        "meaning": "board - plate - "
    },
    {
        "id": 308,
        "kanji": "痛",
        "description": "itai - tsuu - itamu",
        "meaning": "pain - hurt - "
    },
    {
        "id": 309,
        "kanji": "抱",
        "description": "idaku - hou - daku",
        "meaning": "hug - hold - "
    },
    {
        "id": 310,
        "kanji": "頂",
        "description": "itadaki - chou - itadaku",
        "meaning": "summit - receive - summit (mountain)"
    },
    {
        "id": 311,
        "kanji": "市",
        "description": "ichi - shi - ",
        "meaning": "market - city - "
    },
    {
        "id": 312,
        "kanji": "糸",
        "description": "ito - shi - ",
        "meaning": "thread - - "
    },
    {
        "id": 313,
        "kanji": "営",
        "description": "itonamu - ei - ",
        "meaning": "manage - barracks - "
    },
    {
        "id": 314,
        "kanji": "否",
        "description": "ina - hi - ",
        "meaning": "no - denial - "
    },
    {
        "id": 315,
        "kanji": "命",
        "description": "inochi - mei - myou",
        "meaning": "life - order - "
    },
    {
        "id": 316,
        "kanji": "祈",
        "description": "inoru - ki - ",
        "meaning": "pray - to pray - prayer"
    },
    {
        "id": 317,
        "kanji": "要",
        "description": "iru - you - ",
        "meaning": "require - necessary - "
    },
    {
        "id": 318,
        "kanji": "居",
        "description": "iru - kyo - ",
        "meaning": "reside - - "
    },
    {
        "id": 319,
        "kanji": "岩",
        "description": "iwa - gan - ",
        "meaning": "rock - crag - "
    },
    {
        "id": 320,
        "kanji": "祝",
        "description": "iwau - shuku - shuu",
        "meaning": "celebrate - - "
    },
    {
        "id": 321,
        "kanji": "引",
        "description": "in - hiku - hikeru",
        "meaning": "draw - pull - "
    },
    {
        "id": 322,
        "kanji": "印",
        "description": "in - shirushi - ",
        "meaning": "sign - mark - "
    },
    {
        "id": 323,
        "kanji": "因",
        "description": "in - yoru - ",
        "meaning": "cause - - "
    },
    {
        "id": 324,
        "kanji": "羽",
        "description": "u - ha - hane",
        "meaning": "feather - wing - "
    },
    {
        "id": 325,
        "kanji": "宇",
        "description": "u - - ",
        "meaning": "universe - eaves - house"
    },
    {
        "id": 326,
        "kanji": "初",
        "description": "hatsu - sho - hajime",
        "meaning": "first - beginning - begin"
    },
    {
        "id": 327,
        "kanji": "植",
        "description": "ueru - uwaru - shoku",
        "meaning": "plant - to plant - set up"
    },
    {
        "id": 328,
        "kanji": "伺",
        "description": "ukagau - shi - ",
        "meaning": "ask - visit - hear"
    },
    {
        "id": 329,
        "kanji": "浮",
        "description": "ukabu - fu - uku",
        "meaning": "float - to float - come to mind"
    },
    {
        "id": 330,
        "kanji": "受",
        "description": "ukaru - ju - ukeru",
        "meaning": "receive - popularity - receptacle"
    },
    {
        "id": 331,
        "kanji": "承",
        "description": "uketamawaru - shou - ",
        "meaning": "hear - agree - "
    },
    {
        "id": 332,
        "kanji": "失",
        "description": "ushinau - shitsu - ",
        "meaning": "lose - slip - "
    },
    {
        "id": 333,
        "kanji": "薄",
        "description": "usui - haku - ",
        "meaning": "thin - pale - weak"
    },
    {
        "id": 334,
        "kanji": "疑",
        "description": "utagau - gi - utagai",
        "meaning": "doubt - suspect - suspicion"
    },
    {
        "id": 335,
        "kanji": "内",
        "description": "uchi - nai - dai",
        "meaning": "inside - - "
    },
    {
        "id": 336,
        "kanji": "打",
        "description": "utsu - da - ",
        "meaning": "strick - hit - beat"
    },
    {
        "id": 337,
        "kanji": "美",
        "description": "utsukushii - bi - ",
        "meaning": "beautiful - beauty - "
    },
    {
        "id": 338,
        "kanji": "器",
        "description": "utsuwa - ki - ",
        "meaning": "vessel - tool - "
    },
    {
        "id": 339,
        "kanji": "腕",
        "description": "ude - wan - ",
        "meaning": "arm - talent - ability"
    },
    {
        "id": 340,
        "kanji": "産",
        "description": "ubu - san - umu",
        "meaning": "childbearing - product - birth"
    },
    {
        "id": 341,
        "kanji": "馬",
        "description": "uma - ba - ma",
        "meaning": "horse - - "
    },
    {
        "id": 342,
        "kanji": "埋",
        "description": "umaru - mai - umeru",
        "meaning": "bury - fill - fill up"
    },
    {
        "id": 343,
        "kanji": "敬",
        "description": "uyamau - kei - ",
        "meaning": "respect - - "
    },
    {
        "id": 344,
        "kanji": "裏",
        "description": "ura - ri - ",
        "meaning": "opposite - back - reverse"
    },
    {
        "id": 345,
        "kanji": "占",
        "description": "uranau - sen - shimeru",
        "meaning": "divination - to hold (a seat) - occupy"
    },
    {
        "id": 346,
        "kanji": "得",
        "description": "uru - toku - eru",
        "meaning": "acquire - gain - "
    },
    {
        "id": 347,
        "kanji": "絵",
        "description": "e - kai - ",
        "meaning": "picture - - "
    },
    {
        "id": 348,
        "kanji": "回",
        "description": "e - kai - mawaru",
        "meaning": "turn - to turn - "
    },
    {
        "id": 349,
        "kanji": "泳",
        "description": "ei - oyogu - ",
        "meaning": "swim - - "
    },
    {
        "id": 350,
        "kanji": "栄",
        "description": "ei - sakaeru - hae",
        "meaning": "glory - flourish - "
    },
    {
        "id": 351,
        "kanji": "永",
        "description": "ei - nagai - ",
        "meaning": "eternal - - "
    },
    {
        "id": 352,
        "kanji": "鋭",
        "description": "ei - surudoi - ",
        "meaning": "sharp - - "
    },
    {
        "id": 353,
        "kanji": "役",
        "description": "eki - yaku - ",
        "meaning": "office - duty - service"
    },
    {
        "id": 354,
        "kanji": "液",
        "description": "eki - - ",
        "meaning": "liquid - - "
    },
    {
        "id": 355,
        "kanji": "枝",
        "description": "eda - shi - ",
        "meaning": "branch - tree branch - "
    },
    {
        "id": 356,
        "kanji": "越",
        "description": "etsu - koeru - kosu",
        "meaning": "exceed - cross - move"
    },
    {
        "id": 357,
        "kanji": "笑",
        "description": "emu - warau - shou",
        "meaning": "laugh - smile - "
    },
    {
        "id": 358,
        "kanji": "選",
        "description": "erabu - sen - ",
        "meaning": "choose - choice - "
    },
    {
        "id": 359,
        "kanji": "園",
        "description": "en - sono - ",
        "meaning": "garden - - "
    },
    {
        "id": 360,
        "kanji": "遠",
        "description": "en - on - tooi",
        "meaning": "far - - "
    },
    {
        "id": 361,
        "kanji": "塩",
        "description": "en - shio - ",
        "meaning": "salt - - "
    },
    {
        "id": 362,
        "kanji": "演",
        "description": "en - - ",
        "meaning": "act - perform - put on a play"
    },
    {
        "id": 363,
        "kanji": "延",
        "description": "en - nobiru - nobasu",
        "meaning": "postpone - extend - "
    },
    {
        "id": 364,
        "kanji": "煙",
        "description": "en - kemuri - kemuru",
        "meaning": "smoke - smokey - "
    },
    {
        "id": 365,
        "kanji": "緒",
        "description": "sho - cho - o",
        "meaning": "cord - string (of a musical instrument) - beginning (lineage)"
    },
    {
        "id": 366,
        "kanji": "汚",
        "description": "o - kegasu - kitanai",
        "meaning": "soil - dirty - get dirty"
    },
    {
        "id": 367,
        "kanji": "和",
        "description": "wa - yawaraku - nagomu",
        "meaning": "peace - Japan - sum"
    },
    {
        "id": 368,
        "kanji": "老",
        "description": "oiru - rou - fukeru",
        "meaning": "old - - "
    },
    {
        "id": 369,
        "kanji": "負",
        "description": "ou - fu - makeru",
        "meaning": "lose - defeated - to bear"
    },
    {
        "id": 370,
        "kanji": "追",
        "description": "ou - tsui - ",
        "meaning": "chase - - "
    },
    {
        "id": 371,
        "kanji": "王",
        "description": "ou - - ",
        "meaning": "king - - "
    },
    {
        "id": 372,
        "kanji": "黄",
        "description": "ou - kou - ki",
        "meaning": "yellow - - "
    },
    {
        "id": 373,
        "kanji": "央",
        "description": "ou - - ",
        "meaning": "center - middle - "
    },
    {
        "id": 374,
        "kanji": "横",
        "description": "ou - yoko - ",
        "meaning": "side - width - beside"
    },
    {
        "id": 375,
        "kanji": "欧",
        "description": "ou - - ",
        "meaning": "europe - european - "
    },
    {
        "id": 376,
        "kanji": "押",
        "description": "ou - osu - osaeru",
        "meaning": "push - - "
    },
    {
        "id": 377,
        "kanji": "奥",
        "description": "ou - oku - ",
        "meaning": "interior - depths - inner"
    },
    {
        "id": 378,
        "kanji": "犯",
        "description": "okasu - han - ",
        "meaning": "violate - offense - to commit"
    },
    {
        "id": 379,
        "kanji": "拝",
        "description": "ogamu - hai - ",
        "meaning": "worship - humbly - "
    },
    {
        "id": 380,
        "kanji": "補",
        "description": "oginau - ho - ",
        "meaning": "supply - supplement - compensate"
    },
    {
        "id": 381,
        "kanji": "置",
        "description": "oku - chi - ",
        "meaning": "place - put - "
    },
    {
        "id": 382,
        "kanji": "億",
        "description": "oku - - ",
        "meaning": "hundred million - 100, 000, 000 - "
    },
    {
        "id": 383,
        "kanji": "遅",
        "description": "okureru - chi - osoi",
        "meaning": "slow - late - "
    },
    {
        "id": 384,
        "kanji": "贈",
        "description": "okuru - zou - sou",
        "meaning": "gift - present - to present"
    },
    {
        "id": 385,
        "kanji": "幼",
        "description": "osanai - - you",
        "meaning": "childish - young - "
    },
    {
        "id": 386,
        "kanji": "治",
        "description": "ji - chi - naosu",
        "meaning": "rule - govern - cure"
    },
    {
        "id": 387,
        "kanji": "収",
        "description": "shuu - osamaru - ",
        "meaning": "obtain - to store - pay (taxes)"
    },
    {
        "id": 388,
        "kanji": "恐",
        "description": "osoreru - kyou - osoroshii",
        "meaning": "fear - anxiety - fearful"
    },
    {
        "id": 389,
        "kanji": "落",
        "description": "ochiru - raku - otosu",
        "meaning": "fall - to fall - drop"
    },
    {
        "id": 390,
        "kanji": "夫",
        "description": "otto - fu - fuu",
        "meaning": "husband - man - "
    },
    {
        "id": 391,
        "kanji": "訪",
        "description": "otozureru - hou - tazuneru",
        "meaning": "visit - - "
    },
    {
        "id": 392,
        "kanji": "踊",
        "description": "odori - you - odoru",
        "meaning": "dance - to dance - "
    },
    {
        "id": 393,
        "kanji": "各",
        "description": "onoono - kaku - ",
        "meaning": "each - every - "
    },
    {
        "id": 394,
        "kanji": "帯",
        "description": "obi - tai - obiru",
        "meaning": "belt - region - to wear"
    },
    {
        "id": 395,
        "kanji": "覚",
        "description": "oboeru - kaku - ",
        "meaning": "remember - understand - "
    },
    {
        "id": 396,
        "kanji": "面",
        "description": "omo - men - omote",
        "meaning": "face - surface - front"
    },
    {
        "id": 397,
        "kanji": "折",
        "description": "ori - setsu - oru",
        "meaning": "break - fold - "
    },
    {
        "id": 398,
        "kanji": "降",
        "description": "kou - furu - oriru",
        "meaning": "fall - come down - get off"
    },
    {
        "id": 399,
        "kanji": "御",
        "description": "on - gyo - go",
        "meaning": "honorific prefix - - "
    },
    {
        "id": 400,
        "kanji": "香",
        "description": "ka - kou - kaori",
        "meaning": "fragrance - smell - "
    },
    {
        "id": 401,
        "kanji": "科",
        "description": "ka - - ",
        "meaning": "subject of study - - "
    },
    {
        "id": 402,
        "kanji": "化",
        "description": "ka - ke - bakeru",
        "meaning": "change - change into - "
    },
    {
        "id": 403,
        "kanji": "荷",
        "description": "ka - ni - ",
        "meaning": "load - - "
    },
    {
        "id": 404,
        "kanji": "加",
        "description": "ka - kuwaeru - kuwawaru",
        "meaning": "add - - "
    },
    {
        "id": 405,
        "kanji": "果",
        "description": "ka - hatasu - hateru",
        "meaning": "fruit - end - "
    },
    {
        "id": 406,
        "kanji": "貨",
        "description": "ka - - ",
        "meaning": "money - goods - "
    },
    {
        "id": 407,
        "kanji": "課",
        "description": "ka - - ",
        "meaning": "section - lesson - "
    },
    {
        "id": 408,
        "kanji": "可",
        "description": "ka - - ",
        "meaning": "possible - approve - "
    },
    {
        "id": 409,
        "kanji": "河",
        "description": "ka - - kawa",
        "meaning": "river - - "
    },
    {
        "id": 410,
        "kanji": "菓",
        "description": "ka - - ",
        "meaning": "candy - confectionery - "
    },
    {
        "id": 411,
        "kanji": "靴",
        "description": "ka - kutsu - ",
        "meaning": "shoes - - "
    },
    {
        "id": 412,
        "kanji": "貝",
        "description": "kai - - ",
        "meaning": "shell - shellfish - "
    },
    {
        "id": 413,
        "kanji": "階",
        "description": "kai - - ",
        "meaning": "floor (of a building) - rank - "
    },
    {
        "id": 414,
        "kanji": "械",
        "description": "kai - - ",
        "meaning": "machine - - "
    },
    {
        "id": 415,
        "kanji": "快",
        "description": "kai - - kokoroyoi",
        "meaning": "pleasant - - "
    },
    {
        "id": 416,
        "kanji": "解",
        "description": "kai - tokeru - toku",
        "meaning": "explanation - solve - dissolve"
    },
    {
        "id": 417,
        "kanji": "灰",
        "description": "kai - hai - ",
        "meaning": "ashes - - "
    },
    {
        "id": 418,
        "kanji": "介",
        "description": "kai - - ",
        "meaning": "mediate - aid - come between"
    },
    {
        "id": 419,
        "kanji": "皆",
        "description": "kai - mina - ",
        "meaning": "all - everyone - everything"
    },
    {
        "id": 420,
        "kanji": "害",
        "description": "gai - - ",
        "meaning": "harm - calamity - "
    },
    {
        "id": 421,
        "kanji": "交",
        "description": "kau - kou - majiru",
        "meaning": "mix - be mixed - associate"
    },
    {
        "id": 422,
        "kanji": "返",
        "description": "kaesu - hen - kaeru",
        "meaning": "return - - "
    },
    {
        "id": 423,
        "kanji": "省",
        "description": "kaerimiru - sei - shou",
        "meaning": "government department - omit - reflect upon"
    },
    {
        "id": 424,
        "kanji": "変",
        "description": "kaeru - hen - kawaru",
        "meaning": "change - abnormal - strange"
    },
    {
        "id": 425,
        "kanji": "替",
        "description": "kaeru - tai - kawaru",
        "meaning": "replace - - "
    },
    {
        "id": 426,
        "kanji": "換",
        "description": "kaeru - kan - kawaru",
        "meaning": "exchange - - "
    },
    {
        "id": 427,
        "kanji": "係",
        "description": "kakari - kei - kakaru",
        "meaning": "connect - in charge - "
    },
    {
        "id": 428,
        "kanji": "掛",
        "description": "kakari - kakeru - kakaru",
        "meaning": "hang - catch - call"
    },
    {
        "id": 429,
        "kanji": "限",
        "description": "kagiru - gen - ",
        "meaning": "limit - - "
    },
    {
        "id": 430,
        "kanji": "欠",
        "description": "kaku - ketsu - kakeru",
        "meaning": "lack - - "
    },
    {
        "id": 431,
        "kanji": "角",
        "description": "kaku - kado - tsuno",
        "meaning": "angle - corner - horn"
    },
    {
        "id": 432,
        "kanji": "客",
        "description": "kaku - kyaku - ",
        "meaning": "guest - customer - "
    },
    {
        "id": 433,
        "kanji": "格",
        "description": "kaku - kou - ",
        "meaning": "norm - status - "
    },
    {
        "id": 434,
        "kanji": "確",
        "description": "kaku - tashika - tashikameru",
        "meaning": "certain - make certain - "
    },
    {
        "id": 435,
        "kanji": "革",
        "description": "kaku - kawa - ",
        "meaning": "leather - reform - "
    },
    {
        "id": 436,
        "kanji": "額",
        "description": "gaku - hitai - ",
        "meaning": "amount - forehead - "
    },
    {
        "id": 437,
        "kanji": "賢",
        "description": "kashikoi - ken - ",
        "meaning": "wise - clever - smart"
    },
    {
        "id": 438,
        "kanji": "数",
        "description": "kazu - suu - kazoeru",
        "meaning": "count - number - "
    },
    {
        "id": 439,
        "kanji": "形",
        "description": "kata - kei - katachi",
        "meaning": "shape - form - type"
    },
    {
        "id": 440,
        "kanji": "型",
        "description": "kata - kei - ",
        "meaning": "type - - "
    },
    {
        "id": 441,
        "kanji": "片",
        "description": "kata - hen - ",
        "meaning": "fragment - onesided - "
    },
    {
        "id": 442,
        "kanji": "肩",
        "description": "kata - ken - ",
        "meaning": "shoulder - - "
    },
    {
        "id": 443,
        "kanji": "固",
        "description": "katai - ko - katameru",
        "meaning": "solid - firm - hard"
    },
    {
        "id": 444,
        "kanji": "難",
        "description": "katai - nan - muzukashii",
        "meaning": "difficult - hard - disaster"
    },
    {
        "id": 445,
        "kanji": "硬",
        "description": "katai - kou - ",
        "meaning": "hard - - "
    },
    {
        "id": 446,
        "kanji": "堅",
        "description": "katai - ken - ",
        "meaning": "firm - - hard"
    },
    {
        "id": 447,
        "kanji": "傾",
        "description": "katamuku - kei - katamukeru",
        "meaning": "incline - lean - "
    },
    {
        "id": 448,
        "kanji": "勝",
        "description": "katsu - shou - masaru",
        "meaning": "win - excel - "
    },
    {
        "id": 449,
        "kanji": "活",
        "description": "katsu - - ",
        "meaning": "active - live - activity"
    },
    {
        "id": 450,
        "kanji": "割",
        "description": "katsu - waru - saku",
        "meaning": "divide - - "
    },
    {
        "id": 451,
        "kanji": "担",
        "description": "katsugu - tan - ninau",
        "meaning": "bear - undertake - "
    },
    {
        "id": 452,
        "kanji": "門",
        "description": "mon - kado - ",
        "meaning": "gate - - "
    },
    {
        "id": 453,
        "kanji": "悲",
        "description": "kanashii - hi - kanashimu",
        "meaning": "sad - - "
    },
    {
        "id": 454,
        "kanji": "必",
        "description": "kanarazu - hitsu - ",
        "meaning": "without fail - - "
    },
    {
        "id": 455,
        "kanji": "彼",
        "description": "kano - hi - kare",
        "meaning": "he - that - "
    },
    {
        "id": 456,
        "kanji": "構",
        "description": "kamau - kou - kamaeru",
        "meaning": "structure - posture - construct"
    },
    {
        "id": 457,
        "kanji": "神",
        "description": "kami - shin - jin",
        "meaning": "God - god - mind"
    },
    {
        "id": 458,
        "kanji": "髪",
        "description": "kami - hatsu - ",
        "meaning": "hair - - "
    },
    {
        "id": 459,
        "kanji": "辛",
        "description": "karai - shin - ",
        "meaning": "spicy - hot (food) - hard"
    },
    {
        "id": 460,
        "kanji": "枯",
        "description": "karasu - ko - kareru",
        "meaning": "dry - wither - to dry"
    },
    {
        "id": 461,
        "kanji": "絡",
        "description": "karamaru - raku - karamu",
        "meaning": "entwine - to twine around - "
    },
    {
        "id": 462,
        "kanji": "軽",
        "description": "karui - kei - karoyaka",
        "meaning": "light - light (weight) - "
    },
    {
        "id": 463,
        "kanji": "皮",
        "description": "kawa - hi - ",
        "meaning": "skin - - "
    },
    {
        "id": 464,
        "kanji": "側",
        "description": "kawa - soku - ",
        "meaning": "side - - "
    },
    {
        "id": 465,
        "kanji": "乾",
        "description": "kawakasu - kan - kawaku",
        "meaning": "dry - - "
    },
    {
        "id": 466,
        "kanji": "寒",
        "description": "kan - samui - ",
        "meaning": "cold - - "
    },
    {
        "id": 467,
        "kanji": "感",
        "description": "kan - - ",
        "meaning": "feeling - sense - feel"
    },
    {
        "id": 468,
        "kanji": "完",
        "description": "kan - - ",
        "meaning": "complete - perfect - "
    },
    {
        "id": 469,
        "kanji": "官",
        "description": "kan - - ",
        "meaning": "government - - "
    },
    {
        "id": 470,
        "kanji": "管",
        "description": "kan - kuda - ",
        "meaning": "pipe - control - "
    },
    {
        "id": 471,
        "kanji": "関",
        "description": "kan - seki - ",
        "meaning": "concern - barrier - "
    },
    {
        "id": 472,
        "kanji": "観",
        "description": "kan - - ",
        "meaning": "view - - "
    },
    {
        "id": 473,
        "kanji": "刊",
        "description": "kan - - ",
        "meaning": "publish - - "
    },
    {
        "id": 474,
        "kanji": "慣",
        "description": "kan - nareru - narasu",
        "meaning": "habit - custom - get used to"
    },
    {
        "id": 475,
        "kanji": "干",
        "description": "kan - hosu - hiru",
        "meaning": "dry - - "
    },
    {
        "id": 476,
        "kanji": "巻",
        "description": "kan - maku - maki",
        "meaning": "roll up - volume - roll"
    },
    {
        "id": 477,
        "kanji": "簡",
        "description": "kan - - ",
        "meaning": "simple - - "
    },
    {
        "id": 478,
        "kanji": "缶",
        "description": "kan - - ",
        "meaning": "can - canned (food, drink) - "
    },
    {
        "id": 479,
        "kanji": "患",
        "description": "kan - wazurau - ",
        "meaning": "sickness - sick - "
    },
    {
        "id": 480,
        "kanji": "丸",
        "description": "gan - maru - marui",
        "meaning": "round - - "
    },
    {
        "id": 481,
        "kanji": "岸",
        "description": "gan - kishi - ",
        "meaning": "shore - seashore - "
    },
    {
        "id": 482,
        "kanji": "願",
        "description": "gan - negau - ",
        "meaning": "wish - ask a favor - desire"
    },
    {
        "id": 483,
        "kanji": "含",
        "description": "gan - fukumu - fukumeru",
        "meaning": "contain - include - "
    },
    {
        "id": 484,
        "kanji": "記",
        "description": "ki - shirushu - ",
        "meaning": "write down - record - "
    },
    {
        "id": 485,
        "kanji": "期",
        "description": "ki - go - ",
        "meaning": "term - expect - "
    },
    {
        "id": 486,
        "kanji": "希",
        "description": "ki - - ",
        "meaning": "rare - aspire - desire"
    },
    {
        "id": 487,
        "kanji": "季",
        "description": "ki - - ",
        "meaning": "season - season (of the year) - "
    },
    {
        "id": 488,
        "kanji": "喜",
        "description": "ki - yorokobu - ",
        "meaning": "joy - happy - "
    },
    {
        "id": 489,
        "kanji": "機",
        "description": "ki - hata - ",
        "meaning": "machine - occation - "
    },
    {
        "id": 490,
        "kanji": "規",
        "description": "ki - - ",
        "meaning": "rule - regulation - "
    },
    {
        "id": 491,
        "kanji": "寄",
        "description": "ki - yoru - yoseru",
        "meaning": "approach - gather - contribute"
    },
    {
        "id": 492,
        "kanji": "机",
        "description": "ki - tsukue - ",
        "meaning": "desk - - "
    },
    {
        "id": 493,
        "kanji": "議",
        "description": "gi - - ",
        "meaning": "discuss - debate - "
    },
    {
        "id": 494,
        "kanji": "技",
        "description": "gi - waza - ",
        "meaning": "skill - - "
    },
    {
        "id": 495,
        "kanji": "消",
        "description": "kieru - shou - kesu",
        "meaning": "extinguish - put out - spend"
    },
    {
        "id": 496,
        "kanji": "利",
        "description": "kiku - ri - ",
        "meaning": "advantage - profit - "
    },
    {
        "id": 497,
        "kanji": "効",
        "description": "kiku - kou - ",
        "meaning": "effect - efficancy - "
    },
    {
        "id": 498,
        "kanji": "兆",
        "description": "kizashi - chou - kizasu",
        "meaning": "trillion - sign - symptom"
    },
    {
        "id": 499,
        "kanji": "刻",
        "description": "kizamu - koku - ",
        "meaning": "engrave - carve - "
    },
    {
        "id": 500,
        "kanji": "築",
        "description": "kizuku - chiku - ",
        "meaning": "build - construct - construction"
    },
    {
        "id": 501,
        "kanji": "競",
        "description": "kisou - kyou - kei",
        "meaning": "compete (in a race) - - "
    },
    {
        "id": 502,
        "kanji": "喫",
        "description": "kitsu - - ",
        "meaning": "inhale - drink - "
    },
    {
        "id": 503,
        "kanji": "詰",
        "description": "kitsu - tsumaru - tsumeru",
        "meaning": "cram - shorten - "
    },
    {
        "id": 504,
        "kanji": "決",
        "description": "kimeru - ketsu - kimaru",
        "meaning": "decide - be decided - "
    },
    {
        "id": 505,
        "kanji": "君",
        "description": "kimi - kun - ",
        "meaning": "you - ruler - added to names of boys"
    },
    {
        "id": 506,
        "kanji": "逆",
        "description": "gyaku - sakarau - saka",
        "meaning": "reverse - opposite - "
    },
    {
        "id": 507,
        "kanji": "級",
        "description": "kyuu - - ",
        "meaning": "grade - level - "
    },
    {
        "id": 508,
        "kanji": "球",
        "description": "kyuu - tama - ",
        "meaning": "ball - - "
    },
    {
        "id": 509,
        "kanji": "求",
        "description": "kyuu - motomeru - ",
        "meaning": "seek - search - "
    },
    {
        "id": 510,
        "kanji": "泣",
        "description": "kyuu - naku - ",
        "meaning": "cry - - "
    },
    {
        "id": 511,
        "kanji": "救",
        "description": "kyuu - sukuu - ",
        "meaning": "rescue - save - "
    },
    {
        "id": 512,
        "kanji": "給",
        "description": "kyuu - - ",
        "meaning": "supply - pay - "
    },
    {
        "id": 513,
        "kanji": "久",
        "description": "kyuu - ku - hisashii",
        "meaning": "long time - - "
    },
    {
        "id": 514,
        "kanji": "旧",
        "description": "kyuu - - ",
        "meaning": "old - former - "
    },
    {
        "id": 515,
        "kanji": "吸",
        "description": "kyuu - suu - ",
        "meaning": "suck - breathe in - "
    },
    {
        "id": 516,
        "kanji": "許",
        "description": "kyo - yurusu - ",
        "meaning": "permit - pardon - forgive"
    },
    {
        "id": 517,
        "kanji": "漁",
        "description": "gyo - ryou - ",
        "meaning": "fish - - "
    },
    {
        "id": 518,
        "kanji": "清",
        "description": "kiyoi - sei - kyomeru",
        "meaning": "clean - clear - pure"
    },
    {
        "id": 519,
        "kanji": "橋",
        "description": "kyou - hashi - ",
        "meaning": "bridge - - "
    },
    {
        "id": 520,
        "kanji": "共",
        "description": "kyou - tomo - ",
        "meaning": "together - - "
    },
    {
        "id": 521,
        "kanji": "協",
        "description": "kyou - - ",
        "meaning": "cooperate - - "
    },
    {
        "id": 522,
        "kanji": "経",
        "description": "kyou - heru - kei",
        "meaning": "manage - passage - circles of longitude"
    },
    {
        "id": 523,
        "kanji": "境",
        "description": "kyou - kei - sakai",
        "meaning": "boundary - border line - "
    },
    {
        "id": 524,
        "kanji": "供",
        "description": "kyou - tomo - sonaeru",
        "meaning": "attendant - offer - "
    },
    {
        "id": 525,
        "kanji": "胸",
        "description": "kyou - mune - muna",
        "meaning": "chest - chest (body part) - "
    },
    {
        "id": 526,
        "kanji": "叫",
        "description": "kyou - sakebu - ",
        "meaning": "shout - - "
    },
    {
        "id": 527,
        "kanji": "況",
        "description": "kyou - - ",
        "meaning": "condition - state of things - "
    },
    {
        "id": 528,
        "kanji": "狭",
        "description": "kyou - semai - sebameru",
        "meaning": "narrow - - "
    },
    {
        "id": 529,
        "kanji": "挟",
        "description": "kyou - hasamu - hasamaru",
        "meaning": "hold between - clasp - "
    },
    {
        "id": 530,
        "kanji": "曲",
        "description": "kyoku - magaru - mageru",
        "meaning": "music - song - curve"
    },
    {
        "id": 531,
        "kanji": "局",
        "description": "kyoku - - ",
        "meaning": "bureau - segment - "
    },
    {
        "id": 532,
        "kanji": "極",
        "description": "kyoku - goku - kiwameru",
        "meaning": "extreme - poles (north or south) - "
    },
    {
        "id": 533,
        "kanji": "玉",
        "description": "gyoku - tama - ",
        "meaning": "gem - jewel - "
    },
    {
        "id": 534,
        "kanji": "際",
        "description": "kiwa - sai - ",
        "meaning": "verge - occation - "
    },
    {
        "id": 535,
        "kanji": "均",
        "description": "kin - - ",
        "meaning": "even - level - "
    },
    {
        "id": 536,
        "kanji": "禁",
        "description": "kin - - ",
        "meaning": "prohibit - not allowed - "
    },
    {
        "id": 537,
        "kanji": "勤",
        "description": "kin - gon - tsutomeru",
        "meaning": "service - - "
    },
    {
        "id": 538,
        "kanji": "区",
        "description": "ku - - ",
        "meaning": "district - ward - "
    },
    {
        "id": 539,
        "kanji": "苦",
        "description": "ku - kurushii - nigai",
        "meaning": "suffering - bitter - painful"
    },
    {
        "id": 540,
        "kanji": "庫",
        "description": "ku - ko - ",
        "meaning": "storehouse - warehouse - "
    },
    {
        "id": 541,
        "kanji": "紅",
        "description": "ku - kou - beni",
        "meaning": "crimson - - "
    },
    {
        "id": 542,
        "kanji": "具",
        "description": "gu - - ",
        "meaning": "tool - utensil - ingredient"
    },
    {
        "id": 543,
        "kanji": "偶",
        "description": "guu - - ",
        "meaning": "chance - even numbers - by chance"
    },
    {
        "id": 544,
        "kanji": "隅",
        "description": "guu - sumi - ",
        "meaning": "nook - corner - "
    },
    {
        "id": 545,
        "kanji": "草",
        "description": "kusa - sou - ",
        "meaning": "grass - - "
    },
    {
        "id": 546,
        "kanji": "薬",
        "description": "kusuri - yaku - ",
        "meaning": "medicine - drug - "
    },
    {
        "id": 547,
        "kanji": "掘",
        "description": "kutsu - horu - ",
        "meaning": "dig - - "
    },
    {
        "id": 548,
        "kanji": "配",
        "description": "kubaru - hai - ",
        "meaning": "distribute - deliver - "
    },
    {
        "id": 549,
        "kanji": "首",
        "description": "kubi - shu - ",
        "meaning": "head - neck - "
    },
    {
        "id": 550,
        "kanji": "組",
        "description": "kumi - so - kumu",
        "meaning": "organize - assemble - "
    },
    {
        "id": 551,
        "kanji": "曇",
        "description": "kumoru - don - ",
        "meaning": "cloudy - - "
    },
    {
        "id": 552,
        "kanji": "蔵",
        "description": "kura - zou - ",
        "meaning": "store - warehouse - own"
    },
    {
        "id": 553,
        "kanji": "暮",
        "description": "kurasu - bo - kureru",
        "meaning": "dusk - grow dark - live"
    },
    {
        "id": 554,
        "kanji": "比",
        "description": "kuraberu - hi - ",
        "meaning": "compare - - "
    },
    {
        "id": 555,
        "kanji": "訓",
        "description": "kun - - ",
        "meaning": "instruct - - "
    },
    {
        "id": 556,
        "kanji": "軍",
        "description": "gun - - ",
        "meaning": "army - military - "
    },
    {
        "id": 557,
        "kanji": "群",
        "description": "gun - mureru - mure",
        "meaning": "group - crowd - "
    },
    {
        "id": 558,
        "kanji": "毛",
        "description": "ke - mou - ",
        "meaning": "hair - - "
    },
    {
        "id": 559,
        "kanji": "景",
        "description": "kei - - ",
        "meaning": "scene - - "
    },
    {
        "id": 560,
        "kanji": "警",
        "description": "kei - - ",
        "meaning": "guard - warn - "
    },
    {
        "id": 561,
        "kanji": "芸",
        "description": "gei - - ",
        "meaning": "art - skill - "
    },
    {
        "id": 562,
        "kanji": "迎",
        "description": "gei - mukaeru - ",
        "meaning": "meet - welcome - "
    },
    {
        "id": 563,
        "kanji": "劇",
        "description": "geki - - ",
        "meaning": "drama - - "
    },
    {
        "id": 564,
        "kanji": "血",
        "description": "ketsu - chi - ",
        "meaning": "blood - - "
    },
    {
        "id": 565,
        "kanji": "結",
        "description": "ketsu - musubu - yuu",
        "meaning": "tie - conclude - "
    },
    {
        "id": 566,
        "kanji": "険",
        "description": "kewashii - ken - ",
        "meaning": "danger - steep - "
    },
    {
        "id": 567,
        "kanji": "県",
        "description": "ken - - ",
        "meaning": "prefecture - - "
    },
    {
        "id": 568,
        "kanji": "件",
        "description": "ken - - ",
        "meaning": "matter - - "
    },
    {
        "id": 569,
        "kanji": "券",
        "description": "ken - - ",
        "meaning": "ticket - certificate - coupon"
    },
    {
        "id": 570,
        "kanji": "検",
        "description": "ken - - ",
        "meaning": "examine - - "
    },
    {
        "id": 571,
        "kanji": "権",
        "description": "ken - - ",
        "meaning": "right - power - "
    },
    {
        "id": 572,
        "kanji": "軒",
        "description": "ken - noki - ",
        "meaning": "eaves - - "
    },
    {
        "id": 573,
        "kanji": "原",
        "description": "gen - hara - ",
        "meaning": "original - plain - "
    },
    {
        "id": 574,
        "kanji": "減",
        "description": "gen - heru - herasu",
        "meaning": "decrease - - "
    },
    {
        "id": 575,
        "kanji": "粉",
        "description": "ko - fun - kona",
        "meaning": "powder - - "
    },
    {
        "id": 576,
        "kanji": "戸",
        "description": "ko - to - ",
        "meaning": "door - - "
    },
    {
        "id": 577,
        "kanji": "湖",
        "description": "ko - mizuumi - ",
        "meaning": "lake - - "
    },
    {
        "id": 578,
        "kanji": "個",
        "description": "ko - - ",
        "meaning": "individual - - "
    },
    {
        "id": 579,
        "kanji": "呼",
        "description": "ko - yobu - ",
        "meaning": "call - - "
    },
    {
        "id": 580,
        "kanji": "雇",
        "description": "ko - yatou - ",
        "meaning": "employ - hire - "
    },
    {
        "id": 581,
        "kanji": "互",
        "description": "go - tagai - ",
        "meaning": "reciprocal - mutual - each other"
    },
    {
        "id": 582,
        "kanji": "恋",
        "description": "koi - ren - koishii",
        "meaning": "love - - "
    },
    {
        "id": 583,
        "kanji": "濃",
        "description": "koi - nou - ",
        "meaning": "thick - - "
    },
    {
        "id": 584,
        "kanji": "光",
        "description": "kou - hikaru - hikari",
        "meaning": "light - - "
    },
    {
        "id": 585,
        "kanji": "向",
        "description": "kou - muku - mukou",
        "meaning": "turn toward - turn - "
    },
    {
        "id": 586,
        "kanji": "幸",
        "description": "kou - saiwai - shiawase",
        "meaning": "happy - happiness - "
    },
    {
        "id": 587,
        "kanji": "港",
        "description": "kou - minato - ",
        "meaning": "port - harbor - "
    },
    {
        "id": 588,
        "kanji": "好",
        "description": "kou - konomu - suku",
        "meaning": "like - favorable - "
    },
    {
        "id": 589,
        "kanji": "航",
        "description": "kou - - ",
        "meaning": "navigate - - "
    },
    {
        "id": 590,
        "kanji": "候",
        "description": "kou - sourou - ",
        "meaning": "season - serve - "
    },
    {
        "id": 591,
        "kanji": "耕",
        "description": "kou - tagayasu - ",
        "meaning": "till - plow - cultivate"
    },
    {
        "id": 592,
        "kanji": "鉱",
        "description": "kou - - ",
        "meaning": "ore - mine - "
    },
    {
        "id": 593,
        "kanji": "講",
        "description": "kou - - ",
        "meaning": "lecture - - "
    },
    {
        "id": 594,
        "kanji": "更",
        "description": "kou - sara - fukeru",
        "meaning": "retextframe - change - reform"
    },
    {
        "id": 595,
        "kanji": "肯",
        "description": "kou - - ",
        "meaning": "assent - consent - "
    },
    {
        "id": 596,
        "kanji": "郊",
        "description": "kou - - ",
        "meaning": "suburb - - "
    },
    {
        "id": 597,
        "kanji": "号",
        "description": "gou - - ",
        "meaning": "number - signal - sign"
    },
    {
        "id": 598,
        "kanji": "被",
        "description": "koumuru - hi - kaburu",
        "meaning": "wear (hat) - suffer (damage) - "
    },
    {
        "id": 599,
        "kanji": "声",
        "description": "koe - sei - kowa",
        "meaning": "voice - - "
    },
    {
        "id": 600,
        "kanji": "超",
        "description": "koeru - chou - kosu",
        "meaning": "surpass - very - super"
    },
    {
        "id": 601,
        "kanji": "氷",
        "description": "koori - hyou - hi",
        "meaning": "ice - - "
    },
    {
        "id": 602,
        "kanji": "凍",
        "description": "kooru - tou - kogoeru",
        "meaning": "freeze - - "
    },
    {
        "id": 603,
        "kanji": "谷",
        "description": "koku - tani - ",
        "meaning": "valley - - "
    },
    {
        "id": 604,
        "kanji": "告",
        "description": "koku - tsugeru - ",
        "meaning": "notify - - "
    },
    {
        "id": 605,
        "kanji": "腰",
        "description": "koshi - you - ",
        "meaning": "waist - hip - "
    },
    {
        "id": 606,
        "kanji": "骨",
        "description": "kotsu - hone - ",
        "meaning": "bone - - "
    },
    {
        "id": 607,
        "kanji": "断",
        "description": "kotowaru - dan - tatsu",
        "meaning": "resolve - cut off - "
    },
    {
        "id": 608,
        "kanji": "細",
        "description": "komakai - sai - hosoi",
        "meaning": "small - slender - thin"
    },
    {
        "id": 609,
        "kanji": "困",
        "description": "komaru - kon - ",
        "meaning": "trouble - be in trouble - "
    },
    {
        "id": 610,
        "kanji": "込",
        "description": "komu - komeru - ",
        "meaning": "crowded - into - "
    },
    {
        "id": 611,
        "kanji": "米",
        "description": "kome - bei - mai",
        "meaning": "rice - america - "
    },
    {
        "id": 612,
        "kanji": "殺",
        "description": "korosu - satsu - sai",
        "meaning": "kill - - "
    },
    {
        "id": 613,
        "kanji": "怖",
        "description": "kowai - fu - ",
        "meaning": "fear - fearful - scared"
    },
    {
        "id": 614,
        "kanji": "根",
        "description": "kon - ne - ",
        "meaning": "root - - "
    },
    {
        "id": 615,
        "kanji": "混",
        "description": "kon - majiru - mazaru",
        "meaning": "mix - blend - associate with"
    },
    {
        "id": 616,
        "kanji": "婚",
        "description": "kon - - ",
        "meaning": "marry - marriage - "
    },
    {
        "id": 617,
        "kanji": "差",
        "description": "sa - sasu - ",
        "meaning": "difference - - "
    },
    {
        "id": 618,
        "kanji": "査",
        "description": "sa - - ",
        "meaning": "look into - investigate - "
    },
    {
        "id": 619,
        "kanji": "砂",
        "description": "sa - sha - suna",
        "meaning": "sand - - "
    },
    {
        "id": 620,
        "kanji": "再",
        "description": "sa - sai - futatabi",
        "meaning": "repeat - again - another time"
    },
    {
        "id": 621,
        "kanji": "座",
        "description": "za - suwaru - ",
        "meaning": "seat - sit down - constellation"
    },
    {
        "id": 622,
        "kanji": "才",
        "description": "sai - - ",
        "meaning": "talent - age - "
    },
    {
        "id": 623,
        "kanji": "祭",
        "description": "sai - matsuri - matsuru",
        "meaning": "festival - - "
    },
    {
        "id": 624,
        "kanji": "菜",
        "description": "sai - na - ",
        "meaning": "vegetable - - "
    },
    {
        "id": 625,
        "kanji": "最",
        "description": "sai - mottomo - ",
        "meaning": "most - -est - "
    },
    {
        "id": 626,
        "kanji": "妻",
        "description": "sai - tsuma - ",
        "meaning": "wife - - "
    },
    {
        "id": 627,
        "kanji": "採",
        "description": "sai - toru - ",
        "meaning": "pick - gather - "
    },
    {
        "id": 628,
        "kanji": "済",
        "description": "sai - sumu - sumasu",
        "meaning": "settle - relieve - "
    },
    {
        "id": 629,
        "kanji": "歳",
        "description": "sai - sei - ",
        "meaning": "year - age - age suffix"
    },
    {
        "id": 630,
        "kanji": "財",
        "description": "sai - zai - ",
        "meaning": "wealth - - "
    },
    {
        "id": 631,
        "kanji": "材",
        "description": "zai - - ",
        "meaning": "timber - materials - "
    },
    {
        "id": 632,
        "kanji": "罪",
        "description": "zai - tsumi - ",
        "meaning": "sin - crime - "
    },
    {
        "id": 633,
        "kanji": "坂",
        "description": "saka - han - ",
        "meaning": "slope - - "
    },
    {
        "id": 634,
        "kanji": "酒",
        "description": "sake - shu - ",
        "meaning": "sake - alcohol - "
    },
    {
        "id": 635,
        "kanji": "探",
        "description": "sagasu - tan - saguru",
        "meaning": "probe - search - "
    },
    {
        "id": 636,
        "kanji": "捜",
        "description": "sagasu - sou - ",
        "meaning": "look for - search - "
    },
    {
        "id": 637,
        "kanji": "杯",
        "description": "sakazuki - hai - ",
        "meaning": "cup - counter for cups - "
    },
    {
        "id": 638,
        "kanji": "咲",
        "description": "saku - - ",
        "meaning": "bloom - come out - "
    },
    {
        "id": 639,
        "kanji": "昨",
        "description": "saku - - ",
        "meaning": "yesterday - last... - "
    },
    {
        "id": 640,
        "kanji": "冊",
        "description": "saku - satsu - ",
        "meaning": "card - volume - counter for books"
    },
    {
        "id": 641,
        "kanji": "支",
        "description": "sasaeru - shi - ",
        "meaning": "support - branch - "
    },
    {
        "id": 642,
        "kanji": "刺",
        "description": "sasaru - shi - sasu",
        "meaning": "stab - stab (with a knife) - "
    },
    {
        "id": 643,
        "kanji": "指",
        "description": "sasu - shi - yubi",
        "meaning": "point - finger - "
    },
    {
        "id": 644,
        "kanji": "定",
        "description": "sadaka - tei - jou",
        "meaning": "fix - decide - establish"
    },
    {
        "id": 645,
        "kanji": "札",
        "description": "satsu - fuda - ",
        "meaning": "bill - paper money - tag"
    },
    {
        "id": 646,
        "kanji": "刷",
        "description": "satsu - suru - ",
        "meaning": "print - - "
    },
    {
        "id": 647,
        "kanji": "察",
        "description": "satsu - - ",
        "meaning": "inspect - guess - "
    },
    {
        "id": 648,
        "kanji": "雑",
        "description": "zatsu - zou - ",
        "meaning": "mixed - rough - "
    },
    {
        "id": 649,
        "kanji": "様",
        "description": "sama - you - ",
        "meaning": "mode - formal title - Mr. / Mrs."
    },
    {
        "id": 650,
        "kanji": "冷",
        "description": "samasu - rei - tsumetai",
        "meaning": "cold - - "
    },
    {
        "id": 651,
        "kanji": "皿",
        "description": "sara - - ",
        "meaning": "plate - dish - "
    },
    {
        "id": 652,
        "kanji": "触",
        "description": "sawaru - shoku - fureru",
        "meaning": "touch - feel - "
    },
    {
        "id": 653,
        "kanji": "算",
        "description": "san - - ",
        "meaning": "calculate - - "
    },
    {
        "id": 654,
        "kanji": "参",
        "description": "san - mairu - ",
        "meaning": "attend - - "
    },
    {
        "id": 655,
        "kanji": "散",
        "description": "san - chiru - chirakasu",
        "meaning": "scatter - - "
    },
    {
        "id": 656,
        "kanji": "賛",
        "description": "san - - ",
        "meaning": "approve - praise - "
    },
    {
        "id": 657,
        "kanji": "残",
        "description": "zan - nokoru - nokosu",
        "meaning": "remain - ruthless - "
    },
    {
        "id": 658,
        "kanji": "次",
        "description": "shi - ji - tsugi",
        "meaning": "next - - "
    },
    {
        "id": 659,
        "kanji": "歯",
        "description": "shi - ha - ",
        "meaning": "tooth - - "
    },
    {
        "id": 660,
        "kanji": "史",
        "description": "shi - - ",
        "meaning": "history - - "
    },
    {
        "id": 661,
        "kanji": "示",
        "description": "shi - ji - shimesu",
        "meaning": "show - to show - "
    },
    {
        "id": 662,
        "kanji": "師",
        "description": "shi - - ",
        "meaning": "master - teacher - "
    },
    {
        "id": 663,
        "kanji": "資",
        "description": "shi - - ",
        "meaning": "resource - - "
    },
    {
        "id": 664,
        "kanji": "詞",
        "description": "shi - - ",
        "meaning": "words - - "
    },
    {
        "id": 665,
        "kanji": "誌",
        "description": "shi - - ",
        "meaning": "magazine - - "
    },
    {
        "id": 666,
        "kanji": "路",
        "description": "ji - ro - ",
        "meaning": "road - - "
    },
    {
        "id": 667,
        "kanji": "耳",
        "description": "ji - mimi - ",
        "meaning": "ear - - "
    },
    {
        "id": 668,
        "kanji": "寺",
        "description": "ji - tera - ",
        "meaning": "buddhist temple - - "
    },
    {
        "id": 669,
        "kanji": "児",
        "description": "ji - ni - ",
        "meaning": "child - - "
    },
    {
        "id": 670,
        "kanji": "辞",
        "description": "ji - yameru - ",
        "meaning": "word - resign - retire"
    },
    {
        "id": 671,
        "kanji": "似",
        "description": "ji - niru - ",
        "meaning": "look like - resemble - "
    },
    {
        "id": 672,
        "kanji": "除",
        "description": "ji - jo - nozoku",
        "meaning": "remove - - "
    },
    {
        "id": 673,
        "kanji": "式",
        "description": "shiki - - ",
        "meaning": "ceremony - style - "
    },
    {
        "id": 674,
        "kanji": "識",
        "description": "shiki - - ",
        "meaning": "know - - "
    },
    {
        "id": 675,
        "kanji": "直",
        "description": "jiki - choku - naosu",
        "meaning": "straight - fix - "
    },
    {
        "id": 676,
        "kanji": "静",
        "description": "shizuka - sei - jou",
        "meaning": "quiet - - "
    },
    {
        "id": 677,
        "kanji": "滴",
        "description": "shizuku - teki - shitataru",
        "meaning": "drop - drop (of liquid) - trickle"
    },
    {
        "id": 678,
        "kanji": "沈",
        "description": "shizumu - chin - shizumeru",
        "meaning": "sink - to sink - "
    },
    {
        "id": 679,
        "kanji": "湿",
        "description": "shimeru - shimesu - ",
        "meaning": "damp - - "
    },
    {
        "id": 680,
        "kanji": "実",
        "description": "jitsu - mi - minoru",
        "meaning": "real - truth - fruit"
    },
    {
        "id": 681,
        "kanji": "島",
        "description": "shima - tou - ",
        "meaning": "island - - "
    },
    {
        "id": 682,
        "kanji": "閉",
        "description": "shimeru - tojiru - hei",
        "meaning": "close - - "
    },
    {
        "id": 683,
        "kanji": "捨",
        "description": "sha - suteru - ",
        "meaning": "throw away - discard - "
    },
    {
        "id": 684,
        "kanji": "昔",
        "description": "shaku - seki - mukashi",
        "meaning": "old - long ago - former"
    },
    {
        "id": 685,
        "kanji": "弱",
        "description": "jaku - yowai - ",
        "meaning": "weak - weakness - "
    },
    {
        "id": 686,
        "kanji": "若",
        "description": "jaku - wakai - ",
        "meaning": "young - - "
    },
    {
        "id": 687,
        "kanji": "守",
        "description": "shu - mamoru - mori",
        "meaning": "protect - obey - guard"
    },
    {
        "id": 688,
        "kanji": "取",
        "description": "shu - toru - ",
        "meaning": "take - - "
    },
    {
        "id": 689,
        "kanji": "種",
        "description": "shu - tane - ",
        "meaning": "seed - variety - "
    },
    {
        "id": 690,
        "kanji": "州",
        "description": "shuu - su - ",
        "meaning": "state - - "
    },
    {
        "id": 691,
        "kanji": "拾",
        "description": "shuu - juu - hirou",
        "meaning": "pick up - - "
    },
    {
        "id": 692,
        "kanji": "周",
        "description": "shuu - mawari - ",
        "meaning": "around - surrounding area - "
    },
    {
        "id": 693,
        "kanji": "船",
        "description": "shuu - fune - funa",
        "meaning": "boat - small boat - "
    },
    {
        "id": 694,
        "kanji": "柔",
        "description": "juu - nyuu - yawarakai",
        "meaning": "soft - soft (to the touch) - "
    },
    {
        "id": 695,
        "kanji": "宿",
        "description": "shuku - yado - yadoru",
        "meaning": "stay - lodge - inn"
    },
    {
        "id": 696,
        "kanji": "述",
        "description": "jutsu - noberu - ",
        "meaning": "speak - state - "
    },
    {
        "id": 697,
        "kanji": "術",
        "description": "jutsu - - ",
        "meaning": "art - - "
    },
    {
        "id": 698,
        "kanji": "順",
        "description": "jun - - ",
        "meaning": "order - turn - obey"
    },
    {
        "id": 699,
        "kanji": "準",
        "description": "jun - - ",
        "meaning": "standard - rule - semi"
    },
    {
        "id": 700,
        "kanji": "純",
        "description": "jun - - ",
        "meaning": "pure - purity - "
    },
    {
        "id": 701,
        "kanji": "所",
        "description": "sho - tokoro - ",
        "meaning": "place - area - "
    },
    {
        "id": 702,
        "kanji": "処",
        "description": "sho - - ",
        "meaning": "deal with - manage - "
    },
    {
        "id": 703,
        "kanji": "署",
        "description": "sho - - ",
        "meaning": "government office - - "
    },
    {
        "id": 704,
        "kanji": "諸",
        "description": "sho - - ",
        "meaning": "many - - "
    },
    {
        "id": 705,
        "kanji": "助",
        "description": "jo - tasukeru - tasukaru",
        "meaning": "help - - "
    },
    {
        "id": 706,
        "kanji": "章",
        "description": "shou - - ",
        "meaning": "chapter - - "
    },
    {
        "id": 707,
        "kanji": "焼",
        "description": "shou - yaku - yakeru",
        "meaning": "burn - - "
    },
    {
        "id": 708,
        "kanji": "象",
        "description": "shou - zou - ",
        "meaning": "image - elephant - "
    },
    {
        "id": 709,
        "kanji": "照",
        "description": "shou - teru - tereru",
        "meaning": "illuminate - - "
    },
    {
        "id": 710,
        "kanji": "賞",
        "description": "shou - - ",
        "meaning": "prize - award - "
    },
    {
        "id": 711,
        "kanji": "招",
        "description": "shou - maneku - ",
        "meaning": "invite - - "
    },
    {
        "id": 712,
        "kanji": "性",
        "description": "shou - sei - ",
        "meaning": "nature - gender - "
    },
    {
        "id": 713,
        "kanji": "将",
        "description": "shou - - ",
        "meaning": "general officer - general - "
    },
    {
        "id": 714,
        "kanji": "装",
        "description": "shou - sou - yosoou",
        "meaning": "dress - decoration - adorn"
    },
    {
        "id": 715,
        "kanji": "召",
        "description": "shou - mesu - ",
        "meaning": "summon - - "
    },
    {
        "id": 716,
        "kanji": "床",
        "description": "shou - toko - yuka",
        "meaning": "floor - - "
    },
    {
        "id": 717,
        "kanji": "姓",
        "description": "shou - sei - ",
        "meaning": "surname - family name - "
    },
    {
        "id": 718,
        "kanji": "昇",
        "description": "shou - noboru - ",
        "meaning": "ascend - go up - rise"
    },
    {
        "id": 719,
        "kanji": "紹",
        "description": "shou - - ",
        "meaning": "intoduce - - "
    },
    {
        "id": 720,
        "kanji": "星",
        "description": "shou - sei - hoshi",
        "meaning": "star - - "
    },
    {
        "id": 721,
        "kanji": "政",
        "description": "shou - sei - matsurigoto",
        "meaning": "politics - rule - "
    },
    {
        "id": 722,
        "kanji": "精",
        "description": "shou - sei - ",
        "meaning": "refine - essence - "
    },
    {
        "id": 723,
        "kanji": "乗",
        "description": "jou - noru - noseru",
        "meaning": "ride - get on - "
    },
    {
        "id": 724,
        "kanji": "状",
        "description": "jou - - ",
        "meaning": "form - letter - "
    },
    {
        "id": 725,
        "kanji": "常",
        "description": "jou - tsune - toko",
        "meaning": "normal - regular - "
    },
    {
        "id": 726,
        "kanji": "情",
        "description": "jou - sei - nasake",
        "meaning": "condition - emotion - "
    },
    {
        "id": 727,
        "kanji": "城",
        "description": "jou - shiro - ",
        "meaning": "castle - - "
    },
    {
        "id": 728,
        "kanji": "蒸",
        "description": "jou - musu - mureru",
        "meaning": "evaporate - steam - "
    },
    {
        "id": 729,
        "kanji": "畳",
        "description": "jou - tatami - tatamu",
        "meaning": "tatami - fold up - fold"
    },
    {
        "id": 730,
        "kanji": "成",
        "description": "jou - sei - naru",
        "meaning": "become - form - achieve"
    },
    {
        "id": 731,
        "kanji": "職",
        "description": "shoku - - ",
        "meaning": "employment - job - "
    },
    {
        "id": 732,
        "kanji": "調",
        "description": "shiraberu - chou - totonou",
        "meaning": "look up - research - tone"
    },
    {
        "id": 733,
        "kanji": "退",
        "description": "shirizoku - tai - shirizokeru",
        "meaning": "retreat - - "
    },
    {
        "id": 734,
        "kanji": "森",
        "description": "shin - mori - ",
        "meaning": "forest - - "
    },
    {
        "id": 735,
        "kanji": "申",
        "description": "shin - mousu - ",
        "meaning": "report - call - "
    },
    {
        "id": 736,
        "kanji": "身",
        "description": "shin - mi - ",
        "meaning": "body - self - "
    },
    {
        "id": 737,
        "kanji": "深",
        "description": "shin - fukai - fukameru",
        "meaning": "deep - - "
    },
    {
        "id": 738,
        "kanji": "進",
        "description": "shin - susumu - susumeru",
        "meaning": "advance - move forward - "
    },
    {
        "id": 739,
        "kanji": "臣",
        "description": "shin - jin - ",
        "meaning": "subject - retainer - "
    },
    {
        "id": 740,
        "kanji": "信",
        "description": "shin - - ",
        "meaning": "believe - message - "
    },
    {
        "id": 741,
        "kanji": "針",
        "description": "shin - hari - ",
        "meaning": "needle - - "
    },
    {
        "id": 742,
        "kanji": "伸",
        "description": "shin - nobiru - nobosu",
        "meaning": "stretch - - "
    },
    {
        "id": 743,
        "kanji": "寝",
        "description": "shin - neru - nekasu",
        "meaning": "sleep - go to sleep - "
    },
    {
        "id": 744,
        "kanji": "震",
        "description": "shin - furuu - furueru",
        "meaning": "shake - quake - "
    },
    {
        "id": 745,
        "kanji": "吹",
        "description": "sui - fuku - ",
        "meaning": "blow - - "
    },
    {
        "id": 746,
        "kanji": "末",
        "description": "sue - matsu - batsu",
        "meaning": "last part - end - "
    },
    {
        "id": 747,
        "kanji": "優",
        "description": "sugureru - you - yasashii",
        "meaning": "gentle - kind - nice"
    },
    {
        "id": 748,
        "kanji": "涼",
        "description": "suzushii - ryou - suzumu",
        "meaning": "cool - cool (temp) - "
    },
    {
        "id": 749,
        "kanji": "炭",
        "description": "sumi - tan - ",
        "meaning": "coal - charcoal - "
    },
    {
        "id": 750,
        "kanji": "速",
        "description": "sumiyaka - soku - hayai",
        "meaning": "fast - quick - "
    },
    {
        "id": 751,
        "kanji": "背",
        "description": "se - hai - somuku",
        "meaning": "back - back (body part) - "
    },
    {
        "id": 752,
        "kanji": "晴",
        "description": "sei - hareru - harasu",
        "meaning": "fine weather - sunny - "
    },
    {
        "id": 753,
        "kanji": "制",
        "description": "sei - - ",
        "meaning": "system - control - "
    },
    {
        "id": 754,
        "kanji": "製",
        "description": "sei - - ",
        "meaning": "manufactured - made in - "
    },
    {
        "id": 755,
        "kanji": "税",
        "description": "zei - - ",
        "meaning": "tax - - "
    },
    {
        "id": 756,
        "kanji": "説",
        "description": "zei - setsu - toku",
        "meaning": "explain - - "
    },
    {
        "id": 757,
        "kanji": "席",
        "description": "seki - - ",
        "meaning": "seat - - "
    },
    {
        "id": 758,
        "kanji": "積",
        "description": "seki - tsumu - ",
        "meaning": "accumulate - - "
    },
    {
        "id": 759,
        "kanji": "責",
        "description": "seki - semeru - ",
        "meaning": "burden - blame - "
    },
    {
        "id": 760,
        "kanji": "績",
        "description": "seki - - ",
        "meaning": "achievements - - "
    },
    {
        "id": 761,
        "kanji": "隻",
        "description": "seki - - ",
        "meaning": "one of a pair - counter for boats - "
    },
    {
        "id": 762,
        "kanji": "籍",
        "description": "seki - - ",
        "meaning": "register - - "
    },
    {
        "id": 763,
        "kanji": "雪",
        "description": "setsu - yuki - ",
        "meaning": "snow - - "
    },
    {
        "id": 764,
        "kanji": "設",
        "description": "setsu - moukeru - ",
        "meaning": "set up - - "
    },
    {
        "id": 765,
        "kanji": "接",
        "description": "setsu - tsugu - ",
        "meaning": "contact - touch - "
    },
    {
        "id": 766,
        "kanji": "絶",
        "description": "zetsu - taeru - tatsu",
        "meaning": "die out - cut off - "
    },
    {
        "id": 767,
        "kanji": "線",
        "description": "sen - - ",
        "meaning": "line - - "
    },
    {
        "id": 768,
        "kanji": "専",
        "description": "sen - mobbara - ",
        "meaning": "exclusive - sole - "
    },
    {
        "id": 769,
        "kanji": "全",
        "description": "zen - mattaku - ",
        "meaning": "whole - - "
    },
    {
        "id": 770,
        "kanji": "然",
        "description": "zen - nen - ",
        "meaning": "yes - however - but"
    },
    {
        "id": 771,
        "kanji": "祖",
        "description": "so - - ",
        "meaning": "ancestor - - "
    },
    {
        "id": 772,
        "kanji": "想",
        "description": "so - sou - ",
        "meaning": "conceive - image - imagination"
    },
    {
        "id": 773,
        "kanji": "総",
        "description": "sou - - ",
        "meaning": "total - general - "
    },
    {
        "id": 774,
        "kanji": "窓",
        "description": "sou - mado - ",
        "meaning": "window - - "
    },
    {
        "id": 775,
        "kanji": "層",
        "description": "sou - - ",
        "meaning": "stratum - layer - "
    },
    {
        "id": 776,
        "kanji": "双",
        "description": "sou - futa - ",
        "meaning": "set of two - twin - double"
    },
    {
        "id": 777,
        "kanji": "掃",
        "description": "sou - haku - ",
        "meaning": "sweep - - "
    },
    {
        "id": 778,
        "kanji": "燥",
        "description": "sou - - ",
        "meaning": "dry up - - "
    },
    {
        "id": 779,
        "kanji": "造",
        "description": "zou - tsukuru - ",
        "meaning": "make - create - "
    },
    {
        "id": 780,
        "kanji": "増",
        "description": "zou - masu - fueru",
        "meaning": "increase - - "
    },
    {
        "id": 781,
        "kanji": "像",
        "description": "zou - - ",
        "meaning": "image - - "
    },
    {
        "id": 782,
        "kanji": "臓",
        "description": "zou - - ",
        "meaning": "internal organ - - "
    },
    {
        "id": 783,
        "kanji": "憎",
        "description": "zou - nikui - nikumu",
        "meaning": "hate - dislike - "
    },
    {
        "id": 784,
        "kanji": "束",
        "description": "soku - taba - ",
        "meaning": "tie - bundle - "
    },
    {
        "id": 785,
        "kanji": "則",
        "description": "soku - - ",
        "meaning": "rule - law - act on"
    },
    {
        "id": 786,
        "kanji": "測",
        "description": "soku - hakaru - ",
        "meaning": "measure - - "
    },
    {
        "id": 787,
        "kanji": "続",
        "description": "zoku - tsuzuku - tsuzukeru",
        "meaning": "continue - - "
    },
    {
        "id": 788,
        "kanji": "底",
        "description": "soko - tei - ",
        "meaning": "bottom - - "
    },
    {
        "id": 789,
        "kanji": "損",
        "description": "sokonau - son - sokoneru",
        "meaning": "loss - damage - "
    },
    {
        "id": 790,
        "kanji": "卒",
        "description": "sotsu - - ",
        "meaning": "graduate - - "
    },
    {
        "id": 791,
        "kanji": "率",
        "description": "sotsu - ritsu - hikiiru",
        "meaning": "rate - percentage - lead"
    },
    {
        "id": 792,
        "kanji": "備",
        "description": "sonaeru - bi - sonawaru",
        "meaning": "provide - - "
    },
    {
        "id": 793,
        "kanji": "反",
        "description": "sorasu - han - tan",
        "meaning": "counter - against - "
    },
    {
        "id": 794,
        "kanji": "村",
        "description": "son - mura - ",
        "meaning": "village - - "
    },
    {
        "id": 795,
        "kanji": "孫",
        "description": "son - mago - ",
        "meaning": "grandchild - - "
    },
    {
        "id": 796,
        "kanji": "存",
        "description": "son - zon - ",
        "meaning": "exist - - "
    },
    {
        "id": 797,
        "kanji": "尊",
        "description": "son - toutobu - tattobu",
        "meaning": "honor - respect - "
    },
    {
        "id": 798,
        "kanji": "太",
        "description": "ta - futoi - tai",
        "meaning": "big - thick - become fat"
    },
    {
        "id": 799,
        "kanji": "袋",
        "description": "tai - fukuro - ",
        "meaning": "sack - bag - "
    },
    {
        "id": 800,
        "kanji": "第",
        "description": "dai - - ",
        "meaning": "rank - no. ~ - "
    },
    {
        "id": 801,
        "kanji": "平",
        "description": "taira - hei - byou",
        "meaning": "flat - calm - "
    },
    {
        "id": 802,
        "kanji": "倒",
        "description": "taosu - tou - ",
        "meaning": "topple - fall over - "
    },
    {
        "id": 803,
        "kanji": "宝",
        "description": "takara - hou - ",
        "meaning": "treasure - - "
    },
    {
        "id": 804,
        "kanji": "宅",
        "description": "taku - - ",
        "meaning": "house - home - "
    },
    {
        "id": 805,
        "kanji": "濯",
        "description": "taku - - ",
        "meaning": "rinse - - "
    },
    {
        "id": 806,
        "kanji": "竹",
        "description": "take - chiku - ",
        "meaning": "bamboo - - "
    },
    {
        "id": 807,
        "kanji": "達",
        "description": "tatsu - tachi - ",
        "meaning": "attain - arrive - plural marker"
    },
    {
        "id": 808,
        "kanji": "例",
        "description": "tatoeru - rei - ",
        "meaning": "example - - "
    },
    {
        "id": 809,
        "kanji": "頼",
        "description": "tanomu - rai - tanomoshii",
        "meaning": "rely on - ask - "
    },
    {
        "id": 810,
        "kanji": "卵",
        "description": "tamago - ran - ",
        "meaning": "egg - - "
    },
    {
        "id": 811,
        "kanji": "民",
        "description": "tami - min - ",
        "meaning": "people - - "
    },
    {
        "id": 812,
        "kanji": "便",
        "description": "tayori - ben - bin",
        "meaning": "post - convenient - "
    },
    {
        "id": 813,
        "kanji": "短",
        "description": "tan - mijikai - ",
        "meaning": "short - - "
    },
    {
        "id": 814,
        "kanji": "単",
        "description": "tan - - ",
        "meaning": "single - - "
    },
    {
        "id": 815,
        "kanji": "談",
        "description": "dan - - ",
        "meaning": "talk - - "
    },
    {
        "id": 816,
        "kanji": "段",
        "description": "dan - - ",
        "meaning": "step - - "
    },
    {
        "id": 817,
        "kanji": "乳",
        "description": "chi - nyuu - chichi",
        "meaning": "milk - - "
    },
    {
        "id": 818,
        "kanji": "恥",
        "description": "chi - hajiru - hazukashii",
        "meaning": "shy - shame - "
    },
    {
        "id": 819,
        "kanji": "畜",
        "description": "chiku - - ",
        "meaning": "livestock - - "
    },
    {
        "id": 820,
        "kanji": "虫",
        "description": "chuu - mushi - ",
        "meaning": "insect - - "
    },
    {
        "id": 821,
        "kanji": "柱",
        "description": "chuu - hashira - ",
        "meaning": "pillar - - "
    },
    {
        "id": 822,
        "kanji": "仲",
        "description": "chuu - naka - ",
        "meaning": "intermediary - - "
    },
    {
        "id": 823,
        "kanji": "宙",
        "description": "chuu - - ",
        "meaning": "outer space - space - "
    },
    {
        "id": 824,
        "kanji": "駐",
        "description": "chuu - - ",
        "meaning": "stationed - - "
    },
    {
        "id": 825,
        "kanji": "貯",
        "description": "cho - - ",
        "meaning": "lay up - store - "
    },
    {
        "id": 826,
        "kanji": "庁",
        "description": "chou - - ",
        "meaning": "government agency - - "
    },
    {
        "id": 827,
        "kanji": "珍",
        "description": "chin - mezurashii - ",
        "meaning": "rare - - "
    },
    {
        "id": 828,
        "kanji": "都",
        "description": "shi - to - miyako",
        "meaning": "metropolis - city - "
    },
    {
        "id": 829,
        "kanji": "費",
        "description": "tsuieru - hi - tsuiyasu",
        "meaning": "expense - - "
    },
    {
        "id": 830,
        "kanji": "捕",
        "description": "tsukamaru - ho - toru",
        "meaning": "catch - arrest - "
    },
    {
        "id": 831,
        "kanji": "疲",
        "description": "tsukareru - hi - ",
        "meaning": "tired - - "
    },
    {
        "id": 832,
        "kanji": "付",
        "description": "tsuku - fu - tsukeru",
        "meaning": "attach - add - "
    },
    {
        "id": 833,
        "kanji": "突",
        "description": "tsuku - totsu - ",
        "meaning": "dash - thrust - "
    },
    {
        "id": 834,
        "kanji": "包",
        "description": "tsutsumu - hou - ",
        "meaning": "envelop - wrap - "
    },
    {
        "id": 835,
        "kanji": "努",
        "description": "tsutomeru - do - ",
        "meaning": "exert - - "
    },
    {
        "id": 836,
        "kanji": "務",
        "description": "tsutomeru - mu - ",
        "meaning": "duty - - "
    },
    {
        "id": 837,
        "kanji": "募",
        "description": "tsunoru - bo - ",
        "meaning": "raise - - "
    },
    {
        "id": 838,
        "kanji": "粒",
        "description": "tsubu - ryuu - ",
        "meaning": "grain - - "
    },
    {
        "id": 839,
        "kanji": "連",
        "description": "tsuraneru - ren - tsureru",
        "meaning": "link - succession - "
    },
    {
        "id": 840,
        "kanji": "庭",
        "description": "tei - niwa - ",
        "meaning": "court - garden - "
    },
    {
        "id": 841,
        "kanji": "低",
        "description": "tei - hikui - hikumeru",
        "meaning": "low - - "
    },
    {
        "id": 842,
        "kanji": "停",
        "description": "tei - - ",
        "meaning": "stop - halt - "
    },
    {
        "id": 843,
        "kanji": "程",
        "description": "tei - hodo - ",
        "meaning": "extent - span - degree"
    },
    {
        "id": 844,
        "kanji": "泥",
        "description": "tei - doro - ",
        "meaning": "mud - - "
    },
    {
        "id": 845,
        "kanji": "的",
        "description": "teki - mato - ",
        "meaning": "mark - target - suffix for making adj"
    },
    {
        "id": 846,
        "kanji": "適",
        "description": "teki - - ",
        "meaning": "suitable - - "
    },
    {
        "id": 847,
        "kanji": "鉄",
        "description": "tetsu - - ",
        "meaning": "iron - - "
    },
    {
        "id": 848,
        "kanji": "点",
        "description": "ten - - ",
        "meaning": "point - mark - dot"
    },
    {
        "id": 849,
        "kanji": "殿",
        "description": "ten - den - dono",
        "meaning": "palace - lord - "
    },
    {
        "id": 850,
        "kanji": "登",
        "description": "to - tou - noboru",
        "meaning": "climb - - "
    },
    {
        "id": 851,
        "kanji": "徒",
        "description": "to - - ",
        "meaning": "follower - - "
    },
    {
        "id": 852,
        "kanji": "途",
        "description": "to - - ",
        "meaning": "way - - "
    },
    {
        "id": 853,
        "kanji": "渡",
        "description": "to - wataru - watasu",
        "meaning": "cross - go across - "
    },
    {
        "id": 854,
        "kanji": "塗",
        "description": "to - nutsu - ",
        "meaning": "apply on a surface - - "
    },
    {
        "id": 855,
        "kanji": "投",
        "description": "tou - nageru - ",
        "meaning": "throw - - "
    },
    {
        "id": 856,
        "kanji": "等",
        "description": "tou - hitoshii - ",
        "meaning": "equal - class - "
    },
    {
        "id": 857,
        "kanji": "湯",
        "description": "tou - yu - ",
        "meaning": "hot water - - "
    },
    {
        "id": 858,
        "kanji": "灯",
        "description": "tou - hi - ",
        "meaning": "lamp - - "
    },
    {
        "id": 859,
        "kanji": "党",
        "description": "tou - - ",
        "meaning": "party - sect - group"
    },
    {
        "id": 860,
        "kanji": "到",
        "description": "tou - - ",
        "meaning": "arrive - - "
    },
    {
        "id": 861,
        "kanji": "逃",
        "description": "tou - nigeru - nogasu",
        "meaning": "escape - - "
    },
    {
        "id": 862,
        "kanji": "盗",
        "description": "tou - nusumu - ",
        "meaning": "steal - - "
    },
    {
        "id": 863,
        "kanji": "筒",
        "description": "tou - tsutsu - ",
        "meaning": "tube - - "
    },
    {
        "id": 864,
        "kanji": "塔",
        "description": "tou - - ",
        "meaning": "tower - - "
    },
    {
        "id": 865,
        "kanji": "童",
        "description": "dou - warabe - ",
        "meaning": "child - - "
    },
    {
        "id": 866,
        "kanji": "働",
        "description": "tou - hataraku - ",
        "meaning": "work - - "
    },
    {
        "id": 867,
        "kanji": "銅",
        "description": "dou - - ",
        "meaning": "copper - bronze - "
    },
    {
        "id": 868,
        "kanji": "導",
        "description": "tou - michibiku - ",
        "meaning": "lead - guide - "
    },
    {
        "id": 869,
        "kanji": "溶",
        "description": "toku - you - tokeru",
        "meaning": "dissolve - melt - "
    },
    {
        "id": 870,
        "kanji": "毒",
        "description": "doku - - ",
        "meaning": "poison - - "
    },
    {
        "id": 871,
        "kanji": "独",
        "description": "doku - hitori - ",
        "meaning": "alone - - "
    },
    {
        "id": 872,
        "kanji": "届",
        "description": "todoku - todokeru - ",
        "meaning": "deliver - reach - "
    },
    {
        "id": 873,
        "kanji": "飛",
        "description": "tobasu - hi - tobu",
        "meaning": "fly - - "
    },
    {
        "id": 874,
        "kanji": "留",
        "description": "tomeru - ryuu - ru",
        "meaning": "stay - keep - "
    },
    {
        "id": 875,
        "kanji": "泊",
        "description": "tomaru - tomeru - haku",
        "meaning": "stay overnight - stay - "
    },
    {
        "id": 876,
        "kanji": "富",
        "description": "fuu - fu - tomu",
        "meaning": "rich - - "
    },
    {
        "id": 877,
        "kanji": "鈍",
        "description": "don - nibui - niburu",
        "meaning": "dull - - "
    },
    {
        "id": 878,
        "kanji": "無",
        "description": "nai - mu - bu",
        "meaning": "without - nothing - "
    },
    {
        "id": 879,
        "kanji": "亡",
        "description": "nai - bou - mou",
        "meaning": "decease - dead - "
    },
    {
        "id": 880,
        "kanji": "流",
        "description": "nagasu - ryuu - nagareru",
        "meaning": "flow - current - "
    },
    {
        "id": 881,
        "kanji": "鳴",
        "description": "naku - mei - naru",
        "meaning": "cry - sound (from a bird...) - "
    },
    {
        "id": 882,
        "kanji": "波",
        "description": "nami - ha - ",
        "meaning": "wave - - "
    },
    {
        "id": 883,
        "kanji": "並",
        "description": "nami - hei - naraberu",
        "meaning": "line up - line - "
    },
    {
        "id": 884,
        "kanji": "涙",
        "description": "namida - - rui",
        "meaning": "tear - teardrop - "
    },
    {
        "id": 885,
        "kanji": "悩",
        "description": "nayamasu - nou - nayamu",
        "meaning": "suffer - worry - "
    },
    {
        "id": 886,
        "kanji": "軟",
        "description": "nan - yawaraka - yawarakai",
        "meaning": "soft - - "
    },
    {
        "id": 887,
        "kanji": "任",
        "description": "nin - makaseru - makasu",
        "meaning": "office - entrust - "
    },
    {
        "id": 888,
        "kanji": "認",
        "description": "nin - mitomeru - ",
        "meaning": "recognize - - "
    },
    {
        "id": 889,
        "kanji": "抜",
        "description": "nuku - batsu - nukeru",
        "meaning": "pullout - stand out - "
    },
    {
        "id": 890,
        "kanji": "布",
        "description": "nuno - fu - ",
        "meaning": "cloth - - "
    },
    {
        "id": 891,
        "kanji": "猫",
        "description": "neko - byou - ",
        "meaning": "cat - - "
    },
    {
        "id": 892,
        "kanji": "眠",
        "description": "nemui - min - nemuru",
        "meaning": "sleep - - "
    },
    {
        "id": 893,
        "kanji": "練",
        "description": "neru - ren - ",
        "meaning": "to train - training - "
    },
    {
        "id": 894,
        "kanji": "念",
        "description": "nen - - ",
        "meaning": "thoughts - remembering - "
    },
    {
        "id": 895,
        "kanji": "燃",
        "description": "nen - moeru - moyasu",
        "meaning": "burn - - "
    },
    {
        "id": 896,
        "kanji": "農",
        "description": "nou - - ",
        "meaning": "farming - farm - "
    },
    {
        "id": 897,
        "kanji": "能",
        "description": "nou - - ",
        "meaning": "ability - - "
    },
    {
        "id": 898,
        "kanji": "脳",
        "description": "nou - - ",
        "meaning": "brain - - "
    },
    {
        "id": 899,
        "kanji": "望",
        "description": "nozomu - bou - mou",
        "meaning": "hope - desire - expect"
    },
    {
        "id": 900,
        "kanji": "葉",
        "description": "ha - you - ",
        "meaning": "leaf - leaves - "
    },
    {
        "id": 901,
        "kanji": "破",
        "description": "ha - yaburu - yabureru",
        "meaning": "tear - break - "
    },
    {
        "id": 902,
        "kanji": "敗",
        "description": "hai - yabureru - ",
        "meaning": "defeated - - "
    },
    {
        "id": 903,
        "kanji": "倍",
        "description": "bai - - ",
        "meaning": "times X - double - "
    },
    {
        "id": 904,
        "kanji": "量",
        "description": "hakaru - ryou - ",
        "meaning": "quantity - - "
    },
    {
        "id": 905,
        "kanji": "麦",
        "description": "baku - mugi - ",
        "meaning": "wheat - - "
    },
    {
        "id": 906,
        "kanji": "爆",
        "description": "baku - - ",
        "meaning": "explode - - "
    },
    {
        "id": 907,
        "kanji": "箱",
        "description": "hako - - ",
        "meaning": "box - - "
    },
    {
        "id": 908,
        "kanji": "畑",
        "description": "hata - hatake - ",
        "meaning": "field - - "
    },
    {
        "id": 909,
        "kanji": "肌",
        "description": "hada - - ",
        "meaning": "skin - - "
    },
    {
        "id": 910,
        "kanji": "法",
        "description": "hatsu - hou - hotsu",
        "meaning": "law - - "
    },
    {
        "id": 911,
        "kanji": "鼻",
        "description": "hana - bi - ",
        "meaning": "nose - - "
    },
    {
        "id": 912,
        "kanji": "放",
        "description": "hanasu - hou - hanatsu",
        "meaning": "let go - separate - "
    },
    {
        "id": 913,
        "kanji": "幅",
        "description": "haba - fuku - ",
        "meaning": "width - - "
    },
    {
        "id": 914,
        "kanji": "林",
        "description": "hayashi - rin - ",
        "meaning": "woods - forest - "
    },
    {
        "id": 915,
        "kanji": "腹",
        "description": "hara - fuku - ",
        "meaning": "belly - stomach - "
    },
    {
        "id": 916,
        "kanji": "払",
        "description": "harau - futsu - ",
        "meaning": "pay - clear away - "
    },
    {
        "id": 917,
        "kanji": "判",
        "description": "han - ban - ",
        "meaning": "judge - - "
    },
    {
        "id": 918,
        "kanji": "版",
        "description": "han - - ",
        "meaning": "print - publishing - "
    },
    {
        "id": 919,
        "kanji": "般",
        "description": "han - - ",
        "meaning": "sort - generally - "
    },
    {
        "id": 920,
        "kanji": "販",
        "description": "han - - ",
        "meaning": "sell - - "
    },
    {
        "id": 921,
        "kanji": "番",
        "description": "ban - - ",
        "meaning": "order - turn - watch"
    },
    {
        "id": 922,
        "kanji": "晩",
        "description": "ban - - ",
        "meaning": "evening - - "
    },
    {
        "id": 923,
        "kanji": "非",
        "description": "hi - - ",
        "meaning": "not - not good - "
    },
    {
        "id": 924,
        "kanji": "匹",
        "description": "hiki - hitsu - ",
        "meaning": "equal - counter for small animals - "
    },
    {
        "id": 925,
        "kanji": "筆",
        "description": "hitsu - fude - ",
        "meaning": "brush - writing - "
    },
    {
        "id": 926,
        "kanji": "兵",
        "description": "hyou - hei - ",
        "meaning": "soldier - - "
    },
    {
        "id": 927,
        "kanji": "秒",
        "description": "byou - - ",
        "meaning": "second - - "
    },
    {
        "id": 928,
        "kanji": "貧",
        "description": "hin - bin - mazushii",
        "meaning": "poor - poverty - "
    },
    {
        "id": 929,
        "kanji": "瓶",
        "description": "bin - kame - ",
        "meaning": "bottle - vase - "
    },
    {
        "id": 930,
        "kanji": "府",
        "description": "fu - - ",
        "meaning": "prefecture - agency - "
    },
    {
        "id": 931,
        "kanji": "婦",
        "description": "fu - - ",
        "meaning": "woman - - "
    },
    {
        "id": 932,
        "kanji": "符",
        "description": "fu - - ",
        "meaning": "symbol - - "
    },
    {
        "id": 933,
        "kanji": "普",
        "description": "fu - - ",
        "meaning": "wide - universal - general"
    },
    {
        "id": 934,
        "kanji": "膚",
        "description": "fu - - ",
        "meaning": "skin - - "
    },
    {
        "id": 935,
        "kanji": "部",
        "description": "bu - - ",
        "meaning": "department - section - "
    },
    {
        "id": 936,
        "kanji": "武",
        "description": "bu - mu - ",
        "meaning": "military - - "
    },
    {
        "id": 937,
        "kanji": "舞",
        "description": "bu - mau - mai",
        "meaning": "dance - - "
    },
    {
        "id": 938,
        "kanji": "封",
        "description": "fuu - hou - ",
        "meaning": "seal - - "
    },
    {
        "id": 939,
        "kanji": "福",
        "description": "fuku - - ",
        "meaning": "fortune - - "
    },
    {
        "id": 940,
        "kanji": "副",
        "description": "fuku - - ",
        "meaning": "secondary - - "
    },
    {
        "id": 941,
        "kanji": "復",
        "description": "fuku - - ",
        "meaning": "return - again - return to"
    },
    {
        "id": 942,
        "kanji": "複",
        "description": "fuku - - ",
        "meaning": "compound - complex - "
    },
    {
        "id": 943,
        "kanji": "防",
        "description": "fusegu - bou - ",
        "meaning": "prevent - - "
    },
    {
        "id": 944,
        "kanji": "沸",
        "description": "futsu - waku - wakasu",
        "meaning": "boil - - "
    },
    {
        "id": 945,
        "kanji": "仏",
        "description": "butsu - hotoke - ",
        "meaning": "buddha - france - "
    },
    {
        "id": 946,
        "kanji": "報",
        "description": "hou - mukuiru - ",
        "meaning": "inform - information - "
    },
    {
        "id": 947,
        "kanji": "豊",
        "description": "hou - yutaka - ",
        "meaning": "plentiful - abundance - "
    },
    {
        "id": 948,
        "kanji": "貿",
        "description": "bou - - ",
        "meaning": "trade - - "
    },
    {
        "id": 949,
        "kanji": "忘",
        "description": "bou - wasureru - ",
        "meaning": "forget - - "
    },
    {
        "id": 950,
        "kanji": "棒",
        "description": "bou - - ",
        "meaning": "stick - rod - "
    },
    {
        "id": 951,
        "kanji": "坊",
        "description": "bou - botsu - ",
        "meaning": "boy - priest - "
    },
    {
        "id": 952,
        "kanji": "帽",
        "description": "bou - - ",
        "meaning": "headgear - headwear - "
    },
    {
        "id": 953,
        "kanji": "欲",
        "description": "hoshii - yoku - hossuru",
        "meaning": "desire - want - "
    },
    {
        "id": 954,
        "kanji": "磨",
        "description": "ma - magaku - ",
        "meaning": "polish - brush (teeth) - "
    },
    {
        "id": 955,
        "kanji": "枚",
        "description": "mai - - ",
        "meaning": "counter for sheets (paper) - - "
    },
    {
        "id": 956,
        "kanji": "迷",
        "description": "mayou - mei - ",
        "meaning": "perplexed - lost - "
    },
    {
        "id": 957,
        "kanji": "満",
        "description": "man - michiru - mitasu",
        "meaning": "full - - "
    },
    {
        "id": 958,
        "kanji": "未",
        "description": "mi - - ",
        "meaning": "not yet - still to come - "
    },
    {
        "id": 959,
        "kanji": "乱",
        "description": "midasu - ran - midareru",
        "meaning": "disordered - - "
    },
    {
        "id": 960,
        "kanji": "緑",
        "description": "midori - ryoku - ",
        "meaning": "green - - "
    },
    {
        "id": 961,
        "kanji": "夢",
        "description": "mu - yume - ",
        "meaning": "dream - - "
    },
    {
        "id": 962,
        "kanji": "娘",
        "description": "musume - - ",
        "meaning": "daughter - girl - "
    },
    {
        "id": 963,
        "kanji": "綿",
        "description": "men - wata - ",
        "meaning": "cotton - - "
    },
    {
        "id": 964,
        "kanji": "戻",
        "description": "modosu - rei - modoru",
        "meaning": "return - - "
    },
    {
        "id": 965,
        "kanji": "約",
        "description": "yaku - - ",
        "meaning": "promise - contract - "
    },
    {
        "id": 966,
        "kanji": "由",
        "description": "yu - yuu - yoshi",
        "meaning": "reason - - "
    },
    {
        "id": 967,
        "kanji": "輸",
        "description": "yu - - ",
        "meaning": "transport - - "
    },
    {
        "id": 968,
        "kanji": "郵",
        "description": "yuu - - ",
        "meaning": "mail - - "
    },
    {
        "id": 969,
        "kanji": "予",
        "description": "yo - - ",
        "meaning": "advance - - "
    },
    {
        "id": 970,
        "kanji": "良",
        "description": "yoi - ryou - ",
        "meaning": "good - - "
    },
    {
        "id": 971,
        "kanji": "陽",
        "description": "you - - ",
        "meaning": "sun - positive - "
    },
    {
        "id": 972,
        "kanji": "容",
        "description": "you - - ",
        "meaning": "appearance - container - contain"
    },
    {
        "id": 973,
        "kanji": "翌",
        "description": "yoku - - ",
        "meaning": "following - the next - "
    },
    {
        "id": 974,
        "kanji": "礼",
        "description": "rai - rei - ",
        "meaning": "etiquette - bow - rite"
    },
    {
        "id": 975,
        "kanji": "陸",
        "description": "riku - - ",
        "meaning": "land - - "
    },
    {
        "id": 976,
        "kanji": "律",
        "description": "richi - ritsu - ",
        "meaning": "law - rhythm - "
    },
    {
        "id": 977,
        "kanji": "略",
        "description": "ryaku - - ",
        "meaning": "abridged - strategy - "
    },
    {
        "id": 978,
        "kanji": "両",
        "description": "ryou - - ",
        "meaning": "both - - "
    },
    {
        "id": 979,
        "kanji": "領",
        "description": "ryou - - ",
        "meaning": "territory - - "
    },
    {
        "id": 980,
        "kanji": "了",
        "description": "ryou - - ",
        "meaning": "finish - comprehend - "
    },
    {
        "id": 981,
        "kanji": "療",
        "description": "ryou - - ",
        "meaning": "treat - treatment - "
    },
    {
        "id": 982,
        "kanji": "輪",
        "description": "rin - wa - ",
        "meaning": "wheel - ring - "
    },
    {
        "id": 983,
        "kanji": "類",
        "description": "rui - - ",
        "meaning": "kind - type - "
    },
    {
        "id": 984,
        "kanji": "令",
        "description": "rei - - ",
        "meaning": "command - - "
    },
    {
        "id": 985,
        "kanji": "零",
        "description": "rei - - ",
        "meaning": "zero - - "
    },
    {
        "id": 986,
        "kanji": "齢",
        "description": "rei - - ",
        "meaning": "age - - "
    },
    {
        "id": 987,
        "kanji": "歴",
        "description": "reki - - ",
        "meaning": "personal history - history - "
    },
    {
        "id": 988,
        "kanji": "列",
        "description": "retsu - - ",
        "meaning": "row - line - "
    },
    {
        "id": 989,
        "kanji": "労",
        "description": "rou - - ",
        "meaning": "labor - effort - "
    },
    {
        "id": 990,
        "kanji": "録",
        "description": "roku - - ",
        "meaning": "record - - "
    },
    {
        "id": 991,
        "kanji": "論",
        "description": "ron - - ",
        "meaning": "argue - theory - "
    },
    {
        "id": 992,
        "kanji": "湾",
        "description": "wan - - ",
        "meaning": "bay - - "
    },
    {
        "id": 993,
        "kanji": "他",
        "description": "ta - hoka - ",
        "meaning": "other - another - "
    },
    {
        "id": 994,
        "kanji": "伝",
        "description": "den - tsutau - tsutaeru",
        "meaning": "transmit - report - tradition"
    },
    {
        "id": 995,
        "kanji": "顔",
        "description": "gan - kao - ",
        "meaning": "face - - "
    },
    {
        "id": 996,
        "kanji": "団",
        "description": "dan - ton - ",
        "meaning": "group - association - "
    },
    {
        "id": 997,
        "kanji": "対",
        "description": "tai - tsui - ",
        "meaning": "opposite - versus - compare"
    },
    {
        "id": 998,
        "kanji": "舟",
        "description": "shuu - fune - funa",
        "meaning": "boat - ship - "
    },
    {
        "id": 999,
        "kanji": "雲",
        "description": "wan - kumo - ",
        "meaning": "cloud - - "
    },
    {
        "id": 1000,
        "kanji": "巨",
        "description": "kyo - - ",
        "meaning": "big - giant - "
    }
]