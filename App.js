import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EmailForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {

    const endpoint = 'https://prod-19.australiasoutheast.logic.azure.com:443/workflows/608fec1f088b43b5a6686a239e39127a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yalpLCe4WPMIHB1b4AjsGvECVm-Ra4rETuW5fFHqjL8';
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('Pestering successful');
      })
      .catch(error => {
        console.error(error);
        alert('There was a problem with something');
      });
  };

  const headingStyle = {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30
  };
  return (
<View style={{ paddingTop: 100, paddingLeft:20, paddingRight:20 }}>
<Text style={headingStyle}>New User</Text>
      <Text>Message:</Text>
      <TextInput
        style={{ height: 150, padding: 10, fontSize: 16 }}
        value={message}
        onChangeText={setMessage}
        autoCapitalize="none"
        autoCorrect={true}
        textAlignVertical="top"
      />
          <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default EmailForm;