//your code here
async function fetchUser(){
	try{
	const response=await fetch('https://randomuser.me/api/');
    const data=await response.json();
	const user=data.results[0];
		document.getElementById("userName").textContent=`${user.name.first} ${user.name.last}`
	}
}