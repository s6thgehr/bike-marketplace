import BikeType from "../utils/bike_type";

const bikes = [
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Trek Fuel EX 9.8",
        type: BikeType.mountain.toString(),
        serialNumber: "6PG10020205",
        description:
            "A full suspension mountain bike designed for aggressive trail riding and technical descents.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Specialized S-Works Venge",
        type: BikeType.road.toString(),
        serialNumber: "7LG10460498",
        description:
            "A high-performance road bike with a carbon fiber frame and aerodynamic design.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Scott Genius 920",
        type: BikeType.mountain.toString(),
        serialNumber: "2BV81730101",
        description:
            "A full suspension mountain bike with a lightweight aluminum frame and 150mm of front and rear travel.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Cannondale Synapse Carbon",
        type: BikeType.road.toString(),
        serialNumber: "1KI57291748",
        description:
            "A endurance road bike with a comfortable and upright riding position and a lightweight carbon fiber frame.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Giant Trance 2",
        type: BikeType.mountain.toString(),
        serialNumber: "2HI19037426",
        description: "",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Ibis Ripley LS",
        type: BikeType.mountain.toString(),
        serialNumber: "5TG22145789",
        description: "",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Santa Cruz Hightower LT",
        type: BikeType.mountain.toString(),
        serialNumber: "9JX17582093",
        description: "",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Orbea Orca M30",
        type: BikeType.road.toString(),
        serialNumber: "7ZS17583420",
        description: "",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Kona Process 153",
        type: BikeType.mountain.toString(),
        serialNumber: "1YH3756537",
        description: "",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Fuji Transonic 2.1",
        type: BikeType.road.toString(),
        serialNumber: "9LM44536279",
        description: "",
    },

    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Trek Verve 3",
        type: BikeType.hybrid.toString(),
        serialNumber: "3RT38476090",
        description:
            "A versatile hybrid bike with a lightweight aluminum frame and a comfortable, upright riding position.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Giant Escape 2",
        type: BikeType.hybrid.toString(),
        serialNumber: "1BV12756393",
        description:
            "A hybrid bike with a lightweight aluminum frame and a combination of road and mountain bike components for versatility on different terrain.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Schwinn Sanctuary 7",
        type: BikeType.cruiser.toString(),
        serialNumber: "3QA73759238",
        description:
            "A classic cruiser bike with a comfortable upright riding position, balloon tires, and a retro-style frame.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Electra Townie Go!",
        type: BikeType.cruiser.toString(),
        serialNumber: "1IW72652311",
        description:
            "An electric cruiser bike with a comfortable upright riding position and a step-through frame for easy on and off.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Surly Long Haul Trucker",
        type: BikeType.touring.toString(),
        serialNumber: "8YS72645519",
        description:
            "A touring bike with a sturdy steel frame, wide gear range, and the ability to carry a lot of gear.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Salsa Fargo",
        type: BikeType.touring.toString(),
        serialNumber: "8WZ12746352",
        description:
            "A touring bike with a sturdy steel frame and a wide range of gears, designed for off-road touring and adventure riding.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Trek Crockett",
        type: BikeType.cyclocross.toString(),
        serialNumber: "1UH36798973",
        description:
            "A cyclocross bike with a lightweight aluminum frame, responsive handling, and clearance for wide tires.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Specialized CruX",
        type: BikeType.cyclocross.toString(),
        serialNumber: "8ZM27615417",
        description:
            "A cyclocross bike with a lightweight carbon fiber frame and aggressive geometry for racing and fast handling.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Pure Cycles Original Fixie",
        type: BikeType.fixie.toString(),
        serialNumber: "2UJ72645104",
        description:
            "A simple and lightweight fixie bike with a high-tensile steel frame and flip-flop hub for fixed or freewheel riding.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "State Bicycle Co. Core-Line",
        type: BikeType.fixie.toString(),
        serialNumber: "1GC27623491",
        description:
            "Fixie: A fixie bike with a lightweight aluminum frame and a variety of color options to choose from.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "WOOM 3 Plus",
        type: BikeType.single_speed.toString(),
        serialNumber: "1SP84726151",
        description:
            "A lightweight single speed bike with a low standover height and a child-friendly design.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "SE Bikes Big Ripper",
        type: BikeType.single_speed.toString(),
        serialNumber: "0OS17642981",
        description:
            "A retro-style single speed bike with a sturdy steel frame and 29-inch wheels for a smooth ride.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Brompton M6L",
        type: BikeType.folding.toString(),
        serialNumber: "2FD92876253",
        description:
            "A compact folding bike with a sturdy steel frame and six gears for tackling hills.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Tern Link D8",
        type: BikeType.folding.toString(),
        serialNumber: "2OI83756209",
        description:
            "A folding bike with a lightweight aluminum frame and eight gears for versatility in different terrain.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "Pedego City Commuter",
        type: BikeType.electric.toString(),
        serialNumber: "3PE98725173",
        description:
            "A electric bike with a comfortable upright riding position and a long-range battery for commuting.",
    },
    {
        imageUrl: "sfd",
        price: "120.50",
        location: {
            lat: "12",
            lon: "43",
        },
        model: "RadPower RadMission",
        type: BikeType.electric.toString(),
        serialNumber: "2EB84628114",
        description:
            "A electric bike with a sturdy steel frame and a powerful motor for tackling hills and off-road trails.",
    },
];
