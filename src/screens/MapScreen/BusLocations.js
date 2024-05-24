// import React, { useState } from 'react';

// export const BusLocations = () => {
//   const [locations, setLocations] = useState({
//     "342-F (Kempegowda Bus Station → Sarjapura Bus Stand)": { 
//         name: "342-F", 
//         route: "Kempegowda Bus Station -> Sarjapura Bus Stand", 
//         latitude: 12.922552, 
//         longitude: 77.618765 
//     }, 
//     "500-EB (Baiyappanahalli Metro Station → Electronic City Wipro Main Gate)": { 
//         name: "500-EB", 
//         route: "Baiyappanahalli Metro Station -> Electronic City Wipro Main Gate", 
//         latitude: 13.079141, 
//         longitude: 77.736554 
//     },
//     "365 (Majestic Bus Station → Bannerghatta National Park)": { 
//         name: "365", 
//         route: "Majestic Bus Station -> Bannerghatta National Park", 
//         latitude: 12.943192, 
//         longitude: 77.533267 
//     },
//     "201 (Marathahalli Bridge → Banashankari)": { 
//         name: "201", 
//         route: "Marathahalli Bridge -> Banashankari", 
//         latitude: 12.959172, 
//         longitude: 77.701194 
//     },
//     "215 (Kempegowda Bus Station → Yelahanka Satellite Town)": { 
//         name: "215", 
//         route: "Kempegowda Bus Station -> Yelahanka Satellite Town", 
//         latitude: 13.098172, 
//         longitude: 77.574354 
//     },
//     "270 (Hebbal → Silk Board Junction)": { 
//         name: "270", 
//         route: "Hebbal -> Silk Board Junction", 
//         latitude: 12.917232, 
//         longitude: 77.623456 
//     },
//     "335E (Kempegowda International Airport → HSR Layout)": { 
//         name: "335E", 
//         route: "Kempegowda International Airport -> HSR Layout", 
//         latitude: 12.908136, 
//         longitude: 77.646391 
//     },
//     "500K (K.R. Market → Whitefield)": { 
//         name: "500K", 
//         route: "K.R. Market -> Whitefield", 
//         latitude: 12.969801, 
//         longitude: 77.749955 
//     },
//     "600 (Mysore Road Satellite Bus Station → ITPL)": { 
//         name: "600", 
//         route: "Mysore Road Satellite Bus Station -> ITPL", 
//         latitude: 12.987347, 
//         longitude: 77.737318 
//     },
//     "411G (Jayanagar 4th Block → Kengeri Satellite Town)": { 
//         name: "411G", 
//         route: "Jayanagar 4th Block -> Kengeri Satellite Town", 
//         latitude: 12.938164, 
//         longitude: 77.533509 
//     },
//     "7 (Shivajinagar Bus Station → Vijayanagar)": { 
//         name: "7", 
//         route: "Shivajinagar Bus Station -> Vijayanagar", 
//         latitude: 12.966575, 
//         longitude: 77.576309 
//     },
//     "171 (Banashankari → J.P. Nagar)": { 
//         name: "171", 
//         route: "Banashankari -> J.P. Nagar", 
//         latitude: 12.925009, 
//         longitude: 77.589613 
//     },
//     "273 (Koramangala → Kalyan Nagar)": { 
//         name: "273", 
//         route: "Koramangala -> Kalyan Nagar", 
//         latitude: 13.019567, 
//         longitude: 77.635978 
//     },
//     "500D (Electronic City Phase II → K.R. Puram)": { 
//         name: "500D", 
//         route: "Electronic City Phase II -> K.R. Puram", 
//         latitude: 13.019224, 
//         longitude: 77.660569 
//     },
//     "215A (Majestic Bus Station → Yelahanka New Town)": { 
//         name: "215A", 
//         route: "Majestic Bus Station -> Yelahanka New Town", 
//         latitude: 13.101984, 
//         longitude: 77.596320 
//     },
//     "411 (Jayanagar 4th Block → Kengeri)": { 
//         name: "411", 
//         route: "Jayanagar 4th Block -> Kengeri", 
//         latitude: 12.938164, 
//         longitude: 77.533509 
//     },
//     "402 (Shivajinagar Bus Station → Hebbal)": { 
//         name: "402", 
//         route: "Shivajinagar Bus Station -> Hebbal", 
//         latitude: 13.029203, 
//         longitude: 77.591348 
//     },
//     "500C (Baiyappanahalli Metro Station → Whitefield)": { 
//         name: "500C", 
//         route: "Baiyappanahalli Metro Station -> Whitefield", 
//         latitude: 12.990520, 
//         longitude: 77.728213 
//     },
//     "340 (Banashankari → Whitefield)": { 
//         name: "340", 
//         route: "Banashankari -> Whitefield", 
//         latitude: 12.924276, 
//         longitude: 77.571823 
//     },
//     "356C (Majestic Bus Station → BTM Layout 2nd Stage)": { 
//         name: "356C", 
//         route: "Majestic Bus Station -> BTM Layout 2nd Stage", 
//         latitude: 12.916575, 
//         longitude: 77.610116 
//     },
//     "291 (Kempegowda Bus Station → Rajarajeshwari Nagar)": { 
//         name: "291", 
//         route: "Kempegowda Bus Station -> Rajarajeshwari Nagar", 
//         latitude: 12.935518, 
//         longitude: 77.491963 
//     }
//   });

//   return locations;
// }














// ================updated location=====================

import React, { useState } from 'react';

export const BusLocations = () => {
  const [locations, setLocations] = useState({
    "342-F (Kempegowda Bus Station → Sarjapura Bus Stand)": { 
        name: "342-F", 
        route: "Kempegowda Bus Station -> Sarjapura Bus Stand", 
        latitude: 12.922552, 
        longitude: 77.618765,
        timings: "4:26 AM to 6:07 AM"
    }, 
    "500-EB (Baiyappanahalli Metro Station → Electronic City Wipro Main Gate)": { 
        name: "500-EB", 
        route: "Baiyappanahalli Metro Station -> Electronic City Wipro Main Gate", 
        latitude: 13.079141, 
        longitude: 77.736554,
        timings: "5:00 AM to 7:30 AM"
    },
    "365 (Majestic Bus Station → Bannerghatta National Park)": { 
        name: "365", 
        route: "Majestic Bus Station -> Bannerghatta National Park", 
        latitude: 12.943192, 
        longitude: 77.533267,
        timings: "6:15 AM to 8:45 AM"
    },
    "201 (Marathahalli Bridge → Banashankari)": { 
        name: "201", 
        route: "Marathahalli Bridge -> Banashankari", 
        latitude: 12.959172, 
        longitude: 77.701194,
        timings: "7:30 AM to 10:00 AM"
    },
    "215 (Kempegowda Bus Station → Yelahanka Satellite Town)": { 
        name: "215", 
        route: "Kempegowda Bus Station -> Yelahanka Satellite Town", 
        latitude: 13.098172, 
        longitude: 77.574354,
        timings: "8:45 AM to 11:15 AM"
    },
    "270 (Hebbal → Silk Board Junction)": { 
        name: "270", 
        route: "Hebbal -> Silk Board Junction", 
        latitude: 12.917232, 
        longitude: 77.623456,
        timings: "9:30 AM to 12:00 PM"
    },
    "335E (Kempegowda International Airport → HSR Layout)": { 
        name: "335E", 
        route: "Kempegowda International Airport -> HSR Layout", 
        latitude: 12.908136, 
        longitude: 77.646391,
        timings: "10:15 AM to 12:45 PM"
    },
    "500K (K.R. Market → Whitefield)": { 
        name: "500K", 
        route: "K.R. Market -> Whitefield", 
        latitude: 12.969801, 
        longitude: 77.749955,
        timings: "11:00 AM to 1:30 PM"
    },
    "600 (Mysore Road Satellite Bus Station → ITPL)": { 
        name: "600", 
        route: "Mysore Road Satellite Bus Station -> ITPL", 
        latitude: 12.987347, 
        longitude: 77.737318,
        timings: "12:00 PM to 2:30 PM"
    },
    "411G (Jayanagar 4th Block → Kengeri Satellite Town)": { 
        name: "411G", 
        route: "Jayanagar 4th Block -> Kengeri Satellite Town", 
        latitude: 12.938164, 
        longitude: 77.533509,
        timings: "1:00 PM to 3:30 PM"
    },
    "7 (Shivajinagar Bus Station → Vijayanagar)": { 
        name: "7", 
        route: "Shivajinagar Bus Station -> Vijayanagar", 
        latitude: 12.966575, 
        longitude: 77.576309,
        timings: "2:00 PM to 4:30 PM"
    },
    "171 (Banashankari → J.P. Nagar)": { 
        name: "171", 
        route: "Banashankari -> J.P. Nagar", 
        latitude: 12.925009, 
        longitude: 77.589613,
        timings: "3:00 PM to 5:30 PM"
    },
    "273 (Koramangala → Kalyan Nagar)": { 
        name: "273", 
        route: "Koramangala -> Kalyan Nagar", 
        latitude: 13.019567, 
        longitude: 77.635978,
        timings: "4:00 PM to 6:30 PM"
    },
    "500D (Electronic City Phase II → K.R. Puram)": { 
        name: "500D", 
        route: "Electronic City Phase II -> K.R. Puram", 
        latitude: 13.019224, 
        longitude: 77.660569,
        timings: "5:00 PM to 7:30 PM"
    },
    "215A (Majestic Bus Station → Yelahanka New Town)": { 
        name: "215A", 
        route: "Majestic Bus Station -> Yelahanka New Town", 
        latitude: 13.101984, 
        longitude: 77.596320,
        timings: "6:00 PM to 8:30 PM"
    },
    "411 (Jayanagar 4th Block → Kengeri)": { 
        name: "411", 
        route: "Jayanagar 4th Block -> Kengeri", 
        latitude: 12.938164, 
        longitude: 77.533509,
        timings: "7:00 PM to 9:30 PM"
    },
    "402 (Shivajinagar Bus Station → Hebbal)": { 
        name: "402", 
        route: "Shivajinagar Bus Station -> Hebbal", 
        latitude: 13.029203, 
        longitude: 77.591348,
        timings: "8:00 PM to 10:30 PM"
    },
    "500C (Baiyappanahalli Metro Station → Whitefield)": { 
        name: "500C", 
        route: "Baiyappanahalli Metro Station -> Whitefield", 
        latitude: 12.990520, 
        longitude: 77.728213,
        timings: "9:00 PM to 11:30 PM"
    },
    "340 (Banashankari → Whitefield)": { 
        name: "340", 
        route: "Banashankari -> Whitefield", 
        latitude: 12.924276, 
        longitude: 77.571823,
        timings: "10:00 PM to 12:30 AM"
    },
    "356C (Majestic Bus Station → BTM Layout 2nd Stage)": { 
        name: "356C", 
        route: "Majestic Bus Station -> BTM Layout 2nd Stage", 
        latitude: 12.916575, 
        longitude: 77.610116,
        timings: "11:00 PM to 1:30 AM"
    },
    "291 (Kempegowda Bus Station → Rajarajeshwari Nagar)": { 
        name: "291", 
        route: "Kempegowda Bus Station -> Rajarajeshwari Nagar", 
        latitude: 12.935518, 
        longitude: 77.491963,
        timings: "12:00 AM to 2:30 AM"
    }
  });

  return locations;
}









// export const BusLocations = () => {
//     return [
//       { name: 'BMTC 335E', latitude: 12.9352, longitude: 77.6245, route: 'Majestic to Kadugodi', timings: '5:30 AM - 10:30 PM' },
//       { name: 'BMTC 335', latitude: 12.9352, longitude: 77.6245, route: 'Majestic to Kadugodi', timings: '6:00 AM - 9:00 PM' },
//       { name: 'BMTC 500C', latitude: 12.9716, longitude: 77.5946, route: 'Banashankari to Yelahanka', timings: '6:00 AM - 10:00 PM' },
//       { name: 'BMTC 500D', latitude: 12.9716, longitude: 77.5946, route: 'Banashankari to Yelahanka', timings: '7:00 AM - 9:30 PM' },
//       { name: 'BMTC 201R', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Banashankari', timings: '6:30 AM - 8:30 PM' },
//       { name: 'BMTC 201M', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Banashankari', timings: '7:00 AM - 9:00 PM' },
//       { name: 'BMTC 365', latitude: 12.9121, longitude: 77.6446, route: 'Electronic City to Majestic', timings: '5:00 AM - 11:00 PM' },
//       { name: 'BMTC 500A', latitude: 12.9716, longitude: 77.5946, route: 'Banashankari to Hebbal', timings: '6:00 AM - 10:00 PM' },
//       { name: 'BMTC 401K', latitude: 12.9716, longitude: 77.5946, route: 'K.R. Market to Kempegowda International Airport', timings: '4:00 AM - 11:30 PM' },
//       { name: 'BMTC 365A', latitude: 12.9121, longitude: 77.6446, route: 'Electronic City to Majestic', timings: '6:00 AM - 10:00 PM' },
//       { name: 'BMTC 600F', latitude: 12.9716, longitude: 77.5946, route: 'Yelahanka to Electronic City', timings: '5:30 AM - 10:30 PM' },
//       { name: 'BMTC 600G', latitude: 12.9716, longitude: 77.5946, route: 'Yelahanka to Electronic City', timings: '6:00 AM - 9:00 PM' },
//       { name: 'BMTC 276', latitude: 12.9716, longitude: 77.5946, route: 'J.P. Nagar to Kempegowda International Airport', timings: '4:30 AM - 11:00 PM' },
//       { name: 'BMTC 276A', latitude: 12.9716, longitude: 77.5946, route: 'J.P. Nagar to Kempegowda International Airport', timings: '5:00 AM - 10:00 PM' },
//       { name: 'BMTC 277', latitude: 12.9716, longitude: 77.5946, route: 'Jayanagar to Yelahanka', timings: '6:00 AM - 10:00 PM' },
//       { name: 'BMTC 278', latitude: 12.9716, longitude: 77.5946, route: 'Jayanagar to Yelahanka', timings: '6:30 AM - 9:30 PM' },
//       { name: 'BMTC 279', latitude: 12.9716, longitude: 77.5946, route: 'Jayanagar to Yelahanka', timings: '5:30 AM - 10:30 PM' },
//       { name: 'BMTC 280', latitude: 12.9716, longitude: 77.5946, route: 'Kengeri to Whitefield', timings: '5:00 AM - 11:00 PM' },
//       { name: 'BMTC 281', latitude: 12.9716, longitude: 77.5946, route: 'Kengeri to Whitefield', timings: '5:30 AM - 10:00 PM' },
//       { name: 'BMTC 282', latitude: 12.9716, longitude: 77.5946, route: 'Kengeri to Whitefield', timings: '6:00 AM - 9:30 PM' },
//       { name: 'BMTC 505', latitude: 12.9358, longitude: 77.6159, route: 'Majestic to M.G. Road', timings: '6:00 AM - 10:00 PM' },
//       { name: 'BMTC 506', latitude: 12.9358, longitude: 77.6159, route: 'Majestic to M.G. Road', timings: '7:00 AM - 9:30 PM' },
//       { name: 'BMTC 507', latitude: 12.9358, longitude: 77.6159, route: 'Majestic to M.G. Road', timings: '6:30 AM - 8:30 PM' },
//       { name: 'BMTC 508', latitude: 12.9358, longitude: 77.6159, route: 'Majestic to M.G. Road', timings: '7:00 AM - 9:00 PM' },
//       { name: 'BMTC 509', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Majestic', timings: '5:00 AM - 11:00 PM' },
//       { name: 'BMTC 510', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Majestic', timings: '6:00 AM - 9:00 PM' },
//       { name: 'BMTC 511', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Majestic', timings: '6:30 AM - 10:00 PM' },
//       { name: 'BMTC 512', latitude: 12.9719, longitude: 77.6412, route: 'Marathahalli to Majestic', timings: '7:00 AM - 9:30 PM' },
//       { name: 'BMTC 513', latitude: 12.9121, longitude: 77.6446, route: 'Electronic City to Majestic', timings: '5:00 AM - 11:00 PM' },
//       { name: 'BMTC 514', latitude: 12.9121, longitude: 77.6446, route: 'Electronic City to Majestic', timings: '6:00 AM - 10:00 PM' },
//     ];
//   };
  