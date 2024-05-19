import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  // const itemTwoName="SurfExcel";

  const response = [
    {
      itemName:"Nirma",
      itemDate:"22",
      itemMonth:"june",
      itemYear:"2005"
    },

    {
      itemName:"SurfExcel",
      itemDate:"27",
      itemMonth:"july",
      itemYear:"2006"
    },
    {
      itemName:"Cinthol",
      itemDate:"21",
      itemMonth:"April",
      itemYear:"2008"
    }
  ];
  return (

    <div>

      <Card>
        <Item name={response[0].itemName}>Hello Ji main hun First Item</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate><Item name={response[2].itemName}></Item><ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
        <div className="App">Hello jee</div>

        
      </Card>

      {/* <Item name={response[0].itemName}></Item>
      Hello Ji main hun First Item
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
      
      <Item name={response[1].itemName}></Item>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
      
      <Item name={response[2].itemName}></Item> 
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      <div className="App">Hello jee</div> */}

    </div>

    
  );
}

export default App;
