
import "./styles.scss"

function Input({name, name2, name3, name4}){
    return(
        <div className="input__container">
            <select>
                <option value="test">{name}</option>
                <option value="test2">{name2}</option>
                <option value="test3">{name3}</option>
                <option value="test4">{name4}</option>
            </select>
        </div>
    )
}

export default Input