function Button({ text, disabled, action }) {

	if (disabled)
		return <button className="btn btn-danger" disabled> {text} </button>

	return <button className="btn btn-primary" onClick={action}> {text} </button>
}

export default Button