import './style.css';
const Form = ({ name, setName, submitForm }) => {
    console.log(name);
    return (
        <form onSubmit={submitForm}>
            <label>
                Todo name:
            </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="submit" />

        </form>
    )
}
export default Form;