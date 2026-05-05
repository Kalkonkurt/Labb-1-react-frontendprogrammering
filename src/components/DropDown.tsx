type Props = {
	onChange: (value: string) => void;
};
function DropDown({ onChange }: Props) {
	return (
		<>
			<label htmlFor="drop-down">Sort by </label>
			<select name="drop-down" id="drop-down" onChange={(e) => console.log(e.target.value)}>
				<option value="all">All</option>
				<option value="a-z">A-Z</option>
			</select>
		</>
	);
}
export default DropDown;
