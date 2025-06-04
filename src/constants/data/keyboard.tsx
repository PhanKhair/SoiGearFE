import { KeyboardType } from "@/schemas/keyboardSchema";
import { StatusEnum } from "../enum/Status";

export const sampleKeyboardData: KeyboardType[] = [
  {
    keyboardId: "05ffb24e-2a8b-44bd-9103-cbdd28ddfc37",
    name: "GEONWORKS F1-722",
    oldPrice: 11300000,
    newPrice: 7910000,
    discount: 30,
    description:
      "Bàn phím cơ cao cấp GEONWORKS F1-722 với thiết kế layout 65% + F-row độc đáo. Sở hữu case nhôm CNC chất lượng cao, gasket mount system mang lại cảm giác gõ mượt mà và âm thanh premium. Hỗ trợ hotswap PCB, RGB underglow.",
    images: [
      {
        img: "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/74a32930-8611-4a5f-b0df-55f0bbb1e8c8_rw_1920.jpg?h=a2701a83053f5f5400d8f7c567a690df",
        color: "#121063",
      },
      {
        img: "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/91377b4d-1050-442c-8d35-5ca949d649c5_rw_1920.jpg?h=609136326ba2c2a208f3c81e1764d322",
        color: "#3ab7bf",
      },
      {
        img: "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/99c86da9-bcee-486b-aed6-f05137bc8c40_rw_1920.jpg?h=3d5882774efe4103e946cbb4cf0d6a36",
        color: "#78dcca",
      },
      {
        img: "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/56009a14-34f0-48f9-9685-0d9c72e5839b_rw_1920.jpg?h=93e0b771e53eedba2058dee96dfa0196",
        color: "",
      },
      {
        img: "https://bizweb.dktcdn.net/100/499/624/files/z5334484187220-e279ef04d013bb6b608d19db6cefb5b9.jpg?v=1717513061778",
        color: "",
      },
      {
        img: "https://preview.redd.it/geonworks-f1-8x-722-v0-iyp1n2gfunaa1.jpg?width=640&crop=smart&auto=webp&s=21b875f7011398ca28b7612397aa0fa77fa15aa9",
        color: "",
      },
    ],
    status: StatusEnum.InStock,
    rating: { totalRating: 120, averageRating: 4.5 },
  },
  {
    keyboardId: "6e6430b9-c452-4891-816e-82405793be8d",
    name: "Dune 65",
    oldPrice: 9800000,
    newPrice: 8820000,
    discount: 10,
    description:
      "Bàn phím cơ Dune 65 với thiết kế 65% compact và elegant. Được chế tác từ nhôm anodized cao cấp với nhiều lựa chọn màu sắc độc đáo. Tích hợp gasket mount structure cho trải nghiệm typing êm ái, PCB hotswap hỗ trợ 3-pin và 5-pin switches.",
    images: [
      {
        img: "https://i.shgcdn.com/bc6c3a4f-81bb-4343-8d7d-39ada146514a/-/format/auto/-/preview/3000x3000/-/quality/best/",
        color: "#121063",
      },
      {
        img: "https://i.shgcdn.com/2395213a-7138-4c84-b73f-88665413d216/-/format/auto/-/preview/3000x3000/-/quality/best/",
        color: "#3ab7bf",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiykUGPhw1CndoPPFzoyK9IBJhwGFDEV6Xg&s",
        color: "#78dcca",
      },
      {
        img: "https://prototypist.net/cdn/shop/files/17_15a29863-527c-4a2a-9973-90cf854f224c.jpg?v=1726145638&width=2000",
        color: "",
      },
    ],
    status: StatusEnum.InComing,
    rating: { totalRating: 11, averageRating: 4.7 },
  },

  // {
  //   keyboardId: "b62e8f69-c3e6-4dd3-bdf2-5c357363ee2a",
  //   name: "Qk 65",
  //   oldPrice: 5300000,
  //   newPrice: 4505000,
  //   discount: 15,
  //   description:
  //     "Bàn phím cơ QK65 - sự lựa chọn hoàn hảo cho người mới bắt đầu với budget hợp lý. Thiết kế 65% với top mount structure, case nhôm CNC chắc chắn và đa dạng màu sắc. PCB hỗ trợ hotswap, VIA/QMK compatible và USB-C connectivity.",
  //   colors: ["#121063", "#3ab7bf", "#78dcca"],
  //   images: [
  //     "https://cdn.store-assets.com/s/402514/f/9356804.jpeg",
  //     "https://cdn.candykeys.com/public/10476/conversions/5-webp.webp",
  //     "https://keebsforall.com/cdn/shop/files/qk60-caburgundygold.jpg?v=1703283627",
  //     "https://keebsforall.com/cdn/shop/files/qk60-cablackdusk.jpg?v=1703283627",
  //     "https://prototypist.net/cdn/shop/products/E-CoatedIceWhiteAlu_AnodizedBurgundyAlu_SandblastedPvdGoldenStainlessSteelWkl_dc564b81-27ea-449b-b8dd-f87a2c2a6145.jpg?v=1679318146&width=1000",
  //     "https://cdn.store-assets.com/s/402514/i/48392288.jpeg?width=1024",
  //   ],
  //   status: StatusEnum.InComing,
  //   rating: { totalRating: 20, averageRating: 4.2 },
  // },
  // {
  //   keyboardId: "6cd8fcda-0ff5-4502-84f5-cfb656aa8a33",
  //   name: "Cycle 7",
  //   oldPrice: 4240000,
  //   newPrice: 4028000,
  //   discount: 5,
  //   description:
  //     "Bàn phím cơ Cycle 7 với thiết kế 65% minimalist và tinh tế. Sở hữu unique mounting system kết hợp giữa top mount và gasket mount, mang lại flex pattern độc đáo. Case được gia công từ nhôm 6061 với finish matte premium. PCB support rotary encoder, hotswap switches và RGB per-key.",
  //   colors: ["#121063", "#3ab7bf", "#78dcca"],
  //   images: [
  //     "https://i.imgur.com/eaDr77s.jpg",
  //     "https://i.imgur.com/8tDek7S.jpg",
  //     "https://clickclack.io/cdn/shop/files/cycle7.webp?v=1683561067&width=2400",
  //     "https://clickclack.io/cdn/shop/files/DM_20230510120248_025.webp?v=1684560509&width=2400",
  //     "https://kukey.studio/cdn/shop/files/1_d0a4dc19-7c4c-401e-8db7-bdf4545bed72_750x.png?v=1709892420",
  //   ],
  //   status: StatusEnum.InComing,
  //   rating: { totalRating: 34, averageRating: 3.7 },
  // },
  // {
  //   keyboardId: "9c382da9-7dd4-4aa7-a99c-dcfe41ada6e1",
  //   name: "Zoom 65 V3",
  //   oldPrice: 3225000,
  //   newPrice: 2999250,
  //   discount: 7,
  //   description:
  //     "Bàn phím cơ Zoom 65 V3 - phiên bản nâng cấp với innovative features. Nổi bật với accent LED strip và optional tail light system tạo điểm nhấn thẩm mỹ. Gasket mount design với improved flex cuts, hotswap PCB hỗ trợ southfacing switches.",
  //   colors: ["#121063", "#3ab7bf", "#78dcca"],
  //   images: [
  //     "https://keebsforall.com/cdn/shop/files/Zoom65v3_NoTailLight_Black.webp?v=1719510457",
  //     "https://prototypist.net/cdn/shop/files/Zoom65v3_Accent_On.png?v=1718201570&width=1920",
  //     "https://bizweb.dktcdn.net/100/438/322/products/zoom65v3-taillight-frosted-lavenderse-1717476571596-71cc0a52-1f9a-4afd-9141-4d055b1e32d0.jpg?v=1736397566340",
  //     "https://meletrix.com/cdn/shop/files/Zoom65v3_NoTailLight_VivaMagenta.jpg?v=1719395970&width=1920",
  //   ],
  //   status: StatusEnum.InComing,
  //   rating: { totalRating: 29, averageRating: 4.2 },
  // },
  // {
  //   keyboardId: "4387acd7-b76b-4f02-9599-a7d0c3b43beb",
  //   name: "Neo 80 TKL",
  //   oldPrice: 5323000,
  //   newPrice: 4684240,
  //   discount: 12,
  //   description:
  //     "Bàn phím cơ Neo 80 TKL với form factor 80% (TKL - Ten Key Less) cân bằng giữa functionality và compactness. Thiết kế gasket mount system với unique badge logo, case nhôm anodized cao cấp. PCB hotswap với south-facing sockets.",
  //   colors: ["#121063", "#3ab7bf", "#78dcca"],
  //   images: [
  //     "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/550c85e3-55d9-4802-9c98-e8c1a3845ddb_rw_1920.jpg?h=733346282d51c9ff4a730f5701f169d6",
  //     "https://cdn.myportfolio.com/44c2fc27-a1ba-4d7f-80ab-886a492e5ba9/505a40ea-3a8b-4cd9-84f3-ffc2e1f0bc70_rw_1920.jpg?h=e2eb33f682da38ffdc122287c8bdda0f",
  //     "https://monacokeys.de/cdn/shop/files/preorder-neo80-isoansi-keyboard-kit-113062.jpg?v=1713429494",
  //     "https://cdn.shopify.com/s/files/1/0508/8716/4061/files/Raw_small_86970455-9fa3-460f-97c1-6ecbd3103699.jpg?v=1713931790",
  //   ],
  //   status: StatusEnum.InComing,
  //   rating: { totalRating: 31, averageRating: 4.2 },
  // },
  // {
  //   keyboardId: "60a29ad5-1d73-480e-a11f-966343a1397f",
  //   name: "Cruel World CW88",
  //   oldPrice: 22390000,
  //   newPrice: 18583700,
  //   discount: 17,
  //   description:
  //     "Bàn phím cơ ultra-premium Cruel World CW88 - đỉnh cao của craftsmanship và innovation. Limited edition với thiết kế TKL layout, case được gia công từ nhôm aerospace-grade với unique colorways. Tích hợp advanced gasket mount system.",
  //   colors: ["#121063", "#3ab7bf", "#78dcca"],
  //   images: [
  //     "https://bizweb.dktcdn.net/100/499/624/files/z4654940921303-3dbf1cd83c44a61a6270f66535262165.jpg?v=1713792120135",
  //     "https://bizweb.dktcdn.net/100/499/624/files/z4654940935310-3d50f05eddf02e91fff96ab4044baab3.jpg?v=1713792123191",
  //     "https://preview.redd.it/cw88-cruel-world-skunkworkxxx-le-v0-k7659blhr6va1.jpg?width=640&crop=smart&auto=webp&s=4dfe4cc7ffd1ce7d7fc59f1fd95aabe236ecb155",
  //     "https://preview.redd.it/cw88-cruel-world-skunkworkxxx-le-v0-48950alhr6va1.jpg?width=640&crop=smart&auto=webp&s=9c599df1780fa88996cca7d5d808dc33e8d21fb3",
  //     "https://i.redd.it/cw88-cruel-world-skunkworkxxx-le-v0-i301bclhr6va1.jpg?width=3024&format=pjpg&auto=webp&s=40e4828d1f408b2fbc82a6fdcd872d66b1d3bf3e",
  //   ],
  //   status: StatusEnum.InComing,
  //   rating: { totalRating: 120, averageRating: 4.2 },
  // },
];
