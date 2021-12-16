import { useState } from "react";
const Add_task = ({ add_task }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setreminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please enter task");
            return
        }
        add_task({ text, day, reminder })
        setText('')
        setDay('')
        setreminder(false)
    }
    return (
        <div>
            <form name="f1" className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Tasks</label>
                    <input type="text"
                        placeholder="Add Tasks"
                        value={text}
                        onChange={(e) => { setText(e.target.value) }} />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text"
                        placeholder="Add Day & Time"
                        value={day}
                        onChange={(e) => { setDay(e.target.value) }} />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e) => { setreminder(e.currentTarget.checked) }} />
                </div>
                <div className="form-control">
                    <label>Tasks</label>
                    <input type="submit" value="Save Tasks" className="btn btn-block" />
                </div>
            </form>
        </div>
    );
}
export default Add_task

