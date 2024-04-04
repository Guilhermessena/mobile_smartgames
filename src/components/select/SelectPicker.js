import RNPickerSelect from 'react-native-picker-select';
import { splitStores } from '../Utils';

export default function SelectPicker({ item }) {
    const stores = splitStores(item);
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={
                stores.map((store) => (
                    { label: store.trim(), value: store.trim() }
                ))}
        />
    );
}