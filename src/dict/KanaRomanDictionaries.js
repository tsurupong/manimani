var KanaDictionaries = require("./KanaDictionaries");

const gojuon = new Map([
    // あ行
    [KanaDictionaries.A, { from: KanaDictionaries.A, shiins: [], boin: 'a' }],
    [KanaDictionaries.I, { from: KanaDictionaries.I, shiins: ['y'], boin: 'i' }],
    [KanaDictionaries.U, { from: KanaDictionaries.U, shiins: ['w', 'wh'], boin: 'u' }],
    [KanaDictionaries.E, { from: KanaDictionaries.E, shiins: [], boin: 'e' }],
    [KanaDictionaries.O, { from: KanaDictionaries.O, shiins: [], boin: 'o' }],
    
    // か行
    [KanaDictionaries.KA, { from: KanaDictionaries.KA, shiins: ['k', 'c'], boin: 'a' }],
    [KanaDictionaries.KI, { from: KanaDictionaries.KI, shiins: ['k'], boin: 'i' }],
    [KanaDictionaries.KU, { from: KanaDictionaries.KU, shiins: ['k', 'c', 'q'], boin: 'u' }],
    [KanaDictionaries.KE, { from: KanaDictionaries.KE, shiins: ['k'], boin: 'e' }],
    [KanaDictionaries.KO, { from: KanaDictionaries.KO, shiins: ['k', 'c'], boin: 'o' }],
    
    // さ行
    [KanaDictionaries.SA, { from: KanaDictionaries.SA, shiins: ['s'], boin: 'a' }],
    [KanaDictionaries.SI, { from: KanaDictionaries.SI, shiins: ['s', 'sh', 'c'], boin: 'i' }],
    [KanaDictionaries.SU, { from: KanaDictionaries.SU, shiins: ['s'], boin: 'u' }],
    [KanaDictionaries.SE, { from: KanaDictionaries.SE, shiins: ['s', 'c'], boin: 'e' }],
    [KanaDictionaries.SO, { from: KanaDictionaries.SO, shiins: ['s'], boin: 'o' }],
    
    // た行
    [KanaDictionaries.TA, { from: KanaDictionaries.TA, shiins: ['t'], boin: 'a' }],
    [KanaDictionaries.TI, { from: KanaDictionaries.TI, shiins: ['t', 'ch'], boin: 'i' }],
    [KanaDictionaries.TU, { from: KanaDictionaries.TU, shiins: ['t', 'ts'], boin: 'u' }],
    [KanaDictionaries.TE, { from: KanaDictionaries.TE, shiins: ['t'], boin: 'e' }],
    [KanaDictionaries.TO, { from: KanaDictionaries.TO, shiins: ['t'], boin: 'o' }],
    
    // な行
    [KanaDictionaries.NA, { from: KanaDictionaries.NA, shiins: ['n'], boin: 'a' }],
    [KanaDictionaries.NI, { from: KanaDictionaries.NI, shiins: ['n'], boin: 'i' }],
    [KanaDictionaries.NU, { from: KanaDictionaries.NU, shiins: ['n'], boin: 'u' }],
    [KanaDictionaries.NE, { from: KanaDictionaries.NE, shiins: ['n'], boin: 'e' }],
    [KanaDictionaries.NO, { from: KanaDictionaries.NO, shiins: ['n'], boin: 'o' }],
    
    // は行
    [KanaDictionaries.HA, { from: KanaDictionaries.HA, shiins: ['h'], boin: 'a' }],
    [KanaDictionaries.HI, { from: KanaDictionaries.HI, shiins: ['h'], boin: 'i' }],
    [KanaDictionaries.HU, { from: KanaDictionaries.HU, shiins: ['h', 'f'], boin: 'u' }],
    [KanaDictionaries.HE, { from: KanaDictionaries.HE, shiins: ['h'], boin: 'e' }],
    [KanaDictionaries.HO, { from: KanaDictionaries.HO, shiins: ['h'], boin: 'o' }],
    
    // ま行
    [KanaDictionaries.MA, { from: KanaDictionaries.MA, shiins: ['m'], boin: 'a' }],
    [KanaDictionaries.MI, { from: KanaDictionaries.MI, shiins: ['m'], boin: 'i' }],
    [KanaDictionaries.MU, { from: KanaDictionaries.MU, shiins: ['m'], boin: 'u' }],
    [KanaDictionaries.ME, { from: KanaDictionaries.ME, shiins: ['m'], boin: 'e' }],
    [KanaDictionaries.MO, { from: KanaDictionaries.MO, shiins: ['m'], boin: 'o' }],
    
    // や行
    [KanaDictionaries.YA, { from: KanaDictionaries.YA, shiins: ['y'], boin: 'a' }],
    [KanaDictionaries.YU, { from: KanaDictionaries.YU, shiins: ['y'], boin: 'u' }],
    [KanaDictionaries.YO, { from: KanaDictionaries.YO, shiins: ['y'], boin: 'o' }],
    
    // ら行
    [KanaDictionaries.RA, { from: KanaDictionaries.RA, shiins: ['r'], boin: 'a' }],
    [KanaDictionaries.RI, { from: KanaDictionaries.RI, shiins: ['r'], boin: 'i' }],
    [KanaDictionaries.RU, { from: KanaDictionaries.RU, shiins: ['r'], boin: 'u' }],
    [KanaDictionaries.RE, { from: KanaDictionaries.RE, shiins: ['r'], boin: 'e' }],
    [KanaDictionaries.RO, { from: KanaDictionaries.RO, shiins: ['r'], boin: 'o' }],
    
    // わ行
    [KanaDictionaries.WA, { from: KanaDictionaries.WA, shiins: ['w'], boin: 'a' }],
    [KanaDictionaries.WO, { from: KanaDictionaries.WO, shiins: ['w'], boin: 'o' }],    
    [KanaDictionaries.N, { from: KanaDictionaries.N, shiins: ['n', 'x'], boin: 'n' }]
]);

const dakuon = new Map([
    // が行
    [KanaDictionaries.GA, { from: KanaDictionaries.GA, shiins: ['g'], boin: 'a' }],
    [KanaDictionaries.GI, { from: KanaDictionaries.GI, shiins: ['g'], boin: 'i' }],
    [KanaDictionaries.GU, { from: KanaDictionaries.GU, shiins: ['g'], boin: 'u' }],
    [KanaDictionaries.GE, { from: KanaDictionaries.GE, shiins: ['g'], boin: 'e' }],
    [KanaDictionaries.GO, { from: KanaDictionaries.GO, shiins: ['g'], boin: 'o' }],

    // ざ行
    [KanaDictionaries.ZA, { from: KanaDictionaries.ZA, shiins: ['z'], boin: 'a' }],
    [KanaDictionaries.ZI, { from: KanaDictionaries.ZI, shiins: ['z', 'j'], boin: 'i' }],
    [KanaDictionaries.ZU, { from: KanaDictionaries.ZU, shiins: ['z'], boin: 'u' }],
    [KanaDictionaries.ZE, { from: KanaDictionaries.ZE, shiins: ['z'], boin: 'e' }],
    [KanaDictionaries.ZO, { from: KanaDictionaries.ZO, shiins: ['z'], boin: 'o' }],

    // だ行
    [KanaDictionaries.DA, { from: KanaDictionaries.DA, shiins: ['d'], boin: 'a' }],
    [KanaDictionaries.DI, { from: KanaDictionaries.DI, shiins: ['d'], boin: 'i' }],
    [KanaDictionaries.DU, { from: KanaDictionaries.DU, shiins: ['d'], boin: 'u' }],
    [KanaDictionaries.DE, { from: KanaDictionaries.DE, shiins: ['d'], boin: 'e' }],
    [KanaDictionaries.DO, { from: KanaDictionaries.DO, shiins: ['d'], boin: 'o' }],

    // ば行
    [KanaDictionaries.BA, { from: KanaDictionaries.BA, shiins: ['b'], boin: 'a' }],
    [KanaDictionaries.BI, { from: KanaDictionaries.BI, shiins: ['b'], boin: 'i' }],
    [KanaDictionaries.BU, { from: KanaDictionaries.BU, shiins: ['b'], boin: 'u' }],
    [KanaDictionaries.BE, { from: KanaDictionaries.BE, shiins: ['b'], boin: 'e' }],
    [KanaDictionaries.BO, { from: KanaDictionaries.BO, shiins: ['b'], boin: 'o' }],

    // ヴぁ行
    [KanaDictionaries.VA, { from: KanaDictionaries.VA, shiins: ['v'], boin: 'a' }],
    [KanaDictionaries.VI, { from: KanaDictionaries.VI, shiins: ['v'], boin: 'i' }],
    [KanaDictionaries.VU, { from: KanaDictionaries.VU, shiins: ['v'], boin: 'u' }],
    [KanaDictionaries.VE, { from: KanaDictionaries.VE, shiins: ['v'], boin: 'e' }],
    [KanaDictionaries.VO, { from: KanaDictionaries.VO, shiins: ['v'], boin: 'o' }]
]);

const handakuon = new Map([
    // ぱ行
    [KanaDictionaries.PA, { from: KanaDictionaries.PA, shiins: ['p'], boin: 'a' }],
    [KanaDictionaries.PI, { from: KanaDictionaries.PI, shiins: ['p'], boin: 'i' }],
    [KanaDictionaries.PU, { from: KanaDictionaries.PU, shiins: ['p'], boin: 'u' }],
    [KanaDictionaries.PE, { from: KanaDictionaries.PE, shiins: ['p'], boin: 'e' }],
    [KanaDictionaries.PO, { from: KanaDictionaries.PO, shiins: ['p'], boin: 'o' }]
]);

const kogaki = new Map([
    // ぁ行
    [KanaDictionaries.XA, { from: KanaDictionaries.XA, shiins: ['x', 'l'], boin: 'a' }],
    [KanaDictionaries.XI, { from: KanaDictionaries.XI, shiins: ['x', 'l'], boin: 'i' }],
    [KanaDictionaries.XU, { from: KanaDictionaries.XU, shiins: ['x', 'l'], boin: 'u' }],
    [KanaDictionaries.XE, { from: KanaDictionaries.XE, shiins: ['x', 'l'], boin: 'e' }],
    [KanaDictionaries.XO, { from: KanaDictionaries.XO, shiins: ['x', 'l'], boin: 'o' }],

    // っ
    [KanaDictionaries.XTU, { from: KanaDictionaries.XTU, shiins: ['xt', 'lt', 'xts', 'lts'], boin: 'u' }],

    // ゃ行
    [KanaDictionaries.XYA, { from: KanaDictionaries.XYA, shiins: ['xy', 'ly'], boin: 'a' }],
    [KanaDictionaries.XYU, { from: KanaDictionaries.XYU, shiins: ['xy', 'ly'], boin: 'u' }],
    [KanaDictionaries.XYO, { from: KanaDictionaries.XYO, shiins: ['xy', 'ly'], boin: 'o' }],

    // ゎ
    [KanaDictionaries.XWA, { from: KanaDictionaries.XWA, shiins: ['xw', 'lw'], boin: 'a' }]
]);

const youon = new Map([
    // あ行
    [KanaDictionaries.YE, { from: KanaDictionaries.YE, shiins: ['y'], boin: 'e', origin: gojuon.get(KanaDictionaries.I), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.WI, { from: KanaDictionaries.WI, shiins: ['w'], boin: 'i', origin: gojuon.get(KanaDictionaries.U), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.WE, { from: KanaDictionaries.WE, shiins: ['w'], boin: 'e', origin: gojuon.get(KanaDictionaries.U), kogaki: kogaki.get(KanaDictionaries.XE) }],

    // きゃ行
    [KanaDictionaries.KYA, { from: KanaDictionaries.KYA, shiins: ['ky'], boin: 'a', origin: gojuon.get(KanaDictionaries.KI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.KYI, { from: KanaDictionaries.KYI, shiins: ['ky'], boin: 'i', origin: gojuon.get(KanaDictionaries.KI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.KYU, { from: KanaDictionaries.KYU, shiins: ['ky'], boin: 'u', origin: gojuon.get(KanaDictionaries.KI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.KYE, { from: KanaDictionaries.KYE, shiins: ['ky'], boin: 'e', origin: gojuon.get(KanaDictionaries.KI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.KYO, { from: KanaDictionaries.KYO, shiins: ['ky'], boin: 'o', origin: gojuon.get(KanaDictionaries.KI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ぎゃ行
    [KanaDictionaries.GYA, { from: KanaDictionaries.GYA, shiins: ['gy'], boin: 'a', origin: dakuon.get(KanaDictionaries.GI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.GYI, { from: KanaDictionaries.GYI, shiins: ['gy'], boin: 'i', origin: dakuon.get(KanaDictionaries.GI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.GYU, { from: KanaDictionaries.GYU, shiins: ['gy'], boin: 'u', origin: dakuon.get(KanaDictionaries.GI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.GYE, { from: KanaDictionaries.GYE, shiins: ['gy'], boin: 'e', origin: dakuon.get(KanaDictionaries.GI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.GYO, { from: KanaDictionaries.GYO, shiins: ['gy'], boin: 'o', origin: dakuon.get(KanaDictionaries.GI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // くぁ行
    [KanaDictionaries.QA, { from: KanaDictionaries.QA, shiins: ['q', 'kw'], boin: 'a', origin: gojuon.get(KanaDictionaries.KU), kogaki: kogaki.get(KanaDictionaries.XA) }],
    [KanaDictionaries.QI, { from: KanaDictionaries.QI, shiins: ['q', 'kw'], boin: 'i', origin: gojuon.get(KanaDictionaries.KU), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.QE, { from: KanaDictionaries.QE, shiins: ['q', 'kw'], boin: 'e', origin: gojuon.get(KanaDictionaries.KU), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.QO, { from: KanaDictionaries.QO, shiins: ['q', 'kw'], boin: 'o', origin: gojuon.get(KanaDictionaries.KU), kogaki: kogaki.get(KanaDictionaries.XO) }],

    // しゃ行
    [KanaDictionaries.SHA, { from: KanaDictionaries.SHA, shiins: ['sh', 'sy'], boin: 'a', origin: gojuon.get(KanaDictionaries.SI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.SYI, { from: KanaDictionaries.SYI, shiins: ['sy'], boin: 'i', origin: gojuon.get(KanaDictionaries.SI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.SHU, { from: KanaDictionaries.SHU, shiins: ['sh', 'sy'], boin: 'u', origin: gojuon.get(KanaDictionaries.SI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.SHE, { from: KanaDictionaries.SHE, shiins: ['sh', 'sy'], boin: 'e', origin: gojuon.get(KanaDictionaries.SI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.SHO, { from: KanaDictionaries.SHO, shiins: ['sh', 'sy'], boin: 'o', origin: gojuon.get(KanaDictionaries.SI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // じゃ行
    [KanaDictionaries.JA, { from: KanaDictionaries.JA, shiins: ['j', 'jy'], boin: 'a', origin: dakuon.get(KanaDictionaries.ZI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.JYI, { from: KanaDictionaries.JYI, shiins: ['jy'], boin: 'i', origin: dakuon.get(KanaDictionaries.ZI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.JU, { from: KanaDictionaries.JU, shiins: ['j', 'jy'], boin: 'u', origin: dakuon.get(KanaDictionaries.ZI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.JE, { from: KanaDictionaries.JE, shiins: ['j', 'jy'], boin: 'e', origin: dakuon.get(KanaDictionaries.ZI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.JO, { from: KanaDictionaries.JO, shiins: ['j', 'jy'], boin: 'o', origin: dakuon.get(KanaDictionaries.ZI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ちゃ行
    [KanaDictionaries.CHA, { from: KanaDictionaries.CHA, shiins: ['ch', 'cy','ty'], boin: 'a', origin: gojuon.get(KanaDictionaries.TI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.CYI, { from: KanaDictionaries.CYI, shiins: ['cy','ty'], boin: 'i', origin: gojuon.get(KanaDictionaries.TI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.CHU, { from: KanaDictionaries.CHU, shiins: ['ch', 'cy','ty'], boin: 'u', origin: gojuon.get(KanaDictionaries.TI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.CHE, { from: KanaDictionaries.CHE, shiins: ['ch', 'cy','ty'], boin: 'e', origin: gojuon.get(KanaDictionaries.TI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.CHO, { from: KanaDictionaries.CHO, shiins: ['ch', 'cy','ty'], boin: 'o', origin: gojuon.get(KanaDictionaries.TI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ぢゃ行
    [KanaDictionaries.DYA, { from: KanaDictionaries.DYA, shiins: ['dy'], boin: 'a', origin: dakuon.get(KanaDictionaries.DI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.DYI, { from: KanaDictionaries.DYI, shiins: ['dy'], boin: 'i', origin: dakuon.get(KanaDictionaries.DI), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.DYU, { from: KanaDictionaries.DYU, shiins: ['dy'], boin: 'u', origin: dakuon.get(KanaDictionaries.DI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.DYE, { from: KanaDictionaries.DYE, shiins: ['dy'], boin: 'e', origin: dakuon.get(KanaDictionaries.DI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.DYO, { from: KanaDictionaries.DYO, shiins: ['dy'], boin: 'o', origin: dakuon.get(KanaDictionaries.DI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // つぁ行
    [KanaDictionaries.TSA, { from: KanaDictionaries.TSA, shiins: ['ts'], boin: 'a', origin: gojuon.get(KanaDictionaries.TU), kogaki: kogaki.get(KanaDictionaries.XA) }],
    [KanaDictionaries.TSI, { from: KanaDictionaries.TSI, shiins: ['ts'], boin: 'i', origin: gojuon.get(KanaDictionaries.TU), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.TSE, { from: KanaDictionaries.TSE, shiins: ['ts'], boin: 'e', origin: gojuon.get(KanaDictionaries.TU), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.TSO, { from: KanaDictionaries.TSO, shiins: ['ts'], boin: 'o', origin: gojuon.get(KanaDictionaries.TU), kogaki: kogaki.get(KanaDictionaries.XO) }],

    // てゃ行
    [KanaDictionaries.THA, { from: KanaDictionaries.THA, shiins: ['th'], boin: 'a', origin: gojuon.get(KanaDictionaries.TE), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.THI, { from: KanaDictionaries.THI, shiins: ['th'], boin: 'i', origin: gojuon.get(KanaDictionaries.TE), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.THU, { from: KanaDictionaries.THU, shiins: ['th'], boin: 'u', origin: gojuon.get(KanaDictionaries.TE), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.THE, { from: KanaDictionaries.THE, shiins: ['th'], boin: 'e', origin: gojuon.get(KanaDictionaries.TE), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.THO, { from: KanaDictionaries.THO, shiins: ['th'], boin: 'o', origin: gojuon.get(KanaDictionaries.TE), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // でゃ行
    [KanaDictionaries.DHA, { from: KanaDictionaries.DHA, shiins: ['dh'], boin: 'a', origin: dakuon.get(KanaDictionaries.DE), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.DHI, { from: KanaDictionaries.DHI, shiins: ['dh'], boin: 'i', origin: dakuon.get(KanaDictionaries.DE), kogaki: kogaki.get(KanaDictionaries.XI) }],
    [KanaDictionaries.DHU, { from: KanaDictionaries.DHU, shiins: ['dh'], boin: 'u', origin: dakuon.get(KanaDictionaries.DE), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.DHE, { from: KanaDictionaries.DHE, shiins: ['dh'], boin: 'e', origin: dakuon.get(KanaDictionaries.DE), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.DHO, { from: KanaDictionaries.DHO, shiins: ['dh'], boin: 'o', origin: dakuon.get(KanaDictionaries.DE), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // にゃ行
    [KanaDictionaries.NYA, { from: KanaDictionaries.NYA, shiins: ['ny'], boin: 'a', origin: gojuon.get(KanaDictionaries.NI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.NYI, { from: KanaDictionaries.NYI, shiins: ['ny'], boin: 'i', origin: gojuon.get(KanaDictionaries.NI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.NYU, { from: KanaDictionaries.NYU, shiins: ['ny'], boin: 'u', origin: gojuon.get(KanaDictionaries.NI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.NYE, { from: KanaDictionaries.NYE, shiins: ['ny'], boin: 'e', origin: gojuon.get(KanaDictionaries.NI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.NYO, { from: KanaDictionaries.NYO, shiins: ['ny'], boin: 'o', origin: gojuon.get(KanaDictionaries.NI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ひゃ行
    [KanaDictionaries.HYA, { from: KanaDictionaries.HYA, shiins: ['hy'], boin: 'a', origin: gojuon.get(KanaDictionaries.HI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.HYI, { from: KanaDictionaries.HYI, shiins: ['hy'], boin: 'i', origin: gojuon.get(KanaDictionaries.HI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.HYU, { from: KanaDictionaries.HYU, shiins: ['hy'], boin: 'u', origin: gojuon.get(KanaDictionaries.HI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.HYE, { from: KanaDictionaries.HYE, shiins: ['hy'], boin: 'e', origin: gojuon.get(KanaDictionaries.HI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.HYO, { from: KanaDictionaries.HYO, shiins: ['hy'], boin: 'o', origin: gojuon.get(KanaDictionaries.HI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // びゃ行
    [KanaDictionaries.BYA, { from: KanaDictionaries.BYA, shiins: ['by'], boin: 'a', origin: dakuon.get(KanaDictionaries.BI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.BYI, { from: KanaDictionaries.BYI, shiins: ['by'], boin: 'i', origin: dakuon.get(KanaDictionaries.BI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.BYU, { from: KanaDictionaries.BYU, shiins: ['by'], boin: 'u', origin: dakuon.get(KanaDictionaries.BI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.BYE, { from: KanaDictionaries.BYE, shiins: ['by'], boin: 'e', origin: dakuon.get(KanaDictionaries.BI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.BYO, { from: KanaDictionaries.BYO, shiins: ['by'], boin: 'o', origin: dakuon.get(KanaDictionaries.BI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ぴゃ行
    [KanaDictionaries.PYA, { from: KanaDictionaries.PYA, shiins: ['py'], boin: 'a', origin: handakuon.get(KanaDictionaries.PI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.PYI, { from: KanaDictionaries.PYI, shiins: ['py'], boin: 'i', origin: handakuon.get(KanaDictionaries.PI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.PYU, { from: KanaDictionaries.PYU, shiins: ['py'], boin: 'u', origin: handakuon.get(KanaDictionaries.PI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.PYE, { from: KanaDictionaries.PYE, shiins: ['py'], boin: 'e', origin: handakuon.get(KanaDictionaries.PI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.PYO, { from: KanaDictionaries.PYO, shiins: ['py'], boin: 'o', origin: handakuon.get(KanaDictionaries.PI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // ふぁ行
    [KanaDictionaries.FA, { from: KanaDictionaries.FA, shiins: ['f', 'fw'], boin: 'a', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XA) }],
    [KanaDictionaries.FI, { from: KanaDictionaries.FI, shiins: ['f', 'fy', 'fw'], boin: 'i', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.FE, { from: KanaDictionaries.FE, shiins: ['f', 'fy', 'fw'], boin: 'e', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.FO, { from: KanaDictionaries.FO, shiins: ['f', 'fw'], boin: 'o', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XO) }],

    // ふゃ行
    [KanaDictionaries.FYA, { from: KanaDictionaries.FYA, shiins: ['fy'], boin: 'a', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.FYU, { from: KanaDictionaries.FYU, shiins: ['fy'], boin: 'u', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.FYO, { from: KanaDictionaries.FYO, shiins: ['fy'], boin: 'o', origin: gojuon.get(KanaDictionaries.HU), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // みゃ行
    [KanaDictionaries.MYA, { from: KanaDictionaries.MYA, shiins: ['my'], boin: 'a', origin: gojuon.get(KanaDictionaries.MI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.MYI, { from: KanaDictionaries.MYI, shiins: ['my'], boin: 'i', origin: gojuon.get(KanaDictionaries.MI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.MYU, { from: KanaDictionaries.MYU, shiins: ['my'], boin: 'u', origin: gojuon.get(KanaDictionaries.MI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.MYE, { from: KanaDictionaries.MYE, shiins: ['my'], boin: 'e', origin: gojuon.get(KanaDictionaries.MI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.MYO, { from: KanaDictionaries.MYO, shiins: ['my'], boin: 'o', origin: gojuon.get(KanaDictionaries.MI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

    // りゃ行
    [KanaDictionaries.RYA, { from: KanaDictionaries.RYA, shiins: ['ry'], boin: 'a', origin: gojuon.get(KanaDictionaries.RI), kogaki: kogaki.get(KanaDictionaries.XYA) }],
    [KanaDictionaries.RYI, { from: KanaDictionaries.RYI, shiins: ['ry'], boin: 'i', origin: gojuon.get(KanaDictionaries.RI), kogaki: kogaki.get(KanaDictionaries.XI) }],    
    [KanaDictionaries.RYU, { from: KanaDictionaries.RYU, shiins: ['ry'], boin: 'u', origin: gojuon.get(KanaDictionaries.RI), kogaki: kogaki.get(KanaDictionaries.XYU) }],
    [KanaDictionaries.RYE, { from: KanaDictionaries.RYE, shiins: ['ry'], boin: 'e', origin: gojuon.get(KanaDictionaries.RI), kogaki: kogaki.get(KanaDictionaries.XE) }],
    [KanaDictionaries.RYO, { from: KanaDictionaries.RYO, shiins: ['ry'], boin: 'o', origin: gojuon.get(KanaDictionaries.RI), kogaki: kogaki.get(KanaDictionaries.XYO) }],

]);

const KanaRomanDictionaries = new Map([...gojuon, ...dakuon, ...handakuon, ...kogaki, ...youon]);

module.exports = {gojuon, dakuon, handakuon, kogaki, youon, KanaRomanDictionaries};