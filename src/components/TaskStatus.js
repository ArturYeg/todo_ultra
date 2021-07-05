import './TaskStatus.css'

function TaskStatus(props){
    let style = "TaskStatus";
    if(props.text === "Completed"){
        style = "TaskStatusCompleted"
    }

    return <div className={style}>{props.text}</div>
}
export default TaskStatus;