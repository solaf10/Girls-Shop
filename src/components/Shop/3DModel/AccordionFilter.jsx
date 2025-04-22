// // import React from "react";

// // export default function AccordionFilter() {
// //   return (
// //     <div>
// //       <div class="container">
// //         <div class="card p-4 shadow-sm rounded-4">
// //           <h2 class="text-center mb-4">فلترة المنتجات</h2>

// //           <div class="accordion" id="filterAccordion">
// //             <div class="accordion-item">
// //               <h2 class="accordion-header" id="headingOne">
// //                 <button
// //                   class="accordion-button"
// //                   type="button"
// //                   data-bs-toggle="collapse"
// //                   data-bs-target="#collapseOne"
// //                   aria-expanded="true"
// //                   aria-controls="collapseOne"
// //                 >
// //                   الأرائك
// //                 </button>
// //               </h2>
// //               <div
// //                 id="collapseOne"
// //                 class="accordion-collapse collapse show"
// //                 aria-labelledby="headingOne"
// //                 data-bs-parent="#filterAccordion"
// //               >
// //                 <div class="accordion-body">
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="sofa1"
// //                     />
// //                     <label class="form-check-label" for="sofa1">
// //                       كنبة زاوية
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="sofa2"
// //                     />
// //                     <label class="form-check-label" for="sofa2">
// //                       كنبة سرير
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="sofa3"
// //                     />
// //                     <label class="form-check-label" for="sofa3">
// //                       كنبة جلد
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div class="accordion-item">
// //               <h2 class="accordion-header" id="headingTwo">
// //                 <button
// //                   class="accordion-button collapsed"
// //                   type="button"
// //                   data-bs-toggle="collapse"
// //                   data-bs-target="#collapseTwo"
// //                   aria-expanded="false"
// //                   aria-controls="collapseTwo"
// //                 >
// //                   الطاولات
// //                 </button>
// //               </h2>
// //               <div
// //                 id="collapseTwo"
// //                 class="accordion-collapse collapse"
// //                 aria-labelledby="headingTwo"
// //                 data-bs-parent="#filterAccordion"
// //               >
// //                 <div class="accordion-body">
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="table1"
// //                     />
// //                     <label class="form-check-label" for="table1">
// //                       طاولة قهوة
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="table2"
// //                     />
// //                     <label class="form-check-label" for="table2">
// //                       طاولة طعام
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="table3"
// //                     />
// //                     <label class="form-check-label" for="table3">
// //                       طاولة جانبية
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div class="accordion-item">
// //               <h2 class="accordion-header" id="headingThree">
// //                 <button
// //                   class="accordion-button collapsed"
// //                   type="button"
// //                   data-bs-toggle="collapse"
// //                   data-bs-target="#collapseThree"
// //                   aria-expanded="false"
// //                   aria-controls="collapseThree"
// //                 >
// //                   الأسِرّة
// //                 </button>
// //               </h2>
// //               <div
// //                 id="collapseThree"
// //                 class="accordion-collapse collapse"
// //                 aria-labelledby="headingThree"
// //                 data-bs-parent="#filterAccordion"
// //               >
// //                 <div class="accordion-body">
// //                   <div class="form-check">
// //                     <input class="form-check-input" type="checkbox" id="bed1" />
// //                     <label class="form-check-label" for="bed1">
// //                       سرير مفرد
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input class="form-check-input" type="checkbox" id="bed2" />
// //                     <label class="form-check-label" for="bed2">
// //                       سرير مزدوج
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input class="form-check-input" type="checkbox" id="bed3" />
// //                     <label class="form-check-label" for="bed3">
// //                       سرير بطابقين
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div class="accordion-item">
// //               <h2 class="accordion-header" id="headingFour">
// //                 <button
// //                   class="accordion-button collapsed"
// //                   type="button"
// //                   data-bs-toggle="collapse"
// //                   data-bs-target="#collapseFour"
// //                   aria-expanded="false"
// //                   aria-controls="collapseFour"
// //                 >
// //                   الخزائن
// //                 </button>
// //               </h2>
// //               <div
// //                 id="collapseFour"
// //                 class="accordion-collapse collapse"
// //                 aria-labelledby="headingFour"
// //                 data-bs-parent="#filterAccordion"
// //               >
// //                 <div class="accordion-body">
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="cabinet1"
// //                     />
// //                     <label class="form-check-label" for="cabinet1">
// //                       خزانة ملابس
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="cabinet2"
// //                     />
// //                     <label class="form-check-label" for="cabinet2">
// //                       خزانة كتب
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="cabinet3"
// //                     />
// //                     <label class="form-check-label" for="cabinet3">
// //                       خزانة أحذية
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div class="accordion-item">
// //               <h2 class="accordion-header" id="headingFive">
// //                 <button
// //                   class="accordion-button collapsed"
// //                   type="button"
// //                   data-bs-toggle="collapse"
// //                   data-bs-target="#collapseFive"
// //                   aria-expanded="false"
// //                   aria-controls="collapseFive"
// //                 >
// //                   الديكور
// //                 </button>
// //               </h2>
// //               <div
// //                 id="collapseFive"
// //                 class="accordion-collapse collapse"
// //                 aria-labelledby="headingFive"
// //                 data-bs-parent="#filterAccordion"
// //               >
// //                 <div class="accordion-body">
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="decor1"
// //                     />
// //                     <label class="form-check-label" for="decor1">
// //                       مرايا
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="decor2"
// //                     />
// //                     <label class="form-check-label" for="decor2">
// //                       سجاد
// //                     </label>
// //                   </div>
// //                   <div class="form-check">
// //                     <input
// //                       class="form-check-input"
// //                       type="checkbox"
// //                       id="decor3"
// //                     />
// //                     <label class="form-check-label" for="decor3">
// //                       لوحات
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./FurnitureFilter.css";

// export default function FurnitureFilter(.
// ) {
//   const [selectedType, setSelectedType] = useState(null);

//   const categories = [
//     {
//       name: "الأرائك",
//       types: ["كنبة زاوية", "كنبة سرير", "كنبة جلد"],
//     },
//     {
//       name: "الطاولات",
//       types: ["طاولة قهوة", "طاولة طعام", "طاولة جانبية"],
//     },
//     {
//       name: "الأسِرّة",
//       types: ["سرير مفرد", "سرير مزدوج", "سرير بطابقين"],
//     },
//     {
//       name: "الخزائن",
//       types: ["خزانة ملابس", "خزانة كتب", "خزانة أحذية"],
//     },
//     {
//       name: "الديكور",
//       types: ["مرايا", "سجاد", "لوحات"],
//     },
//   ];

//   const handleTypeSelect = (type) => {
//     setSelectedType((prev) => (prev === type ? null : type));
//   };

//   useEffect(() => {
//     const collapses = document.querySelectorAll(".accordion-collapse");
//     collapses.forEach((collapse) => {
//       collapse.addEventListener("show.bs.collapse", () => {
//         collapse.classList.add("animate-open");
//         collapse.classList.remove("animate-close");
//       });
//       collapse.addEventListener("hide.bs.collapse", () => {
//         collapse.classList.remove("animate-open");
//         collapse.classList.add("animate-close");
//       });
//     });
//   }, []);

//   return (
//     <div className="container py-4" dir="rtl">
//       <div className="card p-4 shadow-sm rounded-4">
//         <h2 className="text-center mb-4">فلترة المنتجات</h2>
//         <div className="accordion" id="filterAccordion">
//           {categories.map((category, index) => (
//             <div className="accordion-item" key={index}>
//               <h2 className="accordion-header" id={`heading${index}`}>
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse${index}`}
//                   aria-expanded="false"
//                   aria-controls={`collapse${index}`}
//                 >
//                   {category.name}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${index}`}
//                 className="accordion-collapse collapse"
//                 aria-labelledby={`heading${index}`}
//                 data-bs-parent="#filterAccordion"
//               >
//                 <div className="accordion-body">
//                   {category.types.map((type, idx) => (
//                     <div className="form-check" key={idx}>
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="typeSelect"
//                         id={`type-${index}-${idx}`}
//                         checked={selectedType === type}
//                         onChange={() => handleTypeSelect(type)}
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor={`type-${index}-${idx}`}
//                       >
//                         {type}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function AccordionFilter() {
  return <div></div>;
}
