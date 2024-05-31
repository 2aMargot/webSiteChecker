import { useState } from "react";
import { Button, Text, View } from "react-native"


const Heure =() => {

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
            title="UpDate Time"
            onPress={update}
            />
        </View>
    )
}



export default Heure;