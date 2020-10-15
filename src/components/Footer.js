import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function componentName(props) {
    const {calculate} = props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.buttonFooter} onPress={calculate}>
                <Text style={styles.textFooter}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFooter: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.WHITE,
        textAlign: 'center',
    },
    buttonFooter: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 50,
        width: '75%',
        padding: 10,
    },
});
