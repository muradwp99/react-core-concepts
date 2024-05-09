/* eslint-disable react/prop-types */
// export default function Todo({task}){
//     return <li>Task: {task}</li>
// }
export default function Todo({task,isDone}){
    if(isDone){
        return <li>Task: {task}</li>
    }
    else
    {
        return <li>Try Again {task}</li>
    }
}