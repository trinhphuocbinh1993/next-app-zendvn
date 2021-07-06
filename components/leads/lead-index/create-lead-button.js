/* This example requires Tailwind CSS v2.0+ */
import { DocumentAddIcon } from "@heroicons/react/solid";
import Link from "next/link";

function CreateLeadButton() {
  return (
    <div className="lg:pb-6 md:pb-6 xs:py-6">
      <Link href="/leads/create">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Add new lead
          <DocumentAddIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </Link>
    </div>
  );
}

export default CreateLeadButton;
