// HTMLبصفحتك ال scripts.js قم بربط ملف -->

// المهام -->

// المهمة الأولى -->

// .في هذه المهمة، ستقوم بإنشاء نظام توظيف
//    .ستطرح على المستخدم بعض الأسئلة، واعتمادًا على إجاباته، ستقبل مقدم الطلب أو ترفضه -->

// :لقبول المتقدم للوظيفة يجد أن تتوفر فيه ثلاث شروط  -->

// أن يكون عمره أكبر من 25 وأقل من 40 -->
// أن تكون عنده سنوات خبرة تزيد عن 3 سنوات -->
// أن تكون إحدى لغات البرمجة التي يبرمج بها المتقدم للوظيفة
//    هي لغة البرمجة المطلوبة من قبل البرنامج -->

// قم بكتابة السطور البرمجية اللازمة
//  qu1.mov للحصول على النتيجة الموضحة في الفيديو -->

// 🔥بونص المهمة الأولى -->
// قم ببناء واجهة تستقبل المدخلات من المستخدم عن طريق حقول إدخال
//    وإظهار النتائج على الصفحة -->
// let age = "";
// let exp = "";
// let sytx = "";

// function job() {
//   age = document.getElementById("age").value;
//   exp = document.getElementById("exp").value;
//   sytx = document.getElementById("sytx").value;

//   document.getElementById("accept").innerHTML = "";
//   if (
//     (age > 25 && age < 40 && exp > 3 && sytx.includes(4)) ||
//     sytx.includes(2)
//   ) {
//     document.getElementById("accept").innerHTML = "لقد تم قبولك!";
//   } else {
//     document.getElementById("accept").innerHTML =
//       "انت لست جيد بالشكل الكافي لتعمل لدينا";
//   }
// }

// function syntaxes() {
//   alert(
//     "اختر اللغات " +
//       "\n" +
//       "1.HTML" +
//       "\n" +
//       "2.JavaScript" +
//       "\n" +
//       "3.CSS" +
//       "\n" +
//       "4.Python"
//   );
// }

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// المهمة الثانية -->

// 🌡في هذه المهمة، ستقوم ببناء مقياس درجات حرارة فاخر -->

// الخطوات -->

// consoleقم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وتقوم بطباعتها في ال -->
// classwork في ال logger() تذكر دالة -->

// قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة بالفهرنهايت
//   وترجع مصفوفة بهذه القيم محولة إلى المقياس السيليزي -->
// C = (F - 32) * (5/9) استخدم العملية -->

// قم بكتابة دالة تستقبل مصفوفة من درجات بالمقيا السيليزي وقيمة مبدئية/أولية
//   وتقوم بإرجاع مصفوفة من درجات الحرارة الأكبر من القيمة المبدئية -->
// classwork في ال hottestDays() تذكر دالة -->

// قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وقيمة مبدئية بالفهرنهايت -->
// console وتقوم بطباعة درجات الحرارة الأكبر من القيمة المبدئية بالسيليزي في ال -->

// قم بكتابة السطور البرمجية اللازمة
//    task22.png و task21.png للحصول على النتيجة الموضحة في الصور -->

// 🔥بونص المهمة الثانية -->
// for loop بدلاً من .forEach .filter .map قم باستخدام طرق -->

// let tempretures = [30, 42, 45, 15, 53];

// function logger(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// logger(tempretures);
// console.log("--------------------------------");

// //-------------------
// let f = [101, 95, 74, 69, 120.51];
// let f_to_c = [];

// function ftoc(array) {
//   for (let i = 0; i < array.length; i++) {
//     f_to_c.push(parseInt(((array[i] - 32) * 5) / 9));
//   }
//   return f_to_c;
// }
// console.log(ftoc(f));

// console.log("--------------------------------");

// // //------------------------

// let hot = 30;
// let hottest = [];

// function hottt_sadface(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > hot) {
//       hottest.push(array[i]);
//     }
//   }
//   return hottest;
// }
// console.log(hottt_sadface(tempretures));

// console.log("-------------------------------"); //-------------------
// f = [101, 95, 74, 69, 120.51];
// let hotinf = 90;

// let hotinfarray = [];

// let hottestinc = [];
// function hot_v2(array) {
//   array.forEach((item) => {
//     if (item > hotinf) {
//       hotinfarray.push(item);
//     }
//   });
//   console.log([hotinfarray] + "  this is fahrenheit");

//   for (let i = 0; i < array.length; i++) {
//     hottestinc.push(parseInt(((array[i] - 32) * 5) / 9));
//   }
//   return hottestinc;
// }

// console.log(hot_v2(f));
// console.log(" this is celsius ^^^^");

// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- -->

// المهمة الثالثة -->

// في هذه المهمة ستقوم بإنشاء حاسبة درجات -->

// تستقبل الآلة الحاسبة درجاتك في من خلال حقول إدخال -->
//
//  quizes      /10
//  midterm     /25
// final test  /50
//  oral        /15

// تقوم الآلة الحاسبة بإجراء الحسابات اللازمة لحساب مجموع درجاتك بحيث -->
//
//   90 - 100                 A
//   أكبر من أو يساوي 80      B
//  أكبر من أو يساوي 70      C
//  أكبر من أو يساوي 60      D
//  عدا ذلك                  F

// ثم يظهر مجموعك النهائي على الصفحة
//    A, B, C, D or F مع درجتك بالحروف -->

// 🔥بونص المهمة الثالثة -->
// قم بجعل المستخدم يدخل درجاته دفعة
// وكتابة فاصلة بين كل درجة ودرجة
//  task3 فتصبح بحاجة إلى استخدام حقل إدخال واحد فقط كما في الصورة -->

// A, B, C, D or F مميز في الصفحة لكل درجة GIF قم بإدراج -->

// HTML and CSS قم بإنشاء التصميم الخاص بك للموقع من خلال لغتي -->]

let grade = document.querySelector("#grade");
let number = document.querySelector("#number");
let letter = document.querySelector("#letter");
let gif = document.querySelector("#img");

function calculate() {
  let total = 0;
  let grades = grade.value;
  let onegrade = grades.split(",");
  onegrade.forEach((element) => {
    total += parseFloat(element);
  });
  if (isNaN(total)) {
    number.innerHTML = "Please enter your grade";
    letter.innerHTML = "Please enter your grade";
  } else {
    number.innerHTML = total;
    switch (true) {
      case total >= 90 && total <= 100:
        letter.innerHTML = "A";
        gif.setAttribute(
          "src",
          "https://media.giphy.com/media/MOWPkhRAUbR7i/giphy.gif"
        );

        break;
      case total >= 80:
        letter.innerHTML = "B";
        gif.setAttribute(
          "src",
          "https://media.giphy.com/media/vcKEsYOdjoCeJRpn95/giphy.gif"
        );
        break;
      case total >= 70:
        letter.innerHTML = "C";
        gif.setAttribute("src", "./ezgif.com-crop.gif");
        break;
      case total >= 60:
        letter.innerHTML = "D";
        gif.setAttribute(
          "src",
          "https://media.giphy.com/media/52FIoKwgrQhezqXxCB/giphy.gif"
        );
        break;

      default:
        letter.innerHTML = "F";
        gif.setAttribute(
          "src",
          "https://media.giphy.com/media/d10dMmzqCYqQ0/giphy.gif"
        );
    }
  }
}

// 😈لننتقل إلى المرحلة التالية -->

// انتبه المرحلة القادمة أصعب -->
// بالشكل المطلوب JavaScript إياك والتقدم إن لم تكن قد فهمت أساسيات -->

// ⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮⾮ -->

// المهمة الرابعة -->
//
//   ------------------------------------------------------------------
//  #                                                                #
//   #                                                                #
//   #                    هذه المهمة محجوبة حالياً                     #
//  #                إلى أن تنتهي من المهام الثلاث الأولى              #
//  #                                                                #
//  #                                                                #
// #                                                                #
///    ------------------------------------------------------------------
//-->

// المهمة الخامسة -->
//
//  ------------------------------------------------------------------
//  #                                                                #
// #                                                                #
//#                    هذه المهمة محجوبة حالياً                     #
// #                إلى أن تنتهي من المهام الثلاث الأولى              #
//#                                                                #
//  #                                                                #
// #                                                                #
//    ------------------------------------------------------------------
