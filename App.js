import React, { useState, useEffect } from 'react';
import Axios from 'axios';





import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css"







function App() {


  const [FN, setFN] = useState('');
  const [LN, setLN] = useState('');
  const [MI, setMI] = useState('');
  const [HP, setHP] = useState('');
  const [CP, setCP] = useState('');
  const [HA, setHA] = useState('');
  const [HC, setHC] = useState('');
  const [HS, setHS] = useState('');
  const [HZ, setHZ] = useState('');
  const [WP, setWP] = useState('');
  const [WA, setWA] = useState('');
  const [WC, setWC] = useState('');
  const [WS, setWS] = useState('');
  const [WZ, setWZ] = useState('');
  const [BD, setBD] = useState('');


  const [UFN, setUFN] = useState('');
  const [ULN, setULN] = useState('');
  const [UMI, setUMI] = useState('');
  const [UHP, setUHP] = useState('');
  const [UCP, setUCP] = useState('');
  const [UHA, setUHA] = useState('');
  const [UHC, setUHC] = useState('');
  const [UHS, setUHS] = useState('');
  const [UHZ, setUHZ] = useState('');
  const [UWP, setUWP] = useState('');
  const [UWA, setUWA] = useState('');
  const [UWC, setUWC] = useState('');
  const [UWS, setUWS] = useState('');
  const [UWZ, setUWZ] = useState('');
  const [UBD, setUBD] = useState('');

  const [contactDetails, setContactDetails] = useState([]);

  const [searchResults, setsearchResults] = useState([]);

  const [searchName, setSearchName] = useState('');





  const updateRow = (UFN, ULN, UMI, UHP, UCP, UHA, UHC, UHS, UHZ, UWP, UWA, UWC, UWS, UWZ, UBD, firstname, lastname, middleinitial, homephone, cellphone, homeaddress, homecity, homestate, homezip, workphone, workaddress, workcity, workstate, workzip, birthdate, id) => {
    alert(UMI);
    if (UFN.length === 0) {
      UFN = firstname;
      
    }
    if (ULN.length === 0) {
      ULN = lastname;
      
    }
    if (UMI.length === 0) {
      UMI = middleinitial;
    }
    if (UHP.length === 0) {
      UHP = homephone;
    }
    if (UCP.length === 0) {
      UCP = cellphone;
    }
    if (UHA.length === 0) {
      UHA = homeaddress
    }
    if (UHC.length === 0) {
      UHC = homecity
    }
    if (UHS.length === 0) {
      UHS = homestate;
    }
    if (UHZ.length === 0) {
      UHZ = homezip;
    }
    if (UWP.length === 0) {
      UWP = workphone;
    }
    if (UWA.length === 0) {
      UWA = workaddress
    }
    if (UWC.length === 0) {
      UWC = workcity;

    }
    if (UWS.length === 0) {
      UWS = workstate;
    }
    if (UWZ.length === 0) {
      UWZ = workzip
    }
    if (UBD.length === 0) {
      UBD = birthdate
    }
    alert(id)
    alert(UFN)

    Axios.post("http://localhost:3002/api/update", { firstName: UFN, lastName: ULN, middleInitial: UMI, cellPhone: UCP, homePhone: UHP, homeAdddress: UHA, homeCity: UHC, homeState: UHS, homeZip: UHZ, workPhone: UWP, workAddress: UWA, workCity: UWC, workState: UWS, workZip: UWZ, birthDate: UBD, ID: id }).then(()=>{alert("Updated")});


  }

  const submitReview = () => {
    Axios.post("http://localhost:3002/api/insert", { firstName: FN, lastName: LN, middleInitial: MI, homePhone: HP, cellPhone: CP, homeAdddress: HA, homeCity: HC, homeState: HS, homeZip: HZ, workPhone: WP, workAddress: WA, workCity: WC, workState: WS, workZip: WZ, birthDate: BD }).then(() => { alert("success") });

  };
  const searchValue = () => {
    alert(searchName)
    Axios.post("http://localhost:3002/api/search", { Searchname: searchName }).then(() => { alert("Search value sent to server") });

  };
  const deletevalue = (id, name) => {
    alert(id);
    Axios.post("http://localhost:3002/api/delete", { deleteID: id }).then(() => { alert("Delete value sent to the server") });

  }

  useEffect(() => {
    Axios.get('http://localhost:3002/api/search').then((Response) => {
      setsearchResults(Response.data);
    })
  }, []);
  useEffect(() => {
    Axios.get('http://localhost:3002/api/get').then((Response) => {
      setContactDetails(Response.data);
    })
  }, []);



  return (



    <div className="App">





      <div className="forminput">
        <update />
        <h1 background='white'>CONTACTS APPLICATION</h1>
        <h2>INSERT REGION</h2>

        <label>First Name:-</label>
        <input type="text" name="FN" placeholder="Enter the FirstName" onChange={(e) => {
          setFN(e.target.value);
        }} />
        <hr></hr>
        <label>Last Name:-</label>
        <input type="text" name="LN" placeholder="Enter the LasttName" onChange={(e) => {
          setLN(e.target.value);
        }} />
        <hr></hr>
        <label>Middle Initial:-</label>
        <input type="text" name="MI" placeholder="Enter the MiddleInitial" onChange={(e) => {
          setMI(e.target.value);
        }} />
        <hr></hr>
        <label>Home Phone:-</label>
        <input type="text" name="HP" placeholder="Enter the Home Phone-Number" onChange={(e) => {
          setHP(e.target.value);
        }} />
        <hr></hr>
        <label>Cell Phone:-</label>
        <input type="text" name="CP" placeholder="Enter the Cell Phone-Number" onChange={(e) => {
          setCP(e.target.value);
        }} />
        <hr></hr>
        <label>Home Address:-</label>
        <input type="text" name="HA" placeholder="Enter the Home-Addressl" onChange={(e) => {
          setHA(e.target.value);
        }} />
        <hr></hr>
        <label>Home City:-</label>
        <input type="text" name="HC" placeholder="Enter the Home-City" onChange={(e) => {
          setHC(e.target.value);
        }} />
        <hr></hr>
        <label>Home State:-</label>
        <input type="text" name="HS" placeholder="Enter the Home-State" onChange={(e) => {
          setHS(e.target.value);
        }} />
        <hr></hr>
        <label>Home Zip:-</label>
        <input type="text" name="HZ" placeholder="Enter the Home-Zip" onChange={(e) => {
          setHZ(e.target.value);
        }} />
        <hr></hr>
        <label>Work Phone:-</label>
        <input type="text" name="WP" placeholder="Enter the Work-Phone-Number" onChange={(e) => {
          setWP(e.target.value);
        }} />
        <hr></hr>
        <label>Work Address:-</label>
        <input type="text" name="WA" placeholder="Enter the Work-Address" onChange={(e) => {
          setWA(e.target.value);
        }} />
        <hr></hr>
        <label>Work City:-</label>
        <input type="text" name="WC" placeholder="Enter the WorkCity" onChange={(e) => {
          setWC(e.target.value);
        }} />
        <hr></hr>
        <label>Work State:-</label>
        <input type="text" name="WS" placeholder="Enter the Work State" onChange={(e) => {
          setWS(e.target.value);
        }} />
        <hr></hr>
        <label>Work Zip:-</label>
        <input type="text" name="WZ" placeholder="Enter the WorkZip" onChange={(e) => {
          setWZ(e.target.value);
        }} />
        <hr></hr>
        <label>Birth Date:-</label>
        <input type="text" name="BD" placeholder="Enter the DOB" onChange={(e) => {
          setBD(e.target.value);
        }} />
        <hr></hr>
        <button onClick={submitReview}>Submit Details to add to the DB</button>
      </div>

      <div className="display">
        <div className="Search region">
          <h2>SEARCH REGION</h2>
          <label>Enter the firstname or Lastname to search the person:-</label>
          <input type="text" name="searchName" placeholder="Enter the FirstName/LastName" onChange={(e) => {
            setSearchName(e.target.value);
          }} />
          <button onClick={searchValue} >Search</button>

          <table className="table table-sm">
            <thead className="thead-dark">
              <tr><th>FirstName</th><th>Last name</th><th>Middle Initial</th><th>Home Phone</th><th>Cell Phone</th><th>Home Address</th><th>Home City</th><th>Home State</th><th>Home ZIP</th><th>Work Phone</th><th>Work Address</th><th>Work City</th><th>Work State</th><th>Work ZIP</th><th>DOB</th></tr>
            </thead>
            {searchResults.map((val) => {
              return <tr ><td contentEditable="true"><input defaultValue={val.firstname} contentEditable="true" onChange={(e) => { setUFN(e.target.value) }}></input></td><td><input defaultValue={val.lastname} contentEditable="true" onChange={(e) => { setULN(e.target.value) }}></input></td><td><input defaultValue={val.miidle_initial} contentEditable="true" onChange={(e) => { setUMI(e.target.value) }}></input></td><td><input defaultValue={val.home_phone} contentEditable="true" onChange={(e) => { setUHP(e.target.value) }}></input></td><td><input defaultValue={val.cell_phone} contentEditable="true" onChange={(e) => { setUCP(e.target.value) }}></input></td><td><input defaultValue={val.home_address} contentEditable="true" onChange={(e) => { setUHA(e.target.value) }}></input></td><td><input defaultValue={val.home_city} contentEditable="true" onChange={(e) => { setUHC(e.target.value) }}></input></td><td><input defaultValue={val.home_state} contentEditable="true" onChange={(e) => { setUHS(e.target.value) }}></input></td><td><input defaultValue={val.home_zip} contentEditable="true" onChange={(e) => { setUHZ(e.target.value) }}></input></td><td><input defaultValue={val.work_phone} contentEditable="true" onChange={(e) => { setUWP(e.target.value) }}></input></td><td><input defaultValue={val.work_address} contentEditable="true" onChange={(e) => { setUWA(e.target.value) }}></input></td><td><input defaultValue={val.work_city} contentEditable="true" onChange={(e) => { setUWC(e.target.value) }}></input></td><td><input defaultValue={val.work_state} contentEditable="true" onChange={(e) => { setUWS(e.target.value) }}></input></td><td><input defaultValue={val.work_zip} contentEditable="true" onChange={(e) => { setUWZ(e.target.value) }}></input></td><td><input defaultValue={val.birth_date} contentEditable="true" onChange={(e) => { setUBD(e.target.value) }}></input></td><button id={val.ID} onClick={() => deletevalue(val.ID)}>Delete</button><button onClick={() => updateRow(UFN, ULN, UMI, UHP, UCP, UHA, UHC, UHS, UHZ, UWP, UWA, UWC, UWS, UWZ, UBD, val.firstname, val.lastname, val.miidle_initial, val.home_phone,val.cell_phone, val.home_address, val.home_city, val.home_state, val.home_zip, val.work_phone, val.work_address, val.work_city, val.work_state, val.work_zip, val.birth_date,val.ID)}>UPDATE</button></tr>
            })}
          </table>

          <hr></hr>
        </div>
        <div className="tabledisplay">
          <h2><ul>DISPLAY REGION</ul></h2>
          <table className="table table-sm">
            <thead className="thead-dark">
              <tr><th>FirstName</th><th>Last name</th><th>Middle Initial</th><th>Home Phone</th><th>Cell Phone</th><th>Home Address</th><th>Home City</th><th>Home State</th><th>Home ZIP</th><th>Work Phone</th><th>Work Address</th><th>Work City</th><th>Work State</th><th>Work ZIP</th><th>DOB</th></tr>
            </thead>

            {contactDetails.map((val) => {
              return <tr ><td contentEditable="true"><input defaultValue={val.firstname} contentEditable="true" onChange={(e) => { setUFN(e.target.value) }}></input></td><td><input defaultValue={val.lastname} contentEditable="true" onChange={(e) => { setULN(e.target.value) }}></input></td><td><input defaultValue={val.miidle_initial} contentEditable="true" onChange={(e) => { setUMI(e.target.value) }}></input></td><td><input defaultValue={val.home_phone} contentEditable="true" onChange={(e) => { setUHP(e.target.value) }}></input></td><td><input defaultValue={val.cell_phone} contentEditable="true" onChange={(e) => { setUCP(e.target.value) }}></input></td><td><input defaultValue={val.home_address} contentEditable="true" onChange={(e) => { setUHA(e.target.value) }}></input></td><td><input defaultValue={val.home_city} contentEditable="true" onChange={(e) => { setUHC(e.target.value) }}></input></td><td><input defaultValue={val.home_state} contentEditable="true" onChange={(e) => { setUHS(e.target.value) }}></input></td><td><input defaultValue={val.home_zip} contentEditable="true" onChange={(e) => { setUHZ(e.target.value) }}></input></td><td><input defaultValue={val.work_phone} contentEditable="true" onChange={(e) => { setUWP(e.target.value) }}></input></td><td><input defaultValue={val.work_address} contentEditable="true" onChange={(e) => { setUWA(e.target.value) }}></input></td><td><input defaultValue={val.work_city} contentEditable="true" onChange={(e) => { setUWC(e.target.value) }}></input></td><td><input defaultValue={val.work_state} contentEditable="true" onChange={(e) => { setUWS(e.target.value) }}></input></td><td><input defaultValue={val.work_zip} contentEditable="true" onChange={(e) => { setUWZ(e.target.value) }}></input></td><td><input defaultValue={val.birth_date} contentEditable="true" onChange={(e) => { setUBD(e.target.value) }}></input></td><button id={val.ID} onClick={() => deletevalue(val.ID)}>Delete</button><button onClick={() => updateRow(UFN, ULN, UMI, UHP, UCP, UHA, UHC, UHS, UHZ, UWP, UWA, UWC, UWS, UWZ, UBD, val.firstname, val.lastname, val.miidle_initial, val.home_phone,val.cell_phone, val.home_address, val.home_city, val.home_state, val.home_zip, val.work_phone, val.work_address, val.work_city, val.work_state, val.work_zip, val.birth_date, val.ID) }>UPDATE</button></tr>
            })}
          </table>
        </div>

      </div>
    </div>




  );
}


export default App;
