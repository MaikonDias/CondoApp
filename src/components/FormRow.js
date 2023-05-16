import React from 'react';
import {View, StyleSheet} from 'react-native';

const FormRow = (props) => {
    const { children } = props;

    return(
        <View style= {styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        padding: 20,
        elevation: 1,
        width: '100%',
    }
});

export default FormRow;