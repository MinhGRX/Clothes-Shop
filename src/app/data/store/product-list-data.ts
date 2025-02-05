import { Product } from '../models/product.model';
import { DomSanitizer } from '@angular/platform-browser';

// define require: any;

const m_80085_gray              = 'assets/images/80085-m-gray.png';
const m_80085_olive             = 'assets/images/80085-m-olive.png';
const m_80085_red               = 'assets/images/80085-m-red.png';
const m_baboon_blue             = 'assets/images/baboon-m-blue.png';
const m_baboon_green            = 'assets/images/baboon-m-green.png';
const m_baboon_smoke            = 'assets/images/baboon-m-smoke.png';
const w_i_love_u_black          = 'assets/images/i-love-u-w-black.png';
const w_i_love_u_pink           = 'assets/images/i-love-u-w-pink.png';
const w_i_love_u_white          = 'assets/images/i-love-u-w-white.png';
const m_lover_blue              = 'assets/images/lover-m-blue.png';
const m_lover_orange            = 'assets/images/lover-m-orange.png';
const m_lover_red               = 'assets/images/lover-m-red.png';
const w_my_vibe_my_tribe_brown  = 'assets/images/my-vibe-my-tribe-w-brown.png';
const w_my_vibe_my_tribe_gray   = 'assets/images/my-vibe-my-tribe-w-gray.png';
const w_my_vibe_my_tribe_yellow = 'assets/images/my-vibe-my-tribe-w-yellow.png';
const m_stay_high_black         = 'assets/images/stay-high-m-black.png';
const m_stay_high_green         = 'assets/images/stay-high-m-green.png';
const m_stay_high_white         = 'assets/images/stay-high-m-white.png';
const w_white_widow_black       = 'assets/images/white-widow-w-black.png';
const w_white_widow_pink        = 'assets/images/white-widow-w-pink.png';
const w_white_widow_white       = 'assets/images/white-widow-w-white.png';



export const ProductListData = [
  new Product(1, '80085', 'Softest digits around', 12.3, 'https://fatcatstore.threadless.com/designs/80085',
    [
      { color: 'gray', size: 'XS', code: '80085XSGRAY', image: m_80085_gray },
      { color: 'olive', size: 'XS', code: '80085XSOLIVE', image: m_80085_olive },
      { color: 'red', size: 'XS', code: '80085XSRED', image: m_80085_red },
      { color: 'gray', size: 'S', code: '80085SGRAY', image: m_80085_gray },
      { color: 'olive', size: 'S', code: '80085SOLIVE', image: m_80085_olive },
      { color: 'red', size: 'S', code: '80085SRED', image: m_80085_red },
      { color: 'gray', size: 'M', code: '80085MGRAY', image: m_80085_gray },
      { color: 'olive', size: 'M', code: '80085MOLIVE', image: m_80085_olive },
      { color: 'red', size: 'M', code: '80085MRED', image: m_80085_red },
      { color: 'gray', size: 'L', code: '80085LGRAY', image: m_80085_gray },
      { color: 'olive', size: 'L', code: '80085LOLIVE', image: m_80085_olive },
      { color: 'red', size: 'L', code: '80085LRED', image: m_80085_red },
      { color: 'gray', size: 'XL', code: '80085XLGRAY', image: m_80085_gray },
      { color: 'olive', size: 'XL', code: '80085XLOLIVE', image: m_80085_olive },
      { color: 'red', size: 'XL', code: '80085XLRED', image: m_80085_red },
    ],
    [
      { name: 'Nghia', content: 'I love this shirt!!!' }
    ],
    1
  ),
  new Product(2, 'Baboon', 'Proud baboon is proud', 13.4, 'https://fatcatstore.threadless.com/designs/proud-baboon',
    [
      { color: 'blue', size: 'XS', code: 'BBNXSBLUE', image: m_baboon_blue },
      { color: 'green', size: 'XS', code: 'BBNXSGREEN', image: m_baboon_green },
      { color: 'gray', size: 'XS', code: 'BBNXSGRAY', image: m_baboon_smoke },
      { color: 'blue', size: 'XL', code: 'BBNXLBLUE', image: m_baboon_blue },
      { color: 'green', size: 'XL', code: 'BBNXLGREEN', image: m_baboon_green },
      { color: 'gray', size: 'XL', code: 'BBNXLGRAY', image: m_baboon_smoke },
    ],
    [
      { name: 'Kien', content: 'Perfect, what I need for a party.' }
    ],
    1
  ),
  new Product(3, 'I Love U', 'More than iPhone', 14.5, 'https://fatcatstore.threadless.com/designs/ilove-u',
    [
      { color: 'black', size: 'XS', code: 'ILUXSBLACK', image: w_i_love_u_black },
      { color: 'pink', size: 'XS', code: 'ILUXSPINK', image: w_i_love_u_pink },
      { color: 'black', size: 'S', code: 'ILUSBLACK', image: w_i_love_u_black },
      { color: 'pink', size: 'S', code: 'ILUSPINK', image: w_i_love_u_pink },
      { color: 'black', size: 'M', code: 'ILUMBLACK', image: w_i_love_u_black },
      { color: 'pink', size: 'M', code: 'ILUMPINK', image: w_i_love_u_pink },
      { color: 'black', size: 'L', code: 'ILULBLACK', image: w_i_love_u_black },
      { color: 'pink', size: 'L', code: 'ILULPINK', image: w_i_love_u_pink },
      { color: 'black', size: 'XL', code: 'ILUXLBLACK', image: w_i_love_u_black },
      { color: 'pink', size: 'XL', code: 'ILUXLPINK', image: w_i_love_u_pink },
    ],
    [
      { name: 'Minh', content: 'It\'s actually more than an iPhone LOL.' }
    ],
    1
  ),
  new Product(4, 'Love®', 'Give and it will be given to you', 15.6, 'https://fatcatstore.threadless.com/designs/love-r',
    [
      { color: 'blue', size: 'XS', code: 'LVRXSBLUE', image: m_lover_blue },
      { color: 'orange', size: 'XS', code: 'LVRXSORANGE', image: m_lover_orange },
      { color: 'red', size: 'XS', code: 'LVRXSRED', image: m_lover_red },
      { color: 'blue', size: 'S', code: 'LVRSBLUE', image: m_lover_blue },
      { color: 'orange', size: 'S', code: 'LVRSORANGE', image: m_lover_orange },
      { color: 'red', size: 'S', code: 'LVRSRED', image: m_lover_red },
      { color: 'blue', size: 'M', code: 'LVRMBLUE', image: m_lover_blue },
      { color: 'orange', size: 'M', code: 'LVRMORANGE', image: m_lover_orange },
      { color: 'red', size: 'M', code: 'LVRMRED', image: m_lover_red },
      { color: 'blue', size: 'L', code: 'LVRLBLUE', image: m_lover_blue },
      { color: 'orange', size: 'L', code: 'LVRLORANGE', image: m_lover_orange },
      { color: 'red', size: 'L', code: 'LVRLRED', image: m_lover_red },
      { color: 'blue', size: 'XL', code: 'LVRXLBLUE', image: m_lover_blue },
      { color: 'orange', size: 'XL', code: 'LVRXLORANGE', image: m_lover_orange },
      { color: 'red', size: 'XL', code: 'LVRXLRED', image: m_lover_red },
    ],
    [
      { name: 'Anh', content: 'Great!! My boyfriend loves it.' }
    ],
    1
  ),
  new Product(5, 'My Vibe My Tribe', 'Vibing', 16.7, 'https://bxrnxmstxrdxm.threadless.com/designs/my-vibe-my-tribe',
    [
      { color: 'brown', size: 'XS', code: 'MVMTXSBROWN', image: w_my_vibe_my_tribe_brown },
      { color: 'gray', size: 'XS', code: 'MVMTXSGRAY', image: w_my_vibe_my_tribe_gray },
      { color: 'yellow', size: 'XS', code: 'MVMTXSYELLOW', image: w_my_vibe_my_tribe_yellow },
      { color: 'brown', size: 'S', code: 'MVMTSBROWN', image: w_my_vibe_my_tribe_brown },
      { color: 'gray', size: 'S', code: 'MVMTSGRAY', image: w_my_vibe_my_tribe_gray },
      { color: 'yellow', size: 'S', code: 'MVMTSYELLOW', image: w_my_vibe_my_tribe_yellow },
      { color: 'brown', size: 'M', code: 'MVMTMBROWN', image: w_my_vibe_my_tribe_brown },
      { color: 'gray', size: 'M', code: 'MVMTMGRAY', image: w_my_vibe_my_tribe_gray },
      { color: 'yellow', size: 'M', code: 'MVMTMYELLOW', image: w_my_vibe_my_tribe_yellow },
      { color: 'brown', size: 'L', code: 'MVMTLBROWN', image: w_my_vibe_my_tribe_brown },
      { color: 'gray', size: 'L', code: 'MVMTLGRAY', image: w_my_vibe_my_tribe_gray },
      { color: 'yellow', size: 'L', code: 'MVMTLYELLOW', image: w_my_vibe_my_tribe_yellow },
      { color: 'brown', size: 'XL', code: 'MVMTXLBROWN', image: w_my_vibe_my_tribe_brown },
      { color: 'gray', size: 'XL', code: 'MVMTXLGRAY', image: w_my_vibe_my_tribe_gray },
      { color: 'yellow', size: 'XL', code: 'MVMTXLYELLOW', image: w_my_vibe_my_tribe_yellow },
    ],
    [
      { name: 'Hung', content: 'It\'s great, but the price is a bit high for me.' }
    ],
    1
  ),
  new Product(6, 'Stay High', 'Stay high day by day night by night!', 17.3, 'https://bxrnxmstxrdxm.threadless.com/designs/stay-high',
    [
      { color: 'black', size: 'XS', code: 'SHXSBLACK', image: m_stay_high_black },
      { color: 'green', size: 'XS', code: 'SHXSGREEN', image: m_stay_high_green },
      { color: 'white', size: 'XS', code: 'SHXSWHITE', image: m_stay_high_white },
      { color: 'black', size: 'S', code: 'SHSBLACK', image: m_stay_high_black },
      { color: 'green', size: 'S', code: 'SHSGREEN', image: m_stay_high_green },
      { color: 'white', size: 'S', code: 'SHSWHITE', image: m_stay_high_white },
      { color: 'black', size: 'M', code: 'SHMBLACK', image: m_stay_high_black },
      { color: 'green', size: 'M', code: 'SHMGREEN', image: m_stay_high_green },
      { color: 'white', size: 'M', code: 'SHMWHITE', image: m_stay_high_white },
      { color: 'black', size: 'L', code: 'SHLBLACK', image: m_stay_high_black },
      { color: 'green', size: 'L', code: 'SHLGREEN', image: m_stay_high_green },
      { color: 'white', size: 'L', code: 'SHLWHITE', image: m_stay_high_white },
      { color: 'black', size: 'XL', code: 'SHXLBLACK', image: m_stay_high_black },
      { color: 'green', size: 'XL', code: 'SHXLGREEN', image: m_stay_high_green },
      { color: 'white', size: 'XL', code: 'SHXLWHITE', image: m_stay_high_white },
    ],
    [
      { name: 'Thanh', content: 'I find it uncomfortable wearing this.' }
    ],
    1
  ),
  new Product(7, 'White Widow', 'For the love of herb. Hope you\'ll enjoy', 14.9, 'https://bxrnxmstxrdxm.threadless.com/designs/white-widow',
    [
      { color: 'black', size: 'XS', code: 'WWXSBLACK', image: w_white_widow_black },
      { color: 'pink', size: 'XS', code: 'WWXSPINK', image: w_white_widow_pink },
      { color: 'white', size: 'XS', code: 'WWXSWHITE', image: w_white_widow_white },
      { color: 'black', size: 'S', code: 'WWSBLACK', image: w_white_widow_black },
      { color: 'pink', size: 'S', code: 'WWSPINK', image: w_white_widow_pink },
      { color: 'white', size: 'S', code: 'WWSWHITE', image: w_white_widow_white },
      { color: 'black', size: 'M', code: 'WWMBLACK', image: w_white_widow_black },
      { color: 'pink', size: 'M', code: 'WWMPINK', image: w_white_widow_pink },
      { color: 'white', size: 'M', code: 'WWMWHITE', image: w_white_widow_white },
      { color: 'black', size: 'L', code: 'WWLBLACK', image: w_white_widow_black },
      { color: 'pink', size: 'L', code: 'WWLPINK', image: w_white_widow_pink },
      { color: 'white', size: 'L', code: 'WWLWHITE', image: w_white_widow_white },
      { color: 'black', size: 'XL', code: 'WWXLBLACK', image: w_white_widow_black },
      { color: 'pink', size: 'XL', code: 'WWXLPINK', image: w_white_widow_pink },
      { color: 'white', size: 'XL', code: 'WWXLWHITE', image: w_white_widow_white },
    ],
    [
      { name: 'Tien', content: 'I\'m White Widow, husband of Black Widow :DDD' }
    ],
    1
  ),
];