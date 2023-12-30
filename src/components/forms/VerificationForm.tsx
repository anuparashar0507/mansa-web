// import React, { useEffect, useState } from "react";

// const poemLines: string[] = [
//   "रंग जाति पद भेद रहित हम",
//   "सबका एक भगवन हो",
//   "संतान हैं धरती माँ की हम",
//   "धरती पूजा स्थान हो",
//   "पूजा के खिल रहे कमल दल",
//   "हम भावजल में हों",
//   "सर्वोदय के नव बसंत के, हमी नवोदय हों",
//   "मानव हैं हम हलचल हम",
//   "प्रकृति के पावन वेश में",
//   "खिलें फलें हम में संस्कृति",
//   "इस अपने भारत देश की, अपने भारत देश की",
//   "हम हिमगिरि हम नदियाँ हम",
//   "सागर की लहरें हों",
//   "जीवन की मंगलमाटी के, हमीं नवोदय हों",
// ];

// const VerificationForm: React.FC = () => {
//   const [error, setError] = useState<string | null>(null);
//   const [randomLine, setRandomLine] = useState<string>("");
//   const [options, setOptions] = useState<string[]>([]);
//   const [selectedOption, setSelectedOption] = useState<string>("");

//   const [chances, setChances] = useState<number>(3);
//   //   const {
//   //     control,
//   //     watch,
//   //     formState: { errors },
//   //     handleSubmit,
//   //   } = useForm<FormData>();

//   const getRandomLine = (): string => {
//     const randomIndex = Math.floor(Math.random() * (poemLines.length - 1));
//     return poemLines[randomIndex] ?? "";
//   };

//   const getNextLine = (line: string) => {
//     const index = poemLines.indexOf(line);
//     return poemLines[index + 1];
//   };

//   function generateOptions() {
//     let randomIndex = Math.floor(Math.random() * (poemLines.length - 1));
//     randomIndex == 5
//       ? (randomIndex = 6)
//       : randomIndex == poemLines.length - 1
//         ? randomIndex == 0
//         : randomIndex;
//     const rl = poemLines[randomIndex] ?? "";
//     const nl = poemLines[randomIndex + 1] ?? "";
//     const opt = [nl];
//     while (opt.length < 4) {
//       const randomLine = getRandomLine();
//       if (randomLine) {
//         if (randomLine !== nl && randomLine !== rl) {
//           opt.push(randomLine);
//         }
//       }
//     }
//     setRandomLine(rl);
//     const randomOpt = opt.sort(() => Math.random() - 0.5);
//     setOptions(randomOpt);
//   }

//   const handleFormSubmit = (
//     data: React.SyntheticEvent<HTMLInputElement, Event>,
//   ) => {
//     console.log("CLICKED :- ", data);
//     // if (data.nextLine === getNextLine(randomLine)) {
//     //   //   setRandomLine(getRandomLine());
//     //   //   setOptions(generateOptions(getNextLine(randomLine)));
//     //   setChances(3);
//     //   console.log("CORRECT ");
//     //   //   setError(null);
//     //   //   onSubmit(data);
//     // } else {
//     //   setChances(chances - 1);
//     //   if (chances === 1) {
//     //     // window.location.href = "/";
//     //     setError("You're a proud Navodayan");
//     //   } else {
//     //     setError("Incorrect answer. Please try again.");
//     //   }
//     // }
//   };

//   useEffect(() => {
//     generateOptions();
//   }, []);

//   return (
//     <div className="w-full max-w-md mt-4">
//       <label>Only a Navodayan knows this</label>
//       {randomLine && (
//         <form>
//           <p className="font-bold mt-4">{randomLine}</p>
//           {options.map((option, index) => (
//             <div key={index} className="flex gap-2">
//               <input
//                 type="radio"
//                 value={option}
//                 onSelect={(e) => setSelectedOption(e.target.value)}
//                 className="form-radio"
//               />
//               <label htmlFor={`option${index}`}>{option}</label>
//             </div>
//           ))}

//           <button
//             type="submit"
//             className="btn btn-outline font-bold py-2 px-4 rounded"
//           >
//             Verify
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//           <p>Chances left: {chances}</p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default VerificationForm;
