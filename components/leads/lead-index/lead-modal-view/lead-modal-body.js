function LeadModalBody(props) {
  const { data } = props;
  const dataNull = <i>&lt;empty&gt;</i>;

  return (
    <div className="mt-3 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Customer
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.salutation} {data.first_name} {data.last_name}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.email ? data.email : dataNull}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.job_title ? data.job_title : dataNull}
            </p>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.phone ? data.phone : dataNull} - Ext: {data.ext}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.mobile ? data.mobile : dataNull}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.gender ? data.gender : dataNull}
            </p>
          </div>
        </div>
      </div>
      {/* row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Billing Address
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.billing_address ? data.billing_address : dataNull}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Install Address 1
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">{data.install_address_1}</p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Install Address 2
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.install_address_2 ? data.install_address_2 : dataNull}
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Install Address 3
          </label>
          <div className="mt-1">
            <p className="block w-full sm:text-sm">
              {data.install_address_3 ? data.install_address_3 : dataNull}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeadModalBody;
