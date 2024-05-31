import { useState } from "react";
import { Button, Text, View } from "react-native"


const Heure =() => {

    // let date = new Date();
    const [time, setTime]=useState(new Date());

    function update(){
        setTime(new Date());
    }

    return(
        <View>
            <Text>
                {time.toLocaleTimeString()}
            </Text>
            <Button
            title="Change Time"
            onPress={update}
            />
        </View>
    )
}



export default Heure;