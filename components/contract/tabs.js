// import e from "cors";
// import React from "react";

// const tabs = [
//   { name: "My Account", href: "#", current: false },
//   { name: "Company", href: "#", current: false },
//   { name: "Team Members", href: "#", current: true },
//   { name: "Billing", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Tabs() {
//   const [openTab, setOpenTab] = React.useState(1);

//   function switchTab(event) {
//     event.preventDefault();
//     setOpenTab(number);
//   }
//   return (
//     <>
//       {/* <div>
//         <div className="sm:hidden">
//           <label htmlFor="tabs" className="sr-only">
//             Select a tab
//           </label>
//           <select
//             id="tabs"
//             name="tabs"
//             className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//             defaultValue={tabs.find((tab) => tab.current).name}
//           >
//             {tabs.map((tab) => (
//               <option key={tab.name}>{tab.name}</option>
//             ))}
//           </select>
//         </div>
//         <div className="hidden sm:block">
//           <nav className="flex space-x-4" aria-label="Tabs">
//             {tabs.map((tab) => (
//               <a
//                 key={tab.name}
//                 href={tab.href}
//                 className={classNames(
//                   tab.current
//                     ? "bg-indigo-100 text-indigo-700"
//                     : "text-gray-500 hover:text-gray-700",
//                   "px-3 py-2 font-medium text-sm rounded-md"
//                 )}
//                 aria-current={tab.current ? "page" : undefined}
//               >
//                 {tab.name}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </div>

//       <br /> */}

//       <div className="flex flex-wrap w-full">
//         <div className="w-full">
//           <ul
//             className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//             role="tablist"
//           >
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 1
//                     ? "text-white bg-indigo-600"
//                     : "text-indigo-600 bg-white")
//                 }
//                 onClick={switchTab()}
//                 data-toggle="tab"
//                 href="#link1"
//                 role="tablist"
//               >
//                 Profile
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 2
//                     ? "text-white bg-indigo-600"
//                     : "text-indigo-600 bg-white")
//                 }
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setOpenTab(2);
//                 }}
//                 data-toggle="tab"
//                 href="#link2"
//                 role="tablist"
//               >
//                 Settings
//               </a>
//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 3
//                     ? "text-white bg-indigo-600"
//                     : "text-indigo-600 bg-white")
//                 }
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setOpenTab(3);
//                 }}
//                 data-toggle="tab"
//                 href="#link3"
//                 role="tablist"
//               >
//                 Options
//               </a>
//             </li>
//           </ul>
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="px-4 py-5 flex-auto">
//               <div className="tab-content tab-space">
//                 <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                   <p>
//                     Collaboratively administrate empowered markets via
//                     plug-and-play networks. Dynamically procrastinate B2C users
//                     after installed base benefits.
//                     <br />
//                     <br /> Dramatically visualize customer directed convergence
//                     without revolutionary ROI.
//                   </p>
//                 </div>
//                 <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                   <p>
//                     Completely synergize resource taxing relationships via
//                     premier niche markets. Professionally cultivate one-to-one
//                     customer service with robust ideas.
//                     <br />
//                     <br />
//                     Dynamically innovate resource-leveling customer service for
//                     state of the art customer service.
//                   </p>
//                 </div>
//                 <div className={openTab === 3 ? "block" : "hidden"} id="link3">
//                   <p>
//                     Efficiently unleash cross-media information without
//                     cross-media value. Quickly maximize timely deliverables for
//                     real-time schemas.
//                     <br />
//                     <br /> Dramatically maintain clicks-and-mortar solutions
//                     without functional solutions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
const tabs = [
  { name: "My Account", href: "#", current: false },
  { name: "Company", href: "#", current: false },
  { name: "Team Members", href: "#", current: true },
  { name: "Billing", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
