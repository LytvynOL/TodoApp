import { useState } from "react"
import styles from "./Form.module.css"
import Button from "./UI/Button"


function Form({handlerList}) {
    const [text, setText] = useState('')
    const addTextHandler = (e) => {
        e.preventDefault()
        handlerList(text)
        setText('')
    }
   

    return (
      <div className={styles.todoFomContainer}>
      <form onSubmit={addTextHandler}>
        <input
          placeholder="Enter me"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type = "submit" tittle="Submit">Submit</Button>
      </form>
      </div>
    );
}

export default Form