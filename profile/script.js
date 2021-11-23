const bodyHeader = document.createElement("header");
bodyHeader.classList.add("head");
document.body.append(bodyHeader);

const header_image = document.createElement("img");
header_image.setAttribute("src", "./Sulley.jpg");
header_image.classList.add("photo");
bodyHeader.appendChild(header_image);

const nameBar = document.createElement("div");
nameBar.classList.add("nameBar");
bodyHeader.appendChild(nameBar);

const whiteBar = document.createElement("div");
whiteBar.classList.add("whiteBar");
nameBar.appendChild(whiteBar);

const nameBar_h1 = document.createElement("h1");
nameBar_h1.classList.add("name");
nameBar_h1.style.fontSize = "40px";
nameBar_h1.innerText = "narayana";
nameBar.appendChild(nameBar_h1);

/* Body Main */

/* Contact Details */
const body_main = document.createElement("main");
document.body.append(body_main);

const contact = document.createElement("div");
contact.classList.add("contact");
body_main.appendChild(contact);

const contact_p = document.createElement("p");
contact_p.style.fontSize = "17px";
contact_p.innerText =
    "narayana, andhra pradesh, 534101 | 9958571972 | narayanjasthi@gmail.com |";
contact.appendChild(contact_p);

const contact_HR = document.createElement("HR");
contact.appendChild(contact_HR);

/* Main Table */

const details = document.createElement("div");
details.classList.add("details");
details.style.setProperty("margin", "0 20px 0 20px");
body_main.appendChild(details);

const tb1 = document.createElement("table");
tb1.classList.add("tb1");
details.appendChild(tb1);

const tr_1_tb1 = document.createElement("tr");
tb1.appendChild(tr_1_tb1);

const tdLeft = document.createElement("td");
tdLeft.classList.add("tdLeft");
tdLeft.style.setProperty("border-right", "1px solid grey");
tdLeft.style.setProperty("margin-left", "20px");
tr_1_tb1.appendChild(tdLeft);

const tbLeft = document.createElement("table");
tbLeft.classList.add("tbLeft");
tdLeft.appendChild(tbLeft);

const tr_profile = document.createElement("tr");
tr_profile.classList.add("profile");
tbLeft.appendChild(tr_profile);

const td_profile = document.createElement("td");
tr_profile.appendChild(td_profile);

const face_icon = document.createElement("span");
face_icon.classList.add("material-icons");
face_icon.innerText = "face";
td_profile.appendChild(face_icon);

const profile_name = document.createElement("b");
profile_name.style.setProperty("font-size", "17px");
profile_name.innerText = "Profile";
td_profile.appendChild(profile_name);

const br1 = document.createElement("br");
td_profile.appendChild(br1);

const profile_p = document.createElement("p");
profile_p.classList.add("tab2");
profile_p.innerText =
    "I am a full stack developer with strong fundamentals in python and js with hands on experience Djonga, Bootstrap, MERN. ";
td_profile.appendChild(profile_p);

const tr_skills = document.createElement("tr");
tr_skills.classList.add("skills");
tbLeft.appendChild(tr_skills);

const td_skills = document.createElement("td");
tr_skills.appendChild(td_skills);

const lab_icon = document.createElement("span");
lab_icon.classList.add("material-icons");
lab_icon.innerText = "science";
td_skills.appendChild(lab_icon);

const skills_name = document.createElement("b");
skills_name.style.setProperty("font-size", "17px");
skills_name.innerText = "Skills";
td_skills.appendChild(skills_name);

const br2 = document.createElement("br");
td_skills.appendChild(br2);
const br12 = document.createElement("br");
td_skills.appendChild(br12);


const skills_p = document.createElement("p");
skills_p.classList.add("tab2");
const skills_b = document.createElement("b");
skills_b.innerText = "Technical Skills";
skills_p.appendChild(skills_b);
td_skills.appendChild(skills_p);

const br3 = document.createElement("br");
skills_p.appendChild(br3);
const br13 = document.createElement("br");
skills_p.appendChild(br13);

const JS_span = document.createElement("span");
JS_span.classList.add("tab2");
const JS_b = document.createElement("b");
JS_span.appendChild(JS_b);
JS_b.innerText = "JavaScript";
skills_p.appendChild(JS_span);

const grad1 = document.createElement("span");
grad1.classList.add("grad1");
grad1.style.setProperty("margin-left", "5%");
grad1.style.setProperty("width", "180px");
skills_p.appendChild(grad1);


const tr_work = document.createElement("tr");
tr_work.classList.add("work");
tbLeft.appendChild(tr_work);

const td_work = document.createElement("td");
tr_work.appendChild(td_work);

const constr_icon = document.createElement("span");
constr_icon.classList.add("material-icons");
constr_icon.innerText = "business_center";
td_work.appendChild(constr_icon);

const work_name = document.createElement("b");
work_name.style.setProperty("font-size", "17px")
work_name.innerText = "work Experience";
td_work.appendChild(work_name);


const work_p_2 = document.createElement("p");
work_p_2.classList.add("tab3");
work_p_2.innerText =
    "I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis. I have 5 star rating from the clients all across the globe. I have worked as a full time role for company1 and company2.";
td_work.appendChild(work_p_2);
const br14 = document.createElement("br");
skills_p.appendChild(br14);


const work_p_5 = document.createElement("p");
work_p_5.classList.add("tab2");
const work_b_1 = document.createElement("b");
work_b_1.innerText = "Company 1";
work_p_5.appendChild(work_b_1)
td_work.appendChild(work_p_5);

const br15 = document.createElement("br");
skills_p.appendChild(br15);

const work_p_3 = document.createElement("p");
work_p_3.classList.add("tab2");
work_p_3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
td_work.appendChild(work_p_3);

const br10 = document.createElement("br");
td_work.appendChild(br10);


const work_p_6 = document.createElement("p");
work_p_6.classList.add("tab2");
const work_b_2 = document.createElement("b");
work_b_2.innerText = "Company 2";
work_p_6.appendChild(work_b_2);
td_work.appendChild(work_p_6);

const work_p_7 = document.createElement("p");
work_p_7.classList.add("tab3");
work_p_7.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
td_work.appendChild(work_p_7);



const tdRight = document.createElement("td");
tdRight.classList.add("tdRight");
tr_1_tb1.appendChild(tdRight);

const tbRight = document.createElement("table");
tbRight.classList.add("tbRight");
tdRight.append(tbRight);



const tr_works = document.createElement("tr");
tr_works.classList.add("work");
tbRight.appendChild(tr_works);

const td_works = document.createElement("td");
tr_works.appendChild(td_works);

const works_p_10 = document.createElement("p");
works_p_10.classList.add("tab2");
const works_b_3 = document.createElement("b");
works_b_3.innerText = "Company 3";
works_p_10.appendChild(works_b_3);
td_works.appendChild(works_p_10);

const works_p_11 = document.createElement("p");
works_p_11.classList.add("tab3");
works_p_11.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
td_works.appendChild(works_p_11);

const br16 = document.createElement("br");
skills_p.appendChild(br16);

const tr_edu = document.createElement("tr");
tr_edu.classList.add("education");
tbRight.appendChild(tr_edu);

const td_edu = document.createElement("td");
tr_edu.appendChild(td_edu);

const edu_p_1 = document.createElement("p");
edu_p_1.classList.add("tab2");
const edu_b_1 = document.createElement("b");
edu_b_1.innerText =
    "Education";
edu_p_1.appendChild(edu_b_1);
td_edu.appendChild(edu_p_1);

const br11 = document.createElement("br");
td_work.appendChild(br11);

const edu_p_2 = document.createElement("p");
edu_p_2.classList.add("tab3");
const edu_b_2 = document.createElement("b");
edu_p_2.innerText =
    "IIT-BHU";
td_edu.appendChild(edu_p_2);

const edu_p_3 = document.createElement("p");
edu_p_3.classList.add("tab3");
edu_p_3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
td_edu.appendChild(edu_p_3);
