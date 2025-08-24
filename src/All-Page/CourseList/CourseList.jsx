import React, { useState } from "react";

const moreProducts = [
  {
    id: 1,
    name: "Jewelry Box",
    description: "Beautifully carved wooden box to keep your precious jewelry safe.",
    price: "$85.00",
    image: "https://storage.googleapis.com/a1aa/image/d45b36b0-d797-46ca-973e-2023b40efd83.jpg",
  },
  {
    id: 2,
    name: "Ceramic Mugs Set",
    description: "Set of 4 hand-painted mugs perfect for your morning coffee.",
    price: "$70.00",
    image: "https://storage.googleapis.com/a1aa/image/75a863e8-f3de-47e2-7936-fddf0d9ad468.jpg",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    description: "Elegant macrame wall art to add texture and warmth to your space.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/94deea30-c869-457d-66e6-4c2093507dc5.jpg",
  },
  {
    id: 4,
    name: "Wooden Lamp",
    description: "Stylish wooden lamp for cozy lighting.",
    price: "$90.00",
    image: "https://storage.googleapis.com/a1aa/image/9a9a9f82-49b8-4a58-a12a-ecb3b1a1b234.jpg",
  },
  {
    id: 5,
    name: "Handmade Rug",
    description: "Colorful handmade rug to brighten your room.",
    price: "$120.00",
    image: "https://storage.googleapis.com/a1aa/image/5cfd8e98-d7a1-43c1-a3a4-fdb9828a3f6f.jpg",
  },
    {
    id: 4,
    name: "Linen Table Runner",
    description: "Hand-dyed linen table runner to enhance your dining experience.",
    price: "$50.00",
    image: "https://storage.googleapis.com/a1aa/image/61d691ac-6e64-4644-234d-1a1ba578886c.jpg",
  },
  {
    id: 5,
    name: "Pottery Bowl",
    description: "Unique hand-thrown bowl perfect for serving or decoration.",
    price: "$40.00",
    image: "https://storage.googleapis.com/a1aa/image/105ffd42-aa2a-4494-7967-75543663d109.jpg",
  },
  {
    id: 6,
    name: "Soy Candles Set",
    description: "Set of 3 eco-friendly scented soy candles for a cozy atmosphere.",
    price: "$35.00",
    image: "https://storage.googleapis.com/a1aa/image/e5c89c3e-e5b2-4c4a-6b11-9147d2486367.jpg",
  },
  {
    id: 7,
    name: "Serving Tray",
    description: "Hand-painted wooden tray perfect for serving or decoration.",
    price: "$55.00",
    image: "https://storage.googleapis.com/a1aa/image/aae386be-bfa7-4837-808a-0abf89a19fd7.jpg",
  },
  {
    id: 8,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 9,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DPrxJLnG/istockphoto-619756548-612x612.jpg",
  },
  {
    id: 10,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DH2Jv0Pz/istockphoto-649807586-612x612.jpg",
  },
  {
    id: 11,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/35xwM8Mw/istockphoto-645313722-612x612.jpg",
  },
  {
    id: 12,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/PvtnLdcp/istockphoto-683962492-612x612.jpg",
  },
  {
    id: 13,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/sdtDXVtJ/istockphoto-844403354-612x612.jpg",
  },
  {
    id: 14,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/LzPByrG7/istockphoto-874158296-612x612.jpg",
  },
  {
    id: 15,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/6JbzzHHD/istockphoto-1092466886-612x612.jpg",
  },
  {
    id: 16,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 17,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/ns3NMxx2/istockphoto-1189460417-612x612.jpg",
  },
  {
    id: 18,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/RkHSzCyG/istockphoto-1264095926-612x612.jpg",
  },
  {
    id: 19,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/2Y1Y8YFv/istockphoto-1280637493-612x612.jpg",
  },
  {
    id: 20,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/hF5rvYBF/istockphoto-1290849061-612x612.jpg",
  },
  {
    id: 21,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 22,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 23,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/F41fQSn7/istockphoto-1312318087-612x612.jpg",
  },
  {
    id: 24,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/Z6RgYHVh/istockphoto-1356095569-612x612.jpg",
  },
  {
    id: 25,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DfZdyHXY/istockphoto-1390994416-612x612.jpg",
  },
  {
    id: 26,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/VWYs5Pwn/istockphoto-1433928619-612x612.jpg",
  },
  {
    id: 27,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/3mcyswjs/istockphoto-1456200802-612x612.jpg",
  },
  {
    id: 28,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nM1g2tds/istockphoto-1456201590-612x612.jpg",
  },
  {
    id: 29,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/fzVVZwbt/istockphoto-1507371420-612x612.jpg",
  },
  {
    id: 30,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/wNx06DsB/istockphoto-1973069325-612x612.jpg",
  },
  {
    id: 31,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nZ9StDx/istockphoto-2173405937-612x612.jpg",
  },
  {
    id: 1,
    name: "Jewelry Box",
    description: "Beautifully carved wooden box to keep your precious jewelry safe.",
    price: "$85.00",
    image: "https://storage.googleapis.com/a1aa/image/d45b36b0-d797-46ca-973e-2023b40efd83.jpg",
  },
  {
    id: 2,
    name: "Ceramic Mugs Set",
    description: "Set of 4 hand-painted mugs perfect for your morning coffee.",
    price: "$70.00",
    image: "https://storage.googleapis.com/a1aa/image/75a863e8-f3de-47e2-7936-fddf0d9ad468.jpg",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    description: "Elegant macrame wall art to add texture and warmth to your space.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/94deea30-c869-457d-66e6-4c2093507dc5.jpg",
  },
  {
    id: 4,
    name: "Linen Table Runner",
    description: "Hand-dyed linen table runner to enhance your dining experience.",
    price: "$50.00",
    image: "https://storage.googleapis.com/a1aa/image/61d691ac-6e64-4644-234d-1a1ba578886c.jpg",
  },
  {
    id: 5,
    name: "Pottery Bowl",
    description: "Unique hand-thrown bowl perfect for serving or decoration.",
    price: "$40.00",
    image: "https://storage.googleapis.com/a1aa/image/105ffd42-aa2a-4494-7967-75543663d109.jpg",
  },
  {
    id: 6,
    name: "Soy Candles Set",
    description: "Set of 3 eco-friendly scented soy candles for a cozy atmosphere.",
    price: "$35.00",
    image: "https://storage.googleapis.com/a1aa/image/e5c89c3e-e5b2-4c4a-6b11-9147d2486367.jpg",
  },
  {
    id: 7,
    name: "Serving Tray",
    description: "Hand-painted wooden tray perfect for serving or decoration.",
    price: "$55.00",
    image: "https://storage.googleapis.com/a1aa/image/aae386be-bfa7-4837-808a-0abf89a19fd7.jpg",
  },
  {
    id: 8,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 9,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DPrxJLnG/istockphoto-619756548-612x612.jpg",
  },
  {
    id: 10,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DH2Jv0Pz/istockphoto-649807586-612x612.jpg",
  },
  {
    id: 11,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/35xwM8Mw/istockphoto-645313722-612x612.jpg",
  },
  {
    id: 12,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/PvtnLdcp/istockphoto-683962492-612x612.jpg",
  },
  {
    id: 13,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/sdtDXVtJ/istockphoto-844403354-612x612.jpg",
  },
  {
    id: 14,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/LzPByrG7/istockphoto-874158296-612x612.jpg",
  },
  {
    id: 15,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/6JbzzHHD/istockphoto-1092466886-612x612.jpg",
  },
  {
    id: 16,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 17,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/ns3NMxx2/istockphoto-1189460417-612x612.jpg",
  },
  {
    id: 18,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/RkHSzCyG/istockphoto-1264095926-612x612.jpg",
  },
  {
    id: 19,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/2Y1Y8YFv/istockphoto-1280637493-612x612.jpg",
  },
  {
    id: 20,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/hF5rvYBF/istockphoto-1290849061-612x612.jpg",
  },
  {
    id: 21,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 22,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 23,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/F41fQSn7/istockphoto-1312318087-612x612.jpg",
  },
  {
    id: 24,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/Z6RgYHVh/istockphoto-1356095569-612x612.jpg",
  },
  {
    id: 25,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DfZdyHXY/istockphoto-1390994416-612x612.jpg",
  },
  {
    id: 26,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/VWYs5Pwn/istockphoto-1433928619-612x612.jpg",
  },
  {
    id: 27,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/3mcyswjs/istockphoto-1456200802-612x612.jpg",
  },
  {
    id: 28,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nM1g2tds/istockphoto-1456201590-612x612.jpg",
  },
  {
    id: 29,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/fzVVZwbt/istockphoto-1507371420-612x612.jpg",
  },
  {
    id: 30,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/wNx06DsB/istockphoto-1973069325-612x612.jpg",
  },
  {
    id: 31,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nZ9StDx/istockphoto-2173405937-612x612.jpg",
  },
  {
    id: 1,
    name: "Jewelry Box",
    description: "Beautifully carved wooden box to keep your precious jewelry safe.",
    price: "$85.00",
    image: "https://storage.googleapis.com/a1aa/image/d45b36b0-d797-46ca-973e-2023b40efd83.jpg",
  },
  {
    id: 2,
    name: "Ceramic Mugs Set",
    description: "Set of 4 hand-painted mugs perfect for your morning coffee.",
    price: "$70.00",
    image: "https://storage.googleapis.com/a1aa/image/75a863e8-f3de-47e2-7936-fddf0d9ad468.jpg",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    description: "Elegant macrame wall art to add texture and warmth to your space.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/94deea30-c869-457d-66e6-4c2093507dc5.jpg",
  },
  {
    id: 4,
    name: "Linen Table Runner",
    description: "Hand-dyed linen table runner to enhance your dining experience.",
    price: "$50.00",
    image: "https://storage.googleapis.com/a1aa/image/61d691ac-6e64-4644-234d-1a1ba578886c.jpg",
  },
  {
    id: 5,
    name: "Pottery Bowl",
    description: "Unique hand-thrown bowl perfect for serving or decoration.",
    price: "$40.00",
    image: "https://storage.googleapis.com/a1aa/image/105ffd42-aa2a-4494-7967-75543663d109.jpg",
  },
  {
    id: 6,
    name: "Soy Candles Set",
    description: "Set of 3 eco-friendly scented soy candles for a cozy atmosphere.",
    price: "$35.00",
    image: "https://storage.googleapis.com/a1aa/image/e5c89c3e-e5b2-4c4a-6b11-9147d2486367.jpg",
  },
  {
    id: 7,
    name: "Serving Tray",
    description: "Hand-painted wooden tray perfect for serving or decoration.",
    price: "$55.00",
    image: "https://storage.googleapis.com/a1aa/image/aae386be-bfa7-4837-808a-0abf89a19fd7.jpg",
  },
  {
    id: 8,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 9,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DPrxJLnG/istockphoto-619756548-612x612.jpg",
  },
  {
    id: 10,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DH2Jv0Pz/istockphoto-649807586-612x612.jpg",
  },
  {
    id: 11,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/35xwM8Mw/istockphoto-645313722-612x612.jpg",
  },
  {
    id: 12,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/PvtnLdcp/istockphoto-683962492-612x612.jpg",
  },
  {
    id: 13,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/sdtDXVtJ/istockphoto-844403354-612x612.jpg",
  },
  {
    id: 14,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/LzPByrG7/istockphoto-874158296-612x612.jpg",
  },
  {
    id: 15,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/6JbzzHHD/istockphoto-1092466886-612x612.jpg",
  },
  {
    id: 16,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 17,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/ns3NMxx2/istockphoto-1189460417-612x612.jpg",
  },
  {
    id: 18,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/RkHSzCyG/istockphoto-1264095926-612x612.jpg",
  },
  {
    id: 19,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/2Y1Y8YFv/istockphoto-1280637493-612x612.jpg",
  },
  {
    id: 20,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/hF5rvYBF/istockphoto-1290849061-612x612.jpg",
  },
  {
    id: 21,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 22,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 23,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/F41fQSn7/istockphoto-1312318087-612x612.jpg",
  },
  {
    id: 24,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/Z6RgYHVh/istockphoto-1356095569-612x612.jpg",
  },
  {
    id: 25,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DfZdyHXY/istockphoto-1390994416-612x612.jpg",
  },
  {
    id: 26,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/VWYs5Pwn/istockphoto-1433928619-612x612.jpg",
  },
  {
    id: 27,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/3mcyswjs/istockphoto-1456200802-612x612.jpg",
  },
  {
    id: 28,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nM1g2tds/istockphoto-1456201590-612x612.jpg",
  },
  {
    id: 29,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/fzVVZwbt/istockphoto-1507371420-612x612.jpg",
  },
  {
    id: 30,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/wNx06DsB/istockphoto-1973069325-612x612.jpg",
  },
  {
    id: 31,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nZ9StDx/istockphoto-2173405937-612x612.jpg",
  },
  {
    id: 1,
    name: "Jewelry Box",
    description: "Beautifully carved wooden box to keep your precious jewelry safe.",
    price: "$85.00",
    image: "https://storage.googleapis.com/a1aa/image/d45b36b0-d797-46ca-973e-2023b40efd83.jpg",
  },
  {
    id: 2,
    name: "Ceramic Mugs Set",
    description: "Set of 4 hand-painted mugs perfect for your morning coffee.",
    price: "$70.00",
    image: "https://storage.googleapis.com/a1aa/image/75a863e8-f3de-47e2-7936-fddf0d9ad468.jpg",
  },
  {
    id: 3,
    name: "Macrame Wall Hanging",
    description: "Elegant macrame wall art to add texture and warmth to your space.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/94deea30-c869-457d-66e6-4c2093507dc5.jpg",
  },
  {
    id: 4,
    name: "Linen Table Runner",
    description: "Hand-dyed linen table runner to enhance your dining experience.",
    price: "$50.00",
    image: "https://storage.googleapis.com/a1aa/image/61d691ac-6e64-4644-234d-1a1ba578886c.jpg",
  },
  {
    id: 5,
    name: "Pottery Bowl",
    description: "Unique hand-thrown bowl perfect for serving or decoration.",
    price: "$40.00",
    image: "https://storage.googleapis.com/a1aa/image/105ffd42-aa2a-4494-7967-75543663d109.jpg",
  },
  {
    id: 6,
    name: "Soy Candles Set",
    description: "Set of 3 eco-friendly scented soy candles for a cozy atmosphere.",
    price: "$35.00",
    image: "https://storage.googleapis.com/a1aa/image/e5c89c3e-e5b2-4c4a-6b11-9147d2486367.jpg",
  },
  {
    id: 7,
    name: "Serving Tray",
    description: "Hand-painted wooden tray perfect for serving or decoration.",
    price: "$55.00",
    image: "https://storage.googleapis.com/a1aa/image/aae386be-bfa7-4837-808a-0abf89a19fd7.jpg",
  },
  {
    id: 8,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 9,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DPrxJLnG/istockphoto-619756548-612x612.jpg",
  },
  {
    id: 10,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DH2Jv0Pz/istockphoto-649807586-612x612.jpg",
  },
  {
    id: 11,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/35xwM8Mw/istockphoto-645313722-612x612.jpg",
  },
  {
    id: 12,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/PvtnLdcp/istockphoto-683962492-612x612.jpg",
  },
  {
    id: 13,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/sdtDXVtJ/istockphoto-844403354-612x612.jpg",
  },
  {
    id: 14,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/LzPByrG7/istockphoto-874158296-612x612.jpg",
  },
  {
    id: 15,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/6JbzzHHD/istockphoto-1092466886-612x612.jpg",
  },
  {
    id: 16,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://storage.googleapis.com/a1aa/image/f057d1cb-2cda-4502-b0ac-9f5e99cab47e.jpg",
  },
  {
    id: 17,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/ns3NMxx2/istockphoto-1189460417-612x612.jpg",
  },
  {
    id: 18,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/RkHSzCyG/istockphoto-1264095926-612x612.jpg",
  },
  {
    id: 19,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/2Y1Y8YFv/istockphoto-1280637493-612x612.jpg",
  },
  {
    id: 20,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/hF5rvYBF/istockphoto-1290849061-612x612.jpg",
  },
  {
    id: 21,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 22,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/vSmDTPv/istockphoto-1294842453-612x612.jpg",
  },
  {
    id: 23,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/F41fQSn7/istockphoto-1312318087-612x612.jpg",
  },
  {
    id: 24,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/Z6RgYHVh/istockphoto-1356095569-612x612.jpg",
  },
  {
    id: 25,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/DfZdyHXY/istockphoto-1390994416-612x612.jpg",
  },
  {
    id: 26,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/VWYs5Pwn/istockphoto-1433928619-612x612.jpg",
  },
  {
    id: 27,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/3mcyswjs/istockphoto-1456200802-612x612.jpg",
  },
  {
    id: 28,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nM1g2tds/istockphoto-1456201590-612x612.jpg",
  },
  {
    id: 29,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/fzVVZwbt/istockphoto-1507371420-612x612.jpg",
  },
  {
    id: 30,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/wNx06DsB/istockphoto-1973069325-612x612.jpg",
  },
  {
    id: 31,
    name: "Leather Journal",
    description: "Hand-stitched journal perfect for notes, sketches, or journaling.",
    price: "$65.00",
    image: "https://i.ibb.co.com/nZ9StDx/istockphoto-2173405937-612x612.jpg",
  },
];

export default function CourseList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  // Filter products by search
  const filteredProducts = moreProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="text-white font-roboto">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20 ">
        {/* Search Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center mb-10"
        >
          <input
            type="text"
            placeholder="Search product by name..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to page 1 on search
            }}
            className="w-full sm:w-1/2 px-4 py-2 border  border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </form>

        <h2 className="text-3xl font-playfair font-bold text-whitemb-10 text-center">
          Product List
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <article
                key={product.id}
                className="relative text-whiterounded-2xl px-5 py-2  shadow-lg hover:shadow-cyan-600/70 transition duration-1500 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-whitemb-2">
                    {product.name}
                  </h3>
                  <p className="text-whitemb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-whitefont-bold text-lg">
                      {product.price}
                    </span>
                    <button
                      onClick={() => openModal(product)}
                      className="text-white bg-gray-900 px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No products found
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-300">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0  flex items-center justify-center z-70">
          <div className="border-2 rounded-lg shadow-lg bg-gray-900 max-w-md w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-whitehover:text-whitetext-2xl"
              onClick={closeModal}
              aria-label="Close modal"
            >
              &times;
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-whitemb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-whitemb-4">{selectedProduct.description}</p>
            <span className="text-whitefont-bold text-lg">
              {selectedProduct.price}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
