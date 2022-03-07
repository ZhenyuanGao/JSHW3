const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",

    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

const table = document.createElement("table");
table.id = "table";
//table.textContent = "hello";
document.body.appendChild(table);

function fillRow({ studentName, Age, Phone, Address }) {
  let sn = document.createElement("td");

  let sa = document.createElement("td");
  let sp = document.createElement("td");
  let sad = document.createElement("td");

  sn.textContent = studentName;
  sa.textContent = Age;
  sp.textContent = Phone;
  sad.textContent = Address;

  return [sn, sa, sp, sad];
}

const EleForRow = [];

tableInfo.forEach(({ studentName, Age, Phone, Address }) => {
  EleForRow.push(fillRow({ studentName, Age, Phone, Address }));
});

const myHeader = {
  studentName: "Student Name",
  Age: "Age",
  Phone: "Phone #",
  Address: "Address",
};

//console.log(myHeader.headername);

EleForRow.unshift(fillRow(myHeader));

EleForRow.forEach((item) => {
  let ro1 = document.createElement("tr");
  ro1.append(...item);
  table.appendChild(ro1);
});

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const ol = document.createElement("ol");
document.body.appendChild(ol);
let counter = 0;

list.forEach((item) => {
  let li = document.createElement("li");
  li.id = `${item}${counter}`;
  li.textContent = item;
  ol.appendChild(li);
  console.log(li.id);
  counter += 1;
});

//console.log(list);

const ul = document.createElement("ul");
document.body.appendChild(ul);

function callBack(item) {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

list.map(callBack);

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const dl = document.createElement("select");
document.body.append(dl);

function makingDL({ value, content }) {
  let option = document.createElement("option");
  option.textContent = content;
  option.value = value;

  return option;
}

dropDownList.map(({ value, content }) => {
  dl.append(makingDL({ value, content }));
});
