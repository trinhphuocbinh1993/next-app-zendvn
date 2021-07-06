import { useState } from "react";
import { RadioGroup, Switch } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon,
} from "@heroicons/react/outline";

const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true);

  return (
    <>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        {/* Payment details */}
        <div className="space-y-6 sm:px-6 sm:py-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment-details-heading">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 sm:p-6">
                  <div>
                    <h2
                      id="payment-details-heading"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Payment details
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-6">
                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="cc-given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="cc-family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-1">
                      <label
                        htmlFor="expiration-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Expration date
                      </label>
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        placeholder="MM / YY"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-1">
                      <label
                        htmlFor="security-code"
                        className="flex items-center text-sm font-medium text-gray-700"
                      >
                        <span>Security code</span>
                        <QuestionMarkCircleIcon
                          className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      </label>
                      <input
                        type="text"
                        name="security-code"
                        id="security-code"
                        autoComplete="cc-csc"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-4 sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* Plan */}
          <section aria-labelledby="plan-heading">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h2
                      id="plan-heading"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Plan
                    </h2>
                  </div>

                  <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                    <RadioGroup.Label className="sr-only">
                      Pricing plans
                    </RadioGroup.Label>
                    <div className="relative bg-white rounded-md -space-y-px">
                      {plans.map((plan, planIdx) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ checked }) =>
                            classNames(
                              planIdx === 0
                                ? "rounded-tl-md rounded-tr-md"
                                : "",
                              planIdx === plans.length - 1
                                ? "rounded-bl-md rounded-br-md"
                                : "",
                              checked
                                ? "bg-orange-50 border-orange-200 z-10"
                                : "border-gray-200",
                              "relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center text-sm">
                                <span
                                  className={classNames(
                                    checked
                                      ? "bg-orange-500 border-transparent"
                                      : "bg-white border-gray-300",
                                    active
                                      ? "ring-2 ring-offset-2 ring-gray-900"
                                      : "",
                                    "h-4 w-4 rounded-full border flex items-center justify-center"
                                  )}
                                  aria-hidden="true"
                                >
                                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                                </span>
                                <RadioGroup.Label
                                  as="span"
                                  className="ml-3 font-medium text-gray-900"
                                >
                                  {plan.name}
                                </RadioGroup.Label>
                              </div>
                              <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                                <span
                                  className={classNames(
                                    checked
                                      ? "text-orange-900"
                                      : "text-gray-900",
                                    "font-medium"
                                  )}
                                >
                                  ${plan.priceMonthly} / mo
                                </span>{" "}
                                <span
                                  className={
                                    checked
                                      ? "text-orange-700"
                                      : "text-gray-500"
                                  }
                                >
                                  (${plan.priceYearly} / yr)
                                </span>
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                className={classNames(
                                  checked ? "text-orange-700" : "text-gray-500",
                                  "ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right"
                                )}
                              >
                                {plan.limit}
                              </RadioGroup.Description>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>

                  <Switch.Group as="div" className="flex items-center">
                    <Switch
                      checked={annualBillingEnabled}
                      onChange={setAnnualBillingEnabled}
                      className={classNames(
                        annualBillingEnabled ? "bg-orange-500" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          annualBillingEnabled
                            ? "translate-x-5"
                            : "translate-x-0",
                          "inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                    <Switch.Label as="span" className="ml-3">
                      <span className="text-sm font-medium text-gray-900">
                        Annual billing{" "}
                      </span>
                      <span className="text-sm text-gray-500">(Save 10%)</span>
                    </Switch.Label>
                  </Switch.Group>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>

          {/* Billing history */}
          <section aria-labelledby="billing-history-heading">
            <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 sm:px-6">
                <h2
                  id="billing-history-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Billing history
                </h2>
              </div>
              <div className="mt-6 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border-t border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Amount
                            </th>
                            {/*
                                `relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
                              */}
                            <th
                              scope="col"
                              className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              <span className="sr-only">View receipt</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {payments.map((payment) => (
                            <tr key={payment.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <time dateTime={payment.datetime}>
                                  {payment.date}
                                </time>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {payment.description}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {payment.amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a
                                  href={payment.href}
                                  className="text-orange-600 hover:text-orange-900"
                                >
                                  View receipt
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
