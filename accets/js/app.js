const cl= console.log;

//step1
const alllis = [...document.querySelectorAll(".tabHeading li")];
const allTabContent = [...document.querySelectorAll(".tabContent")];

//alllis is array of document Object

//step3
const onTabHeadChange = eve =>{
	//alllis.forEach(li => li.classList.remove('active')); //classlist property work on do not on array so first we itarate by forEACH
	document.querySelector(".tabHeading li.active").classList.remove('active');
	eve.target.classList.add('active');
	let getId = eve.target.getAttribute('data-id');
	cl(getId);
	//allTabContent.forEach(tab => tab.classList.remove('active'));
	document.querySelector(".tabContent.active").classList.remove('active')
	document.getElementById(getId).classList.add("active");
}





//step2
alllis.forEach(li =>{
	cl(li)
	li.addEventListener("click", onTabHeadChange)
})



