import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'



const TimeScreen = ()=>{
    const [tempoTotal, setTempoTotal] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=>{
        let interval

        if(running){
            interval = setInterval(()=>{
                setTempoTotal((prevTempoTotal)=> prevTempoTotal + 1)
            }, 100)
        }

        return ()=> clearInterval(interval)
    }, [running])

    const comecarSerie = ()=>{
        setRunning(false)
        setTempoTotal(0)
    }

    const descanso = ()=>{
        setRunning(true)
    }

    const obterMinutos = ()=> {
        const minutos = Math.floor(tempoTotal/60)
        return minutos < 10 ? `0${minutos}` : minutos
    }
    const segundos = ()=>{
        const segundos = tempoTotal % 60
        return segundos < 10 ? `0${segundos}` : segundos
    }


    return(
        <View style={styles.container}>
            {/* Cronometro */}
            <View style={styles.cronometroContainer}>
                <Text style={styles.cronometroText}>{obterMinutos()}:{segundos()}s</Text>
            </View>

            {/* botao */}
            <View style={styles.botoesContainer}>
                <TouchableOpacity style={styles.botaoComecarSerie} onPress={comecarSerie}>
                    <Text style={styles.textBotao}>Começar serie</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoDescanso} onPress={descanso}>
                    <Text style={styles.textBotao}>Descanso</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        gap: 100,
    },

    cronometroContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    cronometroText:{
        fontSize: 70,
        color: 'white'
    },

    botoesContainer: {
        flexDirection: 'row'
    },
    botaoComecarSerie: {
        margin: 5,
        padding: 20,
        backgroundColor: '#00a859',
        borderRadius: 100,

    },

    botaoDescanso:{
        margin: 5,
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 100,
    },

    textBotao: {
        color: 'white'
    }

})

export default TimeScreen