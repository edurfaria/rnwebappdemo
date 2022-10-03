import React from 'react';
import { Text, TextInput, TextStyle, View } from 'react-native';
import Fonts from '../../../theme/Fonts';
import { globalStyles } from '../../../theme/Styles';

interface ITextInputProps {
    label?: string,
    placeholder?: string,
    value: string,
    onChangeText: () => void,
    disable?: boolean,
    style?: TextStyle,
    styleLabel?: TextStyle,
}

const Input: React.FunctionComponent<ITextInputProps> = (props) => {
    return (
        <View>
            {props.label && <Text style={[globalStyles.InputLabel, props.styleLabel]}>{props.label}</Text>}
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={[globalStyles.InputTextInput, props.style]}
                editable={props.disable}
            />
        </View>
    )
};

export default Input;
