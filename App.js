/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {StyleSheet,SafeAreaView, Text,View,StatusBar} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';

export default function App(){
    const [capital, setCapital] = useState(null);
    const [interes, setInteres] = useState(null);
    const [plazo, setPlazo] = useState(null);
    const [total, setTotal] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        if (capital && plazo && interes){
            calculate();
        } else {
            reset();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [capital, plazo, interes]);
    const calculate = ()=>{
        reset();
        if (!capital){
            setErrorMessage('Agrega el capital');
        } else if (!interes){
            setErrorMessage('Agrega el interes');
        } else if (!plazo) {
            setErrorMessage('Selecciona el plazo');
        } else {
            const i = interes / 100;
            const fee = capital / ((1 - Math.pow(i + 1, -plazo)) / i);
            setTotal({
                momthlyFee : fee.toFixed(2).replace('.',','),
                total: (fee * plazo).toFixed(2).replace('.','.'),
            });
        }
    };
    const reset = ()=>{
        setErrorMessage('');
        setTotal(null);
    };
    return (
        <>
           <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.background}/>
                <Text style={styles.titleApp}>Cotizador de salario</Text>
                <Form
                    setCapital={setCapital}
                    setInteres={setInteres}
                    setPlazo={setPlazo}
                />
            </SafeAreaView>
            <Result
                errorMessage={errorMessage}
                total={total}
                capital={capital}
                interes={interes}
                plazo={plazo}
            />
            <Footer calculate={calculate} />
        </>
    );
}
const styles = StyleSheet.create({
    safeArea:{
        height:210,
        alignItems:'center',
    },
    background: {
        backgroundColor:colors.PRIMARY_COLOR,
        height: 160,
        width: '100%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        zIndex: -1,
        position: 'absolute',
    },
    titleApp:{
        fontSize:22,
        fontWeight:'bold',
        color:colors.WHITE,
    },
});
