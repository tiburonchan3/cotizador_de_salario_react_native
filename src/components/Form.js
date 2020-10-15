import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
    const {setCapital, setInteres, setPlazo} = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.inputs}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="interes %"
                    style={[styles.inputs, styles.inputPercentage]}
                    keyboardType="numeric"
                    onChange={(e) => setInteres(e.nativeEvent.text)}
                />
            </View>
            <RNPickerSelect
                onValueChange={(value) => setPlazo(value)}
                placeholder={{
                    label: 'Selecciona un plazo',
                    value: null,
                }}
                items={[
                    {label: '3 Meses', value: '3'},
                    {label: '6 Meses', value: '6'},
                    {label: '12 Meses', value: '12'},
                    {label: '24 Meses', value: '24'},
                ]}
                style={pickerSelectStyle}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 25,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 160,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    inputs: {
        height: 40,
        backgroundColor: colors.WHITE,
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: colors.BLACK,
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: 'grey',
        borderRadius: 4,
        color: colors.BLACK,
        paddingRight: 30,
        backgroundColor: colors.WHITE,
    },
    inputAndroid: {
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        paddingVertical: 8,
        borderColor: 'grey',
        borderRadius: 8,
        color: colors.BLACK,
        paddingRight: 30,
        backgroundColor: colors.WHITE,
    },
});
