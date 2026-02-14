"use client";

import { useState } from "react";
import Card from "@/app/components/ui/Card";
import Field from "@/app/components/ui/Field";
import LeftStepper from "@/app/components/ui/LeftStepper";
import TabNavigation from "@/app/components/ui/TabNavigation";
import dynamic from "next/dynamic";

// Import map component dynamically to avoid SSR issues
const LocationMap = dynamic(
  () => import("@/app/components/map/LocationMap"),
  { 
    ssr: false,
    loading: () => (
      <div className="h-48 rounded-lg border border-zinc-300 bg-gray-100 flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading map...</p>
      </div>
    )
  }
);

type LatLng = { lat: number; lng: number };

type DetailForm = {
  firstName: string;
  lastName: string;
  contactPerson: string;
  contactNumber: string;
  countryCode: string;
  lat: string;
  lng: string;
  province: string;
  district: string;
  city: string;
  street: string;
  addressNote: string;
};

type SubDetailForm = {
  itemName: string;
  itemType: string;
  totalValue: string;
  description: string;
  qty: string;
  number: string;
  weight: string;
  height: string;
  length: string;
  width: string;
};

const emptyDetailForm = (): DetailForm => ({
  firstName: "",
  lastName: "",
  contactPerson: "",
  contactNumber: "",
  countryCode: "+94",
  lat: "6.7161",
  lng: "80.3848",
  province: "",
  district: "",
  city: "",
  street: "",
  addressNote: "",
});

const emptySubDetailForm = (): SubDetailForm => ({
  itemName: "",
  itemType: "",
  totalValue: "",
  description: "",
  qty: "",
  number: "",
  weight: "",
  height: "",
  length: "",
  width: "",
});

export default function MainDetailsPage() {
  const [detail1, setDetail1] = useState<DetailForm>(emptyDetailForm());
  const [detail2, setDetail2] = useState<DetailForm>({
    ...emptyDetailForm(),
    lat: "6.7200",
    lng: "80.3900",
  });
  const [subDetail, setSubDetail] = useState<SubDetailForm>(emptySubDetailForm());

  const handleDetail1MapClick = (latlng: LatLng) => {
    setDetail1((prev) => ({
      ...prev,
      lat: latlng.lat.toFixed(6),
      lng: latlng.lng.toFixed(6),
    }));
  };

  const handleDetail2MapClick = (latlng: LatLng) => {
    setDetail2((prev) => ({
      ...prev,
      lat: latlng.lat.toFixed(6),
      lng: latlng.lng.toFixed(6),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tab Navigation */}
      <TabNavigation />

      {/* Main Content with Left Stepper */}
      <div className="flex">
        {/* Left Stepper */}
        <div className="bg-white border-r border-gray-200">
          <LeftStepper active="Location" doneCount={2} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Main Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Details 1 */}
            <Card title="Details 1" icon="location">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="First Name"
                    placeholder="First Name"
                    required
                    value={detail1.firstName}
                    onChange={(e) => setDetail1({ ...detail1, firstName: e.target.value })}
                  />
                  <Field
                    label="Last Name"
                    placeholder="Last Name"
                    value={detail1.lastName}
                    onChange={(e) => setDetail1({ ...detail1, lastName: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Contact Person Name"
                    placeholder="Enter contact person name"
                    required
                    value={detail1.contactPerson}
                    onChange={(e) => setDetail1({ ...detail1, contactPerson: e.target.value })}
                  />
                  <Field
                    label="Contact Number"
                    type="phone"
                    placeholder="70 123 4567"
                    required
                    value={detail1.contactNumber}
                    onChange={(e) => setDetail1({ ...detail1, contactNumber: e.target.value })}
                    countryCode={detail1.countryCode}
                    onCountryCodeChange={(code) => setDetail1({ ...detail1, countryCode: code })}
                  />
                </div>

                <div>
                  <LocationMap
                    center={[parseFloat(detail1.lat), parseFloat(detail1.lng)]}
                    onMapClick={handleDetail1MapClick}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Latitude"
                    placeholder="Latitude"
                    value={detail1.lat}
                    onChange={(e) => setDetail1({ ...detail1, lat: e.target.value })}
                  />
                  <Field
                    label="Longitude"
                    placeholder="Longitude"
                    value={detail1.lng}
                    onChange={(e) => setDetail1({ ...detail1, lng: e.target.value })}
                  />
                </div>

                <Field
                  label="Province"
                  type="select"
                  placeholder="Select the province"
                  value={detail1.province}
                  onChange={(e) => setDetail1({ ...detail1, province: e.target.value })}
                  options={["Western", "Central", "Southern", "Northern", "Eastern", "North Western", "North Central", "Uva", "Sabaragamuwa"]}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="District"
                    placeholder="Enter district"
                    required
                    value={detail1.district}
                    onChange={(e) => setDetail1({ ...detail1, district: e.target.value })}
                  />
                  <Field
                    label="City"
                    placeholder="Enter city"
                    required
                    value={detail1.city}
                    onChange={(e) => setDetail1({ ...detail1, city: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Street / Lane"
                    placeholder="Enter street name"
                    required
                    value={detail1.street}
                    onChange={(e) => setDetail1({ ...detail1, street: e.target.value })}
                  />
                  <Field
                    label="Address Note"
                    placeholder="Enter address note"
                    value={detail1.addressNote}
                    onChange={(e) => setDetail1({ ...detail1, addressNote: e.target.value })}
                  />
                </div>
              </div>
            </Card>

            {/* Details 2 */}
            <Card title="Details 2" icon="location">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="First Name"
                    placeholder="First Name"
                    required
                    value={detail2.firstName}
                    onChange={(e) => setDetail2({ ...detail2, firstName: e.target.value })}
                  />
                  <Field
                    label="Last Name"
                    placeholder="Last Name"
                    value={detail2.lastName}
                    onChange={(e) => setDetail2({ ...detail2, lastName: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Contact Person Name"
                    placeholder="Enter contact person name"
                    required
                    value={detail2.contactPerson}
                    onChange={(e) => setDetail2({ ...detail2, contactPerson: e.target.value })}
                  />
                  <Field
                    label="Contact Number"
                    type="phone"
                    placeholder="70 123 4567"
                    required
                    value={detail2.contactNumber}
                    onChange={(e) => setDetail2({ ...detail2, contactNumber: e.target.value })}
                    countryCode={detail2.countryCode}
                    onCountryCodeChange={(code) => setDetail2({ ...detail2, countryCode: code })}
                  />
                </div>

                <div>
                  <LocationMap
                    center={[parseFloat(detail2.lat), parseFloat(detail2.lng)]}
                    onMapClick={handleDetail2MapClick}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Latitude"
                    placeholder="Latitude"
                    value={detail2.lat}
                    onChange={(e) => setDetail2({ ...detail2, lat: e.target.value })}
                  />
                  <Field
                    label="Longitude"
                    placeholder="Longitude"
                    value={detail2.lng}
                    onChange={(e) => setDetail2({ ...detail2, lng: e.target.value })}
                  />
                </div>

                <Field
                  label="Province"
                  type="select"
                  placeholder="Select the province"
                  value={detail2.province}
                  onChange={(e) => setDetail2({ ...detail2, province: e.target.value })}
                  options={["Western", "Central", "Southern", "Northern", "Eastern", "North Western", "North Central", "Uva", "Sabaragamuwa"]}
                />

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="District"
                    placeholder="Enter district"
                    required
                    value={detail2.district}
                    onChange={(e) => setDetail2({ ...detail2, district: e.target.value })}
                  />
                  <Field
                    label="City"
                    placeholder="Enter city"
                    required
                    value={detail2.city}
                    onChange={(e) => setDetail2({ ...detail2, city: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Street / Lane"
                    placeholder="Enter street name"
                    required
                    value={detail2.street}
                    onChange={(e) => setDetail2({ ...detail2, street: e.target.value })}
                  />
                  <Field
                    label="Address Note"
                    placeholder="Enter address note"
                    value={detail2.addressNote}
                    onChange={(e) => setDetail2({ ...detail2, addressNote: e.target.value })}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Sub Details Section */}
          <Card title="Sub Details" icon="package">
            <div className="space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Field
                  label="Name"
                  placeholder="Enter name"
                  required
                  value={subDetail.itemName}
                  onChange={(e) => setSubDetail({ ...subDetail, itemName: e.target.value })}
                />
                <Field
                  label="Type"
                  type="select"
                  placeholder="Select type"
                  required
                  value={subDetail.itemType}
                  onChange={(e) => setSubDetail({ ...subDetail, itemType: e.target.value })}
                  options={["Type 1", "Type 2", "Type 3"]}
                />
                <Field
                  label="Total Value"
                  placeholder="Enter total value"
                  type="number"
                  value={subDetail.totalValue}
                  onChange={(e) => setSubDetail({ ...subDetail, totalValue: e.target.value })}
                />
                <Field
                  label="Description"
                  placeholder="Enter description"
                  value={subDetail.description}
                  onChange={(e) => setSubDetail({ ...subDetail, description: e.target.value })}
                />
              </div>

              {/* Second Row - Dimensions */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <Field
                  label="Quantity"
                  placeholder="Enter quantity"
                  type="number"
                  required
                  value={subDetail.qty}
                  onChange={(e) => setSubDetail({ ...subDetail, qty: e.target.value })}
                />
                <Field
                  label="Number"
                  placeholder="Enter number"
                  type="number"
                  value={subDetail.number}
                  onChange={(e) => setSubDetail({ ...subDetail, number: e.target.value })}
                />
                <Field
                  label="Weight (Kg)"
                  placeholder="Enter weight"
                  type="number"
                  value={subDetail.weight}
                  onChange={(e) => setSubDetail({ ...subDetail, weight: e.target.value })}
                />
                <Field
                  label="Height (m)"
                  placeholder="Enter height"
                  type="number"
                  value={subDetail.height}
                  onChange={(e) => setSubDetail({ ...subDetail, height: e.target.value })}
                />
                <Field
                  label="Length (m)"
                  placeholder="Enter length"
                  type="number"
                  value={subDetail.length}
                  onChange={(e) => setSubDetail({ ...subDetail, length: e.target.value })}
                />
                <Field
                  label="Width"
                  placeholder="Enter width"
                  type="number"
                  value={subDetail.width}
                  onChange={(e) => setSubDetail({ ...subDetail, width: e.target.value })}
                />
              </div>
            </div>
          </Card>

          {/* Action Buttons - Matching Document Design */}
          <div className="flex justify-end gap-3 pt-2">
            <button className="h-10 px-10 rounded-full text-white text-sm font-semibold
                         bg-linear-to-r from-[#b22a3b] to-[#0b1d39]
                         shadow-[0_10px_18px_rgba(0,0,0,0.25)]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
