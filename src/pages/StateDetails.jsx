import { useParams, Link } from "react-router-dom";


export default function StateDetails() {
  const { stateName } = useParams();

  const statesData = {
    goa: {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
      capital: "Panaji",
      bestTime: "November - February",
      culture: "Portuguese influence mixed with Indian culture.",
      places: [
        "Baga Beach",
        "Calangute Beach",
        "Dudhsagar Falls",
        "Old Goa"
      ],
      nearby: [
        "Gokarna",
        "Karwar",
        "Dandeli",
        "Amboli"
      ],
      food: [
        "Fish Curry",
        "Bebinca",
        "Prawn Balchao"
      ],
      thingsToDo: [
        "Scuba Diving",
        "Parasailing",
        "Boat Cruise",
        "Beach Party"
      ]
    },

    rajasthan: {
      name: "Rajasthan",
      image:
        "https://images.unsplash.com/photo-1709620220232-12ecd7ca33a8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capital: "Jaipur",
      bestTime: "October - March",
      culture: "Royal heritage and vibrant folk traditions.",
      places: [
        "Hawa Mahal",
        "Amer Fort",
        "Jaisalmer Fort",
        "Udaipur"
      ],
      nearby: [
        "Pushkar",
        "Ajmer",
        "Mount Abu",
        "Bikaner"
      ],
      food: [
        "Dal Baati Churma",
        "Ghewar",
        "Laal Maas"
      ],
      thingsToDo: [
        "Desert Safari",
        "Camel Ride",
        "Fort Tours",
        "Shopping"
      ]
    },

    kerala: {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      capital: "Thiruvananthapuram",
      bestTime: "September - March",
      culture: "Known for backwaters and Ayurveda.",
      places: [
        "Munnar",
        "Alleppey",
        "Kochi",
        "Wayanad"
      ],
      nearby: [
        "Thekkady",
        "Kovalam",
        "Varkala",
        "Athirapally"
      ],
      food: [
        "Appam",
        "Kerala Sadya",
        "Puttu"
      ],
      thingsToDo: [
        "Houseboat Ride",
        "Ayurveda Spa",
        "Tea Garden Visit",
        "Trekking"
      ]
    },

    "himachal pradesh": {
      name: "Himachal Pradesh",
      image:
        "https://images.unsplash.com/photo-1657894736581-ccc35d62d9e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capital: "Shimla",
      bestTime: "March - June",
      culture: "Mountain lifestyle with rich traditions.",
      places: [
        "Manali",
        "Shimla",
        "Spiti Valley",
        "Dharamshala"
      ],
      nearby: [
        "Kasol",
        "Kullu",
        "Bir",
        "Dalhousie"
      ],
      food: [
        "Siddu",
        "Madra",
        "Babru"
      ],
      thingsToDo: [
        "Paragliding",
        "Camping",
        "Snow Trekking",
        "River Rafting"
      ]
    },
    "andhra pradesh": {
  name: "Andhra Pradesh",
  image: "https://cdn.pixabay.com/photo/2020/03/30/11/01/india-4983885_1280.jpg",
  capital: "Amaravati",
  bestTime: "October - March",
  culture: "Rich temple heritage and coastal traditions.",
  places: ["Tirupati", "Araku Valley", "Visakhapatnam", "Lepakshi"],
  nearby: ["Borra Caves", "Lambasingi", "Rajahmundry", "Srisailam"],
  food: ["Pulihora", "Gongura Pickle", "Pesarattu"],
  thingsToDo: ["Temple Visit", "Beach Walk", "Boating", "Hill Exploration"]
},

"arunachal pradesh": {
  name: "Arunachal Pradesh",
  image: "https://images.unsplash.com/photo-1668437824006-1be44600774b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Itanagar",
  bestTime: "October - April",
  culture: "Tribal traditions and Himalayan lifestyle.",
  places: ["Tawang", "Ziro Valley", "Bomdila", "Sela Pass"],
  nearby: ["Dirang", "Nuranang Falls", "Itanagar", "Namdapha"],
  food: ["Thukpa", "Momos", "Zan"],
  thingsToDo: ["Mountain Trekking", "Monastery Visits", "Camping", "Photography"]
},

"assam": {
  name: "Assam",
  image: "https://images.unsplash.com/photo-1659267695704-842a53942bcd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Dispur",
  bestTime: "November - April",
  culture: "Tea gardens and vibrant festivals.",
  places: ["Kaziranga National Park", "Majuli", "Kamakhya Temple", "Manas National Park"],
  nearby: ["Jorhat", "Sivasagar", "Tezpur", "Guwahati"],
  food: ["Khar", "Masor Tenga", "Pitha"],
  thingsToDo: ["Tea Garden Tour", "Safari", "River Cruise", "Temple Visit"]
},

"bihar": {
  name: "Bihar",
  image: "https://wallpaperaccess.com/full/3510447.jpg",
  capital: "Patna",
  bestTime: "October - March",
  culture: "Ancient Buddhist and historical heritage.",
  places: ["Bodh Gaya", "Nalanda", "Rajgir", "Patna Sahib"],
  nearby: ["Vaishali", "Gaya", "Pawapuri", "Kesaria"],
  food: ["Litti Chokha", "Khaja", "Sattu"],
  thingsToDo: ["Temple Visits", "Historical Tours", "Pilgrimage", "Food Exploration"]
},

"chhattisgarh": {
  name: "Chhattisgarh",
  image: "https://tourmyodisha.com/wp-content/uploads/2022/01/12183979_1023224444397125_4511666881578436968_o.jpg",
  capital: "Raipur",
  bestTime: "October - February",
  culture: "Tribal culture and natural beauty.",
  places: ["Chitrakote Falls", "Tirathgarh Falls", "Kanger Valley", "Sirpur"],
  nearby: ["Jagdalpur", "Mainpat", "Raipur", "Dongargarh"],
  food: ["Chila", "Faraa", "Muthia"],
  thingsToDo: ["Waterfall Visits", "Forest Trekking", "Camping", "Wildlife Exploration"]
},

"gujarat": {
  name: "Gujarat",
  image: "https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Gandhinagar",
  bestTime: "November - February",
  culture: "Colorful festivals and rich heritage.",
  places: ["Statue of Unity", "Rann of Kutch", "Somnath", "Dwarka"],
  nearby: ["Gir National Park", "Ahmedabad", "Bhuj", "Saputara"],
  food: ["Dhokla", "Thepla", "Fafda"],
  thingsToDo: ["Desert Safari", "Temple Visit", "Wildlife Safari", "Shopping"]
},

"haryana": {
  name: "Haryana",
  image: "https://images.unsplash.com/photo-1605469237567-a39930679526?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Chandigarh",
  bestTime: "October - March",
  culture: "Blend of agriculture and modern development.",
  places: ["Kurukshetra", "Sultanpur Bird Sanctuary", "Morni Hills", "Pinjore Gardens"],
  nearby: ["Gurugram", "Panipat", "Faridabad", "Ambala"],
  food: ["Bajra Khichdi", "Kadhi", "Churma"],
  thingsToDo: ["Bird Watching", "Historical Tours", "Boating", "Nature Walks"]
},

"jharkhand": {
  name: "Jharkhand",
  image: "https://images.unsplash.com/photo-1597223772193-cc1583a495a9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Ranchi",
  bestTime: "October - March",
  culture: "Tribal traditions and forest landscapes.",
  places: ["Dassam Falls", "Hundru Falls", "Betla National Park", "Netarhat"],
  nearby: ["Ranchi", "Deoghar", "Parasnath", "Jamshedpur"],
  food: ["Dhuska", "Pitha", "Rugra"],
  thingsToDo: ["Waterfall Visits", "Safari", "Trekking", "Camping"]
},
"karnataka": {
  name: "Karnataka",
  image: "https://images.unsplash.com/photo-1659126574791-13313aa424bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Bengaluru",
  bestTime: "October - March",
  culture: "Technology hub with royal heritage.",
  places: ["Mysore Palace", "Hampi", "Coorg", "Gokarna"],
  nearby: ["Chikmagalur", "Badami", "Udupi", "Jog Falls"],
  food: ["Bisi Bele Bath", "Mysore Pak", "Neer Dosa"],
  thingsToDo: ["Heritage Tours", "Coffee Plantation Visit", "Beach Walk", "Trekking"]
},

"madhya pradesh": {
  name: "Madhya Pradesh",
  image: "https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Bhopal",
  bestTime: "October - March",
  culture: "Heart of India with rich history.",
  places: ["Khajuraho", "Sanchi", "Bhimbetka", "Orchha"],
  nearby: ["Pachmarhi", "Kanha", "Bandhavgarh", "Ujjain"],
  food: ["Poha", "Bhutte Ka Kees", "Jalebi"],
  thingsToDo: ["Wildlife Safari", "Temple Tours", "Photography", "Camping"]
},

"maharashtra": {
  name: "Maharashtra",
  image: "https://plus.unsplash.com/premium_photo-1697730489433-4a5fe8a77f96?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Mumbai",
  bestTime: "October - February",
  culture: "Modern cities blended with forts and traditions.",
  places: ["Gateway of India", "Ajanta Caves", "Ellora Caves", "Lonavala"],
  nearby: ["Mahabaleshwar", "Matheran", "Alibaug", "Pune"],
  food: ["Vada Pav", "Misal Pav", "Puran Poli"],
  thingsToDo: ["Fort Tours", "Beach Visits", "Shopping", "Road Trips"]
},

"manipur": {
  name: "Manipur",
  image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Imphal",
  bestTime: "October - March",
  culture: "Traditional dance and scenic lakes.",
  places: ["Loktak Lake", "Kangla Fort", "Keibul Lamjao", "Imphal"],
  nearby: ["Moirang", "Ukhrul", "Thoubal", "Bishnupur"],
  food: ["Eromba", "Chamthong", "Singju"],
  thingsToDo: ["Boating", "Nature Tours", "Cultural Visits", "Photography"]
},

"meghalaya": {
  name: "Meghalaya",
  image: "https://images.unsplash.com/photo-1521437620269-f477f5437820?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Shillong",
  bestTime: "September - April",
  culture: "Land of clouds and living root bridges.",
  places: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
  nearby: ["Nohkalikai Falls", "Laitlum Canyon", "Umiam Lake", "Jowai"],
  food: ["Jadoh", "Tungrymbai", "Dohneiiong"],
  thingsToDo: ["Cave Exploration", "Waterfall Visits", "Camping", "Trekking"]
},

"mizoram": {
  name: "Mizoram",
  image: "https://images.unsplash.com/photo-1640529209198-0c56ce522607?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Aizawl",
  bestTime: "October - March",
  culture: "Peaceful hills and tribal heritage.",
  places: ["Aizawl", "Reiek", "Vantawng Falls", "Champhai"],
  nearby: ["Lunglei", "Mamit", "Serchhip", "Hmuifang"],
  food: ["Bai", "Sawhchiar", "Misa Mach Poora"],
  thingsToDo: ["Hill Trekking", "Camping", "Nature Walks", "Photography"]
},

"nagaland": {
  name: "Nagaland",
  image: "https://plus.unsplash.com/premium_photo-1661893189751-eaade73d7904?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Kohima",
  bestTime: "October - May",
  culture: "Unique tribal traditions and festivals.",
  places: ["Kohima", "Dzukou Valley", "Mon", "Mokokchung"],
  nearby: ["Khonoma", "Tuophema", "Wokha", "Dimapur"],
  food: ["Smoked Pork", "Axone", "Galho"],
  thingsToDo: ["Valley Trekking", "Village Tours", "Festival Visits", "Camping"]
},

"odisha": {
  name: "Odisha",
  image: "https://images.unsplash.com/photo-1743451421396-3bf59f101d54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Bhubaneswar",
  bestTime: "October - February",
  culture: "Temple architecture and coastal beauty.",
  places: ["Puri", "Konark", "Chilika Lake", "Bhubaneswar"],
  nearby: ["Cuttack", "Gopalpur", "Satkosia", "Daringbadi"],
  food: ["Dalma", "Chhena Poda", "Pakhala Bhata"],
  thingsToDo: ["Temple Tours", "Boat Rides", "Beach Walks", "Bird Watching"]
},
"punjab": {
  name: "Punjab",
  image: "https://plus.unsplash.com/premium_photo-1697729609380-5cfe9494a7c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Chandigarh",
  bestTime: "October - March",
  culture: "Vibrant culture, Bhangra and Sikh heritage.",
  places: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Anandpur Sahib"],
  nearby: ["Amritsar", "Ludhiana", "Patiala", "Bathinda"],
  food: ["Makki Di Roti", "Sarson Da Saag", "Lassi"],
  thingsToDo: ["Temple Visit", "Border Ceremony", "Food Tour", "Shopping"]
},

"sikkim": {
  name: "Sikkim",
  image: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Gangtok",
  bestTime: "March - June",
  culture: "Buddhist monasteries and Himalayan beauty.",
  places: ["Gangtok", "Tsomgo Lake", "Nathula Pass", "Pelling"],
  nearby: ["Yumthang Valley", "Lachung", "Namchi", "Ravangla"],
  food: ["Momos", "Thukpa", "Phagshapa"],
  thingsToDo: ["Mountain Viewing", "Monastery Visit", "Trekking", "Cable Car Ride"]
},

"tamil nadu": {
  name: "Tamil Nadu",
  image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Chennai",
  bestTime: "November - February",
  culture: "Ancient temples and classical traditions.",
  places: ["Meenakshi Temple", "Ooty", "Kanyakumari", "Mahabalipuram"],
  nearby: ["Yercaud", "Rameswaram", "Kodaikanal", "Coimbatore"],
  food: ["Dosa", "Idli", "Pongal"],
  thingsToDo: ["Temple Tours", "Hill Station Visit", "Beach Walk", "Shopping"]
},

"telangana": {
  name: "Telangana",
  image: "https://images.unsplash.com/photo-1743884092589-cbfe3689ebcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Hyderabad",
  bestTime: "October - February",
  culture: "Historic forts and modern innovation.",
  places: ["Charminar", "Golconda Fort", "Ramoji Film City", "Warangal"],
  nearby: ["Yadadri", "Nagarjuna Sagar", "Medak", "Bhongir Fort"],
  food: ["Hyderabadi Biryani", "Haleem", "Double Ka Meetha"],
  thingsToDo: ["Fort Visits", "Food Tour", "Shopping", "Boating"]
},

"tripura": {
  name: "Tripura",
  image: "https://images.unsplash.com/photo-1660541545820-466ec249fe02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Agartala",
  bestTime: "October - March",
  culture: "Royal palaces and tribal traditions.",
  places: ["Ujjayanta Palace", "Neermahal", "Unakoti", "Jampui Hills"],
  nearby: ["Agartala", "Sepahijala", "Dumboor Lake", "Melaghar"],
  food: ["Mui Borok", "Chakhwi", "Mosdeng"],
  thingsToDo: ["Palace Tours", "Lake Visits", "Photography", "Nature Walk"]
},

"uttar pradesh": {
  name: "Uttar Pradesh",
  image: "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Lucknow",
  bestTime: "October - March",
  culture: "Historical monuments and spiritual centers.",
  places: ["Taj Mahal", "Varanasi", "Ayodhya", "Lucknow"],
  nearby: ["Prayagraj", "Mathura", "Vrindavan", "Sarnath"],
  food: ["Tunday Kebab", "Petha", "Bedai"],
  thingsToDo: ["Temple Visits", "Heritage Walk", "Boat Ride", "Street Food Tour"]
},

"uttarakhand": {
  name: "Uttarakhand",
  image: "https://images.unsplash.com/photo-1699974406515-2b8edd2f812a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Dehradun",
  bestTime: "March - June",
  culture: "Land of gods and Himalayan beauty.",
  places: ["Nainital", "Mussoorie", "Rishikesh", "Kedarnath"],
  nearby: ["Auli", "Haridwar", "Badrinath", "Jim Corbett"],
  food: ["Kafuli", "Aloo Ke Gutke", "Bal Mithai"],
  thingsToDo: ["River Rafting", "Trekking", "Camping", "Temple Visit"]
},

"west bengal": {
  name: "West Bengal",
  image: "https://images.unsplash.com/photo-1677306966234-367c40e489bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  capital: "Kolkata",
  bestTime: "October - March",
  culture: "Art, literature and Durga Puja celebrations.",
  places: ["Victoria Memorial", "Darjeeling", "Sundarbans", "Kalimpong"],
  nearby: ["Digha", "Shantiniketan", "Murshidabad", "Kurseong"],
  food: ["Rasgulla", "Macher Jhol", "Mishti Doi"],
  thingsToDo: ["Tea Garden Visit", "Heritage Walk", "Wildlife Safari", "Food Tour"]
}

  };

  const state = statesData[stateName];

  if (!state) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">State Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* HERO */}
     {/* HERO */}
<div
  className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden"
  style={{
    backgroundImage: `url(${state.image})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Bottom Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

    <h1
      className="
      text-5xl
      md:text-7xl
      font-extrabold
      text-white
      drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]
      "
    >
      {state.name}
    </h1>

    {/* Subtitle Pill */}
    <div
      className="
      mt-5
      inline-flex
      items-center
      gap-2
      px-4
      md:px-6
      py-2
      rounded-full
      bg-white/12
      backdrop-blur-xl
      border
      border-white/20
      shadow-[0_0_20px_rgba(255,255,255,0.05)]
      "
    >
      <span
        className="
        text-yellow-400
        text-sm
        animate-pulse
        [text-shadow:0_0_10px_#facc15]
        "
      >
        ✦
      </span>

      <span
        className="
        text-[12px]
        md:text-sm
        text-white/90
        font-medium
        "
      >
        Discover the beauty of {state.name}
      </span>
    </div>

    {/* Orange Line */}
    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-5"></div>

  </div>
</div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* INFO + PLACES */}
       <div className="grid md:grid-cols-2 gap-8 items-stretch">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-orange-500/30">
           <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
  Information
</h2>
<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-8"></div>

           <div className="space-y-5 text-lg">
  <p>
    <span className="text-slate-400">Capital</span>
    <br />
    <span className="text-white font-semibold">
      {state.capital}
    </span>
  </p>

  <p>
    <span className="text-slate-400">Best Time</span>
    <br />
    <span className="text-white font-semibold">
      {state.bestTime}
    </span>
  </p>

  <p>
    <span className="text-slate-400">Culture</span>
    <br />
    <span className="text-white font-semibold">
      {state.culture}
    </span>
  </p>
</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30">
          <h2 className="text-3xl font-bold text-white tracking-wide">
  Famous Places
</h2>

<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8 "></div>
           <div className="grid gap-3">

  {state.places.map((place, index) => (
    <Link
      key={index}
      to={`/place/${place.toLowerCase().replace(/\s+/g, "-")}`}
      className="
group
bg-white/5
backdrop-blur-md
border border-white/10
rounded-2xl
px-5 py-4
font-medium text-white
hover:bg-orange-500/100
hover:border-orange-500/50
hover:translate-x-2
focus:outline-none
focus:ring-0
transition-all duration-300
"
    >
       <div className="flex items-center justify-between">
  <span>{place}</span>
   <span className="text-orange-400 text-lg animate-pulse">
      →
    </span>
</div>
    </Link>
  ))}
</div>

</div>
          </div>

        </div>

        {/* NEARBY */}
         <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="
max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30
">
         <h2 className="text-3xl font-bold text-white tracking-wide">
  Nearby Attractions
</h2>

<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>

          <div className="flex flex-wrap gap-5">
            {state.nearby.map((place, index) => (
              <span
                key={index}
                className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* FOOD */}

        <div 
className="max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30 mt-10">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Famous Food
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>
        
          <div className="flex flex-wrap gap-4">
            {state.food.map((food, index) => (
              <span
                key={index}
                className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                {food}
              </span>
            ))}
          </div>
        </div>

        {/* THINGS TO DO */}
       <div 
className="max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30 mt-10">
           <h2 className="text-3xl font-bold text-white tracking-wide">
            Things To Do
          </h2>
 <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {state.thingsToDo.map((item, index) => (
              <div
                key={index}
                 className="
px-6
py-5
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                 {item}
              </div>
            ))}
          </div>
           </div>
        </div>
      
{/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India State by State
      </footer>

   </div>
  );
}