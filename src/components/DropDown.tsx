import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
type Props = {
	onChange: (value: string) => void;
};
function DropDown({ onChange }: Props) {
	return (
		<>
			<label htmlFor="drop-down" style={{ color: '#22271e', marginRight: '0.5rem' }}>
				Sort by
			</label>
			<Select
				size="small"
				name="drop-down"
				id="drop-down"
				onChange={(e) => onChange(e.target.value as string)}
				defaultValue="all"
			>
				<MenuItem value="all">All</MenuItem>
				<MenuItem value="a-z">A-Z</MenuItem>
			</Select>
		</>
	);
}
export default DropDown;
