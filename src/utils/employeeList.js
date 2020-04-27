const employeeList = [
  { id: "BUS-000", name: "Demo", email: "demo", reporting: "" },
  {
    id: "BUS-048",
    name: "Sathiya M",
    email: "sathiya.m@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-053",
    name: "Anugrahaa Rethinakumar",
    email: "anugrahaa.r@busofttech.com",
    reporting: "Sathiya M"
  },
  {
    id: "BUS-055",
    name: "Poornimadevi M",
    email: "poornimadevi.m@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-050",
    name: "Charulatha D",
    email: "charulatha.d@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-001",
    name: "Swaminathan",
    email: "swami.venkat@busofttech.com",
    reporting: ""
  },
  {
    id: "BUS-002",
    name: "Karthikeyan Chandrasekaran",
    email: "karthik.c@busofttech.com",
    reporting: "Swaminathan"
  },
  {
    id: "BUS-003",
    name: "Kartheesan",
    email: "kartheesan.j@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-007",
    name: "John Dhiraviam",
    email: "john.a@busofttech.com",
    reporting: "Srinivasan"
  },
  {
    id: "BUS-012",
    name: "Arunachalam",
    email: "arunachalam.v@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-014",
    name: "Lakshminarasimhan",
    email: "lakshminarasimhan.r@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-021",
    name: "Vasanthakumar",
    email: "vasanthakumar.c@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-023",
    name: "Premkumar",
    email: "premkumar.m@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-028",
    name: "Arunkumar",
    email: "arunkumar.m@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-030",
    name: "Srinivasan",
    email: "srinivasan.tk@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-032",
    name: "Hareesh Babu",
    email: "hareeshbabu.v@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-035",
    name: "Abdul",
    email: "abdulkapoor.j@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-036",
    name: "Gifla Grace",
    email: "giflagrace.k@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-037",
    name: "Chithresh Kannan",
    email: "chithresh.k@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-038",
    name: "Ashok s",
    email: "ashok.s@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-044",
    name: "Dinesh",
    email: "dinesh.n@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-045",
    name: "Selvi",
    email: "selvi.t@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-046",
    name: "Michael Jose",
    email: "michaeljose.j@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-047",
    name: "Aswani Balan",
    email: "aswani.b@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-049",
    name: "Sowmiya J",
    email: "sowmiya.j@busofttech.com",
    reporting: "Bulbuli Swain"
  },
  {
    id: "BUS-051",
    name: "Muthuraman A",
    email: "muthuraman.a@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-054",
    name: "Anantha Jothi M",
    email: "ananthajothi.m@busofttech.com",
    reporting: "Sathiya M"
  },
  {
    id: "BUS-056",
    name: "Ramkumar Kolpurath",
    email: "ram.kolpurath@busofttech.com",
    reporting: "Swaminathan"
  },
  {
    id: "BUS-057",
    name: "Priyadharshini Gopal",
    email: "priyadharshini.g@busofttech.com",
    reporting: "Ramkumar Kolpurath"
  },
  {
    id: "BUS-058",
    name: "Bulbuli Swain",
    email: "bulbuli.swain@busofttech.com",
    reporting: "Karthikeyan Chandrasekaran"
  },
  {
    id: "BUS-059",
    name: "Sangeetha Sundaram",
    email: "sangeetha.s@busofttech.com",
    reporting: "Ramkumar Kolpurath"
  },
  {
    id: "BUS-060",
    name: "Rajkumar Marimuthu",
    email: "rajkumar.m@busofttech.com",
    reporting: "Ramkumar Kolpurath"
  },
  {
    id: "BUS-061",
    name: "Ganesh Ezhilarasu",
    email: "ganesh.e@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-062",
    name: "Sathiyakumar Paneerselvam",
    email: "sathiyakumar.p@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-063",
    name: "Goutham Kumar Arumugam",
    email: "gouthamkumar.a@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-064",
    name: "Kalaimagal Eswaran",
    email: "kalaimagal.e@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-065",
    name: "Vijailakshmi R",
    email: "vijailakshmi.r@busofttech.com",
    reporting: "Ramkumar Kolpurath"
  },
  {
    id: "BUS-066",
    name: "Manikandan Badhri Narayanan",
    email: "manikandan.b@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-067",
    name: "Ivin Neraash Christo",
    email: "ivinchristo.c@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-068",
    name: "Kanchana Jagadeesan",
    email: "kanchana.j@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-069",
    name: "Sowmiya Thirunavukkarasu",
    email: "sowmiya.t@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-070",
    name: "Vadivel Murugan Venkatachalam",
    email: "vadivelmurugan.v@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-071",
    name: "Arun Kumar Arumugam",
    email: "arunkumar.a@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-072",
    name: "Manickam Govindan",
    email: "manickam.g@busofttech.com",
    reporting: "Sangeetha Sundaram"
  },
  {
    id: "BUS-073",
    name: "Chidambaram C T",
    email: "chidambaram.c@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-074",
    name: "Rajkumar S",
    email: "rajkumar.s@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-075",
    name: "Ajan Babu",
    email: "ajanbabu.b@busofttech.com",
    reporting: "Kartheesan"
  },
  {
    id: "BUS-076",
    name: "Jai Kumar Mohan",
    email: "jaikumar.m@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-077",
    name: "Ramprakash D",
    email: "ramprakash.d@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-078",
    name: "Rajasekaran T",
    email: "rajasekaran.t@busofttech.com",
    reporting: "Ramkumar Kolpurath"
  },
  {
    id: "BUS-079",
    name: "Sundharavel M",
    email: "sundharavel.m@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-080",
    name: "Ajith C",
    email: "ajith.c@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-081",
    name: "Gokul M",
    email: "gokul.m@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-082",
    name: "Sonu G",
    email: "sonu.g@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-083",
    name: "Vasudevan R",
    email: "vasudevan.r@busofttech.com",
    reporting: "Rajkumar Marimuthu"
  },
  {
    id: "BUS-084",
    name: "Yuvadeepika S",
    email: "yuvadeepika.s@busofttech.com",
    reporting: "Priyadharshini Gopal"
  },
  {
    id: "BUS-085",
    name: "Nagarajan S",
    email: "nagarajan.s@busofttech.com",
    reporting: "Priyadharshini Gopal"
  }
];

export default employeeList;
