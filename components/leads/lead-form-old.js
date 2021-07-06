import {
  SearchIcon,
  LocationMarkerIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactSelect from "./lead-create/react-select";
import RsCounty from "./lead-create/rs-county";
import RsCommon from "./lead-create/lead-info/rs-common";
import { insertOne } from "../../lib/common-fetch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LeadFormOld(props) {
  const {
    allCustomers,
    allCounty,
    allCountry,
    allLeadType,
    allLeadSource,
    allSalesArea,
    allProductType,
    allMainInterest,
    allUsers,
    allSalesPerson,
    allSurveyors,
    allTemperature,
    leadPipeline,
  } = props.data;
  console.log(props);
  // test reactSelect
  const [customer, setCustomer] = useState("");
  const [installAddress1, setInstallAddress1] = useState("");
  const [installAddress2, setInstallAddress2] = useState("");
  const [installAddress3, setInstallAddress3] = useState("");
  const [installTown, setInstallTown] = useState("");
  const [installPostcode, setInstallPostcode] = useState("");
  const [installCounty, setInstallCounty] = useState("");
  const [installCountry, setInstallCountry] = useState("");
  const [installInstructions, setInstallInstructions] = useState("");

  // lead info
  const [leadType, setLeadType] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadSubSource, setLeadSubSource] = useState(null);
  const [leadSubSourceData, setLeadSubSourceData] = useState(""); // this is for repare data for react-select
  const [salesArea, setSalesArea] = useState("");
  const [visitShowroom, setVisitShowroom] = useState(false);
  const [productType1, setProductType1] = useState("");
  const [productType2, setProductType2] = useState("");
  const [productType3, setProductType3] = useState("");
  const [mainInterest, setMainInterest] = useState("");
  const [leadTakenBy, setLeadTakenBy] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [surveyors, setSurveyors] = useState("");
  const [quotedValueNet, setQuotedValueNet] = useState("");
  const [discountApplied, setDiscountApplied] = useState("");
  const [soldValueNet, setSoldValueNet] = useState("");
  const [surveyRequired, setSurveyRequired] = useState(true);
  const [selfCertRequired, setSelfCertRequired] = useState(false);
  const [backedGuarantee, setBackedGuarantee] = useState(false);
  const [pipeline, setPipeline] = useState(leadPipeline.id);
  const [temperature, setTemperature] = useState(allTemperature[0].id);
  const [closedBy, setClosedBy] = useState(new Date());
  const [taskFor, setTaskFor] = useState("");
  const [taskDueDate, setTaskDueDate] = useState(new Date());
  const [taskNote, setTaskNote] = useState("");

  function cancelForm(event) {
    // event.preventDefault();
    setLeadType(null);
    setCustomer("");
    setInstallAddress1("");
    setInstallAddress2("");
    setInstallAddress3("");
    setInstallTown("");
    setInstallPostcode("");
    setInstallCounty("");
    setInstallCountry("");
    setInstallInstructions("");

    setLeadSource("");
    setLeadSubSource("");
    setLeadSubSourceData(""); // this is for repare data for react-select
    setSalesArea("");
    setVisitShowroom(false);
    setProductType1("");
    setProductType2("");
    setProductType3("");
    setMainInterest("");
    setLeadTakenBy("");
    setSalesPerson("");
    setSurveyors("");
    setQuotedValueNet("");
    setDiscountApplied("");
    setSoldValueNet("");
    setSurveyRequired(true);
    setSelfCertRequired(false);
    setBackedGuarantee(false);
    setTemperature(allTemperature[0].value);
    setClosedBy(new Date());
    setTaskFor("");
    setTaskDueDate(new Date());
    setTaskNote("");
  }

  function submitHandler(event) {
    event.preventDefault();

    const body = {
      customer: customer.value,
      installAddress1: installAddress1,
      installAddress2: installAddress2,
      installAddress3: installAddress3,
      installTown: installTown,
      installPostcode: installPostcode,
      installCounty: installCounty ? installCounty.value : "",
      installCountry: installCountry ? installCountry.value : "",
      installInstructions: installInstructions,
      leadType: leadType ? leadType.value : "",
      leadSource: leadSource ? leadSource.value : "",
      leadSubSource: leadSubSource ? leadSubSource.value : "",
      salesArea: salesArea ? salesArea.value : "",
      visitShowroom: visitShowroom,
      productType1: productType1 ? productType1.value : "",
      productType2: productType2 ? productType2.value : "",
      productType3: productType3 ? productType3.value : "",
      mainInterest: mainInterest ? mainInterest.value : "",
      leadTakenBy: leadTakenBy ? leadTakenBy.value : "",
      salesPerson: salesPerson ? salesPerson.value : "",
      surveyors: surveyors ? surveyors.value : "",
      quotedValueNet: quotedValueNet,
      discountApplied: discountApplied,
      soldValueNet: soldValueNet,
      selfCertRequired: selfCertRequired,
      backedGuarantee: backedGuarantee,
      pipeline: pipeline,
      temperature: temperature,
      closedBy: closedBy,
      taskFor: taskFor ? taskFor.value : "",
      taskDueDate: taskDueDate,
      taskNote: taskNote,
    };
    console.log(body);
    insertOne("/leads", body).then((res) => console.log(res.message));
  }
  function setAddressPartToStates(addresses) {
    if (addresses) {
      setInstallAddress1(addresses.install_address_1);
      setInstallAddress2(addresses.install_address_2);
      setInstallAddress3(addresses.install_address_3);
      setInstallTown(addresses.install_town);
      setInstallPostcode(addresses.install_postcode);
      setInstallCounty({
        value: addresses.install_county_id,
        label: addresses.install_country_name,
      });
      setInstallCountry({
        value: addresses.install_country_id,
        label: addresses.install_country_name,
      });
      setInstallInstructions(addresses.install_instructions);
    } else {
      setInstallAddress1("");
      setInstallAddress2("");
      setInstallAddress3("");
      setInstallTown("");
      setInstallPostcode("");
      setInstallCounty("");
      setInstallCountry("");
      setInstallInstructions("");
    }
  }

  function setSubSourcePartToStates(subSource) {
    if (subSource) {
      setLeadSubSourceData(subSource);
      setLeadSubSource("");
    } else {
      setLeadSubSourceData("");
      setLeadSubSource("");
    }
  }

  return (
    <div className="container bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 pt-10 pb-10">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={cancelForm}
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {/* card 1 */}
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Contact Information
          </h3>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-10 md:mt-10 md:col-span-2 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Customer
                  </label>
                  {/* <div className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"> */}
                  <ReactSelect
                    setAddressPart={(event) => {
                      setAddressPartToStates(event);
                    }}
                    value={customer}
                    onChange={(event) => setCustomer(event)}
                    id="customer"
                    data={allCustomers}
                  />
                  {/* </div> */}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Install Address
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LocationMarkerIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                          placeholder="Postcode here"
                        />
                      </div>
                      <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card addon appear if has value */}
        {customer && (
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 ">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Install Address
            </h3>
            {/* grid  */}
            <div className="space-y-6">
              <div className="mt-10 md:mt-10  md:grid md:grid-cols-3 md:gap-6">
                {/* col 1 */}
                <div className=" md:col-span-1">
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="installAddress1"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Install Address 1
                        </label>
                        <input
                          type="text"
                          name="installAddress1"
                          id="installAddress1"
                          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={installAddress1}
                          onChange={(event) =>
                            setInstallAddress1(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="installAddress2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Install Address 2
                      </label>
                      <input
                        type="text"
                        name="installAddress2"
                        id="installAddress2"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={installAddress2}
                        onChange={(event) =>
                          setInstallAddress2(event.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="installAddress3"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Install Address 3
                      </label>
                      <input
                        type="text"
                        name="installAddress3"
                        id="installAddress3"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={installAddress3}
                        onChange={(event) =>
                          setInstallAddress3(event.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* col 2 */}
                <div className=" md:col-span-1">
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="installTown"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Install Town
                        </label>
                        <input
                          type="text"
                          name="installTown"
                          id="installTown"
                          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={installTown}
                          onChange={(event) =>
                            setInstallTown(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <RsCounty
                      value={installCounty}
                      onChange={(event) => setInstallCounty(event)}
                      id="installCounty"
                      data={allCounty}
                    />
                  </div>
                </div>
                {/* col 3 */}
                <div className=" md:col-span-1">
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="installPostcode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Install Postcode
                        </label>
                        <div className="flex rounded-md shadow-sm">
                          <div className="relative flex items-stretch flex-grow focus-within:z-10">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <LocationMarkerIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              type="text"
                              name="installPostcode"
                              id="installPostcode"
                              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                              value={installPostcode}
                              onChange={(event) =>
                                setInstallPostcode(event.target.value)
                              }
                            />
                          </div>
                          <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                            <SearchIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Search</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <RsCommon
                      title="Install Country"
                      value={installCountry}
                      onChange={(event) => setInstallCountry(event)}
                      id="installCountry"
                      data={allCountry}
                    />
                  </div>
                </div>
              </div>
              {/* textarea */}
              <div>
                <label
                  htmlFor="taskNote"
                  className="block text-sm font-medium text-gray-700"
                >
                  Install Instructions
                </label>
                <textarea
                  id="installInstructions"
                  name="installInstructions"
                  rows={3}
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={installInstructions}
                  onChange={(event) =>
                    setInstallInstructions(event.target.value)
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* card 2 */}
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Lead Information
          </h3>
          {/* grid  */}
          <div className="mt-10 md:mt-10  md:grid md:grid-cols-3 md:gap-6">
            {/* col 1 */}
            <div className=" md:col-span-1">
              <div className="space-y-6">
                <RsCommon
                  title="Lead Type"
                  value={leadType}
                  onChange={(event) => setLeadType(event)}
                  id="leadType"
                  data={allLeadType}
                />
                <RsCommon
                  title="Lead Source"
                  value={leadSource}
                  onChange={(event) => setLeadSource(event)}
                  id="leadSource"
                  data={allLeadSource}
                  setSubSourcePartToStates={(event) =>
                    setSubSourcePartToStates(event)
                  }
                />

                {leadSubSourceData && (
                  <RsCommon
                    title="Lead SubSource"
                    value={leadSubSource}
                    onChange={(event) => setLeadSubSource(event)}
                    id="leadSubSource"
                    data={leadSubSourceData}
                  />
                )}

                <RsCommon
                  title="Sales Area"
                  value={salesArea}
                  onChange={(event) => setSalesArea(event)}
                  id="salesArea"
                  data={allSalesArea}
                />

                <div>
                  <label
                    htmlFor="leadSubSource"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Visit Showroom
                  </label>
                  <div className="py-2 sm:text-sm">
                    <Switch
                      checked={visitShowroom}
                      onChange={setVisitShowroom}
                      className={classNames(
                        visitShowroom ? "bg-indigo-600" : "bg-gray-200",
                        " relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          visitShowroom ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>

            {/* col 2 */}
            <div className=" md:col-span-1">
              <div className="space-y-6">
                <RsCommon
                  title="Product Type 1"
                  value={productType1}
                  onChange={(event) => setProductType1(event)}
                  id="productType1"
                  data={allProductType}
                />
                <RsCommon
                  title="Product Type 2"
                  value={productType2}
                  onChange={(event) => setProductType2(event)}
                  id="productType2"
                  data={allProductType}
                />
                <RsCommon
                  title="Product Type 3"
                  value={productType3}
                  onChange={(event) => setProductType3(event)}
                  id="productType3"
                  data={allProductType}
                />
                <RsCommon
                  title="Main Interest"
                  value={mainInterest}
                  onChange={(event) => setMainInterest(event)}
                  id="mainInterest"
                  data={allMainInterest}
                />

                <RsCommon
                  title="Lead Taken By"
                  value={leadTakenBy}
                  onChange={(event) => setLeadTakenBy(event)}
                  id="leadTakenBy"
                  data={allUsers}
                />

                <RsCommon
                  title="Sales Person"
                  value={salesPerson}
                  onChange={(event) => setSalesPerson(event)}
                  id="salesPerson"
                  data={allSalesPerson}
                />
              </div>
            </div>
            {/* col 3 */}
            <div className=" md:col-span-1">
              <div className="space-y-6">
                {surveyRequired && (
                  <RsCommon
                    title="Surveyor"
                    value={surveyors}
                    onChange={(event) => setSurveyors(event)}
                    id="surveyors"
                    data={allSurveyors}
                  />
                )}

                <div>
                  <label
                    htmlFor="quotedValueNet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quoted Value (Net)
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">£</span>
                    </div>
                    <input
                      type="number"
                      name="quotedValueNet"
                      id="quotedValueNet"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      step="0.01"
                      value={quotedValueNet}
                      onChange={(event) =>
                        setQuotedValueNet(event.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="discountApplied"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount Applied (%)
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">%</span>
                    </div>
                    <input
                      type="number"
                      name="discountApplied"
                      id="discountApplied"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      value={discountApplied}
                      onChange={(event) =>
                        setDiscountApplied(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="soldValueNet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sold Value (Net)
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">£</span>
                    </div>
                    <input
                      type="number"
                      name="soldValueNet"
                      id="soldValueNet"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.00"
                      value={soldValueNet}
                      onChange={(event) => setSoldValueNet(event.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="surveyRequired"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Survey Required
                    </label>
                    <div className="py-1 sm:text-sm">
                      <Switch
                        checked={surveyRequired}
                        onChange={setSurveyRequired}
                        className={classNames(
                          surveyRequired ? "bg-indigo-600" : "bg-gray-200",
                          " relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            surveyRequired ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="selfCertRequired"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Self Cert. Required
                    </label>
                    <div className="py-2 sm:text-sm">
                      <Switch
                        checked={selfCertRequired}
                        onChange={setSelfCertRequired}
                        className={classNames(
                          selfCertRequired ? "bg-indigo-600" : "bg-gray-200",
                          " relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            selfCertRequired
                              ? "translate-x-5"
                              : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="backedGuarantee"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Ins. Backed Guarantee Required
                    </label>
                    <div className="py-2 sm:text-sm">
                      <Switch
                        checked={backedGuarantee}
                        onChange={setBackedGuarantee}
                        className={classNames(
                          backedGuarantee ? "bg-indigo-600" : "bg-gray-200",
                          " relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        )}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            backedGuarantee ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 & 4 */}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className=" md:col-span-1">
            {/* card 3  */}
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Status Progression
              </h3>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="mt-10 md:mt-10 md:col-span-2">
                  <label
                    htmlFor="pipeline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pipeline
                  </label>
                  <select
                    id="pipeline"
                    name="pipeline"
                    autoComplete="pipeline"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={pipeline}
                    onChange={(event) => setPipeline(event.target.value)}
                  >
                    <option key={leadPipeline.id} option={leadPipeline.id}>
                      {leadPipeline.name}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:col-span-2">
            {/* card 4 */}
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Lead Categorisation
              </h3>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="mt-10 md:mt-10 md:col-span-2">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Temperature
                      </label>
                      <select
                        id="temperature"
                        name="temperature"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={temperature}
                        onChange={(event) => setTemperature(event.target.value)}
                      >
                        {allTemperature.map((x) => {
                          return (
                            <option key={x.id} value={x.id}>
                              {x.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Closed by
                      </label>
                      <DatePicker
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        selected={closedBy}
                        onChange={(date) => setClosedBy(date)}
                        dateFormat="MMMM yyyy"
                        showMonthYearPicker
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Set New Task
          </h3>
          <div className="space-y-6">
            <div className="md:grid md:grid-cols-2 md:gap-6">
              <div className="mt-10 md:mt-10 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <RsCommon
                      title="Task For"
                      value={taskFor}
                      onChange={(event) => setTaskFor(event)}
                      id="taskFor"
                      data={allUsers}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-7010"
                    >
                      Task Due Date
                    </label>
                    <DatePicker
                      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      selected={taskDueDate}
                      onChange={(date) => setTaskDueDate(date)}
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* textarea */}
            <div>
              <label
                htmlFor="taskNote"
                className="block text-sm font-medium text-gray-700"
              >
                Task Note
              </label>
              <textarea
                id="taskNote"
                name="taskNote"
                rows={3}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={taskNote}
                onChange={(event) => setTaskNote(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={cancelForm}
          >
            Cancel
          </button>
          <button
            onClick={submitHandler}
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadFormOld;
