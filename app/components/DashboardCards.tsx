// File: components/DashboardCards.tsx
import React from 'react';
import { 
  Users, 
  BarChart3, 
  Calendar, 
  Server 
} from 'lucide-react';

const DashboardCards = () => {
  const cardData = [
    {
      icon: <Users className="w-8 h-8 text-blue-300" />,
      title: "Members",
      description: "Manage member profiles"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-300" />,
      title: "Analytics",
      description: "Performance insights"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-300" />,
      title: "Court Scheduling",
      description: "Book and manage courts"
    },
    {
      icon: <Server className="w-8 h-8 text-orange-300" />,
      title: "Admin Control",
      description: "System management"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className="bg-black border border-neutral-800 rounded-lg p-4 flex flex-col justify-between hover:bg-neutral-900 transition-colors"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="bg-neutral-800 p-2 rounded-lg">
              {card.icon}
            </div>
            <button className="text-neutral-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 font-mono">
              {card.title}
            </h3>
            <p className="text-neutral-400 text-sm font-mono">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;



// // File: components/DashboardCards.tsx
// import React from 'react';
// import { 
//   Users, 
//   BarChart3, 
//   Calendar, 
//   Server 
// } from 'lucide-react';

// const DashboardCards = () => {
//   const cardData = [
//     {
//       icon: <Users className="w-8 h-8 text-blue-600" />,
//       title: "Members",
//       description: "Manage member profiles"
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8 text-green-600" />,
//       title: "Analytics",
//       description: "Performance insights"
//     },
//     {
//       icon: <Calendar className="w-8 h-8 text-purple-600" />,
//       title: "Court Scheduling",
//       description: "Book and manage courts"
//     },
//     {
//       icon: <Server className="w-8 h-8 text-orange-600" />,
//       title: "Admin Control",
//       description: "System management"
//     }
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {cardData.map((card, index) => (
//         <div 
//           key={index} 
//           className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col justify-between"
//         >
//           <div className="flex justify-between items-start mb-4">
//             <div className="bg-blue-50 p-2 rounded-lg">
//               {card.icon}
//             </div>
//             <button className="text-neutral-500 hover:text-neutral-800 transition-colors">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-neutral-800 mb-1">
//               {card.title}
//             </h3>
//             <p className="text-neutral-500 text-sm">
//               {card.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;