// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import { z } from "zod";
// import Select, { components, type DropdownIndicatorProps } from "react-select";
// import { useForm, Controller, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import "react-datepicker/dist/react-datepicker.css";
// import { jnvSchools } from "~/constants/jnvList";
// import { stateAndDistrict } from "~/constants/stateAndDistrict";
// import { useRouter } from "next/router";
// import { FaCaretDown } from "react-icons/fa";

// // const maxYear = new Date().getFullYear();

// interface Option {
//   label: string;
//   value: string;
// }

// const years = () => {
//   const currentYear = new Date().getFullYear();
//   const startYear = 1980;
//   const yearsArray = [];
//   for (let year = startYear; year <= currentYear; year++) {
//     yearsArray.push(year);
//   }
//   return yearsArray;
// };

// const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <FaCaretDown />
//     </components.DropdownIndicator>
//   );
// };

// const schema = z.object({
//   name: z.string().min(3).max(50),
//   email: z.string().email(""),
//   phone: z.string().min(10).max(15),
//   gender: z.string().min(1),
//   state: z.string().min(1),
//   district: z.string().min(1),
//   jnv: z.string().min(1),
//   passoutYear: z.string().min(4).max(4),
//   occupation: z.string().min(1),
//   currentLocation: z.string().min(1),
//   password: z.string().min(6),
// });

// type FormValues = z.infer<typeof schema>;

// const Registration: React.FC = () => {
//   const [districtSelectOptions, setDistrictSelectOptions] = useState<Option[]>(
//     [],
//   );
//   const [jnvSelectOptions, setJnvSelectOptions] = useState<Option[]>([]);
//   const router = useRouter();
//   const {
//     handleSubmit,
//     control,
//     register,
//     setValue,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log("data :", data);
//     router.push("/dashboard").catch((error) => {
//       console.error("Failed to navigate to dashboard:", error);
//     });
//     // Add your registration logic here
//   };

//   const handleStateChange = (selectedState: string) => {
//     setValue("state", selectedState);

//     const districts: string[] = stateAndDistrict[selectedState];
//     const jnvs: string[] = jnvSchools[selectedState];

//     setValue("district", "");
//     setValue("jnv", "");

//     setDistrictOptions(districts);
//     setJnvOptions(jnvs);
//   };

//   const setDistrictOptions = (districts: string[]) => {
//     const districtOptions = districts.map((district) => ({
//       label: district,
//       value: district,
//     }));

//     setDistrictSelectOptions(districtOptions);
//   };

//   const setJnvOptions = (jnvs: string[]) => {
//     const jnvOptions = jnvs.map((jnv) => ({
//       label: jnv,
//       value: jnv,
//     }));

//     setJnvSelectOptions(jnvOptions);
//   };
//   console.log("register :", register);
//   return (
//     <div className="card-body max-w-2xl">
//       <h1 className="card-title">Registration Form</h1>
//       <form className="" onSubmit={handleSubmit(onSubmit)}>
//         <label>
//           <div className="label">
//             <span className="label-text">Name</span>
//           </div>
//           <input
//             type="text"
//             placeholder="John Doe"
//             className="input input-bordered w-full"
//             {...register("name")}
//           />
//           {errors?.name?.message && (
//             <span className="text-red-600 text-sm">
//               {errors?.name?.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Email</span>
//           </div>
//           <input
//             type="text"
//             placeholder="john@doe.com"
//             className="input input-bordered w-full"
//             {...register("email")}
//           />
//           {errors.email && (
//             <span className="text-red-600 text-sm">{errors.email.message}</span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Phone</span>
//           </div>
//           <input
//             type="tel"
//             placeholder="+91-8989****90"
//             className="input input-bordered w-full"
//             {...register("phone")}
//           />
//           {errors.phone && (
//             <span className="text-red-600 text-sm">{errors.phone.message}</span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Gender</span>
//           </div>
//           <select
//             className="select select-bordered min-w-full"
//             {...register("gender")}
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && (
//             <span className="text-red-600 text-sm">
//               {errors.gender.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">State</span>
//           </div>
//           <select
//             className="select select-bordered min-w-full"
//             {...register("state")}
//             onChange={(e) => handleStateChange(e.target.value)}
//           >
//             {Object.keys(stateAndDistrict).map((state) => {
//               return <option value={state}>{state}</option>;
//             })}
//           </select>
//           {errors?.state && (
//             <span className=" text-red-600 text-sm">
//               {errors.state.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">District</span>
//           </div>
//           <Controller
//             name="district"
//             control={control}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 components={{ DropdownIndicator }}
//                 styles={{
//                   control: (baseStyles) => ({
//                     ...baseStyles,
//                     border: "1px solid #ccc",
//                     borderRadius: "8px",
//                     padding: "6px",
//                   }),
//                   option: (baseStyles) => ({
//                     ...baseStyles,
//                     divider: false,
//                     fontColor: "brand",
//                   }),
//                 }}
//                 options={districtSelectOptions}
//                 value={districtSelectOptions.find(
//                   (c) => c.value === field.value,
//                 )}
//                 onChange={(val) => field.onChange(val)}
//                 isDisabled={!districtSelectOptions.length}
//               />
//             )}
//           />
//           {errors.district && (
//             <span className=" text-red-600 text-sm">
//               {errors.district.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">JNV</span>
//           </div>
//           <Controller
//             name="jnv"
//             control={control}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 components={{ DropdownIndicator }}
//                 styles={{
//                   control: (baseStyles) => ({
//                     ...baseStyles,
//                     border: "1px solid #ccc",
//                     borderRadius: "8px",
//                     padding: "6px",
//                   }),
//                   option: (baseStyles) => ({
//                     ...baseStyles,
//                     divider: false,
//                     fontColor: "brand",
//                   }),
//                 }}
//                 options={jnvSelectOptions}
//                 value={jnvSelectOptions.find((c) => c.value === field.value)}
//                 onChange={(val) => field.onChange(val)}
//                 isDisabled={!jnvSelectOptions.length}
//               />
//             )}
//           />
//           {errors.jnv && (
//             <span className=" text-red-600 text-sm">
//               {errors?.jnv?.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Passout Year</span>
//           </div>
//           <select
//             className="select select-bordered min-w-full"
//             {...register("passoutYear")}
//           >
//             {years().map((year) => {
//               return <option value={year}>{year}</option>;
//             })}
//           </select>
//           {/* <Controller
//             name="passoutYear"
//             control={control}
//             render={({ field: { onChange, onBlur, value, ref } }) => (
//               <DatePicker
//                 className="rounded-md p-3 border border-gray-300 focus:border-gray-400 outline-none"
//                 selected={value ? new Date(value) : null}
//                 onChange={(date) => onChange(date)}
//                 onBlur={onBlur}
//                 showYearPicker
//                 dateFormat="yyyy"
//                 minDate={new Date(1980, 0, 1)}
//                 maxDate={new Date()}
//               />
//             )}
//           /> */}
//           {errors.passoutYear && (
//             <span className=" text-red-600 text-sm">
//               {errors.passoutYear.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Occupation</span>
//           </div>
//           <input
//             type="text"
//             placeholder="Software Engineer"
//             className="input input-bordered w-full"
//             {...register("occupation")}
//           />
//           {errors.occupation && (
//             <span className=" text-red-600 text-sm">
//               {errors.occupation.message}
//             </span>
//           )}
//         </label>
//         <label>
//           <div className="label">
//             <span className="label-text">Current Location</span>
//           </div>
//           <input
//             type="text"
//             placeholder="Banglore"
//             className="input input-bordered w-full"
//             {...register("currentLocation")}
//           />
//           {errors.currentLocation && (
//             <span className=" text-red-600 text-sm">
//               {errors.currentLocation.message}
//             </span>
//           )}
//         </label>

//         <label>
//           <div className="label">
//             <span className="label-text">Password</span>
//           </div>
//           <input
//             type="password"
//             placeholder="Enter Your Password"
//             className="input input-bordered w-full"
//             {...register("password")}
//           />
//           {errors.password && (
//             <span className=" text-red-600 text-sm">
//               {errors.password.message}
//             </span>
//           )}
//         </label>
//         <button
//           className="btn btn-primary bg-brand hover:bg-blue-900 w-full mt-8"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;
