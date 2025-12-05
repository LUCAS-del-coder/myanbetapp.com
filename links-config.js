// 連結配置文件 - 所有需要更換的連結都在這裡
// 修改這個文件中的連結後，重新載入頁面即可生效

const LINKS_CONFIG = {
    // 賭場網站連結
    casinos: {
        myan99: "https://www.myan99.me/m/home?affiliateCode=seom201",
        myan88: "https://www.myan88.me/m/home?affiliateCode=seom301",
        b8my: "https://www.b8my.net/m/home?affiliateCode=seom101",
        yoma77: "https://www.yoma77.net/m/home?affiliateCode=seom401",
        myan98: "https://www.myan98.co/m/home?affiliateCode=seom501",
        bago888: "https://www.bago888.net/m/home?affiliateCode=seom1701"
    },
    
    // 圖片資源連結
    images: {
        baseUrl: "https://myancasino.com/assets",
        logos: {
            myan99: "/logo/MYAN99.webp",
            myan88: "/logo/MYAN88.webp",
            b8my: "/logo/B8MY.webp",
            yoma77: "/logo/YOMA77.webp",
            myan98: "/logo/MYAN98.webp",
            bago888: "/logo/BAGO888.webp"
        },
        banners: {
            myan99: "/image/FREE%20SPIN%20MYAN%2099.webp",
            myan88: "/image/WEEKLY%20BONUS%20MYAN88.webp",
            b8my: "/image/GAME%20BONUS%20BAGO888.webp",
            yoma77: "/image/YOMA77%20GOLDEN%20EGG.webp"
        },
        games: {
            superAce: "/image/super%20ace.webp",
            aztecBank: "/image/aztec%20bank.webp",
            goldenEmpire: "/image/golden%20empire.webp",
            olympusGate: "/image/olympus%20gate.png",
            game777: "/image/777.webp",
            chargeBuffalo: "/image/charge%20buffalo.webp",
            boxingKing: "/image/boxing%20king.webp",
            moneyComing: "/image/money%20coming.webp",
            treasure: "/image/treasure.webp",
            goldenTemple: "/image/golden%20temple.webp",
            jackpotJoker: "/image/jackpot%20joker.webp",
            chinShiHuang: "/image/chin%20shi%20huang.webp"
        }
    },
    
    // 其他連結
    other: {
        myanbets: "https://myanbets.com",
        bestCasinos: "/best-online-casino-sites-myanmar",
        email: "mailto:myanmar@contact.com"
    }
};

// 輔助函數：獲取完整圖片 URL
function getImageUrl(category, key) {
    const base = LINKS_CONFIG.images.baseUrl;
    if (category === 'logos') {
        return base + LINKS_CONFIG.images.logos[key];
    } else if (category === 'banners') {
        return base + LINKS_CONFIG.images.banners[key];
    } else if (category === 'games') {
        return base + LINKS_CONFIG.images.games[key];
    }
    return '';
}

