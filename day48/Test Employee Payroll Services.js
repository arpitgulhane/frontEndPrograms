
const getElem = document.querySelector("#get_services") ;
const getURL = "http://127.0.0.1:3000/Emp10yeePayr011DB/1";

makeServiceCall("Get", getURL, true)
. then( responseText => {
getElem. textContent= "Get User Data:"+responseText;
})
. catch(error {
    getElem.textContent = "GET Error Status "+JSON.stringify(error);
})


const deleteElem = document.querySelector("#get_services") ;
const deleteURL = "http://127.0.0.1:3000/Emp10yeePayr011DB/1";

makeServiceCall("Get", deleteURL, true)
. then( responseText => {
    deleteElem. textContent= "Get User Data:"+responseText;
})
. catch(error {
    deleteElem.textContent = "GET Error Status "+JSON.stringify(error);
})


const empPayr011Data =
{
_name: 'Amarpa Shashanka Keerthi Kumar' ,
_gender:'female',
_department:[' Sales'],
_salary: '4000000',
_startDate:'29 Oct 2019',
_note: ''
_profilePic:'../assets/profite—images/Etlipse'
}

const postElem =document.querySelector("#post_service")
const postURL = "http://127.ø.ø.1:3øøø/Emp10yeePayr011DB/";
makeServiceCall =("Post",postURL, true, empPayrotIData)
.then( responseText {
        postEtem.textContent =  "New User Data:"+responseText;
})
.catch(error => {
    postElem.textContent = "Post Error Status : "+JSON.stringify(error);
})
