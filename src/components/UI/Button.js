import styles from './Button.module.css'

function Button (props) {
    const {onClick, children, tittle, disabled = false} = props;
    return (
        <button {...props} className={styles.button} onClick={onClick} title={tittle} disabled={disabled}>{children}</button>
    )
}

export default Button