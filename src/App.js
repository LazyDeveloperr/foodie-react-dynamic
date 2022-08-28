import './App.css';
import Invoice from './Components/Invoice';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import List from './Components/List';
import { useState } from 'react';
import { data } from 'autoprefixer';

function App() {

const [invoice, setInvoice] = useState([]);

const addItems = (data,count) => {
     let newInvoice = invoice.find((x)=> x.id === data.id);

     if (newInvoice === undefined){
      setInvoice([...invoice, {id:data.id, name:data.name, qty:count , price:data.price}]);
     }else{
      setInvoice(invoice.map((x)=> x.id === data.id ? {...x, qty:x.qty+count} : x ))
     }

}
 
const handleDelete = (data) => {
  let newArray = invoice;
  newArray.splice(newArray.findIndex( task => task.id === data.id ),1)
  setInvoice([...newArray])
}
  return(
  <>
    <Navbar />
    <div className="flex bg-black w-full pt-3 h-screen space-x-6 justify-between px-2">
    
    <div className="flex flex-row w-1/6 md:w-1/6">
      <div className="">
        <div className=" flex flex-row w-1/6 md:w-1/6 fixed">
           <List/>
         </div>
    </div>


    </div>
      <div className="flex w-5/6 md:w-5/6 rounded-md px-2">
            <div className="flex h-auto w-4/6 md:w-4/6 rounded-md bg-transparent">
              <Main  addItems={(data,count)=>addItems(data,count)}  />
            </div>
            <div className="w-2/6  pl-4">
                <div className="justify-center items-center">
                  <div className="fixed  bg-gray-700 flex flex-col md:w-1/4 h-5/6 rounded-xl">
                   <Invoice  invoice={invoice} handleDelete={(data)=>handleDelete(data)}/>
               </div>
            </div>
            </div>
      </div>
    </div>
  </>
  );
  }

export default App;