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
import { insertOne, updateOne } from "../../lib/common-fetch";
import Select from "react-select";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LeadForm(props) {
  const {
    lead,
    allCustomers,
    allCounty,
    allCountry,
    allLeadType,
    allLeadSource,
    allLeadSubSource,
    allSalesArea,
    allProductType,
    allMainInterest,
    allUsers,
    allSalesPerson,
    allSurveyors,
    allTemperature,
    leadPipeline,
  } = props.data;
  // load first
  let customerExist;
  let installAddress1Exist;
  let installAddress2Exist;
  let installAddress3Exist;
  let installInstructionsExist;
  let installTownExist;
  let installPostcodeExist;
  let installCountyExist;
  let installCountryExist;
  let leadTypeExist;
  let leadSourceExist;
  let leadSubSourceExist;
  let salesAreaExist;
  let visitShowroomExist;
  let productType1Exist;
  let productType2Exist;
  let productType3Exist;
  let mainInterestExist;
  let leadTakenByExist;
  let salesPersonExist;
  let surveyorExist;
  let quotedValueNetExist;
  let discountAppliedExist;
  let soldValueNetExist;
  let surveyRequiredExist;
  let selfCertRequiredExist;
  let backedGuaranteeExist;
  let pipelineExist;
  let temperatureExist;
  let closeByExist;
  let taskForExist;
  let taskDueDateExist;
  let taskNoteExist;

  if (lead) {
    customerExist = allCustomers
      .filter((x) => x.id === lead.customer_id)
      .map((x) => ({
        value: x.id,
        label: x.salutation + " " + x.first_name + " " + x.last_name,
      }));

    installAddress1Exist = lead.install_address_1;
    installAddress2Exist = lead.install_address_2;
    installAddress3Exist = lead.install_address_3;
    installInstructionsExist = lead.install_instructions;
    installTownExist = lead.install_town;
    installPostcodeExist = lead.install_postcode;

    installCountyExist = prepareValueForEditFields(
      allCounty,
      lead.install_county_id
    );
    installCountryExist = prepareValueForEditFields(
      allCountry,
      lead.install_country_id
    );
    leadTypeExist = prepareValueForEditFields(allLeadType, lead.lead_type_id);
    leadSourceExist = prepareValueForEditFields(
      allLeadSource,
      lead.lead_source_id
    );
    leadSubSourceExist = prepareValueForEditFields(
      allLeadSubSource,
      lead.lead_sub_source_id
    );
    salesAreaExist = prepareValueForEditFields(
      allSalesArea,
      lead.sales_area_id
    );
    visitShowroomExist = lead.visit_showroom;

    productType1Exist = prepareValueForEditFields(
      allProductType,
      lead.product_type_1_id
    );
    productType2Exist = prepareValueForEditFields(
      allProductType,
      lead.product_type_2_id
    );
    productType3Exist = prepareValueForEditFields(
      allProductType,
      lead.product_type_3_id
    );
    mainInterestExist = prepareValueForEditFields(
      allMainInterest,
      lead.main_interest_id
    );
    leadTakenByExist = prepareValueForEditFields(
      allUsers,
      lead.lead_taken_by_id
    );
    salesPersonExist = prepareValueForEditFields(
      allSalesPerson,
      lead.sales_person_id
    );
    surveyorExist = prepareValueForEditFields(allSurveyors, lead.surveyors_id);
    quotedValueNetExist = lead.quoted_value_net;
    discountAppliedExist = lead.discount_applied;
    soldValueNetExist = lead.sold_value_net;
    surveyRequiredExist = lead.survey_required;
    selfCertRequiredExist = lead.self_cert_required;
    backedGuaranteeExist = lead.backed_guarantee;
    pipelineExist = lead.pipeline_id;
    temperatureExist = lead.temperature_id;
    closeByExist = lead.closed_by;
    taskForExist = prepareValueForEditFields(allUsers, lead.task_for_id);
    taskDueDateExist = lead.task_due_date;
    taskNoteExist = lead.task_note;

    function prepareValueForEditFields(objectArr, objId) {
      return objectArr
        .filter((x) => x.id === objId)
        .map((x) => ({ value: x.id, label: x.name }));
    }
  }

  //   backed_guarantee: true
  //   closed_by: "2020-12-31T21:57:03.000Z"
  //   created_date: "2021-07-03T22:06:32.992Z"
  //   customer_id: 1
  //   discount_applied: "6.55"
  //   id: 1
  //   install_address_1: "75 Ringway"
  //   install_address_2: "75 Ringway"
  //   install_address_3: "75 Ringway"
  //   install_country_id: 229
  //   install_county_id: 28
  //   install_instructions: "Install follow the guide book, or call 99999999 to more information."
  //   install_postcode: "NN4 8SJ"
  //   install_town: "Northampton"
  //   lead_source_id: 2
  //   lead_sub_source_id: 5
  //   lead_taken_by_id: 2
  //   lead_type_id: 1
  //   main_interest_id: 4
  //   pipeline_id: 1
  //   product_type_1_id: 1
  //   product_type_2_id: 2
  //   product_type_3_id: 3
  //   quoted_value_net: "5.55"
  //   sales_area_id: 4
  //   sales_person_id: 1
  //   self_cert_required: true
  //   sold_value_net: "7.55"
  //   status: 1
  //   surveyors_id: 1
  //   task_due_date: "2021-07-07T21:57:03.000Z"
  //   task_for_id: 2
  //   task_note: "2) Slow and more generic.\nCompares objects without digging into prototypes, then compares properties' projections recursively, and also compares constructors.\n\nThis is almost correct algorithm:"
  //   temperature_id: 2
  //   visit_showroom: true
  // test reactSelect
  const [customer, setCustomer] = useState(lead ? customerExist[0] : "");
  const [installAddress1, setInstallAddress1] = useState(
    lead ? installAddress1Exist : ""
  );
  const [installAddress2, setInstallAddress2] = useState(
    lead ? installAddress2Exist : ""
  );
  const [installAddress3, setInstallAddress3] = useState(
    lead ? installAddress3Exist : ""
  );
  const [installTown, setInstallTown] = useState(lead ? installTownExist : "");
  const [installPostcode, setInstallPostcode] = useState(
    lead ? installPostcodeExist : ""
  );
  const [installCounty, setInstallCounty] = useState(
    lead ? installCountyExist[0] : ""
  );
  const [installCountry, setInstallCountry] = useState(
    lead ? installCountryExist[0] : ""
  );
  const [installInstructions, setInstallInstructions] = useState(
    lead ? installInstructionsExist : ""
  );

  // lead info
  const [leadType, setLeadType] = useState(lead ? leadTypeExist : "");
  const [leadSource, setLeadSource] = useState(lead ? leadSourceExist : "");
  const [leadSubSource, setLeadSubSource] = useState(
    lead ? leadSubSourceExist[0] : null
  );
  const [leadSubSourceData, setLeadSubSourceData] = useState(""); // this is for repare data for react-select
  const [salesArea, setSalesArea] = useState(lead ? salesAreaExist[0] : "");
  const [visitShowroom, setVisitShowroom] = useState(
    lead ? visitShowroomExist : false
  );
  const [productType1, setProductType1] = useState(
    lead ? productType1Exist[0] : ""
  );
  const [productType2, setProductType2] = useState(
    lead ? productType2Exist[0] : ""
  );
  const [productType3, setProductType3] = useState(
    lead ? productType3Exist[0] : ""
  );
  const [mainInterest, setMainInterest] = useState(
    lead ? mainInterestExist[0] : ""
  );
  const [leadTakenBy, setLeadTakenBy] = useState(
    lead ? leadTakenByExist[0] : ""
  );
  const [salesPerson, setSalesPerson] = useState(
    lead ? salesPersonExist[0] : ""
  );
  const [surveyors, setSurveyors] = useState(lead ? surveyorExist[0] : "");
  const [quotedValueNet, setQuotedValueNet] = useState(
    lead ? quotedValueNetExist : ""
  );
  const [discountApplied, setDiscountApplied] = useState(
    lead ? discountAppliedExist : ""
  );
  const [soldValueNet, setSoldValueNet] = useState(
    lead ? soldValueNetExist : ""
  );
  const [surveyRequired, setSurveyRequired] = useState(
    lead ? surveyRequiredExist : true
  );
  const [selfCertRequired, setSelfCertRequired] = useState(
    lead ? selfCertRequiredExist : false
  );
  const [backedGuarantee, setBackedGuarantee] = useState(
    lead ? backedGuaranteeExist : false
  );
  const [pipeline, setPipeline] = useState(
    lead ? pipelineExist : leadPipeline.id
  );
  const [temperature, setTemperature] = useState(
    lead ? temperatureExist : allTemperature[0].id
  );
  const [closedBy, setClosedBy] = useState(
    lead ? new Date(closeByExist) : new Date()
  );
  const [taskFor, setTaskFor] = useState(lead ? taskForExist : "");
  const [taskDueDate, setTaskDueDate] = useState(
    lead ? new Date(taskDueDateExist) : new Date()
  );
  const [taskNote, setTaskNote] = useState(lead ? taskNoteExist : "");

  function cancelForm(event) {
    event.preventDefault();
    if (lead) {
      setLeadType(null);
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
      setTemperature(allTemperature[0].id);
      setClosedBy(new Date());
      setTaskFor("");
      setTaskDueDate(new Date());
      setTaskNote("");
    } else {
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
      surveyors: surveyRequired && surveyors ? surveyors.value : "",
      quotedValueNet: quotedValueNet,
      discountApplied: discountApplied,
      soldValueNet: soldValueNet,
      surveyRequired: surveyRequired,
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
    if (lead) {
      updateOne(`/leads/edit/`, body, lead.id).then((res) =>
        alert(res.message)
      );
    } else {
      insertOne("/leads", body).then((res) => alert(res.message));
    }
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
        label: addresses.install_county_name,
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
        <div className="flex justify-between">
          <div className="justify-start">
            <Link href="/leads">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                All Leads
              </button>
            </Link>
          </div>
          <div className="justify-end">
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
                  <ReactSelect
                    isDisabled={lead ? true : false}
                    setAddressPart={(event) => {
                      setAddressPartToStates(event);
                    }}
                    value={customer}
                    onChange={(event) => setCustomer(event)}
                    id="customer"
                    data={allCustomers}
                  />
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
                      editPage={lead ? true : false}
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

                {(leadSubSourceData || lead) && (
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

export default LeadForm;
