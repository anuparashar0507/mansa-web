// import React, { useEffect, useState, type ChangeEvent } from "react";
// import ComboBoxWrapper from "../ui/ComboBoxWrapper";

// const VerificationForm: React.FC = () => {
//   const [error, setError] = useState<string | null>(null);
//   const [randomLine, setRandomLine] = useState<string>("");
//   const [options, setOptions] = useState<string[]>([]);
//   const [selectedOption, setSelectedOption] = useState<string>("");

//   const [chances, setChances] = useState<number>(3);

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

//   const handleFormSubmit = () => {
//     // console.log("CLICKED :- ", data);
//     // preventDefault();

//     if (selectedOption === getNextLine(randomLine)) {
//       //   setRandomLine(getRandomLine());
//       //   setOptions(generateOptions(getNextLine(randomLine)));
//       setChances(3);
//       console.log("CORRECT ");
//       //   setError(null);
//       //   onSubmit(data);
//     } else {
//       setChances(chances - 1);
//       if (chances === 1) {
//         // window.location.href = "/";
//         setError("You're a proud Navodayan");
//       } else {
//         setError("Incorrect answer. Please try again.");
//       }
//     }
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
//           {/* {options.map((option, index) => ( */}
//           {/* <div key={index} className="flex gap-2"> */}
//           {/* <ComboBoxWrapper
//                 type="radio"
//                 value={option}
//                 onSelect={(e) => }
//                 className="form-radio"
//               /> */}
//           <ComboBoxWrapper
//             label="State"
//             placeholder="Select State"
//             value={selectedOption}
//             onChange={(e) => {
//               setSelectedOption(e.toString());
//               // do your own change event
//             }}
//             options={options.map((state, index) => ({
//               id: index,
//               label: state,
//               value: state,
//             }))}
//             required={true}
//           />
//           {/* <label htmlFor={`option${index}`}>{option}</label> */}
//           {/* </div> */}
//           {/* ))} */}

//           <button
//             type="submit"
//             className="btn btn-outline font-bold py-2 px-4 rounded"
//             onClick={handleFormSubmit}
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
