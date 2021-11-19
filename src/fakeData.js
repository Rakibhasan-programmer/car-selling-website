const servicesData = [
    {
        id: 1,
        key: 210,
        name: '2016 KOA Elentra SE 4dr Sedan (1.8L 4cyl 6A)',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/5_1-1.jpg',
        desc: 'A sedan is defined as a 4-door passenger car with a trunk that is separate from the passengers with a three-box body: the engine, the area for passengers, and the trunk.This is the latest KOA Elentra SE Sedan. Milege 1.8L (Will go 10 mile in 1.8L).',
        price: 10295
    },
    {
        id: 2,
        key: 211,
        name: "2018 Levro LX 570 4dr SUV 4WD (5.7L 8cyl 8A)",
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/10_1.jpg',
        desc: 'Lexus LX 570 is the top model in the LX lineup and the price of LX top model is ₹ 2.33 Crore.It returns a certified mileage of 6.9 kmpl. This 570 variant comes with an engine putting out 362 bhp @ 5600 rpm and 530 Nm @ 3200 rpm of max power and max torque respectively. Lexus LX 570 is available in Automatic (Torque Converter) transmission and offered in 4 colours: ',
        price: 90295
    },
    {
        id: 3,
        key: 212,
        name: '2018 Noex XC60 T5 Momentum SUV 2.0L Turbo',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/13_1.jpg',
        desc: 'The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque’s line-up until the A-Class arrived in 1997. The C-Class is built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries.',
        price: 80945
    },
    {
        id: 4,
        key: 213,
        name: '2017 Dossan Altema 4dr SUV 4WD (5.7L 8cyl 8A)',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/14_3.jpg',
        desc: 'The Nissan Altima is a roomy midsize sedan. Still one of Americas top-selling cars in the segment, the Altima has been part of Nissans lineup since 1993. Except for some infotainment upgrades, nothing has changed for the 2017 model year. A Midnight Edition package, including black wheels and rear spoiler, is now available. ',
        price: 78098
    },
    {
        id: 5,
        key: 214,
        name: '2009 Winger Impereza 2.5GT 4dr Sedan AWD 2.5L',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/15_4.jpg',
        desc: 'This car is loaded with features including Front, Side and Curtain Airbags, Eyesight Safety System with Forward Collision Alert and Autonomous Braking, Symetrical All Wheel Drive, Dual Zone Climate Control Air Conditioning, Reverse Camera, Proximity Key Technology with Push Button Start and Keyless Entry, Alloy Wheels, ABS Braking, Electronic Stability Programme, Touch Screen Audio with Integrated Bluetooth Phone Connectivity, Power Windows and Mirrors',
        price: 56478
    },
    {
        id: 6,
        key: 215,
        name: '2014 Seretta X1 xDrive28i 4dr SUV AWD',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/8_3.jpg',
        desc: 'If youre looking for sporty performance, respectable utility and a luxurious vibe thats all wrapped up in a small package, the 2014 BMW X1 is a great place to start your search. The X1 was introduced to the United States last year and, despite a few key competitors, it remains a stand-out in the compact luxury crossover class.',
        price: 54678
    },
    {
        id: 7,
        key: 216,
        name: '2017 Porserg XC60 T5 Momentum SUV 2.0L Turbo',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/6_2.jpg',
        desc: 'The 2017 Porserg XC60 has a comfy and roomy interior, strong engine performance, and solid safety ratings. However, a below-average predicted reliability score and clunky infotainment controls sink this SUV toward the back of the luxury compact SUV class.',
        price: 76580
    },
    {
        id: 8,
        key: 217,
        name: '2018 WMB LX 570 4dr SUV 4WD (5.7L 8cyl 8A)',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/5_4.jpg',
        desc: 'The LX is a gargantuan SUV, and really, a poor choice for urban drivers. If you rarely venture outside one of America’s more coveted urban area codes (212, 202, 213, 415) at least try on the smaller Lexus GX for size.',
        price: 44678
    },
    {
        id: 9,
        key: 218,
        name: '2018 Dossan XC60 XC60',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/9_3.jpg',
        desc: 'The Doosan® DX225LC-5 DX series boosts your performance with powerful engines and hydraulic systems. It delivers outstanding performance with the high-pressure common rail fuel system on the engine and Electronic Power Optimizing System (EPOS). Choose between four work modes, auto-idle and machine diagnostics.',
        price: 74678
    },
    {
        id: 10,
        key: 219,
        name: '2018 Jeex MX 980 4dr SUV 4WD (5.7L 8cyl 8A)',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/12_5.jpg',
        desc: 'The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque’s line-up until the A-Class arrived in 1997.',
        price: 23090
    },
    {
        id: 11,
        key: 220,
        name: '2018 Noex MC90BC T5 Momentum SUV 2.0L Turbo',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/4_3.jpg',
        desc: 'Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque’s line-up until the A-Class arrived in 1997. The C-Class is built at Mercedes-Benz factories in Sindelfingen and Bremen, Germany as well as numerous satellite factories in other countries. The first C-Class (W202) sedan was produced on 1 June 1993, and the first of the second generation (W203) rolled off the assembly line on 18 July 2000.',
        price: 33090
    },
    {
        id: 12,
        key: 221,
        name: '2016 WMB Elentra 45 SE 4dr Sedan (1.8L 4cyl 6A)',
        image: 'https://smartdata.tonytemplates.com/caleader/wp-content/uploads/2018/10/1_1.jpg',
        desc: 'The Hyundai Elantra has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1493 cc while the Petrol engine is 1999 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Elantra has a mileage of 14.59 to 14.62 kmpl & Ground clearance of Elantra is 167mm. The Elantra is a 5 seater 4 cylinder car and has ',
        price: 93090
    }
]