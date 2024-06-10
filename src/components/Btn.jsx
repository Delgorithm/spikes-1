function Btn({ text, style, onClick }) {
	return (
		<button className={style} onClick={onClick}>
			{text}
		</button>
	);
}

export default Btn;
