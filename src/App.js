import './App.css';
import Button from './components/Button'
import TaskStatus from './components/TaskStatus'
import ListItem from './components/ListItem'
import List from './components/List'
import Input from './components/Input'




function App() {

  return <div >
                
              <List></List> 
              <Input text="New to-do description" ></Input>
              <p>To-do list for Walter Bishop</p>
              <ListItem text ="Open portal to parallel universe"></ListItem>
              
              <Button text="Mark as done" disabled={false}></Button>
              
              <TaskStatus text="Pending"></TaskStatus>
              
             











                    
                          {/*<List></List>
                          <Input></Input> 
                          <ListItem></ListItem>
                          <Button text="Mark as done" disabled={false}></Button>
                          <TaskStatus text="Pending"></TaskStatus>
                          <TaskStatus text="Completed"></TaskStatus>*/}
                    
                    
             
              
        </div>
}

export default App; 