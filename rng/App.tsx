
import {StyleProp, ViewStyle, TextStyle, TextInput, Button} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

interface SectionHeaderProps {
  title: string;
  headerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}



function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

function SectionHeader({title, headerStyle, titleStyle}: SectionHeaderProps) {
  return (
    <View style={[styles.sectionHeaderContainer, headerStyle]}>
      <Text style={[styles.sectionHeaderTitle, titleStyle]}>{title}</Text>
    </View>
  );
}

const NumInput = () => {
  const [number, onChangeNumber] = React.useState('');
  const [randomNumber, setRandomNumber] = React.useState('');
  const generateRandomNumber = (max: number) => {
    const random = Math.floor(Math.random() * max) + 1;
    setRandomNumber(random.toString());
  };

  return (
    <SafeAreaView>
     
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Max Number"
        keyboardType="numeric"
      />
      <Button
        title="Generate"
        onPress={() => generateRandomNumber(parseInt(number))}
      />
      {randomNumber !== '' && (
        <Text style={styles.randomNumber}>{randomNumber}</Text>
      )}
    </SafeAreaView>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <SectionHeader title="Random Number Generator"></SectionHeader>
          <Section title="Pick a number">
            Edit <Text style={styles.highlight}> 75???</Text> LINE 75
          </Section>
          
          <NumInput></NumInput>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  sectionHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 40,
    
  },
  randomNumber : {
    color: "green",
    padding: 10,
    height: 80,
    fontSize: 50,
    fontWeight: '600',
    textAlign: "center",
  }
});

export default App;
