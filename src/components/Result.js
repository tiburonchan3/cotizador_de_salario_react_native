import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function componentName(props) {
    const {errorMessage, capital, interes, plazo, total} = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <DataResult
                        title="Cantidad solicitada"
                        value={`$${capital}`}
                    />
                    <DataResult title="Interes %" value={`${interes} %`} />
                    <DataResult title="Plazo" value={`${plazo} meses`} />
                    <DataResult
                        title="Pago Mensual"
                        value={`$${total.momthlyFee}`}
                    />
                    <DataResult
                        title="Total a pagar"
                        value={`$${total.total}`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const {title, value} = props;
    return (
        <View style={styles.values}>
            <Text>{title}:</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    error: {
        color: '#f00',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    values: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
});
