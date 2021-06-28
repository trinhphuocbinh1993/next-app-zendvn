import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { CheckIcon, PencilAltIcon } from "@heroicons/react/outline";

// import fs from "fs";
// const path = require("path");
//require("dotenv").config({ path: `../../.env.${process.env.NODE_ENV}` });

const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about:
    "Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam. Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.",

  phone: "(555) 123-4567",
  email: "ricardocooper@example.com",
  title: "Senior Front-End Developer",
  team: "Product Development",
  location: "San Francisco",
  sits: "Oasis, 4th floor",
  salary: "$145,000",
  birthday: "June 8, 1990",
};

const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Manager, Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const salutation = [
  {
    id: 1,
    value: "Mr",
    name: "Mr",
  },
  {
    id: 2,
    value: "Mrs",
    name: "Mrs",
  },
];

export default function Create() {
  const [openTab, setOpenTab] = useState(1);
  // contact info: cusName - cusPhone - cusExt - cusMobilePhone - cusEmail - cusBillingAddress;
  const [cusSalutation, setCusSalutation] = useState(salutation[0].value);
  const [cusName, setCusName] = useState("");
  const [cusPhone, setCusPhone] = useState("");
  const [cusExt, setCusExt] = useState("");
  const [cusMobilePhone, setCusMobilePhone] = useState("");
  const [cusEmail, setCusEmail] = useState("");
  const [cusBillingAddress, setCusBillingAddress] = useState("");
  // lead info:leadType- leadSource- leadSubSource- salesArea- showroomVisit- proType1- proType2- proType3- mainInterest-
  // leadTakenBy - salesPerson - surveyRequired - surveyor - quotedValue - discountApplied - soldValue - selfCertRequired - insBackGuanteeRequired
  const [leadType, setLeadType] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [leadSubSource, setLeadSubSource] = useState("");
  const [salesArea, setSalesArea] = useState("");
  const [showroomVisit, setShowroomVisit] = useState("");
  const [proType1, setProType1] = useState("");
  const [proType2, setProType2] = useState("");
  const [proType3, setProType3] = useState("");
  const [mainInterest, setMainInterest] = useState("");
  const [leadTakenBy, setLeadTakenBy] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [surveyRequired, setSurveyRequired] = useState("");
  const [surveyor, setSurveyor] = useState("");
  const [quotedValue, setQuotedValue] = useState("");
  const [discountApplied, setDiscountApplied] = useState("");
  const [soldValue, setSoldValue] = useState("");
  const [selfCertRequired, setSelfCertRequired] = useState("");
  const [insBackGuanteeRequired, setInsBackGuanteeRequired] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(
      "cusSalutation",
      cusSalutation,
      "cusName",
      cusName,
      "cusPhone",
      cusPhone,
      "cusExt",
      cusExt,
      "cusMobilePhone",
      cusMobilePhone,
      "cusEmail",
      cusEmail,
      "cusBillingAddress",
      cusBillingAddress
    );
    console.log(`${process.env.NEXT_PUBLIC_DOMAIN}/leads`);
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/leads`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cusSalutation: cusSalutation,
        cusName: cusName,
        cusPhone: cusPhone,
        cusExt: cusExt,
        cusMobilePhone: cusMobilePhone,
        cusEmail: cusEmail,
        cusBillingAddress: cusBillingAddress,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.error(err.message));
  }
  return (
    <article>
      <div>
        <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src={profile.coverImageUrl}
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={profile.imageUrl}
                alt=""
              />
            </div>
            <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={submitHandler}
                >
                  <CheckIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-2 2xl:mt-5">
        <div className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              role="tablist"
              className="-mb-px flex space-x-8"
              aria-label="Tabs"
            >
              <a
                href="#link1"
                className={
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm " +
                  (openTab === 1
                    ? "border-pink-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Profile
              </a>
              <a
                key="Calendar"
                href="#link2"
                className={
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm " +
                  (openTab === 2
                    ? "border-pink-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Calendar
              </a>
              <a
                key="Recognition"
                href="#link3"
                className={
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm " +
                  (openTab === 3
                    ? "border-pink-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Recognition
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Description list */}
      <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1 */}
        {/* Contact Info */}
        <h1 className="font-bold">Contact Info</h1>
        <br />
        <dl
          className={
            "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4 " +
            (openTab === 1 ? "block" : "hidden")
          }
          id="#link1"
        >
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Salutation</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <select
                id="cusSalutation"
                name="cusSalutation"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={cusSalutation}
                onChange={(event) => {
                  setCusSalutation(event.target.value);
                }}
              >
                {salutation.map((x) => {
                  return (
                    <option key={x.id} value={x.value}>
                      {x.name}
                    </option>
                  );
                })}
              </select>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Customer name</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="text"
                name="cusName"
                id="cusName"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={cusName}
                onChange={(event) => {
                  setCusName(event.target.value);
                }}
              />
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Phone</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="tel"
                name="cusPhone"
                id="cusPhone"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                // placeholder="Name here"
                value={cusPhone}
                onChange={(event) => {
                  setCusPhone(event.target.value);
                }}
              />
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Extension</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="text"
                name="cusExt"
                id="cusExt"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={cusExt}
                onChange={(event) => {
                  setCusExt(event.target.value);
                }}
              />
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Mobile phone</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="tel"
                name="cusMobilePhone"
                id="cusMobilePhone"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={cusMobilePhone}
                onChange={(event) => {
                  setCusMobilePhone(event.target.value);
                }}
              />
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="email"
                name="cusEmail"
                id="cusEmail"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={cusEmail}
                onChange={(event) => {
                  setCusEmail(event.target.value);
                }}
              />
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Billing Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="text"
                name="cusBillingAddress"
                id="cusBillingAddress"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={cusBillingAddress}
                onChange={(event) => {
                  setCusBillingAddress(event.target.value);
                }}
              />
            </dd>
          </div>
        </dl>

        {/* Lead Info*/}
        <br />
        <h1 className="font-bold">Lead Info</h1>
        <br />
        <dl
          className={
            "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4 " +
            (openTab === 1 ? "block" : "hidden")
          }
          id="#link1"
        >
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Lead Type</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <input
                type="text"
                name="billingAddress"
                id="billingAddress"
                className="shadow-sm focus:ring-indigo-500 w-full focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"
                value={leadType}
                onChange={(event) => {
                  setLeadType(event.target.value);
                }}
              />
            </dd>
          </div>
        </dl>

        {/* 2 */}
        <dl
          className={
            "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 " +
            (openTab === 2 ? "block" : "hidden")
          }
          id="#link2"
        >
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
              <p>
                Tincidunt quam neque in cursus viverra orci, dapibus nec
                tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                sed. Cursus risus congue arcu aenean posuere aliquam.
              </p>
              <p>
                Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                senectus vitae. Scelerisque fermentum, cursus felis dui
                suspendisse velit pharetra. Augue et duis cursus maecenas eget
                quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                dictum risus suspendisse.
              </p>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
              <p>
                Tincidunt quam neque in cursus viverra orci, dapibus nec
                tristique. Nullam ut sit dolor consectetur urna, dui cras nec
                sed. Cursus risus congue arcu aenean posuere aliquam.
              </p>
              <p>
                Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea
                rhoncus ac mauris amet. Urna, sem pretium sit pretium urna,
                senectus vitae. Scelerisque fermentum, cursus felis dui
                suspendisse velit pharetra. Augue et duis cursus maecenas eget
                quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent
                dictum risus suspendisse.
              </p>
            </dd>
          </div>
        </dl>
      </div>

      {/* Team member list */}
      <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-sm font-medium text-gray-500">Team members</h2>
        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {team.map((person) => (
            <div
              key={person.handle}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0">
                <a href="#" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {person.role}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
