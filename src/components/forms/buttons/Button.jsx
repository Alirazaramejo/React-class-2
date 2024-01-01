function Button({title, handler}){
    return(
        <button onClick={handler}>{title}</button>
    )
}

export default Button;