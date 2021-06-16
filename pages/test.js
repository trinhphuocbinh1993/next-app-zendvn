import { useState } from "react";

// function Test() {
//   const [email, setEmail] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch("/api/test", {
//         method: "POST",
//         body: JSON.stringify(contactDetail),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message);
//       } else {
//         console.log(data);
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           value={email}
//           onChange={(event) => event.target.value}
//           name="email"
//           type="email"
//         />
//         <button type="button">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Test;

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
import { SortAscendingIcon, UsersIcon } from "@heroicons/react/solid";

export default function Test() {
  const [email, setEmail] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        Search candidates
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UsersIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="John Doe"
          />
        </div>
        <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          <SortAscendingIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span>Sort</span>
        </button>
      </div>
    </form>
  );
}
